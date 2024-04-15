"use client";

import { useState, useRef, useEffect } from "react";
import Chat from "../components/Chat";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([
    "What kind of car are you looking for?",
  ]);

  const [computing, setComputing] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToAutoBuddy = async (message: string) => {
    if (computing) {
      return;
    }

    setComputing(true);
    let newMessages = [...messages];
    newMessages.push(message);
    newMessages.push("Thinking...");
    setMessages(newMessages);

    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: newMessages.slice(0, -1) }),
    }).then((res) => res.json());

    if (response.message.includes("<done>")) {
      const cars = await fetch(
        `http://127.0.0.1:8000/chat/${response.message.slice(
          response.message.indexOf("<done>") + 6
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        return res.json();
      });

      router.push("/car" + "?cars=" + encodeURIComponent(JSON.stringify(cars)));
      return;
    }

    newMessages = [...newMessages];
    newMessages.pop();
    newMessages.push(response.message);
    setMessages(newMessages);
    setComputing(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="absolute top-0 left-0 p-4 m-4 bg-[color:var(--color-tertiary)] text-[color:var(--color-secondary)]"
        onClick={() => router.push("/")}
      >
        Go back
      </button>
      <Chat messages={messages} onSend={sendToAutoBuddy} disabled={computing} />
      <div ref={messagesEndRef} />
    </main>
  );
}
