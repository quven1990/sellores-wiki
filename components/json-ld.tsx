import { buildPageStructuredData } from "@/lib/structured-data"
import type { SeoPage } from "@/lib/seo"

export function JsonLd({ page }: { page: SeoPage }) {
  const payload = buildPageStructuredData(page)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  )
}
