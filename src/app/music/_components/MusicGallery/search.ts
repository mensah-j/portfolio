"use server";

import music from "@lib/music";

export async function search(query: string) {
  return music.search(query).map((r) => r.item);
}
