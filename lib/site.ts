export const SITE_URL = "https://sellores.site"

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
  if (fromEnv) return fromEnv
  if (process.env.NODE_ENV === "production") return SITE_URL
  return "http://localhost:3000"
}

export const SITE_NAME = "Sell Ores Wiki"
export const SITE_TAGLINE = "Codes, pets, gears & the roll → drill → sell loop"
export const PLACE_ID = "122572082932179"
export const UNIVERSE_ID = "10336278580"
export const GAME_URL = `https://www.roblox.com/games/${PLACE_ID}/Sell-Ores`
export const CREATOR_GROUP = "The Ore Drillers"
export const CONTENT_AS_OF = "2026-09-07"
export const CONTENT_MONTH = "September 2026"
export const CONTACT_EMAIL = "contact@sellores.site"
export const PRIVACY_EMAIL = "privacy@sellores.site"
/** Google Analytics 4 measurement ID */
export const GA_MEASUREMENT_ID = "G-GGQY9W5MCT"
/** Microsoft Clarity project ID */
export const CLARITY_PROJECT_ID = "yenkx7w44e"
/** Plausible (privacy-friendly page analytics) */
export const PLAUSIBLE_DOMAIN = "sellores.site"
export const PLAUSIBLE_SCRIPT_SRC = "https://plausible.shipsolo.io/js/script.js"
