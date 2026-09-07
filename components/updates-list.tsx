"use client"

import { useMemo, useState } from "react"
import Link from "next/link"

import type { UpdateEntry } from "@/lib/updates"

const FILTERS = [
  { id: "all", label: "All" },
  { id: "Codes", label: "Codes" },
  { id: "Pets", label: "Pets" },
  { id: "Gears", label: "Gears" },
  { id: "Beginner", label: "Beginner" },
] as const

export function UpdatesList({ updates }: { updates: UpdateEntry[] }) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["id"]>("all")
  const [q, setQ] = useState("")

  const visible = useMemo(() => {
    const query = q.trim().toLowerCase()
    return updates.filter((entry) => {
      if (filter !== "all" && !entry.affected.some((a) => a.label === filter)) return false
      if (!query) return true
      const hay = `${entry.title} ${entry.summary} ${entry.playerImpact}`.toLowerCase()
      return hay.includes(query)
    })
  }, [updates, filter, q])

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={
                filter === f.id
                  ? "rounded-md border border-primary bg-primary/15 px-3 py-1.5 text-xs font-medium text-primary"
                  : "rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
              }
            >
              {f.label}
            </button>
          ))}
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search updates…"
          className="w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground sm:max-w-xs"
        />
      </div>

      <ul className="space-y-4">
        {visible.map((entry) => (
          <li key={`${entry.date}-${entry.title}`} className="rounded-xl border border-border bg-surface p-5">
            <p className="font-mono text-xs text-primary">{entry.date}</p>
            <h3 className="mt-1 font-display text-xl font-semibold">{entry.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.summary}</p>
            <p className="mt-3 text-sm text-foreground">
              <span className="text-muted-foreground">Player impact: </span>
              {entry.playerImpact}
            </p>
            <p className="mt-3 flex flex-wrap gap-2 text-sm">
              {entry.affected.map((a) => (
                <Link key={a.href + a.label} href={a.href} className="text-primary hover:underline">
                  {a.label}
                </Link>
              ))}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Evidence: {entry.evidence} · Source status: {entry.sourceStatus}
            </p>
          </li>
        ))}
      </ul>

      {visible.length === 0 ? (
        <p className="text-sm text-muted-foreground">No updates match this filter.</p>
      ) : null}
    </div>
  )
}
