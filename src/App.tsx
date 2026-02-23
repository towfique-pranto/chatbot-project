import { useState, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput';
import ChatMessages from './components/ChatMessages';
import robot from './assets/robot.png'
import './App.css'

function App() {
  const [chatMessages, setChatMessages] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  const title = `${chatMessages.length} Messages`
  useEffect(() => {
    Chatbot.addResponses({
      "hi": "Hi! How can I help you?",
      "What is your name?": "My name is Chatbot.",
      "I have a problem": "Sure. Please describe the issue.",
      "???": "That reaction usually means I should explain better.",
      "ping": "pong",
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (<>
    <title>{title}</title>
    <link rel="icon" type="image/png" href={robot} />
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
  </>
  );
}

export default App
