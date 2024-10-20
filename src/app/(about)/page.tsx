import { SectionHero } from "./_components/SectionHero";
import { SectionAbout } from "./_components/SectionAbout";
import { SectionPosts } from "./_components/SectionPosts";
import { Footer } from "../_components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center grow">
      <SectionHero />
      <SectionAbout />
      <SectionPosts />
      <Footer className="bg-[#f7f7f7]" />
    </main>
  );
}
