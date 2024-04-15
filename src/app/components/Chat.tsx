import { Fragment } from "react";

interface ChatProps {
  messages: string[];
  onSend: (message: string) => void;
  disabled?: boolean;
}

const Chat: React.FC<ChatProps> = ({ messages, onSend, disabled }) => {
  return (
    <div className="w-2/4">
      <div className="bg-[color:var(--color-tertiary)] p-4">
        <div className="container mx-auto">
          <div className="pb-4">
            <h1 className="text-center text-4xl">
              Find Your Dream Retro Vehicle
            </h1>
          </div>
          <div className="flex flex-col items-left justify-center w-full max-w-5xl p-8 bg-white shadow-lg ">
            {messages.map((x, i) => {
              return (
                <div className="relative mb-4" key={i}>
                  <div
                    className={`max-h-80 w-full object-cover transition-transform duration-300 transform group-hover:scale-105 text-black ${
                      i % 2 == 0
                        ? "bg-[color:var(--color-primary)]"
                        : "bg-[color:var(--color-tertiary)]"
                    } p-4 shadow-[inset_1px_1px_1px_1px_rgba(0.6,0.6,0.6,0.6)]`}
                  >
                    {i % 2 == 0 ? "AutoBetty" : "You"} — {x}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <form
          className="flex flex-row items-left justify-center w-full max-w-5xl pl-4 pr-4 bg-white shadow-lg"
          onSubmit={(e) => {
            e.preventDefault();
            const input = (e.target as HTMLFormElement)
              .elements[0] as HTMLInputElement;
            onSend(input.value);
            input.value = "";
          }}
        >
          <input
            className="w-full p-4 mr-4 mb-4 text-black shadow-[inset_1px_1px_1px_1px_rgba(0.6,0.6,0.6,0.6)] border-1"
            placeholder="Describe your dream retro vehicle"
          />
          <button
            className="w-min h-min p-4 text-white bg-[color:var(--color-secondary)] focus:border-transparent border-1 border-[color:rgba(0.6,0.6,0.6,0.6)] shadow-[inset_1px_1px_1px_1px_rgba(0.6,0.6,0.6,0.6)]"
            disabled={disabled}
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
