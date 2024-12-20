import { Section } from "@/app/_components/Section";
import { PostHeading } from "./PostHeading";
import { MarkdownGeneral } from "@/app/_components/MarkdownGeneral/MarkdownGeneral";

export interface SectionPostProps {
  title: string;
  author: string;
  date: string;
  length: string;
  content: string;
  source: string;
}

export function SectionPost(props: SectionPostProps) {
  return (
    <Section background="#f9f9f9" className="" last>
      <PostHeading {...props} />
      <div className="pl-1 pr-1 sm:pt-5 sm:text-lg w-full">
        <MarkdownGeneral
          source={props.source}
          className="leading-[1.43rem] sm:leading-[1.88rem] text-sm sm:text-base"
        >
          {props.content}
        </MarkdownGeneral>
      </div>
    </Section>
  );
}
