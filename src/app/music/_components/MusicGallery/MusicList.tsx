import { Music } from "@lib/music";
import { MusicItem } from "../MusicItem/MusicItem";
import React from "react";

export interface MusicListProps {
  music: Music[];
  type: string;
  notFoundIcon: React.ReactNode;
}

export function MusicList(props: MusicListProps) {
  return props.music.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full pt-4 pb-8">
      {props.music.map((piece: Music) => (
        <MusicItem key={piece.id} music={piece} {...piece} />
      ))}
    </div>
  ) : (
    <div className="flex flex-col items-center gap-2 w-full pt-10 pb-10">
      {props.notFoundIcon}
      <p className="text-sm sm:text-base">No {props.type} found</p>
    </div>
  );
}
