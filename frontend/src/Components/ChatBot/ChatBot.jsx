import React, { useState } from "react";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        // setMessages([...messages, userMessage]);

        try {
            // Send message to the backend
            const response = await fetch("http://localhost:8000/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) {
                throw new Error("Failed to fetch response from the server");
            }

            const data = await response.json(); // Parse the JSON response
            console.log(data, "data from chat");

            const botMessage = { sender: "bot", text: data.result };
            console.log(botMessage, "bottt");

            setMessages((prevMessages) => [...prevMessages, botMessage]);
        } catch (error) {
            console.error("Error:", error.message);
            const errorMessage = { sender: "bot", text: "Error: Unable to connect." };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
        } finally {
            setInput("");
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <div className="w-full max-w-lg bg-gray-100 p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-bold mb-4 text-center">Chatbot</h1>

                <div className="h-96 overflow-y-auto bg-white p-4 rounded-lg shadow-inner">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-2 p-2 rounded-lg ${message.sender === "user"
                                    ? "bg-blue-500 text-white self-end"
                                    : "bg-gray-300 text-black self-start"
                                }`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>

                <div className="flex mt-4">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        className="flex-grow p-2 border rounded-l-lg focus:outline-none"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBot;