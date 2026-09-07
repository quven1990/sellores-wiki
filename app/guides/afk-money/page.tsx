import Link from "next/link"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"

export const metadata = createPageMetadata(SEO_PAGES.afkMoney)

export default function AfkMoneyPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.afkMoney} />
      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { label: "AFK & Money" },
        ]}
      />
      <PageHero
        eyebrow="Strategy guide · no invented rates"
        title="Sell Ores AFK & Money"
        description="Set up drones and slots before you leave. This page does not invent offline $/hour — only setup habits and bottlenecks."
      />

      <Section>
        <Callout>
          Roblox listing and community guides describe AFK-friendly / offline earning behavior, but exact
          offline rates are patch-sensitive. We omit dollar formulas until first-party numbers exist.
        </Callout>
      </Section>

      <Section title="What continues while idle">
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>Placed ores with working drones keep producing crates while you are away (per community + listing claims).</li>
          <li>
            Boost Pedestal money boost is described as online-only on the floors guide — don’t rely on it for AFK.
          </li>
          <li>Growth Gem timers still expire — re-apply when you return (see Gears).</li>
        </ul>
      </Section>

      <Section title="AFK setup checklist">
        <ol className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>1. Fill every open slot with your best affordable keepers.</li>
          <li>2. Max Drill Speed + Regen on active floors so drones don’t idle.</li>
          <li>3. Clear furnace queues if Floor 3+ is unlocked.</li>
          <li>
            4. Hold long Time Skips from{" "}
            <Link href="/codes" className="text-primary hover:underline">
              codes
            </Link>{" "}
            until slots are productive.
          </li>
          <li>
            5. Optional: stamp a cheap coating on keepers via{" "}
            <Link href="/mutations" className="text-primary hover:underline">
              mutations
            </Link>
            .
          </li>
        </ol>
      </Section>

      <Section title="Money bottlenecks (Strategy)">
        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>Empty slots → buy slots / floors, not luck.</li>
          <li>Slow drones → Drill Speed before coatings.</li>
          <li>Weak ores → replace commons; level keepers (see Upgrades).</li>
          <li>Wrong mutation → use Ore Cleanser, then re-coat.</li>
        </ul>
      </Section>

      <NextUsefulStep
        links={[
          { href: "/upgrades", title: "Upgrades", blurb: "Pick the slowest system to fix." },
          { href: "/floors", title: "Floors", blurb: "Unlock order and Fuser timing." },
          { href: "/gears", title: "Gears", blurb: "Gem timers and coating costs." },
        ]}
      />
    </>
  )
}
