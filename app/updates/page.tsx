import { JsonLd } from "@/components/json-ld"
import { NextUsefulStep } from "@/components/next-useful-step"
import { UpdatesList } from "@/components/updates-list"
import { Callout, PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { UPDATES } from "@/lib/updates"
import Link from "next/link"

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
        <UpdatesList updates={UPDATES} />
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
