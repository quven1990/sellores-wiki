import type { MetadataRoute } from "next"

import { SEO_PAGES } from "@/lib/seo"
import { getSiteUrl } from "@/lib/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  return Object.values(SEO_PAGES)
    .filter((page) => !("noindex" in page && page.noindex))
    .map((page) => {
      const isLegal = page.path === "/privacy" || page.path === "/terms"
      return {
        url: `${base}${page.path === "/" ? "" : page.path}`,
        lastModified: new Date("2026-09-07T00:00:00Z"),
        changeFrequency: (page.path === "/codes" ? "daily" : "weekly") as "daily" | "weekly",
        priority: page.path === "/" ? 1 : page.path === "/codes" ? 0.9 : isLegal ? 0.3 : 0.7,
      }
    })
}
