# 🔧 Fix npm Install Error - PowerShell Execution Policy

## Problem
You're seeing this error:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

## ✅ Solution 1: Change Execution Policy (Recommended)

Run PowerShell as Administrator and execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then try `npm install` again.

## ✅ Solution 2: Use Command Prompt Instead

1. Open **Command Prompt** (cmd) instead of PowerShell:
   - Press `Win + R`
   - Type `cmd` and press Enter

2. Navigate to your project:
   ```cmd
   cd C:\Users\donth\OneDrive\Desktop\ht
   ```

3. Run npm commands:
   ```cmd
   npm install
   npm start
   ```

## ✅ Solution 3: Bypass for Current Session

In PowerShell, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
npm install
```

This only affects the current PowerShell session.

## ✅ Solution 4: Use npx (Alternative)

If npm still doesn't work, you can try:
```powershell
npx --yes npm install
```

## 🎯 Quick Fix (Easiest)

**Just use Command Prompt (cmd) instead of PowerShell!**

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Run:
   ```cmd
   cd C:\Users\donth\OneDrive\Desktop\ht
   npm install
   npm start
   ```



