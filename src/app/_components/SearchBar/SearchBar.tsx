import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchBar() {
  return (
    <button className="flex flex-row gap-1 items-center w-40">
      <div className="flex flex-row gap-1 items-center">
        <FaMagnifyingGlass />
        <span>search</span>
      </div>
      <div>
        <span>ctrl+k</span>
      </div>
    </button>
  );
}
