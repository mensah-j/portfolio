import { Section } from "@/app/_components/Section";

export function SectionAbout() {
  return (
    <Section name="about">
      <div className="prose leading-relaxed">
        <p>
          {`
          Hello! I'm Jeffery. This site collects my musings and writings on
          topics I am generally interested in, such as mathematics, music, or software
          development.
        `}
        </p>
      </div>
    </Section>
  );
}
