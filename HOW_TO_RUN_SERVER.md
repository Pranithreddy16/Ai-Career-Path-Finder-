# 🚀 How to Run the Backend Server

## Quick Start (2 Steps)

### Step 1: Open Terminal/Command Prompt
- **Windows**: Press `Win + R`, type `cmd` or `powershell`, press Enter
- Navigate to your project folder:
  ```bash
  cd C:\Users\donth\OneDrive\Desktop\ht
  ```

### Step 2: Start the Server
Run this command:
```bash
npm start
```

You should see:
```
🚀 Career Copilot Backend Server running on port 3000
📍 Health check: http://localhost:3000/health
📊 API endpoint: http://localhost:3000/api/analyze-career
```

## ✅ Verify It's Working

1. Open your browser
2. Go to: **http://localhost:3000/health**
3. You should see: `{"status":"ok","message":"Career Copilot API is running"}`

## 📝 Complete Commands

```bash
# 1. Navigate to project folder
cd C:\Users\donth\OneDrive\Desktop\ht

# 2. Start the server
npm start
```

## 🎯 After Starting the Server

1. **Keep the terminal window open** - The server runs there
2. Open `index.html` in your browser
3. Click the chat button (💬) in the bottom-right corner
4. Type a message and get career recommendations!

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal where the server is running.

## 🔄 Alternative: Development Mode (Auto-reload)

For development with automatic restart on file changes:
```bash
npm run dev
```

## ⚠️ Troubleshooting

**Problem: "npm is not recognized"**
- Install Node.js from https://nodejs.org/
- Restart your terminal after installation

**Problem: Port 3000 is already in use**
- Another program is using port 3000
- Close that program or change the port in `.env` file

**Problem: "Cannot find module"**
- Run `npm install` first to install dependencies

**Problem: PowerShell execution policy error**
- Use Command Prompt (cmd) instead of PowerShell
- Or run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

## 📍 Server Endpoints

- **Health Check**: http://localhost:3000/health
- **Analyze Career**: http://localhost:3000/api/analyze-career (POST)
- **Get All Careers**: http://localhost:3000/api/careers (GET)


