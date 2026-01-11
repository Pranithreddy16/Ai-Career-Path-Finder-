const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const careerAnalysisService = require('./careerAnalysisService');
const careerMatchingService = require('./careerMatchingService');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Career Copilot API is running' });
});

// Main endpoint: Analyze user message and suggest career paths
app.post('/api/analyze-career', async (req, res) => {
  try {
    const { message, userId } = req.body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Message is required and must be a non-empty string'
      });
    }

    // Analyze the message to extract skills, interests, and goals
    const analysis = careerAnalysisService.analyzeMessage(message);

    // Match to career paths based on analysis
    const careerPaths = careerMatchingService.findCareerPaths(analysis);

    res.json({
      success: true,
      data: {
        analysis: {
          extractedSkills: analysis.skills,
          interests: analysis.interests,
          goals: analysis.goals,
          experienceLevel: analysis.experienceLevel
        },
        careerPaths: careerPaths,
        message: 'Career paths found successfully'
      }
    });
  } catch (error) {
    console.error('Error analyzing career:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while analyzing career path',
      message: error.message
    });
  }
});

// Endpoint to get all available career paths (for reference)
app.get('/api/careers', (req, res) => {
  try {
    const careers = careerMatchingService.getAllCareers();
    res.json({
      success: true,
      data: careers
    });
  } catch (error) {
    console.error('Error fetching careers:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error while fetching careers'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Career Copilot Backend Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`📊 API endpoint: http://localhost:${PORT}/api/analyze-career`);
});
app.get("/", (req, res) => {
  res.send("🚀 AI Career Path Finder API is Live");
});






