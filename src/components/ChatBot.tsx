"use client";

import { useState, useRef, useEffect } from "react";
import { api } from "~/trpc/react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import Image from "next/image";

// Sons
const sendSound = new Howl({ src: ["/sounds/send.mp3"], volume: 0.3 });
const receiveSound = new Howl({ src: ["/sounds/receive.mp3"], volume: 0.2 });

export function ChatBot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const askMutation = api.chat.ask.useMutation();

  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSendMessage() {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    sendSound.play();

    setInput("");

    const botReply = await askMutation.mutateAsync({ message: input });

    setMessages((prev) => [...prev, { sender: "bot", text: botReply.reply }]);
    receiveSound.play();
  }

  return (
    <div className="w-full max-w-md bg-gray-800 rounded-lg p-4 flex flex-col shadow-lg">
      <div className="flex-1 overflow-y-auto mb-4 max-h-[400px] space-y-2">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: msg.sender === "user" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start gap-2 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "bot" && (
              <Image
                src="/images/furiagg.png"
                alt="FURIA Bot"
                width={32}
                height={32}
                className="rounded-full"
              />
            )}
            <div
              className={`p-3 rounded-lg max-w-[80%] ${
                msg.sender === "user"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-600 text-white"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <div ref={endOfMessagesRef} />
      </div>
      <div className="flex">
        <input
          className="flex-1 p-2 rounded-l bg-gray-700 text-white outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Manda sua mensagem..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSendMessage();
            }
          }}
          
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-600 hover:bg-purple-800 p-2 rounded-r text-white"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
