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
    if (message.toLowerCase().includes("du")) {
      return "Jag heter Glenn!";
    }
    if (message.toLowerCase().includes("glenn")) {
      return "Ja, det är jag!";
    }
    if (message.toLowerCase().includes("vem")) {
      return "Janne på varvet!";
    }
    if (message.toLowerCase().includes("kaffe")) {
      return "Kaffe är gott!";
    }
    if (message.toLowerCase().includes("öl")) {
      return "Öl är gott!";
    }
    if (message.toLowerCase().includes("vin")) {
      return "Vin är gott!";
    }
    if (message.toLowerCase().endsWith("?")) {
      return "Ingen aning!";
    }
    //randomize
    return createDefaultResponse();
  };

  const createDefaultResponse = () => {
    //randomize
    const random = Math.floor(Math.random() * 10);
    if (random < 9) {
      return "GAIS";
    }
    if (random < 6) {
      return "ÖIS";
    }
    if (random < 3) {
      return "IFK";
    }
    return "BK Häcken";
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
