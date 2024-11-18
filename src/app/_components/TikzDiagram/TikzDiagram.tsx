import { readTikz } from "./tikz";

interface TikzDiagramProps {
  source: string;
}

export function TikzDiagram(props: TikzDiagramProps) {
  return (
    <main className="flex flex-col items-center grow p-2">
      <div
        style={{ zoom: 1.5 }}
        dangerouslySetInnerHTML={{ __html: readTikz(props.source) }}
      ></div>
    </main>
  );
}
