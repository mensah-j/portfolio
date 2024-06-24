import Link from "next/link";
import React from "react";
import mix from "classnames";

export interface ArrowLinkProps {
  href: string;
  dark?: boolean;
  children: React.ReactNode;
}

export function ArrowLink(props: ArrowLinkProps) {
  return (
    <Link
      className={mix(
        !props.dark
          ? "text-gray-600 hover:text-black hover:border-black"
          : "text-gray-300 hover:text-white hover:border-white",
        "pb-pxfont-extrabold transition border-b border-transparent text-md motion-reduce:transition-none",
      )}
      href={props.href}
    >
      <span className="inline-flex gap-1 items-center font-bold transition-all hover:gap-2 motion-reduce:transition-none text-md">
        {props.children} <span className="text-xl font-bold">➝</span>
      </span>
    </Link>
  );
}
