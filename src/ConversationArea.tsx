import ConversationPlaceHolder from "./ConversationPlaceHolder";
import MessageBox from "./MessageBox";

interface ConversationAreaProps {
  messages: string[];
}

const ConversationArea = (props: ConversationAreaProps) => {
  const { messages } = props;

  return (
    <div className="w-full flex flex-col-reverse overflow-x-auto p-4">
      <div className="flex w-full justify-center">
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
    </div>
  );
};

export default ConversationArea;
