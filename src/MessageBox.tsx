import { memo, useEffect, useRef } from "react";
import Typed from "typed.js";
import ChatGBG from "./assets/ChatGBG.svg";
import CircleDashed from "./assets/circle-dashed.svg";

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
    <div className="mb-4 flex gap-2 ">
      <img
        src={isChatGbg ? ChatGBG : CircleDashed}
        alt="chat person icon"
        className="w-8 h-8 mt-1"
      />
      <div>
        <p className="text-xs text-blue-400">{isChatGbg ? "ChatGBG" : "Du"}</p>
        <span ref={el} />
      </div>
    </div>
  );
});

export default MessageBox;
