/* eslint-disable no-var */

import { createPosts } from "@lib/posts";
import { createMusic } from "@lib/music";

declare global {
  declare module globalThis {
    var posts: ReturnType<typeof createPosts>;
    var music: ReturnType<typeof createMusic>;
  }
}

export {};
