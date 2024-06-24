import fs from "fs";
import path from "path";
import matter from "gray-matter";
import yaml from "js-yaml";
import { z } from "zod";

const PostSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  length: z.string(),
  excerpt: z.string().optional(),
});

const postsDirectory = path.join(process.cwd(), "posts");

function getPostsFromFiles(fileNames: string[]) {
  const allPosts = fileNames
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
    }));

  return allPosts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  return getPostsFromFiles(fileNames);
}

export function getPostsPreview() {
  const fileNames = fs.readdirSync(postsDirectory).slice(0, 3);
  return getPostsFromFiles(fileNames);
}
