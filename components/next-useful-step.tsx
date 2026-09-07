import Link from "next/link"

export type NextLink = {
  href: string
  title: string
  blurb: string
}

export function NextUsefulStep({ links }: { links: NextLink[] }) {
  if (links.length === 0) return null
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <h2 className="mb-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
        Next useful step
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-border bg-surface p-5 transition hover:border-primary/50"
          >
            <p className="font-display text-lg font-semibold text-primary">{link.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{link.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
