import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Dummy chatbot response for testing UI without API
async function run(userInput: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(`**Dummy Bot:** You said _"${userInput}"_.\n\nHere’s a list:\n\n- Item 1\n- Item 2\n- Item 3\n\n\`\`\`ts\n// Example code block\nconst x: number = 42;\n\`\`\``);
    }, 1000); // Simulate 1s delay
  });
}

const ChatButton: React.FC = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [chatMessage, setChatMessage] = useState<React.ReactNode>(
    <p className="text-gray-500">Hi! I'm your dummy chatbot. Ask me anything!</p>
  );
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const toggleMessage = () => {
    setShowMessage((prevState) => !prevState);
  };

  const handleUserInput = async () => {
    if (userInput.trim() === "") return;

    setLoading(true);
    setChatMessage(<p className="text-gray-500 italic">Thinking...</p>);

    const response = await run(userInput);
    setChatMessage(formatResponse(response));
    setUserInput("");
    setLoading(false);
  };

  const formatResponse = (response: string) => {
    if (!response) return "Sorry, I couldn't get a response.";
    return (
      <div className="prose prose-sm max-w-none text-gray-100">
        <ReactMarkdown>{response}</ReactMarkdown>
      </div>

    );
  };

  return (
    <div className="relative">
      {/* Floating Chat Button */}
      <button
        onClick={toggleMessage}
        className="fixed bottom-20 right-10 p-4 bg-blue-600 text-white rounded-full shadow-lg z-50 hover:bg-blue-700 transition"
      >
        💬
      </button>

      {/* Chat Box */}
      <div
        className={`fixed bottom-24 right-5 w-96 p-5 bg-white border border-gray-300 rounded-xl shadow-2xl z-50 transition-all duration-300 ${showMessage ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-10 invisible'
          }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-lg text-gray-800">Chatbot</h2>
          <button
            onClick={toggleMessage}
            className="text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Chat Output */}
        <div className="mb-4 max-h-64 overflow-y-auto text-sm space-y-2 bg-gray-50 p-3 rounded ">
          {chatMessage}
        </div>

        {/* Input Field */}
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUserInput()}
          className="w-full p-2 border rounded-md text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Type your message..."
          disabled={loading}
        />



        <button
          onClick={handleUserInput}
          className={`w-full mt-2 p-2 rounded-md transition-all ${loading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default ChatButton;
