export type GearKind = "growth_gem" | "coating" | "cleanser"

export type GearEntry = {
  name: string
  cost: string
  effect: string
  kind: GearKind
  sourceStatus: "in-game" | "gameplay-observed" | "cross-source" | "single-source" | "conflicted" | "needs-check"
  /** Numeric cash cost for sort/wallet helpers. Parsed from `cost` display string. */
  costValue: number
}

/**
 * Parse guide cost strings like $500,000 / $750M / $1B / $25T into a number.
 * Returns null if the format is unrecognized (row still shows, but wallet helpers skip it).
 */
export function parseGearCost(cost: string): number | null {
  const raw = cost.trim().replace(/[$,\s]/g, "")
  const m = raw.match(/^(\d+(?:\.\d+)?)([KMBT])?$/i)
  if (!m) return null
  const n = Number(m[1])
  if (!Number.isFinite(n)) return null
  const suffix = (m[2] || "").toUpperCase()
  const mult =
    suffix === "K" ? 1e3 : suffix === "M" ? 1e6 : suffix === "B" ? 1e9 : suffix === "T" ? 1e12 : 1
  return n * mult
}

function withCost(entry: Omit<GearEntry, "costValue">): GearEntry {
  const costValue = parseGearCost(entry.cost)
  if (costValue === null) {
    throw new Error(`Unparseable gear cost: ${entry.name} ${entry.cost}`)
  }
  return { ...entry, costValue }
}

/**
 * Prices/effects agree between AllThings.How and Sportskeeda (checked 2026-09-08).
 * This is cross-source public evidence, not an in-game check by this wiki.
 */
export const GEARS: GearEntry[] = [
  withCost({
    name: "Small Growth Gem",
    cost: "$500,000",
    effect: "2× ore regen for 5 minutes",
    kind: "growth_gem",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Ore Cleanser",
    cost: "$1,000,000",
    effect: "Removes a mutation from an ore",
    kind: "cleanser",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Rust Coating",
    cost: "$10,000,000",
    effect: "Applies Rusty mutation (×1.5)",
    kind: "coating",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Large Growth Gem",
    cost: "$50,000,000",
    effect: "4× ore regen for 10 minutes",
    kind: "growth_gem",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Frost Coating",
    cost: "$750M",
    effect: "Applies Frozen mutation (×1.75)",
    kind: "coating",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Crystal Coating",
    cost: "$1B",
    effect: "Applies Crystal mutation (×2)",
    kind: "coating",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Void Coating",
    cost: "$10B",
    effect: "Applies Void mutation (×2.25)",
    kind: "coating",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Super Growth Gem",
    cost: "$15B",
    effect: "6× ore regen for 15 minutes",
    kind: "growth_gem",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Alien Coating",
    cost: "$100B",
    effect: "Applies Alien mutation (×3.25)",
    kind: "coating",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Galaxy Coating",
    cost: "$1T",
    effect: "Applies Galaxy mutation (×5)",
    kind: "coating",
    sourceStatus: "cross-source",
  }),
  withCost({
    name: "Devil's Growth Gem",
    cost: "$25T",
    effect: "12× ore regen for 15 minutes",
    kind: "growth_gem",
    sourceStatus: "cross-source",
  }),
]

export const GEAR_KIND_LABEL: Record<GearKind, string> = {
  growth_gem: "Growth Gem",
  coating: "Coating",
  cleanser: "Cleanser",
}
