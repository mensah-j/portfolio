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
      name: "blog",
      path: "/blog",
    },
    {
      name: "projects",
      path: "/projects",
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
      <nav className="flex flex-row items-center justify-end h-full gap-8 font-bold w-[min(100%,_var(--content-width))] pr-4">
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.path}
            className={`${
              pathname === page.path ? "text-emerald-950" : "text-white"
            } hover:text-teal-900`}
          >
            {page.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
