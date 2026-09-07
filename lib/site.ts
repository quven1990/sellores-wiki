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
