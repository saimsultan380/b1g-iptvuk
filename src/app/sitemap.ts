import type { MetadataRoute } from "next";
import { SITE_PAGES, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PAGES.filter((page) => page.includeInSitemap).map((page) => ({
    url: absoluteUrl(page.path),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
