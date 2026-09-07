import { ACTIVE_CODES } from "@/lib/codes"
import type { SeoPage } from "@/lib/seo"
import { SEO_PAGES } from "@/lib/seo"
import {
  CONTENT_AS_OF,
  CREATOR_GROUP,
  GAME_URL,
  getSiteUrl,
  PLACE_ID,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/lib/site"

function pageUrl(path: string) {
  const base = getSiteUrl()
  return path === "/" ? base : `${base}${path}`
}

function crumbsFor(page: SeoPage) {
  const items = [{ name: "Home", path: "/" }]
  if (page.path !== "/") {
    items.push({ name: page.title.split(" - ")[0] ?? page.title, path: page.path })
  }
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  }
}

function webSite() {
  const base = getSiteUrl()
  return {
    "@type": "WebSite",
    name: SITE_NAME,
    url: base,
    description: SITE_TAGLINE,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: base,
    },
  }
}

function organization() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: `Independent fan wiki for Sell Ores on Roblox. Not affiliated with Roblox Corporation or ${CREATOR_GROUP}.`,
    sameAs: [GAME_URL],
  }
}

function webPage(page: SeoPage) {
  return {
    "@type": "WebPage",
    name: page.title,
    headline: page.title,
    description: page.description,
    url: pageUrl(page.path),
    dateModified: CONTENT_AS_OF,
    inLanguage: "en-US",
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: getSiteUrl() },
    about: {
      "@type": "VideoGame",
      name: "Sell Ores",
      url: GAME_URL,
      gamePlatform: "Roblox",
      identifier: PLACE_ID,
    },
  }
}

function codesFaq() {
  return {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why isn’t my Sell Ores code working?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typo, expired, already redeemed, or you’re on a different Place ID. Confirm Place ID 122572082932179 before redeeming.",
        },
      },
      {
        "@type": "Question",
        name: "Where do new Sell Ores codes appear?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "New codes usually appear first in the official Discord codes channel. This wiki updates after we re-check in-game. Status stays Reported until verified.",
        },
      },
      {
        "@type": "Question",
        name: "How do I redeem Sell Ores codes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Join Sell Ores, open Settings (top right), find Codes, paste exactly, then Redeem. Skip Invalid or Already Redeemed results.",
        },
      },
    ],
  }
}

function redeemHowTo() {
  return {
    "@type": "HowTo",
    name: "How to redeem Sell Ores codes",
    description: "Redeem reported Sell Ores codes in Settings after confirming Place ID.",
    totalTime: "PT2M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Join the correct game",
        text: `Open Sell Ores and confirm Place ID ${PLACE_ID}.`,
        url: GAME_URL,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Open Settings",
        text: "Tap the Settings gear in the top right.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Enter the code",
        text: "Open Codes, paste the code exactly, then Redeem.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Handle errors",
        text: "If you see Invalid or Already Redeemed, stop — do not spam retries.",
      },
    ],
  }
}

function beginnerHowTo() {
  return {
    "@type": "HowTo",
    name: "Sell Ores beginner loop",
    description: "Roll, place, drill, sell, then upgrade the real bottleneck.",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Roll",
        text: "Roll an ore at the pedestal. An ore in your hand does not earn yet.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Place",
        text: "Put the ore into an empty tunnel or compartment.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Drill",
        text: "Let yellow drilling drones finish a crate.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Sell",
        text: "Carry the crate to the Sell station and sell for cash.",
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Upgrade",
        text: "Upgrade the slowest step: regen, drill speed, or slots.",
      },
    ],
  }
}

function itemListCodes() {
  return {
    "@type": "ItemList",
    name: "Reported Sell Ores codes",
    itemListElement: ACTIVE_CODES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.code,
      description: `${c.reward} (${c.status})`,
    })),
  }
}

export function buildPageStructuredData(page: SeoPage): Record<string, unknown> {
  const graph: object[] = [webSite(), organization(), webPage(page), crumbsFor(page)]

  if (page.path === SEO_PAGES.codes.path) {
    graph.push(codesFaq(), redeemHowTo(), itemListCodes())
  }
  if (page.path === SEO_PAGES.beginner.path) {
    graph.push(beginnerHowTo())
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  }
}
