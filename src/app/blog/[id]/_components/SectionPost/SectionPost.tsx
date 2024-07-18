import { Section } from "@/app/_components/Section";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import { PostHeading } from "./PostHeading";

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
        <Markdown
          remarkPlugins={[remarkMath]}
          rehypePlugins={[
            () =>
              rehypeKatex({
                macros: {
                  "\\abs": "|#1|",
                },
              }),
            rehypeRaw,
          ]}
        >
          {props.content}
        </Markdown>
      </div>
    </Section>
  );
}
