import { parsePosts } from "./parse";
import { createPostsIndex } from "./search";

export function createPosts() {
  const allPosts = parsePosts();

  const previewPosts = allPosts.map((post) => {
    return { ...post, content: undefined };
  });

  const searchPosts = (() => {
    const index = createPostsIndex(allPosts);
    return (query: string) => index.search(query);
  })();

  return { all: allPosts, preview: previewPosts, search: searchPosts };
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
