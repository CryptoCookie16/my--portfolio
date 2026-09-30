"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

type PaperSection = {
  id: string
  number?: string
  title: string
  introduction?: string
  paragraphs?: string[]
  subsections?: { title: string; paragraphs: string[] }[]
  figure?: { src: string; caption: string }
}

const sections: PaperSection[] = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      `As a melting pot of diverse ethnicities and religions, Hong Kong has long integrated various religious sites into urban life. Some are rather low-key, with inconspicuous entrances—such as the private shrines found within the flats of North Point; others are magnificent, expansively sited and bustling with worshippers, such as the Wong Tai Sin Temple in Kowloon.`,
      `Yet, between the everyday spaces of secular life and the formal, sacred temple architecture, there exists another category of structures: roadside shrines. They stand out strikingly on the streets yet blend seamlessly into everyday life, occupying the most inconspicuous nooks and crannies of the urban landscape. They can appear almost anywhere—at bustling crossroads, along the sides of alleyways, at bus stops, at subway exits, beside construction site hoardings, beneath motorway bridges, and even in the passageways of shopping centers.`,
      `Hong Kong’s roadside shrines reflect the city’s incredibly rich diversity of religions, and their presence adds a sense of sacredness to the urban scene. The deities enshrined within these shrines draw from multiple traditions: Buddhist figures such as Guanyin Bodhisattva and Earth Store Bodhisattva; Taoist deities like Lü Dongbin and Wong Tai Sin; folk deities such as the Earth God, Mazu, and Tam Kung; and even Confucian figures like Guan Yu. More notably, it is extremely common for a single shrine to honor deities from different faiths at once. On Peel Street in Central, Hong Kong, there is a Pak Kung Temple nestled in the corner of a staircase. The temple is no larger than a doorframe; its red iron railings open out onto the staircase, with no door and no walls, creating no physical barrier between it and the passing pedestrians. Fresh oranges and lilies adorn the altar, whilst the incense burner is piled high with thick layers of ash—traces left by countless offerings. Taking this shrine as an example, we can see that what Hong Kong’s roadside shrines lack is precisely what theories of sacred space hold to be essential for the existence of the sacred: boundaries. Mircea Eliade argued that sacred space is constituted through its separation from the profane (Eliade 1959), Jonathan Z. Smith contended that ritual produces the sacred by concentrating meaning within bounded spaces (Smith 1987). Yet Hong Kong’s roadside shrines directly challenge this premise—they have no walls, no thresholds; nestled beneath staircases, on street corners, or at the ends of alleys, they possess no recognizable border from the surrounding secular space, yet they persist, their incense burning continuously for decades. This paper thus poses a question: what sustains a sacred space without boundaries?`,
      `Analyzing several Hong Kong shrines, this paper aims to demonstrate that “sacredness” can persist even in the absence of traditional architectural boundaries. Although theories of “sacred space” typically associate sacredness with fortified segregation, Hong Kong’s roadside shrines demonstrate a tactical logic of porosity. By examining the bodily practices of caretakers and believers, the shrines’ appropriation of urban gaps, and the characteristics of hybrid worship, this paper will reveal how these shrines maintain their sacredness.`,
    ],
  },
  {
    id: "bodily-practice",
    number: "01",
    title: "Shrines: A Place for Bodily Practice that Sanctifies Everyday Life",
    introduction:
      "In Hong Kong’s street shrines, the maintenance of sacred space does not rely on physical structures of steel and concrete, but is largely produced by the daily bodily practices of custodians and devotees.",
    subsections: [
      {
        title: "i. Custodians",
        paragraphs: [
          `As noted in Siu & Kong’s paper, these temporary shrines have two origins. Some are established by individuals or groups to express gratitude for answered prayers or to ensure community harmony (Siu and Kong, 2014). Others arise when old homes are demolished or elders pass away, and the younger generation no longer venerates the deities’ statues left behind. For the older generation, religious statues must never be discarded disrespectfully, so these statues are either gifted to another “custodian” or moved to auspicious locations, such as under a tree or beside a large rock by the roadside. It is at this point that the custodians step in to care for the statues. They erect shelters to protect them from the rain, dust them off, and place incense burners before them, thereby imbuing these discarded objects with new meaning; in this way, what was once abandoned is transformed once again into an object of worship.`,
          `The intersection of Nam Ning Street and Chengtu Road in Aberdeen is a bustling crossroads located within the central commercial and residential district of Aberdeen. On the sidewalk outside the HSBC bank stands the Sea King Temple, a miniature shrine measuring only about one meter in height and width. Surprisingly, it has a history of 79 years and is maintained by 90-year-old Granny Kwok, along with her fisherman relatives and local neighbors.`,
          `In a street interview published online, Granny Kwok shared: “I’ve always been a fisherwoman. The deity statue was found by someone in the fishing village. I’ve been here for over fifty years now, and we pooled our money to build this shrine… I come here every day and stay until six o’clock.”`,
          `This clearly demonstrates that the custodians’ practices are both continuous and constructive. As Paul Connerton points out, the transmission of social memory and spatial order often does not rely on texts but on “incorporating practice” (Connerton, 1989). For the custodians of these shrines, the daily morning cleaning, changing the water, regularly repairing, and the habit of burning incense at specific times are not merely simple household chores, but rather a performance of “habit-memory” (Connerton, 1989). These repetitive bodily movements carve out an invisible yet distinct ritual boundary amidst the mundane, noisy city streets, demonstrating the ongoing sacred “system of difference.”`,
          `It is also worth noting that custodians are not merely caretakers, but also the “informal curators” of these spaces. As custodians are typically elderly individuals, this act of maintenance provides them with a social status as “curators of dignity” (Siu & Kong, 2014). In fast-paced, productivity-driven capitalist cities, the elderly regarded as “economically useless” and discarded deities viewed as “redundant” have formed a symbiotic relationship on the city’s fringes. Through their sustained physical engagement, the guardians not only maintain the deities’ abodes but also reclaim a “habitable” spiritual sanctuary for themselves and their communities within the alienating urban jungle.`,
        ],
      },
      {
        title: "ii. Devotees",
        paragraphs: [
          `Alongside the sustained maintenance efforts of custodians, there are also sporadic and interactive practices by ordinary devotees, whose further collective actions centered on the deities have reinforced the boundaries of these informal places of worship, gradually endowing them with the characteristics and significance of shrines. By pausing in front of the shrines, offering gifts, or bowing, they affirm the “system of difference” established by the custodians, thereby “activating” the sacred space already established by them. The devotees’ actions establish the site’s communal function, transforming it from a privately maintained point into a public space for the community.`,
          `While devotees maintain the shrines, the shrines often support the devotees in return. Devotees’ practices are often driven more by utilitarianism or traditional inertia. Hong Kongers’ religious practices are highly pragmatic: they are not driven by adherence to a theological system, but rather by concrete, practical goals: seeking wealth, peace of mind, success in exams, and business prosperity. These practices embody the logic of “diffuse religion” described by C.K. Yang (Yang, 1961), wherein religious practices are integrated into secular life as a means of navigating fate and fortune. Street shrines are ubiquitous, embedded in daily life, and require no formal religious commitment. These characteristics of low barriers to entry and high accessibility make street shrines the most natural material manifestation of diffuse religion in the city.`,
          `This chapter explores how, relying on the bodily memories of custodians and devotees, street shrines “perform” the boundaries of sacred space even without physical walls. As long as these bodily rhythms are continuously repeated in daily life, sacred space is sustained in a social sense, without needing to rely on grand architectural structures.`,
          `Although Jonathan Z. Smith argues that the sacredness of a place is not an intrinsic property but rather the result of human “put in place” (Smith, 1987), Smith places great emphasis on the strength of physical boundaries when analyzing temple spaces, such as the wall in the Book of Ezekiel described as “more than ten feet thick.” In contrast, the case of Hong Kong also challenges Smith’s theory. The custodians of the shrines demonstrate that habitual memories can transcend the lack of architectural form: through custodians’ actions such as erecting rain shelters and repairing, along with devotees’ daily worship, they continuously maintain and activate the sacredness of these street-side shrine spaces.`,
        ],
      },
    ],
  },
  {
    id: "urban-cracks",
    number: "02",
    title: "Shrines as Sacred Spaces Emerging from the Cracks of the City",
    paragraphs: [
      `Beyond the human practices that endow shrines with sacredness, shrines as architectural structures also occupy a unique position within Hong Kong’s urban architecture. This chapter seeks to discuss how shrines produce their sacredness through the process of tactically occupying the residual spaces of urban planning under the control of power structures.`,
      `The production of space in the city is a process of power dynamics. Lefebvre argued that space is not a neutral container but a product of social production (Lefebvre, 1991). Modern urban planning typically generates an “abstract space”—one that is exclusionary, functional, and governed by power structures such as the government and capital (Lefebvre, 1991). Hong Kong is a quintessential embodiment of this logic.`,
      `Since the colonial era, land use in Hong Kong has been strictly regulated by the Town Planning Board. Every plot of land is designated for specific functions including residential, commercial, or industrial use, and any activity exceeding the designated purpose is legally considered a violation. The Chinese Temples Ordinance, enacted in 1928, further brought religious spaces under state control. All Chinese temples were required to register with the Chinese Temples Committee, leaving unregistered religious sites in a legal gray area for a long time. At the same time, land resources in Hong Kong are extremely limited. The government relies on land sales to maintain fiscal revenue, and real estate development companies dominate the production and renewal of urban space. Furthermore, since the establishment of the Urban Renewal Authority in 2001, ongoing urban renewal efforts have led to the relocation or disappearance of numerous street-side shrines due to building demolitions. In a city shaped by both planning authority and the logic of capital, the existence of these street-side shrines becomes a structural aberration in itself.`,
      `Yet it is precisely within this highly controlled, abstract space that street shrines wedge themselves into the city’s cracks with a tactical posture. Michel de Certeau distinguishes between “strategy” and “tactics”: strategy belongs to power with a fixed territory, while tactics is the way in which the weak, lacking a fixed base, operate within the territory of the strong (de Certeau, 1984).`,
      `Street-side shrines possess no official spatial rights, yet through daily, repetitive practices, they “occupy” abstract places originally belonging to the government or commerce, transforming them into “living spaces” imbued with meaning. The Pak Kung Temple on Peel Street, mentioned at the beginning of this article, is a typical case of tactical resilience in the process of urban management: Pak Kung was originally a traditional Chinese medicine practitioner who set up his clinic at the bottom of a staircase on Elgin Street. He treated neighbors without charging consultation fees, and even provided free medical care and medicine. On the fifteenth day of the eighth lunar month one year, he attained nirvana. To commemorate him, the local community built a shrine at the staircase entrance where he had practiced and began to worship him there. In 1967, due to building demolition, the shrine was relocated to its current site. In this case, the Hong Kong street-side shrine is not a sacred structure fixed to a single location, but rather a practice capable of migrating, growing, and re-rooting within the city.`,
      `To some extent, this revises Eliade’s theory of “hierophany”. Eliade argued that sacred space breaks the homogeneity of profane space through “hierophany”, establishing an “absolute fixed point” amidst chaos. Hierophany either arises from the spontaneous transformation of ordinary objects, manifesting through stones, trees, or certain symbols, or it is “induced” through ritual (Eliade, 1959).`,
      `However, Hong Kong’s street shrines demonstrate another way of establishing fixed points: through tactical human practice, they deliberately and proactively create sacred anchoring points within the city’s cracks. The appearance of a single stick of incense creates a “rupture” in space. By establishing shrines in the dim, functional gaps of the city (like beneath staircases or beside large trees), one effectively establishes an “absolute fixed point” (a center) within the disordered “chaos” of the city, thereby achieving a process of “cosmicization” on a small scale.`,
      `Furthermore, the architectural form of street-side shrines challenges Mircea Eliade’s assertion that the constitution of sacred space must rely on a “break” and separation from the secular world (Eliade, 1959, 20–21). In Eliade’s discourse, sacred spaces often possess a strong “defensive” nature, requiring fortifications, walls, or distinct “thresholds” to ward off the surrounding “chaos” (Eliade, 1959, 25, 49).`,
      `Hong Kong’s street shrines demonstrate that sacredness does not seem to depend on isolation or protection. The Fuk Tak Ancient Temple in Hung Hom is a case in point: this ancient temple dedicated to the Earth God is said to have been built in the late Song Dynasty. With iron pillars instead of walls and corrugated zinc roofing, it is extremely small, yet stands right in the middle of the sidewalk on Bulkeley Street, completely exposed to the hustle and bustle of the street and the flow of pedestrians.`,
      `What is even more noteworthy is that while incense sticks in most temples are typically hung inside the temple, those in this ancient temple are hung directly on the street sign at the road intersection. Here, sacred objects have crossed the physical boundaries of the temple, lingering in the secular space of the street. Unprotected by walls, they are openly exposed to dust, noise, and the flow of everyday people. Yet rather than “defending” against the chaos of the city, the shrine seems to be “devouring” and transforming that chaos, revealing a quality of porosity.`,
    ],
    figure: {
      src: "/images/research/porous-sacred/incense-dock-street.jpg",
      caption: "Figure 1. Incense hung at the entrance of Fuk Tak Ancient Temple",
    },
  },
  {
    id: "parallel-cosmology",
    number: "03",
    title: "Shrines: A Parallel Cosmology Intruding into Everyday Life",
    paragraphs: [
      `While the first two chapters discussed the “maintainers” (custodians, devotees) and “sites of production” (urban cracks) of shrines, this section focuses on the “intrusion” that this spatial presence makes into society, particularly among ordinary passersby who possess no religious beliefs. Shrines are not merely physical entities; they also represent an informal, diffuse worldview that disrupts the monotonous logic of modern capitalist cities through sensory symbols.`,
      `The reason Hong Kong’s street shrines are able to permeate residents’ daily lives lies primarily in the low-threshold nature of diffuse religion itself. C.K. Yang points out that diffuse religion does not rely on an independent theological system, but rather permeates the various institutions and practices of daily life (Yang, 1961). Likewise, street shrines have no entry barriers, no doctrinal requirements, and do not demand that people identify as believers. So how exactly do these shrines interact with non-believers? As mentioned earlier, the emergence of a shrine represents a “rupture” in space, establishing an “absolute fixed point” (a center) within the disordered “chaos” of the city. This rupture carries intense sensory information—such as fragrance, the color red, offerings, and divine images. The moment someone “passes by,” the shrine, through its sensory presence, forcibly inserts a segment of “legend” or “mystery” into the passerby’s mundane sensory stream, creating a pause in their consciousness. This pause conveys a worldview that stands in contrast to the logic of the modern city.`,
      `The logic of the modern capitalist city is this: land is a commodity, space is functional, and death is the endpoint. The worldview presented by street shrines, however, is the opposite: land is spirit-filled and sovereign (the very existence of the Earth God is a declaration of this); sacredness makes place inclusive (mixed worship means that anyone and any deity can find a place here); and moral actions can transcend death and endure (after the Earth God’s death, his good deeds continue to exert influence on the streets through the practices of worshippers). This worldview does not demand faith from passersby, but it is acquired by them as an alternative way of understanding the world.`,
      `Furthermore, as a material anchor for collective memory, the shrine reveals an invisible “underground social network” in the city which enables this worldview to be passed down from generation to generation. Maurice Halbwachs noted that collective memory must be anchored within a spatial framework to endure (Halbwachs, 1992). For modern non-believers, the shrines also serve as a reminder of what once occurred on this land: that beneath this modern concrete jungle lies a layer of ancient, shared memory concerning the earth deity, fortune, and ancestors. For passersby without religious beliefs, when they walk past a shrine, that spot is no longer merely a functional intersection but a place overlaid with stories (de Certeau, 1984). In this sense, street-side shrines are not merely sacred spaces for the faithful believers, but memory devices for the entire city, quietly weaving an ancient worldview into the daily perceptions of every passerby.`,
    ],
  },
  {
    id: "conclusion",
    title: "Conclusion",
    paragraphs: [
      `In summary, this paper argues that the existence of street shrines in Hong Kong is not merely a remnant of folk beliefs in the modern metropolis, but also a practice of bottom-up place-making. This study identifies three aspects maintaining the survival of these boundary-less sacred spaces: first, the production of boundaries has shifted from architecture to behavior. Hong Kong’s street shrines demonstrate that the bodily practices repeated by custodians and devotees possess greater power than bricks and mortar, thereby constructing the boundaries of sacred space. Second, the nature of space has shifted from place to living space. Through the appropriation of abandoned deities and urban dead zones, shrines transform what were once cold, geometric spaces into social space. Finally, this spatial production is also sustained by the permeation of sensory symbols into the everyday perceptions of passersby, allowing people in the modern city to sense the presence of an invisible web of communal connection.`,
      `The persistence of street shrines in Hong Kong demonstrates that sacredness does not depend on enclosed fortresses, but is rather a production of relationships. Through its porosity, this sanctuary-without-walls successfully embeds its worldview into the visual flow and collective memory of people. The incense at the shrine endures, establishing them as resilient, inclusive, and humanly warm spiritual sites within the modern metropolis.`,
    ],
  },
]

