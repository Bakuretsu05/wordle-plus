"use client";

import Wordle from "@/components/Wordle/Wordle";
import { useState } from "react";
import { useWordle } from "../useWordle";

export default function ClassicPage() {
  const [input, setInput] = useState("");
  const { wordle, currentRow, enterWordle } = useWordle("microsoft", [
    "microsoft",
  ]);

  return (
    <>
      <h1 className="text-white text-4xl">classic</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          enterWordle(input)
            .then((res) => setInput(""))
            .catch((err) => console.log(err));
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="mb-10"
        />
      </form>
      <Wordle wordle={wordle} currentInput={input} currentRow={currentRow} />
    </>
  );
}
