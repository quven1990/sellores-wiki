import type { Metadata, Viewport } from "next"
import { DM_Sans, Syne } from "next/font/google"

import { GoogleAnalytics } from "@/components/google-analytics"
import { SiteShell } from "@/components/site-shell"
import { DEFAULT_OG_IMAGE, SEO_PAGES } from "@/lib/seo"
import { getSiteUrl, SITE_NAME } from "@/lib/site"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: SEO_PAGES.home.title,
    template: "%s",
  },
  applicationName: SITE_NAME,
  description: SEO_PAGES.home.description,
  keywords: [
    "Sell Ores",
    "Sell Ores codes",
    "Sell Ores wiki",
    "Sell Ores ores",
    "Sell Ores pets",
    "Sell Ores gears",
    "Sell Ores mutations",
    "Sell Ores beginner guide",
    "Sell Ores Roblox",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: SEO_PAGES.home.title,
    description: SEO_PAGES.home.description,
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_PAGES.home.title,
    description: SEO_PAGES.home.description,
    images: [DEFAULT_OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#070014",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
