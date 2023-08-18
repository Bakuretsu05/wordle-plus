"use client";

import Wordle from "@/components/WordleApp/Wordle";
import { useEffect } from "react";
import { useWordle } from "@/components/WordleApp/useWordle";
import { useWordleInput } from "@/components/WordleApp/useWordleIput";
import { useError } from "@/hooks/useError";
import VirtualKeyboard from "../VirtualKeyboard/VirtualKeyboard";

const getRandomWord = (wordlist: string[]): string => {
  return wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase();
};

interface PropsType {
  wordlist: string[];
}

export default function WordleApp({ wordlist }: PropsType) {
  const [error, initiateError] = useError();
  const { wordle, currentRow, enterWordle } = useWordle(() =>
    getRandomWord(wordlist)
  );

  const handleEnter = (inputText: string) => {
    if (inputText.length !== wordle[0].length) {
      initiateError("not enough letter");
      return false;
    } else if (!wordlist.includes(inputText.toLowerCase())) {
      initiateError("word not found");
      return false;
    }
    enterWordle(inputText);
    return true;
  };
  const { input, handleInput } = useWordleInput(wordle[0].length, handleEnter);

  // listen for keyboard input
  // Todo: apply debouncing (only one input per press)
  useEffect(() => {
    document.onkeydown = (e) => handleInput(e);

    return () => {
      document.onkeydown = null;
    };
  }, [handleInput]);

  return (
    <>
      {error && (
        <h2 className="fixed top-20 left-50 text-red-500 text-3xl">{error}</h2>
      )}
      <Wordle wordle={wordle} currentInput={input} currentRow={currentRow} />
      <VirtualKeyboard
        handlePress={() => console.log("hellow pressed")}
        wordle={wordle}
        currentRow={currentRow}
      />
    </>
  );
}
