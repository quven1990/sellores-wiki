"use client"

import { useMemo, useState } from "react"

import { PET_ROSTER, type PetTier } from "@/lib/pets-roster"

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

const EFFECT_HINTS = [
  { id: "all", label: "All effects" },
  { id: "money", label: "Money" },
  { id: "luck", label: "Luck" },
  { id: "drill", label: "Drill / speed" },
  { id: "regen", label: "Regen / grow" },
  { id: "mutation", label: "Mutation" },
] as const

function matchesEffect(ability: string, effect: (typeof EFFECT_HINTS)[number]["id"]) {
  if (effect === "all") return true
  const a = ability.toLowerCase()
  if (effect === "money") return a.includes("money") || a.includes("cash") || a.includes("sell")
  if (effect === "luck") return a.includes("luck")
  if (effect === "drill") return a.includes("drill") || a.includes("speed") || a.includes("drone")
  if (effect === "regen") return a.includes("regen") || a.includes("grow") || a.includes("growth")
  if (effect === "mutation") return a.includes("mutation") || a.includes("coat")
  return true
}

export function PetRoster() {
  const [q, setQ] = useState("")
  const [tier, setTier] = useState<"all" | PetTier>("all")
  const [effect, setEffect] = useState<(typeof EFFECT_HINTS)[number]["id"]>("all")

  const visible = useMemo(() => {
    const query = q.trim().toLowerCase()
    return PET_ROSTER.filter((pet) => {
      if (tier !== "all" && pet.tier !== tier) return false
      if (!matchesEffect(pet.ability, effect)) return false
      if (!query) return true
      const hay = `${pet.name} ${pet.tier} ${pet.ability} ${pet.moneyBoost}`.toLowerCase()
      return hay.includes(query)
    })
  }, [q, tier, effect])

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
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
        <select
          value={effect}
          onChange={(e) => setEffect(e.target.value as (typeof EFFECT_HINTS)[number]["id"])}
          className="rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground"
        >
          {EFFECT_HINTS.map((e) => (
            <option key={e.id} value={e.id}>
              {e.label}
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
              <th className="px-4 py-3 font-medium">Chance</th>
              <th className="px-4 py-3 font-medium">Money</th>
              <th className="px-4 py-3 font-medium">Ability</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((pet) => (
              <tr key={pet.name} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3 font-medium text-foreground">{pet.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{pet.tier}</td>
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{pet.chance}</td>
                <td className="px-4 py-3 font-mono text-xs text-primary">+{pet.moneyBoost}</td>
                <td className="px-4 py-3 text-muted-foreground">{pet.ability}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
