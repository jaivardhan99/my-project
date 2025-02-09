import React, { useState } from "react";
import axios from "axios";


// ✅ Fixed: Renamed to avoid conflicts
interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

const GeminiChatBot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState<string>("");

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage: ChatMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);

    const botResponseText = await fetchGeminiResponse(userInput);
    const botResponse: ChatMessage = { sender: "bot", text: botResponseText };

    setMessages((prevMessages) => [...prevMessages, botResponse]);
    setUserInput("");
  };

  const fetchGeminiResponse = async (input: string): Promise<string> => {
    try {
      const API_KEY = 'AIzaSyClMsVF6vW1hiQlq4NAsp0lb7Q6HgZWCm8';
      if (!API_KEY) {
        throw new Error("API key is missing. Check your .env file.");
      }
  
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`,
        {
          contents: [{ parts: [{ text: input }] }],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      // Extract response text
      return response.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
    } catch (error) {
      console.error("Error fetching Gemini response:", error.response?.data || error.message);
      return "I'm sorry, I encountered an error. Please try again later.";
    }
  };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4 text-center">Gemini Chatbot</h1>
      <div className="h-64 overflow-y-scroll border border-gray-300 p-4 rounded bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <p className={`inline-block px-3 py-1 rounded ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="mt-4 flex">
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow p-2 border border-gray-300 rounded-l-md"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 rounded-r-md hover:bg-blue-700">
          Send
        </button>
      </form>
    </div>
  );
};

export default GeminiChatBot;
