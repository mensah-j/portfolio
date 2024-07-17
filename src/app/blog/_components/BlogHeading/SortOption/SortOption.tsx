"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import mix from "classnames";

export interface SortOptionProps {
  name: string;
  sort: string;

  default?: boolean;
}

export function SortOption(props: SortOptionProps) {
  const pathname = usePathname();
  const params = useSearchParams();

  const currentSort = params.get("sort");
  const active = currentSort ? currentSort === props.sort : props.default;
  return (
    <div className="flex flex-col items-center gap-px group">
      <div>
        <Link
          href={{
            pathname,
            query: { sort: props.sort },
          }}
          replace
          className={mix(
            active ? "text-black" : " text-gray-400",
            "text-xl font-bold hover:text-gray-700",
          )}
        >
          {props.name}
        </Link>
      </div>
      <div
        className={mix(
          {
            "border-b-[15px] duration-500": active,
            "group-hover:border-b-[6px] duration-100": !active,
          },
          "w-[115%] h-[15px] border-[#f0f0f0] transition-[border-width] duration-500",
        )}
      ></div>
    </div>
  );
}
