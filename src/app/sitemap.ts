import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://heewon-flow.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://heewon-flow.vercel.app/journey",
      lastModified: new Date(),
    },
    {
      url: "https://heewon-flow.vercel.app/dashboard",
      lastModified: new Date(),
    },
  ];
}
