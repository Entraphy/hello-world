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
      url: `${siteUrl}/request-access`,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${siteUrl}/partners`,
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${siteUrl}/request-partner-access`,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${siteUrl}/team`,
      changeFrequency: "monthly",
      priority: 0.5
    },
    {
      url: `${siteUrl}/signal`,
      changeFrequency: "monthly",
      priority: 0.5
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
