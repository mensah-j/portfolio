"use server";

import posts from "@lib/posts";

export async function search(query: string) {
  return posts.search(query);
}
