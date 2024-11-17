"use server";

import tex2svg from "@lib/tikzjax/dist";

export async function compileTikz(source: string) {
  return await tex2svg(source, {
    showConsole: true,
  });
}
