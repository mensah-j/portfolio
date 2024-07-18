import { parsePosts, Post } from "./parse";
import { createPostsIndex } from "./search";

export function createPosts() {
  const allPosts = parsePosts();
  const postMap = new Map<string, Post>(
    allPosts.map((post) => [post.id, post]),
  );

  const previewPosts = allPosts.map((post) => {
    return { ...post, content: undefined };
  });

  const searchPosts = (() => {
    const index = createPostsIndex(allPosts);
    return (query: string) => index.search(query);
  })();

  return {
    all: allPosts,
    ids: allPosts.map((post) => post.id),
    get: (id: string) => postMap.get(id),
    preview: previewPosts,
    search: searchPosts,
  };
}

const posts = (() => {
  if (process.env.NODE_ENV === "production") {
    return createPosts();
  } else {
    if (!global.posts) {
      global.posts = createPosts();
    }
    return global.posts;
  }
})();

export default posts;
