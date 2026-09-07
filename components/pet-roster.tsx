"use client"

import { useMemo, useState } from "react"

import { PET_ROSTER, type PetTier } from "@/lib/pets-roster"
import { cn } from "@/lib/utils"

const TIERS: Array<"all" | PetTier> = [
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
  "Transcended",
]

export function PetRoster() {
  const [q, setQ] = useState("")
  const [tier, setTier] = useState<"all" | PetTier>("all")

  const visible = useMemo(() => {
    const query = q.trim().toLowerCase()
    return PET_ROSTER.filter((pet) => {
      if (tier !== "all" && pet.tier !== tier) return false
      if (!query) return true
      const hay = `${pet.name} ${pet.tier} ${pet.ability} ${pet.moneyBoost}`.toLowerCase()
      return hay.includes(query)
    })
  }, [q, tier])

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search name or ability…"
          className="w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground sm:max-w-sm"
        />
        <select
          value={tier}
          onChange={(e) => setTier(e.target.value as "all" | PetTier)}
          className="rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground"
        >
          {TIERS.map((t) => (
            <option key={t} value={t}>
              {t === "all" ? "All tiers" : t}
            </option>
          ))}
        </select>
        <p className="text-xs text-muted-foreground sm:ml-auto">
          Showing {visible.length} / {PET_ROSTER.length}
        </p>
      </div>

      <ul className="space-y-3 md:hidden">
        {visible.map((pet) => (
          <li key={pet.name} className="rounded-xl border border-border bg-surface p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-display text-base font-semibold text-foreground">{pet.name}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {pet.tier} · slot {pet.chance}
                </p>
              </div>
              <p className="shrink-0 font-mono text-sm text-primary">+{pet.moneyBoost} money</p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{pet.ability}</p>
          </li>
        ))}
      </ul>

      <div className="hidden overflow-x-auto rounded-xl border border-border bg-surface md:block">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="border-b border-border bg-surface-2 text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Pet</th>
              <th className="px-4 py-3 font-medium">Tier</th>
              <th className="px-4 py-3 font-medium">Slot</th>
              <th className="px-4 py-3 font-medium">Money</th>
              <th className="px-4 py-3 font-medium">Ability</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((pet) => (
              <tr key={pet.name} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3 font-medium text-foreground">{pet.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{pet.tier}</td>
                <td className="px-4 py-3 font-mono text-cyan">{pet.chance}</td>
                <td className="px-4 py-3 font-mono text-primary">{pet.moneyBoost}</td>
                <td className="px-4 py-3 text-muted-foreground">{pet.ability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visible.length === 0 ? (
        <p className="text-sm text-muted-foreground">No pets match this search.</p>
      ) : null}
    </div>
  )
}
