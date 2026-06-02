import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/archive",
        "/archive/",
        "/backup",
        "/backup/",
        "/private",
        "/private/",
        "/portal",
        "/portal/",
        "/briefing",
        "/briefing/",
        "/docs",
        "/docs/",
        "/products",
        "/products/",
        "/demo",
        "/demo/"
      ]
    },
    sitemap: "https://www.entraphy.com/sitemap.xml"
  };
}
