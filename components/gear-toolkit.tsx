"use client"

import { useMemo, useState } from "react"

import { GEAR_KIND_LABEL, type GearEntry, type GearKind } from "@/lib/gears"
import { cn } from "@/lib/utils"

type KindFilter = "all" | GearKind
type SortMode = "price-asc" | "price-desc" | "name"

function parseWallet(input: string): number | null {
  const cleaned = input.trim().replace(/[$,\s]/g, "")
  if (!cleaned) return null
  const m = cleaned.match(/^(\d+(?:\.\d+)?)([KMBT])?$/i)
  if (!m) return null
  const n = Number(m[1])
  if (!Number.isFinite(n)) return null
  const suffix = (m[2] || "").toUpperCase()
  const mult =
    suffix === "K" ? 1e3 : suffix === "M" ? 1e6 : suffix === "B" ? 1e9 : suffix === "T" ? 1e12 : 1
  return n * mult
}

export function GearToolkit({ gears }: { gears: GearEntry[] }) {
  const [kind, setKind] = useState<KindFilter>("all")
  const [sort, setSort] = useState<SortMode>("price-asc")
  const [walletRaw, setWalletRaw] = useState("")

  const wallet = parseWallet(walletRaw)

  const visible = useMemo(() => {
    let rows = kind === "all" ? [...gears] : gears.filter((g) => g.kind === kind)
    rows.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name)
      if (sort === "price-desc") return b.costValue - a.costValue
      return a.costValue - b.costValue
    })
    return rows
  }, [gears, kind, sort])

  const nextTarget =
    wallet === null
      ? null
      : visible
          .filter((g) => g.costValue > wallet)
          .sort((a, b) => a.costValue - b.costValue)[0] ?? null

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-4 sm:flex-row sm:flex-wrap sm:items-end">
        <label className="flex min-w-[140px] flex-1 flex-col gap-1 text-xs text-muted-foreground">
          Type
          <select
            value={kind}
            onChange={(e) => setKind(e.target.value as KindFilter)}
            className="rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground"
          >
            <option value="all">All</option>
            <option value="growth_gem">Growth Gem</option>
            <option value="coating">Coating</option>
            <option value="cleanser">Cleanser</option>
          </select>
        </label>
        <label className="flex min-w-[140px] flex-1 flex-col gap-1 text-xs text-muted-foreground">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortMode)}
            className="rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground"
          >
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="name">Name</option>
          </select>
        </label>
        <label className="flex min-w-[180px] flex-[1.4] flex-col gap-1 text-xs text-muted-foreground">
          I have (optional)
          <input
            value={walletRaw}
            onChange={(e) => setWalletRaw(e.target.value)}
            placeholder="e.g. 50M or 1000000000"
            className="rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground"
          />
        </label>
      </div>

      {wallet !== null ? (
        <p className="text-sm text-muted-foreground">
          Affordable rows highlighted from sourced prices only.
          {nextTarget ? (
            <>
              {" "}
              Next target by price:{" "}
              <span className="font-medium text-foreground">
                {nextTarget.name} ({nextTarget.cost})
              </span>
              .
            </>
          ) : (
            <> You can afford every gear in this filtered list.</>
          )}
        </p>
      ) : walletRaw.trim() ? (
        <p className="text-sm text-accent">Wallet format not recognized. Try `50M`, `1B`, or `500000`.</p>
      ) : null}

      <ul className="space-y-3 md:hidden">
        {visible.map((gear) => {
          const affordable = wallet !== null && gear.costValue <= wallet
          return (
            <li
              key={gear.name}
              className={cn(
                "rounded-xl border bg-surface p-4",
                affordable ? "border-ore/50 bg-ore/5" : "border-border",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-base font-semibold text-foreground">{gear.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {GEAR_KIND_LABEL[gear.kind]}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-sm text-primary">{gear.cost}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{gear.effect}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-accent">
                {gear.verifiedInGame ? "In-game checked" : "Needs check"}
                {affordable ? " · Affordable" : ""}
              </p>
            </li>
          )
        })}
      </ul>

      <div className="hidden overflow-x-auto rounded-xl border border-border bg-surface md:block">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-border bg-surface-2 text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Gear</th>
              <th className="px-4 py-3 font-medium">Type</th>
              <th className="px-4 py-3 font-medium">Cost</th>
              <th className="px-4 py-3 font-medium">Effect</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((gear) => {
              const affordable = wallet !== null && gear.costValue <= wallet
              return (
                <tr
                  key={gear.name}
                  className={cn(
                    "border-b border-border/70 last:border-0",
                    affordable && "bg-ore/5",
                  )}
                >
                  <td className="px-4 py-3 font-medium text-foreground">{gear.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{GEAR_KIND_LABEL[gear.kind]}</td>
                  <td className="px-4 py-3 font-mono text-primary">{gear.cost}</td>
                  <td className="px-4 py-3 text-muted-foreground">{gear.effect}</td>
                  <td className="px-4 py-3 text-xs uppercase tracking-wide text-accent">
                    {gear.verifiedInGame ? "In-game checked" : "Needs check"}
                    {affordable ? " · Affordable" : ""}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
