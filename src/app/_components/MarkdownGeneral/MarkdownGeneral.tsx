import Markdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import remarkMath from "remark-math";
import { macros } from "./macros";
import mix from "classnames";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import styles from "./MarkdownGeneral.module.css";
import { TikzDiagram } from "../TikzDiagram";
import path from "path";

interface TikzNode {
  properties: {
    path: string;
    mobile: number;
    desktop: number;
  };
}

interface PreNode {
  children: {
    properties: { className: string[] };
    children: { value: string }[];
  }[];
}

export interface MarkdownGeneralProps {
  className?: string;
  source?: string;
  children: string;
}

export function MarkdownGeneral(props: MarkdownGeneralProps) {
  return (
    <Markdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[
        () =>
          rehypeKatex({
            macros,
          }),
        rehypeRaw,
      ]}
      components={{
        tikz({ node }) {
          const tikzNode = node as unknown as TikzNode;
          const tikzPath = path.join(
            props.source ?? "",
            `tikz/${tikzNode.properties.path}.svg`,
          );

          return (
            <TikzDiagram
              source={tikzPath}
              zoom={{
                mobile: tikzNode.properties.mobile,
                desktop: tikzNode.properties.desktop,
              }}
            />
          );
        },

        pre({ node }) {
          const preNode = node as unknown as PreNode;
          const language = preNode?.children[0]?.properties.className[0];
          return (
            <SyntaxHighlighter
              language={language.match(/language-(\w+)/)?.[1]}
              // eslint-disable-next-line
              style={materialOceanic}
              customStyle={{
                filter: "grayscale(0.5)",
                border: "2px solid gray",
                borderRadius: "5px",
                overflowX: "auto",
              }}
            >
              {preNode.children[0].children[0].value}
            </SyntaxHighlighter>
          );
        },

        // @ts-expect-error ts(2345)
        inline({ node, ...props }) {
          console.log(node, props);
          return (
            <SyntaxHighlighter
              // eslint-disable-next-line
              language={props.lang}
              PreTag={"span"}
              // eslint-disable-next-line
              style={materialOceanic}
              customStyle={{
                display: "inline-flex",
                padding: "0px 4px",
                margin: "0",
                filter: "grayscale(0.5)",
                border: "2px solid gray",
                borderRadius: "5px",
                overflowX: "auto",
              }}
            >
              {props.children}
            </SyntaxHighlighter>
          );
        },
      }}
      className={mix(props.className, styles.markdown)}
    >
      {props.children}
    </Markdown>
  );
}
