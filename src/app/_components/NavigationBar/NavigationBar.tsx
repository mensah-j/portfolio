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
      name: "projects",
      path: "/projects",
    },
    {
      name: "blog",
      path: "/blog",
    },
    {
      name: "music",
      path: "/music",
    },
    {
      name: "cv",
      path: "/cv",
    },
  ];

  return (
    <div className="flex justify-center w-full h-10 bg-[#6b9491]">
      <nav className="flex flex-row items-center justify-end h-full gap-8 pr-5 font-bold w-content">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.path}
            className={`${
              pathname === page.path ? "text-[#000c09]" : "text-white"
            } hover:text-teal-900`}
          >
            {page.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
