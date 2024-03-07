import ConversationArea from "./ConversationArea";
import Header from "./Header";
import InputArea from "./InputArea";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ConversationArea />
      <InputArea onSend={(message) => console.log(message)} />
    </div>
  );
}

export default App;
