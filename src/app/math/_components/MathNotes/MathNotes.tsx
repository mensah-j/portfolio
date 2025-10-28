import { Section } from "@/app/_components/Section";
import math from "@lib/math";
import { MathNote } from "../MathNote/MathNote";

export function MathItems() {
  return (
    <Section name="drafts" background="#f4f4f4">
      <ul className="list-disc list-outside pl-10 space-y-1">
        {math.all.map((note) => (
          <li key={note.id} className="pl-4">
            <MathNote math={note} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
