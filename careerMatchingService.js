/**
 * Career Matching Service
 * Matches user analysis to appropriate career paths
 */

// Career database with skills, interests, and requirements
const careerDatabase = [
  {
    id: 'backend-developer',
    title: 'Backend Developer',
    description: 'Build server-side applications, APIs, and databases. Work with server logic, databases, and system architecture.',
    requiredSkills: ['programming'],
    preferredSkills: ['programming', 'testing'],
    matchingInterests: ['technology', 'problemSolving'],
    experienceLevel: ['beginner', 'intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$60,000 - $150,000',
    growth: 'High',
    learningPath: [
      {
        step: 'Learn a backend language (Node.js, Python, Java)',
        resources: [
          { name: 'Node.js Official Docs', url: 'https://nodejs.org/docs' },
          { name: 'Python Tutorial', url: 'https://www.python.org/about/gettingstarted/' },
          { name: 'Java Tutorial', url: 'https://docs.oracle.com/javase/tutorial/' },
          { name: 'FreeCodeCamp Backend', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/' }
        ]
      },
      {
        step: 'Understand databases (SQL, NoSQL)',
        resources: [
          { name: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
          { name: 'MongoDB University', url: 'https://university.mongodb.com/' },
          { name: 'PostgreSQL Tutorial', url: 'https://www.postgresqltutorial.com/' },
          { name: 'Database Design', url: 'https://www.lucidchart.com/pages/database-diagram/database-design' }
        ]
      },
      {
        step: 'Learn API development (REST, GraphQL)',
        resources: [
          { name: 'REST API Tutorial', url: 'https://restfulapi.net/' },
          { name: 'GraphQL Docs', url: 'https://graphql.org/learn/' },
          { name: 'Postman Learning', url: 'https://learning.postman.com/' },
          { name: 'API Design Guide', url: 'https://www.freecodecamp.org/news/rest-api-design-best-practices/' }
        ]
      },
      {
        step: 'Study system design and architecture',
        resources: [
          { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
          { name: 'High Scalability', url: 'http://highscalability.com/' },
          { name: 'System Design Course', url: 'https://www.educative.io/courses/grokking-the-system-design-interview' }
        ]
      },
      {
        step: 'Build projects and contribute to open source',
        resources: [
          { name: 'GitHub Guides', url: 'https://guides.github.com/' },
          { name: 'First Contributions', url: 'https://firstcontributions.github.io/' },
          { name: 'Open Source Guide', url: 'https://opensource.guide/' },
          { name: 'Project Ideas', url: 'https://github.com/karan/Projects' }
        ]
      }
    ]
  },
  {
    id: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Create user interfaces and user experiences. Build responsive, interactive web applications.',
    requiredSkills: ['programming', 'design'],
    preferredSkills: ['programming', 'design'],
    matchingInterests: ['technology', 'creative'],
    experienceLevel: ['beginner', 'intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$55,000 - $140,000',
    growth: 'High',
    learningPath: [
      {
        step: 'Master HTML, CSS, and JavaScript',
        resources: [
          { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
          { name: 'JavaScript.info', url: 'https://javascript.info/' },
          { name: 'CSS-Tricks', url: 'https://css-tricks.com/' },
          { name: 'FreeCodeCamp Frontend', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' }
        ]
      },
      {
        step: 'Learn a framework (React, Vue, Angular)',
        resources: [
          { name: 'React Official Docs', url: 'https://react.dev/' },
          { name: 'Vue.js Guide', url: 'https://vuejs.org/guide/' },
          { name: 'Angular Tutorial', url: 'https://angular.io/tutorial' },
          { name: 'React Roadmap', url: 'https://roadmap.sh/react' }
        ]
      },
      {
        step: 'Understand responsive design',
        resources: [
          { name: 'Responsive Design Basics', url: 'https://web.dev/responsive-web-design-basics/' },
          { name: 'Flexbox Guide', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
          { name: 'Grid Guide', url: 'https://css-tricks.com/snippets/css/complete-guide-grid/' }
        ]
      },
      {
        step: 'Study UI/UX principles',
        resources: [
          { name: 'UI Design Principles', url: 'https://www.interaction-design.org/literature/topics/ui-design' },
          { name: 'UX Design Process', url: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/' },
          { name: 'Design Systems', url: 'https://www.designsystems.com/' }
        ]
      },
      {
        step: 'Build portfolio projects',
        resources: [
          { name: 'Portfolio Examples', url: 'https://www.freecodecamp.org/news/15-web-developer-portfolios-to-inspire-you-137fb1743cae/' },
          { name: 'GitHub Pages', url: 'https://pages.github.com/' },
          { name: 'Netlify', url: 'https://www.netlify.com/' }
        ]
      }
    ]
  },
  {
    id: 'fullstack-developer',
    title: 'Full Stack Developer',
    description: 'Work on both frontend and backend. Handle everything from database to user interface.',
    requiredSkills: ['programming'],
    preferredSkills: ['programming', 'design', 'testing'],
    matchingInterests: ['technology', 'problemSolving', 'creative'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$70,000 - $160,000',
    growth: 'Very High',
    learningPath: [
      {
        step: 'Master frontend technologies',
        resources: [
          { name: 'Frontend Course - YouTube', url: 'https://www.youtube.com/results?search_query=frontend+development+tutorial' },
          { name: 'React Tutorial', url: 'https://react.dev/learn' },
          { name: 'Frontend Roadmap', url: 'https://roadmap.sh/frontend' },
          { name: 'FreeCodeCamp Frontend', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' }
        ]
      },
      {
        step: 'Learn backend development',
        resources: [
          { name: 'Backend Course - YouTube', url: 'https://www.youtube.com/results?search_query=backend+development+tutorial' },
          { name: 'Node.js Tutorial', url: 'https://nodejs.org/docs' },
          { name: 'Backend Roadmap', url: 'https://roadmap.sh/backend' },
          { name: 'API Development', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/' }
        ]
      },
      {
        step: 'Understand databases and APIs',
        resources: [
          { name: 'Database Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=database+tutorial' },
          { name: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
          { name: 'REST API Guide', url: 'https://restfulapi.net/' },
          { name: 'MongoDB Tutorial', url: 'https://university.mongodb.com/' }
        ]
      },
      {
        step: 'Study DevOps and deployment',
        resources: [
          { name: 'DevOps Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=devops+tutorial' },
          { name: 'Docker Tutorial', url: 'https://docs.docker.com/get-started/' },
          { name: 'Deployment Guide', url: 'https://www.freecodecamp.org/news/how-to-deploy-a-full-stack-web-app/' }
        ]
      },
      {
        step: 'Build full-stack applications',
        resources: [
          { name: 'Full Stack Projects', url: 'https://www.freecodecamp.org/news/full-stack-project-ideas/' },
          { name: 'Project Ideas', url: 'https://github.com/karan/Projects' },
          { name: 'Full Stack Course', url: 'https://www.freecodecamp.org/learn/full-stack-developer/' }
        ]
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    description: 'Analyze complex data to extract insights. Use machine learning and statistics to solve business problems.',
    requiredSkills: ['data', 'programming'],
    preferredSkills: ['data', 'programming', 'research'],
    matchingInterests: ['research', 'problemSolving', 'technology'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$80,000 - $180,000',
    growth: 'Very High',
    learningPath: [
      {
        step: 'Learn Python and data libraries (Pandas, NumPy)',
        resources: [
          { name: 'Python Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=python+tutorial+for+beginners' },
          { name: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
          { name: 'NumPy Guide', url: 'https://numpy.org/learn/' },
          { name: 'FreeCodeCamp Python', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/' }
        ]
      },
      {
        step: 'Study statistics and mathematics',
        resources: [
          { name: 'Statistics Course - YouTube', url: 'https://www.youtube.com/results?search_query=statistics+for+data+science' },
          { name: 'Khan Academy Statistics', url: 'https://www.khanacademy.org/math/statistics-probability' },
          { name: 'Statistics Tutorial', url: 'https://www.w3schools.com/statistics/index.php' }
        ]
      },
      {
        step: 'Master machine learning algorithms',
        resources: [
          { name: 'ML Course - YouTube', url: 'https://www.youtube.com/results?search_query=machine+learning+tutorial' },
          { name: 'Scikit-learn Guide', url: 'https://scikit-learn.org/stable/user_guide.html' },
          { name: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/learn' },
          { name: 'Coursera ML Course', url: 'https://www.coursera.org/learn/machine-learning' }
        ]
      },
      {
        step: 'Learn data visualization tools',
        resources: [
          { name: 'Matplotlib Tutorial', url: 'https://matplotlib.org/stable/tutorials/index.html' },
          { name: 'Seaborn Guide', url: 'https://seaborn.pydata.org/tutorial.html' },
          { name: 'Plotly Documentation', url: 'https://plotly.com/python/' },
          { name: 'Data Viz Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=data+visualization+python' }
        ]
      },
      {
        step: 'Work on real-world data projects',
        resources: [
          { name: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets' },
          { name: 'Data Science Projects', url: 'https://www.kaggle.com/learn' },
          { name: 'GitHub Data Projects', url: 'https://github.com/topics/data-science' }
        ]
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    description: 'Collect, process, and analyze data to help organizations make data-driven decisions.',
    requiredSkills: ['data'],
    preferredSkills: ['data', 'programming'],
    matchingInterests: ['research', 'problemSolving'],
    experienceLevel: ['beginner', 'intermediate'],
    matchScore: 0,
    salaryRange: '$50,000 - $100,000',
    growth: 'High',
    learningPath: [
      {
        step: 'Learn Excel and SQL',
        resources: [
          { name: 'Excel Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=excel+tutorial+for+beginners' },
          { name: 'SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
          { name: 'Excel Functions Guide', url: 'https://support.microsoft.com/excel' },
          { name: 'SQL Course - FreeCodeCamp', url: 'https://www.freecodecamp.org/learn/relational-database/' }
        ]
      },
      {
        step: 'Study data visualization (Tableau, Power BI)',
        resources: [
          { name: 'Tableau Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=tableau+tutorial' },
          { name: 'Power BI Guide', url: 'https://learn.microsoft.com/en-us/power-bi/' },
          { name: 'Tableau Learning', url: 'https://www.tableau.com/learn' },
          { name: 'Data Viz Best Practices', url: 'https://www.tableau.com/learn/articles/data-visualization' }
        ]
      },
      {
        step: 'Learn Python or R basics',
        resources: [
          { name: 'Python Basics - YouTube', url: 'https://www.youtube.com/results?search_query=python+for+data+analysis' },
          { name: 'R Tutorial', url: 'https://www.w3schools.com/r/' },
          { name: 'Python for Data Analysis', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/' },
          { name: 'R Programming Course', url: 'https://www.coursera.org/learn/r-programming' }
        ]
      },
      {
        step: 'Understand statistical analysis',
        resources: [
          { name: 'Statistics Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=statistics+for+data+analysis' },
          { name: 'Statistical Analysis Guide', url: 'https://www.scribbr.com/statistics/' },
          { name: 'Statistics Course', url: 'https://www.khanacademy.org/math/statistics-probability' }
        ]
      },
      {
        step: 'Practice with real datasets',
        resources: [
          { name: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets' },
          { name: 'Data.gov', url: 'https://www.data.gov/' },
          { name: 'Google Dataset Search', url: 'https://datasetsearch.research.google.com/' }
        ]
      }
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    description: 'Design user interfaces and experiences. Create intuitive, beautiful, and functional designs.',
    requiredSkills: ['design'],
    preferredSkills: ['design', 'programming'],
    matchingInterests: ['creative', 'technology', 'people'],
    experienceLevel: ['beginner', 'intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$55,000 - $130,000',
    growth: 'High',
    learningPath: [
      {
        step: 'Learn design principles and theory',
        resources: [
          { name: 'UI/UX Design Course - YouTube', url: 'https://www.youtube.com/results?search_query=ui+ux+design+tutorial' },
          { name: 'Design Principles Guide', url: 'https://www.interaction-design.org/literature/topics/ui-design' },
          { name: 'Google UX Design Course', url: 'https://www.coursera.org/professional-certificates/google-ux-design' },
          { name: 'Design Theory Basics', url: 'https://www.freecodecamp.org/news/ui-ux-design-tutorial-from-zero-to-hero-with-wireframe-prototype-figma/' }
        ]
      },
      {
        step: 'Master design tools (Figma, Sketch, Adobe XD)',
        resources: [
          { name: 'Figma Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=figma+tutorial' },
          { name: 'Figma Learn', url: 'https://www.figma.com/learn' },
          { name: 'Adobe XD Tutorial', url: 'https://helpx.adobe.com/xd/tutorials.html' },
          { name: 'Sketch Guide', url: 'https://www.sketch.com/learn/' }
        ]
      },
      {
        step: 'Study user research methods',
        resources: [
          { name: 'UX Research - YouTube', url: 'https://www.youtube.com/results?search_query=ux+research+methods' },
          { name: 'User Research Guide', url: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/' },
          { name: 'Research Methods', url: 'https://www.interaction-design.org/literature/topics/user-research' }
        ]
      },
      {
        step: 'Learn prototyping and wireframing',
        resources: [
          { name: 'Prototyping Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=wireframing+prototyping+tutorial' },
          { name: 'Wireframing Guide', url: 'https://www.figma.com/resource-library/wireframing/' },
          { name: 'Prototyping Best Practices', url: 'https://www.interaction-design.org/literature/topics/prototyping' }
        ]
      },
      {
        step: 'Build a design portfolio',
        resources: [
          { name: 'Portfolio Examples', url: 'https://www.behance.net/' },
          { name: 'Dribbble', url: 'https://dribbble.com/' },
          { name: 'Portfolio Tips - YouTube', url: 'https://www.youtube.com/results?search_query=ux+designer+portfolio' }
        ]
      }
    ]
  },
  {
    id: 'cybersecurity-specialist',
    title: 'Cybersecurity Specialist',
    description: 'Protect systems and networks from cyber threats. Ensure data security and privacy.',
    requiredSkills: ['cybersecurity', 'programming'],
    preferredSkills: ['cybersecurity', 'programming', 'research'],
    matchingInterests: ['technology', 'problemSolving'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$70,000 - $150,000',
    growth: 'Very High',
    learningPath: [
      {
        step: 'Learn networking fundamentals',
        resources: [
          { name: 'Networking Course - YouTube', url: 'https://www.youtube.com/results?search_query=networking+fundamentals+tutorial' },
          { name: 'Network Basics', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/entry/ccna.html' },
          { name: 'CompTIA Network+', url: 'https://www.comptia.org/certifications/network' }
        ]
      },
      {
        step: 'Study security protocols and encryption',
        resources: [
          { name: 'Cybersecurity Course - YouTube', url: 'https://www.youtube.com/results?search_query=cybersecurity+tutorial' },
          { name: 'Encryption Guide', url: 'https://www.cloudflare.com/learning/ssl/what-is-encryption/' },
          { name: 'Security Protocols', url: 'https://www.freecodecamp.org/news/what-is-cybersecurity/' }
        ]
      },
      {
        step: 'Get certified (CEH, CISSP)',
        resources: [
          { name: 'CEH Certification', url: 'https://www.eccouncil.org/train-certify/certified-ethical-hacker-ceh/' },
          { name: 'CISSP Guide', url: 'https://www.isc2.org/certifications/cissp' },
          { name: 'Certification Prep - YouTube', url: 'https://www.youtube.com/results?search_query=CEH+CISSP+preparation' }
        ]
      },
      {
        step: 'Practice ethical hacking',
        resources: [
          { name: 'Hack The Box', url: 'https://www.hackthebox.com/' },
          { name: 'TryHackMe', url: 'https://tryhackme.com/' },
          { name: 'Ethical Hacking Course', url: 'https://www.freecodecamp.org/news/learn-ethical-hacking/' }
        ]
      },
      {
        step: 'Stay updated with security trends',
        resources: [
          { name: 'Security News', url: 'https://krebsonsecurity.com/' },
          { name: 'OWASP', url: 'https://owasp.org/' },
          { name: 'Security Blogs', url: 'https://www.schneier.com/' }
        ]
      }
    ]
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    description: 'Design, develop, and maintain software systems. Solve complex technical problems.',
    requiredSkills: ['programming'],
    preferredSkills: ['programming', 'testing', 'data'],
    matchingInterests: ['technology', 'problemSolving'],
    experienceLevel: ['beginner', 'intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$65,000 - $160,000',
    growth: 'Very High',
    learningPath: [
      {
        step: 'Master programming fundamentals',
        resources: [
          { name: 'Programming Basics - YouTube', url: 'https://www.youtube.com/results?search_query=programming+fundamentals+tutorial' },
          { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' },
          { name: 'Codecademy', url: 'https://www.codecademy.com/' },
          { name: 'Programming Tutorials', url: 'https://www.w3schools.com/' }
        ]
      },
      {
        step: 'Learn data structures and algorithms',
        resources: [
          { name: 'DSA Course - YouTube', url: 'https://www.youtube.com/results?search_query=data+structures+and+algorithms' },
          { name: 'LeetCode', url: 'https://leetcode.com/' },
          { name: 'GeeksforGeeks DSA', url: 'https://www.geeksforgeeks.org/data-structures/' },
          { name: 'Algorithms Course', url: 'https://www.coursera.org/specializations/data-structures-algorithms' }
        ]
      },
      {
        step: 'Study software engineering principles',
        resources: [
          { name: 'Software Engineering - YouTube', url: 'https://www.youtube.com/results?search_query=software+engineering+principles' },
          { name: 'Clean Code Book', url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' },
          { name: 'SOLID Principles', url: 'https://www.freecodecamp.org/news/solid-principles-explained-in-plain-english/' }
        ]
      },
      {
        step: 'Understand system design',
        resources: [
          { name: 'System Design - YouTube', url: 'https://www.youtube.com/results?search_query=system+design+interview' },
          { name: 'System Design Primer', url: 'https://github.com/donnemartin/system-design-primer' },
          { name: 'System Design Course', url: 'https://www.educative.io/courses/grokking-the-system-design-interview' }
        ]
      },
      {
        step: 'Build scalable applications',
        resources: [
          { name: 'Scalability Guide', url: 'https://www.freecodecamp.org/news/scalability-explained/' },
          { name: 'Architecture Patterns', url: 'https://martinfowler.com/architecture/' },
          { name: 'Building Projects', url: 'https://github.com/topics/scalable-architecture' }
        ]
      }
    ]
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    description: 'Test software to ensure quality. Find bugs and ensure applications work correctly.',
    requiredSkills: ['testing'],
    preferredSkills: ['testing', 'programming'],
    matchingInterests: ['problemSolving', 'technology'],
    experienceLevel: ['beginner', 'intermediate'],
    matchScore: 0,
    salaryRange: '$45,000 - $100,000',
    growth: 'High',
    learningPath: [
      {
        step: 'Learn testing methodologies',
        resources: [
          { name: 'QA Testing Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=software+testing+tutorial' },
          { name: 'Testing Fundamentals', url: 'https://www.guru99.com/software-testing.html' },
          { name: 'ISTQB Guide', url: 'https://www.istqb.org/' },
          { name: 'Testing Basics', url: 'https://www.freecodecamp.org/news/software-testing-basics/' }
        ]
      },
      {
        step: 'Study automation tools (Selenium, Cypress)',
        resources: [
          { name: 'Selenium Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=selenium+tutorial' },
          { name: 'Cypress Guide', url: 'https://docs.cypress.io/guides/getting-started/installing-cypress' },
          { name: 'Selenium Documentation', url: 'https://www.selenium.dev/documentation/' },
          { name: 'Test Automation Course', url: 'https://www.udemy.com/topic/selenium-webdriver/' }
        ]
      },
      {
        step: 'Understand test case design',
        resources: [
          { name: 'Test Case Design - YouTube', url: 'https://www.youtube.com/results?search_query=test+case+design' },
          { name: 'Test Design Techniques', url: 'https://www.guru99.com/test-case-design-techniques.html' },
          { name: 'Test Case Writing', url: 'https://www.softwaretestinghelp.com/test-case-writing/' }
        ]
      },
      {
        step: 'Learn programming basics',
        resources: [
          { name: 'Programming Basics - YouTube', url: 'https://www.youtube.com/results?search_query=programming+basics' },
          { name: 'Python for Testing', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/' },
          { name: 'JavaScript Basics', url: 'https://javascript.info/' }
        ]
      },
      {
        step: 'Practice testing real applications',
        resources: [
          { name: 'Testing Practice', url: 'https://the-internet.herokuapp.com/' },
          { name: 'Bug Reporting', url: 'https://www.guru99.com/bug-report.html' },
          { name: 'Test Projects', url: 'https://github.com/topics/software-testing' }
        ]
      }
    ]
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketer',
    description: 'Promote products and services online. Use SEO, social media, and content marketing.',
    requiredSkills: ['marketing'],
    preferredSkills: ['marketing', 'writing', 'data'],
    matchingInterests: ['creative', 'people', 'technology'],
    experienceLevel: ['beginner', 'intermediate'],
    matchScore: 0,
    salaryRange: '$40,000 - $90,000',
    growth: 'High',
    learningPath: [
      {
        step: 'Learn SEO and SEM fundamentals',
        resources: [
          { name: 'SEO Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=seo+tutorial+for+beginners' },
          { name: 'Google SEO Guide', url: 'https://developers.google.com/search/docs/beginner/seo-starter-guide' },
          { name: 'SEM Basics', url: 'https://www.wordstream.com/learn/what-is-sem' },
          { name: 'SEO Course', url: 'https://www.coursera.org/learn/seo-fundamentals' }
        ]
      },
      {
        step: 'Master social media marketing',
        resources: [
          { name: 'Social Media Marketing - YouTube', url: 'https://www.youtube.com/results?search_query=social+media+marketing+tutorial' },
          { name: 'Facebook Blueprint', url: 'https://www.facebook.com/business/learn' },
          { name: 'Social Media Guide', url: 'https://blog.hootsuite.com/social-media-marketing/' }
        ]
      },
      {
        step: 'Study content creation',
        resources: [
          { name: 'Content Marketing - YouTube', url: 'https://www.youtube.com/results?search_query=content+marketing+tutorial' },
          { name: 'Content Strategy', url: 'https://contentmarketinginstitute.com/articles/content-marketing-strategy/' },
          { name: 'Writing Guide', url: 'https://www.copyblogger.com/' }
        ]
      },
      {
        step: 'Understand analytics tools',
        resources: [
          { name: 'Google Analytics Course', url: 'https://analytics.google.com/analytics/academy/' },
          { name: 'Analytics Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=google+analytics+tutorial' },
          { name: 'Data Analysis', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/' }
        ]
      },
      {
        step: 'Build marketing campaigns',
        resources: [
          { name: 'Campaign Planning', url: 'https://blog.hubspot.com/marketing/marketing-campaign-plan' },
          { name: 'Marketing Tools', url: 'https://blog.hootsuite.com/free-marketing-tools/' },
          { name: 'Case Studies', url: 'https://www.marketingexamples.com/' }
        ]
      }
    ]
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    description: 'Guide product development from concept to launch. Coordinate between teams and stakeholders.',
    requiredSkills: ['business'],
    preferredSkills: ['business', 'programming', 'design'],
    matchingInterests: ['leadership', 'people', 'technology'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$80,000 - $180,000',
    growth: 'High',
    learningPath: [
      {
        step: 'Learn product management fundamentals',
        resources: [
          { name: 'Product Management - YouTube', url: 'https://www.youtube.com/results?search_query=product+management+tutorial' },
          { name: 'Google PM Course', url: 'https://www.coursera.org/professional-certificates/google-project-management' },
          { name: 'PM Guide', url: 'https://www.productplan.com/learn/product-management/' },
          { name: 'PM Basics', url: 'https://www.atlassian.com/agile/product-management' }
        ]
      },
      {
        step: 'Study user research and analytics',
        resources: [
          { name: 'User Research - YouTube', url: 'https://www.youtube.com/results?search_query=user+research+product+management' },
          { name: 'Analytics Guide', url: 'https://www.nngroup.com/articles/ux-research-cheat-sheet/' },
          { name: 'User Research Methods', url: 'https://www.interaction-design.org/literature/topics/user-research' }
        ]
      },
      {
        step: 'Understand business strategy',
        resources: [
          { name: 'Business Strategy - YouTube', url: 'https://www.youtube.com/results?search_query=business+strategy+tutorial' },
          { name: 'Strategy Guide', url: 'https://www.mckinsey.com/capabilities/strategy-and-corporate-finance' },
          { name: 'Business Basics', url: 'https://www.coursera.org/learn/wharton-business-foundations' }
        ]
      },
      {
        step: 'Learn agile methodologies',
        resources: [
          { name: 'Agile Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=agile+methodology+tutorial' },
          { name: 'Scrum Guide', url: 'https://scrumguides.org/scrum-guide.html' },
          { name: 'Agile Basics', url: 'https://www.atlassian.com/agile' }
        ]
      },
      {
        step: 'Build product portfolio',
        resources: [
          { name: 'Portfolio Guide', url: 'https://www.productplan.com/blog/product-manager-portfolio/' },
          { name: 'Case Studies', url: 'https://www.productplan.com/case-studies/' },
          { name: 'PM Examples', url: 'https://www.airbnb.com/resources' }
        ]
      }
    ]
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    description: 'Bridge development and operations. Automate deployment and infrastructure management.',
    requiredSkills: ['programming'],
    preferredSkills: ['programming', 'testing'],
    matchingInterests: ['technology', 'problemSolving'],
    experienceLevel: ['intermediate', 'advanced'],
    matchScore: 0,
    salaryRange: '$75,000 - $160,000',
    growth: 'Very High',
    learningPath: [
      {
        step: 'Learn Linux and command line',
        resources: [
          { name: 'Linux Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=linux+tutorial+for+beginners' },
          { name: 'Command Line Basics', url: 'https://www.freecodecamp.org/news/command-line-for-beginners/' },
          { name: 'Linux Guide', url: 'https://www.linux.org/forums/linux-beginner-tutorials.123/' },
          { name: 'Bash Scripting', url: 'https://www.freecodecamp.org/news/bash-scripting-tutorial/' }
        ]
      },
      {
        step: 'Master cloud platforms (AWS, Azure, GCP)',
        resources: [
          { name: 'AWS Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=aws+tutorial' },
          { name: 'AWS Training', url: 'https://aws.amazon.com/training/' },
          { name: 'Azure Learn', url: 'https://learn.microsoft.com/en-us/azure/' },
          { name: 'Google Cloud Training', url: 'https://cloud.google.com/training' }
        ]
      },
      {
        step: 'Study containerization (Docker, Kubernetes)',
        resources: [
          { name: 'Docker Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=docker+tutorial' },
          { name: 'Docker Docs', url: 'https://docs.docker.com/get-started/' },
          { name: 'Kubernetes Tutorial', url: 'https://kubernetes.io/docs/tutorials/' },
          { name: 'Kubernetes Course', url: 'https://www.freecodecamp.org/news/learn-kubernetes-in-under-3-hours/' }
        ]
      },
      {
        step: 'Learn CI/CD pipelines',
        resources: [
          { name: 'CI/CD Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=ci+cd+pipeline+tutorial' },
          { name: 'Jenkins Guide', url: 'https://www.jenkins.io/doc/' },
          { name: 'GitHub Actions', url: 'https://docs.github.com/en/actions' },
          { name: 'CI/CD Basics', url: 'https://www.freecodecamp.org/news/cicd-pipeline/' }
        ]
      },
      {
        step: 'Understand infrastructure as code',
        resources: [
          { name: 'Terraform Tutorial - YouTube', url: 'https://www.youtube.com/results?search_query=terraform+tutorial' },
          { name: 'Terraform Learn', url: 'https://learn.hashicorp.com/terraform' },
          { name: 'Ansible Guide', url: 'https://docs.ansible.com/' },
          { name: 'IaC Basics', url: 'https://www.freecodecamp.org/news/infrastructure-as-code-explained/' }
        ]
      }
    ]
  }
];

/**
 * Calculate match score for a career based on user analysis
 */
function calculateMatchScore(career, analysis) {
  let score = 0;

  // Check required skills (high weight)
  const hasRequiredSkills = career.requiredSkills.some(skill => 
    analysis.skills.includes(skill)
  );
  if (hasRequiredSkills) {
    score += 40;
  }

  // Check preferred skills (medium weight)
  const preferredSkillsMatch = career.preferredSkills.filter(skill => 
    analysis.skills.includes(skill)
  ).length;
  score += preferredSkillsMatch * 15;

  // Check matching interests (medium weight)
  const interestsMatch = career.matchingInterests.filter(interest => 
    analysis.interests.includes(interest)
  ).length;
  score += interestsMatch * 10;

  // Check experience level match (low weight)
  if (career.experienceLevel.includes(analysis.experienceLevel)) {
    score += 10;
  }

  // Bonus for multiple skill matches
  if (analysis.skills.length > 1 && preferredSkillsMatch > 1) {
    score += 5;
  }

  return Math.min(score, 100); // Cap at 100
}

/**
 * Find career paths based on user analysis
 */
function findCareerPaths(analysis) {
  // Calculate match scores for all careers
  const careersWithScores = careerDatabase.map(career => {
    const matchScore = calculateMatchScore(career, analysis);
    return {
      ...career,
      matchScore: matchScore
    };
  });

  // Sort by match score (descending)
  careersWithScores.sort((a, b) => b.matchScore - a.matchScore);

  // Helper function to normalize learning path format
  function normalizeLearningPath(path) {
    if (Array.isArray(path)) {
      return path.map(item => {
        if (typeof item === 'string') {
          // Old format: just a string, add default resources
          return {
            step: item,
            resources: [
              { name: 'Search on Google', url: `https://www.google.com/search?q=${encodeURIComponent(item)}` },
              { name: 'YouTube Tutorials', url: `https://www.youtube.com/results?search_query=${encodeURIComponent(item)}` },
              { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' }
            ]
          };
        }
        return item; // Already in new format
      });
    }
    return [];
  }

  // Return top 5 matches with match percentage
  const topMatches = careersWithScores
    .filter(career => career.matchScore > 0) // Only include careers with some match
    .slice(0, 5)
    .map(career => ({
      id: career.id,
      title: career.title,
      description: career.description,
      matchPercentage: career.matchScore,
      salaryRange: career.salaryRange,
      growth: career.growth,
      learningPath: normalizeLearningPath(career.learningPath),
      whyMatch: generateWhyMatch(career, analysis)
    }));

  return topMatches.length > 0 ? topMatches : [{
    id: 'general-software',
    title: 'Software Development',
    description: 'Based on your message, we recommend exploring software development careers. Start with learning programming fundamentals.',
    matchPercentage: 50,
    salaryRange: '$50,000 - $150,000',
    growth: 'High',
    learningPath: [
      {
        step: 'Learn programming basics (Python or JavaScript)',
        resources: [
          { name: 'Python.org Tutorial', url: 'https://www.python.org/about/gettingstarted/' },
          { name: 'JavaScript.info', url: 'https://javascript.info/' },
          { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' }
        ]
      },
      {
        step: 'Build small projects',
        resources: [
          { name: 'Project Ideas', url: 'https://github.com/karan/Projects' },
          { name: 'Build Your First App', url: 'https://www.freecodecamp.org/news/how-to-build-your-first-application/' }
        ]
      },
      {
        step: 'Explore different specializations',
        resources: [
          { name: 'Career Paths', url: 'https://roadmap.sh/' },
          { name: 'Tech Careers Guide', url: 'https://www.freecodecamp.org/news/coding-bootcamp-guide/' }
        ]
      },
      {
        step: 'Join developer communities',
        resources: [
          { name: 'GitHub', url: 'https://github.com/' },
          { name: 'Stack Overflow', url: 'https://stackoverflow.com/' },
          { name: 'Dev.to', url: 'https://dev.to/' }
        ]
      },
      {
        step: 'Continue learning and building',
        resources: [
          { name: 'Continuous Learning', url: 'https://www.freecodecamp.org/' },
          { name: 'Tech Blogs', url: 'https://dev.to/' }
        ]
      }
    ],
    whyMatch: 'Your message suggests interest in technology and problem-solving.'
  }];
}

/**
 * Generate explanation for why a career matches
 */
function generateWhyMatch(career, analysis) {
  const reasons = [];

  const matchingSkills = career.requiredSkills.filter(skill => 
    analysis.skills.includes(skill)
  );
  if (matchingSkills.length > 0) {
    reasons.push(`Your skills in ${matchingSkills.join(', ')} align with this role.`);
  }

  const matchingInterests = career.matchingInterests.filter(interest => 
    analysis.interests.includes(interest)
  );
  if (matchingInterests.length > 0) {
    reasons.push(`Your interests in ${matchingInterests.join(', ')} match this career.`);
  }

  if (career.experienceLevel.includes(analysis.experienceLevel)) {
    reasons.push(`This role is suitable for your ${analysis.experienceLevel} experience level.`);
  }

  return reasons.length > 0 ? reasons.join(' ') : 'This career path offers good growth opportunities.';
}

/**
 * Get all available careers
 */
function getAllCareers() {
  return careerDatabase.map(career => ({
    id: career.id,
    title: career.title,
    description: career.description,
    requiredSkills: career.requiredSkills,
    salaryRange: career.salaryRange,
    growth: career.growth
  }));
}

module.exports = {
  findCareerPaths,
  getAllCareers,
  calculateMatchScore
};



