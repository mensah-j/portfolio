/* eslint-disable */
import { type Posts } from "@lib/posts";

declare global {
  declare module globalThis {
    var posts: Posts;
  }
}

export {};
