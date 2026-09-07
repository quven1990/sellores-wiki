export type GearKind = "growth_gem" | "coating" | "cleanser"

export type GearEntry = {
  name: string
  cost: string
  effect: string
  kind: GearKind
  verifiedInGame: boolean
}

/** Aggregated from public guides (AllThings.How / Sportskeeda). Spot-check before treating as final. */
export const GEARS: GearEntry[] = [
  {
    name: "Small Growth Gem",
    cost: "$500,000",
    effect: "2× ore regen for 5 minutes",
    kind: "growth_gem",
    verifiedInGame: false,
  },
  {
    name: "Ore Cleanser",
    cost: "$1,000,000",
    effect: "Removes a mutation from an ore",
    kind: "cleanser",
    verifiedInGame: false,
  },
  {
    name: "Rust Coating",
    cost: "$10,000,000",
    effect: "Applies Rusty mutation (×1.5)",
    kind: "coating",
    verifiedInGame: false,
  },
  {
    name: "Large Growth Gem",
    cost: "$50,000,000",
    effect: "4× ore regen for 10 minutes",
    kind: "growth_gem",
    verifiedInGame: false,
  },
  {
    name: "Frost Coating",
    cost: "$750M",
    effect: "Applies Frozen mutation (×1.75)",
    kind: "coating",
    verifiedInGame: false,
  },
  {
    name: "Crystal Coating",
    cost: "$1B",
    effect: "Applies Crystal mutation (×2)",
    kind: "coating",
    verifiedInGame: false,
  },
  {
    name: "Void Coating",
    cost: "$10B",
    effect: "Applies Void mutation (×2.25)",
    kind: "coating",
    verifiedInGame: false,
  },
  {
    name: "Super Growth Gem",
    cost: "$15B",
    effect: "6× ore regen for 15 minutes",
    kind: "growth_gem",
    verifiedInGame: false,
  },
  {
    name: "Alien Coating",
    cost: "$100B",
    effect: "Applies Alien mutation (×3.25)",
    kind: "coating",
    verifiedInGame: false,
  },
  {
    name: "Galaxy Coating",
    cost: "$1T",
    effect: "Applies Galaxy mutation (×5)",
    kind: "coating",
    verifiedInGame: false,
  },
  {
    name: "Devil's Growth Gem",
    cost: "$25T",
    effect: "12× ore regen for 15 minutes",
    kind: "growth_gem",
    verifiedInGame: false,
  },
]
