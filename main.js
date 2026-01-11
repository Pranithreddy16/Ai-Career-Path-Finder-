// Initialize when DOM is ready
function initializeApp() {
    initNavigation();
    initSearch();
    initSmoothScroll();
    initAIChatWidget();
    initContactForm();
}

// Run on DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    // DOM is already loaded
    initializeApp();
}

// Navigation
function initNavigation() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('text-primary', 'font-semibold'));
            this.classList.add('text-primary', 'font-semibold');
        });
    });
}

// Search
function initSearch() {
    const searchInput = document.getElementById('searchInput');

    if (!searchInput) return;

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch(e.target.value);
        }
    });
}

function performSearch(query) {
    if (!query.trim()) return;
    alert(`Searching careers for "${query}"... (Demo)`);
}

// Smooth scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// AI Chat button
function initAIChatWidget() {
    // Wait a bit to ensure body exists
    if (!document.body) {
        setTimeout(initAIChatWidget, 100);
        return;
    }

    // Check if button already exists
    const existingButton = document.querySelector('[data-ai-chat-button]');
    if (existingButton) {
        console.log('AI Chat button already exists');
        return; // Button already exists
    }

    // Hide fallback button if it exists
    const fallbackButton = document.getElementById('ai-chat-button-fallback');
    if (fallbackButton) {
        fallbackButton.style.display = 'none';
    }

    const aiButton = document.createElement('button');
    aiButton.setAttribute('data-ai-chat-button', 'true');
    aiButton.setAttribute('type', 'button');
    aiButton.innerHTML = `
        <div class="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 relative">
            <span style="font-size: 28px;">💬</span>
            <div class="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        </div>
    `;
    aiButton.className = 'fixed bottom-6 right-6 z-50 focus:outline-none focus:ring-4 focus:ring-primary/50 cursor-pointer';
    aiButton.setAttribute('aria-label', 'Ask AI Career Assistant');
    aiButton.setAttribute('title', 'Click to get career recommendations based on your message');
    
    // Ensure button is visible with inline styles
    aiButton.style.cssText = `
        position: fixed !important;
        bottom: 24px !important;
        right: 24px !important;
        z-index: 9999 !important;
        display: block !important;
        background: transparent !important;
        border: none !important;
        padding: 0 !important;
        cursor: pointer !important;
        visibility: visible !important;
        opacity: 1 !important;
    `;
    
    aiButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        openAIChat();
    });
    
    document.body.appendChild(aiButton);
    
    // Log for debugging
    console.log('✅ AI Chat button created and added to page', aiButton);
    console.log('Button position:', aiButton.getBoundingClientRect());
}

