import { ColorType } from "../WordleApp/wordleType";
import { KeyType } from "./KeyboardTypes";
import { FiDelete } from "react-icons/fi";

function getKeyClassName(color: ColorType) {
  switch (color) {
    case "green":
      return "bg-wordle-green";
    case "yellow":
      return "bg-wordle-yellow";
    case "gray":
      return "bg-wordle-gray";
    case "none":
      return "bg-gray-500";
  }
}

interface PropsType {
  handlePress: (keyValue: KeyType) => void;
  value: KeyType;
  color: ColorType;
}

export default function KeyButton({ handlePress, value, color }: PropsType) {
  return (
    <button
      onClick={() => handlePress(value)}
      color={color}
      className={`p-3 ${
        /^[A-Z]{1}$/.test(value.toUpperCase()) ? "w-10" : "flex-1"
      } flex-centering rounded text-2xl text-white font-bold ${getKeyClassName(
        color
      )}`}
    >
      {value === "Backspace" ? <FiDelete /> : value}
    </button>
  );
}
