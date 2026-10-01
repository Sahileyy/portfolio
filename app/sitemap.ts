import type { MetadataRoute } from "next";

const SITE_URL = "https://sahilkrishna.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/work",
    "/projects",
    "/services",
    "/experience",
    "/skills",
    "/contact",
    "/about",
    "/hobbies",
    "/faq",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1.0 : 0.8,
  }));
}
