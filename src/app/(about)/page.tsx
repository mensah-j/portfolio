import Image from "next/image";
import { SectionHero } from "./_components/SectionHero";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <SectionHero />
    </main>
  );
}
