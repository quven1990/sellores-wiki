import Link from "next/link"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { YouTubeLite } from "@/components/youtube-lite"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { UPGRADE_SOURCE, UPGRADES } from "@/lib/upgrades"

export const metadata = createPageMetadata(SEO_PAGES.upgrades)

export default function UpgradesPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.upgrades} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { label: "Upgrades" },
        ]}
      />
      <PageHero
        eyebrow={`Source status · ${UPGRADE_SOURCE.status} · ${UPGRADE_SOURCE.asOf}`}
        title="Sell Ores Best Upgrades"
        description="Upgrade the real bottleneck — regen, drill speed, slots, then luck — instead of spreading Cash randomly."
      />

      <Section>
        <Callout>
          Mechanics summarized from{" "}
          <a href={UPGRADE_SOURCE.url} className="text-primary hover:underline" target="_blank" rel="noreferrer">
            selloresguide.wiki/upgrades
          </a>
          . Buy-order notes are <strong>Strategy</strong>, not an ROI calculator.
        </Callout>
      </Section>

      <Section title="Early / mid / late priorities (Strategy)">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              title: "Early",
              body: "Fill slots → Drill Speed + Ore Regen → second roll pedestal. Redeem codes first.",
            },
            {
              title: "Mid",
              body: "Level keeper ores, unlock Floor 2–3 (Boost Pedestal / Furnace), then burst Ore Luck before sessions.",
            },
            {
              title: "Late",
              body: "Furnace upgrades when queued, high coatings on keepers, Floor 7 Fuser only after slots are productive.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-display text-lg font-semibold text-primary">{card.title}</p>
              <p className="mt-2 text-sm text-muted-foreground">{card.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Upgrade board">
        <div className="space-y-3">
          {UPGRADES.map((u) => (
            <article key={u.name} className="rounded-xl border border-border bg-surface px-4 py-4">
              <h3 className="font-display text-lg font-semibold">{u.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">{u.where}</p>
              <p className="mt-2 text-sm text-muted-foreground">{u.does}</p>
              <p className="mt-2 text-sm text-foreground">
                <span className="text-cyan">Strategy · </span>
                {u.whenStrategy}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section title="Related">
        <p className="text-sm text-muted-foreground">
          New players: start with the{" "}
          <Link href="/beginner" className="text-primary hover:underline">
            beginner route
          </Link>
          . Floor costs live on{" "}
          <Link href="/floors" className="text-primary hover:underline">
            Floors
          </Link>
          .
        </p>
      </Section>

      <YouTubeLite
        page="/upgrades"
        heading="Watch an upgrades walkthrough"
        supporting="Prefer video? Only reviewed embeds appear here."
      />

      <NextUsefulStep
        links={[
          { href: "/beginner", title: "Beginner", blurb: "First-session checklist." },
          { href: "/floors", title: "Floors", blurb: "Know unlock costs before expanding." },
          { href: "/gears", title: "Gears", blurb: "Spend Cash on coatings only after drones keep up." },
        ]}
      />
    </>
  )
}
