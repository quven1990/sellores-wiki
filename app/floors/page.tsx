import Link from "next/link"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { FLOOR_SOURCE, FLOORS } from "@/lib/floors"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.floors)

export default function FloorsPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.floors} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { label: "Floors" },
        ]}
      />
      <PageHero
        eyebrow={`Source status · ${FLOOR_SOURCE.status} · ${FLOOR_SOURCE.asOf}`}
        title="Sell Ores Floors & Unlocks"
        description="Floor costs, Boost Pedestal, Furnace, and Floor 7 Fuser — with confidence notes where footage did not show a clear price."
      />

      <Section>
        <Callout>
          Single-source community table (
          <a href={FLOOR_SOURCE.url} className="text-primary hover:underline" target="_blank" rel="noreferrer">
            selloresguide.wiki/floors
          </a>
          ). Approximate and “not read off screen” rows are intentional — we do not invent unlock costs.
        </Callout>
      </Section>

      <Section title="Floor progression">
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="border-b border-border bg-surface-2 text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Floor</th>
                <th className="px-4 py-3 font-medium">Unlock cost</th>
                <th className="px-4 py-3 font-medium">What it adds</th>
                <th className="px-4 py-3 font-medium">Confidence</th>
              </tr>
            </thead>
            <tbody>
              {FLOORS.map((f) => (
                <tr key={f.floor} className="border-b border-border/70 last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{f.floor}</td>
                  <td className="px-4 py-3 font-mono text-xs text-primary">{f.unlockCost}</td>
                  <td className="px-4 py-3 text-muted-foreground">{f.unlocks}</td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">{f.confidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Before buying the next floor (Strategy)">
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>Fill current slots and max that floor’s Drill Speed / Regen first.</li>
          <li>
            Floor 2’s Boost Pedestal is online-only per source — plan AFK differently (see{" "}
            <Link href="/guides/afk-money" className="text-primary hover:underline">
              AFK & money
            </Link>
            ).
          </li>
          <li>Floor 7 Fuser needs five matching ores — don’t rush if you can’t feed it.</li>
        </ul>
      </Section>

      <NextUsefulStep
        links={[
          { href: "/upgrades", title: "Upgrades", blurb: "Board priorities before expanding." },
          { href: "/ores", title: "Ores", blurb: "What to place on new slots." },
          { href: "/beginner", title: "Beginner", blurb: "First-hour unlock order." },
        ]}
      />
    </>
  )
}
