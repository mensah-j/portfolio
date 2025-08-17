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
    <div className="flex flex-col gap-2 sm:pt-5 w-full">
      <MarkdownGeneral>{`# ${props.title}`}</MarkdownGeneral>

      <div className="flex flex-row justify-between items-end border-b pb-3">
        <div className="flex flex-col shrink-0 font-semibold ">
          <span className="text-sm sm:text-base">
            {props.author} • {formatDate(parseISO(props.date), "MMMM d, yyyy")}
          </span>
          <span className="text-xs sm:text-sm text-gray-800 font-semibold">
            {props.length}
          </span>
        </div>

        <PostOptions />
      </div>
    </div>
  );
}
