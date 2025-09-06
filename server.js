// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // This serves your index.html from a 'public' folder

// Render health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// The main battle endpoint
app.post('/start-battle', async (req, res) => {
    try {
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        const { userPrompt } = req.body;

        const combinedPayload = {
            contents: [{
                parts: [{
                    text: `You are a game master for a fantasy battle royale game. Your task is to generate three things in a single response for a battle.
                    1.  A single opponent that is thematically and logically related to the participant, but not the same type.
                    2.  A single location that fits the theme of both characters.
                    3.  A short, mid-length battle plot between the two. The plot should highlight both fighters and their moves, use RPG emojis (like 🛡️⚔️), and take place in the generated location.
                    
                    The final response must be a single JSON object with the following fields: 'opponent' (string), 'location' (string), and 'battlePlot' (string). DO NOT include the winner in the plot.
                    
                    Participant: ${userPrompt}`
                }]
            }],
            generationConfig: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: "OBJECT",
                    properties: {
                        "opponent": { "type": "STRING" },
                        "location": { "type": "STRING" },
                        "battlePlot": { "type": "STRING" }
                    },
                    required: ["opponent", "location", "battlePlot"]
                }
            },
            systemInstruction: {
                parts: [{ text: "Act as a game data generator for a virtual battle royale game. Ensure the generated plot is action-packed and the opponent and location are cohesive with the user's prompt." }]
            },
        };

        const result = await model.generateContent(combinedPayload);
        const response = await result.response;
        const text = response.text();

        const battleData = JSON.parse(text);
        res.json(battleData);
    } catch (error) {
        console.error('Server-side error:', error);
        res.status(500).json({ error: 'Server error, please try again later.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
                  
