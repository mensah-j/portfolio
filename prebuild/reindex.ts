import fs from "fs";
import Fuse from "fuse.js";
import path from "path";
import { parsePosts } from "@lib/posts/parse";
import { getMarkdownTextContent } from "@lib/markdown/compile";

const posts = parsePosts().map((post) => {
  return {
    ...post,
    title: getMarkdownTextContent(post.title),
    content: getMarkdownTextContent(post.content ?? ""),
  };
});
const postIndex = Fuse.createIndex(["title", "content"], posts);

const buildDirectory = path.join(process.cwd(), "prebuild/post-index.json");

fs.writeFileSync(buildDirectory, JSON.stringify(postIndex.toJSON()));
