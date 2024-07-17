"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export interface SearchBarDefaultProps {
  onInputChange: (input: string) => void;
}

export function SearchBarDefault(props: SearchBarDefaultProps) {
  const [input, setInput] = useState("");
  return (
    <>
      <div
        tabIndex={0}
        className="sm:flex flex-row items-center justify-between gap-1 rounded w-40 has-[input:focus]:w-64 has-[input:valid]:w-64 h-7 bg-[#e9e9e9] p-1 transition-[width]"
      >
        <form className="flex flex-row items-center gap-1 font-bold text-[#808080] pl-1 w-full">
          <FaSearch size={13} className="shrink-0" />
          <input
            type="text"
            value={input}
            required
            minLength={1}
            placeholder="search"
            tabIndex={0}
            onChange={(e) => {
              setInput(e.target.value);
              props.onInputChange(e.target.value);
            }}
            className="outline-none w-full bg-inherit text-gray-900"
          />

          {input && (
            <button
              onClick={() => {
                setInput("");
                props.onInputChange("");
              }}
            >
              <FaXmark className="text-gray-500 group-hover:text-gray-700" />
            </button>
          )}
        </form>
      </div>
    </>
  );
}
