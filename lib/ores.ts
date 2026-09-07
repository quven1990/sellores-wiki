export type OreRarity =
  | "Common"
  | "Uncommon"
  | "Rare"
  | "Epic"
  | "Legendary"
  | "Secret"
  | "Prismatic"
  | "Divine"
  | "Exotic"
  | "Transcendent"
  | "Ascended"
  | "Almighty"
  | "Unlisted"

export type OreEntry = {
  name: string
  rarity: OreRarity
  /** Roll odds string as documented; omit empty inventing. */
  rollOdds?: string
  buyPrice?: string
  cashSeen?: string
  notes?: string
}

export type RarityBand = {
  rank: number
  rarity: Exclude<OreRarity, "Unlisted">
  summary: string
}

/**
 * Single-source community ore index (selloresguide.wiki/ores, scraped 2026-09-07).
 * Many rows intentionally omit odds/prices when the source left them blank.
 * Do not invent missing values.
 */
export const ORE_RARITY_BANDS: RarityBand[] = [
  {
    rank: 1,
    rarity: "Common",
    summary: "Starter band. Stone noted at $5/ore (lvl 1); Coal ~$30/crate on official art.",
  },
  {
    rank: 2,
    rarity: "Uncommon",
    summary: "Fill Floor 1 with this band before Floor 2. Iron and Amber also appear as Diary rewards.",
  },
  {
    rank: 3,
    rarity: "Rare",
    summary: "Buy prices typically in the hundreds-of-thousands range.",
  },
  {
    rank: 4,
    rarity: "Epic",
    summary: "Gem ores (Sapphire, Emerald, Jade, Ruby). First band often used on Boost Pedestals.",
  },
  {
    rank: 5,
    rarity: "Legendary",
    summary: "Dragon / Celestium / Nebulite — common mid-tower keepers (Floors 2–4).",
  },
  {
    rank: 6,
    rarity: "Secret",
    summary: "Roughly $100M–$500M buy range in guide notes; Rust coating often recommended first.",
  },
  {
    rank: 7,
    rarity: "Prismatic",
    summary: "Roughly $500M–$1.2B. Antimatter Crystal is a frequent first Prismatic.",
  },
  {
    rank: 8,
    rarity: "Divine",
    summary: "Guide notes Supernova ~$5B and cheapest Divine around $7B.",
  },
  {
    rank: 9,
    rarity: "Exotic",
    summary: "About 1-in-73M class rolls; buy prices ~$70B–$150B (Nebula, God Stone, Titan).",
  },
  {
    rank: 10,
    rarity: "Transcendent",
    summary: "About 1-in-1T class rolls; buy prices ~$10T–$500T. Devil Crystal ~$10T entry.",
  },
  {
    rank: 11,
    rarity: "Ascended",
    summary: "About $3–$10Qa. Omnipotence noted as cheapest Ascended (~$3Qa).",
  },
  {
    rank: 12,
    rarity: "Almighty",
    summary: "About 1-in-50T+. Primordial ~$500Qa; higher Almighty priced in quintillions.",
  },
]

