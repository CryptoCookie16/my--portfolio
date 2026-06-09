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
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-16">
        <h1 className="text-4xl md:text-5xl font-light tracking-wide mb-3">
          {content.title}
        </h1>
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {content.description}
        </p>
      </div>

      {/* ── Gallery ──────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {content.images.map((img, i) => (
            <figure key={i} className="break-inside-avoid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.caption ?? `${content.title} ${i + 1}`}
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

    </main>
  )
}
