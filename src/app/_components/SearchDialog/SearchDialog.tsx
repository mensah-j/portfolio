"use client";

import { BaseDialog } from "@/app/_components/BaseDialog";
import { SearchBar } from "./SearchBar";

export interface SearchDialogProps {
  trigger: React.ReactNode;
}

export function SearchDialog(props: SearchDialogProps) {
  return (
    <BaseDialog trigger={props.trigger}>
      <SearchBar
        onInputChange={(input: string) => {
          console.log(input);
        }}
      />
    </BaseDialog>
  );
}
