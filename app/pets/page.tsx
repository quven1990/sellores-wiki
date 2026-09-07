import Link from "next/link"

import { GAME_SHOTS } from "@/components/game-shot"
import { JsonLd } from "@/components/json-ld"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { PET_BUFF_CATEGORIES, PET_NOTES } from "@/lib/pets"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.pets)

export default function PetsPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.pets} />
      <PageHero
        eyebrow="Lucky Blocks"
        title="Sell Ores Pets"
        description="Pets come from Pet Shop Lucky Blocks near the market. Buffs stack into your drill/roll economy — fusion matters once you start pulling duplicates."
        imageSrc={GAME_SHOTS.drones.src}
        imageAlt={GAME_SHOTS.drones.alt}
      />

      <Section>
        <Callout>
          Named pet + drop-rate tables are intentionally skeleton until an in-game pass fills them.
          Do not treat media screenshots as final odds.
        </Callout>
      </Section>

      <Section title="Buff categories">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PET_BUFF_CATEGORIES.map((cat) => (
            <article key={cat.id} className="rounded-xl border border-border bg-surface p-5">
              <h3 className="font-display text-lg font-semibold text-primary">{cat.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cat.summary}</p>
              <p className="mt-3 text-xs uppercase tracking-wide text-accent">Verified in-game: no</p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="What we know so far">
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          {PET_NOTES.map((note) => (
            <li key={note} className="border-l-2 border-primary/50 pl-4">
              {note}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted-foreground">
          Early cash is usually better on upgrades and slots than premium Lucky Blocks. See the{" "}
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
    </>
  )
}
