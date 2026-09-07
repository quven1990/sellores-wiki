import { JsonLd } from "@/components/json-ld"
import { PageHero, Section } from "@/components/ui-blocks"
import { createPageMetadata, SEO_PAGES } from "@/lib/seo"
import { CONTENT_AS_OF, PRIVACY_EMAIL, SITE_NAME } from "@/lib/site"

export const metadata = createPageMetadata(SEO_PAGES.privacy)

export default function PrivacyPage() {
  return (
    <>
      <JsonLd page={SEO_PAGES.privacy} />
      <PageHero
        title="Privacy Policy"
        description={`How ${SITE_NAME} handles visitor information.`}
      />
      <Section>
        <div className="prose-mute space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>Last updated: {CONTENT_AS_OF}.</p>
          <p>
            This is an unofficial fan site. We do not require accounts and we do not sell personal
            data.
          </p>
          <p>
            The current static build does not set analytics or advertising cookies, and does not
            collect Roblox account data. Hosting providers may process standard server logs (IP,
            user agent, request path) to operate the site.
          </p>
          <p>
            If privacy-friendly analytics are added later, this page will be updated before they
            go live.
          </p>
          <p>
            Privacy questions:{" "}
            <a className="text-primary underline-offset-2 hover:underline" href={`mailto:${PRIVACY_EMAIL}`}>
              {PRIVACY_EMAIL}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  )
}
