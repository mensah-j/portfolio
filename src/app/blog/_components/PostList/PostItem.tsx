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
      className="flex flex-col items-start gap-4 hover:scale-[1.015] cursor-pointer"
      onClick={() => router.push(props.path)}
    >
      <div className="flex flex-col items-start ">
        <Link
          href={props.path}
          className="font-extrabold text-2xl"
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
