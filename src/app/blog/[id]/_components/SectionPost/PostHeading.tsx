import { formatDate, parseISO } from "date-fns";
import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import { PostOptions } from "./PostOptions";

export interface PostHeadingProps {
  title: string;
  author: string;
  date: string;
  length: string;
}

export function PostHeading(props: PostHeadingProps) {
  return (
    <div className="flex flex-col gap-4 pt-5 w-full">
      <h1 className="text-4xl font-extrabold pt-5">
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
          {props.title}
        </Markdown>
      </h1>
      <div className="flex flex-row justify-between items-end border-b pb-3">
        <div className="flex flex-col shrink-0 font-semibold ">
          <span>
            {props.author} • {formatDate(parseISO(props.date), "MMMM d, yyyy")}
          </span>
          <span className="text-sm text-gray-800 font-semibold">
            {props.length} read
          </span>
        </div>

        <PostOptions />
      </div>
    </div>
  );
}
