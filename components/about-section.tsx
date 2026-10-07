"use client"

import { useLang } from "@/lib/lang-context"

export function AboutSection() {
  const { t } = useLang()

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-32">
      <div className="max-w-2xl mx-auto">

        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
            I.
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">{t.about.sectionTitle}</h2>
          <div className="mt-4 w-24 h-px bg-foreground" />
        </div>

        {/* Bio pull quote */}
        <div className="border-l-2 border-foreground pl-8 py-2 mb-12">
          <p className="text-xl md:text-2xl font-light italic leading-relaxed text-foreground/85">
            {t.about.bio}
          </p>
        </div>

        {/* Body paragraphs */}
        <div className="space-y-6 text-base leading-[1.95] text-muted-foreground">
          {[t.about.p1, t.about.p2]
            .flatMap((text) => text.split("\n\n"))
            .map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>

        {/* Closing line */}
        <p className="mt-10 text-base italic text-foreground/50 leading-relaxed">
          {t.about.p3}
        </p>

        {/* Decorative end mark */}
        <div className="mt-14 flex items-center gap-2">
          <span className="block w-1.5 h-1.5 bg-foreground" />
          <span className="block w-1.5 h-1.5 bg-foreground" />
          <span className="block w-1.5 h-1.5 bg-foreground" />
        </div>

      </div>
    </section>
  )
}
