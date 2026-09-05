import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Routes techniques Next.js : inutile de gaspiller du budget de crawl.
      disallow: ["/_next/static/chunks/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
