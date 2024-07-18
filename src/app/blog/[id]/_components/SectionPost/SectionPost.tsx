import { Section } from "@/app/_components/Section";
import { PostHeading } from "./PostHeading";
import { MarkdownGeneral } from "@/app/_components/MarkdownGeneral/MarkdownGeneral";

export interface SectionPostProps {
  title: string;
  author: string;
  date: string;
  length: string;
  content: string;
}

export function SectionPost(props: SectionPostProps) {
  return (
    <Section background="#f9f9f9" className="!pl-10 !pr-10" last>
      <PostHeading {...props} />
      <div className="pt-5">
        <MarkdownGeneral>{props.content}</MarkdownGeneral>
      </div>
    </Section>
  );
}
