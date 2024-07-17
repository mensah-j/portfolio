import fs from "fs";
import Fuse from "fuse.js";
import path from "path";
import { parsePosts } from "@lib/posts/parse";
import { parseMusic } from "@lib/music/parse";
import { getMarkdownTextContent } from "@lib/markdown/compile";

const buildDirectory = path.join(process.cwd(), "prebuild");

const posts = parsePosts().map((post) => {
  return {
    ...post,
    title: getMarkdownTextContent(post.title),
    content: getMarkdownTextContent(post.content ?? ""),
  };
});
const postIndex = Fuse.createIndex(["title", "content"], posts);
fs.writeFileSync(
  path.join(buildDirectory, "post-index.json"),
  JSON.stringify(postIndex.toJSON()),
);

const music = parseMusic();
const musicIndex = Fuse.createIndex(["title", "description"], music);
fs.writeFileSync(
  path.join(buildDirectory, "music-index.json"),
  JSON.stringify(musicIndex.toJSON()),
);
