import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Same source as metadataBase in app/layout.tsx, so canonical URLs, Open Graph
  // tags and the sitemap cannot disagree about which host this deployment is.
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://careflowai.health";

  const routes = [
    "",
    "/features",
    "/how-it-works",
    "/technology",
    "/pricing",
    "/for-clinics",
    "/security",
    "/about",
    "/contact",
    "/faq",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
