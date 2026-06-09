export type WorkDetail = {
  id: string
  heroImage: string
  collageImages?: { src: string; rotate: number }[]
  embedCode?: string
  essay?: {
    bgColor: string
    en: { title: string; paragraphs: string[]; fadeNote: string }
    zh: { title: string; paragraphs: string[]; fadeNote: string }
  }
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
  {
    id: "eulogy-for-breathing",
    heroImage: "",
    essay: {
      bgColor: "#F5F0E8",
      en: {
        title: "Eulogy for Breathing",
        paragraphs: [
          "One summer afternoon during my elementary school vacation, I twitched my nose and suddenly exclaimed, and realized— I was breathing. After all, human breathing doesn't fit into standard time units like seconds or minutes—concepts an elementary school student can easily grasp. Therefore, at that time, I couldn't precisely quantify the frequency the gentle tickling airflow brushing against my skin under my nose. Yet I was still excitedly telling everyone in my family about my grand discovery, firmly declaring that I had never breathed before in my life, and I even asked, \"Wait, you all breathe too?\"",
          "Breathing is the most natural, unconscious act, yet for every single second of those days, my nose felt novel and unfamiliar. I couldn't stop sensing the flow of air. I fixated on my breathing, my overly excited nasal epithelial cilia receptors accidentally colliding with the rancid cooking oil that had sat in the kitchen for too long. A trap. Ah, a trap—in which a sluggish octopus finally realizes that its suction cups are actually two thousand miniature brains, each with countless nerve cells and independent sensory abilities. A person, upon realizing they are intensely reading, breaks out of the flow state. The same happens with me breathing—once noticed, its natural rhythm is disrupted. From room to room, I drifted on light feet, led by my nose all day long. My nasal cavity, overwhelmed by too much attention, grew cold. Like a flood rushing into my brain, making me wonder: \"How should I breathe for the rest of my life?\"",
        ],
        fadeNote: "© Ziyun Qi 2025 · Contact for full text",
      },
      zh: {
        title: "呼吸悼词",
        paragraphs: [
          "小学暑假的一天下午，我抽动鼻子，突然大叫，发现自己在呼吸。",
          "毕竟人类呼吸并不按照那种「毫秒」、「秒」、「分」之类的，一个小学生能掌握的标准时间单位进行，所以当时我无法准确的概括那些轻轻痒痒划过皮肤的气流的频率。但是我依旧激动地和家里每一个人讲述我最大的发现，确信地表示之前的人生绝对没有在呼吸，也问，原来你们也在呼吸？",
          "呼吸是最自然、最无意识的动作，但那几天的每一秒钟，我的鼻子变得新奇又陌生，无法停止感受气的流动。我固执地认真呼吸，极度亢奋的鼻腔顶部上皮中的毛状纤毛上的感受器不小心撞上了厨房放置太久的哈喇味食用油。陷阱。嗨，陷阱里是一只迟钝的章鱼终于发现它的吸盘其实是2千个卫脑，原来每一个都有无数的神经细胞和独立的感知能力。就像人在意识到正在专注阅读的瞬间就会跳出心流状态，我那时对呼吸的关注也很快打破了它的自然节奏。从房间到房间，我两脚轻飘，一整天被鼻子牵着走。鼻腔因为获得了太多的关注而发凉。像有一条大水涌入大脑，我开始思考：接下来的人生我应该怎么呼吸？",
        ],
        fadeNote: "© 戚紫云 2025 · 可联系作者获取全文",
      },
    },
    en: {
      title: "Eulogy for Breathing",
      description: "",
      images: [],
    },
    zh: {
      title: "呼吸悼词",
      description: "",
      images: [],
    },
  },
]

export function getWorkDetail(id: string): WorkDetail | undefined {
  return workDetails.find((d) => d.id === id)
}
