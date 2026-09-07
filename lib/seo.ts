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

export const SEO_PAGES = {
  home: {
    path: "/",
    title: "Sell Ores Wiki - Codes, Pets, Gears & Guide",
    description:
      "Reported Sell Ores codes with sources, pet Lucky Block basics, Growth Gems & coatings, plus the roll → drill → sell beginner loop. Place ID 122572082932179.",
  },
  codes: {
    path: "/codes",
    title: "Sell Ores Codes (Sep 2026) - List & Redeem",
    description:
      "Reported Sell Ores codes for cash, time skips, and Growth Gems. Copy list with status, sources, and in-game redeem steps. Verify Place ID first.",
  },
  pets: {
    path: "/pets",
    title: "Sell Ores Pets - Lucky Blocks & Buff Types",
    description:
      "How Sell Ores pets work via Pet Shop Lucky Blocks: yield, drill, luck, mutation, and instant-grow buff categories. Named tables coming after in-game verify.",
    noindex: true,
  },
  gears: {
    path: "/gears",
    title: "Sell Ores Gears - Gems, Coatings & Costs",
    description:
      "Sell Ores Gear Shop list: Growth Gem timers, coating multipliers, Ore Cleanser, costs, and when each boost is worth buying. Spot-check in-game.",
  },
  beginner: {
    path: "/beginner",
    title: "Sell Ores Beginner Guide - Roll, Drill, Sell",
    description:
      "Learn the Sell Ores core loop on Roblox: roll an ore, place it, let drones crate it, sell at the station, then upgrade the real bottleneck.",
  },
  updates: {
    path: "/updates",
    title: "Sell Ores Updates - Patches & Code Drops",
    description:
      "Dated Sell Ores content updates, Floor/Fusion notes, Admin Abuse caveats, and code-drop tracking so wiki tables stay honest.",
  },
  privacy: {
    path: "/privacy",
    title: "Privacy Policy - Sell Ores Wiki",
    description:
      "How Sell Ores Wiki handles visitor data. No accounts required. Current build has no analytics cookies.",
  },
  terms: {
    path: "/terms",
    title: "Terms of Use - Sell Ores Wiki",
    description:
      "Terms for the unofficial Sell Ores Roblox fan wiki. Not affiliated with Roblox or The Ore Drillers.",
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
