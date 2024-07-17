import Fuse, { IFuseOptions } from "fuse.js";
import postsIndex from "@prebuild/music-index.json" assert { type: "json" };
import { Music } from "./parse";

export function createMusicIndex(posts: Music[]) {
  const options: IFuseOptions<Music> = {
    keys: ["id", "title"],
    threshold: 0.6,
  };

  return new Fuse(posts, options, Fuse.parseIndex(postsIndex));
}
