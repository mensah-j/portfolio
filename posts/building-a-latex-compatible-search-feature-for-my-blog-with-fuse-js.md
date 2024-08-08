---
title: "Building a $\\LaTeX$-compatible search feature for my blog using Fuse.js"
date: 2024-07-07
length: "5 min"
---

If you press <span className="border font-bold text-sm border-gray-400 shadow-[0_2px_0px_0px] shadow-[#6e8b84] rounded pl-1 pr-1">ctrl</span> + <span className="border font-bold text-sm border-gray-400 shadow-[0_2px_0px_0px] shadow-[#6e8b84] rounded pl-1 pr-1">K</span> on the blog page of this site, you'll be greeted by a search dialog modeled after the one on the [Vue.js](https://vuejs.org) website.
When a user searches for a post, the matching text is marked by being either highlighted or underlined<!--more-->, integrating nicely with $\LaTeX$ output as well. Here's how I accomplished this using [Fuse.js](https://fusejs.io) as my search library.

## Highlighting Matches

Fuzzy search engines work by finding substrings in a given text string which _approximately_ match a given query. Fuse.js offers the ability to return the indices of each matching substring, which can then be used to visually indicate which portions of the text match the query.

<div class="flex flex-row justify-center items-baseline gap-4 text-2xl font-semibold mb-8">
  <span class="relative">
  fuse
    <div class="absolute top-full left-0 text-sm w-full">
      <span class="flex w-full justify-center text-gray-600">
        query
      </span>
    </div>
  </span>
  <span class="text-3xl font-normal">
  →
  </span>
  <span class="relative">
    <u>fu</u>zzy <u>se</u>arch
    <div class="absolute top-full left-0 text-sm w-full">
      <span class="flex w-full justify-center text-gray-600">
        result
      </span>
    </div>
  </span>
</div>

Each post is written in mostly a mixture of Markdown and LaTeX, both of which are compiled into raw HTML. This means what the user sees is not necessarily what is written in the underlying code. As a result, searching the source code for each post is a bad idea, since there is no reliable way to make sense of matches (searching for "`div`" would yield many meaningless hits). The solution is to search the _textual content_ of the post, which corresponds to what the user visually sees.

For example, the $\LaTeX$ expression <inline lang="latex">\mathbb{Z}^2</inline> maps to the textual content <inline>Z2</inline>. Therefore, the query "`mathbb`" will not return a match, but "`Z`" or "`Z2`" will. Once a match is found, each of the matching indices must be mapped back to their corresponding HTML text nodes, which are then highlighted by injecting `<mark>` tags with appropriate styling.

```typescript
export function createPostsIndex(posts: Post[]) {
  const options: IFuseOptions<Post> = {
    keys: ["id", "title"],
    includeMatches: true,
    minMatchCharLength: 2,
    threshold: 0.5,
    distance: 300,
  };

  return new Fuse(posts, options, Fuse.parseIndex(postsIndex));
}
```

## Identifying Textual and Visual Content

I used [remark](https://remark.js.org/) to render markdown into HTML on the server, and [JSDOM](https://github.com/jsdom/jsdom) to extract the textual content, traverse DOM nodes, and inject `<mark>` tags into the final HTML. The basic algorithm for building the mapping between a HTML and its textual content is as follows:

```typescript
type TextMap = { node: ChildNode; index: number }[];

function createTextMap(node: ChildNode): TextMap {
  if (node.nodeValue !== null) {
    return Array.from({ length: node.nodeValue.length }).map((_, i) => ({
      node: node,
      index: i,
    }));
  }

  return Array.from(node.childNodes).map(createTextMap).flat();
}
```

This method recursively traverses the children of a DOM node until it finds a node with a non-null value (meaning it contains text), and creates mappings for each of the characters in the text node. Once the text map is created, the nodes are highlighted using the following algorithm:

```typescript
type IntervalArray = readonly [number, number][];

function highlightTextMap(textMap: TextMap, indices: IntervalArray) {
  let currentIntervalIndex = 0;
  let replacement = "";

  textMap.forEach(({ node, index: localIndex }, globalIndex) => {
    const character = node.nodeValue?.[localIndex] ?? "";
    if (currentIntervalIndex === indices.length) {
      replacement += character;
    } else {
      const [start, end] = indices[currentIntervalIndex];

      replacement +=
        globalIndex < start ? character : `<mark>${character}</mark>`;

      if (globalIndex === end) {
        currentIntervalIndex += 1;
      }
    }

    if (
      globalIndex === textMap.length - 1 ||
      textMap[globalIndex + 1].index === 0
    ) {
      node.replaceWith(JSDOM.fragment(replacement).getRootNode());
      replacement = "";
    }
  });
}
```

Here, <inline lang="typescript">indices</inline> represents an array of intervals describing the start and end indices of each of the matching substrings. The algorithm iterates over each character in the text map and each substring simultaneously. If a character is in one of these matching substrings, a `<mark>` tag is injected into the replacement, surrounding the character.

## Conclusion

This search feature allows for users to search for posts that use Markdown or LaTeX without having to know the code used to produce the textual content, and is able to highlight the matched text by mapping the visual output to the underlying HTML. One potential downside of this approach is that it becomes harder to search for certain items based on the underlying code or visual output, such as the contour integral symbol, $\oint$ (the underlying textual content is once again the integral symbol, ∮).
