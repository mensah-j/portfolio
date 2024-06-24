import { FaMagnifyingGlass } from "react-icons/fa6";

export function SearchBar() {
  return (
    <div>
      <button>
        <FaMagnifyingGlass />
        <span>search</span>
        <div>
          <span>ctrl+k</span>
        </div>
      </button>
    </div>
  );
}
