"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function ChatPage() {
  const searchParams = useSearchParams();

  if (!searchParams) {
    return null;
  }

  console.log(searchParams);

  const title = searchParams.get("title");
  const excerpt = searchParams.get("excerpt");
  const thumbnail_url = searchParams.get("thumbnail_url");
  const current_bid_formatted = searchParams.get("current_bid_formatted");

  if (!title || !excerpt || !thumbnail_url || !current_bid_formatted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="p-4 bg-[color:var(--color-tertiary)] text-[color:var(--color-secondary)]">
          Invalid car data
          <br />
          <a href="/" className="underline">
            Go back
          </a>
        </div>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-2 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm ">
        <h1 className="text-center text-4xl">{title}</h1>
        <p className="text-center text-[color:var(--color-secondary)] bg-[color:var(--color-tertiary)] p-4">
          {excerpt}
        </p>
        <Image
          src={thumbnail_url || ""}
          width={350}
          height={350}
          alt="8Bit Auto"
        />

        <p className="text-center text-[color:var(--color-secondary)] bg-[color:var(--color-tertiary)] p-4">
          {current_bid_formatted}
        </p>
      </div>
    </main>
  );
}
