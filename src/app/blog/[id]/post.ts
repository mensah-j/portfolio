"use server";

import { readFileSync } from "fs";
import matter from "gray-matter";
import path from "path";

const postDirectory = path.join(process.cwd(), "posts");

export async function getPost(id: string) {
  const fullPath = path.join(postDirectory, id, `post.md`);
  const fileContents = readFileSync(fullPath, "utf8");

  return Promise.resolve(matter(fileContents).content);
}
