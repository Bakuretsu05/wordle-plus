import { useState } from "react";
import { LetterType, WordleType } from "./wordleType";

function initializeWordle(wordCount: number, rows: number): WordleType {
  const wordleData: LetterType = { letter: "", color: "none" };
  const column = Array(wordCount).fill(wordleData);
  return Array(rows).fill(column);
}

const formatWordle = (input: string, word: string): LetterType[] => {
  const newWordle: LetterType[] = [];
  let noYellow = word;
  let currentWord = word;

  for (let i = 0; i < input.length; i++) {
    if (currentWord.includes(input[i])) {
      if (input[i] === currentWord[i]) {
        currentWord = currentWord.replace(input[i], "#");
        newWordle.push({ letter: input[i], color: "green" });
      } else if (noYellow.includes(input[i])) {
        noYellow = noYellow.replace(input[i], "#");
        newWordle.push({ letter: input[i], color: "yellow" });
      } else {
        newWordle.push({ letter: input[i], color: "gray" });
      }
    } else {
      newWordle.push({ letter: input[i], color: "gray" });
    }
  }
  return newWordle;
};

export function useWordle(wordP: string | (() => string), rows: number = 6) {
  const [word] = useState(
    typeof wordP === "function" ? wordP().toUpperCase() : wordP.toUpperCase()
  );
  const [wordle, setWordle] = useState(() =>
    initializeWordle(word.length, rows)
  );
  const [currentRow, setCurrentRow] = useState(1);

  const enterWordle = (input: string) => {
    setWordle((prevWordle) => {
      const newWordle = [...prevWordle];
      newWordle[currentRow - 1] = formatWordle(input, word);
      return newWordle;
    });
    setCurrentRow((prevRow) => prevRow + 1);
  };

  return { wordle, currentRow, enterWordle };
}
