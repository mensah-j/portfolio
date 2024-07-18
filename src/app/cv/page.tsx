import { Footer } from "../_components/Footer";
import { MarkdownGeneral } from "../_components/MarkdownGeneral/MarkdownGeneral";
import { Section } from "../_components/Section";
import cv from "./cv.md";

export const metadata = {
  title: "Jeffery Mensah | CV",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center grow">
      <Section className="pb-5">
        <h1 className="pt-4 sm:pt-8 pb-4 text-4xl sm:text-5xl font-extrabold">
          /cv
        </h1>
      </Section>
      <Section last>
        <MarkdownGeneral>{cv}</MarkdownGeneral>
      </Section>
      <Footer />
    </main>
  );
}
