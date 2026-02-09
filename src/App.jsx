import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import './App.css'
import RobotProfileImage from './assets/robot.png'
import UserProfileImage from './assets/user.png'
import LoadingSpinner from './assets/loading-spinner.gif'

 function ChatInput({ chatMessages, setChatMessages }) {
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
              id: crypto.randomUUID(),
            },
            {
              message: response,
              sender: "robot",
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

      function ChatMessage({ message, sender }) {
        return (
          <div className={sender === "user" ? "user-message" : "robot-message"}>
            {sender === "robot" && (
              <img src={RobotProfileImage} className="chat-message-profile" />
            )}
            <div className="chat-message-text">{message}</div>
            {sender === "user" && (
              <img src={UserProfileImage} className="chat-message-profile" />
            )}
          </div>
        );
      }
      function ChatMessages({ chatMessages }) {
        const chatMessagesRef = useRef(null);
        useEffect(() => {
          const containerElem = chatMessagesRef.current;
          if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]);
        return (
          <div className="chat-messages-container" ref={chatMessagesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

      function App() {
        const [chatMessages, setChatMessages] = useState([]);
        return (
          <div className="app-container">
            {chatMessages.length === 0 ? (
              <div>
                <p>
                  Welcome to the chatbot project! Send a message using the
                  textbox below.
                </p>
              </div>
            ) : (
              <ChatMessages chatMessages={chatMessages} />
            )}
            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />
          </div>
        );
      }

export default App
