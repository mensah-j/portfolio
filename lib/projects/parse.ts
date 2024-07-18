import fs from "fs";
import matter from "gray-matter";
import jsYaml from "js-yaml";
import path from "path";
import { z } from "zod";

const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  path: z.string().optional(),
  published: z.boolean(),
  description: z.string().optional(),
  technologies: z.array(z.string()),
});

const ProjectOrderSchema = z.object({
  order: z.array(z.string()),
});

export type ProjectSchema = z.infer<typeof ProjectSchema>;

export function parseProjects() {
  const projectsDirectory = path.join(process.cwd(), "projects");

  const projectIndex = new Map<string, number>(
    ProjectOrderSchema.parse(
      JSON.parse(
        fs.readFileSync(
          path.join(projectsDirectory, "project-order.json"),
          "utf8",
        ),
      ),
    ).order.map((project, index) => [project, index]),
  );

  return fs
    .readdirSync(projectsDirectory, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .map((directoryName) => {
      const id = directoryName;

      const descriptionPath = path.join(
        projectsDirectory,
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
    .map((project) => {
      const parsed = ProjectSchema.safeParse(project);
      if (!parsed.success) {
        console.error(parsed.error);
      }
      return parsed.data;
    })
    .filter((project) => project !== undefined)
    .sort((a, b) => projectIndex.get(a.id)! - projectIndex.get(b.id)!);
}
