"use client"

import { useState, useEffect } from "react"
import { useLang } from "@/lib/lang-context"

const navKeys = [
  { key: "home",     href: "#home" },
  { key: "about",    href: "#about" },
  { key: "research", href: "#research" },
  { key: "work",     href: "#work" },
  { key: "contact",  href: "#contact" },
] as const

export function Navigation() {
  const { lang, setLang, t } = useLang()
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navKeys.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 150

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 py-4">

        {/* Mobile: menu toggle + lang toggle */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "en" ? "中" : "EN"}
          </button>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (lang === "en" ? "Close" : "关闭") : (lang === "en" ? "Menu" : "菜单")}
          </button>
        </div>

        {/* Desktop: centered nav + lang toggle on right */}
        <div className="hidden md:flex relative items-center justify-center">
          <div className="flex items-center gap-8 font-mono text-xs tracking-[0.2em] uppercase">
            {navKeys.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`transition-all duration-300 hover:text-foreground ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="absolute right-0 font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
          >
            {lang === "en" ? "中" : "EN"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-center gap-4 pb-2">
            {navKeys.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:text-foreground ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {t.nav[item.key]}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="h-px bg-foreground/20 mx-6" />
    </nav>
  )
}
