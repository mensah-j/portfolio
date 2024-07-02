import Fuse, { IFuseOptions } from "fuse.js";
import postsIndex from "@build/post-index.json" assert { type: "json" };
import { Post } from "./parse";

export function createPostsIndex(posts: Post[]) {
  const options: IFuseOptions<Post> = {
    keys: ["id", "title", "content"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
    distance: 300,
  };

  return new Fuse(posts, options, Fuse.parseIndex(postsIndex));
}
