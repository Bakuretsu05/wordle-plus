import WordleApp from "@/components/WordleApp";
import { wordlist_classic } from "../../app/classic/classic-wordle-words";

export default function ClassicPage() {
  return (
    <>
      <h1 className="text-white text-4xl">classic</h1>
      <WordleApp wordlist={wordlist_classic} />
    </>
  );
}
