"use client";
import { Section } from "@/app/_components/Section";
import { Music } from "@lib/music";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactShowMoreText from "react-show-more-text";

export interface MusicLatestProps {
  latest: Music;
}

export function MusicLatest(props: MusicLatestProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const thumbnails = [
    `${isClient ? window.location.origin : ""}/music/thumb/${props.latest.path}/thumb.png`,
    `https://img.youtube.com/vi/${props.latest.video}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${props.latest.video}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${props.latest.video}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${props.latest.video}/sddefault.jpg`,
  ];
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  return (
    <Section name="latest" background="#f4f4f4" className="pb-10">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-8 w-full p-2 sm:p-0">
        <Link
          href={props.latest.path}
          className="relative w-full sm:w-1/2 aspect-video hover:scale-[1.005] shrink-0 self-start bg-white shadow-md shadow-gray-300 rounded"
        >
          <Image
            className="object-cover"
            priority={true}
            src={thumbnails[thumbnailIndex]}
            alt={props.latest.title}
            onError={() => {
              if (thumbnailIndex < thumbnails.length - 1) {
                setThumbnailIndex(thumbnailIndex + 1);
              }
            }}
            fill
            sizes={"100%"}
          />
        </Link>
        <div className="flex flex-col gap-2">
          <span className="font-extrabold text-3xl">{props.latest.title}</span>
          <ReactShowMoreText lines={4} anchorClass="font-bold cursor-pointer">
            {props.latest.description}
          </ReactShowMoreText>
        </div>
      </div>
    </Section>
  );
}
