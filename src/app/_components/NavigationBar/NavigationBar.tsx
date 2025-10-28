"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavigationBar() {
  const pathname = usePathname();
  const pages = [
    {
      name: "about",
      path: "/",
    },
    {
      name: "math",
      path: "/math",
    },
    {
      name: "blog",
      path: "/blog",
    },
    {
      name: "music",
      path: "/music",
    },
  ];

  return (
    <div className="flex justify-center w-full h-10 bg-[#6b9491]">
      <nav className="flex flex-row gap-8 justify-end items-center pr-5 h-full font-bold w-content">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.path}
            className={`${
              pathname.split("/")[1] === page.name
                ? "text-[#000c09]"
                : "text-white"
            } hover:text-teal-900`}
          >
            {page.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
