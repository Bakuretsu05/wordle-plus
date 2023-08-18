import { WordleType } from "@/components/WordleApp/wordleType";
import Row from "./Row";

interface Props {
  wordle: WordleType;
  currentRow: number;
  currentInput: string;
}

export default function Wordle({ wordle, currentRow, currentInput }: Props) {
  return (
    <div className="flex flex-col gap-1">
      {wordle.map((wordleRow, index) => (
        <Row
          key={index}
          wordleRow={
            index === currentRow - 1
              ? { input: currentInput, wordCount: wordle[0].length }
              : wordleRow
          }
        />
      ))}
    </div>
  );
}
