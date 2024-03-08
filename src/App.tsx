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
    if (message.toLowerCase().includes("hej")) {
      return "Hej!";
    }
    if (message.toLowerCase().includes("tack")) {
      return "Varsågod!";
    }
    return "E du go eller?";
  };

  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <ConversationArea messages={messages} />
      <InputArea onSend={handleSubmit} />
    </div>
  );
}

export default App;
