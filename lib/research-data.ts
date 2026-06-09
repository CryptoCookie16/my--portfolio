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
      quote: "",
      quoteSource: "",
      abstract:
        "An ongoing multispecies ethnography conducted in the high-altitude forests of Gaoligong Mountain, Yunnan Province. This research treats ferns as active participants in the world rather than passive botanical specimens — tracing the entanglements between plant life, moisture, altitude, and the people who move through this terrain. Drawing on sensory ethnography and more-than-human theory, the project asks what it means to do fieldwork alongside non-human others, rather than about them.",
      publication: "",
      excerpts: [],
      images: [],
    },
    zh: {
      quote: "",
      quoteSource: "",
      abstract:
        "这是一项正在进行中的多物种民族志研究，田野地点位于云南省高黎贡山高海拔森林地带。本研究将蕨类植物视为积极参与世界的主体，而非被动的植物标本——追踪植物生命、水分、海拔与穿行于此地的人群之间的缠绕关系。研究以感官民族志方法与超人类中心主义理论为框架，「与」非人类他者一同田野，而非进行「关于」它们的研究。",
      publication: "",
      excerpts: [],
      images: [],
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
      quote: "Calladita te ves más bonita.",
      quoteSource: "Quiet girls are prettier.",
      abstract:
        "Why are women with ADHD so consistently missed?\n\nThis collaborative research project examines the systemic underdiagnosis of ADHD in women and girls — a problem rooted not in biology, but in how the disorder was first defined. Foundational diagnostic criteria were built from study samples that were 81% male, leaving women's inattentive, internalized symptoms outside the clinical frame. The result: boys are referred for evaluation up to sixteen times more often than girls, and adult women frequently spend years accumulating misdiagnoses — anxiety, depression, \"just being overwhelmed\" — before actually diagnosed.\n\nDrawing on epidemiological data, feminist disability studies, and public health literature, the project maps three intersecting failures: the gender bias embedded in diagnostic criteria, the masking labor that makes women's ADHD legible as competence rather than struggle, and the near-total absence of research on how hormonal transitions shape the disorder across a woman's life.\n\nThe quieter the symptom, the longer the wait.",
      publication: "Keywords: Gender · ADHD · Disability Studies · Public Health · Feminist Theory",
      excerpts: [],
      images: [],
    },
    zh: {
      quote: "Calladita te ves más bonita.",
      quoteSource: "安静的女孩更好看。",
      abstract:
        "为什么患有ADHD的女性如此频繁地被漏诊？\n\n这个合作研究项目聚焦于女性和女孩ADHD系统性漏诊的现象——这个问题的根源不在于生理差异，而在于这一障碍最初是如何被定义的。奠基性的诊断标准建立在81%为男性的研究样本之上，将女性更内化、更不注意型的症状排除在临床视野之外。结果是：男孩被转介评估的概率是女孩的最多十六倍，而成年女性往往在焦虑、抑郁、「只是太累了」等诊断之间辗转多年，才被真正诊断。\n\n研究综合流行病学数据、女性主义残障研究与公共卫生文献，梳理出三重交织的失败：诊断标准中内嵌的性别偏见、让女性的ADHD看起来像「能力」而非挣扎的伪装劳动（masking），以及荷尔蒙变化如何影响女性一生中ADHD表现这一几乎空白的研究领域。\n\n症状越安静，等待就越漫长。",
      publication: "关键词：性别 · ADHD · 残障研究 · 公共卫生 · 女性主义理论",
      excerpts: [],
      images: [],
    },
  },
]

export function getResearchDetail(id: string): ResearchDetail | undefined {
  return researchDetails.find((d) => d.id === id)
}
