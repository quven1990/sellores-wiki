import Link from "next/link"

import { GAME_SHOTS, GameShot } from "@/components/game-shot"
import { JsonLd } from "@/components/json-ld"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { GEARS } from "@/lib/gears"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.gears)

const KIND_LABEL = {
  growth_gem: "Growth Gem",
  coating: "Coating",
  cleanser: "Cleanser",
} as const

export default function GearsPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.gears} />
      <PageHero
        eyebrow="Gear Shop"
        title="Sell Ores Gears"
        description="Gears are single-use. Growth Gems burst regen for a timer; Coatings permanently mutate one ore’s value until cleansed."
        imageSrc={GAME_SHOTS.coalVsCrystalite.src}
        imageAlt={GAME_SHOTS.coalVsCrystalite.alt}
      />

      <Section>
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <Callout>
            Prices and multipliers below are aggregated from public guides. Spot-check 2–3 rows in-game
            before treating the table as final. Mutations also appear on the{" "}
            <Link href="/pets" className="underline hover:text-primary">
              pets
            </Link>{" "}
            page as buff categories.
          </Callout>
          <GameShot
            {...GAME_SHOTS.drones}
            caption="Coatings and gems matter more once drones are already on high-tier ores."
          />
        </div>
      </Section>

      <Section title="Full list">
        <ul className="space-y-3 md:hidden">
          {GEARS.map((gear) => (
            <li key={gear.name} className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-base font-semibold text-foreground">{gear.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                    {KIND_LABEL[gear.kind]}
                  </p>
                </div>
                <p className="shrink-0 font-mono text-sm text-primary">{gear.cost}</p>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{gear.effect}</p>
              <p className="mt-2 text-xs uppercase tracking-wide text-accent">
                Verified: {gear.verifiedInGame ? "yes" : "no"}
              </p>
            </li>
          ))}
        </ul>

        <div className="hidden overflow-x-auto rounded-xl border border-border bg-surface md:block">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-border bg-surface-2 text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Gear</th>
                <th className="px-4 py-3 font-medium">Type</th>
                <th className="px-4 py-3 font-medium">Cost</th>
                <th className="px-4 py-3 font-medium">Effect</th>
                <th className="px-4 py-3 font-medium">Verified</th>
              </tr>
            </thead>
            <tbody>
              {GEARS.map((gear) => (
                <tr key={gear.name} className="border-b border-border/70 last:border-0">
                  <td className="px-4 py-3 font-medium text-foreground">{gear.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{KIND_LABEL[gear.kind]}</td>
                  <td className="px-4 py-3 font-mono text-primary">{gear.cost}</td>
                  <td className="px-4 py-3 text-muted-foreground">{gear.effect}</td>
                  <td className="px-4 py-3 text-xs uppercase tracking-wide text-accent">
                    {gear.verifiedInGame ? "yes" : "no"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="When to buy">
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">Growth Gems</strong> — fire when slots are filled and
            drones are already working. Empty tunnels waste the timer.
          </li>
          <li>
            <strong className="text-foreground">Coatings</strong> — save high multipliers for high-value
            ores; cleanse before re-coating.
          </li>
          <li>
            <strong className="text-foreground">Ore Cleanser</strong> — use when a weak mutation is
            blocking a better coating.
          </li>
        </ul>
      </Section>
    </>
  )
}
