# Virtual-battle
Virtual Battle is a web-based fantasy game where players enter a prompt for their character, and a powerful AI generates an epic one-on-one battle. The game features a dynamic opponent, a unique location, and a detailed battle plot, with the winner determined by chance.
Features
 * AI-Generated Opponent: The AI creates a thematic and logical opponent based on your character's prompt.
 * Dynamic Battle Plot: A short, action-packed story is generated for each battle, highlighting the fighters and their moves.
 * Luck-Based Winner: The winner is determined by a random outcome, making every battle a surprise.
 * Secure Backend: The game uses a secure Node.js backend to protect the API key from public view.
 * Client-Side Protection: Includes a basic profanity filter and a cooldown to prevent spamming.
Tech Stack
 * Frontend: HTML, CSS (TailwindCSS), Vanilla JavaScript
 * Backend: Node.js, Express.js
 * API: Google Gemini API (@google/generative-ai)
Getting Started
Follow these steps to get a local copy of the project up and running on your machine.
Prerequisites
You will need to have Node.js and npm (Node Package Manager) installed.
Installation
 * Clone the repository to your local machine:
   git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

 * Install the required Node.js packages:
   npm install

Local Setup
 * Create a file named .env in the root of the project directory.
 * Add your Gemini API key to this file in the following format:
   API_KEY=YOUR_GEMINI_API_KEY

 * Start the backend server:
   npm start

 * Open your browser and navigate to http://localhost:3000.
Deployment
This project is configured for easy deployment on Render as a Web Service.
 * Push your code to a GitHub repository.
 * Create a new Web Service on Render and connect it to your repository.
 * Configure the environment variable with your API key under Environment > Advanced. Set the key to API_KEY and the value to your secret key.
 * The npm install and npm start commands are configured in the package.json file, so Render will handle the rest.
# File Structure
/your-project-name
├── server.js               # The backend server
├── package.json            # Project dependencies
├── .gitignore              # Ignores local files like .env
└── /public                 # Frontend files
    └── index.html          # The game's UI

# License
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
