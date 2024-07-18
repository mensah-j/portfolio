import { Footer } from "../_components/Footer";
import { Section } from "../_components/Section";
import { SectionProjects } from "./_components/SectionProjects";

export const metadata = {
  title: "Jeffery Mensah | Projects",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center grow">
      <Section className="pb-5">
        <h1 className="pt-4 sm:pt-8 pb-4 text-4xl sm:text-5xl font-extrabold">
          /projects
        </h1>
      </Section>
      <Section name="about">
        My interests in software are mainly centered around web development,
        graphics programming, and mathematical modeling.
      </Section>
      <SectionProjects />
      <Footer className="bg-[#f9f9f9]" />
    </main>
  );
}
