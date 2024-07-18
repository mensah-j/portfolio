"use client";

import { ShareDialog } from "@/app/_components/ShareDialog";
import { useState } from "react";
import { FaGithub, FaShareAlt } from "react-icons/fa";

export function PostOptions() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex flex-row items-center justify-end gap-6 font-semibold">
      <button
        onClick={() => setOpen(true)}
        className="flex flex-row items-center justify-center gap-2 text-gray-800 cursor-pointer hover:bg-[#bfd6d0] p-2 sm:pr-[9px] sm:pl-[9px] sm:pt-[5px] sm:pb-[5px] rounded-full"
      >
        <FaShareAlt size={16} />

        <span className="hidden sm:inline">share</span>
      </button>
      <a
        href="https://github.com/mensah-j/portfolio/discussions/new?category=general"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center gap-2 text-gray-800 cursor-pointer hover:bg-[#bfd6d0] p-2 sm:pr-[9px] sm:pl-[9px] sm:pt-[5px] sm:pb-[5px] rounded-full"
      >
        <FaGithub size={19} />
        <span className="hidden sm:inline">discuss</span>
      </a>

      <ShareDialog open={open} setOpen={setOpen} />
    </div>
  );
}
