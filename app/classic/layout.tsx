import { robotoCondensed } from "../layout";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${robotoCondensed.className} h-screen w-screen bg-secondary flex flex-col items-center justify-center`}
    >
      {children}
    </main>
  );
}
