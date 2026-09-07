import Link from "next/link"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { OreIndex } from "@/components/ore-index"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { ORE_RARITY_BANDS, ORE_SOURCE, ORES } from "@/lib/ores"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.ores)

export default function OresPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.ores} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { label: "Ores" },
        ]}
      />
      <PageHero
        eyebrow={`Source status · ${ORE_SOURCE.status} · ${ORE_SOURCE.asOf}`}
        title="Sell Ores Ore Values"
        description="Search documented ores by rarity with roll odds, buy prices, and cash figures only where a public guide recorded them. Blank cells stay blank."
      />

      <Section>
        <Callout>
          {ORES.length} ores listed from a single community index (
          <a href={ORE_SOURCE.url} className="text-primary hover:underline" target="_blank" rel="noreferrer">
            selloresguide.wiki/ores
          </a>
          ). Not an official complete catalog — missing odds/prices are shown as —. Strategy tip: fill early
          slots with affordable Uncommon keepers before chasing high bands.
        </Callout>
      </Section>

      <Section title="Ore index">
        <OreIndex />
      </Section>

      <Section title="Rarity bands">
        <ol className="space-y-3">
          {ORE_RARITY_BANDS.map((band) => (
            <li key={band.rarity} className="rounded-xl border border-border bg-surface px-4 py-3">
              <p className="font-display text-base font-semibold">
                <span className="font-mono text-xs text-cyan">#{band.rank}</span> {band.rarity}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{band.summary}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Sell vs keep (Strategy)">
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">Keep</strong> ores that beat your current floor average —
            especially once leveled or mutated.
          </li>
          <li>
            <strong className="text-foreground">Sell / replace</strong> commons once Uncommons fill your
            tunnels.
          </li>
          <li>
            Pair with{" "}
            <Link href="/mutations" className="text-primary hover:underline">
              mutations
            </Link>{" "}
            and{" "}
            <Link href="/gears" className="text-primary hover:underline">
              coatings
            </Link>{" "}
            only on keepers — cleanser first if you stamp the wrong ore.
          </li>
        </ul>
      </Section>

      <NextUsefulStep
        links={[
          { href: "/mutations", title: "Mutations", blurb: "See the ×1.5–×5 coating ladder." },
          { href: "/gears", title: "Gears", blurb: "Prices for coatings and Growth Gems." },
          { href: "/upgrades", title: "Upgrades", blurb: "What to buy when cash is tight." },
          { href: "/floors", title: "Floors", blurb: "When the next floor unlocks matter." },
        ]}
      />
    </>
  )
}
