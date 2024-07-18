import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jeffery Mensah",
    short_name: "J. Mensah",
    description: "Personal Website of Jeffery Mensah",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/android-chrome-512x512.png",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
