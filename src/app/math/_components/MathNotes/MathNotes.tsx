import { Section } from "@/app/_components/Section";
import math from "@lib/math";
import { MathNote } from "../MathNote/MathNote";

export function MathItems() {
  return (
    <>
      <Section name="drafts" background="#f4f4f4">
        <ul className="list-disc list-outside pl-10 space-y-3">
          {math.all
            .filter((note) => note.type == "draft")
            .map((note) => (
              <li key={note.id} className="pl-4">
                <MathNote math={note} />
              </li>
            ))}
        </ul>
      </Section>
      <Section name="miscellaneous" background="#f4f4f4">
        <ul className="list-disc list-outside pl-10 space-y-3">
          {math.all
            .filter((note) => note.type == "miscellaneous")
            .map((note) => (
              <li key={note.id} className="pl-4">
                <MathNote math={note} />
              </li>
            ))}
        </ul>
      </Section>
    </>
  );
}
