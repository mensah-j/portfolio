"use client";
import NanoClamp from "nanoclamp";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface PostItemProps {
  name: string;
  path: string;

  date: string;
  length: string;
  excerpt: string;
}

export function PostItem(props: PostItemProps) {
  const router = useRouter();
  return (
    /* go to path on click */
    <div
      className="flex flex-col items-start gap-4 hover:scale-[1.005] cursor-pointer"
      onClick={() => router.push(props.path)}
    >
      <div className="flex flex-col items-start ">
        <Link
          href={props.path}
          className="pb-px text-[#e5d6ba] font-extrabold transition-[text-decoration] hover:decoration-[#dfc89e] underline decoration-transparent text-2xl motion-reduce:transition-none decoration-2"
        >
          {props.name}
        </Link>
        <span className="text-sm font-semibold">
          {props.date} • {props.length} read
        </span>
      </div>

      <Link href={props.path}>
        <p>{props.excerpt}…</p>
      </Link>
    </div>
  );
}
