# 🔧 Fix: PowerShell Execution Policy Error

## ❌ The Problem
You're seeing this error in PowerShell:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

## ✅ Solution: Use Command Prompt (CMD) Instead

**This is the EASIEST solution - no PowerShell needed!**

### Steps:

1. **Close PowerShell** (the window with the error)

2. **Open Command Prompt (CMD)**:
   - Press `Windows Key + R`
   - Type: `cmd`
   - Press Enter

3. **Navigate to your project**:
   ```cmd
   cd C:\Users\donth\OneDrive\Desktop\ht
   ```

4. **Start the server**:
   ```cmd
   npm start
   ```

**That's it!** CMD doesn't have execution policy restrictions, so npm will work perfectly.

---

## Alternative: Fix PowerShell (If you prefer PowerShell)

### Option 1: Change Execution Policy (Permanent Fix)

1. Open PowerShell as Administrator:
   - Right-click Start button
   - Select "Windows PowerShell (Admin)"

2. Run this command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

3. Type `Y` when asked to confirm

4. Close and reopen PowerShell

5. Try `npm start` again

### Option 2: Bypass for Current Session (Temporary)

In your current PowerShell window, run:
```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
npm start
```

This only works for the current PowerShell session.

---

## 🎯 Recommended: Just Use CMD

**Command Prompt (CMD) is simpler and doesn't have these restrictions!**

Just open CMD and run:
```cmd
cd C:\Users\donth\OneDrive\Desktop\ht
npm start
```

No errors, no hassle! ✅

