"use client"

import { useLang } from "@/lib/lang-context"

export function AboutSection() {
  const { lang, t } = useLang()

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
          {lang === "en" ? (
            <>
              <p>
                Currently an MA student in Liberal Arts at Duke University. My academic interests
                drift between the politics of space, everyday rituals, and multispecies
                studies—focusing on existence omitted by formal narratives. I have written on the
                thresholds of roadside shrines in Hong Kong, an inquiry synthesizing five years of
                lived memories and observation within the city. Recently, turning my attention toward
                non-humans and the land, I independently published the digital ethnographic zine{" "}
                <em>January, March, March</em> (Spring 2026), documenting everyday fragments of
                multispecies coexistence on ecological farms through tactile and embodied writing;
                my project <em>Where Ferns Touch Flesh</em> explores posthuman intimacy beyond
                human boundaries and was presented at UC San Diego in the same year.
              </p>
              <p>
                My creative practice is an extension of my academic inquiry—another language for
                it. I write creative non-fiction, shoot black-and-white film, craft zines, and
                appear at markets and street corners with{" "}
                <span className="italic">&ldquo;Poetry Tarot.&rdquo;</span> Bi-literate in Chinese
                and English, I have worked across brand PR, publishing, and media organizations.
              </p>
            </>
          ) : (
            <>
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </>
          )}
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