const references = [
  "Eliade, Mircea. 1959. The Sacred and the Profane. New York: Harcourt.",
  "Smith, Jonathan Z. 1987. To Take Place: Toward Theory in Ritual. Chicago: University of Chicago Press.",
  "de Certeau, Michel. 1984. The Practice of Everyday Life. Berkeley: University of California Press.",
  "Connerton, Paul. 1989. How Societies Remember. Cambridge: Cambridge University Press.",
  "Lefebvre, Henri. 1991. The Production of Space. Oxford: Blackwell.",
  "Halbwachs, Maurice. 1992. On Collective Memory. Edited and translated by Lewis A. Coser. Chicago: University of Chicago Press.",
  "Yang, C.K. 1961. Religion in Chinese Society. Berkeley: University of California Press.",
  `Siu, King-Chung, and Thomas Kong. 2014. “Informal Religious Shrines: Curating Community Assets in Hong Kong and Singapore.” The International Journal of the Inclusive Museum 6(2): 89–104.`,
]

function Paragraphs({ paragraphs }: { paragraphs?: string[] }) {
  if (!paragraphs) return null

  return (
    <div className="space-y-7">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="text-[16px] leading-[2] text-foreground/78">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export function PorousSacredPaper({ lang }: { lang: "en" | "zh" }) {
  const paperRef = useRef<HTMLElement>(null)
  const [isPaperVisible, setIsPaperVisible] = useState(false)

  useEffect(() => {
    const paper = paperRef.current
    if (!paper) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsPaperVisible(entry.isIntersecting),
      { rootMargin: "-80px 0px -20% 0px", threshold: 0 },
    )

    observer.observe(paper)
    return () => observer.disconnect()
  }, [])

  const labels =
    lang === "zh"
      ? { eyebrow: "论文全文 · 英文原文", contents: "目录", references: "参考文献", top: "返回全文开头" }
      : { eyebrow: "Full paper", contents: "Contents", references: "References", top: "Back to full text" }

  return (
    <article ref={paperRef} id="full-paper" className="scroll-mt-24 pt-10">
      <header className="mb-16">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-muted-foreground block mb-6">
          {labels.eyebrow}
        </span>
        <h2 className="text-3xl md:text-[2.65rem] font-light leading-[1.18] tracking-wide text-balance">
          The Porous Sacred: Roadside Shrines and the Production of Sacred Space in Hong Kong
        </h2>
        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[9px] tracking-[0.18em] uppercase text-muted-foreground">
          <span>Ziyun Qi</span>
          <span aria-hidden="true">·</span>
          <span>Social Space and Time</span>
          <span aria-hidden="true">·</span>
          <span>April 2026</span>
        </div>
      </header>

      <nav
        aria-label={labels.contents}
        className={`mb-24 border-y border-foreground/12 py-7 min-[1180px]:fixed min-[1180px]:left-6 min-[1240px]:left-10 min-[1180px]:top-1/2 min-[1180px]:z-30 min-[1180px]:mb-0 min-[1180px]:max-h-[76vh] min-[1180px]:w-56 min-[1180px]:-translate-y-1/2 min-[1180px]:overflow-y-auto min-[1180px]:border-y-0 min-[1180px]:border-l min-[1180px]:border-foreground/15 min-[1180px]:bg-background/90 min-[1180px]:py-2 min-[1180px]:pl-5 min-[1180px]:pr-3 min-[1180px]:backdrop-blur-sm min-[1180px]:transition-[opacity,transform] min-[1180px]:duration-500 ${
          isPaperVisible
            ? "min-[1180px]:translate-x-0 min-[1180px]:opacity-100"
            : "min-[1180px]:pointer-events-none min-[1180px]:-translate-x-3 min-[1180px]:opacity-0"
        }`}
      >
        <p className="font-mono text-[9px] tracking-[0.24em] uppercase text-muted-foreground mb-5">
          {labels.contents}
        </p>
        <ol className="space-y-3">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="group flex items-baseline gap-4 text-sm leading-relaxed text-foreground/68 hover:text-foreground transition-colors min-[1180px]:gap-3 min-[1180px]:text-[12px]"
              >
                <span className="w-5 shrink-0 font-mono text-[8px] tracking-[0.15em] text-muted-foreground/60">
                  {section.number ?? "—"}
                </span>
                <span className="border-b border-transparent group-hover:border-foreground/30">
                  {section.title}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#references"
              className="group flex items-baseline gap-4 text-sm leading-relaxed text-foreground/68 hover:text-foreground transition-colors min-[1180px]:gap-3 min-[1180px]:text-[12px]"
            >
              <span className="w-5 shrink-0 font-mono text-[8px] tracking-[0.15em] text-muted-foreground/60">—</span>
              <span className="border-b border-transparent group-hover:border-foreground/30">{labels.references}</span>
            </a>
          </li>
        </ol>
      </nav>

      <div className="space-y-28">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-28">
            <header className="mb-10">
              {section.number && (
                <span className="font-mono text-[9px] tracking-[0.25em] text-muted-foreground block mb-4">
                  {section.number}
                </span>
              )}
              <h3 className="text-2xl md:text-3xl font-light leading-snug tracking-wide">
                {section.title}
              </h3>
            </header>

            {section.introduction && (
              <p className="mb-12 border-l border-foreground/25 pl-6 text-lg leading-[1.85] text-foreground/72 italic">
                {section.introduction}
              </p>
            )}

            <Paragraphs paragraphs={section.paragraphs} />

            {section.subsections?.map((subsection) => (
              <section key={subsection.title} className="mt-16 first:mt-0">
                <h4 className="mb-8 text-lg font-medium tracking-wide">{subsection.title}</h4>
                <Paragraphs paragraphs={subsection.paragraphs} />
              </section>
            ))}

            {section.figure && (
              <figure className="mt-16">
                <div className="relative aspect-[1.24/1] overflow-hidden bg-foreground/5">
                  <Image
                    src={section.figure.src}
                    alt="Spiral incense hanging beside the Dock Street sign outside Fuk Tak Ancient Temple"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
                <figcaption className="mt-4 font-mono text-[9px] leading-relaxed tracking-[0.12em] text-muted-foreground">
                  {section.figure.caption}
                </figcaption>
              </figure>
            )}
          </section>
        ))}

        <section id="references" className="scroll-mt-28">
          <h3 className="text-2xl font-light tracking-wide mb-10">{labels.references}</h3>
          <ol className="space-y-5">
            {references.map((reference, index) => (
              <li key={index} className="pl-6 -indent-6 text-sm leading-[1.85] text-foreground/68">
                {reference}
              </li>
            ))}
          </ol>
        </section>
      </div>

      <div className="mt-28 border-t border-foreground/10 pt-8 text-right">
        <a
          href="#full-paper"
          className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
        >
          ↑ {labels.top}
        </a>
      </div>
    </article>
  )
}
