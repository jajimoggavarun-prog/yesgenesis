import type { MetadataRoute } from "next";
import { siteConfig, loanLinks } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/apply",
    "/dsa-partner",
    "/emi-calculator",
    "/franchise",
    "/privacy-policy",
    "/terms-conditions",
    "/disclaimer",
  ];

  const loanRoutes = loanLinks.map((l) => l.href);

  return [...staticRoutes, ...loanRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
