/**
 * Career Analysis Service
 * Analyzes user messages to extract skills, interests, goals, and experience level
 */

// Keywords mapping for different categories
const skillKeywords = {
  programming: ['programming', 'coding', 'code', 'developer', 'software', 'python', 'javascript', 'java', 'c++', 'react', 'node', 'backend', 'frontend', 'fullstack', 'api', 'database', 'sql', 'git', 'github'],
  design: ['design', 'ui', 'ux', 'figma', 'photoshop', 'illustrator', 'sketch', 'wireframe', 'prototype', 'user experience', 'graphic design', 'visual design'],
  data: ['data', 'analytics', 'analysis', 'data science', 'machine learning', 'ai', 'artificial intelligence', 'statistics', 'excel', 'sql', 'python', 'pandas', 'numpy', 'tensorflow'],
  cybersecurity: ['security', 'cybersecurity', 'hacking', 'penetration testing', 'ethical hacking', 'network security', 'encryption', 'firewall', 'vulnerability'],
  marketing: ['marketing', 'digital marketing', 'seo', 'social media', 'content', 'advertising', 'branding', 'campaign', 'analytics'],
  business: ['business', 'management', 'strategy', 'finance', 'accounting', 'entrepreneurship', 'startup', 'consulting'],
  writing: ['writing', 'content writing', 'blogging', 'copywriting', 'technical writing', 'journalism'],
  testing: ['testing', 'qa', 'quality assurance', 'automation', 'selenium', 'test cases']
};

const interestKeywords = {
  technology: ['tech', 'technology', 'software', 'apps', 'web', 'mobile', 'innovation', 'startup'],
  creative: ['creative', 'art', 'design', 'visual', 'aesthetic', 'beautiful', 'creative work'],
  problemSolving: ['problem solving', 'challenges', 'puzzle', 'logic', 'algorithm', 'optimization'],
  people: ['people', 'team', 'collaboration', 'communication', 'helping', 'social'],
  research: ['research', 'analysis', 'investigation', 'study', 'explore', 'discover'],
  leadership: ['lead', 'leadership', 'manage', 'team lead', 'coordinate', 'organize']
};

const goalKeywords = {
  job: ['job', 'career', 'employment', 'work', 'position', 'role', 'hire', 'recruit'],
  internship: ['internship', 'intern', 'training', 'experience'],
  learning: ['learn', 'study', 'course', 'skill', 'improve', 'develop', 'grow'],
  switch: ['switch', 'change', 'transition', 'move', 'shift'],
  advance: ['advance', 'promotion', 'growth', 'progress', 'next level']
};

const experienceLevels = {
  beginner: ['beginner', 'new', 'start', 'learning', 'just started', 'no experience', 'student', 'fresh'],
  intermediate: ['intermediate', 'some experience', 'worked on', 'projects', 'familiar', 'know'],
  advanced: ['advanced', 'expert', 'experienced', 'years of experience', 'professional', 'senior']
};

/**
 * Extract skills from message
 */
function extractSkills(message) {
  const lowerMessage = message.toLowerCase();
  const foundSkills = [];

  for (const [category, keywords] of Object.entries(skillKeywords)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword)) {
        if (!foundSkills.includes(category)) {
          foundSkills.push(category);
        }
      }
    }
  }

  return foundSkills;
}

/**
 * Extract interests from message
 */
function extractInterests(message) {
  const lowerMessage = message.toLowerCase();
  const foundInterests = [];

  for (const [category, keywords] of Object.entries(interestKeywords)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword)) {
        if (!foundInterests.includes(category)) {
          foundInterests.push(category);
        }
      }
    }
  }

  return foundInterests;
}

/**
 * Extract goals from message
 */
function extractGoals(message) {
  const lowerMessage = message.toLowerCase();
  const foundGoals = [];

  for (const [category, keywords] of Object.entries(goalKeywords)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword)) {
        if (!foundGoals.includes(category)) {
          foundGoals.push(category);
        }
      }
    }
  }

  return foundGoals.length > 0 ? foundGoals : ['learning']; // Default to learning if no specific goal found
}

/**
 * Determine experience level from message
 */
function determineExperienceLevel(message) {
  const lowerMessage = message.toLowerCase();

  for (const [level, keywords] of Object.entries(experienceLevels)) {
    for (const keyword of keywords) {
      if (lowerMessage.includes(keyword)) {
        return level;
      }
    }
  }

  return 'beginner'; // Default to beginner
}

/**
 * Main analysis function
 */
function analyzeMessage(message) {
  if (!message || typeof message !== 'string') {
    throw new Error('Message must be a valid string');
  }

  const skills = extractSkills(message);
  const interests = extractInterests(message);
  const goals = extractGoals(message);
  const experienceLevel = determineExperienceLevel(message);

  return {
    skills: skills.length > 0 ? skills : ['general'], // Default if no skills found
    interests: interests.length > 0 ? interests : ['technology'], // Default interest
    goals: goals,
    experienceLevel: experienceLevel,
    originalMessage: message
  };
}

module.exports = {
  analyzeMessage,
  extractSkills,
  extractInterests,
  extractGoals,
  determineExperienceLevel
};



