"use client";
import { SearchTrigger } from "./SearchTrigger";
import { BaseDialog } from "../BaseDialog";
import { SearchBar } from "./SearchBar";
import debounce from "debounce";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

export interface SearchDialogProps {
  search: (query: string) => void;

  children: React.ReactNode;
}

export function SearchDialog(props: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const ctrlKListener = (e: KeyboardEvent) => {
    if (e.key === "k" && e.ctrlKey) {
      e.preventDefault();
      setOpen(!open);
    }
  };

  const escListener = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", ctrlKListener);
    document.addEventListener("keydown", escListener);
    return () => {
      document.removeEventListener("keydown", ctrlKListener);
      document.removeEventListener("keydown", escListener);
    };
  });

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        <SearchTrigger />
      </button>
      <BaseDialog open={open} onClose={() => setOpen(false)}>
        <div className="flex flex-col h-full">
          <div className="flex flex-row items-center gap-4 p-4">
            <div className="sm:hidden">
              <FaArrowLeft
                className="text-xl text-gray-500 "
                onClick={() => setOpen(false)}
              />
            </div>
            <SearchBar onInputChange={debounce(props.search, 200)} />
          </div>
          {props.children}
        </div>
      </BaseDialog>
    </>
  );
}
