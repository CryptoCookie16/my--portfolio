const researchProjects = [
  {
    number: "01",
    title: "Fern Fieldwork",
    titleChinese: "蕨类田野",
    description: "Ongoing capstone. Multispecies and sensory ethnography in Gaoligong Mountain, Yunnan.",
    tags: ["Multispecies Ethnography", "Sensory Methods", "Plant Studies"],
  },
  {
    number: "02",
    title: "Where Ferns Touch Flesh",
    titleChinese: null,
    description: "Presented at UCSD Graduate Conference, May 2026. Analysis of Zheng Bo's Pteridophilia through posthumanism, queer ecology, and affect theory.",
    tags: ["Queer Ecology", "Affect Theory", "Art Criticism"],
  },
  {
    number: "03",
    title: "Roadside Shrines of Hong Kong",
    titleChinese: "香港路边神龛",
    description: "Essay on vernacular sacred space, tactics of the everyday, and urban religion.",
    tags: ["Urban Anthropology", "Space", "Religion"],
  },
  {
    number: "04",
    title: "Waiting for a Diagnosis",
    titleChinese: null,
    description: "Policy-oriented research on the underdiagnosis of ADHD among adult women and gender bias in diagnostic frameworks.",
    tags: ["Gender", "Disability Studies", "Public Health"],
  },
]

export function ResearchSection() {
  return (
    <section id="research" className="min-h-screen px-6 py-32">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
            II.
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">Research</h2>
          <div className="mt-4 w-24 h-px bg-foreground" />
        </div>

        {/* Research grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {researchProjects.map((project, index) => (
            <article
              key={index}
              className="group border border-foreground/20 p-6 transition-all duration-500 hover:border-foreground hover:bg-card"
            >
              {/* Project number */}
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground block mb-4">
                No. {project.number}
              </span>

              {/* Title */}
              <h3 className="text-xl font-medium tracking-wide mb-1 group-hover:italic transition-all duration-300">
                {project.title}
              </h3>
              
              {/* Chinese title if exists */}
              {project.titleChinese && (
                <span className="text-base text-muted-foreground block mb-3">
                  {project.titleChinese}
                </span>
              )}

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 mt-3">
                {project.description}
              </p>

              {/* Tags */}
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
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-16 font-mono text-[10px] tracking-[0.15em] uppercase text-muted-foreground text-center">
          — Selected projects, 2019–present —
        </p>
      </div>
    </section>
  )
}
