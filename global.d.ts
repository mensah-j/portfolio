/* eslint-disable no-var */

import { createPosts } from "@lib/posts";
import { createMusic } from "@lib/music";
import { createMath } from "@lib/math";
import { parseProjects } from "@lib/projects/parse";

declare global {
  declare namespace globalThis {
    var posts: ReturnType<typeof createPosts>;
    var music: ReturnType<typeof createMusic>;
    var math: ReturnType<typeof createMath>;
    var projects: ReturnType<typeof parseProjects>;
  }

  namespace JSX {
    // this merges with the existing intrinsic elements, adding 'my-custom-tag' and its props
    interface IntrinsicElements {
      tikz: { node: unknown };
    }
  }
}

export {};