function openAIChat() {
    const existing = document.querySelector('[data-ai-chat-modal]');
    if (existing) {
        existing.remove();
        return;
    }

    const modal = document.createElement('div');
    modal.setAttribute('data-ai-chat-modal', 'true');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
            <div class="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                <div class="p-6 border-b border-gray-200">
                    <div class="flex items-center space-x-3 mb-2">
                        <div class="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-xl">
                            🤖
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">AI Career Assistant</h3>
                            <p class="text-gray-600 text-sm">Tell us about your skills, interests, and goals to discover your career path.</p>
                        </div>
                    </div>
                    <button type="button" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600" aria-label="Close">
                        ✕
                    </button>
                </div>
                <div class="p-6 space-y-4">
                    <div id="chat-messages" class="space-y-4 max-h-96 overflow-y-auto mb-4">
                        <div class="bg-blue-50 rounded-xl p-4 text-sm text-gray-700">
                            👋 Hi! Share your skills, interests, or career goals, and I'll help you find the perfect career path. For example: "I love coding in Python and want to work with data" or "I'm interested in design and creating beautiful user interfaces."
                        </div>
                        <div id="backend-status" class="hidden"></div>
                    </div>
                    <div class="flex gap-2">
                        <input 
                            type="text" 
                            id="career-message-input"
                            placeholder="E.g., I'm a student learning Python and interested in data analysis..." 
                            class="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        >
                        <button 
                            type="button" 
                            id="send-career-message"
                            class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                            Send
                        </button>
                    </div>
                    <div id="loading-indicator" class="hidden text-center text-gray-500 text-sm">
                        Analyzing your message...
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const closeBtn = modal.querySelector('button[aria-label="Close"]');
    closeBtn.addEventListener('click', () => modal.remove());
    
    const sendBtn = modal.querySelector('#send-career-message');
    const input = modal.querySelector('#career-message-input');
    const messagesContainer = modal.querySelector('#chat-messages');
    const loadingIndicator = modal.querySelector('#loading-indicator');
    const statusDiv = modal.querySelector('#backend-status');
    
    // Check backend status when modal opens
    checkBackendStatus(statusDiv);
    
    // Handle Enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
        }
    });
    
    // Close on background click
    modal.querySelector('.fixed').addEventListener('click', function(e) {
        if (e.target === this) {
            modal.remove();
        }
    });
    
    // Handle send button
    sendBtn.addEventListener('click', async function() {
        const message = input.value.trim();
        if (!message) return;
        
        // Add user message to chat
        const userMessage = document.createElement('div');
        userMessage.className = 'bg-gray-100 rounded-xl p-4 text-sm text-gray-800 ml-8';
        userMessage.textContent = message;
        messagesContainer.appendChild(userMessage);
        
        // Clear input and show loading
        input.value = '';
        sendBtn.disabled = true;
        loadingIndicator.classList.remove('hidden');
        
        try {
            // Call backend API
            const response = await fetch('http://localhost:3000/api/analyze-career', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: message })
            });
            
            // Check if response is ok
            if (!response.ok) {
                throw new Error(`Server error: ${response.status} ${response.statusText}`);
            }
            
            // Parse JSON response
            let data;
            try {
                data = await response.json();
            } catch (parseError) {
                throw new Error('Invalid response from server. Please check if the backend is running correctly.');
            }
            
            if (data.success) {
                // Display career recommendations
                const botMessage = document.createElement('div');
                botMessage.className = 'space-y-4';
                
                let html = '<div class="bg-green-50 rounded-xl p-4 text-sm text-gray-700">';
                html += '<div class="font-semibold mb-2">🎯 Career Path Recommendations:</div>';
                
                if (data.data && data.data.careerPaths && data.data.careerPaths.length > 0) {
                    data.data.careerPaths.forEach((career, index) => {
                        const careerDataStr = JSON.stringify(career).replace(/"/g, '&quot;');
                        html += `<div class="mb-4 p-4 bg-white rounded-xl border-2 border-green-200 shadow-md hover:shadow-lg transition-all cursor-pointer career-option" data-career-data="${careerDataStr}">`;
                        html += `<div class="flex items-start justify-between mb-2">`;
                        html += `<div class="flex-1">`;
                        html += `<div class="flex items-center gap-2 mb-1">`;
                        html += `<span class="text-lg font-bold text-primary">${index + 1}.</span>`;
                        html += `<h4 class="text-lg font-bold text-gray-900">${career.title}</h4>`;
                        html += `<span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">${career.matchPercentage}% Match</span>`;
                        html += `</div>`;
                        html += `<p class="text-sm text-gray-700 mb-3">${career.description}</p>`;
                        html += `</div>`;
                        html += `</div>`;
                        html += `<div class="grid grid-cols-2 gap-2 mb-3 text-xs">`;
                        html += `<div class="flex items-center text-gray-600"><span class="mr-1">💼</span><strong>Salary:</strong> ${career.salaryRange}</div>`;
                        html += `<div class="flex items-center text-gray-600"><span class="mr-1">📈</span><strong>Growth:</strong> ${career.growth}</div>`;
                        html += `</div>`;
                        html += `<div class="bg-blue-50 rounded-lg p-2 mb-3">`;
                        html += `<div class="text-xs font-semibold text-gray-800 mb-1">✨ Why this matches:</div>`;
                        html += `<div class="text-xs text-gray-700">${career.whyMatch || 'This career matches your profile.'}</div>`;
                        html += `</div>`;
                        html += `<div class="mt-3 pt-3 border-t border-gray-200">`;
                        html += `<button class="w-full px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:shadow-lg transition-all text-sm view-roadmap-btn">🗺️ View Learning Roadmap</button>`;
                        html += `</div>`;
                        html += `</div>`;
                    });
                } else {
                    html += '<div class="text-gray-600 p-3 bg-yellow-50 rounded-lg border border-yellow-200">No specific career paths found. Try providing more details about your skills and interests. For example: "I\'m learning Python and want to work with data" or "I love design and creating user interfaces."</div>';
                }
                
                html += '</div>';
                botMessage.innerHTML = html;
                messagesContainer.appendChild(botMessage);
                
                // Add click handlers for career options
                botMessage.querySelectorAll('.career-option').forEach(option => {
                    option.addEventListener('click', function() {
                        const careerData = JSON.parse(this.getAttribute('data-career-data'));
                        showCareerRoadmap(careerData);
                    });
                });
            } else {
                throw new Error(data.error || 'Failed to analyze career path');
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = document.createElement('div');
            errorMessage.className = 'bg-red-50 rounded-xl p-4 text-sm text-red-700';
            
            let errorText = '❌ Error: ';
            if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                errorText += 'Cannot connect to the backend server. ';
                errorText += 'Please make sure the server is running on http://localhost:3000. ';
                errorText += 'Run "npm start" in the project directory to start the server.';
            } else if (error.message.includes('Server error')) {
                errorText += error.message;
            } else {
                errorText += error.message;
            }
            
            errorMessage.innerHTML = `
                <div class="font-semibold mb-2">${errorText}</div>
                <div class="text-xs text-red-600 mt-2">
                    💡 <strong>Quick Fix:</strong> Open a terminal, navigate to the project folder, and run: <code class="bg-red-100 px-2 py-1 rounded">npm start</code>
                </div>
            `;
            messagesContainer.appendChild(errorMessage);
        } finally {
            sendBtn.disabled = false;
            loadingIndicator.classList.add('hidden');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    });
    
    document.body.appendChild(modal);
}

