import Link from "next/link"

import { GAME_SHOTS, GameShot } from "@/components/game-shot"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
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

const CHECKLIST_30 = [
  "Redeem Cross-source codes (Settings → Codes)",
  "Fill every usable slot before buying luxury boosts",
  "Keep drones busy — idle drones mean wasted rolls",
  "Spend on the slowest step: regen, drill speed, or slots",
  "Skip premium Lucky Blocks until income feels stable",
]

export default function BeginnerPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.beginner} />
      <PageHero
        eyebrow="First session"
        title="Sell Ores Beginner Guide"
        description="Redeem codes, fill your base, keep drones working, choose the next upgrade, and avoid early traps."
        imageSrc={GAME_SHOTS.sellStation.src}
        imageAlt={GAME_SHOTS.sellStation.alt}
      />

      <Section title="First 5 minutes">
        <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li>1. Confirm you are on the correct Sell Ores Place ID.</li>
          <li>
            2. Redeem codes first — see the{" "}
            <Link href="/codes" className="text-primary hover:underline">
              codes list
            </Link>
            .
          </li>
          <li>3. Roll an ore, place it in a slot, and wait for drones (don’t pocket the ore).</li>
          <li>4. Sell the first crate so you understand the cash loop.</li>
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
        <Callout>
          Checklist tip: tick these mentally or in a notes app. A localStorage checklist tool can
          come later — the order below is the useful part.
        </Callout>
        <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
          {CHECKLIST_30.map((item, i) => (
            <li key={item} className="flex gap-3">
              <span className="font-mono text-primary">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </Section>

      <NextUsefulStep
        links={[
          { href: "/codes", title: "Codes", blurb: "Redeem skips and gems before the grind." },
          { href: "/gears", title: "Gears", blurb: "See Growth Gem / coating timing." },
          { href: "/pets", title: "Pets", blurb: "Learn buff types before spending on Lucky Blocks." },
        ]}
      />
    </>
  )
}
