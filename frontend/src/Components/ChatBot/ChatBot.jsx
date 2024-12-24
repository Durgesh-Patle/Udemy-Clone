import React, { useState } from "react";

const ChatBot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);

        try {
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

            const data = await response.json();
            console.log(data, "data from chat");

            const botMessage = { sender: "bot", text: data.result };

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
            <div className="w-full max-w-lg bg-amber-200 p-4 rounded-lg shadow-md">
                <h1 className="text-xl font-bold mb-4  bg-amber-200 text-center">Chatbot</h1>

                <div
                    className="h-96 overflow-y-auto bg-white p-4 rounded-lg shadow-inner"
                    id="messages-container"
                >
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`mb-2 p-2 rounded-lg ${message.sender === "user"
                                    ? "bg-blue-500 text-white text-right ml-auto"
                                    : "bg-gray-300 text-black text-left mr-auto"
                                } max-w-xs break-words`}
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
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        placeholder="Type a message..."
                        className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-500"
                    />
                    <button
                        onClick={sendMessage}
                        disabled={!input.trim()}
                        className={`px-4 rounded-r-lg ${input.trim()
                                ? "bg-blue-500"
                                : "bg-blue-600 text-white cursor-not-allowed"
                            }`}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ChatBot;