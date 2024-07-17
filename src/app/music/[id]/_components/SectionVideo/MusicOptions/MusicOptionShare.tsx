"use client";

import { MusicOption } from "./MusicOption";
import { FaShareAlt } from "react-icons/fa";
import { useState } from "react";
import { ShareDialog } from "@/app/_components/ShareDialog";

export function MusicOptionShare() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <MusicOption icon={<FaShareAlt />} label="share" />
      </button>
      <ShareDialog open={open} setOpen={setOpen} />
    </>
  );
}
