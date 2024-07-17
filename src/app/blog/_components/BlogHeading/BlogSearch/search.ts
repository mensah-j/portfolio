"use server";

import posts from "@lib/posts";
import { highlightMarkdown } from "@lib/markdown/compile";
import { PostSearchResultProps } from "./BlogSearchResultList";

export async function search(query: string): Promise<PostSearchResultProps[]> {
  return Promise.resolve(
    posts
      .search(query)
      .map((r) => {
        const match = r.matches?.find((m) => m.key === "title");
        return (
          match && {
            id: r.item.id,
            title: highlightMarkdown(r.item.title, match.indices),
            date: r.item.date,
            length: r.item.length,
            path: r.item.path,
          }
        );
      })
      .filter((p) => p !== undefined),
  );
}
