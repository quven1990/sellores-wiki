export type BuffCategory = {
  id: string
  label: string
  summary: string
}

export const PET_BUFF_CATEGORIES: BuffCategory[] = [
  {
    id: "yield",
    label: "Yield",
    summary: "Raises output from drilled ores / crates.",
  },
  {
    id: "drill",
    label: "Drill speed",
    summary: "Shortens how long the drone takes to finish a crate.",
  },
  {
    id: "luck",
    label: "Luck",
    summary: "Improves roll quality toward rarer ores.",
  },
  {
    id: "mutation",
    label: "Timed mutation",
    summary: "Temporary mutation-style value boosts from pet effects.",
  },
  {
    id: "instant",
    label: "Instant grow",
    summary: "Pets that skip or accelerate ore growth windows.",
  },
]

export const PET_NOTES = [
  "Pets come from Pet Shop Lucky Blocks near the market.",
  "Identical pets can fuse — confirm exact fusion UI in-game before publishing drop tables.",
  "Named pet + drop-rate tables stay skeleton until an in-game pass fills them.",
] as const
