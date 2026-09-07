import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        That URL isn’t on Sell Ores Wiki. Try Codes, the beginner route, or head home.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground neon-edge"
        >
          Home
        </Link>
        <Link
          href="/codes"
          className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40"
        >
          Codes
        </Link>
        <Link
          href="/beginner"
          className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-primary/40"
        >
          Beginner
        </Link>
      </div>
    </main>
  )
}
