import Link from "next/link"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { MUTATION_META, MUTATIONS } from "@/lib/mutations"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.mutations)

export default function MutationsPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.mutations} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { label: "Mutations" },
        ]}
      />
      <PageHero
        eyebrow={`Updated ${MUTATION_META.asOf}`}
        title="Sell Ores Mutations"
        description="Coatings lock a sell-value mutation onto one ore. Climb Rusty → Galaxy, and keep an Ore Cleanser before expensive mistakes."
      />

      <Section>
        <Callout>{MUTATION_META.note}</Callout>
      </Section>

      <Section title="Mutation ladder">
        <div className="overflow-x-auto rounded-xl border border-border bg-surface">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-border bg-surface-2 text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Mutation</th>
                <th className="px-4 py-3 font-medium">Multiplier</th>
                <th className="px-4 py-3 font-medium">Coating</th>
                <th className="px-4 py-3 font-medium">Other sources</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {MUTATIONS.map((m) => (
                <tr key={m.name} className="border-b border-border/70 last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{m.name}</td>
                  <td className="px-4 py-3 font-mono text-primary">{m.multiplier ?? "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {m.coating}
                    {m.coatingCost ? ` (${m.coatingCost})` : ""}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{m.howElse ?? "—"}</td>
                  <td className="px-4 py-3 text-xs uppercase tracking-wide text-muted-foreground">
                    {m.sourceStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Cleanser">
        <p className="text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">{MUTATION_META.cleanser.name}</strong> (
          {MUTATION_META.cleanser.cost}) — {MUTATION_META.cleanser.effect}. Status:{" "}
          {MUTATION_META.cleanser.sourceStatus}. Full shop table on{" "}
          <Link href="/gears" className="text-primary hover:underline">
            Gears
          </Link>
          .
        </p>
      </Section>

      <Section title="Which mutation is worth it? (Strategy)">
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>Stamp cheap coatings on mid keepers first; save Galaxy for long-term money ores.</li>
          <li>
            Prefer coatings on ores you will keep across floors — see{" "}
            <Link href="/ores" className="text-primary hover:underline">
              ore index
            </Link>
            .
          </li>
          <li>Buy a cleanser before experimenting on an expensive coating.</li>
          <li>Event mutations can apply free — still verify in your session before spending Cash.</li>
        </ul>
      </Section>

      <NextUsefulStep
        links={[
          { href: "/gears", title: "Gears", blurb: "Filter coatings by wallet." },
          { href: "/ores", title: "Ores", blurb: "Pick keepers before stamping." },
          { href: "/upgrades", title: "Upgrades", blurb: "Don’t coat while the drone is the bottleneck." },
        ]}
      />
    </>
  )
}
