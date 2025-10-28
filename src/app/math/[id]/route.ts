import { readFile } from "fs/promises";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const base = params.id.split(".").slice(0, -1).join(".");
  const buffer = await readFile(
    path.join(process.cwd(), `math/${base}/tex/main.pdf`),
  );

  const headers = new Headers();
  headers.append("Content-Disposition", `inline; filename="${params.id}.pdf"`);
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}
