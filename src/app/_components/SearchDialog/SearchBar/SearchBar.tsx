"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export interface SearchBarProps {
  onInputChange: (input: string) => void;
}

export function SearchBar(props: SearchBarProps) {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-row items-center gap-4 bg-white border border-gray-300 w-full p-4 rounded">
      <FaSearch size={25} className="text-gray-500" />
      <input
        type="text"
        value={input}
        placeholder="search"
        onChange={(e) => {
          setInput(e.target.value);
          props.onInputChange(e.target.value);
        }}
        className="text-2xl font-bold placeholder:opacity-40 placeholder:text-gray-700 text-gray-700 outline-none w-full bg-inherit"
      />
    </div>
  );
}
