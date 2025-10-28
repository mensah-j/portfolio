import { Footer } from "../_components/Footer";
import { Section } from "../_components/Section";
import { MathAbout } from "./_components/MathAbout";
import { MathHeading } from "./_components/MathHeading";
import { MathItems } from "./_components/MathNotes/MathNotes";

export const metadata = {
  title: "Jeffery Mensah | Math",
};

export default function Page() {
  return (
    <main className="flex flex-col items-center grow">
      <MathHeading />
      <MathAbout />
      <MathItems />
      <Section background="#f4f4f4" last></Section>
      <Footer className="bg-white" />
    </main>
  );
}
