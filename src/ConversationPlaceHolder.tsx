import ChatGBG from "./assets/ChatGBG.svg";

const ConversationPlaceHolder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <img src={ChatGBG} alt="chat person icon" className="h-20 mt-1" />
      <p className="text-xs text-blue-400">ChatGBG</p>
      <p>Du har ännu inte skrivit något till ChatGBG</p>
    </div>
  );
};

export default ConversationPlaceHolder;
