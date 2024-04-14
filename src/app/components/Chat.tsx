import { Fragment } from "react";

interface ChatProps {
  messages: string[];
}

const Chat: React.FC<ChatProps> = ({ messages }) => {
  return (
    <div className="w-2/4">
      <div className="bg-gray-100 p-6">
        <div className="container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl">
              Find your dream retro vehicle!
            </h1>
          </div>
          <div className="flex flex-col items-left justify-center w-full max-w-5xl p-8 bg-white shadow-lg ">
            {messages.map((x, i) => {
              return (
                <div className="relative mb-4 " key={i}>
                  <div className="max-h-80 w-full object-cover transition-transform duration-300 transform group-hover:scale-105">
                    {i % 2 == 0 ? "🤖" : "👤"} — {x}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <form className="flex flex-row items-left justify-center w-full max-w-5xl p-8 bg-white shadow-lg">
          <input
            className="w-full p-4 mr-4 mb-4 text-black shadow-[inset_1px_1px_1px_1px_rgba(0.6,0.6,0.6,0.6)] border-1"
            placeholder="Describe your dream retro vehicle"
          />
          <button className="w-min h-min p-4 text-white bg-[color:var(--color-secondary)] focus:border-transparent border-1 border-[color:rgba(0.6,0.6,0.6,0.6)] shadow-[inset_1px_1px_1px_1px_rgba(0.6,0.6,0.6,0.6)]">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
