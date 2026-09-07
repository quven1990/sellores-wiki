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
            We use Google Analytics 4 (measurement ID <span className="font-mono">G-GGQY9W5MCT</span>)
            to understand aggregate traffic and which pages are useful. Google may set cookies or use
            similar identifiers and process data such as page views, approximate location, device/browser
            type, and referral source under{" "}
            <a
              className="text-primary underline-offset-2 hover:underline"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              Google’s Privacy Policy
            </a>
            .
          </p>
          <p>
            We do not require accounts, we do not sell personal data, and we do not collect Roblox
            account credentials. Hosting providers may also process standard server logs (IP, user
            agent, request path) to operate the site.
          </p>
          <p>
            You can limit analytics via browser controls, extensions, or Google’s{" "}
            <a
              className="text-primary underline-offset-2 hover:underline"
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noreferrer"
            >
              Analytics opt-out
            </a>{" "}
            tools where available.
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
