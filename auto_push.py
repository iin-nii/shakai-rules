#!python3.10
"""
ファイル自動pushウォッチャー
public/*.html / app/**/*.tsx / app/**/*.ts が保存されるたびに
git commit + push する
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

# 監視対象ディレクトリと拡張子
WATCH_TARGETS = [
    (BASE_DIR / "public",   {".html"},        False),   # public/ html のみ 非再帰
    (BASE_DIR / "app",      {".tsx", ".ts"},  True),    # app/ tsx/ts 再帰
]

# 除外パターン（node_modules は watchdog の schedule 対象外なので基本不要だが念のため）
EXCLUDE_DIRS = {"node_modules", ".next", ".git", "__pycache__"}

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


class FileHandler(FileSystemEventHandler):
    def __init__(self, extensions: set[str]):
        self.extensions = extensions

    def _handle(self, path: Path):
        """変更・新規作成を共通処理"""
        if any(ex in path.parts for ex in EXCLUDE_DIRS):
            return
        if path.suffix.lower() not in self.extensions:
            return
        # デバウンス: 連続保存は最後の1回だけ処理
        key = str(path)
        if key in _timers:
            _timers[key].cancel()
        t = threading.Timer(DEBOUNCE_SEC, git_push, args=[path])
        _timers[key] = t
        t.start()

    def on_modified(self, event):
        if not event.is_directory:
            self._handle(Path(event.src_path))

    def on_created(self, event):
        """新規ファイル作成も検知（他スレッドでファイルを新たに作った場合）"""
        if not event.is_directory:
            self._handle(Path(event.src_path))


def main():
    observer = Observer()
    for watch_dir, exts, recursive in WATCH_TARGETS:
        if watch_dir.exists():
            handler = FileHandler(exts)
            observer.schedule(handler, str(watch_dir), recursive=recursive)
            logging.info(f"監視開始: {watch_dir.relative_to(BASE_DIR)} "
                         f"(拡張子: {', '.join(sorted(exts))}, 再帰: {recursive})")

    logging.info("ファイルを保存するたびに自動でgit pushします（Ctrl+Cで停止）")
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
