"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import styles from "./SearchBar.module.css";
import mix from "classnames";

export interface SearchBarProps {
  onInputChange: (input: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-row items-center gap-3 sm:gap-4 bg-white border border-gray-300 w-full pt-2 pb-2 pl-3 pr-3 sm:p-4 rounded">
      <FaSearch className="text-gray-500 shrink-0 text-2xl hidden sm:block" />
      <input
        type="text"
        value={input}
        placeholder="search"
        onChange={(e) => {
          setInput(e.target.value);
          props.onInputChange(e.target.value);
        }}
        className="text-xl sm:text-2xl font-bold placeholder:opacity-40 placeholder:text-gray-700 text-gray-700 outline-none w-full bg-inherit"
      />
      {input && (
        <button
          className={mix("group", styles["clear-input"])}
          onClick={() => {
            setInput("");
            props.onInputChange("");
          }}
        >
          <FaXmark className="text-gray-500 group-hover:text-gray-700 text-xl sm:text-2xl" />
        </button>
      )}
    </div>
  );
}
