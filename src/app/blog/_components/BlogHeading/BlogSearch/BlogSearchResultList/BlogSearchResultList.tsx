import { FaRegFile } from "react-icons/fa";
import { PostSearchResult, PostSearchResultProps } from "./PostSearchResult";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export interface BlogSearchResultListProps {
  results: PostSearchResultProps[];
}

function scrollTo(element: HTMLDivElement | null) {
  element?.scrollIntoView({
    block: "nearest",
    inline: "nearest",
    behavior: "instant",
  });
}

export function BlogSearchResultList(props: BlogSearchResultListProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const previousResult = useRef<HTMLDivElement | null>(null);
  const nextResult = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  function getResultRef(index: number) {
    const delta =
      (index - selectedIndex + props.results.length) % props.results.length;
    if (delta === 1) {
      return nextResult;
    }
    if (delta === props.results.length - 1) {
      return previousResult;
    }

    return null;
  }

  const resultContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const moveIndex = (delta: number) => {
      setSelectedIndex(
        (selectedIndex + delta + props.results.length) % props.results.length,
      );
    };

    const navigationListener = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();

        scrollTo(previousResult.current);
        moveIndex(-1);
      } else if (event.key === "ArrowDown") {
        event.preventDefault();

        scrollTo(nextResult.current);
        moveIndex(1);
      }
    };

    const selectionListener = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const result = props.results[selectedIndex];
        if (result) {
          router.push(result.path);
        }
      }
    };

    document.addEventListener("keydown", navigationListener);
    document.addEventListener("keydown", selectionListener);
    return () => {
      document.removeEventListener("keydown", navigationListener);
      document.removeEventListener("keydown", selectionListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.results, selectedIndex]);

  return (
    <div
      ref={resultContainer}
      className="overflow-y-auto pl-4 pr-4 pb-4 grow sm:max-h-[500px]"
      style={{ scrollbarWidth: "thin" }}
    >
      {props.results.length === 0 ? (
        <div className="flex flex-col gap-2 justify-center items-center pt-9 pb-9">
          <FaRegFile size={50} className="fill-gray-400" />
          <p className="text-gray-500">no results found</p>
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {props.results.map((result, index) => (
            <div
              key={index}
              ref={getResultRef(index)}
              onMouseMove={() => setSelectedIndex(index)}
              className="scroll-mb-1"
            >
              <PostSearchResult
                {...result}
                selected={selectedIndex === index}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
