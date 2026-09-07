export type ReviewedYoutubeVideo = {
  id: string
  page: string
  videoId: string
  url: string
  title: string
  creator?: string
  purpose: string
  reviewedAt: string
  sourceNote?: string
}

/**
 * YouTube embeds validated via YouTube oEmbed (2026-09-07).
 * Empty list → YouTubeLite renders nothing.
 */
export const REVIEWED_YOUTUBE_VIDEOS: ReviewedYoutubeVideo[] = [
  {
    id: "beginner-challs-guide",
    page: "/beginner",
    videoId: "PiohhFJaz4w",
    url: "https://www.youtube.com/watch?v=PiohhFJaz4w",
    title: "Sell Ores Guide! (Codes, Noob To Pro, Tips & Tricks, Progression)",
    creator: "CHALLS",
    purpose: "Full beginner progression walkthrough after the written checklist.",
    reviewedAt: "2026-09-07",
    sourceNote: "oEmbed validated",
  },
  {
    id: "codes-sept-2026",
    page: "/codes",
    videoId: "dvrsqckWC_c",
    url: "https://www.youtube.com/watch?v=dvrsqckWC_c",
    title: "*NEW CODES* ALL WORKING CODES FOR SELL ORES IN SEPTEMBER 2026!",
    creator: "EdgedSwordHD",
    purpose: "Optional redeem/codes showcase below the copyable table.",
    reviewedAt: "2026-09-07",
    sourceNote: "oEmbed validated — still verify codes against our status table",
  },
  {
    id: "pets-floor7-fusion",
    page: "/pets",
    videoId: "o7xdLuqZdX0",
    url: "https://www.youtube.com/watch?v=o7xdLuqZdX0",
    title: "ALL CODES & FLOOR 7 FUSION UPDATE! | Sell Ores ROBLOX (September 1, 2026)",
    creator: "Berlian kecil",
    purpose: "Shows Floor 7 / fusion update context alongside the pet roster.",
    reviewedAt: "2026-09-07",
    sourceNote: "oEmbed validated",
  },
  {
    id: "gears-floors-rich",
    page: "/gears",
    videoId: "DQ3g_gQBGr8",
    url: "https://www.youtube.com/watch?v=DQ3g_gQBGr8",
    title: "I UPGRADED ORE FLOORS and become RICH in SELL ORES",
    creator: "OverGrid",
    purpose: "Gameplay context for spending Cash on progression after the gear table.",
    reviewedAt: "2026-09-07",
    sourceNote: "oEmbed validated",
  },
  {
    id: "upgrades-noob-rich",
    page: "/upgrades",
    videoId: "gbeHeJL_MzE",
    url: "https://www.youtube.com/watch?v=gbeHeJL_MzE",
    title: "I Went From NOOB to INSANELY RICH in Sell Ores!",
    creator: "Volc",
    purpose: "Progression showcase next to bottleneck upgrade strategy.",
    reviewedAt: "2026-09-07",
    sourceNote: "oEmbed validated",
  },
  {
    id: "floors-floor7-fusion",
    page: "/floors",
    videoId: "o7xdLuqZdX0",
    url: "https://www.youtube.com/watch?v=o7xdLuqZdX0",
    title: "ALL CODES & FLOOR 7 FUSION UPDATE! | Sell Ores ROBLOX (September 1, 2026)",
    creator: "Berlian kecil",
    purpose: "Floor 7 Fuser / fusion update footage after the unlock table.",
    reviewedAt: "2026-09-07",
    sourceNote: "oEmbed validated",
  },
  {
    id: "updates-floor7-fusion",
    page: "/updates",
    videoId: "o7xdLuqZdX0",
    url: "https://www.youtube.com/watch?v=o7xdLuqZdX0",
    title: "ALL CODES & FLOOR 7 FUSION UPDATE! | Sell Ores ROBLOX (September 1, 2026)",
    creator: "Berlian kecil",
    purpose: "Update-specific footage for the Floor 7 fusion changelog entry.",
    reviewedAt: "2026-09-07",
    sourceNote: "oEmbed validated",
  },
]

export function videosForPage(page: string): ReviewedYoutubeVideo[] {
  return REVIEWED_YOUTUBE_VIDEOS.filter((v) => v.page === page)
}
