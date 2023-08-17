import Link from "next/link";
import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <h2 className="mb-8 text-5xl font-bold">Wordle Plus+</h2>
      <div className="flex flex-col gap-4">
        <Link href="/classic">
          <Button>Classic</Button>
        </Link>
        <Link href="/custom">
          <Button secondary>Custom</Button>
        </Link>
        <Link href="/create">
          <Button secondary>Create</Button>
        </Link>
      </div>
    </>
  );
}
