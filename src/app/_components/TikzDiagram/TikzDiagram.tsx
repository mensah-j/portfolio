import { readTikz } from "./tikz";

interface TikzDiagramProps {
  source: string;
  zoom: {
    mobile: number;
    desktop: number;
  };
}

export async function TikzDiagram(props: TikzDiagramProps) {
  return (
    <div className="flex justify-center">
      <div
        style={{ scrollbarWidth: "thin" }}
        className="w-fit pt-2 pb-4 overflow-y-hidden overflow-x-auto"
      >
        <div
          className="w-fit hidden sm:flex"
          style={{ zoom: props.zoom.desktop }}
          dangerouslySetInnerHTML={{ __html: await readTikz(props.source) }}
        ></div>
        <div
          className="w-fit sm:hidden"
          style={{ zoom: props.zoom.mobile }}
          dangerouslySetInnerHTML={{ __html: await readTikz(props.source) }}
        ></div>
      </div>
    </div>
  );
}
