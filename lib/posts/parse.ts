import fs from "fs";
import matter from "gray-matter";
import jsYaml from "js-yaml";
import path from "path";
import { z } from "zod";

const PostSchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  length: z.string(),
  excerpt: z.string().optional(),
  content: z.string().optional(),
});

export type Post = z.infer<typeof PostSchema> & { path: string };

export function parsePosts() {
  const postsDirectory = path.join(process.cwd(), "posts");

  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .map((id) => {
      const fullPath = path.join(postsDirectory, id, "post.md");
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const matterResult = matter(fileContents, {
        excerpt: true,
        excerpt_separator: "<!--more-->",
        engines: {
          yaml: (s: string) =>
            jsYaml.load(s, { schema: jsYaml.JSON_SCHEMA }) as object,
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
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}
