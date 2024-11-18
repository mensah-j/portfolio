"use server";

import { readFileSync } from "fs";

export async function readTikz(source: string) {
  return Promise.resolve(readFileSync(source, "utf8"));
}
