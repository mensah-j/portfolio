import fs from "fs";
import matter from "gray-matter";
import jsYaml from "js-yaml";
import path from "path";
import { z } from "zod";

const MathSchema = z.object({
  id: z.string(),
  type: z.union([
    z.literal("publication"),
    z.literal("draft"),
    z.literal("notes"),
    z.literal("talk"),
    z.literal("miscellaneous"),
  ]),
  url: z.string().optional(),
  date: z.string(),
  title: z.string(),
  description: z.string().optional(),
});

export type Math = z.infer<typeof MathSchema> & { path: string };

export function parseMath() {
  const postsDirectory = path.join(process.cwd(), "math");

  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .map((directoryName) => {
      const id = directoryName;

      const descriptionPath = path.join(
        postsDirectory,
        directoryName,
        "description.md",
      );
      const descriptionContents = fs.readFileSync(descriptionPath, "utf8");

      const matterResult = matter(descriptionContents, {
        engines: {
          yaml: (s: string) =>
            jsYaml.load(s, { schema: jsYaml.JSON_SCHEMA }) as object,
        },
      });

      return {
        id,
        ...matterResult.data,
        description: matterResult.content,
      };
    })
    .map((math) => {
      const parsed = MathSchema.safeParse(math);
      if (!parsed.success) {
        console.error(parsed.error);
      }

      return parsed.success ? parsed.data : undefined;
    })
    .filter((math) => math !== undefined)
    .map((math) => ({
      ...math,
      path: `/math/${math.id}.pdf`,
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}
