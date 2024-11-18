import { readFileSync } from "fs";

interface TikzDiagramProps {
  source: string;
}

export function TikzDiagram(props: TikzDiagramProps) {
  return (
    <main className="flex flex-col items-center grow p-2">
      <div
        style={{ zoom: 1.5 }}
        dangerouslySetInnerHTML={{ __html: readFileSync(props.source, "utf8") }}
      ></div>
    </main>
  );
}
