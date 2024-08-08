"use client";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import { MarkdownGeneral } from "@/app/_components/MarkdownGeneral/MarkdownGeneral";

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
          <MarkdownGeneral>{props.title}</MarkdownGeneral>
        </Link>
        <span className="text-sm font-semibold">
          {format(parseISO(props.date), "MMMM d, yyyy")} • {props.length} read
        </span>
      </div>

      <MarkdownGeneral className={`text-[${props.bodyColor ?? "black"}]`}>
        {props.excerpt ? `${props.excerpt}...` : ""}
      </MarkdownGeneral>
    </div>
  );
}
