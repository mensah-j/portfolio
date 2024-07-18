export const technologies = new Map<string, { name: string; icon: string }>(
  [
    ["typescript", "Typescript"],
    ["vuejs", "Vue.js"],
    ["radix-vue", "Radix Vue"],
    ["opensearch", "OpenSearch"],
    ["postgresql", "PostgreSQL"],
    ["express", "Express"],
  ].map(([key, value]) => [
    key,
    { name: value, icon: `/technologies/${key}.svg` },
  ]),
);
