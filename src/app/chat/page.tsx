"use client";

import { useState } from "react";
import Chat from "../components/Chat";
import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();

  const [messages, setMessages] = useState([
    "What kind of car are you looking for?",
  ]);

  const [computing, setComputing] = useState(false);

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

    if (response.message.startsWith("<done>")) {
      console.log(response.message);
      const car = await fetch(
        `api/db?carDetails=${response.message.slice(6).trim()}`,
        {
          method: "GET",
        }
      ).then((res) => res.json());
      console.log(car);

      const params = new URLSearchParams(car);
      router.push("/car" + "?" + params);
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
      <Chat messages={messages} onSend={sendToAutoBuddy} disabled={computing} />
    </main>
  );
}
