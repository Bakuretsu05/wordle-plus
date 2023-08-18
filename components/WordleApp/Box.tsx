import { ColorType, LetterType } from "@/components/WordleApp/wordleType";

const emptyBox =
  "flex-centering font-bold text-white border-2 border-primary bg-transparent";
const grayBox = "flex-centering font-bold text-white bg-wordle-gray";
const yellowBox = "flex-centering font-bold text-white bg-wordle-yellow";
const greenBox = "flex-centering font-bold text-white bg-wordle-green";

function getBoxSize(wordCount: number) {
  if (wordCount <= 3) return "";
  else if (wordCount >= 7) return "";
  else return "p-4 w-16 h-16 text-4xl";
}

function getBoxClassName(color: ColorType) {
  switch (color) {
    case "green":
      return greenBox;
    case "yellow":
      return yellowBox;
    case "gray":
      return grayBox;
    case "none":
      return emptyBox;
  }
}

type PropsType = LetterType & { wordCount: number };

const Box: React.FC<PropsType> = ({ letter, color, wordCount }) => {
  const boxSize = getBoxSize(wordCount);

  const boxClassName = boxSize + " " + getBoxClassName(color);

  return (
    <div color={color} className={boxClassName}>
      {letter}
    </div>
  );
};

export default Box;
