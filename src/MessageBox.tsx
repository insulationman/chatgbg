interface MessageBoxProps {
  message: string;
  isChatGbg: boolean;
}

const MessageBox = (props: MessageBoxProps) => {
  const { message, isChatGbg } = props;
  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg mb-4">
      <p className="text-xs text-blue-400">{isChatGbg ? "ChatGBG" : "Du"}</p>
      <p>{message}</p>
    </div>
  );
};

export default MessageBox;
