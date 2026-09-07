import { CopyButton } from "@/components/copy-button"
import type { CodeEntry } from "@/lib/codes"
import { cn } from "@/lib/utils"

const STATUS_LABEL: Record<CodeEntry["status"], string> = {
  verified: "Verified in-game",
  reported: "Reported — verify in-game",
  expired: "Expired",
  unconfirmed: "Unconfirmed",
}

const STATUS_CLASS: Record<CodeEntry["status"], string> = {
  verified: "border-ore/40 bg-ore/10 text-ore",
  reported: "border-accent/40 bg-accent/10 text-accent",
  expired: "border-border bg-muted text-muted-foreground",
  unconfirmed: "border-danger/40 bg-danger/10 text-danger",
}

export function CodeTable({
  codes,
  dense = false,
}: {
  codes: CodeEntry[]
  dense?: boolean
}) {
  return (
    <>
      {/* Mobile cards */}
      <ul className="space-y-3 md:hidden">
        {codes.map((entry) => (
          <li
            key={entry.code}
            className="rounded-xl border border-border bg-surface p-4"
          >
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
                  className={cn(
                    "inline-flex rounded-full border px-2 py-0.5 text-xs",
                    STATUS_CLASS[entry.status],
                  )}
                >
                  {STATUS_LABEL[entry.status]}
                </span>
                <span className="text-xs text-muted-foreground">{entry.source}</span>
              </div>
            ) : null}
          </li>
        ))}
      </ul>

      {/* Desktop table */}
      <div className="hidden overflow-x-auto rounded-xl border border-border bg-surface md:block">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-border bg-surface-2 text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Code</th>
              <th className="px-4 py-3 font-medium">Reward</th>
              {!dense && <th className="px-4 py-3 font-medium">Status</th>}
              {!dense && <th className="px-4 py-3 font-medium">Source</th>}
              <th className="px-4 py-3 font-medium" />
            </tr>
          </thead>
          <tbody>
            {codes.map((entry) => (
              <tr key={entry.code} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3 font-mono text-base font-semibold text-primary">
                  {entry.code}
                </td>
                <td className="px-4 py-3 text-foreground">{entry.reward}</td>
                {!dense && (
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex rounded-full border px-2 py-0.5 text-xs",
                        STATUS_CLASS[entry.status],
                      )}
                    >
                      {STATUS_LABEL[entry.status]}
                    </span>
                  </td>
                )}
                {!dense && (
                  <td className="px-4 py-3 text-muted-foreground">{entry.source}</td>
                )}
                <td className="px-4 py-3 text-right">
                  <CopyButton value={entry.code} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
