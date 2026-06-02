#!python3.10
"""
為替レート取得スクリプト（毎月1日実行推奨）
open.er-api.com の無料APIからUSD基準レートを取得し、
円ベース（1通貨単位あたりの円換算）に変換して
public/data/fx_rates.json に保存する。

【Windowsタスクスケジューラ登録コマンド】（要管理者権限）
schtasks /create /tn "ShakaiFX_Update" /tr "\"C:\\Users\\Hintl\\AppData\\Local\\Programs\\Python\\Python310\\python.exe\" \"C:\\Users\\Hintl\\Desktop\\社会のトリセツ\\shakai-rules\\checker_fx.py\"" /sc monthly /d 1 /st 06:00 /f
"""

import sys
import json
import logging
import datetime
from pathlib import Path

try:
    import urllib.request
    import urllib.error
except ImportError:
    pass

# ── ログ設定 ──────────────────────────────────────────────────────────────────
BASE_DIR = Path(__file__).parent
LOG_PATH = BASE_DIR / "checker_fx.log"
OUT_PATH = BASE_DIR / "public" / "data" / "fx_rates.json"

logging.basicConfig(
    filename=str(LOG_PATH),
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    encoding="utf-8",
)

# ── 対象通貨リスト ────────────────────────────────────────────────────────────
TARGET_CURRENCIES = [
    "JPY", "USD", "EUR", "GBP", "KRW", "CNY", "INR", "AUD",
    "SAR", "THB", "SGD", "BRL", "NOK", "SEK", "CAD", "MXN",
    "RUB", "TRY", "VND", "IDR", "MYR", "PHP", "ZAR", "ARS",
    "HKD", "TWD", "CHF", "DKK",
]

# ── フォールバック（API取得失敗時の参照値） ────────────────────────────────────
FALLBACK_RATES = {
    "JPY": 1.0,    "USD": 150.5,  "EUR": 163.0,  "GBP": 191.0,
    "KRW": 0.1098, "CNY": 20.8,   "INR": 1.80,   "AUD": 97.5,
    "SAR": 40.1,   "THB": 4.17,   "SGD": 111.5,  "BRL": 28.5,
    "NOK": 14.1,   "SEK": 13.8,   "CAD": 110.5,  "MXN": 7.45,
    "RUB": 1.60,   "TRY": 4.30,   "VND": 0.00587,"IDR": 0.00930,
    "MYR": 32.5,   "PHP": 2.55,   "ZAR": 8.10,   "ARS": 0.155,
    "HKD": 19.3,   "TWD": 4.68,   "CHF": 168.0,  "DKK": 21.8,
}


def fetch_rates_from_api() -> dict:
    """
    open.er-api.com から USD 基準のレートを取得し、
    「1通貨単位あたりの円」形式に変換して返す。
    失敗時は None を返す。
    """
    url = "https://open.er-api.com/v6/latest/USD"
    logging.info(f"APIリクエスト: {url}")
    try:
        req = urllib.request.Request(
            url,
            headers={"User-Agent": "ShakaiFXChecker/1.0 (educational)"}
        )
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = json.loads(resp.read().decode("utf-8"))

        if data.get("result") != "success":
            logging.error(f"API応答エラー: {data}")
            return None

        raw = data["rates"]  # USD基準（USD=1）
        jpy_per_usd = raw.get("JPY", 0)
        if jpy_per_usd <= 0:
            logging.error("JPYレートが不正です")
            return None

        # Frankfurter / FX_RATES 互換フォーマット: 1 JPY = X [cur]
        # raw[X] = X_per_USD, jpy_per_usd = JPY_per_USD
        # → 1 JPY = raw[X] / jpy_per_usd [X]
        result = {}
        for cur in TARGET_CURRENCIES:
            x_per_usd = raw.get(cur)
            if x_per_usd and x_per_usd > 0:
                result[cur] = round(x_per_usd / jpy_per_usd, 8)
        result["JPY"] = 1.0  # 1 JPY = 1 JPY

        logging.info(f"レート取得成功: {len(result)}通貨  USD={jpy_per_usd:.2f}円")
        return result

    except urllib.error.URLError as e:
        logging.error(f"URL取得失敗: {e}")
        return None
    except Exception as e:
        logging.error(f"予期せぬエラー: {e}")
        return None


def should_update() -> bool:
    """
    最終更新が今月より前かどうか確認。
    --force フラグが付いている場合は常に更新。
    """
    if "--force" in sys.argv:
        return True

    if not OUT_PATH.exists():
        return True  # ファイルなければ必ず更新

    try:
        with open(OUT_PATH, encoding="utf-8") as f:
            existing = json.load(f)
        fetched_str = existing.get("fetched", "")
        if not fetched_str:
            return True
        fetched_dt = datetime.datetime.fromisoformat(fetched_str)
        now = datetime.datetime.now()
        # 同じ年・同じ月なら更新不要（--force がない限り）
        if fetched_dt.year == now.year and fetched_dt.month == now.month:
            logging.info(
                f"今月（{now.year}/{now.month}）は既に更新済み。スキップします。"
                f"（最終取得: {fetched_str}）"
            )
            return False
        return True
    except Exception:
        return True  # パース失敗なら更新する


def save_rates(rates: dict, updated_label: str):
    now_iso = datetime.datetime.now().isoformat()
    out = {
        "updated": updated_label,
        "source": "open.er-api.com",
        "fetched": now_iso,
        "note": "Frankfurter互換フォーマット: 1 JPY = X [通貨]  変換例: rates['USD']=0.00628 → 1円=0.00628ドル → 1ドル≒159円",
        "rates": rates,
    }
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    logging.info(f"保存完了: {OUT_PATH}")
    print(f"[OK] fx_rates.json を更新しました（{updated_label}）")


def main():
    logging.info("===== checker_fx.py 起動 =====")

    if not should_update():
        print("[SKIP] 今月は既に更新済みです。--force オプションで強制更新できます。")
        return

    now = datetime.datetime.now()
    label = now.strftime("%Y/%m/%d")

    rates = fetch_rates_from_api()
    if rates:
        save_rates(rates, label)
    else:
        logging.warning("API取得失敗。フォールバックレートを使用します。")
        print("[WARN] API取得失敗。フォールバック値を保存します。")
        save_rates(FALLBACK_RATES, f"{label}（フォールバック）")


if __name__ == "__main__":
    main()
