import { useState } from "react";
import ConversationArea from "./ConversationArea";
import Header from "./Header";
import InputArea from "./InputArea";

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ConversationArea messages={messages} />
      <InputArea onSend={(message) => setMessages([...messages, message])} />
    </div>
  );
}

export default App;
