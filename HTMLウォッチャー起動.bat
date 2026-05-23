@echo off
title HTML自動pushウォッチャー
echo public/ のHTMLが保存されるたびに自動でVercelに反映します
echo 停止: このウィンドウを閉じる or Ctrl+C
echo.
C:\Users\Hintl\AppData\Local\Programs\Python\Python310\python.exe "%~dp0auto_push.py"
pause
