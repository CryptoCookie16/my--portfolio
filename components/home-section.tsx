"use client"

import { useEffect, useRef, useState } from "react"
import { useLang } from "@/lib/lang-context"

export function HomeSection() {
  const { t } = useLang()
  const [showIntro, setShowIntro] = useState(false)
  const [fading, setFading] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const lerpRef = useRef({ current: 0, target: 0, rafId: 0, started: false })

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("cableway_seen")) {
        setShowIntro(true)
      }
    } catch {}
  }, [])

  // RAF loop: lerp toward target progress, update mask-image directly on DOM
  useEffect(() => {
    if (!showIntro) return
    const lerp = lerpRef.current

    function animate() {
      lerp.current += (lerp.target - lerp.current) * 0.009 // slow lag
      const pct = lerp.current * 100
      const softEdge = 28 // width of the gradient soft zone (%)
      const edgeLeft = Math.max(0, pct - softEdge)
      const edgeRight = Math.min(100, pct + softEdge * 0.15)
      const mask = pct > 1
        ? `linear-gradient(to right, transparent 0%, transparent ${edgeLeft.toFixed(1)}%, black ${edgeRight.toFixed(1)}%, black 100%)`
        : "black"
      if (overlayRef.current) {
        overlayRef.current.style.maskImage = mask
        ;(overlayRef.current.style as CSSStyleDeclaration & { webkitMaskImage: string }).webkitMaskImage = mask
      }
      lerp.rafId = requestAnimationFrame(animate)
    }

    lerp.rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(lerp.rafId)
  }, [showIntro])

  useEffect(() => {
    if (!showIntro) return
    const lerp = lerpRef.current
    const handler = (e: MessageEvent) => {
      if (!e.data || typeof e.data !== "object") return
      if (e.data.type === "cableway:progress") {
        const raw = e.data.progress as number
        const start = 0.07, end = 0.89
        lerp.target = Math.max(0, Math.min(1, (raw - start) / (end - start)))
      } else if (e.data.type === "cableway:done") {
        lerp.target = 1
        setTimeout(() => {
          setFading(true)
          setTimeout(() => {
            setShowIntro(false)
            try { sessionStorage.setItem("cableway_seen", "1") } catch {}
          }, 1100)
        }, 600) // wait for lerp to finish before fading
      }
    }
    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [showIntro])

  return (
    <>
      {showIntro && (
        <>
          {/* Masked overlay — iframe slides away left-to-right */}
          <div
            ref={overlayRef}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "#f7f3ea",
              opacity: fading ? 0 : 1,
              transition: fading ? "opacity 1.1s ease" : undefined,
              pointerEvents: fading ? "none" : "auto",
            }}
          >
            <iframe
              ref={iframeRef}
              src="/cableway/index.html?style=marker&embedded=1"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                transform: "scale(0.55)",
                transformOrigin: "center center",
              }}
              title="滑索"
            />
          </div>
          {/* Edge fades — sit OUTSIDE the masked overlay so they always cover the clipped frame legs */}
          <div style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            pointerEvents: "none",
            opacity: fading ? 0 : 1,
            transition: fading ? "opacity 1.1s ease" : undefined,
            background: "linear-gradient(to right, #f7f3ea 0%, transparent 18%, transparent 82%, #f7f3ea 100%)",
          }} />
        </>
      )}
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative"
    >
      {/* Background image with gradient fade */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom,
              rgba(0,0,0,0)          0%,
              rgba(0,0,0,0)          52%,
              rgba(247,243,234,0.06) 60%,
              rgba(247,243,234,0.22) 68%,
              rgba(247,243,234,0.50) 76%,
              rgba(247,243,234,0.78) 86%,
              rgba(247,243,234,0.95) 94%,
              #f7f3ea                100%
            ),
            url('/images/hero-bg.JPG')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4">
          Ziyun Qi
        </h1>

        {/* Chinese name */}
        <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] mb-12 text-muted-foreground">
          戚紫云
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="block w-2 h-2 border border-foreground rotate-45" />
        </div>

        {/* Tagline */}
        <p className="font-mono text-sm tracking-[0.15em] uppercase text-muted-foreground">
          {t.home.tagline}
        </p>

        {/* Scroll indicator */}
        <div className="mt-24 flex flex-col items-center gap-2">
          <span className="text-muted-foreground/60 text-lg">↓</span>
        </div>
      </div>
    </section>
    </>
  )
}
