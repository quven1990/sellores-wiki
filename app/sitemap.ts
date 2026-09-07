import type { MetadataRoute } from "next"

import { SEO_PAGES } from "@/lib/seo"
import { getSiteUrl } from "@/lib/site"

export const dynamic = "force-static"

/** Update only when that route's indexable content materially changes. */
const LAST_MODIFIED_BY_PATH: Record<string, string> = {
  "/": "2026-09-07",
  "/codes": "2026-09-07",
  "/ores": "2026-09-07",
  "/pets": "2026-09-07",
  "/gears": "2026-09-08",
  "/mutations": "2026-09-07",
  "/upgrades": "2026-09-07",
  "/floors": "2026-09-07",
  "/guides/afk-money": "2026-09-07",
  "/beginner": "2026-09-07",
  "/updates": "2026-09-08",
  "/privacy": "2026-09-07",
  "/terms": "2026-09-07",
}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  return Object.values(SEO_PAGES)
    .filter((page) => !("noindex" in page && page.noindex))
    .map((page) => {
      const isLegal = page.path === "/privacy" || page.path === "/terms"
      return {
        url: `${base}${page.path === "/" ? "" : page.path}`,
        lastModified: new Date(`${LAST_MODIFIED_BY_PATH[page.path] ?? "2026-09-07"}T00:00:00Z`),
        changeFrequency: (page.path === "/codes" ? "daily" : "weekly") as "daily" | "weekly",
        priority: page.path === "/" ? 1 : page.path === "/codes" ? 0.9 : isLegal ? 0.3 : 0.7,
      }
    })
}