export const ORES: OreEntry[] = [
  {
    name: "Stone",
    rarity: "Common",
    rollOdds: "starter",
    buyPrice: "free",
    cashSeen: "$5/ore (lvl 1), $45 at +10",
  },
  {
    name: "Coal",
    rarity: "Common",
    rollOdds: "1 in 4 class",
    buyPrice: "a few hundred",
    cashSeen: "$10/s on official art; ~$30 crate",
  },
  { name: "Copper", rarity: "Common", buyPrice: "a few hundred" },
  { name: "Tin", rarity: "Common" },
  { name: "Sea Stone", rarity: "Common" },
  {
    name: "Iron",
    rarity: "Uncommon",
    rollOdds: "1 in 32",
    buyPrice: "$900",
    cashSeen: "$18/ore",
    notes: "Also Diary reward",
  },
  { name: "Zinc", rarity: "Uncommon" },
  {
    name: "Silver",
    rarity: "Uncommon",
    buyPrice: "about $2,500",
    cashSeen: "$41/ore",
  },
  {
    name: "Amber",
    rarity: "Uncommon",
    rollOdds: "1 in 128",
    buyPrice: "$15,000",
    cashSeen: "$50/ore, $159 at +10",
    notes: "Also Diary reward",
  },
  { name: "Obsidian", rarity: "Rare", notes: "Observed early as Rare" },
  {
    name: "Titanium",
    rarity: "Rare",
    buyPrice: "$600,000",
    cashSeen: "$1,000/ore",
  },
  {
    name: "Sapphire",
    rarity: "Epic",
    cashSeen: "21% boost on a pedestal",
  },
  { name: "Emerald", rarity: "Epic" },
  { name: "Jade", rarity: "Epic" },
  { name: "Ruby", rarity: "Epic" },
  {
    name: "Dragon",
    rarity: "Legendary",
    rollOdds: "1 in 32,000",
    buyPrice: "a few million",
  },
  {
    name: "Celestium",
    rarity: "Legendary",
    rollOdds: "1 in 85,000",
    buyPrice: "a few million",
    cashSeen: "$8,000/ore",
  },
  {
    name: "Nebulite",
    rarity: "Legendary",
    cashSeen: "$25,000/ore; $38,000 rusted",
  },
  {
    name: "Secret Crystal",
    rarity: "Secret",
    rollOdds: "1 in 1 million",
    buyPrice: "about $30M",
  },
  {
    name: "Dark Matter",
    rarity: "Secret",
    rollOdds: "1 in 1 billion class",
    buyPrice: "$100M",
    cashSeen: "12,000/ore; 38,000 at +10",
  },
  {
    name: "Event Horizon",
    rarity: "Secret",
    cashSeen: "30,000/ore; 95,000 after heavy leveling",
  },
  {
    name: "Singularity",
    rarity: "Secret",
    buyPrice: "$500M",
    cashSeen: "100,000/ore",
  },
  {
    name: "Antimatter Crystal",
    rarity: "Prismatic",
    rollOdds: "1 in 35 million class",
    buyPrice: "$700M to $1.2B",
  },
  {
    name: "Lunar Crystal",
    rarity: "Prismatic",
    cashSeen: "41% boost on a pedestal",
    notes: "Rarity observed as Prismatic",
  },
  { name: "Supernova", rarity: "Divine", buyPrice: "$5B" },
  {
    name: "Solaris Crystal",
    rarity: "Divine",
    buyPrice: "about $7B",
    cashSeen: "75,000/ore at lvl 1",
  },
  {
    name: "Nebula",
    rarity: "Exotic",
    rollOdds: "1 in 73 million",
    buyPrice: "$70B",
    cashSeen: "$1M/ore at +20",
  },
  {
    name: "Chrono Crystal",
    rarity: "Exotic",
    buyPrice: "$70B",
    notes: "Rarity observed as Exotic",
  },
  {
    name: "God Stone",
    rarity: "Exotic",
    buyPrice: "$70B to $90B",
    cashSeen: "4.8M–9M/ore; 76% on a pedestal",
  },
  { name: "Titan", rarity: "Exotic", buyPrice: "$150B" },
  {
    name: "Devil Crystal",
    rarity: "Transcendent",
    buyPrice: "$10T",
    cashSeen: "194M/ore; ~1B with Galaxy; 88% pedestal",
  },
  {
    name: "Reality",
    rarity: "Transcendent",
    rollOdds: "1 in 1T",
    buyPrice: "$27T",
    cashSeen: "$9.68B+ value card (official thumbnail)",
  },
  {
    name: "Zeus Core",
    rarity: "Transcendent",
    buyPrice: "$100T",
    cashSeen: "1B/ore at lvl 37 with Galaxy",
  },
  {
    name: "Origin",
    rarity: "Transcendent",
    rollOdds: "2% on Lucky Spin",
  },
  {
    name: "Creator's Core",
    rarity: "Transcendent",
    buyPrice: "$500T",
    notes: "Rarity observed as Transcendent",
  },
  {
    name: "Omnipotence",
    rarity: "Ascended",
    buyPrice: "$3Qa",
    cashSeen: "8B–16B/ore with Devil's gem; 110% pedestal",
  },
  { name: "Genesis Crystal", rarity: "Ascended", buyPrice: "$7.5Qa" },
  {
    name: "The First Star",
    rarity: "Ascended",
    rollOdds: "1 in 13T",
    buyPrice: "$10Qa",
    cashSeen: "400M/ore with Galaxy; 150% pedestal",
  },
  { name: "Chaos", rarity: "Ascended", notes: "Rarity observed as Ascended" },
  {
    name: "Primordial",
    rarity: "Almighty",
    rollOdds: "1 in 50T",
    buyPrice: "$500Qa",
    cashSeen: "200B/ore with Galaxy + Devil's gem",
  },
  {
    name: "Crystalite",
    rarity: "Unlisted",
    cashSeen: "$968M/s on official art",
    notes: "Shown on official thumbnails; rarity band not listed in source table",
  },
  {
    name: "Astral Heart",
    rarity: "Unlisted",
    notes: "Mentioned in footage; rarity/values not listed",
  },
]

export const ORE_SOURCE = {
  status: "single-source" as const,
  asOf: "2026-09-07",
  url: "https://selloresguide.wiki/ores/",
  note: "Community ore index with on-screen / footage provenance notes. Blank cells stay blank — we do not invent odds or prices.",
}
