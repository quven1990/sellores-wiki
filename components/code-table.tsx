"use client"

import { useEffect, useMemo, useState } from "react"

import { CopyButton } from "@/components/copy-button"
import {
  CODE_STATUS_HINT,
  CODE_STATUS_LABEL,
  type CodeEntry,
  type CodeStatus,
} from "@/lib/codes"
import { cn } from "@/lib/utils"

const STATUS_CLASS: Record<CodeStatus, string> = {
  "in-game": "border-ore/40 bg-ore/10 text-ore",
  "cross-source": "border-cyan/40 bg-cyan/10 text-cyan",
  conflicted: "border-accent/40 bg-accent/10 text-accent",
  expired: "border-border bg-muted text-muted-foreground",
  "needs-check": "border-border bg-muted text-muted-foreground",
}

const FILTERS: Array<{ id: "all" | CodeStatus; label: string }> = [
  { id: "all", label: "All" },
  { id: "cross-source", label: "Cross-source" },
  { id: "in-game", label: "In-game" },
  { id: "conflicted", label: "Conflicted" },
  { id: "needs-check", label: "Needs check" },
  { id: "expired", label: "Expired" },
]

const STORAGE_KEY = "sellores-codes-redeemed-v1"

export function CodeTable({
  codes,
  dense = false,
  enableRedeemed = false,
  enableFilter = false,
}: {
  codes: CodeEntry[]
  dense?: boolean
  enableRedeemed?: boolean
  enableFilter?: boolean
}) {
  const [filter, setFilter] = useState<"all" | CodeStatus>("all")
  const [query, setQuery] = useState("")
  const [redeemed, setRedeemed] = useState<Record<string, boolean>>({})
  const [hideRedeemed, setHideRedeemed] = useState(false)

  useEffect(() => {
    if (!enableRedeemed) return
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setRedeemed(JSON.parse(raw) as Record<string, boolean>)
    } catch {
      /* ignore */
    }
  }, [enableRedeemed])

  function toggleRedeemed(code: string) {
    setRedeemed((prev) => {
      const next = { ...prev, [code]: !prev[code] }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }

  const visible = useMemo(() => {
    let rows = codes
    if (enableFilter && filter !== "all") {
      rows = rows.filter((c) => c.status === filter)
    }
    const q = query.trim().toLowerCase()
    if (enableFilter && q) {
      rows = rows.filter((c) => `${c.code} ${c.reward}`.toLowerCase().includes(q))
    }
    if (enableRedeemed && hideRedeemed) {
      rows = rows.filter((c) => !redeemed[c.code])
    }
    return rows
  }, [codes, enableFilter, enableRedeemed, filter, hideRedeemed, query, redeemed])

  return (
    <div className="space-y-4">
      {enableFilter ? (
        <div className="space-y-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search code or reward…"
            className="w-full rounded-md border border-border bg-surface-2 px-3 py-2 text-sm text-foreground sm:max-w-sm"
          />
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-xs font-medium transition",
                  filter === f.id
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
            {enableRedeemed ? (
              <label className="ml-auto flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={hideRedeemed}
                  onChange={(e) => setHideRedeemed(e.target.checked)}
                />
                Hide redeemed
              </label>
            ) : null}
          </div>
        </div>
      ) : null}

      <ul className="space-y-3 md:hidden">
        {visible.map((entry) => (
          <li key={entry.code} className="rounded-xl border border-border bg-surface p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-mono text-lg font-semibold text-primary">{entry.code}</p>
                <p className="mt-1 text-sm text-foreground">{entry.reward}</p>
              </div>
              <CopyButton value={entry.code} className="shrink-0" />
            </div>
            {!dense ? (
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  title={CODE_STATUS_HINT[entry.status]}
                  className={cn(
                    "inline-flex rounded-full border px-2 py-0.5 text-xs",
                    STATUS_CLASS[entry.status],
                  )}
                >
                  {CODE_STATUS_LABEL[entry.status]}
                </span>
                <span className="text-xs text-muted-foreground">
                  Checked {entry.lastCheckedAt}
                </span>
              </div>
            ) : null}
            {enableRedeemed ? (
              <label className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                <input
                  type="checkbox"
                  checked={Boolean(redeemed[entry.code])}
                  onChange={() => toggleRedeemed(entry.code)}
                />
                Mark redeemed (saved on this device)
              </label>
            ) : null}
          </li>
        ))}
      </ul>

      <div className="hidden overflow-x-auto rounded-xl border border-border bg-surface md:block">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-border bg-surface-2 text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Code</th>
              <th className="px-4 py-3 font-medium">Reward</th>
              {!dense && <th className="px-4 py-3 font-medium">Status</th>}
              {!dense && <th className="px-4 py-3 font-medium">Last checked</th>}
              {enableRedeemed && <th className="px-4 py-3 font-medium">Redeemed</th>}
              <th className="px-4 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {visible.map((entry) => (
              <tr key={entry.code} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3 font-mono text-base font-semibold text-primary">
                  {entry.code}
                </td>
                <td className="px-4 py-3 text-foreground">{entry.reward}</td>
                {!dense && (
                  <td className="px-4 py-3">
                    <span
                      title={CODE_STATUS_HINT[entry.status]}
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-xs",
                        STATUS_CLASS[entry.status],
                      )}
                    >
                      {CODE_STATUS_LABEL[entry.status]}
                    </span>
                  </td>
                )}
                {!dense && (
                  <td className="px-4 py-3 text-muted-foreground">{entry.lastCheckedAt}</td>
                )}
                {enableRedeemed && (
                  <td className="px-4 py-3">
                    <input
                      type="checkbox"
                      aria-label={`Mark ${entry.code} redeemed`}
                      checked={Boolean(redeemed[entry.code])}
                      onChange={() => toggleRedeemed(entry.code)}
                    />
                  </td>
                )}
                <td className="px-4 py-3 text-right">
                  <CopyButton value={entry.code} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visible.length === 0 ? (
        <p className="text-sm text-muted-foreground">No codes in this filter.</p>
      ) : null}
    </div>
  )
}
