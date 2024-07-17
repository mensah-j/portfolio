import fs from "fs";
import matter from "gray-matter";
import jsYaml from "js-yaml";
import path from "path";
import { z } from "zod";

const MusicSchema = z.object({
  id: z.string(),
  type: z.union([z.literal("composition"), z.literal("improvisation")]),
  date: z.string(),
  title: z.string(),
  video: z.string().optional(),
  description: z.string().optional(),
});

export type Music = z.infer<typeof MusicSchema> & { path: string };

export function parseMusic() {
  const postsDirectory = path.join(process.cwd(), "music");

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
    .map((music) => {
      const parsed = MusicSchema.safeParse(music);
      if (!parsed.success) {
        console.error(parsed.error);
      }

      return parsed.success ? parsed.data : undefined;
    })
    .filter((music) => music !== undefined)
    .map((music) => ({
      ...music,
      path: `/music/${music.id}`,
    }))
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
}
