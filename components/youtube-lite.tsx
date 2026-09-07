"use client"

import { useState } from "react"

import { videosForPage, type ReviewedYoutubeVideo } from "@/lib/youtube-reviewed"

function LiteCard({ video }: { video: ReviewedYoutubeVideo }) {
  const [active, setActive] = useState(false)
  const thumb = `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="aspect-video w-full bg-surface-2">
        {active ? (
          <iframe
            title={video.title}
            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0`}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            className="group relative flex h-full w-full items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label={`Play video: ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt=""
              width={480}
              height={360}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <span className="relative z-10 rounded-full border border-border bg-background/90 px-4 py-2 text-sm font-semibold text-foreground backdrop-blur group-hover:border-primary/50">
              Play
            </span>
          </button>
        )}
      </div>
      <div className="border-t border-border px-4 py-3">
        <p className="text-sm font-medium text-foreground">{video.title}</p>
        {video.creator ? (
          <p className="mt-1 text-xs text-muted-foreground">{video.creator}</p>
        ) : null}
        <p className="mt-1 text-xs text-muted-foreground">{video.purpose}</p>
      </div>
    </div>
  )
}

export function YouTubeLite({
  page,
  heading,
  supporting,
}: {
  page: string
  heading: string
  supporting?: string
}) {
  const videos = videosForPage(page)
  if (videos.length === 0) return null

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
      <h2 className="mb-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">{heading}</h2>
      {supporting ? (
        <p className="mb-6 max-w-2xl text-sm text-muted-foreground">{supporting}</p>
      ) : (
        <div className="mb-6" />
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {videos.map((video) => (
          <LiteCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  )
}
