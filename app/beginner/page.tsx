import Link from "next/link"

import { GAME_SHOTS, GameShot } from "@/components/game-shot"
import { JsonLd } from "@/components/json-ld"
import { PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.beginner)

const STEPS = [
  {
    title: "Roll",
    body: "Use the Roll Ores pedestal or lever at your base. An ore in your hand does not earn yet.",
  },
  {
    title: "Place",
    body: "Put the ore into an empty tunnel / compartment. Placement starts the automated work.",
  },
  {
    title: "Drill",
    body: "Let the yellow drilling drones finish. They produce a box or crate when the cycle completes.",
    shot: GAME_SHOTS.drones,
    caption: "In-game: Auto Roller drones targeting Crystalite.",
  },
  {
    title: "Sell",
    body: "Carry the crate to the Sell Ores station and press the sell prompt for cash.",
    shot: GAME_SHOTS.sellStation,
    caption: "In-game: sell station with (E) SELL.",
  },
  {
    title: "Upgrade the bottleneck",
    body: "If rolls are slow, raise regen. If drones lag, raise drill speed. If idle, buy slots. Then chase rarer ores — Coal and Crystalite are not the same economy.",
    shot: GAME_SHOTS.coalVsCrystalite,
    caption: "In-game: Coal vs Crystalite income gap.",
  },
]

const PRIORITIES = [
  "Fill usable slots",
  "Keep drones busy",
  "Fix the slowest upgrade board step",
  "Redeem early codes for cash / skips / small gems",
  "Delay premium Lucky Blocks until income is stable",
]

export default function BeginnerPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.beginner} />
      <PageHero
        eyebrow="How to play"
        title="Sell Ores Beginner Guide"
        description="Sell Ores is an automated ore base, not a pickaxe grinder. If an ore stays in your hand, nothing earns."
        imageSrc={GAME_SHOTS.sellStation.src}
        imageAlt={GAME_SHOTS.sellStation.alt}
      />

      <Section title="Core loop">
        <ol className="space-y-8">
          {STEPS.map((step, i) => (
            <li key={step.title} className="grid gap-4 lg:grid-cols-2 lg:items-center">
              <div className="rounded-xl border border-border bg-surface p-5">
                <p className="font-mono text-xs text-cyan">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
              {step.shot ? (
                <GameShot {...step.shot} caption={step.caption} />
              ) : (
                <div className="hidden rounded-xl border border-dashed border-border bg-muted/40 p-5 text-sm text-muted-foreground lg:flex lg:items-center">
                  Roll and place happen at your base pedestals — keep ores in slots, not in your hand.
                </div>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section title="Beginner priorities">
        <ol className="space-y-2 text-sm text-muted-foreground">
          {PRIORITIES.map((item, i) => (
            <li key={item} className="flex gap-3">
              <span className="font-mono text-primary">{i + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-muted-foreground">
          Next:{" "}
          <Link href="/codes" className="text-primary hover:underline">
            codes
          </Link>
          ,{" "}
          <Link href="/gears" className="text-primary hover:underline">
            gears
          </Link>
          ,{" "}
          <Link href="/pets" className="text-primary hover:underline">
            pets
          </Link>
          .
        </p>
      </Section>
    </>
  )
}
