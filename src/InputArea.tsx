interface InputAreaProps {
  onSend: (message: string) => void;
}

const InputArea = (props: InputAreaProps) => {
  const { onSend } = props;

  return (
    <div className="w-full flex justify-center p-4 mt-auto">
      <div className="w-[50rem]">
        <input
          type="text"
          placeholder="Skriv ett meddelande..."
          className="p-4 border-2 border-gray-200 rounded-lg w-full"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              const target = e.target as HTMLInputElement;
              onSend(target.value);
              target.value = "";
            }
          }}
        />
        <p className="text-gray-400 text-center text-sm pt-2">
          Kom ihåg att ChatGBG inte är en riktig göteborgare
        </p>
      </div>
    </div>
  );
};

export default InputArea;
