export function ContactSection() {
  return (
    <section id="contact" className="min-h-[70vh] flex items-center px-6 py-32">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section header */}
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground block mb-2">
            IV.
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide">Contact</h2>
          <div className="mt-4 w-24 h-px bg-foreground mx-auto" />
        </div>

        {/* Email */}
        <div className="mb-12">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Correspondence
          </p>
          <a
            href="mailto:hello@ziyunqi.com"
            className="text-xl md:text-2xl tracking-wide hover:italic transition-all duration-300"
          >
            hello@ziyunqi.com
          </a>
        </div>

        {/* CV buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#"
            className="group border border-foreground px-6 py-3 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Academic CV <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
          <a
            href="#"
            className="group border border-foreground px-6 py-3 font-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Creative CV <span className="inline-block transition-transform group-hover:translate-y-0.5">↓</span>
          </a>
        </div>

        {/* Decorative footer */}
        <div className="pt-16 border-t border-foreground/20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="block w-12 h-px bg-foreground/40" />
            <span className="block w-1.5 h-1.5 border border-foreground/40 rotate-45" />
            <span className="block w-12 h-px bg-foreground/40" />
          </div>
          
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground/60">
            © 2024 Ziyun Qi
          </p>
          <p className="font-mono text-[9px] tracking-[0.15em] text-muted-foreground/40 mt-2">
            Set in Cormorant Garamond
          </p>
        </div>
      </div>
    </section>
  )
}
