"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"

type ChecklistItem = {
  id: string
  label: string
  href?: string
  linkLabel?: string
}

const STORAGE_KEY = "sellores-beginner-checklist-v1"

const SECTIONS: Array<{ id: string; title: string; items: ChecklistItem[] }> = [
  {
    id: "first5",
    title: "First 5 minutes",
    items: [
      { id: "place-id", label: "Confirm you are on the correct Sell Ores Place ID" },
      {
        id: "redeem-codes",
        label: "Redeem Cross-source codes",
        href: "/codes",
        linkLabel: "Codes →",
      },
      { id: "roll-place", label: "Roll an ore and place it in a slot (don’t pocket it)" },
      { id: "first-sell", label: "Sell the first crate and confirm the cash loop" },
    ],
  },
  {
    id: "first30",
    title: "First 30 minutes",
    items: [
      { id: "fill-slots", label: "Fill every usable slot before luxury boosts" },
      { id: "drones-busy", label: "Keep drones busy — idle drones mean wasted rolls" },
      {
        id: "bottleneck",
        label: "Spend on the slowest step: regen, drill speed, or slots",
      },
      {
        id: "skip-premium-pets",
        label: "Skip premium Lucky Blocks until income feels stable",
        href: "/pets",
        linkLabel: "Pets →",
      },
      {
        id: "check-gears",
        label: "Only buy a Growth Gem/coating after slots stay filled",
        href: "/gears",
        linkLabel: "Gears →",
      },
    ],
  },
  {
    id: "next",
    title: "Next progression step",
    items: [
      {
        id: "recheck-codes",
        label: "Re-check Codes after Discord / update drops",
        href: "/codes",
        linkLabel: "Codes →",
      },
      {
        id: "read-updates",
        label: "Scan Updates for player impact on your current goal",
        href: "/updates",
        linkLabel: "Updates →",
      },
    ],
  },
]

export function BeginnerChecklist() {
  const [done, setDone] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setDone(JSON.parse(raw) as Record<string, boolean>)
    } catch {
      /* ignore */
    }
  }, [])

  function persist(next: Record<string, boolean>) {
    setDone(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* ignore */
    }
  }

  function toggle(id: string) {
    persist({ ...done, [id]: !done[id] })
  }

  function reset() {
    persist({})
  }

  const allIds = useMemo(() => SECTIONS.flatMap((s) => s.items.map((i) => i.id)), [])
  const complete = allIds.filter((id) => done[id]).length

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-muted-foreground">
          Progress:{" "}
          <span className="font-medium text-foreground">
            {complete} / {allIds.length} complete
          </span>{" "}
          (saved on this device)
        </p>
        <button
          type="button"
          onClick={reset}
          className="rounded-md border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground"
        >
          Reset checklist
        </button>
      </div>

      {SECTIONS.map((section) => (
        <div key={section.id} className="rounded-xl border border-border bg-surface p-5">
          <h3 className="font-display text-lg font-semibold">{section.title}</h3>
          <ul className="mt-4 space-y-3">
            {section.items.map((item) => (
              <li key={item.id} className="flex flex-wrap items-start gap-3 text-sm">
                <label className="flex min-w-0 flex-1 items-start gap-3 text-muted-foreground">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={Boolean(done[item.id])}
                    onChange={() => toggle(item.id)}
                  />
                  <span className={done[item.id] ? "text-foreground line-through opacity-70" : ""}>
                    {item.label}
                  </span>
                </label>
                {item.href ? (
                  <Link href={item.href} className="shrink-0 text-primary hover:underline">
                    {item.linkLabel ?? "Open →"}
                  </Link>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
