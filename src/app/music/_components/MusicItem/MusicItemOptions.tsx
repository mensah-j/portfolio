"use client";

import { ShareDialog } from "@/app/_components/ShareDialog";
import { Music } from "@lib/music";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaShareAlt, FaYoutube } from "react-icons/fa";
import { MdLibraryMusic } from "react-icons/md";

export interface MusicItemOptionsProps {
  music: Music;
}

function MusicItemOption({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <DropdownMenu.Item
      onSelect={onSelect}
      onClick={(e) => e.stopPropagation()}
      className="text-gray-700 data-[highlighted]:bg-gray-100 data-[highlighted]:outline-none cursor-pointer"
    >
      {children}
    </DropdownMenu.Item>
  );
}

export function MusicItemOptions(props: MusicItemOptionsProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const [isShareOpen, setIsShareOpen] = useState(false);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="text-gray-500 hover:text-gray-700">
        <span className="sr-only">Open options</span>
        <BsThreeDotsVertical size={20} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          side="bottom"
          sideOffset={5}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className="group text-sm font-semibold  -translate-x-1/4 sm:-translate-x-[calc(50%_-_12px)] rounded border bg-white shadow-lg shadow-gray-400"
        >
          <MusicItemOption onSelect={() => setIsShareOpen(true)}>
            <button
              className="flex flex-row gap-2 pl-3 pr-3 pt-2 pb-2 items-center"
              onClick={() => setIsShareOpen(true)}
            >
              <FaShareAlt size={16} />
              <span>share</span>
            </button>
          </MusicItemOption>
          <MusicItemOption
            onSelect={() =>
              window.open(`/music/scores/${props.music.id}`, "_blank")
            }
          >
            <div className="flex flex-row gap-2 pl-3 pr-3 pt-2 pb-2 items-center">
              <MdLibraryMusic size={16} />
              <span>view score</span>
            </div>
          </MusicItemOption>

          <MusicItemOption
            onSelect={() =>
              window.open(
                `https://youtube.com/watch?v=${props.music.video}`,
                "_blank",
              )
            }
          >
            <div className="flex flex-row gap-2 pl-3 pr-3 pt-2 pb-2 items-center">
              <FaYoutube size={16} />
              <span>watch on youtube</span>
            </div>
          </MusicItemOption>

          <div className="w-2 h-2 -z-20 bg-white rotate-45 translate-x-[calc(-50%-11px)] translate-y-[calc(50%+1px)] group-[[data-side=bottom]]:translate-y-[calc(-50%-1px)] absolute left-full group-[[data-side=top]]:bottom-0 group-[[data-side=bottom]]:top-0 group-[[data-side=bottom]]:border-t group-[[data-side=bottom]]:border-l group-[[data-side=top]]:shadow-[rgba(0,0,0,0.1)_2px_2px_1px]"></div>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>

      <ShareDialog
        link={
          isClient ? `${window?.location.origin}/music/${props.music.id}` : ""
        }
        open={isShareOpen}
        setOpen={setIsShareOpen}
      />
    </DropdownMenu.Root>
  );
}
