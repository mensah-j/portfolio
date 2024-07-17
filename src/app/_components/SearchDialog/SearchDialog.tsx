"use client";
import { BaseDialog } from "../BaseDialog";
import { SearchBar } from "./SearchBar";
import debounce from "debounce";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import mix from "classnames";

export interface SearchDialogProps {
  search: (query: string) => void;
  listener?: {
    type: keyof DocumentEventMap;
    action: (e: Event, open: boolean) => boolean;
  };

  className?: string;

  trigger: React.ReactNode;
  children: React.ReactNode;
}

export function SearchDialog(props: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const dialogListener = (e: Event) => {
    if (props.listener) {
      setOpen(props.listener.action(e, open));
    }
  };

  useEffect(() => {
    if (!props.listener) {
      return;
    }

    window.addEventListener(props.listener.type, dialogListener);
    return () => {
      if (!props.listener) {
        return;
      }
      window.removeEventListener(props.listener.type, dialogListener);
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
        {props.trigger}
      </button>
      <BaseDialog title="Search" open={open} onClose={() => setOpen(false)}>
        <div className={mix("flex flex-col h-full", props.className)}>
          <div className="flex flex-row items-center gap-4 p-4">
            <div className="sm:hidden">
              <FaArrowLeft
                className="text-xl text-gray-500 hover:text-gray-700"
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
