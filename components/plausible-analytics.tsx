import Script from "next/script"

import { PLAUSIBLE_DOMAIN, PLAUSIBLE_SCRIPT_SRC } from "@/lib/site"

export function PlausibleAnalytics() {
  if (!PLAUSIBLE_DOMAIN || !PLAUSIBLE_SCRIPT_SRC) return null

  return (
    <Script
      defer
      data-domain={PLAUSIBLE_DOMAIN}
      src={PLAUSIBLE_SCRIPT_SRC}
      strategy="afterInteractive"
    />
  )
}
