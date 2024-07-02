"use client";

import { useState } from "react";
import { search } from "./search";
import { SearchDialog } from "@/app/_components/SearchDialog";
import { BlogSearchFooter } from "./BlogSearchFooter";
import {
  BlogSearchResultList,
  PostSearchResultProps,
} from "./BlogSearchResultList";

export function BlogSearch() {
  const [results, setResults] = useState<PostSearchResultProps[]>([]);

  return (
    <SearchDialog
      search={(query) => {
        search(query).then((results) => setResults(results));
      }}
    >
      <BlogSearchResultList results={results} />
      <BlogSearchFooter />
    </SearchDialog>
  );
}
