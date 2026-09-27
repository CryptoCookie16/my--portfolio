"use client"

import { useEffect, useRef, useState } from "react"
import { useLang } from "@/lib/lang-context"

export function HomeSection() {
  const { t } = useLang()
  const [showIntro, setShowIntro] = useState(false)
  const [fading, setFading] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    try {
      if (!sessionStorage.getItem("cableway_seen")) {
        setShowIntro(true)
      }
    } catch {}
  }, [])

  useEffect(() => {
    if (!showIntro) return
    const handler = (e: MessageEvent) => {
      if (e.data === "cableway:done") {
        setFading(true)
        setTimeout(() => {
          setShowIntro(false)
          try { sessionStorage.setItem("cableway_seen", "1") } catch {}
        }, 1100)
      }
    }
    window.addEventListener("message", handler)
    return () => window.removeEventListener("message", handler)
  }, [showIntro])

  return (
    <>
      {showIntro && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "#f7f3ea",
            opacity: fading ? 0 : 1,
            transition: "opacity 1.1s ease",
            pointerEvents: fading ? "none" : "auto",
          }}
        >
          <iframe
            ref={iframeRef}
            src="/cableway/index.html?style=marker&embedded=1"
            style={{ width: "100%", height: "100%", border: "none" }}
            title="滑索"
          />
        </div>
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
