"use client"

import Link from "next/link"
import { useLang } from "@/lib/lang-context"
import { getWorkDetail } from "@/lib/work-data"

export default function WorkDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { lang, t } = useLang()
  const detail = getWorkDetail(params.id)
  const project = t.work.projects.find((p) => p.id === params.id)

  if (!detail || !project) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          Not found
        </p>
      </main>
    )
  }

  const content = detail[lang]

  return (
    <main className="pb-40">

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {detail.heroImage && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={detail.heroImage}
            alt={content.title}
            className="w-full h-full object-cover"
          />
        )}
        {/* gradient fade to background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#f7f3ea]" />

        {/* Back navigation */}
        <div className="absolute top-8 left-6">
          <Link
            href="/#work"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/80 hover:text-white transition-colors"
          >
            ← {t.nav.work}
          </Link>
        </div>
      </div>

      {/* ── Title ────────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 pt-10 pb-16">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-8">
          {content.title}
        </h1>
        <div className="space-y-4">
          {content.description.split("\n\n").map((para, i) => (
            <p key={i} className="text-base leading-[1.9] text-foreground/80">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          {/* Left column: even-indexed images */}
          <div className="flex flex-col gap-6">
            {content.images.filter((_, i) => i % 2 === 0).map((img, i) => (
              <figure key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption ?? `${content.title} ${i * 2 + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                />
                {img.caption && (
                  <figcaption className="mt-2 font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
          {/* Right column: odd-indexed images */}
          <div className="flex flex-col gap-6">
            {content.images.filter((_, i) => i % 2 === 1).map((img, i) => (
              <figure key={i}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.caption ?? `${content.title} ${i * 2 + 2}`}
                  className="w-full object-cover"
                  loading="lazy"
                />
                {img.caption && (
                  <figcaption className="mt-2 font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>

        {/* partial note */}
        <p className="mt-16 text-center font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground/50">
          — A selection of works —
        </p>
      </div>

    </main>
  )
}
