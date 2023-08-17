export type ColorType = "none" | "yellow" | "green" | "gray";

export interface LetterType {
  letter: string;
  color: ColorType;
}

export type WordleType = LetterType[][];
