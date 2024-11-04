

document.addEventListener('DOMContentLoaded', () => {
    const chatButton = document.getElementById('chat-button');
    const chatbot = document.getElementById('chatbot');
    const closeChat = document.getElementById('close-chat');
    const chatInput = document.getElementById('chat-input');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotOptions = document.getElementById('chatbot-options');

    chatButton.addEventListener('click', () => {
        chatbot.style.display = 'block'; // Show the chatbot
        showWelcomeMessage(); // Show the welcome message
        showOptions(); // Show options when the chatbot opens
    });

    closeChat.addEventListener('click', () => {
        chatbot.style.display = 'none'; // Hide the chatbot
    });

    function sendMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.textContent = message;
        chatbotMessages.appendChild(messageDiv);
    }

    function showWelcomeMessage() {
        sendMessage("Welcome to NZ Chatbot! How can I assist you today? You can click any option below.");
        welcomeMessageDisplayed = true;
    }

    function showOptions() {
        chatbotOptions.innerHTML = `
            <button class="option" onclick="handleOption('services')">What services do you offer as a software developer?</button>
            <button class="option" onclick="handleOption('technologies')">What programming languages and technologies do you specialize in?</button>
            <button class="option" onclick="handleOption('resources')">Can you recommend any resources for learning programming?</button>
            <button class="option" onclick="handleOption('timeline')">What is the expected timeline for my project?</button>
        `;
    }
    
    window.handleOption = function(option) {

        if (welcomeMessageDisplayed) {
            // Clear the welcome message if it was displayed
            chatbotMessages.innerHTML = '';
            welcomeMessageDisplayed = false;
        }
        switch (option) {
            case 'services':
                sendMessage("I offer services such as web development, mobile app development, and software consulting.");
                break;
            // case 'consultation':
            //     sendMessage("You can book a consultation by filling out the form on my website or contacting me directly.");
            //     break;
            case 'technologies':
                sendMessage("I specialize in JavaScript, and Java, along with frameworks like React.");
                break;
            case 'resources':
                sendMessage("I recommend platforms like Coursera and freeCodeCamp for learning programming.");
                break;
            case 'timeline':
                sendMessage("The timeline for your project will depend on its scope. Let's discuss it in detail.");
                break;
            default:
                sendMessage("I'm not sure about that. Can you provide more details?");
        }
        sendMessage(response);
        showBackToOptionsButton(); // Show the back button after the response
    };
    
    function showBackToOptionsButton() {
        const backButton = document.createElement('button');
        backButton.textContent = 'Back to Options';
        backButton.classList.add('back-button');
        backButton.onclick = function() {
            chatbotOptions.innerHTML = ''; // Clear the back button
            showOptions(); // Show main options again
        };
        chatbotMessages.appendChild(backButton);
    }

    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const userMessage = chatInput.value;
            sendMessage(userMessage);
            chatInput.value = '';
            // Optionally show options again after a message
            showOptions();
        }
    });
});



function toggleDetails(projectId) {
    const description = document.getElementById(projectId);
    description.style.display = description.style.display === 'none' || description.style.display === '' ? 'block' : 'none';
}

let currentProjectIndex = 0;
const projects = document.querySelectorAll('.project-card');
const totalProjects = projects.length;
const projectsPerPage = 3; // Number of projects to show at a time

function showProjects() {
    projects.forEach((project, index) => {
        project.style.display = (index < currentProjectIndex + projectsPerPage) ? 'block' : 'none';
    });

    // Update button states
    document.getElementById('prev-btn').disabled = currentProjectIndex === 0;
    document.getElementById('next-btn').disabled = currentProjectIndex + projectsPerPage >= totalProjects;
    document.getElementById('see-more-btn').style.display = (currentProjectIndex + projectsPerPage < totalProjects) ? 'inline-block' : 'none';
}

function showNext() {
    if (currentProjectIndex + projectsPerPage < totalProjects) {
        currentProjectIndex += projectsPerPage;
        showProjects();
    }
}

function showPrevious() {
    if (currentProjectIndex - projectsPerPage >= 0) {
        currentProjectIndex -= projectsPerPage;
        showProjects();
    }
}

function seeMore() {
    if (currentProjectIndex + projectsPerPage < totalProjects) {
        currentProjectIndex += projectsPerPage;
        showProjects();
    }
}

// Initialize the project view
showProjects();
