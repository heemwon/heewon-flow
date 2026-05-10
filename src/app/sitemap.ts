import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://my-walking-portfolio.vercel.app",
      lastModified: new Date(),
    },
    {
      url: "https://my-walking-portfolio.vercel.app/journey",
      lastModified: new Date(),
    },
    {
      url: "https://my-walking-portfolio.vercel.app/dashboard",
      lastModified: new Date(),
    },
  ];
}
