import { JSDOM } from "jsdom";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

type TextMap = { node: ChildNode; index: number }[];
type IntervalArray = Readonly<[number, number][]>;

function compileMarkdownToDOM(markdown: string) {
  const file = unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex)
    .use(rehypeRaw)
    .use(rehypeStringify)
    .processSync(markdown);

  return new JSDOM(file.toString());
}

/**
 *
 * @param node The DOM node to parse.
 * @returns A mapping from characters within the string to DOM elements.
 */
function createTextMap(node: ChildNode): TextMap {
  if (node.nodeValue !== null) {
    return Array.from({ length: node.nodeValue.length }).map((_, i) => ({
      node: node,
      index: i,
    }));
  }

  return Array.from(node.childNodes).map(createTextMap).flat();
}

/**
 *
 * @param textMap The mapping from characters within the string to DOM elements.
 * @param indices The indices of the characters to highlight, given as intervals sorted in ascending order.
 */
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

export function getMarkdownTextContent(markdown: string) {
  const dom = compileMarkdownToDOM(markdown);
  return dom.window.document.body.textContent;
}

export function highlightMarkdown(markdown: string, indices: IntervalArray) {
  const dom = compileMarkdownToDOM(markdown);
  const textMap = createTextMap(dom.window.document.body);
  highlightTextMap(textMap, indices);
  return dom.window.document.body.innerHTML;
}
