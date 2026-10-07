"use client"

import Image from "next/image"
import Link from "next/link"
import { useLang } from "@/lib/lang-context"

const cardVisuals: Record<
  string,
  { image?: string; imageClass?: string; position?: string; overlay: string; fallback?: string }
> = {
  "roadside-shrines-hong-kong": {
    image: "/images/research/porous-sacred/02-shenxiang-hill.jpg",
    position: "center 56%",
    overlay: "bg-[#17160f]/65 group-hover:bg-[#17160f]/57",
  },
  "where-ferns-touch-flesh": {
    image: "/images/research/cards/ferns-touch-flesh.jpg",
    imageClass: "grayscale-[.65] saturate-[.55] contrast-[.9]",
    position: "center 52%",
    overlay: "bg-[#0c1811]/72 group-hover:bg-[#0c1811]/64",
  },
  "waiting-for-a-diagnosis": {
    overlay: "bg-[#242126]/25 group-hover:bg-[#242126]/16",
    fallback:
      "radial-gradient(circle at 78% 22%, rgba(196,181,194,.32), transparent 35%), radial-gradient(circle at 18% 82%, rgba(116,129,139,.32), transparent 42%), linear-gradient(135deg, #69636b 0%, #3f4349 100%)",
  },
  "remapping-yunnan": {
    image: "/images/research/remapping-yunnan/01-market-aisle.jpg",
    position: "center 54%",
    overlay: "bg-[#1d160e]/66 group-hover:bg-[#1d160e]/57",
  },
}

export function ResearchSection() {
  const { t } = useLang()
  const visibleProjects = t.research.projects.filter(
    (project) => project.id !== "waiting-for-a-diagnosis"
  )

  return (
    <section id="research" className="min-h-screen px-6 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
            II.
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">{t.research.sectionTitle}</h2>
          <div className="mt-4 w-24 h-px bg-foreground" />
        </div>

        {/* Research grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {visibleProjects.map((project) => {
            const visual = cardVisuals[project.id]

            return (
              <Link key={project.id} href={`/research/${project.id}`} className="block group">
                <article
                  className="relative isolate overflow-hidden border border-foreground/20 bg-[#4b4a46] p-6 text-[#f7f2e8] transition-all duration-500 hover:border-foreground/60 h-full"
                >
                  {visual?.image ? (
                    <Image
                      src={visual.image}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 448px, 100vw"
                      className={`-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035] ${visual.imageClass ?? ""}`}
                      style={{ objectPosition: visual.position }}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 -z-20 transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                      style={{ backgroundImage: visual?.fallback }}
                    />
                  )}
                  <div
                    className={`absolute inset-0 -z-10 transition-colors duration-500 ${visual?.overlay ?? "bg-black/60"}`}
                  />

                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#f7f2e8]/70 block mb-4">
                    No. {project.number}
                  </span>

                  <h3 className="text-xl font-medium tracking-wide mb-1 group-hover:italic transition-all duration-300">
                    {project.title}
                  </h3>

                  {project.titleSub && (
                    <span className="text-base text-[#f7f2e8]/78 block mb-3">
                      {project.titleSub}
                    </span>
                  )}

                  <p className="text-sm text-[#f7f2e8]/82 leading-relaxed mb-6 mt-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="font-mono text-[9px] tracking-[0.15em] uppercase border border-[#f7f2e8]/45 px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Link>
            )
          })}
        </div>

        <p className="mt-16 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground text-center">
          {t.research.footer}
        </p>
      </div>
    </section>
  )
}
