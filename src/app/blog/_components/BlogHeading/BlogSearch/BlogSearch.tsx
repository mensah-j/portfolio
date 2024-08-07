"use client";

import { useState } from "react";
import { search } from "./search";
import {
  SearchDialog,
  SearchTriggerCtrlK,
  SearchTriggerIcon,
} from "@/app/_components/SearchDialog";
import { BlogSearchFooter } from "./BlogSearchFooter";
import {
  BlogSearchResultList,
  PostSearchResultProps,
} from "./BlogSearchResultList";

export interface BlogSearchProps {
  visible?: boolean;
}

export function BlogSearch(props: BlogSearchProps) {
  const [results, setResults] = useState<PostSearchResultProps[]>([]);

  return (
    <SearchDialog
      trigger={
        props.visible ? (
          <>
            <div className="hidden sm:block">
              <SearchTriggerCtrlK />
            </div>
            <div className="sm:hidden">
              <SearchTriggerIcon />
            </div>
          </>
        ) : (
          <></>
        )
      }
      search={(query) => {
        search(query)
          .then((results) => setResults(results))
          .catch(() => {
            setResults([]);
          });
      }}
      listener={{
        type: "keydown",
        action: (e: Event, open: boolean) => {
          const event = e as KeyboardEvent;
          if (event.key === "k" && event.ctrlKey) {
            event.preventDefault();
            return !open;
          }

          if (event.key == "Escape") {
            event.preventDefault();
            return false;
          }

          return open;
        },
      }}
    >
      <BlogSearchResultList results={results} />
      <BlogSearchFooter />
    </SearchDialog>
  );
}
