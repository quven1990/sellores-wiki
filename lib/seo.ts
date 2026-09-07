import type { Metadata } from "next"

import { getSiteUrl, SITE_NAME } from "@/lib/site"

export type SeoPage = {
  path: string
  title: string
  description: string
  /** When true, page is omitted from sitemap and sent noindex. */
  noindex?: boolean
}

export const DEFAULT_OG_IMAGE = {
  url: "/brand/og.png",
  width: 1200,
  height: 630,
  alt: "Sell Ores Wiki — Roblox codes, pets, gears, and beginner guide",
} as const

/** Titles/descriptions follow docs/seo-toolkit/02_PAGE_SPECS.md fallbacks (no /ores yet). */
export const SEO_PAGES = {
  home: {
    path: "/",
    title: "Sell Ores Wiki (Sep 2026) – Codes, Pets, Gears & Beginner Guide",
    description:
      "Sell Ores Wiki for Roblox with code status, gear prices, pet and fusion help, beginner progression tips, updates, and source notes. Updated September 2026.",
  },
  codes: {
    path: "/codes",
    title: "Sell Ores Codes (September 2026) – Working Codes & Rewards",
    description:
      "Copy the latest Sell Ores codes for Time Skips, Cash, Growth Gems and Admin rewards. See active, conflicted and expired status plus exact redeem steps.",
  },
  pets: {
    path: "/pets",
    title: "Sell Ores Pets (Sep 2026) – Pet Buffs, Lucky Blocks & Fusion",
    description:
      "Search Sell Ores pets by name or ability: 50 documented entries with tier, money boost, and abilities, plus fusion tips. Source status shown; 50-vs-51 conflict noted.",
  },
  gears: {
    path: "/gears",
    title: "Sell Ores Gears (Sep 2026) – Prices, Effects & Best Buy Order",
    description:
      "Compare Sell Ores Growth Gems, Coatings and the Ore Cleanser by price and effect, then see which gear to buy first for early and late progression.",
  },
  beginner: {
    path: "/beginner",
    title: "Sell Ores Beginner Guide – Best Upgrade Order & Fast Progression",
    description:
      "Start Sell Ores the right way: redeem codes, fill your base, keep drones working, choose the next upgrade, avoid early traps, and progress faster.",
  },
  updates: {
    path: "/updates",
    title: "Sell Ores Updates (Sep 2026) – New Codes, Patches & Events",
    description:
      "Track Sell Ores updates, code drops, Floor 7 and fusion changes, balance patches and events, with links to the guides affected by each change.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy – Sell Ores Wiki",
    description:
      "How Sell Ores Wiki handles visitor data. No accounts required. Current build has no analytics cookies. Contact privacy@sellores.site.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use – Sell Ores Wiki",
    description:
      "Terms for the unofficial Sell Ores Roblox fan wiki. Not affiliated with Roblox or The Ore Drillers. Contact contact@sellores.site.",
  },
} as const satisfies Record<string, SeoPage>

export function createPageMetadata(page: SeoPage): Metadata {
  const siteUrl = getSiteUrl()
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    robots: page.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: page.path,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    metadataBase: new URL(siteUrl),
  }
}
