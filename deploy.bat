@echo off
REM =========================================
REM  MAKAUT CA4 Practice Portal Deployment
REM  Automated Git Push and GitHub Pages Deploy
REM =========================================

echo.
echo ========================================
echo   MAKAUT CA4 Practice Portal
echo   Deployment Script v2.0
echo ========================================
echo.

REM Navigate to project directory
cd /d "d:\Self Projects\MCQ-Game-Portal-SEM-3\makaut-ca4-practice-portal"

echo [1/6] Checking Git status...
git status
echo.

echo [2/6] Staging all changes...
git add .
echo   ✓ All files staged
echo.

echo [3/6] Committing changes...
git commit -m "🎨 v2.0 - Complete UI/UX redesign with modern features - Enhanced sidebar with skills, stats, and social links - Modern gradient color scheme and animations - Improved responsive design - Professional documentation updates"
echo   ✓ Changes committed
echo.

echo [4/6] Pushing to GitHub main branch...
git push origin main
echo   ✓ Pushed to GitHub
echo.

echo [5/6] Building production bundle...
call npm run build
echo   ✓ Build complete
echo.

echo [6/6] Deploying to GitHub Pages...
call npm run deploy
echo   ✓ Deployed to GitHub Pages
echo.

echo ========================================
echo   DEPLOYMENT COMPLETE! 🎉
echo ========================================
echo.
echo Your website will be live in 2-5 minutes at:
echo https://pikumandal2005.github.io/makaut-ca4-practice-portal
echo.
echo Repository: https://github.com/pikumandal2005/makaut-ca4-practice-portal
echo.
echo Press any key to exit...
pause >nul
