import { SectionHero } from "./_components/SectionHero";
import { SectionAbout } from "./_components/SectionAbout";
import { SectionProjects } from "./_components/SectionProjects";
import { SectionPosts } from "./_components/SectionPosts";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <SectionHero />
      <SectionAbout />
      <SectionProjects />
      <SectionPosts />
    </main>
  );
}
