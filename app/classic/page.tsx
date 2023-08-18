"use client";

import Wordle from "@/components/Wordle/Wordle";
import { useEffect } from "react";
import { useWordle } from "@/components/Wordle/useWordle";
import { useWordleInput } from "@/components/Wordle/useWordleIput";
import { wordlist_classic, getRandomWord } from "./classic-wordle-words";
import { useError } from "@/hooks/useError";

export default function ClassicPage() {
  const [error, initiateError] = useError();
  const { wordle, currentRow, enterWordle } = useWordle(() => getRandomWord());

  const handleEnter = () => {
    if (input.length !== wordle[0].length) {
      initiateError("not enough letter");
      return false;
    } else if (!wordlist_classic.includes(input.toLowerCase())) {
      initiateError("word not found");
      return false;
    }
    enterWordle(input);
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
      <h1 className="text-white text-4xl">classic</h1>
      <Wordle wordle={wordle} currentInput={input} currentRow={currentRow} />
    </>
  );
}
