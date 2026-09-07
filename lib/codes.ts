/**
 * Code status model (ShipSolo SEO toolkit P0-004).
 * Never mark `in-game` without an explicit human redeem record in-repo.
 */
export type CodeStatus = "in-game" | "cross-source" | "conflicted" | "expired" | "needs-check"

export type CodeEntry = {
  code: string
  reward: string
  source: string
  firstSeenAt: string
  lastCheckedAt: string
  status: CodeStatus
}

export const CODE_STATUS_LABEL: Record<CodeStatus, string> = {
  "in-game": "In-game checked",
  "cross-source": "Cross-source",
  conflicted: "Conflicted",
  expired: "Expired",
  "needs-check": "Needs check",
}

export const CODE_STATUS_HINT: Record<CodeStatus, string> = {
  "in-game": "Redeemed successfully in Place ID 122572082932179 during a recorded check.",
  "cross-source": "Two or more recent public sources agree this code is currently listed active.",
  conflicted: "Recent sources disagree on status and/or reward — redeem at your own risk.",
  expired: "Reliable recent consensus says this code no longer works.",
  "needs-check": "Mentioned publicly but not enough agreement yet to treat as active.",
}

/**
 * Cross-source actives as of 2026-09-07.
 * Evidence: Destructoid (Sep 6 list fetched 2026-09-07) + toolkit SOURCES citing Pro Game Guides (Sep 1).
 * No row is marked in-game until a human redeem log exists.
 */
export const ACTIVE_CODES: CodeEntry[] = [
  {
    code: "ADMINMUTATION",
    reward: "1 Admin Coating Spray",
    source: "Destructoid (Sep 2026) + Pro Game Guides (audit cite)",
    firstSeenAt: "2026-09-01",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
  {
    code: "FRAGMENTS",
    reward: "25 Adminite Fragments",
    source: "Destructoid (Sep 2026) + Pro Game Guides (audit cite)",
    firstSeenAt: "2026-09-01",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
  {
    code: "ROBLOXSERVERS",
    reward: "24hr Time Skip",
    source: "Destructoid / Sportskeeda",
    firstSeenAt: "2026-09-07",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
  {
    code: "ALMIGHTY",
    reward: "6hr Time Skip",
    source: "Destructoid / Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-29",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
  {
    code: "SORRYFORDATA",
    reward: "24hr Time Skip",
    source: "Destructoid / Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-29",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
  {
    code: "BALANCE",
    reward: "6hr Time Skip",
    source: "Destructoid / Sportskeeda",
    firstSeenAt: "2026-08-29",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
  {
    code: "PETFUSION",
    reward: "Devil's Growth Gem",
    source: "Destructoid / Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-29",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
  {
    code: "EXPANSION",
    reward: "Small Growth Gem",
    source: "Destructoid / Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-21",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
  {
    code: "RELEASE",
    reward: "500 cash",
    source: "Destructoid / Sportskeeda / Dexerto",
    firstSeenAt: "2026-08-21",
    lastCheckedAt: "2026-09-07",
    status: "cross-source",
  },
]

/** Conflicted / insufficient consensus — not in the Active table. */
export const CONFLICTED_CODES: CodeEntry[] = [
  {
    code: "FINALE",
    reward: "Conflicted across sources",
    source: "Pocket Tactics / media lists disagree",
    firstSeenAt: "2026-09-05",
    lastCheckedAt: "2026-09-07",
    status: "conflicted",
  },
  {
    code: "ANOTHERONE",
    reward: "Needs check",
    source: "Older media mentions",
    firstSeenAt: "2026-09-05",
    lastCheckedAt: "2026-09-07",
    status: "needs-check",
  },
  {
    code: "SECRETCODE",
    reward: "Needs check",
    source: "Older media mentions",
    firstSeenAt: "2026-09-05",
    lastCheckedAt: "2026-09-07",
    status: "needs-check",
  },
]

/** @deprecated use CONFLICTED_CODES */
export const UNCONFIRMED_CODES = CONFLICTED_CODES

export function countByStatus(codes: CodeEntry[], status: CodeStatus) {
  return codes.filter((c) => c.status === status).length
}
