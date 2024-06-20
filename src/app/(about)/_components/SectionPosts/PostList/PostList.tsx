import { PostItem, PostItemProps } from "./PostItem";

export interface PostListProps {
  posts: PostItemProps[];
}

export function PostList(props: PostListProps) {
  return (
    <div className="flex flex-col gap-8 pt-4 pb-4">
      {props.posts.map((post) => (
        <PostItem key={post.name} {...post} />
      ))}
    </div>
  );
}
