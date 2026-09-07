import { JsonLd } from "@/components/json-ld"
import { PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { CONTACT_EMAIL, CREATOR_GROUP, SITE_NAME } from "@/lib/site"

export const metadata = createPageMetadata(SEO_PAGES.terms)

export default function TermsPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.terms} />
      <PageHero
        title="Terms of Use"
        description={`Ground rules for using ${SITE_NAME}.`}
      />
      <Section>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
            {SITE_NAME} is an unofficial fan guide. It is not affiliated with, endorsed by, or
            sponsored by Roblox Corporation or {CREATOR_GROUP}.
          </p>
          <p>
            Game mechanics, rewards, and codes change without notice. Verify important rewards
            in-game. We are not responsible for lost progress, expired codes, or third-party claims.
          </p>
          <p>
            Roblox® is a registered trademark of Roblox Corporation. All game assets and names
            belong to their respective owners. Screenshots on this site are for fan-guide
            reference only.
          </p>
          <p>
            Questions:{" "}
            <a className="text-primary underline-offset-2 hover:underline" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  )
}
