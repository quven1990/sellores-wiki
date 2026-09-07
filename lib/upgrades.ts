export type UpgradeEntry = {
  name: string
  where: string
  does: string
  /** Editorial buy timing — always labeled Strategy on the page */
  whenStrategy: string
}

/**
 * Upgrade systems from selloresguide.wiki/upgrades (scraped 2026-09-07).
 * Descriptions are mechanics; buy timing is Strategy, not verified ROI.
 */
export const UPGRADES: UpgradeEntry[] = [
  {
    name: "Ore Luck",
    where: "Upgrade board (every floor)",
    does: "Raises chance of rarer rolls. Multipliers like 5× / 12× / 24× / 30× / 40× have been observed.",
    whenStrategy: "Buy in bursts before a rolling session — not while you cannot afford what you roll.",
  },
  {
    name: "Ore Regen Speed",
    where: "Upgrade board (every floor)",
    does: "Ores regrow faster after drones drill them. Rarer ores regrow slower.",
    whenStrategy: "Top early buy alongside Drill Speed.",
  },
  {
    name: "Drill Speed",
    where: "Upgrade board (every floor)",
    does: "Drone cycles the floor faster. Each floor has its own drone and level cap.",
    whenStrategy: "Max it on any floor whose drone cannot keep up with finished ores.",
  },
  {
    name: "Drill Yield",
    where: "Upgrade board (every floor)",
    does: "More cash per crate the drone fills.",
    whenStrategy: "Third priority after Regen + Drill Speed on money floors.",
  },
  {
    name: "Ore Level (+1 / +10)",
    where: "Click the ore",
    does: "Raises that ore's cash output. Source examples: Amber $50 → $159 at +10.",
    whenStrategy: "Best return once you own a keeper ore — level keepers before chasing new floors.",
  },
  {
    name: "Roll Pedestals",
    where: "Next to the lever",
    does: "Extra pedestals let you roll several ores at once (up to five; fifth noted at $1M).",
    whenStrategy: "Buy the second and third early — rolling feeds everything else.",
  },
  {
    name: "Mining Slots / Tunnels",
    where: "Each floor",
    does: "Seven slots per floor. Prices climb by floor (thousands early → $1T–$150T late).",
    whenStrategy: "Fill a floor before opening the next one.",
  },
  {
    name: "Furnace",
    where: "Floor 3",
    does: "+50% money on processed crates; upgradeable. Can bottleneck if queue builds up.",
    whenStrategy: "Upgrade when the furnace queue is the visible bottleneck.",
  },
  {
    name: "Boost Pedestal",
    where: "Floor 2+ (some higher floors)",
    does: "Place a spare ore for a base-wide money boost that scales with ore tier (examples: Sapphire 21%, God Stone 76%).",
    whenStrategy: "Use a spare, not your best money ore, unless the boost clearly outweighs the lost slot.",
  },
]

export const UPGRADE_SOURCE = {
  status: "single-source" as const,
  asOf: "2026-09-07",
  url: "https://selloresguide.wiki/upgrades/",
  note: "Mechanics summarized from a community upgrades guide. Buy-order text is Strategy — not an ROI formula.",
}
