"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Lang = "en" | "zh"

export const dict = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      research: "Research",
      work: "Work",
      contact: "Contact",
    },
    home: {
      tagline: "Writer · Researcher · Photographer · Editor",
    },
    about: {
      sectionTitle: "About",
      bio: "detouring the world",
      p1: "What if we kept paying attention to the lives and presences left out of official narratives? Plants encountered anew, food practices, poetry; tiny shrines nestled into bustling streets; a Chinese ecological farm appearing, unexpectedly, in a suburb across the ocean.\n\nWhat if erosion, breakage, and decay—rather than novelty, growth, and progress—became the ground from which we thought about the relationship between society and technology? Ruins, patches, old cassette tapes, or the unsettling smells of fermented food?",
      p2: "In spring 2026, I independently made the digital ethnographic zine January, March, March, using embodied, multisensory writing to record everyday scenes of multispecies coexistence on a farm.\n\nWhere Ferns Touch Flesh explores forms of intimacy that cross species boundaries and decenter the human. I presented the project at the University of California, San Diego later that year.\n\nSome of my creative work grows out of these ideas too: short writings, black-and-white film photographs, zines, and a tarot deck of my own...",
      p3: "They are all my beloved side paths.",
    },
    research: {
      sectionTitle: "Research",
      footer: "— Selected projects, 2019–present —",
      projects: [
        {
          id: "roadside-shrines-hong-kong",
          number: "01",
          title: "Roadside Shrines of Hong Kong",
          titleSub: null as string | null,
          description:
            "The Porous Sacred, my formal MA capstone project, examines Hong Kong's roadside shrines as porous spaces sustained by everyday practice.",
          tags: ["Urban Anthropology", "Space", "Religion"],
        },
        {
          id: "where-ferns-touch-flesh",
          number: "02",
          title: "Where Ferns Touch Flesh",
          titleSub: null as string | null,
          description:
            "Presented at UCSD Graduate Conference, May 2026. Analysis of Zheng Bo's Pteridophilia through posthumanism, queer ecology, and affect theory.",
          tags: ["Queer Ecology", "Affect Theory", "Art Criticism"],
        },
        {
          id: "waiting-for-a-diagnosis",
          number: "03",
          title: "Waiting for a Diagnosis",
          titleSub: null as string | null,
          description:
            "Policy-oriented research on the underdiagnosis of ADHD among adult women and gender bias in diagnostic frameworks.",
          tags: ["Gender", "Disability Studies", "Public Health"],
        },
        {
          id: "fern-fieldwork",
          number: "04",
          title: "Fern Fieldwork",
          titleSub: null as string | null,
          description:
            "Preliminary field research; its final form is still open.",
          tags: ["Multispecies Ethnography", "Sensory Methods", "Plant Studies"],
        },
      ],
    },
    work: {
      sectionTitle: "Creative Work",
      projects: [
        {
          id: "film-photography",
          title: "Film Photography Portfolio",
          subtitle: "",
          filmType: "Personal Image Practice",
          previewImage: "/images/creative/film/Capture One Catalog0033.jpg",
        },
        {
          id: "poem-tarot",
          title: "Poem Tarot at A Room",
          subtitle:
            "Founder and project lead: designed the participatory experience, visual identity, and on-site installation; welcomed 60+ visitors over two days.",
          filmType: "Public Interactive Art Project",
          previewImage: "/images/creative/POEM TAROT/8012.jpg",
        },
        {
          id: "field-ferment-zine",
          title: "January, March, March",
          subtitle:
            "Independently conceived and produced through field research, in-depth interviews, photography, writing, and the editorial design of 30+ spreads.",
          filmType: "Food Ethnography Zine",
          previewImage: "/images/creative/Zine/january-march-march-mockup.png",
          previewFull: true,
        },
        {
          id: "eulogy-for-breathing",
          title: "Eulogy for Breathing",
          subtitle:
            "Personal writing and independent publishing shaped through sensory observation and a self-designed Smell Rehabilitation Checklist.",
          filmType: "Creative Nonfiction",
          previewImage: "/images/creative/breathing.JPG",
        },
      ],
    },
    contact: {
      sectionTitle: "Contact",
      correspondence: "Correspondence",
      academicCV: "CV",
      copyright: "© 2026 Ziyun Qi",
      fontCredit: "Set in Cormorant Garamond",
    },
  },

  zh: {
    nav: {
      home: "首页",
      about: "关于",
      research: "研究",
      work: "作品",
      contact: "联系",
    },
    home: {
      tagline: "写作 · 研究 · 影像 · 编辑",
    },
    about: {
      sectionTitle: "关于",
      bio: "走小径",
      p1: "要常常关注那些被正式叙述遗漏的存在吗？比如重新发现植物、饮食实践、诗歌、繁华街巷里跻身而在的小小神龛、跨越大洋的郊区里竟然有华人生态农场。\n\n要试试以“侵蚀、破损与衰败”而非“新颖性、增长与进步”作为思考社会与技术关系的基础吗？比如废墟、补丁、旧磁带、发酵食品令人感到不悦的味道？",
      p2: "于是在2026年春季独立制作了电子民族志Zine《January, March, March》，试图以具身的、多感官的书写记录农场中多物种共生的日常片段。\n\n课题《Where Ferns Touch Flesh》则探讨超越物种界限后，去人类中心主义的亲密关系，并于同年在加州大学圣地亚哥分校发表。\n\n一些创作也由这些理论延展而出：小文，黑白胶片，zine，自创塔罗...",
      p3: "她们都是我心爱的小径。",
    },
    research: {
      sectionTitle: "研究",
      footer: "—— 精选课题，2019 年至今 ——",
      projects: [
        {
          id: "roadside-shrines-hong-kong",
          number: "01",
          title: "多孔的神圣空间",
          titleSub: "The Porous Sacred",
          description:
            "硕士毕业项目《The Porous Sacred》，研究香港路边神龛如何在日常实践中形成多孔而持续的神圣空间。",
          tags: ["城市人类学", "空间研究", "宗教"],
        },
        {
          id: "where-ferns-touch-flesh",
          number: "02",
          title: "蕨类、身体与跨物种亲密",
          titleSub: "Where Ferns Touch Flesh",
          description:
            "发表于加州大学圣地亚哥分校研究生学术会议，2026年5月。以后人类主义、酷儿生态学与情动理论解读郑波的《蕨恋》。",
          tags: ["酷儿生态学", "情动理论", "艺术批评"],
        },
        {
          id: "waiting-for-a-diagnosis",
          number: "03",
          title: "被遗漏的注意力",
          titleSub: "Waiting for a Diagnosis",
          description:
            "关于成年女性ADHD漏诊问题与诊断框架中性别偏见的政策导向研究。",
          tags: ["性别研究", "残障研究", "公共卫生"],
        },
        {
          id: "fern-fieldwork",
          number: "04",
          title: "与蕨同行：云南田野笔记",
          titleSub: "Fern Fieldwork",
          description: "前期田野研究，产出待定。",
          tags: ["多物种民族志", "感官方法论", "植物研究"],
        },
      ],
    },
    work: {
      sectionTitle: "创作",
      projects: [
        {
          id: "film-photography",
          title: "胶片摄影作品集",
          subtitle: "",
          filmType: "个人影像实践",
          previewImage: "/images/creative/film/Capture One Catalog0033.jpg",
        },
        {
          id: "poem-tarot",
          title: "「一间屋」诗塔罗互动摊位",
          subtitle: "项目发起与独立策划：设计互动体验、视觉系统与现场陈设，两天接待 60+ 人次。",
          filmType: "公共互动艺术项目",
          previewImage: "/images/creative/POEM TAROT/8012.jpg",
        },
        {
          id: "field-ferment-zine",
          title: "《January, March, March》",
          subtitle: "独立策划与制作：田野调研、深度访谈、摄影、撰稿与 30+ 跨页的版式设计。",
          filmType: "食物民族志 Zine",
          previewImage: "/images/creative/Zine/january-march-march-mockup.png",
          previewFull: true,
        },
        {
          id: "eulogy-for-breathing",
          title: "《呼吸悼词》",
          subtitle: "个人写作与独立出版：以感官观察和自制气味康复清单展开叙事。",
          filmType: "创意非虚构写作",
          previewImage: "/images/creative/breathing.JPG",
        },
      ],
    },
    contact: {
      sectionTitle: "联系",
      correspondence: "联络方式",
      academicCV: "简历",
      copyright: "© 2026 戚紫云",
      fontCredit: "以 Cormorant Garamond 字体排版",
    },
  },
}

type Dict = typeof dict.en

interface LangContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Dict
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh")
  return (
    <LangContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error("useLang must be used within LangProvider")
  return ctx
}
