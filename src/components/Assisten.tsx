import React, { useState } from 'react';

// Import Google Generative AI module
import { GoogleGenerativeAI } from "@google/generative-ai";

// Define your API key
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize the GoogleGenerativeAI instance
const genAI = new GoogleGenerativeAI(apiKey);

// Create a model instance (e.g., gemini-1.5-flash)
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// Generation configuration options
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Function to run the API call and get chatbot response
async function run(userInput: string) {
  const parts = [
    { text: `input: ${userInput}` },
    { text: "output: " },
  ];

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });

    if (result && result.response && result.response.text) {
      return result.response.text(); // Return the generated response text
    } else {
      return "Sorry, I couldn't get a response.";
    }
  } catch (error) {
    console.error("Error generating content:", error);
    return "Sorry, something went wrong.";
  }
}

const ChatButton: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [chatMessage, setChatMessage] = useState<React.ReactNode>("Hi! How can I help you today?");
  const [userInput, setUserInput] = useState<string>("");

  // Toggle the visibility of the chat menu/message
  const toggleMessage = () => {
    setShowMessage((prevState) => !prevState);
  };

  // Handle input submission and send it to the chatbot
  const handleUserInput = async () => {
    if (userInput.trim() === "") return; // Don't send empty input

    setChatMessage("Thinking..."); // Display thinking message while processing

    const response = await run(userInput); // Get response from chatbot
    setChatMessage(formatResponse(response)); // Format and update the chat message with the response
    setUserInput(""); // Clear the input field
  };

  // Format the response to display neatly with clear context
  const formatResponse = (response: string) => {
    if (!response) return "Sorry, I couldn't get a response.";

    // Example of handling specific inputs and formatting them more clearly
    if (response.toLowerCase().includes("hay kak")) {
      return "Hello! How can I assist you today? 😊";
    }

    if (response.toLowerCase().includes("instruction")) {
      return "It seems like you want some help with instructions. Could you please clarify what you're looking for?";
    }

    // Split the response into paragraphs for better readability
    const paragraphs = response.split("\n").map((paragraph, index) => (
      <p key={index} className="mb-2">{paragraph}</p>
    ));

    return <div>{paragraphs}</div>;
  };

  return (
    <div className="relative">
      {/* Chat Button */}
      <button
        onClick={toggleMessage} // Toggle visibility of the message/chat menu
        className="fixed bottom-20 right-10 p-4 bg-blue-500 text-white rounded-full shadow-lg z-50 hover:bg-blue-700 transition-all"
      >
        Chat
      </button>
      <div
        className={`fixed bottom-20 right-5 w-80 p-4 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-50 transition-all ${
          showMessage ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
        }`}
      >
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold text-lg">Chatbot</p>
          <button
            onClick={toggleMessage} // Close chat when clicked
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        <div className="mb-4">
          {/* Display Chatbot response */}
          <div>{chatMessage}</div>
        </div>

        {/* Input area */}
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)} // Update user input on change
          className="w-full p-2 border-2 border-gray-300 rounded-lg"
          placeholder="Type your message..."
        />
        <button
          onClick={handleUserInput} // Send user input to chatbot
          className="w-full mt-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatButton;
