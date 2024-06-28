"use client";

import { SearchBarTrigger } from "@/app/_components/SearchBarTrigger";
import { SearchDialog } from "@/app/_components/SearchDialog";

export function BlogSearch() {
  return <SearchDialog trigger={<SearchBarTrigger />}></SearchDialog>;
}
