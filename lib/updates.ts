export type UpdateEntry = {
  date: string
  title: string
  summary: string
  evidence: string
}

export const UPDATES: UpdateEntry[] = [
  {
    date: "2026-09-01",
    title: "Floor 7 Fusion Update",
    summary: "Content update covering Floor 7 and pet fusion — creators covered codes + fusion the same day.",
    evidence: "YouTube upload titles / patch-day coverage",
  },
  {
    date: "2026-09-06",
    title: "Admin Abuse / event window",
    summary: "Event window correlated with an ATH CCU spike. Treat that day as mixed signal, not a clean growth day.",
    evidence: "Community trackers + event scheduling notes",
  },
  {
    date: "Ongoing",
    title: "Code drops",
    summary: "New codes typically appear on the official Discord codes channel, then get mirrored by media.",
    evidence: "Discord + media code pages",
  },
]
