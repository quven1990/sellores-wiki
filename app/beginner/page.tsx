import Link from "next/link"

import { BeginnerChecklist } from "@/components/beginner-checklist"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { GAME_SHOTS, GameShot } from "@/components/game-shot"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { YouTubeLite } from "@/components/youtube-lite"
import { PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.beginner)

const LOOP = [
  {
    title: "Roll",
    body: "Use the Roll Ores pedestal or lever. An ore in your hand does not earn yet.",
  },
  {
    title: "Place",
    body: "Put the ore into an empty tunnel / compartment so drones can work it.",
  },
  {
    title: "Drill",
    body: "Let yellow drilling drones finish. They produce a crate when the cycle completes.",
    shot: GAME_SHOTS.drones,
    caption: "Auto Roller drones targeting Crystalite.",
  },
  {
    title: "Sell",
    body: "Carry the crate to the Sell station and use the sell prompt for cash.",
    shot: GAME_SHOTS.sellStation,
    caption: "Sell station with (E) SELL.",
  },
]

export default function BeginnerPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.beginner} />
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Beginner" }]} />
      <PageHero
        eyebrow="First session"
        title="Sell Ores Beginner Guide"
        description="Redeem codes, fill your base, keep drones working, choose the next upgrade, and avoid early traps."
        imageSrc={GAME_SHOTS.sellStation.src}
        imageAlt={GAME_SHOTS.sellStation.alt}
      />

      <Section title="First 5 minutes">
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-cyan">
          <li>Confirm you are on the correct Sell Ores Place ID.</li>
          <li>
            Redeem codes first — see the{" "}
            <Link href="/codes" className="text-primary hover:underline">
              codes list
            </Link>
            .
          </li>
          <li>Roll an ore, place it in a slot, and wait for drones (don’t pocket the ore).</li>
          <li>Sell the first crate so you understand the cash loop.</li>
        </ol>
      </Section>

      <Section title="Core loop">
        <ol className="space-y-8">
          {LOOP.map((step, i) => (
            <li key={step.title} className="grid gap-4 lg:grid-cols-2 lg:items-center">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="font-mono text-xs text-cyan">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
              {step.shot ? <GameShot {...step.shot} caption={step.caption} /> : null}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Fill slots before expensive boosts">
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>Empty tunnels earn nothing — fill Floor 1 before chasing rare rolls or Lucky Blocks.</li>
          <li>
            Prefer affordable Uncommon keepers (see{" "}
            <Link href="/ores" className="text-primary hover:underline">
              ore index
            </Link>
            ) over pocketing every roll.
          </li>
          <li>
            Only after slots stay busy should you spend on coatings, high pets, or the next floor (
            <Link href="/upgrades" className="text-primary hover:underline">
              upgrades
            </Link>
            ).
          </li>
        </ul>
      </Section>

      <Section title="Fix the bottleneck">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">Waiting on rolls →</strong> raise regen / roll pace.
            </li>
            <li>
              <strong className="text-foreground">Drones too slow →</strong> raise drill speed.
            </li>
            <li>
              <strong className="text-foreground">Idle capacity →</strong> buy slots / floors when
              every tunnel is already filled.
            </li>
            <li>
              <strong className="text-foreground">Strategy:</strong> upgrade the slowest step, then
              chase rarer ores. Coal and Crystalite are not the same economy.
            </li>
          </ul>
          <GameShot
            {...GAME_SHOTS.coalVsCrystalite}
            caption="Coal vs Crystalite income gap."
          />
        </div>
      </Section>

      <Section title="What to avoid early">
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li>• Holding ores in hand instead of placing them</li>
          <li>• Buying premium Lucky Blocks before slots stay full</li>
          <li>• Spreading cash across every upgrade board at once</li>
          <li>• Ignoring code rewards that give time skips / small gems</li>
        </ul>
      </Section>

      <Section title="First 30-minute checklist">
        <BeginnerChecklist />
      </Section>

      <YouTubeLite
        page="/beginner"
        heading="Watch a Sell Ores beginner walkthrough"
        supporting="Prefer video? This walkthrough complements the written steps above."
      />

      <NextUsefulStep
        links={[
          { href: "/codes", title: "Codes", blurb: "Redeem skips and gems before the grind." },
          { href: "/upgrades", title: "Upgrades", blurb: "Bottleneck buy order after the first hour." },
          { href: "/gears", title: "Gears", blurb: "See Growth Gem / coating timing." },
          { href: "/guides/afk-money", title: "AFK & Money", blurb: "Set up productive slots before leaving." },
        ]}
      />
    </>
  )
}
