import { UnderConstruction } from "../_components/UnderConstruction";
import tex2svg from "node-tikzjax";

export const metadata = {
  title: "Jeffery Mensah | Math",
};

export default function Page() {
  async function compileTikz() {
    "use server";
    return await tex2svg(
      "\\begin{tikzpicture} \\node (a) at (0,0) {}; \\end{tikzpicture}",
    );
  }
  return (
    <main className="flex flex-col items-center grow">
      <UnderConstruction />
      <div>{compileTikz()}</div>
    </main>
  );
}
