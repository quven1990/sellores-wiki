import { cn } from "@/lib/utils"

export function GameShot({
  src,
  alt,
  caption,
  className,
}: {
  src: string
  alt: string
  caption?: string
  className?: string
}) {
  return (
    <figure className={cn("overflow-hidden rounded-2xl border border-border bg-surface", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1280}
        height={720}
        className="aspect-video w-full object-cover"
        loading="lazy"
      />
      {caption ? (
        <figcaption className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export const GAME_SHOTS = {
  realityOre: {
    src: "/brand/game/reality-ore-panel.png",
    alt: "Sell Ores in-game sell station and ore panel",
  },
  coalVsCrystalite: {
    src: "/brand/game/coal-vs-crystalite.png",
    alt: "Coal and Crystalite ores being mined by Sell Ores drones",
  },
  sellStation: {
    src: "/brand/game/sell-station.png",
    alt: "Sell Ores sell station with the sell prompt",
  },
  drones: {
    src: "/brand/game/drones-mining.png",
    alt: "Yellow drill drones mining cyan Crystalite ores",
  },
} as const
