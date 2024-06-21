"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface PostItemProps {
  id: number;
  name: string | React.ReactNode;
  path: string;

  date: string;
  length: string;
  excerpt: string | React.ReactNode;
}

export function PostItem(props: PostItemProps) {
  const router = useRouter();
  return (
    /* go to path on click */
    <div
      className="flex flex-col items-start gap-4 hover:scale-[1.015] cursor-pointer"
      onClick={() => router.push(props.path)}
    >
      <div className="flex flex-col items-start ">
        <Link
          href={props.path}
          className="text-[#e5d6ba] font-extrabold text-2xl"
        >
          {props.name}
        </Link>
        <span className="text-sm font-semibold">
          {props.date} • {props.length} read
        </span>
      </div>

      <div>{props.excerpt}</div>
    </div>
  );
}
