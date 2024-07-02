"use client";
import Link from "next/link";
import remarkMath from "remark-math";
import Markdown from "react-markdown";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";

export interface PostItemProps {
  title: string;
  path: string;

  date: string;
  length?: string;
  excerpt?: string;

  titleColor?: string;
  bodyColor?: string;
}

export function PostItem(props: PostItemProps) {
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-4 items-start cursor-pointer hover:scale-[1.015]"
      onClick={() => router.push(props.path)}
    >
      <div className="flex flex-col items-start">
        <Link
          href={props.path}
          className="sm:h-8 text-xl sm:text-2xl font-extrabold"
          style={{ color: props.titleColor ?? "black" }}
        >
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
        </Link>
        <span className="text-sm font-semibold">
          {format(parseISO(props.date), "MMMM d, yyyy")} • {props.length} read
        </span>
      </div>

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
        className={`text-[${props.bodyColor ?? "black"}]`}
      >
        {props.excerpt}
      </Markdown>
    </div>
  );
}
