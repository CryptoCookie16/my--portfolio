"use client"

import Link from "next/link"
import { useLang } from "@/lib/lang-context"

const workLayout = [
  { aspectRatio: "aspect-[3/4]",  colClass: "md:col-span-7",                        alignClass: "" },
  { aspectRatio: "aspect-[2/3]",  colClass: "md:col-span-5 flex items-end",          alignClass: "w-full" },
  { aspectRatio: "aspect-[4/3]",  colClass: "md:col-span-5 flex items-start md:pt-8", alignClass: "w-full" },
  { aspectRatio: "aspect-[1/1]",  colClass: "md:col-span-7",                        alignClass: "" },
]

export function CreativeWorkSection() {
  const { t } = useLang()
  const projects = t.work.projects

  return (
    <section id="work" className="min-h-screen px-6 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
            III.
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">{t.work.sectionTitle}</h2>
          <div className="mt-4 w-24 h-px bg-foreground" />
        </div>

        {/* Asymmetric masonry grid */}
        <div className="grid md:grid-cols-12 gap-8">
          {projects.map((project, i) => {
            const layout = workLayout[i]
            return (
              <div key={project.id} className={layout.colClass}>
                <Link href={`/work/${project.id}`} className="group block w-full">
                  <figure>
                    <div className="film-frame">
                      <div
                        className={`${layout.aspectRatio} bg-foreground/10 relative overflow-hidden transition-all duration-500 group-hover:bg-foreground/15`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <span className="block w-12 h-12 border border-foreground/30 mx-auto mb-2 group-hover:border-foreground/50 transition-colors" />
                            <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted-foreground">
                              {project.filmType}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <figcaption className="mt-4">
                      <span className="block text-base italic group-hover:underline underline-offset-4 transition-all">
                        {project.title}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mt-1">
                        {project.subtitle}
                      </span>
                    </figcaption>
                  </figure>
                </Link>
              </div>
            )
          })}
        </div>

        <div className="mt-20 text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            ✦
          </span>
        </div>
      </div>
    </section>
  )
}
