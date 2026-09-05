import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} · Kebab, Pizza, Tacos & Couscous à ${site.city}`,
    short_name: site.name,
    description:
      "Fast-food halal à Mareuil-sur-Lay-Dissais (85320), Vendée : kebab, pizza, tacos, burger, couscous et pâtisseries orientales.",
    start_url: "/",
    display: "standalone",
    background_color: "#08090A",
    theme_color: "#08090A",
    lang: "fr",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
