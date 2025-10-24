# =========================================
# MAKAUT CA4 Practice Portal Deployment
# PowerShell Deployment Script
# =========================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  MAKAUT CA4 Practice Portal" -ForegroundColor Yellow
Write-Host "  Deployment Script v2.0" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Navigate to project directory
Set-Location "d:\Self Projects\MCQ-Game-Portal-SEM-3\makaut-ca4-practice-portal"

Write-Host "[1/6] Checking Git status..." -ForegroundColor Green
git status
Write-Host ""

Write-Host "[2/6] Staging all changes..." -ForegroundColor Green
git add .
Write-Host "  ✓ All files staged" -ForegroundColor Green
Write-Host ""

Write-Host "[3/6] Committing changes..." -ForegroundColor Green
git commit -m "🎨 v2.0 - Complete UI/UX redesign with modern features

- Enhanced sidebar with skills, stats, and social links
- Modern gradient color scheme and animations
- Improved responsive design
- Professional documentation updates"
Write-Host "  ✓ Changes committed" -ForegroundColor Green
Write-Host ""

Write-Host "[4/6] Pushing to GitHub main branch..." -ForegroundColor Green
git push origin main
Write-Host "  ✓ Pushed to GitHub" -ForegroundColor Green
Write-Host ""

Write-Host "[5/6] Building production bundle..." -ForegroundColor Green
npm run build
Write-Host "  ✓ Build complete" -ForegroundColor Green
Write-Host ""

Write-Host "[6/6] Deploying to GitHub Pages..." -ForegroundColor Green
npm run deploy
Write-Host "  ✓ Deployed to GitHub Pages" -ForegroundColor Green
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  DEPLOYMENT COMPLETE! 🎉" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your website will be live in 2-5 minutes at:" -ForegroundColor White
Write-Host "https://pikumandal2005.github.io/makaut-ca4-practice-portal" -ForegroundColor Blue
Write-Host ""
Write-Host "Repository: https://github.com/pikumandal2005/makaut-ca4-practice-portal" -ForegroundColor Blue
Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
