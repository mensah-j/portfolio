import "@lib/tikzjax/css/fonts.css";
import { compileTikz } from "./compile";

interface TikzDiagramProps {
  source: string;
}

export async function TikzDiagram(props: TikzDiagramProps) {
  return (
    <main className="flex flex-col items-center grow p-2">
      <div
        style={{ zoom: 1.5 }}
        dangerouslySetInnerHTML={{ __html: await compileTikz(props.source) }}
      ></div>
    </main>
  );
}
