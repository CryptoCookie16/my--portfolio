export type WorkDetail = {
  id: string
  heroImage: string
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
]

export function getWorkDetail(id: string): WorkDetail | undefined {
  return workDetails.find((d) => d.id === id)
}
