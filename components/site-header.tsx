"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { GUIDE_NAV, PRIMARY_NAV } from "@/lib/navigation"
import { SITE_NAME } from "@/lib/site"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/favicon-mark.png"
            alt=""
            width={36}
            height={36}
            className="size-9 rounded-xl border border-primary/40 object-cover"
          />
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-display text-base font-bold tracking-tight">
              Sell Ores <span className="text-primary">Wiki</span>
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Unofficial Roblox guide
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/codes"
            className="hidden rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground neon-edge sm:inline-flex"
          >
            Codes
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-border p-2 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border bg-surface lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label={SITE_NAME}>
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <p className="mt-2 px-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Guides
          </p>
          {GUIDE_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2.5 text-sm text-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
