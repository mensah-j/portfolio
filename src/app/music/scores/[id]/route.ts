import { readFile } from "fs/promises";
import path from "path";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const buffer = await readFile(
    path.join(process.cwd(), `music/${params.id}/score.pdf`),
  );

  const headers = new Headers();
  headers.append("Content-Disposition", `inline; filename="${params.id}.pdf"`);
  headers.append("Content-Type", "application/pdf");

  return new Response(buffer, {
    headers,
  });
}
