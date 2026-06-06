export type ResearchDetail = {
  id: string
  en: {
    quote: string
    quoteSource: string
    abstract: string
    publication: string
    excerpts: { label?: string; body: string }[]
    images: { src: string; caption: string }[]
  }
  zh: {
    quote: string
    quoteSource: string
    abstract: string
    publication: string
    excerpts: { label?: string; body: string }[]
    images: { src: string; caption: string }[]
  }
}

export const researchDetails: ResearchDetail[] = [
  {
    id: "fern-fieldwork",
    en: {
      quote:
        "The mountain does not offer itself to those who only look. It opens for those who learn to listen with their hands.",
      quoteSource: "Field note, Gaoligong Mountain, October 2025",
      abstract:
        "An ongoing multispecies ethnography conducted in the high-altitude forests of Gaoligong Mountain, Yunnan Province. This research attends to ferns as sensing, relating beings rather than passive botanical specimens — tracing the entanglements between plant life, moisture, altitude, and the bodies of those who move through this terrain. Drawing on sensory ethnography and more-than-human theory, the project asks what it means to do fieldwork alongside rather than about non-human others.",
      publication: "Ongoing capstone — UC San Diego, Dept. of Anthropology, 2025–2026",
      excerpts: [
        {
          label: "Field Fragment I",
          body: "[Field diary excerpt — in progress. This block will hold a short passage from fieldwork notes: a moment of encounter, a sensory detail, or a scene that anchors the larger argument. Approximately 200–300 words.]",
        },
      ],
      images: [
        { src: "", caption: "[Field photograph — Gaoligong Mountain, 2025]" },
        { src: "", caption: "[Field photograph — specimen detail]" },
      ],
    },
    zh: {
      quote:
        "山不向只会观望的人敞开，它只为那些学会用双手倾听的人而打开。",
      quoteSource: "田野笔记，高黎贡山，2025年10月",
      abstract:
        "这是一项正在进行中的多物种民族志研究，田野地点位于云南省高黎贡山高海拔森林地带。本研究将蕨类植物视为具有感知能力和关系性的存在，而非被动的植物标本——追踪植物生命、水分、海拔与穿行于此地的身体之间的缠绕关系。研究以感官民族志方法与超人类中心主义理论为框架，追问「与」非人类他者一同田野，而非「关于」它们进行研究，意味着什么。",
      publication: "进行中的毕业课题 — 加州大学圣地亚哥分校人类学系，2025–2026",
      excerpts: [
        {
          label: "田野片段 一",
          body: "【田野日记摘录——构思中。此处将收录一段田野笔记：一次相遇的瞬间、一个感官细节，或一个锚定整体论述的场景。约200至300字。】",
        },
      ],
      images: [
        { src: "", caption: "【田野照片 — 高黎贡山，2025年】" },
        { src: "", caption: "【田野照片 — 标本细节】" },
      ],
    },
  },
  {
    id: "where-ferns-touch-flesh",
    en: {
      quote:
        "Zheng Bo does not represent the fern — he enters into relation with it. The work refuses the distance that representation requires.",
      quoteSource: "Conference paper draft, UCSD Graduate Conference, 2026",
      abstract:
        "This paper reads Zheng Bo's Pteridophilia series through three theoretical lenses: posthumanism's critique of human exceptionalism, queer ecology's refusal of reproductive futurism, and affect theory's insistence on the body as a site of political knowledge. The work — in which the artist lies naked among ferns for extended durations — is analyzed not as spectacle but as a practice of interspecies intimacy that troubles the boundary between the erotic and the ecological.",
      publication: "Presented at UCSD Graduate Conference, May 2026",
      excerpts: [
        {
          label: "Excerpt",
          body: "[Paper excerpt — in progress. This block will hold a close-reading passage from the conference paper: an analysis of a specific scene from Pteridophilia, or a moment where affect theory and queer ecology converge. Approximately 200–300 words.]",
        },
      ],
      images: [
        { src: "", caption: "[Zheng Bo, Pteridophilia — still or documentation image]" },
      ],
    },
    zh: {
      quote:
        "郑波不是在再现蕨，而是在与它建立关系。这件作品拒绝了再现所要求的距离感。",
      quoteSource: "会议论文草稿，加州大学圣地亚哥分校研究生会议，2026年",
      abstract:
        "本文通过三个理论维度解读郑波的《蕨恋》系列：后人类主义对人类例外论的批判、酷儿生态学对繁殖未来主义的抵拒，以及情动理论对身体作为政治知识场域的坚持。艺术家长时间裸卧于蕨类之间的行为，在本文中被理解为一种跨物种的亲密性实践，而非奇观——它扰动了欲望与生态之间的边界。",
      publication: "发表于加州大学圣地亚哥分校研究生学术会议，2026年5月",
      excerpts: [
        {
          label: "摘录",
          body: "【论文摘录——构思中。此处将收录论文中对《蕨恋》某一具体场景的细读段落，或情动理论与酷儿生态学交汇的论述节点。约200至300字。】",
        },
      ],
      images: [
        { src: "", caption: "【郑波，《蕨恋》——静帧或现场文献图像】" },
      ],
    },
  },
  {
    id: "roadside-shrines-hong-kong",
    en: {
      quote:
        "Every shrine is a refusal — a small, insistent claim that this place is not empty, not forgotten, not yet absorbed.",
      quoteSource: "Essay draft, 2023",
      abstract:
        "This essay examines Hong Kong's roadside shrines as vernacular sacred spaces that operate through what de Certeau calls the 'tactics of the everyday.' Rather than monumental or institutionally sanctioned religion, these small altars — tucked into stairwells, beneath flyovers, along drainage channels — enact a low-frequency religiosity that persists against urbanization, bureaucratic erasure, and the compression of public space.",
      publication: "Essay, unpublished, 2023",
      excerpts: [
        {
          label: "Field Observation",
          body: "[Essay excerpt — in progress. This block will hold a passage from the essay: a close description of a specific shrine and its surroundings, or a theoretical passage on sacred space and urban tactics. Approximately 200–300 words.]",
        },
      ],
      images: [
        { src: "", caption: "[Field photograph — roadside shrine, Hong Kong]" },
        { src: "", caption: "[Field photograph — altar detail]" },
      ],
    },
    zh: {
      quote:
        "每一座神龛都是一种抗拒——一个细小而执拗的宣告：这里并非虚空，并未被遗忘，尚未被吞并。",
      quoteSource: "文章草稿，2023年",
      abstract:
        "本文将香港路边神龛视为德塞托所谓「日常策略」意义上的民间圣域加以审视。有别于纪念碑式或经制度认可的宗教形态，这些嵌于楼梯间、高架桥下、排水沟旁的小祭坛，以一种低频的宗教性持续运作，在城市化、行政清除与公共空间压缩的重重压力下坚韧存续。",
      publication: "文章，未发表，2023年",
      excerpts: [
        {
          label: "田野观察",
          body: "【文章摘录——构思中。此处将收录一段对某座具体神龛及其周边环境的细致描述，或关于圣域与城市策略的理论段落。约200至300字。】",
        },
      ],
      images: [
        { src: "", caption: "【田野照片 — 香港路边神龛】" },
        { src: "", caption: "【田野照片 — 祭坛细节】" },
      ],
    },
  },
  {
    id: "waiting-for-a-diagnosis",
    en: {
      quote:
        "The checklist asks: do you lose things? I lose track of time, of rooms, of myself. But there is no box for that.",
      quoteSource: "Research memo, 2024",
      abstract:
        "This policy-oriented research investigates the systemic underdiagnosis of ADHD among adult women in clinical and educational settings. Drawing on interviews, diagnostic literature, and feminist disability studies, the project maps how assessment tools calibrated to hyperactive male presentation consistently fail to capture the internalized, affect-laden presentations more common among women — including inattentiveness, rejection sensitivity, and time-blindness.",
      publication: "Policy research memo, 2024",
      excerpts: [
        {
          label: "Research Note",
          body: "[Research excerpt — in progress. This block will hold a passage from the research memo: a case pattern or a close analysis of a diagnostic framework and its gendered assumptions. Approximately 200–300 words.]",
        },
      ],
      images: [],
    },
    zh: {
      quote:
        "量表问道：你会丢失物品吗？而我丢失的，是时间，是房间，是自己。这些，量表没有勾选框。",
      quoteSource: "研究备忘录，2024年",
      abstract:
        "本研究聚焦成年女性ADHD在临床与教育情境中被系统性漏诊的问题。研究以访谈资料、诊断文献与女性主义残障研究为基础，梳理了那些以多动男性表现为校准基准的评估工具，如何持续忽视女性群体中更为普遍的内化性、情动性表现——包括注意力涣散、拒绝敏感性与时间感知障碍。",
      publication: "政策研究备忘录，2024年",
      excerpts: [
        {
          label: "研究笔记",
          body: "【研究摘录——构思中。此处将收录研究备忘录中的一段内容：某种案例规律，或对诊断框架及其性别预设的细致分析。约200至300字。】",
        },
      ],
      images: [],
    },
  },
]

export function getResearchDetail(id: string): ResearchDetail | undefined {
  return researchDetails.find((d) => d.id === id)
}
