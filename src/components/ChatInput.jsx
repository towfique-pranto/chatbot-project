 import { useState } from "react";
 import { Chatbot } from "supersimpledev";
 import dayjs from "dayjs";
 import LoadingSpinner from "../assets/loading-spinner.gif";
 import "./ChatInput.css";


 export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");

        function saveInputText(event) {
          setInputText(event.target.value);
        }

        const [isLoading, setIsLoading] = useState(false);

        async function sendMessage() {
          if (isLoading || inputText.trim() === "") {
            return;
          }
          const messageText = inputText;
          setInputText("");
          const newChatMessages = [
            ...chatMessages,
            {
              message: messageText,
              sender: "user",
              time: dayjs().valueOf(),
              id: crypto.randomUUID(),
            },
            {
              message: <img className="loadingImg" src={LoadingSpinner} />,
              sender: "robot",
              id: "loading-message-id",
            },
          ];

          setChatMessages(newChatMessages);

          setIsLoading(true);
          const response = await Chatbot.getResponseAsync(messageText);
          setIsLoading(false);

          setChatMessages([
            ...chatMessages,
            {
              message: messageText,
              sender: "user",
              time: dayjs().valueOf(),
              id: crypto.randomUUID(),
            },
            {
              message: response,
              sender: "robot",
              time: dayjs().valueOf(),
              id: crypto.randomUUID(),
            },
          ]);
        }

        return (
          <div className="chat-input-container">
            <input
              className="chat-input"
              disabled={isLoading}
              onKeyDown={(event) => {
                event.key === "Enter" && sendMessage();
                event.key === "Escape" && setInputText("");
              }}
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              value={inputText}
            />
            <button
              className="send-button"
              onClick={sendMessage}
              disabled={isLoading || inputText.trim() === ""}
            >
              Send
            </button>
          </div>
        );
      }