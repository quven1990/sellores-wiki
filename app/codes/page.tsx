import Link from "next/link"

import { Breadcrumbs } from "@/components/breadcrumbs"
import { CodeTable } from "@/components/code-table"
import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { YouTubeLite } from "@/components/youtube-lite"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { ACTIVE_CODES, CONFLICTED_CODES, countByStatus } from "@/lib/codes"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { CONTENT_AS_OF, CONTENT_MONTH, GAME_URL, PLACE_ID } from "@/lib/site"

export const metadata = createPageMetadata(SEO_PAGES.codes)

export default function CodesPage() {
  const activeCount = countByStatus(ACTIVE_CODES, "cross-source") + countByStatus(ACTIVE_CODES, "in-game")
  const conflictedCount =
    countByStatus(CONFLICTED_CODES, "conflicted") + countByStatus(CONFLICTED_CODES, "needs-check")

  return (
    <>
      <JsonLd page={SEO_PAGES.codes} />
      <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Codes" }]} />
      <PageHero
        eyebrow={CONTENT_MONTH}
        title="Sell Ores Codes"
        description="Copy active codes first. Status badges explain how confident we are — Cross-source is not the same as in-game checked."
        imageSrc="/brand/game/reality-ore-panel.png"
        imageAlt="Sell Ores in-game sell station and ore panel"
      />

      <Section>
        <p className="text-sm text-muted-foreground">
          Updated {CONTENT_AS_OF} · Active consensus: {activeCount} · Conflicted / needs-check:{" "}
          {conflictedCount}
        </p>
        <div className="mt-4">
          <Callout>
            “Cross-source” means multiple recent public sources agree. “In-game checked” is used only
            after a direct redeem test on Place ID <span className="font-mono">{PLACE_ID}</span>.
          </Callout>
        </div>
      </Section>

      <Section title="Active codes">
        <CodeTable codes={ACTIVE_CODES} enableFilter enableRedeemed />
      </Section>

      <Section title="How to redeem">
        <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted-foreground marker:text-cyan sm:text-base">
          <li>
            Join{" "}
            <a href={GAME_URL} className="text-primary hover:underline" target="_blank" rel="noreferrer">
              Sell Ores
            </a>{" "}
            and confirm Place ID <span className="font-mono text-foreground">{PLACE_ID}</span>.
          </li>
          <li>Open the Settings gear (top right).</li>
          <li>Find Codes → paste exactly → Redeem.</li>
          <li>If you see Invalid / Already Redeemed, skip — do not spam retries.</li>
        </ol>
      </Section>

      <Section title="Conflicted / needs check">
        <p className="mb-4 text-sm text-muted-foreground">
          These stay out of Active until sources agree or we record an in-game check.
        </p>
        <CodeTable codes={CONFLICTED_CODES} enableFilter enableRedeemed />
      </Section>

      <Section title="FAQ">
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-lg font-semibold">What are the newest Sell Ores codes?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Start with the Active table above. Newest consensus additions as of {CONTENT_AS_OF}{" "}
              include ADMINMUTATION and FRAGMENTS (Cross-source).
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Why isn’t my Sell Ores code working?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Typo, expired, already redeemed, conflicted listing, or wrong Place ID.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Where is the code box?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Settings (top right) → Codes → paste → Redeem.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Where do new codes drop?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Official Discord codes channel first, then media mirrors. See the{" "}
              <Link href="/updates" className="text-primary hover:underline">
                updates log
              </Link>
              .
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Are codes case-sensitive?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Paste exactly as listed. If the game rejects it, try the same characters without
              extra spaces.
            </p>
          </div>
        </div>
      </Section>

      <YouTubeLite
        page="/codes"
        heading="Redeem walkthrough"
        supporting="Optional video below the code list — only appears after manual review."
      />

      <NextUsefulStep
        links={[
          { href: "/beginner", title: "Beginner route", blurb: "Spend code rewards on the real bottleneck." },
          { href: "/gears", title: "Gears", blurb: "Growth Gems and coatings after base income works." },
          { href: "/updates", title: "Updates", blurb: "See what changed with recent code drops." },
        ]}
      />
    </>
  )
}
