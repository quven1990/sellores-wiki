export type UpdateEntry = {
  date: string
  title: string
  summary: string
  playerImpact: string
  affected: Array<{ href: string; label: string }>
  evidence: string
  sourceStatus: "cross-source" | "single-source" | "community"
}

/** Newest-first. Dates reflect evidence dates, not deploy time. */
export const UPDATES: UpdateEntry[] = [
  {
    date: "2026-09-06",
    title: "Admin Abuse / event window",
    summary:
      "Event window correlated with an ATH CCU spike. Treat that day as mixed signal, not a clean growth day.",
    playerImpact: "Expect noisy servers and temporary rewards; re-check codes after the window.",
    affected: [
      { href: "/codes", label: "Codes" },
      { href: "/updates", label: "Updates" },
    ],
    evidence: "Community trackers + event scheduling notes",
    sourceStatus: "community",
  },
  {
    date: "2026-09-01",
    title: "Floor 7 Fusion Update",
    summary:
      "Content update covering Floor 7 and pet fusion — creators covered codes + fusion the same day.",
    playerImpact: "Fusion and late-floor goals matter more; early players should still fill slots first.",
    affected: [
      { href: "/pets", label: "Pets" },
      { href: "/beginner", label: "Beginner" },
      { href: "/codes", label: "Codes" },
    ],
    evidence: "YouTube upload titles / patch-day coverage",
    sourceStatus: "cross-source",
  },
  {
    date: "Ongoing",
    title: "Code drops",
    summary:
      "New codes typically appear on the official Discord codes channel, then get mirrored by media.",
    playerImpact: "Check Codes after Discord drops; status stays Cross-source until in-game checked.",
    affected: [{ href: "/codes", label: "Codes" }],
    evidence: "Discord + media code pages",
    sourceStatus: "cross-source",
  },
]
