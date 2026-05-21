@echo off
chcp 65001 > nul
cd /d "%~dp0"
echo ==============================
echo   抓龙筋店铺展示页
echo ==============================
echo.
echo 正在启动...
echo.
echo 手机浏览器打开下方地址即可预览：
echo.
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr "IPv4"') do (
    set IP=%%a
    goto :found
)
:found
set IP=%IP:~1%
echo   http://%IP%:5173/
echo.
echo 按 Ctrl+C 关闭服务器
echo ==============================
echo.
call npx vite --host
pause
