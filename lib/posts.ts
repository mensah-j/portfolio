import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
import Fuse from "fuse.js";
import { z } from "zod";
import postsIndex from "@build/post-index.json" assert { type: "json" };

export const PostSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  length: z.string(),
  excerpt: z.string().optional(),
  content: z.string().optional(),
});

const postsDirectory = path.join(process.cwd(), "posts");

export function createPosts() {
  const allPosts = fs
    .readdirSync(postsDirectory)
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, "");

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents, {
        excerpt: true,
        excerpt_separator: "<!--more-->",
        engines: {
          yaml: (s: string) =>
            yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object,
        },
      });

      return {
        id,
        ...matterResult.data,
        excerpt: matterResult.excerpt,
        content: matterResult.content,
      };
    })
    .map((post) => {
      const parsed = PostSchema.safeParse(post);
      if (!parsed.success) {
        console.error(parsed.error);
      }

      return parsed.success ? parsed.data : undefined;
    })
    .filter((post) => post !== undefined)
    .map((post) => ({
      ...post,
      path: `/blog/${post.id}`,
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

  const previewPosts = allPosts.map((post) => {
    return { ...post, content: undefined };
  });

  const fuse = new Fuse(
    allPosts,
    {
      keys: ["id", "title", "content"],
    },
    Fuse.parseIndex(postsIndex),
  );

  const searchPosts = (query: string) => fuse.search(query);

  return { all: allPosts, preview: previewPosts, search: searchPosts };
}

export type Posts = ReturnType<typeof createPosts>;

const posts = (() => {
  if (process.env.NODE_ENV === "production") {
    return createPosts();
  } else {
    if (!global.posts) {
      global.posts = createPosts();
    }
    return global.posts as Posts;
  }
})();

export default posts;
