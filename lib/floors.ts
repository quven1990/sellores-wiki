export type FloorEntry = {
  floor: string
  unlockCost: string
  unlocks: string
  confidence: string
}

/**
 * Single-source floor progression (selloresguide.wiki/floors, scraped 2026-09-07).
 * Incomplete rows stay explicit — do not invent missing costs.
 */
export const FLOORS: FloorEntry[] = [
  {
    floor: "Floor 1",
    unlockCost: "Free",
    unlocks:
      "Seven mining slots, one drill drone, upgrade board (luck / yield / speed / regen), roll pedestals",
    confidence: "Tutorial",
  },
  {
    floor: "Floor 2",
    unlockCost: "$10,000",
    unlocks:
      "First Boost Pedestal — place a spare ore for a base-wide money boost (online-only per source)",
    confidence: "Multiple playthroughs",
  },
  {
    floor: "Floor 3",
    unlockCost: "about $150,000",
    unlocks: "Furnace (~$150,000 to build): +50% money on processed crates; upgradeable",
    confidence: "Approximate unlock cost",
  },
  {
    floor: "Floor 4",
    unlockCost: "$1,000,000",
    unlocks: "More slots + own upgrade board (upgrade prices roughly 5× Floor 2 per source)",
    confidence: "Two playthroughs",
  },
  {
    floor: "Floors 5–6",
    unlockCost: "not read off screen",
    unlocks: "Extra Boost Pedestals on some floors (a second pedestal ~$1B in one report)",
    confidence: "Partial",
  },
  {
    floor: "Floor 7",
    unlockCost: "$100B",
    unlocks: "Fuser (~$100B to build): five identical ores → one Mega Ore",
    confidence: "Sept 1 update footage",
  },
  {
    floor: "Floor 8",
    unlockCost: "$1T",
    unlocks: "More slots; individual top slots noted at $1T–$150T each",
    confidence: "Sept 1 update footage",
  },
  {
    floor: "Floor 9",
    unlockCost: "not read off screen",
    unlocks: "More slots; drill upgrades here are very expensive per source",
    confidence: "One playthrough",
  },
  {
    floor: "Floor 10+",
    unlockCost: "$1Qa noted for a late floor",
    unlocks: "Tower continues; players report unopened tiers above filled floors",
    confidence: "Partial",
  },
]

export const FLOOR_SOURCE = {
  status: "single-source" as const,
  asOf: "2026-09-07",
  url: "https://selloresguide.wiki/floors/",
  note: "Community floor table from playthrough/footage notes. Treat approximate and unread costs as provisional.",
}
