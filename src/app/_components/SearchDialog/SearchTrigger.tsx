import { FaSearch } from "react-icons/fa";

export function SearchTrigger() {
  return (
    <>
      <div className="hidden sm:flex flex-row items-center justify-between w-40 gap-1 rounded h-7 bg-[#e9e9e9] p-1">
        <div className="flex flex-row items-center gap-1 font-bold text-[#808080] pl-1">
          <FaSearch size={13} />
          <span>search</span>
        </div>
        <div className="flex flex-row items-center gap-1 h-full pl-2 pr-2 text-[10px] font-bold bg-white rounded-sm shadow">
          <span>ctrl+k</span>
        </div>
      </div>
      <div className="sm:hidden">
        <FaSearch fill="#3a3a3a" />
      </div>
    </>
  );
}
