"use client"

import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { ZineFlipbook } from "@/components/zine-flipbook"
import { useLang } from "@/lib/lang-context"
import { getWorkDetail } from "@/lib/work-data"

const filmImageDimensions: Record<string, { width: number; height: number }> = {
  "/images/creative/film/Capture One Catalog0009.jpg": { width: 5868, height: 3916 },
  "/images/creative/film/Capture One Catalog0013.jpg": { width: 6429, height: 4279 },
  "/images/creative/film/Capture One Catalog0100.jpeg": { width: 5870, height: 3915 },
  "/images/creative/film/Capture One Catalog0016.jpg": { width: 3924, height: 5881 },
  "/images/creative/film/Capture One Catalog0029.jpeg": { width: 6406, height: 4273 },
  "/images/creative/film/Capture One Catalog0033.jpg": { width: 3917, height: 5872 },
  "/images/creative/film/Capture One Catalog0045.jpg": { width: 3932, height: 5895 },
  "/images/creative/film/Capture One Catalog0047.jpg": { width: 3932, height: 5895 },
  "/images/creative/film/Capture One Catalog0051.jpeg": { width: 5895, height: 3932 },
  "/images/creative/film/Capture One Catalog0071 2.JPG": { width: 3891, height: 5837 },
  "/images/creative/film/Capture One Catalog0080.jpg": { width: 5861, height: 3909 },
  "/images/creative/film/capture-one-0010.jpg": { width: 5711, height: 3913 },
  "/images/creative/film/capture-one-0013-new.jpg": { width: 5877, height: 3916 },
  "/images/creative/film/capture-one-0102.jpg": { width: 5862, height: 3910 },
  "/images/creative/film/capture-one-0014.jpg": { width: 6391, height: 4263 },
  "/images/creative/film/capture-one-0038.jpg": { width: 6439, height: 4295 },
}

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
  const essay = detail.essay
  const isFilmPhotography = detail.id === "film-photography"
  const isFieldFermentZine = detail.id === "field-ferment-zine"

  const filmRows = isFilmPhotography
    ? [
        { type: "single-wide", indexes: [0] },
        { type: "pair-low-right", indexes: [1, 2] },
        { type: "single-left", indexes: [3] },
        { type: "pair-low-left", indexes: [4, 5] },
        { type: "single-right", indexes: [6] },
        { type: "pair-low-right", indexes: [7, 8] },
        { type: "single-wide", indexes: [9] },
        { type: "pair-low-left", indexes: [10, 11] },
        { type: "single-left", indexes: [12] },
        { type: "pair-low-right", indexes: [13, 14] },
        { type: "single-right", indexes: [15] },
      ]
    : []

  // ── Essay layout (Eulogy for Breathing) ─────────────────
  if (essay) {
    const essayContent = lang === "zh" ? essay.zh : essay.en
    return (
      <main style={{ background: essay.bgColor, minHeight: "100vh" }} className="pb-40">
        <Navigation />
        {/* Back navigation */}
        <div className="px-6 pt-10 pb-6" style={{ maxWidth: "58%", margin: "0 auto" }}>
          <Link
            href="/#work"
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            ← {t.nav.work}
          </Link>
        </div>

        {/* Essay content */}
        <article style={{ maxWidth: "58%", margin: "0 auto", padding: "0 0 4rem" }}>
          <h1
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              letterSpacing: "0.05em",
              marginBottom: "3rem",
              lineHeight: 1.3,
            }}
          >
            {essayContent.title}
          </h1>

          {/* Paragraphs */}
          <div>
            {essayContent.paragraphs.map((para, i) => {
              const isList = /^嗅觉复健清单/.test(para)
              return (
                <p
                  key={i}
                  style={{
                    fontWeight: 300,
                    lineHeight: isList ? 2 : 2.2,
                    marginBottom: "2em",
                    fontSize: isList ? "0.88rem" : "1rem",
                    color: isList ? "rgba(30,25,20,0.6)" : "rgba(30,25,20,0.85)",
                    fontFamily: isList ? "monospace" : "inherit",
                    whiteSpace: "pre-line",
                  }}
                  className={i === 0 ? "drop-cap" : ""}
                >
                  {para}
                </p>
              )
            })}
          </div>

          {/* Copyright */}
          <p
            style={{
              fontStyle: "italic",
              fontSize: "0.75rem",
              color: "rgba(30,25,20,0.35)",
              marginTop: "3rem",
              letterSpacing: "0.03em",
            }}
          >
            {essayContent.fadeNote}
          </p>
        </article>

        <style>{`
          .drop-cap::first-letter {
            float: left;
            font-size: 3.8em;
            line-height: 0.75;
            margin-right: 0.1em;
            margin-top: 0.08em;
            font-weight: 300;
          }
        `}</style>
      </main>
    )
  }

  return (
    <main
      className={`pb-40 ${isFilmPhotography ? "bg-[#11110f] text-[#e8e4da]" : ""}`}
    >
      <Navigation />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {detail.heroImage && (
          <Image
            src={detail.heroImage}
            alt={content.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        )}
        {/* gradient fade to background */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent ${
            isFilmPhotography ? "to-[#11110f]" : "to-[#f7f3ea]"
          }`}
        />

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
      <div className={`max-w-2xl mx-auto px-6 pt-10 pb-16 ${isFilmPhotography ? "text-[#e8e4da]" : ""}`}>
        <h1
          className={`text-4xl md:text-5xl font-light tracking-wide ${
            content.description ? "mb-8" : "mb-0"
          }`}
        >
          {content.title}
        </h1>
        {content.description && (
          <div className="space-y-4">
            {content.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-base leading-[1.9] text-foreground/80">
                {para}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* ── Collage ──────────────────────────────────────────── */}
      {detail.collageImages && detail.collageImages.length > 0 && (
        <div className="max-w-3xl mx-auto px-6 mb-20">
          <div className="relative flex items-start justify-center" style={{ minHeight: "420px" }}>
            {detail.collageImages.map((img, i) => {
              const offsets = [
                { left: "0%",   top: "0px",  zIndex: 2 },
                { left: "28%",  top: "40px", zIndex: 3 },
                { left: "54%",  top: "10px", zIndex: 1 },
              ]
              const pos = offsets[i] ?? offsets[0]
              return (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    left: pos.left,
                    top: pos.top,
                    width: "46%",
                    transform: `rotate(${img.rotate}deg)`,
                    zIndex: pos.zIndex,
                    border: "1px solid #ccc",
                    boxShadow: "2px 4px 12px rgba(0,0,0,0.12)",
                  }}
                >
                  <Image
                    src={img.src}
                    alt={`${content.title} ${i + 1}`}
                    width={0}
                    height={0}
                    sizes="46vw"
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── Gallery ──────────────────────────────────────────── */}
      {content.images.length > 0 && (
        isFilmPhotography ? (
          <section className="mx-auto max-w-[1180px] px-6 md:px-10">
            <div className="space-y-14 md:space-y-20">
              {filmRows.map((row, rowIndex) => {
                const rowImages = row.indexes
                  .map((index) => ({ image: content.images[index], index }))
                  .filter(({ image }) => Boolean(image))

                if (rowImages.length === 0) return null

                if (rowImages.length === 1) {
                  const { image, index } = rowImages[0]
                  const dimensions = filmImageDimensions[image.src]
                  const alignment =
                    row.type === "single-left"
                      ? "mr-auto md:w-[56%]"
                      : row.type === "single-right"
                        ? "ml-auto md:w-[59%]"
                        : "mx-auto md:w-[78%]"

                  return (
                    <figure key={rowIndex} className={`w-full ${alignment}`}>
                      <Image
                        src={image.src}
                        alt={image.caption ?? `${content.title} ${index + 1}`}
                        width={dimensions?.width ?? 1600}
                        height={dimensions?.height ?? 1067}
                        sizes="(max-width: 768px) 100vw, 78vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <figcaption className="mt-3 flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] text-[#e8e4da]/45">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {image.caption && <span>{image.caption}</span>}
                      </figcaption>
                    </figure>
                  )
                }

                const lowerSecond = row.type === "pair-low-right"

                return (
                  <div
                    key={rowIndex}
                    className="grid grid-cols-1 gap-20 md:grid-cols-12 md:gap-x-10 md:gap-y-0"
                  >
                    {rowImages.map(({ image, index }, itemIndex) => {
                      const dimensions = filmImageDimensions[image.src]
                      const isLower = lowerSecond ? itemIndex === 1 : itemIndex === 0
                      const placement =
                        itemIndex === 0
                          ? "md:col-span-5 md:col-start-1"
                          : "md:col-span-6 md:col-start-7"

                      return (
                        <figure
                          key={index}
                          className={`${placement} ${isLower ? "md:mt-14" : ""}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.caption ?? `${content.title} ${index + 1}`}
                            width={dimensions?.width ?? 1600}
                            height={dimensions?.height ?? 1067}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ width: "100%", height: "auto" }}
                          />
                          <figcaption className="mt-3 flex items-center gap-3 font-mono text-[9px] tracking-[0.18em] text-[#e8e4da]/45">
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            {image.caption && <span>{image.caption}</span>}
                          </figcaption>
                        </figure>
                      )
                    })}
                  </div>
                )
              })}
            </div>

            <p className="mt-20 text-center font-mono text-[9px] tracking-[0.25em] uppercase text-[#e8e4da]/35">
              — A selection of works —
            </p>
          </section>
        ) : (
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {/* Left column: even-indexed images */}
            <div className="flex flex-col gap-6">
              {content.images.filter((_, i) => i % 2 === 0).map((img, i) => (
                <figure key={i}>
                  <Image
                    src={img.src}
                    alt={img.caption ?? `${content.title} ${i * 2 + 1}`}
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    style={{ width: "100%", height: "auto" }}
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
                  <Image
                    src={img.src}
                    alt={img.caption ?? `${content.title} ${i * 2 + 2}`}
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    style={{ width: "100%", height: "auto" }}
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
        )
      )}

      {isFieldFermentZine && (
        <div className="mx-auto mt-24 px-3 sm:px-6">
          <ZineFlipbook />
        </div>
      )}

      {/* ── Legacy embeds ────────────────────────────────────── */}
      {detail.embedCode && (
        <div
          className="max-w-4xl mx-auto px-6 mt-32"
          dangerouslySetInnerHTML={{ __html: detail.embedCode }}
        />
      )}

    </main>
  )
}
