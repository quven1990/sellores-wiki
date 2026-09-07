import Link from "next/link"

import { cn } from "@/lib/utils"

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  className,
  imageSrc,
  imageAlt = "",
}: {
  eyebrow?: string
  title: string
  description: string
  actions?: React.ReactNode
  className?: string
  imageSrc?: string
  imageAlt?: string
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden mine-glow",
        imageSrc ? "min-h-[560px] sm:min-h-[72vh] md:min-h-[78vh]" : "",
        className,
      )}
    >
      {imageSrc ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 h-full w-full object-cover object-[70%_center] sm:object-center"
          />
          <div className="absolute inset-0 bg-[#070014]/60 sm:bg-[#070014]/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070014] via-[#070014]/75 to-[#070014]/35 sm:bg-gradient-to-r sm:from-[#070014] sm:via-[#070014]/80 sm:to-[#070014]/25" />
          <div className="absolute inset-0 mine-glow opacity-70" />
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 mine-grid opacity-40" />
      )}

      <div
        className={cn(
          "relative mx-auto flex max-w-6xl flex-col justify-end px-4 sm:px-6",
          imageSrc
            ? "min-h-[560px] pb-12 pt-20 sm:min-h-[72vh] sm:pb-16 sm:pt-24 md:min-h-[78vh] md:pb-20"
            : "pb-12 pt-14 sm:pb-16 sm:pt-20",
        )}
      >
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-3xl font-display text-[2.1rem] font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
          {description}
        </p>
        {actions ? (
          <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
            {actions}
          </div>
        ) : null}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 tunnel-band sm:h-28" />
    </section>
  )
}

export function Section({
  title,
  children,
  id,
}: {
  title?: string
  children: React.ReactNode
  id?: string
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      {title ? (
        <h2 className="mb-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      ) : null}
      {children}
    </section>
  )
}

export function TextLink({
  href,
  title,
  blurb,
}: {
  href: string
  title: string
  blurb: string
}) {
  return (
    <Link
      href={href}
      className="group block border-b border-border py-5 transition hover:border-primary/50"
    >
      <span className="font-display text-xl font-semibold text-foreground group-hover:text-primary">
        {title}
      </span>
      <span className="mt-1 block text-sm text-muted-foreground">{blurb}</span>
    </Link>
  )
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-cyan/25 bg-cyan/5 px-4 py-3 text-sm leading-relaxed text-foreground neon-edge">
      {children}
    </div>
  )
}
