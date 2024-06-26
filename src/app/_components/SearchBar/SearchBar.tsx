"use client";

import { FaSearch } from "react-icons/fa";

export function SearchBar() {
  return (
    <div className="flex flex-row items-center justify-between w-40 gap-1 rounded h-7 bg-[#dedede] p-1">
      <div className="flex flex-row items-center gap-1 font-bold text-[#808080] pl-1">
        <FaSearch size={13} />
        <span>search</span>
      </div>
      <div className="flex flex-row items-center gap-1 h-full pl-2 pr-2 text-[10px] font-bold bg-white rounded-sm shadow">
        <span>ctrl+k</span>
      </div>
    </div>
  );
}
