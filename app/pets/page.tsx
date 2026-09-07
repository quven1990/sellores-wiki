import Link from "next/link"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { GAME_SHOTS } from "@/components/game-shot"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { PetRoster } from "@/components/pet-roster"
import { YouTubeLite } from "@/components/youtube-lite"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { PET_BUFF_CATEGORIES, PET_SYSTEM } from "@/lib/pets"
import { PET_ROSTER_META } from "@/lib/pets-roster"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.pets)

export default function PetsPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.pets} />
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Pets" }]} />
      <PageHero
        eyebrow="Lucky Blocks · Fusion"
        title="Sell Ores Pets"
        description={`Searchable roster of ${PET_ROSTER_META.documentedCount} documented pets with tier, money boost, and abilities — plus fusion and spending tips.`}
        imageSrc={GAME_SHOTS.drones.src}
        imageAlt={GAME_SHOTS.drones.alt}
      />

      <Section>
        <Callout>
          Source status: <strong>single-source</strong> community Pet Guide (captured via{" "}
          <a
            href={PET_ROSTER_META.sourceUrl}
            className="underline hover:text-primary"
            target="_blank"
            rel="noreferrer"
          >
            sellores.com/pets
          </a>
          , checked {PET_ROSTER_META.checkedAt}). Owner posts have cited{" "}
          {PET_ROSTER_META.ownerAnnouncedCount} unique pets while this guide lists{" "}
          {PET_ROSTER_META.documentedCount} — we keep that conflict visible. Spot-check in-game before
          spending.
        </Callout>
      </Section>

      <Section title="Documented roster">
        <PetRoster />
      </Section>

      <Section title="How pets work">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>{PET_SYSTEM.howYouGetPets}</p>
          <p>{PET_SYSTEM.fusion}</p>
          <p>{PET_SYSTEM.floorScope}</p>
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
          for timing. We do not publish a “best pet” ranking until the roster conflict and live
          balance are checked.
        </p>
      </Section>

      <YouTubeLite
        page="/pets"
        heading="See the pet/fusion system in-game"
        supporting="Only reviewed embeds appear here."
      />

      <NextUsefulStep
        links={[
          { href: "/beginner", title: "Beginner route", blurb: "When pets fit into the first hour." },
          { href: "/gears", title: "Gears", blurb: "Compare pet buffs vs gem/coating spend." },
          { href: "/codes", title: "Codes", blurb: "Redeem Growth Gem codes before buying blocks." },
        ]}
      />
    </>
  )
}
