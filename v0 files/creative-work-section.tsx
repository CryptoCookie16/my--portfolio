"use client"

import Link from "next/link"

const creativeWorks = [
  {
    id: "film-photography",
    type: "image",
    title: "Film Photography",
    subtitle: "Black and white analog photography shot on 35mm film.",
    aspectRatio: "aspect-[3/4]",
    filmType: "35mm",
  },
  {
    id: "poem-tarot",
    type: "image",
    title: "诗塔罗 Poem Tarot",
    subtitle: "An independent public writing project combining original poetry and tarot imagery.",
    aspectRatio: "aspect-[2/3]",
    filmType: "Digital",
  },
  {
    id: "field-ferment-zine",
    type: "image",
    title: "Field & Ferment Zine",
    subtitle: "Fieldwork interviews at Duke Farm and NC Chinese-operated farms, exploring fermentation, memory, and minority food culture.",
    aspectRatio: "aspect-[4/3]",
    filmType: "Zine",
  },
  {
    id: "eulogy-for-breathing",
    type: "image",
    title: "Eulogy for Breathing",
    subtitle: "Creative nonfiction structured around a self-designed Smell Rehabilitation Checklist.",
    aspectRatio: "aspect-[1/1]",
    filmType: "Essay",
  },
]

export function CreativeWorkSection() {
  return (
    <section id="work" className="min-h-screen px-6 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
            III.
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">Creative Work</h2>
          <div className="mt-4 w-24 h-px bg-foreground" />
        </div>

        {/* Asymmetric masonry grid */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Film Photography - larger */}
          <div className="md:col-span-7">
            <Link href="/work/film-photography" className="group block">
              <figure>
                <div className="film-frame">
                  <div className={`${creativeWorks[0].aspectRatio} bg-foreground/10 relative overflow-hidden transition-all duration-500 group-hover:bg-foreground/15`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block w-12 h-12 border border-foreground/30 mx-auto mb-2 group-hover:border-foreground/50 transition-colors" />
                        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted-foreground">
                          {creativeWorks[0].filmType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-4">
                  <span className="block text-base italic group-hover:underline underline-offset-4 transition-all">{creativeWorks[0].title}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mt-1">
                    {creativeWorks[0].subtitle}
                  </span>
                </figcaption>
              </figure>
            </Link>
          </div>

          {/* Poem Tarot */}
          <div className="md:col-span-5 flex items-end">
            <Link href="/work/poem-tarot" className="group block w-full">
              <figure>
                <div className="film-frame">
                  <div className={`${creativeWorks[1].aspectRatio} bg-foreground/10 relative overflow-hidden transition-all duration-500 group-hover:bg-foreground/15`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block w-10 h-14 border border-foreground/30 mx-auto mb-2 group-hover:border-foreground/50 transition-colors" />
                        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted-foreground">
                          {creativeWorks[1].filmType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-4">
                  <span className="block text-base italic group-hover:underline underline-offset-4 transition-all">{creativeWorks[1].title}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mt-1">
                    {creativeWorks[1].subtitle}
                  </span>
                </figcaption>
              </figure>
            </Link>
          </div>

          {/* Field & Ferment Zine */}
          <div className="md:col-span-5 flex items-start md:pt-8">
            <Link href="/work/field-ferment-zine" className="group block w-full">
              <figure>
                <div className="film-frame">
                  <div className={`${creativeWorks[2].aspectRatio} bg-foreground/10 relative overflow-hidden transition-all duration-500 group-hover:bg-foreground/15`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block w-16 h-12 border border-foreground/30 mx-auto mb-2 group-hover:border-foreground/50 transition-colors" />
                        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted-foreground">
                          {creativeWorks[2].filmType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-4">
                  <span className="block text-base italic group-hover:underline underline-offset-4 transition-all">{creativeWorks[2].title}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mt-1">
                    {creativeWorks[2].subtitle}
                  </span>
                </figcaption>
              </figure>
            </Link>
          </div>

          {/* Eulogy for Breathing */}
          <div className="md:col-span-7">
            <Link href="/work/eulogy-for-breathing" className="group block">
              <figure>
                <div className="film-frame">
                  <div className={`${creativeWorks[3].aspectRatio} bg-foreground/10 relative overflow-hidden transition-all duration-500 group-hover:bg-foreground/15`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block w-12 h-12 border border-foreground/30 mx-auto mb-2 group-hover:border-foreground/50 transition-colors" />
                        <span className="font-mono text-[8px] tracking-[0.2em] uppercase text-muted-foreground">
                          {creativeWorks[3].filmType}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption className="mt-4">
                  <span className="block text-base italic group-hover:underline underline-offset-4 transition-all">{creativeWorks[3].title}</span>
                  <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground block mt-1">
                    {creativeWorks[3].subtitle}
                  </span>
                </figcaption>
              </figure>
            </Link>
          </div>
        </div>

        {/* End mark */}
        <div className="mt-20 text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            ✦
          </span>
        </div>
      </div>
    </section>
  )
}
