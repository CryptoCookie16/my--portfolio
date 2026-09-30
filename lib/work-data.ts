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
    heroImage: "/images/creative/Zine/january-march-march-mockup.png",
    collageImages: [
      { src: "/images/creative/Zine/zine1.png", rotate: -3 },
      { src: "/images/creative/Zine/zine2.png", rotate: 2 },
      { src: "/images/creative/Zine/zine3.png", rotate: -1.5 },
    ],
    embedCode: `<div style="position:relative;padding-top:max(60%,324px);width:100%;height:0;"><iframe style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;" src="https://online.fliphtml5.com/JMMZine/yyqt/" title="January, March, March; A Farm Working Zine_compressed" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>`,
    en: {
      title: "Field & Ferment Zine: January, March, March",
      description: "January, March, March is a food ethnography zine I independently conceived, photographed, wrote, and designed. It grew out of three rounds of participant fieldwork: working at Duke Campus Farm, sitting down for an in-depth interview with a Chinese ecological farmer, and gathering first-hand text and images along the way. A second thread, “Food That Refuses Standardization,” follows homemade infused liquor in Yunnan and Shanghai, placing those observations beside questions of U.S. food regulation and Indigenous food sovereignty. The finished zine spans more than thirty spreads, bringing field notes, interviews, photographs, and visual design into one personal record.",
      images: [],
    },
    zh: {
      title: "田野与发酵：一月，三月，三月",
      description: "《January, March, March》是一册由我独立策划与制作的食物民族志 zine。它从三次农场参与式田野开始：我在杜克农场劳作，也走访并深度访谈华人生态农场主，留下文字与影像记录。专题「无法标准化的食物」则把云南、上海两地的自泡酒观察，与美国食品监管和原住民食物主权放在一起思考。全书的摄影、撰稿、访谈整理和版式设计都由我完成，最终做成三十余个跨页。",
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
          "毕竟人类呼吸并不按照那种「毫秒」、「秒」、「分」之类的，一个小学生能掌握的标淮时间单位进行，所以当时我无法淮确的概括那些轻轻痒痒划过皮肤的气流的频率。但是我依旧激动地和家里每一个人讲述我最大的发现，确信地表示之前的人生绝对没有在呼吸，也问，原来你们也在呼吸？",
          "呼吸是最自然、最无意识的动作，但那几天的每一秒钟，我的鼻子变得新奇又陌生，无法停止感受气的流动。我固执地认真呼吸，极度亢奋的鼻腔顶部上皮中的毛状纤毛上的感受器不小心撞上了厨房放置太久的哈喇味食用油。陷阱。嗨，陷阱里是一只迟钝的章鱼终于发现它的吸盘其实是2千个卫脑，原来每一个都有无数的神经细胞和独立的感知能力。就像人在意识到正在专注阅读的瞬间就会跳出心流状态，我那时对呼吸的关注也很快打破了它的自然节奏。从房间到房间，我两脚轻飘，一整天被鼻子牵着走。鼻腔因为获得了太多的关注而发凉。像有一条大水涌入大脑，我开始思考：接下来的人生我应该怎么呼吸？",
          "总之，这个震惊持续了至少一个月，有时候我忘记它，又重新想起，再忘记它，又不经意想起，直到开学后全班同学对我的大发现见怪不怪。就像是高中的某天，偶然操控到后脑勺的头皮肌肉才开始意识到头骨上原来还有一层皮肤存在。后来这个相似的发现被我在更短的周期内消化掉。",
          "身体陪我的时长和我的生命一样，这种程度的密切走样成习以为常，对它的感知减弱似乎是不可避免的。从小用很多年习得我的家乡、后来只用两星期习惯香港、深圳的气味——我再也没有过和第一次发现呼吸那样相似的一个月，长时间和身体对话成为成年人需要冥想正念练习才能做到的项目。",
          "戴维·乔治·哈斯凯尔在《十三种闻树的方式》里说：「嗅觉往往是最容易被忽视和抑制的感官」。书名先提醒了我，自己是一个分辨不出任何一种树的味道的人。我的鼻子通常负责警示：流感、腐烂、泄漏、氧气不足、房间发霉、房间里有什么着火、或者更常见的，房间有夸张的人工香氛，之类的糟糕时刻。",
          "戴着口罩行过都市路就是对嗅觉的抑制使用，我认为都市有责出席呼吸的葬礼并悼念。",
          "发现自己上一次对嗅觉的清晰记忆是2023年，那时候香港口罩令终于解除。在那天前，我嗅觉被抑制使用了三年，只被派去闻一些特定场所的味道。\n例1：今天计划去外食，那么今天的味道是：来来鸡煲，和金玉满堂的龙眼冰。\n例2：一天去隔壁校园找Chan，香港最大的校园里，我们找草坪躺下。即便有「躺草坪」安慰剂，也是只能闻到三：树影下的潮湿草地，Chan带来的稻香村糕点和晚饭预定的烤鱼。",
          "开始不用再戴口罩的第一个傍晚，和Chan在路上走，才猛然想起来一天的味道怎么能只是三个呢。呼吸了一下，我就在这1秒裡一下子发现了树，叶的叶油；草，草根断掉的汁液；木头，新枝和枯树杈；凉茶舖，菜档出摊的几十种蔬菜，水泥地五金店海鲜乾货罗汉果伏苓，我甚至觉得可以闻到店裡木头桌子塑料箱子和泡沫价格牌。以祂们自己方式引领，预告，挽留。路上複杂味道其实才是90%的时间。",
          "这一次，我用一个傍晚重新习惯了香港的味道，然后安心地把这个大发现融进了遗忘的水池。在孱弱的吸力下，一些不连贯的，同质化城市味道飘入鼻腔。以为自己是主动去吸嗅世界，但实际上环境在把我做成橡皮泥后不断上挤压，直到身体的感知从当下的体验塌陷成一种回忆。",
          "我决定进行呼吸复健。",
          "这一天我在阅读应用上敲下「呼吸」，搜索结果展示了丰富的书单：《呼吸机使用手册》、《呼吸与危重症医学分册》还有《舞蹈、瑜伽、普拉提高效呼吸训练》，令我不想点开任何一本。",
          "我想，我要说的应该不是上述这些「解决疑惑」的工具书，而是，呼吸本身。",
          "于是我抓起随身笔记本，那是一个没用几页的深绿色软牛皮手账本，我翻到全新的一页，郑重其事地写下那句戴维·乔治·哈斯凯尔的警醒，也没有想到后来它会被我印成一本小册子，小范围发行，未出版，名叫：嗅觉复健清单。",
          "当时，我握着笔，想着第一个清单要写什么。不能太远离日常，否则一开始就会失败。我盯着窗外发了会儿呆，天色灰蓝，闻起来潮潮的，于是，我在页面上缓缓写下了第一条：\n\n睡醒后，闭眼深呼吸，尝试闻空气里最微小的气味，比如房间的木头、床单的织物、昨晚残留的气息。",
          "嗅觉复健清单（07.2023）\n1. 睡醒后，闭眼深呼吸，尝试闻空气里最微小的气味，比如房间的木头、床单的织物、昨晚残留的气息。\n2. 每日做饭前，仔细感受食材的原始气味。\n3. 离开汽车。挖掘日常路线途中的气味并归类（植物、食物、工业、人工香精等）。",
          "第一周的尝试属于生涩摸索。自己的鼻子已经太习惯于被忽视，苏醒它需要耐心。某个早晨，阳光透过窗帘缝隙，我遵循清单第一条，闭眼深呼吸。起初只有空气流动的触感，但渐渐地，枕头上残留有柔顺剂混合着皮肤的气味；脚趾蹭到的皮革床垫散发淡淡气息；书桌角落微微松口的酒精湿巾气味泄漏。这些微小的发现让我兴奋，惊讶于原来早晨除了是时间和光线，也可以是一种气味的组合。",
          "中午，Chan看我正坐在餐盘前，闭着眼皱着鼻子的样子。\n「你干嘛呢？」她一边剥着午餐的橙子，一边说。\n我把这场感官的慢性复健计划和已有的这些小小发现讲给Chan听。\n「怎么这么像你发明的新宗教仪式。」\nChan笑着举起两瓣橙子递到我俩鼻尖——橙皮细密的油点爆开来，气味又凉又锐利，那一刻，我知道这个嗅觉计划有了一位加入者。",
          "饭后我和Chan去校园后山散步，在被同学们称作阴风径的春风径上走走停停，炎热抑郁的热带植物在这里一年比一年长得旺盛。\n「你闻。」\n我邀请她一起深呼吸，气味冲击嗅觉神经，落叶腐烂，苔藓潮湿，避风的教学楼墙后，几乎有那种雨林特有的潮湿气息。\n我沿着石阶继续向上走，每走十几步就停下来练习呼吸。\n「好像说，」Chan突然说，「狗狗的鼻子可以闻出癫痫和癌症之类的？」\n「呵呵，人类的嗅觉绝对退化了。」\n话语之间我似乎活了过来，不知为何想起了小学时第一次发现呼吸的那个下午。这种时隔多年却首尾相接的生活隐喻，像是某种生命给我的递归暗示。",
          "像两只嗅探的动物，用鼻子重新绘制这条走过无数次的路。喧嚣的都市需要公园做它的肺。车声路尘之外，必须有些树木、有些花草，看似无关宏旨的点缀，其实在阴晴风雨裡默默供应清新的空气。",
          "嗅觉复健清单——情绪？（12.2023）\n4. 抛弃视觉吧，找几个不同气味的物品（水果、香料、草药、肥皂、木头等），闻它们，想象它们变成一种颜色、一种声音、一种情绪。气味能让你哭吗？\n5. 在城市中寻找五种不同的气味（如地铁、商场、街头小吃、洗衣房、汽油），然后去公园或树林里，寻找五种大自然的气味（如泥土、叶子、花、湖水、树皮）。对比两者的复杂性、持久度、舒适度。\n6. 在超市、菜市场、咖啡馆、书店等公共场所，深呼吸，尝试辨认空气中混合的气味，找到它的来源。",
          "五个月的复健后，我的鼻子变得敏感而挑剔。按照清单第四条，我在房间里闭眼，拿起一个柠檬，用指尖划开油蜡一样的表皮。气味带着刺痛感横冲直撞，我看见尖锐绿色，同时鼻子在目睹冰块撞击。再是一根艾草棒，通常被用来点燃后艾灸。暗绿色的沉静从鼻子开始蔓延，它是我的心情稳定器。然后是从柜子里找出里了一条围巾——多年前的——鼻子猛地收缩，我不记得妈妈用过什么香水，但我的身体记得。陷阱。海，陷阱里这次是记忆，不请自来的，无法驱散的。城市与自然气味的对比实验后，我发现自己开始偏向某些气味，排斥另一些。这种主观感受是否意味着我们的鼻子也有审美与偏好？在化学分子的世界里，美与丑的界限在哪里？",
          "嗅觉复健清单——重要补充（06.2024）\n7. 捏住鼻子20秒，松开感受空气涌入鼻腔时的不同层气味，感受嗅觉是否更敏锐。\n8. 触摸一块木头、一块石头、一片叶子，然后闻它们，用全部的感官认识它们。\n9. 像犬类学习。低头，靠近，深吸。再深一点。",
          "到了2024年中，我的嗅觉复健已持续一年半。按照最新的清单，我要学会像动物一样使用鼻子——低头，靠近，不带羞耻地深吸。",
          "某个周末，几个朋友提议组织一次「气味郊游」，算是正式承认我的「嗅觉复健」计划已成为我们之间的一个内部笑话。",
          "我们带着清单小册子，从城市出发，在半山腰下了巴士，沿着一条旧行山步道走。空气潮湿，夹杂着泥土气、青草碎裂的汁液味、风带来的不远处海水咸。我们像一群耳聋眼瞎的动物，在每一处蹲低、低头、嗅探——有人用鼻子贴近树皮，有人趴在地上闻野花的根部。有时笑场，有时真的闻到什么，便短暂地安静下来，像听见一个被遗忘的语言。",
          "地球最原始的语言——腐殖质、矿物质、微生物的呼吸交织成的复杂信息网。走回城市的路上，一辆公交车经过，尾气刺鼻。但我发现自己不再厌恶这气味，而是接受它作为这座城市的一部分声音。",
          "都市的气味图谱远比我想象的复杂，或许复健的目的不是恢复什么失去的能力，不是简单地将气味分为「好闻」和「难闻」，而是将它们视为这个复杂世界和我们的对话。",
          "呼吸是一种不断进出的过程，呼吸也是一种双向的运动。每一次吸入，我们接纳这个世界的一部分；每一次呼出，我们也将自己的一部分归还给世界。在这来来往往之间，我们与万物从未真正分离。",
          "希望呼吸畅顺而安稳。",
        ],
        fadeNote: "© 戚紫云 2025｜原创作品｜请勿擅自使用",
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
