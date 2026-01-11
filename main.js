document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initSearch();
    initSmoothScroll();
    initAIChatWidget();
    initContactForm();
});

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
    const aiButton = document.createElement('button');
    aiButton.innerHTML = `
        <div class="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-2xl shadow-2xl flex items-center justify-center text-white text-xl hover:shadow-3xl hover:scale-110 transition-all duration-300">
            💬
        </div>
    `;
    aiButton.className = 'fixed bottom-6 right-6 z-40 focus:outline-none focus:ring-4 focus:ring-primary/50';
    aiButton.setAttribute('aria-label', 'Ask AI Career Assistant');
    aiButton.addEventListener('click', openAIChat);
    document.body.appendChild(aiButton);
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
    
    // Handle Enter key
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendBtn.click();
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
            
            const data = await response.json();
            
            if (data.success) {
                // Display career recommendations
                const botMessage = document.createElement('div');
                botMessage.className = 'space-y-4';
                
                let html = '<div class="bg-green-50 rounded-xl p-4 text-sm text-gray-700">';
                html += '<div class="font-semibold mb-2">🎯 Career Path Recommendations:</div>';
                
                if (data.data.careerPaths && data.data.careerPaths.length > 0) {
                    data.data.careerPaths.forEach((career, index) => {
                        html += `<div class="mb-4 p-3 bg-white rounded-lg border border-green-200">`;
                        html += `<div class="font-bold text-primary mb-1">${index + 1}. ${career.title} (${career.matchPercentage}% match)</div>`;
                        html += `<div class="text-xs text-gray-600 mb-2">${career.description}</div>`;
                        html += `<div class="text-xs text-gray-500 mb-2">💼 ${career.salaryRange} | 📈 Growth: ${career.growth}</div>`;
                        html += `<div class="text-xs text-gray-600"><strong>Why:</strong> ${career.whyMatch}</div>`;
                        html += `</div>`;
                    });
                } else {
                    html += '<div class="text-gray-600">No specific career paths found. Try providing more details about your skills and interests.</div>';
                }
                
                html += '</div>';
                botMessage.innerHTML = html;
                messagesContainer.appendChild(botMessage);
            } else {
                throw new Error(data.error || 'Failed to analyze career path');
            }
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = document.createElement('div');
            errorMessage.className = 'bg-red-50 rounded-xl p-4 text-sm text-red-700';
            errorMessage.textContent = `❌ Error: ${error.message}. Make sure the backend server is running on http://localhost:3000`;
            messagesContainer.appendChild(errorMessage);
        } finally {
            sendBtn.disabled = false;
            loadingIndicator.classList.add('hidden');
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    });
    
    document.body.appendChild(modal);
}

// Contact form validation and optional career analysis
function initContactForm() {
    const forms = document.querySelectorAll('form:not(.no-validate)');
    forms.forEach(form => {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            const message = form.querySelector('textarea');

            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                alert('Please enter a valid email address');
                return;
            }

            if (message && !message.value.trim()) {
                alert('Please share your message');
                return;
            }

            // If message contains career-related content, offer to analyze
            const messageText = message.value.toLowerCase();
            const careerKeywords = ['career', 'job', 'skill', 'interest', 'goal', 'path', 'developer', 'designer', 'analyst'];
            const hasCareerContent = careerKeywords.some(keyword => messageText.includes(keyword));
            
            if (hasCareerContent && confirm('Would you like to get career path recommendations based on your message?')) {
                try {
                    const response = await fetch('http://localhost:3000/api/analyze-career', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ message: message.value })
                    });
                    
                    const data = await response.json();
                    
                    if (data.success && data.data.careerPaths.length > 0) {
                        let careerInfo = '🎯 Career Recommendations:\n\n';
                        data.data.careerPaths.forEach((career, index) => {
                            careerInfo += `${index + 1}. ${career.title} (${career.matchPercentage}% match)\n`;
                            careerInfo += `   ${career.description}\n\n`;
                        });
                        alert(careerInfo + "\n\nForm submitted! We'll get back to you within 24 hours.");
                    } else {
                        alert("Thank you! We'll get back to you within 24 hours.");
                    }
                } catch (error) {
                    console.error('Career analysis error:', error);
                    alert("Thank you! We'll get back to you within 24 hours.");
                }
            } else {
                alert("Thank you! We'll get back to you within 24 hours.");
            }
            
            form.reset();
        });
    });
}

// ESC to close modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.querySelector('[data-ai-chat-modal]');
        if (modal) modal.remove();
    }
});
