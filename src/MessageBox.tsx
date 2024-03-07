import { memo, useEffect, useRef } from "react";
import Typed from "typed.js";

interface MessageBoxProps {
  message: string;
  isChatGbg: boolean;
}

const MessageBox = memo((props: MessageBoxProps) => {
  const { message, isChatGbg } = props;

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [message],
      typeSpeed: isChatGbg ? 50 : 1,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  });

  return (
    <div className="p-4 border-2 border-gray-200 rounded-lg mb-4">
      <p className="text-xs text-blue-400">{isChatGbg ? "ChatGBG" : "Du"}</p>
      <span ref={el} />
    </div>
  );
});

export default MessageBox;
