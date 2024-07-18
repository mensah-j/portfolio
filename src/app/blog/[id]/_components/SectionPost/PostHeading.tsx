import { formatDate, parseISO } from "date-fns";
import { PostOptions } from "./PostOptions";
import { MarkdownGeneral } from "@/app/_components/MarkdownGeneral/MarkdownGeneral";

export interface PostHeadingProps {
  title: string;
  author: string;
  date: string;
  length: string;
}

export function PostHeading(props: PostHeadingProps) {
  return (
    <div className="flex flex-col gap-2 pt-5 w-full">
      <h1 className="text-4xl font-extrabold pt-5">
        <MarkdownGeneral>{props.title}</MarkdownGeneral>
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
