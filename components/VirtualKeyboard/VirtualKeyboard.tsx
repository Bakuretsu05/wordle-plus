"use client";

import { useEffect, useState } from "react";
import { WordleType } from "../WordleApp/wordleType";
import { KeyStateType, KeyType } from "./KeyboardTypes";
import KeyButton from "./KeyButton";

const keyboardLayout: KeyType[][] = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
];

interface PropsType {
  handlePress: (KeyValue: KeyType) => void;
  wordle: WordleType;
  currentRow: number;
}

export default function VirtualKeyboard({
  handlePress,
  wordle,
  currentRow,
}: PropsType) {
  const [letterProfile, setLetterProfile] = useState<KeyStateType>({
    A: "none",
    B: "none",
    C: "none",
    D: "none",
    E: "none",
    F: "none",
    G: "none",
    H: "none",
    I: "none",
    J: "none",
    K: "none",
    L: "none",
    M: "none",
    N: "none",
    O: "none",
    P: "none",
    Q: "none",
    R: "none",
    S: "none",
    T: "none",
    U: "none",
    V: "none",
    W: "none",
    X: "none",
    Y: "none",
    Z: "none",
  });

  useEffect(() => {}, []);

  return (
    <div className="p-2 flex flex-col item-center gap-2">
      <div className="flex gap-2 justify-center">
        {keyboardLayout[0].map((keyValue) => (
          <KeyButton
            key={keyValue}
            handlePress={() => console.log(keyValue)}
            value={keyValue}
            color={
              /^[A-Z]{1}$/.test(keyValue.toUpperCase())
                ? letterProfile[
                    keyValue.toUpperCase() as keyof typeof letterProfile
                  ]
                : "none"
            }
          />
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        {keyboardLayout[1].map((keyValue) => (
          <KeyButton
            key={keyValue}
            handlePress={() => console.log(keyValue)}
            value={keyValue}
            color={
              /^[A-Z]{1}$/.test(keyValue.toUpperCase())
                ? letterProfile[
                    keyValue.toUpperCase() as keyof typeof letterProfile
                  ]
                : "none"
            }
          />
        ))}
      </div>
      <div className="flex gap-2 justify-center">
        {keyboardLayout[2].map((keyValue) => (
          <KeyButton
            key={keyValue}
            handlePress={() => console.log(keyValue)}
            value={keyValue}
            color={
              /^[A-Z]{1}$/.test(keyValue.toUpperCase())
                ? letterProfile[
                    keyValue.toUpperCase() as keyof typeof letterProfile
                  ]
                : "none"
            }
          />
        ))}
      </div>
    </div>
  );
}