// Check if backend server is running
async function checkBackendStatus(statusDiv) {
    try {
        // Create a timeout promise
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Timeout')), 3000)
        );
        
        // Race between fetch and timeout
        const response = await Promise.race([
            fetch('http://localhost:3000/health', { method: 'GET' }),
            timeoutPromise
        ]);
        
        if (response.ok) {
            statusDiv.className = 'bg-green-50 rounded-xl p-3 text-xs text-green-700';
            statusDiv.innerHTML = '✅ Backend server is connected and ready!';
            statusDiv.classList.remove('hidden');
        } else {
            throw new Error('Server returned error');
        }
    } catch (error) {
        statusDiv.className = 'bg-yellow-50 rounded-xl p-3 text-xs text-yellow-700';
        statusDiv.innerHTML = `
            ⚠️ <strong>Backend server not detected.</strong> Make sure to run <code class="bg-yellow-100 px-1 rounded">npm start</code> in the project directory.
        `;
        statusDiv.classList.remove('hidden');
    }
}

// Contact form validation and automatic career analysis
function initContactForm() {
    const forms = document.querySelectorAll('form:not(.no-validate)');
    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            const message = form.querySelector('textarea');
            const submitButton = form.querySelector('button[type="submit"]');

            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                alert('Please enter a valid email address');
                return;
            }

            if (message && !message.value.trim()) {
                alert('Please share your message');
                return;
            }

            // Disable submit button and show loading
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Analyzing...';

            try {
                // Automatically analyze the message for career paths
                    const response = await fetch('http://localhost:3000/api/analyze-career', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ message: message.value })
                    });
                    
                    const data = await response.json();
                    
                if (data.success && data.data.careerPaths && data.data.careerPaths.length > 0) {
                    // Display career recommendations directly on the page
                    displayCareerResultsOnPage(data.data.careerPaths);
                    } else {
                    // Show success message even if no specific careers found
                    showSuccessMessage('Thank you! Your message has been received.');
                    }
                
                // Reset form after showing results
                form.reset();
                } catch (error) {
                    console.error('Career analysis error:', error);
                // Still show success message even if analysis fails
                showSuccessMessage('Thank you! Your message has been received. We\'ll get back to you soon.');
            } finally {
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    });
}

