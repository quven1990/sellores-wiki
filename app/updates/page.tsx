import Link from "next/link"

import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { UPDATES } from "@/lib/updates"

export const metadata = createPageMetadata(SEO_PAGES.updates)

export default function UpdatesPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.updates} />
      <PageHero
        eyebrow="Newest first"
        title="Sell Ores Updates"
        description="Track patches, code drops, and events with player impact and links to the guides each change affects."
      />

      <Section>
        <Callout>
          After a real content update, re-check{" "}
          <Link href="/codes" className="underline hover:text-primary">
            codes
          </Link>
          . API “updated” timestamps alone are not treated as a content patch.
        </Callout>
      </Section>

      <Section title="Changelog">
        <ul className="space-y-4">
          {UPDATES.map((entry) => (
            <li key={`${entry.date}-${entry.title}`} className="rounded-xl border border-border bg-surface p-5">
              <p className="font-mono text-xs text-primary">{entry.date}</p>
              <h3 className="mt-1 font-display text-xl font-semibold">{entry.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{entry.summary}</p>
              <p className="mt-3 text-sm text-foreground">
                <span className="text-muted-foreground">Player impact: </span>
                {entry.playerImpact}
              </p>
              <p className="mt-3 flex flex-wrap gap-2 text-sm">
                {entry.affected.map((a) => (
                  <Link key={a.href + a.label} href={a.href} className="text-primary hover:underline">
                    {a.label}
                  </Link>
                ))}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                Evidence: {entry.evidence} · Source status: {entry.sourceStatus}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <NextUsefulStep
        links={[
          { href: "/codes", title: "Codes", blurb: "Re-check after every Discord code drop." },
          { href: "/beginner", title: "Beginner", blurb: "See how Floor/Fusion changes early play." },
          { href: "/pets", title: "Pets", blurb: "Fusion notes after Floor 7 coverage." },
        ]}
      />
    </>
  )
}
