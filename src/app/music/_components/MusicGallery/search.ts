"use server";

import music from "@lib/music";

export async function search(query: string) {
  return Promise.resolve(music.search(query).map((r) => r.item));
}
