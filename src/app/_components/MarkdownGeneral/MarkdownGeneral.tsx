import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import { macros } from "./macros";

export interface MarkdownGeneralProps {
  className?: string;
  children: string;
}

export function MarkdownGeneral(props: MarkdownGeneralProps) {
  return (
    <Markdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[
        () =>
          rehypeKatex({
            macros,
          }),
        rehypeRaw,
      ]}
      className={props.className}
    >
      {props.children}
    </Markdown>
  );
}
