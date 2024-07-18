/* eslint-disable no-var */

import { createPosts } from "@lib/posts";
import { createMusic } from "@lib/music";
import { parseProjects } from "@lib/projects/parse";

declare global {
  declare namespace globalThis {
    var posts: ReturnType<typeof createPosts>;
    var music: ReturnType<typeof createMusic>;
    var projects: ReturnType<typeof parseProjects>;
  }
}

export {};
