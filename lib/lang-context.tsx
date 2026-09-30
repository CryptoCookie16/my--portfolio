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
      p1: "Currently an MA student in Liberal Arts at Duke University. My academic interests drift between the politics of space, everyday rituals, and multispecies studies—focusing on existence omitted by formal narratives. I have written on the thresholds of roadside shrines in Hong Kong, an inquiry synthesizing five years of lived memories and observation within the city. Recently, turning my attention toward non-humans and the land, I independently published the digital ethnographic zine January, March, March (Spring 2026), documenting everyday fragments of multispecies coexistence on ecological farms through tactile and embodied writing; my project Where Ferns Touch Flesh explores posthuman intimacy beyond human boundaries and was presented at UC San Diego in the same year.",
      p2: `My creative practice is an extension of my academic inquiry—another language for it. I write creative non-fiction, shoot black-and-white film, craft zines, and appear at markets and street corners with “Poetry Tarot.” Bi-literate in Chinese and English, I have worked across brand PR, publishing, and media organizations.`,
      p3: "They are all my beloved detours.",
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
          title: "Film Photography",
          subtitle: "",
          filmType: "35mm",
          previewImage: "/images/creative/film/Capture One Catalog0033.jpg",
        },
        {
          id: "poem-tarot",
          title: "Poem Tarot",
          subtitle:
            "An independent public writing project combining original poetry and tarot imagery.",
          filmType: "Digital",
          previewImage: "/images/creative/POEM TAROT/8012.jpg",
        },
        {
          id: "field-ferment-zine",
          title: "Field & Ferment Zine: January, March, March",
          subtitle:
            "From working the soil at Duke Campus Farm and interviewing a Chinese-run ecological farm to tracing homemade infused liquor in Yunnan and Shanghai—a food ethnography zine shaped through fieldwork, photography, and writing.",
          filmType: "Zine",
          previewImage: "/images/creative/Zine/january-march-march-mockup.png",
          previewFull: true,
        },
        {
          id: "eulogy-for-breathing",
          title: "Eulogy for Breathing",
          subtitle:
            "Creative nonfiction structured around a self-designed Smell Rehabilitation Checklist.",
          filmType: "Essay",
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
      p1: "目前在杜克大学修读人文学科硕士。我的学术兴趣游走于空间政治、日常仪式与多物种研究之间——关注那些被正式叙述遗漏的存在。曾写过关于香港路边神龛的研究，那篇文章融合了我在这座城市生活五年的记忆与观察。最近，我将目光投向非人类与土地：2026年春季独立制作了电子民族志Zine《January, March, March》，以具身、触觉的书写记录生态农场中多物种共生的日常片段；课题《Where Ferns Touch Flesh》则探讨超越人类界限的后人类亲密关系，并于同年在加州大学圣地亚哥分校发表。",
      p2: "我的创作是学术思考的延伸，也是它的另一种语言。我写创意非虚构，拍黑白胶片，做zine，带着「诗塔罗」出现在市集和街角。具备中英双语写作能力，曾供职于品牌公关、出版与媒体机构。",
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
          title: "胶片摄影",
          subtitle: "",
          filmType: "35mm",
          previewImage: "/images/creative/film/Capture One Catalog0033.jpg",
        },
        {
          id: "poem-tarot",
          title: "诗塔罗",
          subtitle: "融合原创诗歌与塔罗意象的独立写作计划。",
          filmType: "数字",
          previewImage: "/images/creative/POEM TAROT/8012.jpg",
        },
        {
          id: "field-ferment-zine",
          title: "田野与发酵：一月，三月，三月",
          subtitle:
            "从杜克农场的劳作、华人生态农场主的访谈，到云南与上海的自泡酒调查：一本由田野、摄影与写作共同长出来的食物民族志 zine。",
          filmType: "独立刊物",
          previewImage: "/images/creative/Zine/january-march-march-mockup.png",
          previewFull: true,
        },
        {
          id: "eulogy-for-breathing",
          title: "呼吸悼词",
          subtitle: "以自制气味康复清单为叙事框架的创意非虚构写作。",
          filmType: "随笔",
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
