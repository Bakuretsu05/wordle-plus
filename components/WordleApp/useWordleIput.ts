import { useState } from "react";

export function useWordleInput(
  wordCount: number,
  handleEnter: (input: string) => boolean
) {
  const [input, setInput] = useState("");

  const inputBackspace = () => setInput((prevInput) => prevInput.slice(0, -1));

  const inputAppend = (chara: string) => {
    if (input.length === wordCount) return;
    setInput((prevInput) => prevInput + chara.toUpperCase());
  };

  const inputClear = () => setInput("");

  const handleInput = (e: KeyboardEvent) => {
    if (/^[a-zA-Z]{1}$/.test(e.key)) inputAppend(e.key);
    else if (e.key === "Enter") {
      handleEnter(input) && inputClear();
    } else if (e.key === "Backspace") inputBackspace();
  };

  return { input, handleInput };
}
