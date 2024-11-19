import { readTikz } from "./tikz";

interface TikzDiagramProps {
  source: string;
  zoom?: number;
}

export async function TikzDiagram(props: TikzDiagramProps) {
  return (
    <div className="flex flex-col items-center grow p-2">
      <div
        style={{ zoom: props.zoom ?? 1.5 }}
        dangerouslySetInnerHTML={{ __html: await readTikz(props.source) }}
      ></div>
    </div>
  );
}
