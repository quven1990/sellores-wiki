"use client"

import { useMemo, useState } from "react"

import { ORES, type OreRarity } from "@/lib/ores"

const RARITIES: Array<"all" | OreRarity> = [
  "all",
  "Common",
  "Uncommon",
  "Rare",
  "Epic",
  "Legendary",
  "Secret",
  "Prismatic",
  "Divine",
  "Exotic",
  "Transcendent",
  "Ascended",
  "Almighty",
  "Unlisted",
]

function cell(value?: string) {
  return value?.trim() ? value : "—"
}

export function OreIndex() {
  const [q, setQ] = useState("")
  const [rarity, setRarity] = useState<"all" | OreRarity>("all")

  const visible = useMemo(() => {
    const query = q.trim().toLowerCase()
    return ORES.filter((ore) => {
      if (rarity !== "all" && ore.rarity !== rarity) return false
      if (!query) return true
      const hay = `${ore.name} ${ore.rarity} ${ore.rollOdds ?? ""} ${ore.buyPrice ?? ""} ${ore.cashSeen ?? ""} ${ore.notes ?? ""}`.toLowerCase()
      return hay.includes(query)
    })
  }, [q, rarity])

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search ore name…"
          className="w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground sm:max-w-sm"
        />
        <select
          value={rarity}
          onChange={(e) => setRarity(e.target.value as "all" | OreRarity)}
          className="rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground"
        >
          {RARITIES.map((r) => (
            <option key={r} value={r}>
              {r === "all" ? "All rarities" : r}
            </option>
          ))}
        </select>
        <p className="text-xs text-muted-foreground sm:ml-auto">
          Showing {visible.length} / {ORES.length}
        </p>
      </div>

      <div
        className="overflow-x-auto rounded-xl border border-border bg-surface"
        role="region"
        aria-label="Sell Ores ore index"
        tabIndex={0}
      >
        <table className="w-full min-w-[920px] text-left text-sm">
          <thead className="border-b border-border bg-surface-2 text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Ore</th>
              <th className="px-4 py-3 font-medium">Rarity</th>
              <th className="px-4 py-3 font-medium">Roll odds</th>
              <th className="px-4 py-3 font-medium">Buy price</th>
              <th className="px-4 py-3 font-medium">Cash / notes seen</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((ore) => (
              <tr key={ore.name} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3 font-medium text-foreground">{ore.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{ore.rarity}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                  {cell(ore.rollOdds)}
                </td>
                <td className="px-4 py-3 font-mono text-xs text-primary">{cell(ore.buyPrice)}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {ore.cashSeen || ore.notes ? (
                    <>
                      {ore.cashSeen}
                      {ore.cashSeen && ore.notes ? " · " : null}
                      {ore.notes}
                    </>
                  ) : (
                    "—"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
