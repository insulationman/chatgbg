import ConversationPlaceHolder from "./ConversationPlaceHolder";
import MessageBox from "./MessageBox";

interface ConversationAreaProps {
  messages: string[];
}

const ConversationArea = (props: ConversationAreaProps) => {
  const { messages } = props;

  return (
    <div className="w-full flex flex-col-reverse items-center overflow-scroll">
      <div className="w-[50rem] shrink">
        {messages.map((message, index) => (
          <MessageBox
            message={message}
            isChatGbg={index % 2 === 1}
            key={index}
          />
        ))}
        {messages.length === 0 && <ConversationPlaceHolder />}
      </div>
    </div>
  );
};

export default ConversationArea;
