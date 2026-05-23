#!python3.10
"""
HTMLファイル自動pushウォッチャー
public/ 内の .html が保存されるたびに git commit + push する
"""

import sys
import time
import threading
import subprocess
import logging
from pathlib import Path

from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

BASE_DIR = Path(__file__).parent
PUBLIC_DIR = BASE_DIR / "public"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(BASE_DIR / "auto_push.log", encoding="utf-8"),
        logging.StreamHandler(sys.stdout),
    ],
)

# デバウンス用タイマー（連続保存で多重pushしないため）
_timers: dict[str, threading.Timer] = {}
DEBOUNCE_SEC = 3.0


def git_push(filepath: Path):
    rel = filepath.relative_to(BASE_DIR)
    logging.info(f"変更検知: {rel} → git push 開始")
    try:
        subprocess.run(
            ["git", "add", str(rel)],
            cwd=BASE_DIR, check=True, capture_output=True
        )
        msg = f"[自動] {rel.name} を更新"
        result = subprocess.run(
            ["git", "commit", "-m", msg],
            cwd=BASE_DIR, capture_output=True, text=True
        )
        if "nothing to commit" in result.stdout:
            logging.info("差分なし、pushをスキップ")
            return
        subprocess.run(
            ["git", "push"],
            cwd=BASE_DIR, check=True, capture_output=True
        )
        logging.info(f"push完了: {msg}")
    except subprocess.CalledProcessError as e:
        logging.error(f"gitエラー: {e.stderr or e}")


class HtmlHandler(FileSystemEventHandler):
    def on_modified(self, event):
        if event.is_directory:
            return
        path = Path(event.src_path)
        if path.suffix.lower() != ".html":
            return

        # デバウンス: 連続保存は最後の1回だけ処理
        key = str(path)
        if key in _timers:
            _timers[key].cancel()
        t = threading.Timer(DEBOUNCE_SEC, git_push, args=[path])
        _timers[key] = t
        t.start()


def main():
    logging.info(f"監視開始: {PUBLIC_DIR}")
    logging.info("HTMLを保存するたびに自動でgit pushします（Ctrl+Cで停止）")

    handler = HtmlHandler()
    observer = Observer()
    observer.schedule(handler, str(PUBLIC_DIR), recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        logging.info("停止中...")
        observer.stop()
    observer.join()
    logging.info("終了")


if __name__ == "__main__":
    main()
