export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-32">
      <div className="max-w-2xl mx-auto">
        {/* Section header - journal style */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
            I.
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">About</h2>
          <div className="mt-4 w-24 h-px bg-foreground" />
        </div>

        {/* Bio text - pull quote style */}
        <div className="border-l-2 border-foreground pl-8 py-2">
          <p className="text-lg md:text-xl leading-relaxed italic text-foreground/90">
            A writer and visual artist working at the intersection of memory, place, and the 
            photographic image. My practice moves between academic research and creative work, 
            exploring how we construct narratives from fragments—the half-remembered, the 
            almost-seen, the spaces between what the camera captures and what the mind preserves.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            Currently based between cities, I hold a background in comparative literature and 
            visual studies. My research examines the material culture of photography, particularly 
            the afterlives of vernacular images and the poetics of the archive.
          </p>
          <p>
            When not writing, I can be found in used bookshops, photographing with expired film, 
            or attempting to read everything published by New Directions.
          </p>
        </div>

        {/* Decorative end mark */}
        <div className="mt-16 flex items-center gap-2">
          <span className="block w-1.5 h-1.5 bg-foreground" />
          <span className="block w-1.5 h-1.5 bg-foreground" />
          <span className="block w-1.5 h-1.5 bg-foreground" />
        </div>
      </div>
    </section>
  )
}
