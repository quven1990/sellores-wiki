import Link from "next/link"

import { CodeTable } from "@/components/code-table"
import { JsonLd } from "@/components/json-ld"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { ACTIVE_CODES, UNCONFIRMED_CODES } from "@/lib/codes"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { CONTENT_MONTH, GAME_URL, PLACE_ID } from "@/lib/site"

export const metadata = createPageMetadata(SEO_PAGES.codes)

export default function CodesPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.codes} />
      <PageHero
        eyebrow={CONTENT_MONTH}
        title="Sell Ores Codes"
        description="New Sell Ores codes usually drop on Discord or with updates. Every code below shows a reported reward and a verification status — redeem in Settings to confirm before you trust it."
        imageSrc="/brand/game/reality-ore-panel.png"
        imageAlt="Sell Ores Reality Ore panel with SELL button"
      />

      <Section>
        <Callout>
          Status is <strong>Reported</strong> until an in-game redeem confirms. Wrong Place ID =
          wrong game. Use <span className="font-mono">{PLACE_ID}</span>.
        </Callout>
      </Section>

      <Section title="Active (reported)">
        <CodeTable codes={ACTIVE_CODES} />
      </Section>

      <Section title="How to redeem">
        <ol className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <li>
            1. Join{" "}
            <a href={GAME_URL} className="text-primary hover:underline" target="_blank" rel="noreferrer">
              Sell Ores
            </a>{" "}
            and confirm Place ID <span className="font-mono text-foreground">{PLACE_ID}</span>.
          </li>
          <li>2. Open the Settings gear (top right).</li>
          <li>3. Find Codes → paste exactly → Redeem.</li>
          <li>4. If you see Invalid / Already Redeemed, skip — do not spam retries.</li>
        </ol>
      </Section>

      <Section title="Unconfirmed / conflicted">
        <p className="mb-4 text-sm text-muted-foreground">
          Older media lists mentioned these codes with conflicting rewards. They stay out of the
          Active table until verified.
        </p>
        <CodeTable codes={UNCONFIRMED_CODES} />
      </Section>

      <Section title="FAQ">
        <div className="space-y-6">
          <div>
            <h3 className="font-display text-lg font-semibold">Why isn’t my code working?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Typo, expired, already redeemed, or you’re on a different Place ID.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold">Where do new codes appear?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Official Discord codes channel first. This page updates after we re-check in-game. See
              also the{" "}
              <Link href="/updates" className="text-primary hover:underline">
                updates log
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
