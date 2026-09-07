import Link from "next/link"

import { FOOTER_NAV } from "@/lib/navigation"
import { CONTENT_AS_OF, CREATOR_GROUP, PLACE_ID, SITE_NAME } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="font-display text-lg font-bold">
              Sell Ores <span className="text-primary">Wiki</span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Fan wiki — not affiliated with Roblox Corporation or {CREATOR_GROUP}.
              Always confirm Place ID <span className="font-mono text-foreground">{PLACE_ID}</span>.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground" aria-label="Footer">
            {FOOTER_NAV.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {SITE_NAME}. Content as of {CONTENT_AS_OF}. Tables marked
          reported/unverified need in-game checks before you treat rewards as final.
        </p>
      </div>
    </footer>
  )
}
