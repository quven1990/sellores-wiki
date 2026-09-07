export type BuffCategory = {
  id: string
  label: string
  summary: string
  strategyTip: string
}

export const PET_BUFF_CATEGORIES: BuffCategory[] = [
  {
    id: "yield",
    label: "Yield",
    summary: "Raises output from drilled ores / crates.",
    strategyTip: "Strategy: useful when drones already stay busy and slots are filled.",
  },
  {
    id: "drill",
    label: "Drill speed",
    summary: "Shortens how long the drone takes to finish a crate.",
    strategyTip: "Strategy: prioritize when crates pile up waiting on drones.",
  },
  {
    id: "luck",
    label: "Luck",
    summary: "Improves roll quality toward rarer ores.",
    strategyTip: "Strategy: stronger after basic income is stable.",
  },
  {
    id: "mutation",
    label: "Timed mutation",
    summary: "Temporary mutation-style value boosts from pet effects.",
    strategyTip: "Strategy: treat as a timed boost, not permanent base income.",
  },
  {
    id: "instant",
    label: "Instant grow",
    summary: "Pets that skip or accelerate ore growth windows.",
    strategyTip: "Strategy: helps when growth timers are the bottleneck.",
  },
]

export const PET_SYSTEM = {
  howYouGetPets:
    "Pets come from Pet Shop Lucky Blocks near the market. Spend early cash on slots and bottleneck upgrades before premium blocks.",
  fusion:
    "Identical pets can fuse. Confirm the exact fusion UI and outcomes in-game before trusting any roster screenshot.",
  dataGap:
    "Named pet roster and drop-rate tables are still incomplete on this wiki. We publish system guidance first rather than inventing names, odds, or a fake “all pets” list.",
} as const
