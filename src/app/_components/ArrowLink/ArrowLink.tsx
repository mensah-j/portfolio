import Link from "next/link";
import React from "react";

export interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ArrowLink(props: ArrowLinkProps) {
  return (
    <Link
      className="text-gray-600 hover:text-black hover:border-black pb-px font-extrabold transition border-b border-transparent text-md motion-reduce:transition-none"
      href={props.href}
    >
      <span className="inline-flex items-center gap-1 font-bold motion-reduce:transition-none text-md hover:gap-2 transition-all">
        {props.children} <span className="text-xl font-bold">➝</span>
      </span>
    </Link>
  );
}
