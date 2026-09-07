export type CodeStatus = "verified" | "reported" | "expired" | "unconfirmed"

export type CodeEntry = {
  code: string
  reward: string
  source: string
  firstSeenAt: string
  lastCheckedAt: string
  status: CodeStatus
}

/** Media-reported actives. Status stays `reported` until in-game redeem confirms. */
export const ACTIVE_CODES: CodeEntry[] = [
  {
    code: "ROBLOXSERVERS",
    reward: "24hr Time Skip",
    source: "Sportskeeda (Sep 2026, marked Latest)",
    firstSeenAt: "2026-09-07",
    lastCheckedAt: "2026-09-07",
    status: "reported",
  },
  {
    code: "ALMIGHTY",
    reward: "Cash + 6hr time skip",
    source: "Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-29",
    lastCheckedAt: "2026-09-07",
    status: "reported",
  },
  {
    code: "SORRYFORDATA",
    reward: "Cash + 24hr time skip",
    source: "Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-29",
    lastCheckedAt: "2026-09-07",
    status: "reported",
  },
  {
    code: "BALANCE",
    reward: "Cash + time skip",
    source: "Sportskeeda",
    firstSeenAt: "2026-08-29",
    lastCheckedAt: "2026-09-07",
    status: "reported",
  },
  {
    code: "PETFUSION",
    reward: "Devil's Growth Gem",
    source: "Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-29",
    lastCheckedAt: "2026-09-07",
    status: "reported",
  },
  {
    code: "RELEASE",
    reward: "500 cash",
    source: "Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-21",
    lastCheckedAt: "2026-09-07",
    status: "reported",
  },
  {
    code: "EXPANSION",
    reward: "Small Growth Gem",
    source: "Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-21",
    lastCheckedAt: "2026-09-07",
    status: "reported",
  },
]

/** Conflicting or older media mentions — not in the Active table. */
export const UNCONFIRMED_CODES: CodeEntry[] = [
  {
    code: "FINALE",
    reward: "Unknown / conflicted",
    source: "Older media lists; conflicted across sources",
    firstSeenAt: "2026-09-05",
    lastCheckedAt: "2026-09-07",
    status: "unconfirmed",
  },
  {
    code: "ADMINMUTATION",
    reward: "Unknown / conflicted",
    source: "Older media lists; conflicted across sources",
    firstSeenAt: "2026-09-05",
    lastCheckedAt: "2026-09-07",
    status: "unconfirmed",
  },
  {
    code: "FRAGMENTS",
    reward: "Unknown / conflicted",
    source: "Older media lists; conflicted across sources",
    firstSeenAt: "2026-09-05",
    lastCheckedAt: "2026-09-07",
    status: "unconfirmed",
  },
  {
    code: "ANOTHERONE",
    reward: "Unknown / conflicted",
    source: "Older media lists; conflicted across sources",
    firstSeenAt: "2026-09-05",
    lastCheckedAt: "2026-09-07",
    status: "unconfirmed",
  },
  {
    code: "SECRETCODE",
    reward: "Unknown / conflicted",
    source: "Older media lists; conflicted across sources",
    firstSeenAt: "2026-09-05",
    lastCheckedAt: "2026-09-07",
    status: "unconfirmed",
  },
]
