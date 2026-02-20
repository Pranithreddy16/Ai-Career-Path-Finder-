# Career Copilot 

A backend API system that analyzes user messages to find personalized career paths based on skills, interests, and goals.

## Features

- 🎯 **Career Path Analysis**: Analyzes user messages to extract skills, interests, and goals
- 🔍 **Smart Matching**: Matches users to relevant career paths with match scores
- 📊 **Career Database**: Comprehensive database of 12+ career paths with details
- 🚀 **RESTful API**: Clean REST API endpoints for easy integration
- 💬 **Real-time Analysis**: Fast response times for career recommendations

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request parsing middleware

## Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd ht
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env
   ```
   Edit `.env` if you need to change the port (default is 3000).

4. **Start the server**
   ```bash
   npm start
   ```
   
   For development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Verify the server is running**
   - Open http://localhost:3000/health
   - You should see: `{"status":"ok","message":"Career Copilot API is running"}`

## API Endpoints

### 1. Health Check
```
GET /health
```
Returns server status.

**Response:**
```json
{
  "status": "ok",
  "message": "Career Copilot API is running"
}
```

### 2. Analyze Career Path
```
POST /api/analyze-career
```
Analyzes a user message and returns career path recommendations.

**Request Body:**
```json
{
  "message": "I'm a student learning Python and interested in data analysis. I want to work with machine learning.",
  "userId": "optional-user-id"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "analysis": {
      "extractedSkills": ["programming", "data"],
      "interests": ["technology", "research"],
      "goals": ["learning", "job"],
      "experienceLevel": "beginner"
    },
    "careerPaths": [
      {
        "id": "data-scientist",
        "title": "Data Scientist",
        "description": "Analyze complex data to extract insights...",
        "matchPercentage": 85,
        "salaryRange": "$80,000 - $180,000",
        "growth": "Very High",
        "learningPath": [
          "Learn Python and data libraries...",
          "Study statistics and mathematics..."
        ],
        "whyMatch": "Your skills in programming, data align with this role..."
      }
    ],
    "message": "Career paths found successfully"
  }
}
```

### 3. Get All Careers
```
GET /api/careers
```
Returns all available career paths in the database.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "backend-developer",
      "title": "Backend Developer",
      "description": "Build server-side applications...",
      "requiredSkills": ["programming"],
      "salaryRange": "$60,000 - $150,000",
      "growth": "High"
    }
  ]
}
```

## How It Works

1. **Message Analysis**: The system analyzes user messages to extract:
   - Skills (programming, design, data, etc.)
   - Interests (technology, creative, problem-solving, etc.)
   - Goals (job, internship, learning, etc.)
   - Experience level (beginner, intermediate, advanced)

2. **Career Matching**: Uses a scoring algorithm to match users to careers based on:
   - Required skills match (40 points)
   - Preferred skills match (15 points each)
   - Interest alignment (10 points each)
   - Experience level match (10 points)

3. **Recommendations**: Returns top 5 career matches with:
   - Match percentage
   - Career description
   - Salary range
   - Growth potential
   - Learning path
   - Explanation of why it matches

## Frontend Integration

The frontend is already integrated! The AI chat widget and contact form can send messages to the backend.

**To test:**
1. Start the backend server: `npm start`
2. Open `index.html` in a browser (or use a local server)
3. Click the chat button (💬) in the bottom right
4. Type a message like: "I love coding in Python and want to work with data"
5. See your career recommendations!

## Example Messages

Try these example messages to test the system:

- "I'm learning JavaScript and React. I want to build web applications."
- "I love design and creating beautiful user interfaces. I use Figma."
- "I'm interested in cybersecurity and protecting systems from hackers."
- "I want to work with data and machine learning. I know Python."
- "I'm a beginner programmer looking for my first job in tech."

## Project Structure

```
ht/
├── server.js                    # Main server file
├── package.json                 # Dependencies
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore file
├── services/
│   ├── careerAnalysisService.js    # Message analysis logic
│   └── careerMatchingService.js    # Career matching algorithm
├── index.html                   # Frontend homepage
├── contact.html                 # Contact page
├── main.js                      # Frontend JavaScript
└── README.md                    # This file
```

## Future Enhancements

- [ ] Integration with OpenAI API for more advanced NLP
- [ ] User authentication and profile storage
- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] Machine learning model for better matching
- [ ] Career path tracking and progress
- [ ] Job market data integration
- [ ] Learning resource recommendations

## Author 
Pranith Reddy





