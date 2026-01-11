# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start the Backend Server
```bash
npm start
```

You should see:
```
🚀 Career Copilot Backend Server running on port 3000
📍 Health check: http://localhost:3000/health
📊 API endpoint: http://localhost:3000/api/analyze-career
```

### Step 3: Test the API

**Option A: Using the Frontend**
1. Open `index.html` in your browser (or use a local server like Live Server in VS Code)
2. Click the chat button (💬) in the bottom right corner
3. Type a message like: "I'm learning Python and interested in data science"
4. See your career recommendations!

**Option B: Using curl or Postman**
```bash
curl -X POST http://localhost:3000/api/analyze-career \
  -H "Content-Type: application/json" \
  -d '{"message": "I love coding in Python and want to work with data"}'
```

## 📝 Example Messages to Try

- "I'm a student learning JavaScript and React. I want to build web applications."
- "I love design and creating beautiful user interfaces. I use Figma."
- "I'm interested in cybersecurity and protecting systems."
- "I want to work with data and machine learning. I know Python."
- "I'm a beginner programmer looking for my first job in tech."

## 🔧 Troubleshooting

**Problem: Cannot connect to backend**
- Make sure the server is running: `npm start`
- Check if port 3000 is available
- Verify the URL in `main.js` matches your server (default: `http://localhost:3000`)

**Problem: CORS errors**
- The backend already has CORS enabled
- Make sure you're accessing the frontend from a proper server (not file://)

**Problem: No career recommendations**
- Try a more detailed message with specific skills
- Check the browser console for errors
- Verify the backend is receiving requests (check server logs)

## 📚 Next Steps

- Read the full [README.md](README.md) for detailed documentation
- Explore the API endpoints
- Customize the career database in `services/careerMatchingService.js`
- Add more skills and keywords in `services/careerAnalysisService.js`



