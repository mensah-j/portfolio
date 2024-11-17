import tex2svg from "@lib/tikzjax/dist";
import "@lib/tikzjax/css/fonts.css";

interface TikzDiagramProps {
  source: string;
}

export async function TikzDiagram(props: TikzDiagramProps) {
  async function compileTikz() {
    "use server";
    return await tex2svg(props.source, {
      showConsole: true,
    });
  }

  return (
    <main className="flex flex-col items-center grow p-2">
      <div
        style={{ zoom: 1.5 }}
        dangerouslySetInnerHTML={{ __html: await compileTikz() }}
      ></div>
    </main>
  );
}
