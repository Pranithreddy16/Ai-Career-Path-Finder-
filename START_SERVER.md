# 🚀 How to Start the Backend Server

## Quick Start (3 Steps)

### Step 1: Open Terminal/Command Prompt
- **Windows**: Press `Win + R`, type `cmd` or `powershell`, press Enter
- **Mac/Linux**: Open Terminal
- Navigate to your project folder:
  ```bash
  cd C:\Users\donth\OneDrive\Desktop\ht
  ```

### Step 2: Install Dependencies (First Time Only)
If you haven't installed dependencies yet, run:
```bash
npm install
```
This will install all required packages (Express, CORS, etc.)

### Step 3: Start the Server
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
2. Go to: http://localhost:3000/health
3. You should see: `{"status":"ok","message":"Career Copilot API is running"}`

## 🎯 Now Test the AI Assistant

1. Open `index.html` in your browser
2. Click the chat button (💬) in the bottom-right corner
3. Type a message like: "I'm learning Python and interested in data science"
4. Click Send
5. You should see career recommendations!

## 🔧 Troubleshooting

**Problem: "npm is not recognized"**
- Solution: Install Node.js from https://nodejs.org/
- Restart your terminal after installation

**Problem: Port 3000 is already in use**
- Solution: Change the port in `.env` file or kill the process using port 3000

**Problem: "Cannot find module"**
- Solution: Run `npm install` again

## 📝 Alternative: Development Mode (Auto-reload)

For development with automatic restart on file changes:
```bash
npm run dev
```

## 🛑 To Stop the Server

Press `Ctrl + C` in the terminal where the server is running.



