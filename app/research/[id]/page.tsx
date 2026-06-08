"use client"

import Link from "next/link"
import { useLang } from "@/lib/lang-context"
import { getResearchDetail } from "@/lib/research-data"

export default function ResearchDetailPage({
  params,
}: {
  params: { id: string }
}) {
  const { lang, t } = useLang()
  const detail = getResearchDetail(params.id)
  const project = t.research.projects.find((p) => p.id === params.id)

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
    <main className="pt-24 pb-40 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Back navigation */}
        <div className="mb-20">
          <Link
            href="/#research"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {t.nav.research}
          </Link>
        </div>

        {/* ── Header ─────────────────────────────────────────── */}
        <div className="mb-20">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-3">
            No. {project.number}
          </span>
          <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight mb-2">
            {project.title}
          </h1>
          {project.titleSub && (
            <p className="text-xl text-muted-foreground font-light tracking-[0.1em]">
              {project.titleSub}
            </p>
          )}
        </div>

        {/* ── Field Quote ────────────────────────────────────── */}
        {content.quote && (
          <div className="mb-20 border-l border-foreground/30 pl-8">
            <p className="text-xl md:text-2xl font-light italic leading-relaxed text-foreground/85">
              &ldquo;{content.quote}&rdquo;
            </p>
            <p className="mt-5 font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground">
              — {content.quoteSource}
            </p>
          </div>
        )}

        {/* ── Abstract ───────────────────────────────────────── */}
        <div className="mb-6 space-y-5">
          {content.abstract.split("\n\n").map((para, i) => (
            <p key={i} className="text-base leading-[1.9] text-foreground/80">
              {para}
            </p>
          ))}
        </div>
        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-20">
          {content.publication}
        </p>

        {/* Divider */}
        <div className="w-16 h-px bg-foreground/20 mb-20" />

        {/* ── Text Excerpts ──────────────────────────────────── */}
        {content.excerpts.map((excerpt, i) => (
          <div key={i} className="mb-20">
            {excerpt.label && (
              <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-8">
                {excerpt.label}
              </span>
            )}
            <p className="text-base leading-[2.1] text-foreground/75 max-w-prose">
              {excerpt.body}
            </p>
          </div>
        ))}

        {/* ── Visual Archive ─────────────────────────────────── */}
        {content.images.length > 0 && (
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {content.images.map((img, i) => (
                <figure key={i}>
                  <div className="aspect-[4/3] bg-foreground/6 border border-foreground/10 flex items-center justify-center">
                    {img.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={img.src}
                        alt={img.caption}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-muted-foreground/40">
                        image
                      </span>
                    )}
                  </div>
                  <figcaption className="mt-3 font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-32">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="font-mono text-[9px] tracking-[0.15em] uppercase border border-foreground/30 px-2 py-1 text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* ── Full Text Request ──────────────────────────────── */}
        <div className="border-t border-foreground/10 pt-16 text-center">
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground/40 font-light">
            Full text available upon request.
          </p>
        </div>

      </div>
    </main>
  )
}