// Display career results directly on the page
function displayCareerResultsOnPage(careerPaths) {
    const resultsContainer = document.getElementById('career-recommendations');
    
    if (!resultsContainer) {
        console.error('Career recommendations container not found');
        return;
    }

    let careersHTML = `
        <div class="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/20 shadow-xl">
            <div class="text-center mb-8">
                <h2 class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-3">
                    🎯 Your Career Path Recommendations
                </h2>
                <p class="text-gray-600 text-lg">Based on your message, here are the best career matches for you:</p>
            </div>
            <div class="space-y-6">
    `;

    careerPaths.forEach((career, index) => {
        const careerDataStr = JSON.stringify(career).replace(/"/g, '&quot;');
        careersHTML += `
            <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 career-option-page" data-career-data="${careerDataStr}">
                <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-3 mb-2">
                            <span class="text-2xl font-bold text-primary">${index + 1}.</span>
                            <h3 class="text-2xl font-bold text-gray-900">${career.title}</h3>
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                                ${career.matchPercentage}% Match
                            </span>
                        </div>
                        <p class="text-gray-700 text-lg mb-4">${career.description}</p>
                    </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-4 mb-4">
                    <div class="flex items-center text-gray-700 bg-gray-50 rounded-xl p-3">
                        <span class="text-2xl mr-3">💼</span>
                        <div>
                            <div class="text-xs text-gray-500">Salary Range</div>
                            <div class="font-semibold">${career.salaryRange}</div>
                        </div>
                    </div>
                    <div class="flex items-center text-gray-700 bg-gray-50 rounded-xl p-3">
                        <span class="text-2xl mr-3">📈</span>
                        <div>
                            <div class="text-xs text-gray-500">Growth Potential</div>
                            <div class="font-semibold">${career.growth}</div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
                    <div class="text-sm font-semibold text-gray-800 mb-2 flex items-center">
                        <span class="mr-2">✨</span> Why this matches:
                    </div>
                    <div class="text-sm text-gray-700">${career.whyMatch}</div>
                </div>
                
                <div class="border-t border-gray-200 pt-4">
                    <button class="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold hover:shadow-lg transition-all view-roadmap-btn-page">
                        🗺️ View Complete Learning Roadmap
                    </button>
                </div>
            </div>
        `;
    });

    careersHTML += `
            </div>
            <div class="mt-8 p-4 bg-green-50 rounded-xl border border-green-200 text-center">
                <div class="text-sm text-gray-700">
                    <strong>✅ Form Submitted Successfully!</strong> Your message has been received. We'll review it and get back to you soon.
                </div>
            </div>
        </div>
    `;

    resultsContainer.innerHTML = careersHTML;
    resultsContainer.classList.remove('hidden');
    
    // Add click handlers for roadmap buttons
    resultsContainer.querySelectorAll('.view-roadmap-btn-page').forEach((btn) => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const careerOption = this.closest('.career-option-page');
            const careerData = JSON.parse(careerOption.getAttribute('data-career-data').replace(/&quot;/g, '"'));
            showCareerRoadmap(careerData);
        });
    });
    
    // Smooth scroll to results
    resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Show career roadmap in a modal
