"use client"

import Image from "next/image"

type Lang = "en" | "zh"

const copy = {
  zh: {
    developmentLabel: "研究进展",
    development:
      "这个项目最初是一篇对郑波《蕨恋》的课程论文。早期写作主要从后人类主义与酷儿生态学出发；在准备 2026 年 UCSD 文学系研究生会议的过程中，我开始重新追问：这片森林为什么必须在台湾？蕨类在当地是谁的食物、知识与历史？网站呈现的是这次继续思考后的研究路径，而不是一篇已经封闭的定稿。",
    contentNote: "图像提示：下方包含郑波《蕨恋》的作品静帧，涉及身体与跨物种亲密。",
    sections: [
      {
        number: "01",
        title: "台湾、蕨类与地方记忆",
        body:
          "蕨类在作品里并不是一种可以被随意替换的“自然背景”。它连着阿美族的饮食与植物知识、不同历史时期形成的植物分类、迁徙中的生存经验，以及公共文化对某些植物的选择与遗忘。蕨类在人们的日常生活里亲密而寻常，却很少被当作一种值得讲述的存在。把这些地方经验放回作品以后，跨物种亲密就不再只是抽象的想象，而成为一段有具体来处的关系。",
      },
      {
        number: "02",
        title: "食欲与情欲",
        body:
          "在《蕨恋》第二章里，鸟巢蕨既被触摸，也被吃下。进食通常被视作理所当然的植物使用方式；情色化的接触却让观众不适。两者被放进同一个场景后，食物、身体、欲望与消费之间原本稳定的边界开始松动。作品的力量不在于把植物变成人，而在于让观看者暂时无法确定：谁是主体，什么是亲密，何时亲密已经变成占用。",
      },
      {
        number: "03",
        title: "孢子、繁殖与时间",
        body:
          "会议版本也修正了我早期对蕨类繁殖的过度简化。蕨类并非“无性”的象征：孢子不是种子或精子，而是世代交替中的一个阶段；配子体、卵与精子仍然参与其中，繁殖依赖水、表面与时机。真正具有酷儿潜能的，并不是把蕨类想象成没有性，而是看到繁殖如何分布在不同尺度、身体与时间之中。",
      },
      {
        number: "04",
        title: "亲密、占有与伦理",
        body:
          "蕨类不能用人的语言表示同意、拒绝或解释自己；人类仍然掌握表演、拍摄与阐释的权力。因此，跨物种欲望并不会自动成为一种更道德的关系。这个研究最后抵达的不是和谐共生的答案，而是一种“接近而不占有”的实践：承认亲近不等于平等，感动不等于理解，触碰也不等于拥有。",
      },
    ],
    images: {
      installation: "《蕨恋》展览现场，FACT Liverpool Biennial 2021。摄影：Rob Battersby；图片来源：Liverpool Biennial。",
      contact: "郑波，《蕨恋》作品静帧。图片来源：zhengbo.org。",
      forest: "郑波，《蕨恋》作品静帧。图片来源：zhengbo.org。",
    },
  },
  en: {
    developmentLabel: "Research development",
    development:
      "This project began as a course paper on Zheng Bo’s Pteridophilia. The early draft approached the work mainly through posthumanism and queer ecology. While preparing for the 2026 UCSD Department of Literature Graduate Conference, I returned to a more situated question: why must this forest be in Taiwan, and whose food, knowledge, and history does the fern carry? This page traces that continuing inquiry rather than presenting the draft as a closed, final paper.",
    contentNote: "Image note: the following section includes artwork stills involving bodies and interspecies intimacy.",
    sections: [
      {
        number: "01",
        title: "Taiwan, Ferns, and Local Memory",
        body:
          "The fern is not an interchangeable natural backdrop. It is connected to Amis food and plant knowledge, botanical classifications formed across different historical periods, experiences of migration and survival, and the ways public culture chooses to remember some plants while overlooking others. Familiar in everyday life yet rarely treated as something worth narrating, the fern turns cross-species intimacy from an abstract idea into a relationship with a particular place and history.",
      },
      {
        number: "02",
        title: "Appetite and Desire",
        body:
          "In Chapter Two of Pteridophilia, a bird’s-nest fern is both erotically touched and eaten. Eating plants is normalized; erotic contact produces discomfort. Placing the two acts in one scene unsettles the boundaries among food, body, appetite, desire, and consumption. The work’s force lies not in making the plant human, but in making the viewer unsure who is subject, what counts as intimacy, and when intimacy becomes use.",
      },
      {
        number: "03",
        title: "Spores, Reproduction, and Time",
        body:
          "The conference version also corrected an earlier simplification of fern reproduction. Ferns are not simply “asexual”: a spore is neither a seed nor sperm but one phase within alternation of generations, with gametophytes, eggs, sperm, water, surfaces, and timing all involved. Its queer potential lies not in imagining sex away, but in seeing reproduction distributed across scales, bodies, and temporalities.",
      },
      {
        number: "04",
        title: "Intimacy, Possession, and Ethics",
        body:
          "The fern cannot consent, refuse, or explain itself in human language, while humans retain the power to perform, film, and interpret. Cross-species desire is therefore not automatically ethical. The research arrives not at harmonious coexistence but at proximity without appropriation: a practice that recognizes that closeness is not equality, affect is not understanding, and touch is not possession.",
      },
    ],
    images: {
      installation: "Pteridophilia installation view, FACT Liverpool Biennial 2021. Photograph by Rob Battersby; image via Liverpool Biennial.",
      contact: "Zheng Bo, Pteridophilia, film still. Image via zhengbo.org.",
      forest: "Zheng Bo, Pteridophilia, film still. Image via zhengbo.org.",
    },
  },
} as const

