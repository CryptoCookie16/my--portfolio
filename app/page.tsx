import { Navigation } from "@/components/navigation"
import { HomeSection } from "@/components/home-section"
import { AboutSection } from "@/components/about-section"
import { ResearchSection } from "@/components/research-section"
import { CreativeWorkSection } from "@/components/creative-work-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HomeSection />
      <AboutSection />
      <ResearchSection />
      <CreativeWorkSection />
      <ContactSection />
    </main>
  )
}
