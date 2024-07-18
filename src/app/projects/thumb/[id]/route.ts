import { readFile } from "fs/promises";
import path from "path";
import fs from "fs";

export async function GET(
  request: Request,
  { params }: { params: { id: string } },
) {
  const thumbnailPath = path.join(
    process.cwd(),
    `projects/${params.id}/thumb.png`,
  );

  if (fs.existsSync(thumbnailPath)) {
    const buffer = await readFile(thumbnailPath);

    const headers = new Headers();
    headers.append("Content-Type", "image/png");

    return new Response(buffer, {
      headers,
    });
  }

  return new Response(null, {
    status: 404,
  });
}
