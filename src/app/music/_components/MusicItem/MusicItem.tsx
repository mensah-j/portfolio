"use client";

import { Music } from "@lib/music";
import { MusicItemOptions } from "./MusicItemOptions";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface MusicItemProps {
  title: string;
  description?: string;
  path: string;
  music: Music;
}

export function MusicItem(props: MusicItemProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const thumbnails = [
    `${isClient ? window.location.origin : ""}/music/thumb/${props.path}/thumb.png`,
    `https://img.youtube.com/vi/${props.music.video}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${props.music.video}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${props.music.video}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${props.music.video}/sddefault.jpg`,
  ];
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  return (
    <Link href={props.path} onClick={() => console.log("wtf")}>
      <div className="flex flex-row sm:flex-col gap-3 sm:gap-2 p-2 sm:p-0 sm:pb-4 rounded cursor-pointer">
        <div className="relative w-1/3 sm:w-full shrink-0 aspect-video hover:scale-[1.005] hover:shadow-md hover:shadow-[#cecece] rounded hover:rounded-none transition-[border-radius_scale] shadow shadow-[#c4c4c4] bg-white">
          <Image
            className="object-cover"
            src={thumbnails[thumbnailIndex]}
            alt={props.title}
            onError={() => {
              if (thumbnailIndex < thumbnails.length - 1) {
                setThumbnailIndex(thumbnailIndex + 1);
              }
            }}
            fill
            sizes={"100%"}
          />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col gap-1">
            <p className="text-lg line-clamp-2 sm:text-base font-bold text-gray-800">
              {props.music.title}
            </p>
            <p className="text-xs sm:text-[13px] line-clamp-2 sm:line-clamp-1 text-gray-700">
              {props.music.description}
            </p>
          </div>

          <MusicItemOptions music={props.music} />
        </div>
      </div>
    </Link>
  );
}
