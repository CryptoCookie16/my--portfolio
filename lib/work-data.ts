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
        { src: "/images/creative/film/Capture One Catalog0016.jpg" },
        { src: "/images/creative/film/Capture One Catalog0029.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0033.jpg" },
        { src: "/images/creative/film/Capture One Catalog0051.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0071 2.JPG" },
        { src: "/images/creative/film/Capture One Catalog0100.jpeg" },
      ],
    },
    zh: {
      title: "胶片摄影",
      description: "以35毫米胶卷拍摄的黑白模拟影像。",
      images: [
        { src: "/images/creative/film/Capture One Catalog0009.jpg" },
        { src: "/images/creative/film/Capture One Catalog0016.jpg" },
        { src: "/images/creative/film/Capture One Catalog0029.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0033.jpg" },
        { src: "/images/creative/film/Capture One Catalog0051.jpeg" },
        { src: "/images/creative/film/Capture One Catalog0071 2.JPG" },
        { src: "/images/creative/film/Capture One Catalog0100.jpeg" },
      ],
    },
  },
]

export function getWorkDetail(id: string): WorkDetail | undefined {
  return workDetails.find((d) => d.id === id)
}
