"use client"

import { useState } from "react"
import Image from "next/image"

type ShufflerImage = {
  src: string
  caption: string
}

export function PhotoShuffler({
  images,
  counterLabel,
}: {
  images: ShufflerImage[]
  counterLabel: string
}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const move = (step: number) => {
    setActiveIndex((current) => (current + step + images.length) % images.length)
  }

  const active = images[activeIndex]

  return (
    <div className="mx-auto max-w-2xl">
      <div className="relative mb-9 aspect-[4/3] mx-3 sm:mx-7">
        {[2, 1].map((offset) => {
          const image = images[(activeIndex + offset) % images.length]
          return (
            <div
              key={`${activeIndex}-${offset}`}
              aria-hidden="true"
              className="absolute inset-0 overflow-hidden border border-foreground/15 bg-card shadow-[0_12px_30px_rgba(28,27,24,0.06)]"
              style={{
                transform: `translate(${offset * 5}px, ${offset * 6}px) rotate(${offset === 1 ? 1.1 : -1.15}deg)`,
                zIndex: 3 - offset,
              }}
            >
              <Image src={image.src} alt="" fill className="object-cover" sizes="(max-width: 768px) 92vw, 650px" />
            </div>
          )
        })}

        <button
          key={activeIndex}
          type="button"
          onClick={() => move(1)}
          aria-label="Show next field photograph"
          className="photo-shuffler-card absolute inset-0 z-10 block w-full cursor-pointer overflow-hidden border border-foreground/20 bg-card text-left shadow-[0_18px_45px_rgba(28,27,24,0.10)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-foreground"
        >
          <Image
            src={active.src}
            alt={active.caption}
            fill
            priority={activeIndex === 0}
            className="object-cover"
            sizes="(max-width: 768px) 92vw, 650px"
          />
        </button>
      </div>

      <div className="flex items-start justify-between gap-6 border-t border-foreground/20 pt-4">
        <div>
          <p className="text-base italic leading-relaxed">{active.caption}</p>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground">
            {counterLabel} {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
          </p>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Show previous field photograph"
            className="flex h-9 w-9 items-center justify-center border border-foreground/30 font-mono text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Show next field photograph"
            className="flex h-9 w-9 items-center justify-center border border-foreground/30 font-mono text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