export function FernResearchStory({ lang }: { lang: Lang }) {
  const content = copy[lang]

  return (
    <section className="mb-24 border-t border-foreground/15 pt-12">
      <div className="mb-16 grid gap-6 md:grid-cols-[9rem_1fr]">
        <p className="font-mono text-[9px] tracking-[0.22em] uppercase text-muted-foreground">
          {content.developmentLabel}
        </p>
        <p className="text-base leading-[1.9] text-foreground/78">{content.development}</p>
      </div>

      <figure className="mb-16">
        <div className="relative aspect-[16/9] overflow-hidden bg-black">
          <Image
            src="/images/research/ferns-touch-flesh/installation-view.jpg"
            alt="Pteridophilia installation view"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        </div>
        <figcaption className="mt-3 font-mono text-[8px] leading-relaxed tracking-[0.12em] text-muted-foreground">
          {content.images.installation}
        </figcaption>
      </figure>

      <p className="mb-16 border-y border-foreground/15 py-4 font-mono text-[9px] leading-relaxed tracking-[0.16em] uppercase text-muted-foreground">
        {content.contentNote}
      </p>

      <div className="space-y-20">
        {content.sections.map((section, index) => (
          <article key={section.number}>
            <div className="grid gap-6 md:grid-cols-[9rem_1fr]">
              <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
                {section.number}
              </span>
              <div>
                <h2 className="mb-5 text-2xl font-light tracking-wide">{section.title}</h2>
                <p className="text-base leading-[2] text-foreground/78">{section.body}</p>
              </div>
            </div>

            {index === 1 && (
              <figure className="mt-10 md:ml-[11.5rem]">
                <div className="relative aspect-[16/9] overflow-hidden bg-foreground/10">
                  <Image
                    src="/images/research/ferns-touch-flesh/leaf-contact.jpg"
                    alt="A performer holding a leaf close to his face"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 528px"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[8px] leading-relaxed tracking-[0.12em] text-muted-foreground">
                  {content.images.contact}
                </figcaption>
              </figure>
            )}

            {index === 3 && (
              <figure className="mt-10 md:ml-[11.5rem]">
                <div className="relative aspect-[16/9] overflow-hidden bg-foreground/10">
                  <Image
                    src="/images/research/ferns-touch-flesh/forest-contact.jpg"
                    alt="Two performers surrounded by ferns"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 528px"
                  />
                </div>
                <figcaption className="mt-3 font-mono text-[8px] leading-relaxed tracking-[0.12em] text-muted-foreground">
                  {content.images.forest}
                </figcaption>
              </figure>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
