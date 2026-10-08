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
    id: "remapping-yunnan",
    en: {
      quote: "",
      quoteSource: "",
      abstract:
        "Located in Southwest China and bordering Myanmar, Laos, and Vietnam, Yunnan is one of China’s most ethnically diverse provinces. However, Yunnan often gets compressed into a limited set of romanticized, idealized images: “Shangri-La,” scenic tourism, ethnic spectacle, a short list of signature dishes such as rice noodles. Rather than attempting to offer a set of identities associated with Yunnan, this project asks how Yunnan takes shape through movements, memories, displacements, and multi-sensory experiences beyond its geographic confines.\n\nWhen, where, and through what forms of practices can we feel/sense Yunnan?\n\nThe project started through a series of encounters—among the Yunnanese students and others who feel connected to/interested in Yunnan—at Duke. From these encounters emerged a shared interest in how relationships to place are maintained and transformed through gathering, growing, cooking, pickling, fermenting, listening, finding substitutes away from home, exchanging recipes, and sharing food and stories.\n\n“Mapping” does not primarily refer to cartographic representation. Instead, we take mapping as a practice of exploring relations across spaces/places, materials, bodies, memories, and routes of circulation.\n\nSituated between artistic practices, ethnographic inquiries, and community collaborations, we foreground situated and embodied forms of (scholarly) knowledge transduced across Yunnan rather than comprehensive or authoritative narratives about Yunnan. The exhibition may include but not limited to artworks, photographs, field recordings, oral histories, recipes, food-related objects, maps, moving images, sound installations, writings, and participatory tasting or listening activities.",
      publication: "Collaborative curatorial and ethnographic project, ongoing · Opening February 2027",
      excerpts: [
        {
          label: "Diaspora Pantry",
          body:
            "We invite people currently living in the United States who are from Yunnan or have family ties to Yunnan to contribute one of the following four types of items: a kitchen utensil, a photograph, a one- or two-minute voice message, or an ingredient that is hard to find locally and for which you’ve had to find a substitute. We especially welcome pickled or fermented foods.\n\nA jar of pickled vegetables or fermented chili sauce, having traveled across continents over the course of several years, not only brings the name of one place to another but also embodies the maker’s efforts to continually recreate the flavors of home in a new kitchen. Each exhibit will be presented alongside the contributor’s narrative, covering the item’s origin, how it is used, and the changes it has undergone since leaving its homeland.",
        },
        {
          label: "Substitution Atlas",
          body:
            "If the “Diaspora Pantry” above focuses on the things people “preserve,” then the “Substitution Atlas” focuses on the things that cannot be preserved. For several Yunnan ingredients that are hard to find in the United States, this atlas documents information on three levels: the appearance of the original Yunnan ingredients; the substitutes used by Yunnan chefs in the U.S.; and the resulting changes to the dishes. Take Yunnan ham, for example—it serves as the foundation for dishes such as copper-pot potato rice or white kidney beans stewed with ham. Because pork products from China face strict restrictions when entering the United States, chefs often turn to Italian prosciutto or local country-style ham instead. How does this substitution alter the dish’s flavor? Can this dish still be considered the original dish?\n\nThe atlas’s first batch of entries serves as a starting point: for example, tree tomatoes, Erkuai, Rushan, and Yunnan ham. The atlas aims to map out various connections rather than judge authenticity.",
        },
        {
          label: "Listening with Yunnan",
          body:
            "One component approaches Yunnan through practices of listening and musical circulation. A curated selection of albums, recordings, and other musical releases connected to Yunnan would function as a point of entry into different histories, places, and communities. A second component invites contributors to creatively interpret their relationships to Yunnan through composition, sound collage, field recording, or other listening pieces. These works may respond to memories, movements, distances, substitutions, encounters, or imagined relationships to place, while gathering everyday sonic materials such as voice memos, field recordings, interviews, and spoken words.",
        },
      ],
      images: [
        { src: "/images/research/remapping-yunnan/01-market-aisle.jpg", caption: "Yunnan · Market aisle" },
        { src: "/images/research/remapping-yunnan/02-market-produce.jpg", caption: "Yunnan · Mushrooms and seasonal produce" },
        { src: "/images/research/remapping-yunnan/03-market-greens.jpg", caption: "Yunnan · Market greens" },
        { src: "/images/research/remapping-yunnan/04-market-cat.jpg", caption: "Yunnan · A market cat among taro and sunflower heads" },
        { src: "/images/research/remapping-yunnan/05-fermented-food-stall.jpg", caption: "Yunnan · Pickles, fermented tofu, and chili condiments" },
        { src: "/images/research/remapping-yunnan/06-matsutake-delivery.jpg", caption: "Yunnan · Matsutake delivery stand" },
        { src: "/images/research/remapping-yunnan/07-roots-and-herbs.jpg", caption: "Yunnan · Roots, herbs, and handwritten labels" },
        { src: "/images/research/remapping-yunnan/08-crop-field.jpg", caption: "Yunnan · Cultivated field" },
        { src: "/images/research/remapping-yunnan/09-citrus-trees.jpg", caption: "Yunnan · Citrus trees and handwritten plant signs" },
      ],
    },
    zh: {
      quote: "",
      quoteSource: "",
      abstract:
        "云南是中国民族与生态最为多样的省份之一，与缅甸、老挝、越南接壤。但在大众想象里，它常被压缩成一小串固定的形象：香格里拉、风景旅游、民族景观、几道招牌菜。这个项目不打算用另一套更“权威”的身份叙述去纠正这些形象，而是想问：云南是如何通过流动、记忆、迁移和感官经验，在其地理边界之外成形的？\n\n贯穿项目的问题很简单：我们在何时、何地、通过哪些实践感受到云南？\n\n项目起于杜克大学里的相遇：几位云南学生，以及与云南有连结的人。在交谈中，一个共同的兴趣反复浮现：离开家之后，人们如何通过采集、种植、烹饪、腌制、发酵、聆听、寻找替代品、交换食谱、分享食物和故事，来维系并改变与地方的关系。因此我们的“田野”不是云南本身，而是云南的延伸：厨房、超市、网购渠道、微信群、歌单，以及那些把云南带在身边的人的家。\n\n这里的“（制）地图”主要不是地图学意义上的再现，而是一种追踪实践：追踪地方、物质、身体、记忆与流通路线之间的关系。一罐跨越大陆的泡菜或发酵辣酱，带来的不只是一个地名，也记录着制作者在新厨房里一次次重建家乡味道的劳动。我们关心的是，这样的物与实践如何让依恋、距离与时间变得可见。\n\n项目处于艺术实践、民族志研究与社群合作之间。我们优先呈现具体的、身体性的知识，而不是关于云南的全面或权威叙述。参与者不是被采集和被解释的“报告人”，而是共同讲述云南的作者。最终的展览可能包括艺术作品、照片、田野录音、口述史、食谱、物件、地图、动态影像、声音作品、文字，以及参与式的品尝与聆听活动。具体形式仍然开放，并会随参与者的介入而改变。",
      publication: "策展与民族志合作项目，进行中 · 预计于2027年2月开幕",
      excerpts: [
        {
          label: "一、离散的储藏间",
          body:
            "第一条线索关注人们带来、留存、照料的东西：一件厨具、一张照片、一条来自家里的语音、一份照料多年的发酵食物。我们尤其被腌制与发酵食物吸引，因为发酵是一种保存，同时也是一种改变。它需要时间、照料和活的微生物，在新的地方，结果从来不会完全一样。这条线索的工作概念是“离散食橱”。",
        },
        {
          label: "二、代替品图谱",
          body:
            "第二条线索转向那些无法随身携带的东西：难以买到、受到限制、或一过边界就变得不同的食材。云南火腿就是一个例子。它是锅子洋芋饭等菜的底味，而在国外，厨师常常用意大利火腿或本地乡村火腿替代。这会如何改变味道，又如何改变一道菜的意义？它还是原来的那道菜吗？我们不关心真假之分，而是想描绘替代所建立的联系：食材、厨师、商店与记忆之间的联系。这条线索的工作概念是“替代图集”。",
        },
        {
          label: "三、云南声音",
          body:
            "第三条线索通过聆听与音乐流通来接近云南：专辑、录音、唱片文案、田野录音、语音留言、口述片段。它既是一种策展式的聆听实践，也邀请参与者通过作曲、拼贴或其他声音作品来诠释自己与云南的关系。声音让我们能够追问地方中难以被看见的部分：气氛、节奏、距离、等待。",
        },
      ],
      images: [
        { src: "/images/research/remapping-yunnan/01-market-aisle.jpg", caption: "云南 · 菜市场通道" },
        { src: "/images/research/remapping-yunnan/02-market-produce.jpg", caption: "云南 · 菌子与时令食材" },
        { src: "/images/research/remapping-yunnan/03-market-greens.jpg", caption: "云南 · 市场里的鲜蔬" },
        { src: "/images/research/remapping-yunnan/04-market-cat.jpg", caption: "云南 · 芋头与向日葵花盘间的猫" },
        { src: "/images/research/remapping-yunnan/05-fermented-food-stall.jpg", caption: "云南 · 腌菜、卤腐与辣椒调味品" },
        { src: "/images/research/remapping-yunnan/06-matsutake-delivery.jpg", caption: "云南 · 松茸寄递摊位" },
        { src: "/images/research/remapping-yunnan/07-roots-and-herbs.jpg", caption: "云南 · 根茎、药材与手写标签" },
        { src: "/images/research/remapping-yunnan/08-crop-field.jpg", caption: "云南 · 种植中的田地" },
        { src: "/images/research/remapping-yunnan/09-citrus-trees.jpg", caption: "云南 · 果树与手写植物牌" },
      ],
    },
  },
  {
    id: "where-ferns-touch-flesh",
    en: {
      quote: "",
      quoteSource: "",
      abstract:
        "When I first encountered Pteridophilia, I was caught by a simple contradiction: the same fern could be touched with tenderness and then eaten. Why does eating a plant feel ordinary, while desiring it feels unsettling? That question became the starting point for this project. It led me beyond the artwork itself and toward the place in which it was filmed — and toward the many ways ferns already live within food, memory, and everyday life in Taiwan.\n\nAs the research developed, I became less interested in deciding whether the encounter was beautiful, strange, or provocative. I wanted to understand what becomes visible when appetite and desire occupy the same scene. Amis food and plant knowledge, botanical classifications shaped across different historical periods, experiences of migration and survival, and the plants that public culture remembers or overlooks all changed how I read the fern on screen. It was no longer simply “nature,” but a living presence with a specific history.\n\nWhat I ultimately want to hold onto is not a verdict but a way of staying with this discomfort. I call it proximity without appropriation: coming close to another form of life without assuming that closeness gives us knowledge or ownership. Touching a fern is not possessing it. Desiring it does not mean knowing what it wants.",
      publication: "Presented at the UCSD Department of Literature Graduate Conference, May 2026",
      excerpts: [],
      images: [],
    },
    zh: {
      quote: "",
      quoteSource: "",
      abstract:
        "第一次看到《蕨恋》时，我感到不安：同一株蕨类，既可以被温柔地抚摸，又可以被烹饪、吃掉。为什么进食显得如此日常，另一种欲望却让观者不安？这个问题成了这次研究的起点。\n\n它让我从作品本身往外走，开始关注拍摄发生的地方，关注蕨类是如何存在于人们的食物、记忆与日常生活里。乍一看，这件作品似乎提供了一种后人类时代乌托邦式的跨物种亲密幻想，然而细读之下，它其实提出了更犀利的问题：人类感知与权利的边界是否早该松解。\n\n阿美族的饮食与植物知识、不同历史时期形成的植物分类、迁徙中的生存经验，以及公共文化对某些植物的记住或忽略，都改变了我观看画面中那株蕨类的方式：它不再只是人类视角下抽象的“自然”，而是一种有具体来处的生命。\n\n现实中，人类与植物之间被接受的关系形式是如此狭窄，也许这件作品，或所有作品，在任何时间线上都无法提供解决方案。或许，有效的是一直保持善良、流动的视角，提供一种我愿称之为「接近而不占有」的伦理姿态：靠近另一种生命，却不假定靠近就等于理解或拥有。",
      publication: "发表于2026年5月加州大学圣地亚哥分校文学系研究生学术会议",
      excerpts: [],
      images: [],
    },
  },
  {
    id: "roadside-shrines-hong-kong",
    en: {
      quote: "",
      quoteSource: "",
      abstract:
        "Walk through almost any neighborhood in Hong Kong and you will find them: small red shrines tucked beneath staircases, wedged into street corners, standing exposed on busy sidewalks. No walls. No gates. No separation from the traffic, the noise, the exhaust fans of neighboring restaurants. By most accounts of how sacred space works, these shrines should not exist — or at least, should not feel sacred. The dominant theories in religious studies hold that the holy requires demarcation from the profane: a threshold, a boundary, an enclosure that separates the sacred from the ordinary world around it.\n\nHong Kong's roadside shrines refuse this logic entirely.\n\nMy MA capstone project, The Porous Sacred, asks a simple question: what sustains a sacred space without boundaries? Taking several Hong Kong shrines as its central objects — including a shrine to a beloved Chinese medicine practitioner on Peel Street, maintained continuously since his death and relocated when its building was demolished in 1967 — I argue that these sites maintain their sacred character not through enclosure but through accumulation: the daily bodily practices of custodians who sweep and offer incense, the tactical occupation of spaces that urban planning forgot to regulate, and the way these shrines quietly insert an alternative worldview — one of inhabited land, moral memory, and communal connection — into the sensory experience of even the most secular passerby.\n\nThe result is a form of sacred space that is porous rather than defensive, relational rather than bounded, and sustained by practice rather than architecture. In a city defined by rapid redevelopment and the logic of capital, these small shrines turn out to be some of the most durable things around.",
      publication: "The Porous Sacred · MA capstone project, Duke University",
      excerpts: [],
      images: [
        { src: "/images/research/porous-sacred/01-hung-hom.jpg", caption: "Hung Hom · Fook Tak Ancient Temple" },
        { src: "/images/research/porous-sacred/hung-hom-02.jpg", caption: "Hung Hom · Fook Tak Ancient Temple" },
        { src: "/images/research/porous-sacred/shatin-pai-tau.jpg", caption: "Sha Tin · Pai Tau Village Shrine" },
        { src: "/images/research/porous-sacred/tai-po-pun-chung.jpg", caption: "Tai Po · Pun Chung Village Shrine" },
        { src: "/images/research/porous-sacred/02-shenxiang-hill.jpg", caption: "Shenxiang Hill" },
        { src: "/images/research/porous-sacred/06-shenxiang-hill.jpg", caption: "Shenxiang Hill" },
        { src: "/images/research/porous-sacred/shenxiang-hill-03.jpg", caption: "Shenxiang Hill" },
        { src: "/images/research/porous-sacred/03-peel-street-1.jpg", caption: "Peel Street · Fook Tak Temple" },
        { src: "/images/research/porous-sacred/04-peel-street-2.jpg", caption: "Peel Street · Fook Tak Temple" },
        { src: "/images/research/porous-sacred/05-jordan.jpg", caption: "Jordan · Lord Fook Tak Shrine" },
      ],
    },
    zh: {
      quote: "",
      quoteSource: "",
      abstract:
        "走过香港几乎任何一个街区，你都会遇见它们：藏在楼梯底下的小红龛，楔入街道转角的神位，毫无遮蔽地立在喧嚣的人行道上。没有围墙，没有门槛，与周围的车流、噪音、餐厅抽风扇之间没有任何隔断。按照大多数关于神圣空间的理论，这些神龛不应该存在——或者至少，不应该让人感到神圣。宗教研究的主流理论认为，神圣性需要与世俗世界的分隔：一道门槛，一条边界，一堵将神圣从日常中隔离出来的围墙。\n\n香港的路边神龛彻底拒绝了这个逻辑。\n\n我的硕士毕业项目《The Porous Sacred》提出一个简单的问题：没有边界的神圣空间，靠什么维持？以香港数座神龛为核心研究对象——包括中环卑利街一位深受街坊爱戴的中医去世后由社区建立的伯公庙，1967年因旧楼拆卸被迫迁址后延续至今——我论证这些场所的神圣性并非依赖围合，而是依赖积累：守护者日复一日清扫、点香的身体实践；对城市规划遗忘的边角地带的战术性占用；以及这些神龛如何悄悄地将另一套宇宙观——关于有灵的土地、道德的记忆、社群的连结——植入每一个路过者的感官体验，哪怕他们毫无宗教信仰。\n\n最终呈现的，是一种多孔而非防御性的、关系性而非边界性的、由实践而非建筑维系的神圣空间形态。在一座以快速重建和资本逻辑著称的城市里，这些小小的神龛，是最经久不衰的存在之一。",
      publication: "《The Porous Sacred》· 杜克大学硕士毕业项目",
      excerpts: [],
      images: [
        { src: "/images/research/porous-sacred/01-hung-hom.jpg", caption: "红磡 · 福德古庙" },
        { src: "/images/research/porous-sacred/hung-hom-02.jpg", caption: "红磡 · 福德古庙" },
        { src: "/images/research/porous-sacred/shatin-pai-tau.jpg", caption: "沙田 · 排头村神坛" },
        { src: "/images/research/porous-sacred/tai-po-pun-chung.jpg", caption: "大埔 · 泮涌村神坛" },
        { src: "/images/research/porous-sacred/02-shenxiang-hill.jpg", caption: "神像山" },
        { src: "/images/research/porous-sacred/06-shenxiang-hill.jpg", caption: "神像山" },
        { src: "/images/research/porous-sacred/shenxiang-hill-03.jpg", caption: "神像山" },
        { src: "/images/research/porous-sacred/03-peel-street-1.jpg", caption: "卑利街 · 福德庙" },
        { src: "/images/research/porous-sacred/04-peel-street-2.jpg", caption: "卑利街 · 福德庙" },
        { src: "/images/research/porous-sacred/05-jordan.jpg", caption: "佐敦 · 福德老爷" },
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
