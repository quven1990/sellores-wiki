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

/** Titles/descriptions follow docs/seo-toolkit/02_PAGE_SPECS.md (+ backlog pages once sourced). */
export const SEO_PAGES = {
  home: {
    path: "/",
    title: "Sell Ores Wiki (Sep 2026) – Codes, Ore Values, Pets & Gears",
    description:
      "Sell Ores Wiki for Roblox with working code status, gear prices, pet and fusion help, beginner progression tips, updates, and source notes. Updated September 2026.",
  },
  codes: {
    path: "/codes",
    title: "Sell Ores Codes (September 2026) – Working Codes & Rewards",
    description:
      "Copy the latest Sell Ores codes for Time Skips, Cash, Growth Gems and Admin rewards. See active, conflicted and expired status plus exact redeem steps.",
  },
  ores: {
    path: "/ores",
    title: "Sell Ores Ore Values (Sep 2026) – Ores, Rarities & Roll Odds",
    description:
      "Browse documented Sell Ores ores by rarity with roll odds, buy prices, and cash figures only where public guides recorded them. Source status shown per dataset.",
  },
  pets: {
    path: "/pets",
    title: "Sell Ores Pets (Sep 2026) – Pet Buffs, Lucky Blocks & Fusion",
    description:
      "Sell Ores pet guide covering Lucky Blocks, pet buffs, fusion, and documented pet data with clear source status. Search and filter pets by effect.",
  },
  gears: {
    path: "/gears",
    title: "Sell Ores Gears (Sep 2026) – Prices, Effects & Best Buy Order",
    description:
      "Compare Sell Ores Growth Gems, Coatings and the Ore Cleanser by price and effect, then see which gear to buy first for early and late progression.",
  },
  mutations: {
    path: "/mutations",
    title: "Sell Ores Mutations – Multipliers, Coatings & Best Uses",
    description:
      "Sell Ores mutation ladder from Rusty to Galaxy with coating costs, cleanser notes, and strategy for which ores to stamp first.",
  },
  upgrades: {
    path: "/upgrades",
    title: "Sell Ores Best Upgrades – Upgrade Order & Progression Guide",
    description:
      "Sell Ores upgrade order by bottleneck: regen, drill speed, slots, luck, furnace, and pedestals — strategy labeled separately from sourced mechanics.",
  },
  floors: {
    path: "/floors",
    title: "Sell Ores Floors & Unlocks – Costs, Furnace & Fuser",
    description:
      "Sell Ores floor unlock costs and key systems (Boost Pedestal, Furnace, Floor 7 Fuser) with confidence notes where prices were not on-screen.",
  },
  afkMoney: {
    path: "/guides/afk-money",
    title: "Sell Ores AFK & Money Guide – Earn Faster While Offline",
    description:
      "AFK setup checklist for Sell Ores: fill slots, max drones, hold time skips, and fix money bottlenecks — without invented $/hour formulas.",
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
      "How Sell Ores Wiki handles visitor data. No accounts required. Uses Google Analytics and Microsoft Clarity. Contact privacy@sellores.site.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use – Sell Ores Wiki",
    description:
      "Terms for the unofficial Sell Ores Roblox fan wiki. Not affiliated with Roblox or The Ore Drillers. Contact contact@sellores.site.",
  },
} as const satisfies Record<string, SeoPage>

/** Short labels for UI + BreadcrumbList (not full SEO titles). */
export const PAGE_SHORT_LABEL: Record<string, string> = {
  "/": "Home",
  "/codes": "Codes",
  "/ores": "Ores",
  "/pets": "Pets",
  "/gears": "Gears",
  "/mutations": "Mutations",
  "/upgrades": "Upgrades",
  "/floors": "Floors",
  "/guides/afk-money": "AFK & Money",
  "/beginner": "Beginner",
  "/updates": "Updates",
  "/privacy": "Privacy",
  "/terms": "Terms",
}

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
