import { ChromaClient, IncludeEnum } from "chromadb";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing OPENAI_API_KEY");
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const {
    messages,
  }: {
    messages: string[];
  } = await req.json();

  if (!messages) {
    return new Response("Missing messages", { status: 400 });
  }

  const content = [
    {
      role: "system",
      content:
        "You want to compress this user's vintage car request into a single sentence that can be vectorized and matched with a car in our car database. Ask the user for more info with each of their inputs (Don't accept a color, make a comment about how it's irrelevant. But, accept everything else if it is in a chain) until you're satisfied with the information. Be SASSY. When you're done collecting info, write <done>, followed by the details, and just the details of the car described. Expand years such as 1960s, such as 1960, 1961, 1962, 1963, and so on. Do not start with customer wants, or mention user. Just describe the car.",
    },
    ...messages.map((x, i) => ({
      role: i % 2 == 0 ? "assistant" : "user",
      content: x,
    })),
  ];

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: content as ChatCompletionMessageParam[],
  });

  return Response.json({ message: response.choices[0].message.content });
}
