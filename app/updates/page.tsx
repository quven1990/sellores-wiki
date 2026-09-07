import Link from "next/link"

import { JsonLd } from "@/components/json-ld"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { UPDATES } from "@/lib/updates"

export const metadata = createPageMetadata(SEO_PAGES.updates)

export default function UpdatesPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.updates} />
      <PageHero
        eyebrow="Patch log"
        title="Sell Ores Updates"
        description="We only list changes we can point to (video, Discord, or in-game). Timestamped API “updated” alone is not a content patch."
      />

      <Section>
        <Callout>
          After a real content update, re-check{" "}
          <Link href="/codes" className="underline hover:text-primary">
            codes
          </Link>{" "}
          and entity tables. Event days can spike CCU without being a healthy growth signal.
        </Callout>
      </Section>

      <Section title="Known entries">
        <ul className="space-y-4">
          {UPDATES.map((entry) => (
            <li key={`${entry.date}-${entry.title}`} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-mono text-xs text-primary">{entry.date}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{entry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.summary}</p>
              <p className="mt-3 text-xs text-muted-foreground">Evidence: {entry.evidence}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
