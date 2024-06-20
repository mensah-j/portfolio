export interface PostItemProps {
  name: string;
  path: string;

  date: string;
  length: string;
  excerpt: string;
}

export function PostItem(props: PostItemProps) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex flex-col items-start ">
        <a
          href={props.path}
          target="_blank"
          rel="noopener noreferrer"
          className="pb-px font-extrabold transition-[text-decoration] hover:decoration-white underline decoration-transparent text-2xl motion-reduce:transition-none decoration-2"
        >
          {props.name}
        </a>
        <span className="text-sm font-semibold">
          {props.date} • {props.length} read
        </span>
      </div>
      <p className="w-full text-[15px]">{props.excerpt}</p>
    </div>
  );
}
