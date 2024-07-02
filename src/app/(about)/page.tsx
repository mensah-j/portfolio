import { SectionHero } from "./_components/SectionHero";
import { SectionAbout } from "./_components/SectionAbout";
import { SectionProjects } from "./_components/SectionProjects";
import { SectionPosts } from "./_components/SectionPosts";
import { Footer } from "../_components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <SectionHero />
      <SectionAbout />
      <SectionProjects />
      <SectionPosts />
      <Footer className="bg-[#181112] text-white" />
    </main>
  );
}
