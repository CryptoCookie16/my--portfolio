"use client"

import Link from "next/link"
import { useLang } from "@/lib/lang-context"

export function ResearchSection() {
  const { t } = useLang()

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
          {t.research.projects.map((project, index) => (
            <Link key={index} href={`/research/${project.id}`} className="block group">
            <article
              className="border border-foreground/20 p-6 transition-all duration-500 hover:border-foreground hover:bg-card h-full"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground block mb-4">
                No. {project.number}
              </span>

              <h3 className="text-xl font-medium tracking-wide mb-1 group-hover:italic transition-all duration-300">
                {project.title}
              </h3>

              {project.titleSub && (
                <span className="text-base text-muted-foreground block mb-3">
                  {project.titleSub}
                </span>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 mt-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="font-mono text-[9px] tracking-[0.15em] uppercase border border-foreground/40 px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
            </Link>
          ))}
        </div>

        <p className="mt-16 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground text-center">
          {t.research.footer}
        </p>
      </div>
    </section>
  )
}
