import { UnderConstruction } from "../_components/UnderConstruction";
import tex2svg from "@lib/tikzjax/dist/index";

export const metadata = {
  title: "Jeffery Mensah | Math",
};

export default function Page() {
  async function compileTikz() {
    "use server";
    return await tex2svg(
      `\\begin{document}\\begin{tikzpicture}\\draw (0,0) circle (1in);\\end{tikzpicture}\\end{document}`,
    );
  }
  return (
    <main className="flex flex-col items-center grow">
      <UnderConstruction />
      <div>{compileTikz()}</div>
    </main>
  );
}
