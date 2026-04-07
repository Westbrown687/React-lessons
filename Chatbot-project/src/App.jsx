import { ChatInput } from './component/Chatinput'
import { useState } from 'react'
import ChatMessages from './component/Chatmessages';
import './App.css'

function App() {
        const array = useState([
          {
            message: "hello chatbot",
            sender: "user",
            id: "id1",
          },
          {
            message: "Hello! How can i help you?",
            sender: "robot",
            id: "id2",
          },
          {
            message: "Can you get me today's date",
            sender: "user",
            id: "id3",
          },
          {
            message: "Today is September 27",
            sender: "robot",
            id: "id4",
          },
        ]);

        const [chatMessages, setChatMessages] = array;
        //const chatMessages = array[0];
        //const setChatMessages = array[1];
        return (
          <div className="app-container">
            <ChatMessages chatMessages={chatMessages} />

            <ChatInput
              chatMessages={chatMessages}
              setChatMessages={setChatMessages}
            />

            {/*<ChatMessage message="hello chatbot" sender="user" />
            <ChatMessage message="Hello! How can i help you?" sender="robot" />
            <ChatMessage message="Can you get me today's date" sender="user" />
            <ChatMessage message="Today is September 27" sender="robot" />*/}
            {/*ChatInput()*/}
            {/*<ChatInput></ChatInput>*/}
          </div>
        );
      }

export default App
