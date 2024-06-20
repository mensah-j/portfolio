import { PostItem, PostItemProps } from "./PostItem";

export interface PostListProps {
  posts: PostItemProps[];
}

export function PostList(props: PostListProps) {
  return (
    <div className="flex flex-col gap-8 pt-8 pb-8">
      {props.posts.map((post) => (
        <PostItem key={post.name} {...post} />
      ))}
    </div>
  );
}
