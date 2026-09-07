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
    "Pets come from Pet Shop Lucky Blocks near the market. The community guide documents ten block tiers with five slot weights (50% / 25% / 15% / 8% / 2%). Confirm live shop prices in-game before spending.",
  fusion:
    "Identical pets can fuse. Confirm the exact fusion UI and outcomes in-game before trusting any roster screenshot.",
  floorScope:
    "Strategy note from the same guide: most passive abilities and money boosts apply on the floor where the pet sits. Named exceptions such as Qilin luck and Dragon furnace bonuses may work more broadly — test one change at a time.",
  dataGap:
    "Roster values below are single-source (community FAQ guide). They are not treated as owner API data or in-game checked by this wiki.",
} as const
