import Link from "next/link"

import { GAME_SHOTS } from "@/components/game-shot"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { PET_BUFF_CATEGORIES, PET_SYSTEM } from "@/lib/pets"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.pets)

export default function PetsPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.pets} />
      <PageHero
        eyebrow="Lucky Blocks · Fusion"
        title="Sell Ores Pets"
        description="Understand how pets fit the economy: Lucky Blocks, buff types, fusion, and when to spend. Named roster tables stay incomplete until sourced."
        imageSrc={GAME_SHOTS.drones.src}
        imageAlt={GAME_SHOTS.drones.alt}
      />

      <Section>
        <Callout>{PET_SYSTEM.dataGap}</Callout>
      </Section>

      <Section title="How pets work">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>{PET_SYSTEM.howYouGetPets}</p>
          <p>{PET_SYSTEM.fusion}</p>
        </div>
      </Section>

      <Section title="Buff categories">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PET_BUFF_CATEGORIES.map((cat) => (
            <article key={cat.id} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-display text-lg font-semibold text-primary">{cat.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.summary}</p>
              <p className="mt-3 text-xs leading-relaxed text-accent">{cat.strategyTip}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Early spending tip">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Strategy: early cash is usually better on upgrades and slots than premium Lucky Blocks.
          See the{" "}
          <Link href="/beginner" className="text-primary hover:underline">
            beginner guide
          </Link>{" "}
          and{" "}
          <Link href="/gears" className="text-primary hover:underline">
            gears
          </Link>{" "}
          for timing.
        </p>
      </Section>

      <NextUsefulStep
        links={[
          { href: "/beginner", title: "Beginner route", blurb: "When pets fit into the first hour." },
          { href: "/gears", title: "Gears", blurb: "Compare gems/coatings vs pet spending." },
          { href: "/codes", title: "Codes", blurb: "Redeem Growth Gem codes before buying blocks." },
        ]}
      />
    </>
  )
}
