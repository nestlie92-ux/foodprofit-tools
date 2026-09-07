import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://foodprofit-tools-8vz7.vercel.app/sitemap.xml",
  };
}