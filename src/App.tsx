import { useState } from "react";
import ConversationArea from "./ConversationArea";
import Header from "./Header";
import InputArea from "./InputArea";

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
    setMessages((prevMessages) => [...prevMessages, createResponse(message)]);
  };

  const createResponse = (message: string) => {
    if (message.toLowerCase().includes("hello")) {
      return "Hello there!";
    } else if (message.toLowerCase().includes("how are you")) {
      return "I'm doing great, thanks for asking!";
    } else if (message.toLowerCase().includes("what's your name")) {
      return "I'm a bot, I don't have a name!";
    } else if (message.toLowerCase().includes("how old are you")) {
      return "I'm a bot, I don't have an age!";
    } else {
      return "I'm sorry, I don't understand that.";
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ConversationArea messages={messages} />
      <InputArea onSend={handleSubmit} />
    </div>
  );
}

export default App;