function showCareerRoadmap(career) {
    const existingModal = document.querySelector('[data-roadmap-modal]');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.setAttribute('data-roadmap-modal', 'true');
    
    // Create roadmap.sh-style visualization with horizontal flow
    let roadmapHTML = '';
    if (career.learningPath && career.learningPath.length > 0) {
        const totalSteps = career.learningPath.length;
        const stepsPerRow = 3; // Display 3 steps per row for better flow
        
        // Group steps into categories
        const beginnerEnd = Math.ceil(totalSteps * 0.4);
        const intermediateEnd = Math.ceil(totalSteps * 0.7);
        
        let stepIndex = 0;
        
        // Beginner Section
        if (beginnerEnd > 0) {
            roadmapHTML += `
                <div class="mb-10">
                    <div class="flex items-center mb-6">
                        <div class="w-4 h-4 rounded-full bg-green-500 mr-3 shadow-lg"></div>
                        <h4 class="text-xl font-bold text-gray-900">Beginner Level</h4>
                        <div class="ml-4 text-sm text-gray-500">Start here</div>
                    </div>
                    <div class="relative">
                        <div class="flex flex-wrap gap-4 justify-start items-start">
            `;
            for (let i = 0; i < beginnerEnd && stepIndex < totalSteps; i++) {
                const isLastInSection = (i === beginnerEnd - 1) || (stepIndex === totalSteps - 1);
                const stepData = career.learningPath[stepIndex];
                const stepText = typeof stepData === 'string' ? stepData : stepData.step;
                const resources = typeof stepData === 'object' && stepData.resources ? stepData.resources : [];
                
                roadmapHTML += `
                    <div class="relative flex-shrink-0" style="width: calc(33.333% - 1rem); min-width: 280px;">
                        <div class="bg-white border-2 border-green-300 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:border-green-500 hover:-translate-y-1 transition-all h-full">
                            <div class="flex items-start mb-3">
                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                                    <span class="text-white font-bold">${stepIndex + 1}</span>
                                </div>
                                <div class="flex-1">
                                    <div class="text-sm font-bold text-gray-900 leading-tight mb-3">${stepText}</div>
                                    ${resources.length > 0 ? `
                                        <div class="mt-3 pt-3 border-t border-gray-200">
                                            <div class="text-xs font-semibold text-gray-600 mb-2">📚 Resources:</div>
                                            <div class="space-y-1">
                                                ${resources.slice(0, 3).map(resource => `
                                                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer" 
                                                       class="block text-xs text-primary hover:text-secondary hover:underline truncate"
                                                       title="${resource.name}">
                                                        🔗 ${resource.name}
                                                    </a>
                                                `).join('')}
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                        ${!isLastInSection ? `
                            <div class="absolute top-1/2 -right-6 z-10">
                                <svg class="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                        ` : ''}
                    </div>
                `;
                stepIndex++;
            }
            roadmapHTML += `</div></div></div>`;
        }
        
        // Intermediate Section
        if (stepIndex < intermediateEnd && stepIndex < totalSteps) {
            roadmapHTML += `
                <div class="mb-10">
                    <div class="flex items-center mb-6">
                        <div class="w-4 h-4 rounded-full bg-yellow-500 mr-3 shadow-lg"></div>
                        <h4 class="text-xl font-bold text-gray-900">Intermediate Level</h4>
                        <div class="ml-4 text-sm text-gray-500">Build on basics</div>
                    </div>
                    <div class="relative">
                        <div class="flex flex-wrap gap-4 justify-start items-start">
            `;
            for (let i = stepIndex; i < intermediateEnd && stepIndex < totalSteps; i++) {
                const isLastInSection = (stepIndex === intermediateEnd - 1) || (stepIndex === totalSteps - 1);
                const stepData = career.learningPath[stepIndex];
                const stepText = typeof stepData === 'string' ? stepData : stepData.step;
                const resources = typeof stepData === 'object' && stepData.resources ? stepData.resources : [];
                
                roadmapHTML += `
                    <div class="relative flex-shrink-0" style="width: calc(33.333% - 1rem); min-width: 280px;">
                        <div class="bg-white border-2 border-yellow-300 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:border-yellow-500 hover:-translate-y-1 transition-all h-full">
                            <div class="flex items-start mb-3">
                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                                    <span class="text-white font-bold">${stepIndex + 1}</span>
                                </div>
                                <div class="flex-1">
                                    <div class="text-sm font-bold text-gray-900 leading-tight mb-3">${stepText}</div>
                                    ${resources.length > 0 ? `
                                        <div class="mt-3 pt-3 border-t border-gray-200">
                                            <div class="text-xs font-semibold text-gray-600 mb-2">📚 Resources:</div>
                                            <div class="space-y-1">
                                                ${resources.slice(0, 3).map(resource => `
                                                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer" 
                                                       class="block text-xs text-primary hover:text-secondary hover:underline truncate"
                                                       title="${resource.name}">
                                                        🔗 ${resource.name}
                                                    </a>
                                                `).join('')}
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                        ${!isLastInSection ? `
                            <div class="absolute top-1/2 -right-6 z-10">
                                <svg class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                        ` : ''}
                    </div>
                `;
                stepIndex++;
            }
            roadmapHTML += `</div></div></div>`;
        }
        
        // Advanced Section
        if (stepIndex < totalSteps) {
            roadmapHTML += `
                <div class="mb-10">
                    <div class="flex items-center mb-6">
                        <div class="w-4 h-4 rounded-full bg-red-500 mr-3 shadow-lg"></div>
                        <h4 class="text-xl font-bold text-gray-900">Advanced Level</h4>
                        <div class="ml-4 text-sm text-gray-500">Master level</div>
                    </div>
                    <div class="relative">
                        <div class="flex flex-wrap gap-4 justify-start items-start">
            `;
            while (stepIndex < totalSteps) {
                const isLast = stepIndex === totalSteps - 1;
                const stepData = career.learningPath[stepIndex];
                const stepText = typeof stepData === 'string' ? stepData : stepData.step;
                const resources = typeof stepData === 'object' && stepData.resources ? stepData.resources : [];
                
                roadmapHTML += `
                    <div class="relative flex-shrink-0" style="width: calc(33.333% - 1rem); min-width: 280px;">
                        <div class="bg-white border-2 border-red-300 rounded-xl p-5 shadow-lg hover:shadow-2xl hover:border-red-500 hover:-translate-y-1 transition-all h-full">
                            <div class="flex items-start mb-3">
                                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center mr-3 flex-shrink-0 shadow-md">
                                    <span class="text-white font-bold">${stepIndex + 1}</span>
                                </div>
                                <div class="flex-1">
                                    <div class="text-sm font-bold text-gray-900 leading-tight mb-3">${stepText}</div>
                                    ${resources.length > 0 ? `
                                        <div class="mt-3 pt-3 border-t border-gray-200">
                                            <div class="text-xs font-semibold text-gray-600 mb-2">📚 Resources:</div>
                                            <div class="space-y-1">
                                                ${resources.slice(0, 3).map(resource => `
                                                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer" 
                                                       class="block text-xs text-primary hover:text-secondary hover:underline truncate"
                                                       title="${resource.name}">
                                                        🔗 ${resource.name}
                                                    </a>
                                                `).join('')}
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                        ${!isLast ? `
                            <div class="absolute top-1/2 -right-6 z-10">
                                <svg class="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                </svg>
                            </div>
                        ` : ''}
                    </div>
                `;
                stepIndex++;
            }
            roadmapHTML += `</div></div></div>`;
        }
    }

    modal.innerHTML = `
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true">
            <div class="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
                <div class="sticky top-0 bg-gradient-to-r from-primary to-secondary text-white p-6 z-10 rounded-t-3xl">
                    <div class="flex items-center justify-between">
                        <div>
                            <h3 class="text-2xl font-bold mb-1">🗺️ Learning Roadmap</h3>
                            <p class="text-white/90 text-sm">${career.title}</p>
                        </div>
                        <button type="button" class="text-white hover:text-gray-200 text-3xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/20 transition-all" aria-label="Close">
                            ✕
                        </button>
                    </div>
                </div>
                <div class="p-8">
                    <div class="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                        <div class="text-sm font-semibold text-gray-800 mb-2">📋 Career Overview</div>
                        <div class="grid md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span class="text-gray-600">Match Score:</span>
                                <span class="font-bold text-primary ml-2">${career.matchPercentage}%</span>
                            </div>
                            <div>
                                <span class="text-gray-600">Salary Range:</span>
                                <span class="font-bold text-gray-900 ml-2">${career.salaryRange}</span>
                            </div>
                            <div>
                                <span class="text-gray-600">Growth:</span>
                                <span class="font-bold text-green-600 ml-2">${career.growth}</span>
                            </div>
                            <div>
                                <span class="text-gray-600">Description:</span>
                                <span class="text-gray-700 ml-2">${career.description}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-6">
                        <h4 class="text-2xl font-bold text-gray-900 mb-2">🎯 Learning Roadmap</h4>
                        <p class="text-gray-600">Follow this structured path to build your career in <strong>${career.title}</strong></p>
                    </div>
                    
                    <div class="roadmap-container bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                        ${roadmapHTML}
                    </div>
                    
                    <div class="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                        <div class="text-sm font-semibold text-gray-800 mb-2">💡 Tips for Success</div>
                        <ul class="list-disc list-inside space-y-1 text-sm text-gray-700">
                            <li>Set realistic timelines for each step (typically 1-3 months per step)</li>
                            <li>Build projects to practice what you learn</li>
                            <li>Join communities and network with professionals in this field</li>
                            <li>Create a portfolio to showcase your skills</li>
                            <li>Stay updated with industry trends and technologies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;

    const closeBtn = modal.querySelector('button[aria-label="Close"]');
    closeBtn.addEventListener('click', () => modal.remove());
    
    // Close on background click
    modal.querySelector('.fixed').addEventListener('click', function(e) {
        if (e.target === this) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
    
    // Smooth scroll to top of roadmap
    const roadmapContainer = modal.querySelector('.roadmap-container');
    if (roadmapContainer) {
        roadmapContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}


// Show success message
function showSuccessMessage(message) {
    const modal = document.createElement('div');
    modal.setAttribute('data-success-modal', 'true');
    modal.innerHTML = `
        <div class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
            <div class="bg-white rounded-3xl max-w-md w-full shadow-2xl relative p-6">
                <div class="text-center">
                    <div class="text-5xl mb-4">✅</div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">Success!</h3>
                    <p class="text-gray-600 mb-6">${message}</p>
                    <button type="button" class="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;

    const closeBtn = modal.querySelector('button');
    closeBtn.addEventListener('click', () => modal.remove());
    
    modal.querySelector('.fixed').addEventListener('click', function(e) {
        if (e.target === this) {
            modal.remove();
        }
    });

    document.body.appendChild(modal);
}

// ESC to close modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const chatModal = document.querySelector('[data-ai-chat-modal]');
        if (chatModal) chatModal.remove();
        
        const roadmapModal = document.querySelector('[data-roadmap-modal]');
        if (roadmapModal) roadmapModal.remove();
        
        const successModal = document.querySelector('[data-success-modal]');
        if (successModal) successModal.remove();
    }
});
