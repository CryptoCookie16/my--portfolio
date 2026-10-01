"use client"

import Image from "next/image"
import { useRef, type CSSProperties, type PointerEvent } from "react"

const frondLayers = [
  { clip: "inset(0 37% 0 51%)", x: 8, y: 2, rotate: 0.9, delay: "-1.2s" },
  { clip: "inset(0 28% 0 59%)", x: 11, y: 3, rotate: 1.25, delay: "-3.7s" },
  { clip: "inset(0 19% 0 67%)", x: 7, y: 2, rotate: 0.75, delay: "-2.1s" },
  { clip: "inset(0 8% 0 76%)", x: 13, y: 4, rotate: 1.45, delay: "-4.4s" },
  { clip: "inset(0 0 0 86%)", x: 9, y: 3, rotate: 1.05, delay: "-0.6s" },
]

type Project = {
  number: string
  title: string
  titleSub?: string | null
}

export function InteractiveFernHero({ project }: { project: Project }) {
  const heroRef = useRef<HTMLDivElement>(null)

  function updateSway(event: PointerEvent<HTMLDivElement>) {
    const hero = heroRef.current
    if (!hero || event.pointerType === "touch") return

    const rect = hero.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2
    hero.style.setProperty("--fern-x", x.toFixed(3))
    hero.style.setProperty("--fern-y", y.toFixed(3))
  }

  function resetSway() {
    const hero = heroRef.current
    if (!hero) return
    hero.style.setProperty("--fern-x", "0")
    hero.style.setProperty("--fern-y", "0")
  }

  return (
    <div
      ref={heroRef}
      onPointerMove={updateSway}
      onPointerLeave={resetSway}
      className="fern-hero relative left-1/2 mb-24 min-h-[520px] w-[calc(100vw-3rem)] max-w-[1180px] -translate-x-1/2 overflow-hidden bg-[#050805] text-[#f4f0e6] md:min-h-[min(76vh,760px)]"
      style={{ "--fern-x": 0, "--fern-y": 0 } as CSSProperties}
    >
      <Image
        src="/images/research/ferns-touch-flesh/fern-backdrop.png"
        alt=""
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1180px"
        className="pointer-events-none select-none object-contain object-right opacity-65"
      />

      {frondLayers.map((layer, index) => (
        <div
          key={layer.clip}
          aria-hidden="true"
          className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform"
          style={{
            clipPath: layer.clip,
            transform: `translate3d(calc(var(--fern-x) * ${layer.x}px), calc(var(--fern-y) * ${layer.y}px), 0) rotate(calc(var(--fern-x) * ${layer.rotate}deg))`,
            transformOrigin: `${58 + index * 9}% 100%`,
          }}
        >
          <div
            className="fern-idle absolute inset-0"
            style={{ animationDelay: layer.delay, transformOrigin: `${58 + index * 9}% 100%` }}
          >
            <Image
              src="/images/research/ferns-touch-flesh/fern-backdrop.png"
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1180px"
              className="pointer-events-none select-none object-contain object-right opacity-90"
            />
          </div>
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-[#050805] via-[#050805]/90 to-[#050805]/15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050805]/80 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[520px] w-full max-w-[1080px] flex-col justify-end p-8 md:min-h-[min(76vh,760px)] md:p-16 lg:p-20">
        <div className="max-w-[82%] md:max-w-[58%]">
        <span className="mb-4 block font-mono text-[10px] tracking-[0.3em] text-[#f4f0e6]/60">
          No. {project.number}
        </span>
        <h1 className="mb-4 text-4xl font-light leading-tight tracking-wide md:text-6xl lg:text-7xl">
          {project.title}
        </h1>
        {project.titleSub && (
          <p className="text-lg font-light tracking-[0.1em] text-[#f4f0e6]/65 md:text-xl">
            {project.titleSub}
          </p>
        )}
        </div>
      </div>
    </div>
  )
}
