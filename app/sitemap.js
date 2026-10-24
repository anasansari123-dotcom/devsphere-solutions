import { projects, projectHref } from "@/lib/content";
import { siteUrl } from "@/lib/seo";

export default function sitemap() {
  const now = new Date();
  const pages = [
    ["/", 1, "weekly"],
    ["/it-company-in-muzaffarnagar", 0.9, "monthly"],
    ["/services", 0.9, "monthly"],
    ["/work", 0.8, "weekly"],
    ["/about", 0.8, "monthly"],
    ["/contact", 0.8, "yearly"],
  ];
  return [
    ...pages.map(([path, priority, changeFrequency]) => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency, priority })),
    ...projects.map((p) => ({ url: `${siteUrl}${projectHref(p)}`, lastModified: now, changeFrequency: "monthly", priority: 0.6 })),
  ];
}
