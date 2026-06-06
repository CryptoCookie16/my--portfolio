export function HomeSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative"
    >
      {/* Background image with gradient fade */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent 0%, transparent 50%, var(--background) 100%),
            url('/images/hero-bg.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        {/* Decorative element - like old journal masthead */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="block w-16 h-px bg-foreground" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Est. MCMXCVIII
          </span>
          <span className="block w-16 h-px bg-foreground" />
        </div>

        {/* Main title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-4">
          Ziyun Qi
        </h1>
        
        {/* Chinese name */}
        <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.2em] mb-12 text-muted-foreground">
          戚紫云
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="block w-2 h-2 border border-foreground rotate-45" />
        </div>

        {/* Tagline - typewriter style */}
        <p className="font-mono text-sm tracking-[0.15em] uppercase text-muted-foreground">
          Writer · Researcher · Photographer · Editor
        </p>

        {/* Bottom flourish */}
        <div className="mt-24 flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground/60">
            Scroll
          </span>
          <span className="block w-px h-12 bg-foreground/30" />
        </div>
      </div>
    </section>
  )
}
