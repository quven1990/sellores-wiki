import Link from "next/link"

import { CodeTable } from "@/components/code-table"
import { GAME_SHOTS, GameShot } from "@/components/game-shot"
import { JsonLd } from "@/components/json-ld"
import { Callout, PageHero, Section, TextLink } from "@/components/ui-blocks"
import { ACTIVE_CODES } from "@/lib/codes"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { CONTENT_AS_OF, GAME_URL, PLACE_ID } from "@/lib/site"

export const metadata = createPageMetadata(SEO_PAGES.home)

const LOOP = [
  {
    step: "01",
    title: "Roll",
    body: "Roll an ore at the pedestal",
  },
  {
    step: "02",
    title: "Place",
    body: "Place it in an empty tunnel slot",
  },
  {
    step: "03",
    title: "Drill",
    body: "Let yellow drones finish the crate",
    shot: GAME_SHOTS.drones,
  },
  {
    step: "04",
    title: "Sell",
    body: "Hand the crate in at the Sell station",
    shot: GAME_SHOTS.sellStation,
  },
  {
    step: "05",
    title: "Upgrade",
    body: "Fix the bottleneck, chase rarer ores",
    shot: GAME_SHOTS.coalVsCrystalite,
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.home} />
      <PageHero
        eyebrow="Sell Ores · Roblox"
        title="Sell Ores Wiki"
        description="Need codes, pet buffs, or the roll → drill → sell loop? Start here, then jump to Codes, Pets, Gears, or the Beginner Guide."
        imageSrc={GAME_SHOTS.realityOre.src}
        imageAlt={GAME_SHOTS.realityOre.alt}
        actions={
          <>
            <Link
              href="/codes"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground neon-edge sm:w-auto sm:py-2.5"
            >
              Open codes
            </Link>
            <Link
              href="/beginner"
              className="inline-flex w-full items-center justify-center rounded-md border border-cyan/40 bg-surface/80 px-5 py-3 text-sm font-semibold text-foreground backdrop-blur hover:border-cyan sm:w-auto sm:py-2.5"
            >
              Beginner loop
            </Link>
            <a
              href={GAME_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-muted-foreground hover:text-foreground sm:w-auto sm:py-2.5"
            >
              Play on Roblox
            </a>
          </>
        }
      />

      <Section>
        <Callout>
          Confirm Place ID <span className="font-mono">{PLACE_ID}</span> before redeeming codes or
          copying tables. Content as of {CONTENT_AS_OF}. Codes below are media-reported until we
          mark them verified in-game.
        </Callout>
      </Section>

      <Section title="Jump in">
        <div className="divide-y divide-border border-y border-border">
          <TextLink href="/codes" title="Codes" blurb="Copy-ready list with status and redeem steps." />
          <TextLink href="/pets" title="Pets" blurb="Lucky Blocks, buff types, and fusion basics." />
          <TextLink href="/gears" title="Gears" blurb="Growth Gems, coatings, costs, and when to buy." />
          <TextLink href="/beginner" title="Beginner guide" blurb="Roll, place, drill, sell, then upgrade." />
          <TextLink href="/updates" title="Updates" blurb="Dated patch notes and event caveats." />
        </div>
      </Section>

      <Section title="Latest reported codes">
        <CodeTable codes={ACTIVE_CODES.slice(0, 3)} dense />
        <p className="mt-4 text-sm text-muted-foreground">
          <Link href="/codes" className="text-primary hover:underline">
            See full list →
          </Link>
        </p>
      </Section>

      <Section title="Core loop">
        <div className="grid gap-4 lg:grid-cols-12">
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {LOOP.map((item) => (
              <div key={item.step} className="rounded-xl border border-border bg-surface px-4 py-4">
                <span className="font-mono text-xs text-cyan">{item.step}</span>
                <p className="mt-1 font-display text-lg font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-1">
            <GameShot
              {...GAME_SHOTS.drones}
              caption="Drill — yellow Auto Roller drones work Crystalite and higher ores."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <GameShot
                {...GAME_SHOTS.sellStation}
                caption="Sell — take crates to the station and hit (E) SELL."
              />
              <GameShot
                {...GAME_SHOTS.coalVsCrystalite}
                caption="Upgrade — early Coal is tiny money; rare ores change the curve."
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
