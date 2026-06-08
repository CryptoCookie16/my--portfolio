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
      quote: "",
      quoteSource: "",
      abstract:
        "What happens when a man makes love to a fern — and then eats it? Zheng Bo's video installation Pteridophilia (2016–ongoing) stages exactly this encounter, filmed in the subtropical forests of Taiwan. At first glance, the work seems to offer a posthuman fantasy of liberated interspecies intimacy. On closer analysis, it raises harder questions about desire, use, and the limits of human perception.\n\nThis paper argues that the fern in Pteridophilia is not abstract nature. It is a historically situated plant — shaped by Indigenous Amis food knowledge, Japanese colonial botanical hierarchies, Kuomintang survival politics, and nationalist floral symbolism. By eroticizing a plant that Taiwanese audiences recognize as food, Zheng does not merely shock. He exposes how narrow the accepted forms of human-plant relation have become.\n\nThe paper's central claim is that the work offers neither a solution nor a celebration, but what I call proximity without appropriation: a practice of staying close to what cannot be fully known or possessed. To touch the fern is not to possess it. To desire the fern is not to know what it wants.",
      publication: "Presented at the UCSD Department of Literature Graduate Conference, May 2026",
      excerpts: [],
      images: [
        { src: "", caption: "[Zheng Bo, Pteridophilia — still or documentation image]" },
      ],
    },
    zh: {
      quote: "",
      quoteSource: "",
      abstract:
        "当一个人抚摸一株蕨类植物——然后将它吃掉，这意味着什么？郑波的录像装置《蕨恋》（2016年至今）在台湾的亚热带森林中拍摄，呈现了正是这样一种相遇。乍看之下，这件作品似乎提供了一种后人类式的跨物种亲密幻想。细读之下，它提出了更困难的问题：关于欲望、使用，以及人类感知的边界。\n\n本文认为，《蕨恋》中的蕨类植物并非抽象的「自然」。它是一种有历史位置的植物——被阿美族的饮食知识、日本殖民时期的植物学等级制度、国民党的生存政治，以及民族主义的花卉象征所共同塑造。通过将台湾观众熟悉的食用植物情色化，郑波不只是在制造震惊——他揭示了人类与植物之间被接受的关系形式是多么狭窄。\n\n本文的核心主张是：这件作品既不提供解决方案，也不构成庆祝，而是提供一种我称之为「接近而不占有」（proximity without appropriation）的伦理姿态——一种与无法被完全认知或占有之物保持靠近的实践。触碰蕨类，并不意味着拥有它。渴望蕨类，并不意味着知道它想要什么。",
      publication: "发表于2026年5月加州大学圣地亚哥分校文学系研究生学术会议",
      excerpts: [],
      images: [
        { src: "", caption: "【郑波，《蕨恋》——静帧或现场文献图像】" },
      ],
    },
  },
  {
    id: "roadside-shrines-hong-kong",
    en: {
      quote: "",
      quoteSource: "",
      abstract:
        "Walk through almost any neighborhood in Hong Kong and you will find them: small red shrines tucked beneath staircases, wedged into street corners, standing exposed on busy sidewalks. No walls. No gates. No separation from the traffic, the noise, the exhaust fans of neighboring restaurants. By most accounts of how sacred space works, these shrines should not exist — or at least, should not feel sacred. The dominant theories in religious studies hold that the holy requires demarcation from the profane: a threshold, a boundary, an enclosure that separates the sacred from the ordinary world around it.\n\nHong Kong's roadside shrines refuse this logic entirely.\n\nThis paper asks a simple question: what sustains a sacred space without boundaries? Taking several Hong Kong shrines as its central objects — including a shrine to a beloved Chinese medicine practitioner on Peel Street, maintained continuously since his death and relocated when its building was demolished in 1967 — I argue that these sites maintain their sacred character not through enclosure but through accumulation: the daily bodily practices of custodians who sweep and offer incense, the tactical occupation of spaces that urban planning forgot to regulate, and the way these shrines quietly insert an alternative worldview — one of inhabited land, moral memory, and communal connection — into the sensory experience of even the most secular passerby.\n\nThe result is a form of sacred space that is porous rather than defensive, relational rather than bounded, and sustained by practice rather than architecture. In a city defined by rapid redevelopment and the logic of capital, these small shrines turn out to be some of the most durable things around.",
      publication: "Essay, unpublished, 2023",
      excerpts: [],
      images: [
        { src: "", caption: "[Field photograph — roadside shrine, Hong Kong]" },
        { src: "", caption: "[Field photograph — altar detail]" },
      ],
    },
    zh: {
      quote: "",
      quoteSource: "",
      abstract:
        "走过香港几乎任何一个街区，你都会遇见它们：藏在楼梯底下的小红龛，楔入街道转角的神位，毫无遮蔽地立在喧嚣的人行道上。没有围墙，没有门槛，与周围的车流、噪音、餐厅抽风扇之间没有任何隔断。按照大多数关于神圣空间的理论，这些神龛不应该存在——或者至少，不应该让人感到神圣。宗教研究的主流理论认为，神圣性需要与世俗世界的分隔：一道门槛，一条边界，一堵将神圣从日常中隔离出来的围墙。\n\n香港的路边神龛彻底拒绝了这个逻辑。\n\n这篇论文提出一个简单的问题：没有边界的神圣空间，靠什么维持？以香港数座神龛为核心研究对象——包括中环卑利街一位深受街坊爱戴的中医去世后由社区建立的伯公庙，1967年因旧楼拆卸被迫迁址后延续至今——我论证这些场所的神圣性并非依赖围合，而是依赖积累：守护者日复一日清扫、点香的身体实践；对城市规划遗忘的边角地带的战术性占用；以及这些神龛如何悄悄地将另一套宇宙观——关于有灵的土地、道德的记忆、社群的连结——植入每一个路过者的感官体验，哪怕他们毫无宗教信仰。\n\n最终呈现的，是一种多孔而非防御性的、关系性而非边界性的、由实践而非建筑维系的神圣空间形态。在一座以快速重建和资本逻辑著称的城市里，这些小小的神龛，是最经久不衰的存在之一。",
      publication: "文章，未发表，2023年",
      excerpts: [],
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
