export type WorkDetail = {
  id: string
  heroImage: string
  collageImages?: { src: string; rotate: number }[]
  embedCode?: string
  en: {
    title: string
    description: string
    images: { src: string; caption?: string }[]
  }
  zh: {
    title: string
    description: string
    images: { src: string; caption?: string }[]
  }
}

export const workDetails: WorkDetail[] = [
  {
    id: "film-photography",
    heroImage: "/images/creative/film/Capture One Catalog0048.jpg",
    en: {
      title: "Film Photography",
      description: "Black and white analog photography shot on 35mm film.",
      images: [
        { src: "/images/creative/film/Capture One Catalog0009.jpg" },
        { src: "/images/creative/film/Capture One Catalog0013.jpg" },
        { src: "/images/creative/film/Capture One Catalog0100.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0016.jpg" },
        { src: "/images/creative/film/Capture One Catalog0029.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0033.jpg" },
        { src: "/images/creative/film/Capture One Catalog0045.jpg" },
        { src: "/images/creative/film/Capture One Catalog0047.jpg" },
        { src: "/images/creative/film/Capture One Catalog0051.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0071 2.JPG" },
        { src: "/images/creative/film/Capture One Catalog0080.jpg" },
      ],
    },
    zh: {
      title: "胶片摄影",
      description: "以35毫米胶卷拍摄的黑白模拟影像。",
      images: [
        { src: "/images/creative/film/Capture One Catalog0009.jpg" },
        { src: "/images/creative/film/Capture One Catalog0013.jpg" },
        { src: "/images/creative/film/Capture One Catalog0100.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0016.jpg" },
        { src: "/images/creative/film/Capture One Catalog0029.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0033.jpg" },
        { src: "/images/creative/film/Capture One Catalog0045.jpg" },
        { src: "/images/creative/film/Capture One Catalog0047.jpg" },
        { src: "/images/creative/film/Capture One Catalog0051.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0071 2.JPG" },
        { src: "/images/creative/film/Capture One Catalog0080.jpg" },
      ],
    },
  },
  {
    id: "poem-tarot",
    heroImage: "/images/creative/POEM TAROT/8012.jpg",
    en: {
      title: "Poem Tarot",
      description: "Poem Tarot is a roaming public writing practice. We set up at street markets and public spaces—Hong Kong's Central Market among them—reading tarot for strangers, selling handwritten poems, and bringing photographs along.\n\nStarted in 2022. Our cards are born from the original poetry and images of two makers. The practice moves between divination and literature.\n\nOngoing. Hong Kong and beyond.",
      images: [
        { src: "/images/creative/POEM TAROT/29383be1dad830bd1c16bdce1fbd77.JPG" },
        { src: "/images/creative/POEM TAROT/5e096d481d0e536f418f0e2573975f.JPG" },
        { src: "/images/creative/POEM TAROT/a91efc0fa53d10244d693ce8a9ed4d.JPG" },
        { src: "/images/creative/POEM TAROT/d35bb0529923a315e1b3537635ec58.JPG" },
      ],
    },
    zh: {
      title: "诗塔罗",
      description: "诗塔罗是一个流动的公共写作计划。我们在街市和公共空间摆摊，比如香港中环市集，为陌生人读牌、售卖手写诗、也带着摄影作品。\n\n始于2022年。我们的牌面诞生于两位制作者的原创诗歌与影像，这个实践游走于占卜与文学之间。\n\n持续进行中。香港及其他地方。",
      images: [
        { src: "/images/creative/POEM TAROT/29383be1dad830bd1c16bdce1fbd77.JPG" },
        { src: "/images/creative/POEM TAROT/5e096d481d0e536f418f0e2573975f.JPG" },
        { src: "/images/creative/POEM TAROT/a91efc0fa53d10244d693ce8a9ed4d.JPG" },
        { src: "/images/creative/POEM TAROT/d35bb0529923a315e1b3537635ec58.JPG" },
      ],
    },
  },
  {
    id: "field-ferment-zine",
    heroImage: "",
    collageImages: [
      { src: "/images/creative/Zine/zine1.png", rotate: -3 },
      { src: "/images/creative/Zine/zine2.png", rotate: 2 },
      { src: "/images/creative/Zine/zine3.png", rotate: -1.5 },
    ],
    embedCode: `<div style="position:relative;padding-top:max(60%,324px);width:100%;height:0;"><iframe style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;" src="https://online.fliphtml5.com/JMMZine/yyqt/" title="January, March, March; A Farm Working Zine_compressed" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>`,
    en: {
      title: "Field & Ferment Zine: January, March, March",
      description: "A zine about cultivation, people, and plants—documenting fieldwork at Duke Campus Farm and Chinese-operated farms across North Carolina. Through interviews and sensory observation, it explores how minority communities preserve memory, kinship, and food culture through the labor of the land. Duke University, Spring 2026.",
      images: [],
    },
    zh: {
      title: "田野与发酵：一月，三月，三月",
      description: "一本关于种植、人与植物的zine，记录在杜克校园农场及北卡罗来纳州华裔农场的田野工作。通过访谈与感官观察，讨论少数族裔社群如何在劳动中，留存记忆、亲缘与饮食文化。杜克大学，2026年春。",
      images: [],
    },
  },
]

export function getWorkDetail(id: string): WorkDetail | undefined {
  return workDetails.find((d) => d.id === id)
}
