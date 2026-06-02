import type { MetadataRoute } from "next";

const siteUrl = "https://www.entraphy.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteUrl}/legal/privacy`,
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: `${siteUrl}/legal/terms`,
      changeFrequency: "yearly",
      priority: 0.2
    }
  ];
}
