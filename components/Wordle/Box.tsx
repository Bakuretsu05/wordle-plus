import { LetterType } from "@/app/wordleType";

type PropsType = LetterType & { wordCount: number };

const Box: React.FC<PropsType> = ({ letter, color, wordCount }) => {
  return (
    <div
      color={color}
      className={`p-4 w-16 h-16 flex-centering border-2 border-primary font-bold text-4xl text-white bg-wordle-${color}`}
    >
      {letter}
    </div>
  );
};

export default Box;
