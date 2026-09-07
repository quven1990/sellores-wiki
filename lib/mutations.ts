export type MutationEntry = {
  name: string
  multiplier?: string
  coating?: string
  coatingCost?: string
  howElse?: string
  /** cross-source when multiplier matches both gear guides + selloresguide mutation table */
  sourceStatus: "cross-source" | "single-source" | "needs-check"
}

/**
 * Mutation ladder.
 * Multipliers for Rusty→Galaxy match our Gear Shop coatings (AllThingsHow / Sportskeeda
 * aggregation already in lib/gears.ts) and selloresguide.wiki/gear-shop mutation table.
 * Admin mutation has no published multiplier in those sources.
 */
export const MUTATIONS: MutationEntry[] = [
  {
    name: "Rusty",
    multiplier: "×1.5",
    coating: "Rust Coating",
    coatingCost: "$10,000,000",
    howElse: "Rust Storm event (when active)",
    sourceStatus: "cross-source",
  },
  {
    name: "Frozen",
    multiplier: "×1.75",
    coating: "Frost Coating",
    coatingCost: "$750M",
    howElse: "Blizzard event (when active)",
    sourceStatus: "cross-source",
  },
  {
    name: "Crystal",
    multiplier: "×2",
    coating: "Crystal Coating",
    coatingCost: "$1B",
    sourceStatus: "cross-source",
  },
  {
    name: "Void",
    multiplier: "×2.25",
    coating: "Void Coating",
    coatingCost: "$10B",
    sourceStatus: "cross-source",
  },
  {
    name: "Alien",
    multiplier: "×3.25",
    coating: "Alien Coating",
    coatingCost: "$100B",
    howElse: "UFO abduction event (when active)",
    sourceStatus: "cross-source",
  },
  {
    name: "Galaxy",
    multiplier: "×5",
    coating: "Galaxy Coating",
    coatingCost: "$1T",
    howElse: "Galaxy event (when active)",
    sourceStatus: "cross-source",
  },
  {
    name: "Admin",
    coating: "Admin Coating Spray",
    howElse: "ADMINMUTATION code reward; multiplier not published in checked guides",
    sourceStatus: "single-source",
  },
]

export const MUTATION_META = {
  asOf: "2026-09-07",
  cleanser: {
    name: "Ore Cleanser",
    cost: "$1,000,000",
    effect: "Removes the mutation from one ore",
    sourceStatus: "cross-source" as const,
  },
  note: "Coatings lock a mutation onto one ore. Multipliers below are sell-value multipliers from public gear guides — not in-game verified by this wiki.",
}
