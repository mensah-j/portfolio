"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import { FaRegFile } from "react-icons/fa";
import mix from "classnames";

export interface PostSearchResultProps {
  id: string;
  title: string;
  date: string;
  length: string;
  path: string;
  selected?: boolean;
}

export function PostSearchResult(props: PostSearchResultProps) {
  return (
    <Link
      href={props.path}
      className={mix(
        "group flex flex-row gap-2 items-center p-2 shadow rounded cursor-pointer",
        props.selected ? "bg-[#36b393] text-white" : "bg-white text-#333333",
      )}
    >
      <FaRegFile
        size={24}
        className={mix("ml-1 mr-1 fill-[#575757] shrink-0", {
          "fill-white": props.selected,
        })}
      />
      <div
        className={mix("flex flex-col items-start min-w-0", {
          "[&_mark]:text-white [&_mark]:underline [&_mark]:decoration-2":
            props.selected,
        })}
      >
        <div
          className="w-full h-6 sm:h-8 text-md sm:text-lg font-extrabold [&>p]:text-ellipsis [&>p]:overflow-hidden [&>p]:whitespace-nowrap"
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
        <span className="text-xs font-semibold">
          {format(parseISO(props.date), "MMMM d, yyyy")} • {props.length} read
        </span>
      </div>
    </Link>
  );
}
