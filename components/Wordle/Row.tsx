import { LetterType } from "@/app/wordleType";
import Box from "./Box";

interface PropsType {
  wordleRow: LetterType[] | { input: string; wordCount: number };
}

const Row = ({ wordleRow }: PropsType) => {
  //render inputText as wordle since it has not been submitted
  const wordCount = Array.isArray(wordleRow)
    ? wordleRow.length
    : wordleRow.wordCount;

  const renderInput = (input: string) => {
    const elements: JSX.Element[] = [];

    for (let i = 0; i < input.length; i++) {
      elements.push(
        <Box key={i} letter={input[i]} color={"none"} wordCount={wordCount} />
      );
    }
    for (let i = 0; i < wordCount - input.length; i++) {
      elements.push(
        <Box
          key={input.length + i}
          letter={""}
          color={"none"}
          wordCount={wordCount}
        />
      );
    }

    return elements;
  };

  return (
    <div className="flex gap-1">
      {Array.isArray(wordleRow)
        ? wordleRow.map((item, index) => (
            <Box
              key={index}
              letter={item.letter}
              color={item.color}
              wordCount={wordCount}
            />
          ))
        : renderInput(wordleRow.input)}
    </div>
  );
};

export default Row;
