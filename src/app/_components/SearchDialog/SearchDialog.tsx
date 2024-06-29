"use client";

import { BaseDialog } from "@/app/_components/BaseDialog";
import { SearchBar } from "./SearchBar";
import debounce from "debounce";

export interface SearchDialogProps {
  search: (query: string) => void;

  children: React.ReactNode;
  trigger: React.ReactNode;
}

export function SearchDialog(props: SearchDialogProps) {
  return (
    <BaseDialog trigger={props.trigger}>
      <div className="p-4">
        <SearchBar onInputChange={debounce(props.search, 200)} />
      </div>
      <div
        className="overflow-y-auto pl-4 pr-4 pb-4 max-h-[500px]"
        style={{ scrollbarWidth: "thin" }}
      >
        {props.children}
      </div>
    </BaseDialog>
  );
}
