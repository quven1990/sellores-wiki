import Link from "next/link"

import { GAME_SHOTS, GameShot } from "@/components/game-shot"
import { GearToolkit } from "@/components/gear-toolkit"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { GEARS } from "@/lib/gears"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.gears)

export default function GearsPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.gears} />
      <PageHero
        eyebrow="Gear Shop"
        title="Sell Ores Gears: Prices, Effects & Buy Order"
        description="Compare Growth Gems, Coatings and Ore Cleanser by price and effect. Filter by type, sort by cost, and optionally highlight what your wallet can buy."
        imageSrc={GAME_SHOTS.coalVsCrystalite.src}
        imageAlt={GAME_SHOTS.coalVsCrystalite.alt}
      />

      <Section>
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <Callout>
            Prices and multipliers below are aggregated from public guides. Spot-check 2–3 rows
            in-game before treating the table as final. Wallet “Next target” is only the next higher
            sourced price — not an invented meta ranking.
          </Callout>
          <GameShot
            {...GAME_SHOTS.drones}
            caption="Coatings and gems matter more once drones are already on high-tier ores."
          />
        </div>
      </Section>

      <Section title="Full list">
        <GearToolkit gears={GEARS} />
      </Section>

      <Section title="When to buy">
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">Growth Gems</strong> — fire when slots are filled and
            drones are already working. Empty tunnels waste the timer.
          </li>
          <li>
            <strong className="text-foreground">Coatings</strong> — save high multipliers for
            high-value ores; cleanse before re-coating.
          </li>
          <li>
            <strong className="text-foreground">Ore Cleanser</strong> — use when a weak mutation is
            blocking a better coating.
          </li>
        </ul>
      </Section>

      <Section title="Buy-order strategy">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>
            <strong className="text-foreground">Best early buy (strategy):</strong> cheapest Growth
            Gem that removes a real idle timer once slots stay filled.
          </li>
          <li>
            <strong className="text-foreground">Mid-game (strategy):</strong> coatings on higher-tier
            ores after drones stay busy.
          </li>
          <li>
            <strong className="text-foreground">When to cleanse (strategy):</strong> only if a weak
            coating is blocking a clearly better one.
          </li>
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Related:{" "}
          <Link href="/beginner" className="text-primary hover:underline">
            beginner bottleneck guide
          </Link>
          .
        </p>
      </Section>

      <NextUsefulStep
        links={[
          { href: "/beginner", title: "Beginner route", blurb: "Confirm the bottleneck before spending." },
          { href: "/codes", title: "Codes", blurb: "Redeem gem / skip codes first." },
          { href: "/pets", title: "Pets", blurb: "Compare pet buffs vs gear spend." },
        ]}
      />
    </>
  )
}
