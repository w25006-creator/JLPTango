const n1Words = [
  {
    kanji: "嗚呼",
    hiragana: "ああ",
    english: "ah!, oh!, alas!",
    example: {
      jp: "嗚呼、もう終わってしまった。",
      en: "Oh, it has already ended."
    }
  },
  {
    kanji: "相",
    hiragana: "あい",
    english: "mutually, together",
    example: {
      jp: "二人は相協力して働いた。",
      en: "The two worked together cooperatively."
    }
  },
  {
    kanji: "相変わらず",
    hiragana: "あいかわらず",
    english: "as usual, as ever",
    example: {
      jp: "彼は相変わらず元気です。",
      en: "He is as energetic as ever."
    }
  },
  {
    kanji: "愛想",
    hiragana: "あいそ",
    english: "friendliness, courtesy",
    example: {
      jp: "店員の愛想が良かった。",
      en: "The clerk was friendly."
    }
  },
  {
    kanji: "相対",
    hiragana: "あいたい",
    english: "facing, confrontation",
    example: {
      jp: "両者が相対して話した。",
      en: "The two parties talked face to face."
    }
  },
  {
    kanji: "間柄",
    hiragana: "あいだがら",
    english: "relationship",
    example: {
      jp: "二人は親しい間柄だ。",
      en: "The two have a close relationship."
    }
  },
  {
    kanji: "愛憎",
    hiragana: "あいぞう",
    english: "love and hate",
    example: {
      jp: "愛憎が入り混じった感情だ。",
      en: "It is a mixture of love and hate."
    }
  },
  {
    kanji: "合間",
    hiragana: "あいま",
    english: "interval, spare moment",
    example: {
      jp: "仕事の合間に休んだ。",
      en: "I rested during a break at work."
    }
  },
  {
    kanji: "曖昧",
    hiragana: "あいまい",
    english: "vague, ambiguous",
    example: {
      jp: "彼の説明は曖昧だった。",
      en: "His explanation was vague."
    }
  },
  {
    kanji: "敢えて",
    hiragana: "あえて",
    english: "dare to, intentionally",
    example: {
      jp: "敢えて難しい道を選んだ。",
      en: "I deliberately chose the difficult path."
    }
  },
  {
    kanji: "仰ぐ",
    hiragana: "あおぐ",
    english: "to respect, to look up to",
    example: {
      jp: "先生を仰いでいる。",
      en: "I respect my teacher."
    }
  },
  {
    kanji: "垢",
    hiragana: "あか",
    english: "dirt, filth",
    example: {
      jp: "垢を落とした。",
      en: "I washed away the dirt."
    }
  },
  {
    kanji: "亜科",
    hiragana: "あか",
    english: "subfamily, suborder",
    example: {
      jp: "同じ亜科に属する。",
      en: "They belong to the same subfamily."
    }
  },
  {
    kanji: "銅",
    hiragana: "あかがね",
    english: "copper",
    example: {
      jp: "銅は電気を通す。",
      en: "Copper conducts electricity."
    }
  },
  {
    kanji: "証",
    hiragana: "あかし",
    english: "proof, evidence",
    example: {
      jp: "努力の証だ。",
      en: "It is proof of effort."
    }
  },
  {
    kanji: "赤字",
    hiragana: "あかじ",
    english: "deficit",
    example: {
      jp: "会社は赤字になった。",
      en: "The company went into the red."
    }
  },
  {
    kanji: "明かす",
    hiragana: "あかす",
    english: "to reveal",
    example: {
      jp: "秘密を明かした。",
      en: "He revealed the secret."
    }
  },
  {
    kanji: "赤ちゃん",
    hiragana: "あかちゃん",
    english: "baby, infant",
    example: {
      jp: "赤ちゃんが眠っている。",
      en: "The baby is sleeping."
    }
  },
  {
    kanji: "明白",
    hiragana: "あからさま",
    english: "obvious, plain",
    example: {
      jp: "彼のミスは明白だ。",
      en: "His mistake is obvious."
    }
  },
  {
    kanji: "赤らむ",
    hiragana: "あからむ",
    english: "to blush",
    example: {
      jp: "顔が赤らんだ。",
      en: "My face turned red."
    }
  },
  {
    kanji: "明るい",
    hiragana: "あかるい",
    english: "bright, cheerful",
    example: {
      jp: "彼女は明るい性格だ。",
      en: "She has a cheerful personality."
    }
  },
  {
    kanji: "上がり",
    hiragana: "あがり",
    english: "rise, completion",
    example: {
      jp: "仕事の上がりは六時だ。",
      en: "Work finishes at six."
    }
  },
  {
    kanji: "上がる",
    hiragana: "あがる",
    english: "to rise, to increase",
    example: {
      jp: "気温が上がった。",
      en: "The temperature rose."
    }
  },
  {
    kanji: "商人",
    hiragana: "あきうど",
    english: "merchant",
    example: {
      jp: "昔の商人が町を歩いた。",
      en: "An old merchant walked through town."
    }
  },
  {
    kanji: "空き間",
    hiragana: "あきま",
    english: "empty space, vacancy",
    example: {
      jp: "座席に空き間がある。",
      en: "There is an empty seat."
    }
  },
  {
    kanji: "諦め",
    hiragana: "あきらめ",
    english: "resignation, giving up",
    example: {
      jp: "諦めは早い。",
      en: "Giving up is too early."
    }
  },
  {
    kanji: "呆れる",
    hiragana: "あきれる",
    english: "to be astonished",
    example: {
      jp: "彼の行動に呆れた。",
      en: "I was astonished by his actions."
    }
  },
  {
    kanji: "悪",
    hiragana: "あく",
    english: "evil",
    example: {
      jp: "悪を許してはいけない。",
      en: "Evil should not be tolerated."
    }
  },
  {
    kanji: "灰汁",
    hiragana: "あく",
    english: "bitterness, scum",
    example: {
      jp: "野菜の灰汁を取る。",
      en: "Remove the bitterness from vegetables."
    }
  },
  {
    kanji: "あくどい",
    hiragana: "あくどい",
    english: "vicious, excessive",
    example: {
      jp: "あくどい商売をしている。",
      en: "He runs a dishonest business."
    }
  },
  {
    kanji: "悪日",
    hiragana: "あくび",
    english: "unlucky day",
    example: {
      jp: "今日は悪日だと言われる。",
      en: "Today is considered unlucky."
    }
  },
  {
    kanji: "明くる",
    hiragana: "あくる",
    english: "following, next",
    example: {
      jp: "明くる日に出発した。",
      en: "We departed the next day."
    }
  },
  {
    kanji: "憧れ",
    hiragana: "あこがれ",
    english: "longing, admiration",
    example: {
      jp: "海外生活に憧れている。",
      en: "I long to live abroad."
    }
  },
  {
    kanji: "顎",
    hiragana: "あご",
    english: "chin, jaw",
    example: {
      jp: "顎が痛い。",
      en: "My jaw hurts."
    }
  },
  {
    kanji: "麻",
    hiragana: "あさ",
    english: "hemp, flax",
    example: {
      jp: "麻の服を着ている。",
      en: "He is wearing hemp clothing."
    }
  },
  {
    kanji: "浅ましい",
    hiragana: "あさましい",
    english: "shameful, despicable",
    example: {
      jp: "浅ましい行為だ。",
      en: "It is a shameful act."
    }
  },
  {
    kanji: "欺く",
    hiragana: "あざむく",
    english: "to deceive",
    example: {
      jp: "人を欺いてはいけない。",
      en: "You should not deceive others."
    }
  },
  {
    kanji: "鮮やか",
    hiragana: "あざやか",
    english: "vivid, brilliant",
    example: {
      jp: "鮮やかな色だ。",
      en: "It is a vivid color."
    }
  },
  {
    kanji: "嘲る",
    hiragana: "あざける",
    english: "to ridicule",
    example: {
      jp: "人を嘲ってはいけない。",
      en: "Do not ridicule others."
    }
  },
  {
    kanji: "足跡",
    hiragana: "あしあと",
    english: "footprint, trace",
    example: {
      jp: "雪に足跡が残った。",
      en: "Footprints remained in the snow."
    }
  },
    {
    kanji: "味わい",
    hiragana: "あじわい",
    english: "flavor, taste, charm",
    example: {
      jp: "この料理には深い味わいがあります。",
      en: "This dish has a rich flavor."
    }
  },
  {
    kanji: "預かる",
    hiragana: "あずかる",
    english: "to keep, to take charge of",
    example: {
      jp: "荷物を預かります。",
      en: "I will keep your luggage."
    }
  },
  {
    kanji: "預ける",
    hiragana: "あずける",
    english: "to deposit, to entrust",
    example: {
      jp: "銀行にお金を預けた。",
      en: "I deposited money in the bank."
    }
  },
  {
    kanji: "汗",
    hiragana: "あせ",
    english: "sweat",
    example: {
      jp: "暑くて汗が出た。",
      en: "I sweated because it was hot."
    }
  },
  {
    kanji: "焦る",
    hiragana: "あせる",
    english: "to be impatient, to panic",
    example: {
      jp: "焦らずに考えてください。",
      en: "Please think without panicking."
    }
  },
  {
    kanji: "値",
    hiragana: "あたい",
    english: "value, worth",
    example: {
      jp: "努力する値がある。",
      en: "It is worth making the effort."
    }
  },
  {
    kanji: "値する",
    hiragana: "あたいする",
    english: "to deserve, to be worth",
    example: {
      jp: "賞賛に値する行動だ。",
      en: "It is an action worthy of praise."
    }
  },
  {
    kanji: "悪化",
    hiragana: "あっか",
    english: "deterioration, worsening",
    example: {
      jp: "病状が悪化した。",
      en: "The illness became worse."
    }
  },
  {
    kanji: "圧迫",
    hiragana: "あっぱく",
    english: "pressure, oppression",
    example: {
      jp: "胸を圧迫される感じがする。",
      en: "I feel pressure in my chest."
    }
  },
  {
    kanji: "扱い",
    hiragana: "あつかい",
    english: "treatment, handling",
    example: {
      jp: "商品の扱いに注意してください。",
      en: "Please handle the product carefully."
    }
  },
  {
    kanji: "集まり",
    hiragana: "あつまり",
    english: "gathering, meeting",
    example: {
      jp: "友人の集まりに参加した。",
      en: "I attended a gathering of friends."
    }
  },
  {
    kanji: "圧力",
    hiragana: "あつりょく",
    english: "pressure",
    example: {
      jp: "政治的な圧力があった。",
      en: "There was political pressure."
    }
  },
  {
    kanji: "当て",
    hiragana: "あて",
    english: "expectation, reliance",
    example: {
      jp: "彼を当てにしている。",
      en: "I am relying on him."
    }
  },
  {
    kanji: "宛",
    hiragana: "あて",
    english: "addressed to",
    example: {
      jp: "田中さん宛の手紙です。",
      en: "This is a letter addressed to Mr. Tanaka."
    }
  },
  {
    kanji: "当て字",
    hiragana: "あてじ",
    english: "phonetic kanji",
    example: {
      jp: "寿司は当て字の一種です。",
      en: "Sushi is a kind of phonetic kanji spelling."
    }
  },
  {
    kanji: "圧倒",
    hiragana: "あっとう",
    english: "overwhelm",
    example: {
      jp: "相手チームを圧倒した。",
      en: "They overwhelmed the opposing team."
    }
  },
  {
    kanji: "後回し",
    hiragana: "あとまわし",
    english: "postponement",
    example: {
      jp: "宿題を後回しにした。",
      en: "I put off my homework."
    }
  },
  {
    kanji: "穴",
    hiragana: "あな",
    english: "hole",
    example: {
      jp: "道路に穴が開いている。",
      en: "There is a hole in the road."
    }
  },
  {
    kanji: "侮る",
    hiragana: "あなどる",
    english: "to underestimate, to despise",
    example: {
      jp: "相手を侮ってはいけない。",
      en: "Do not underestimate your opponent."
    }
  },
  {
    kanji: "浴びる",
    hiragana: "あびる",
    english: "to receive, to be exposed to",
    example: {
      jp: "太陽の光を浴びた。",
      en: "I was exposed to sunlight."
    }
  },
  {
    kanji: "溢れる",
    hiragana: "あふれる",
    english: "to overflow",
    example: {
      jp: "川の水が溢れた。",
      en: "The river overflowed."
    }
  },
  {
    kanji: "油絵",
    hiragana: "あぶらえ",
    english: "oil painting",
    example: {
      jp: "彼女は油絵を描いている。",
      en: "She paints oil paintings."
    }
  },
  {
    kanji: "炙る",
    hiragana: "あぶる",
    english: "to roast, to scorch",
    example: {
      jp: "魚を火で炙った。",
      en: "I roasted the fish over the fire."
    }
  },
  {
    kanji: "暴く",
    hiragana: "あばく",
    english: "to expose, to uncover",
    example: {
      jp: "事件の真実を暴いた。",
      en: "They uncovered the truth of the incident."
    }
  },
  {
    kanji: "甘える",
    hiragana: "あまえる",
    english: "to depend on, to act spoiled",
    example: {
      jp: "親に甘えてばかりはいけない。",
      en: "You should not always depend on your parents."
    }
  },
  {
    kanji: "余る",
    hiragana: "あまる",
    english: "to remain, to be left over",
    example: {
      jp: "時間が余った。",
      en: "There was time left over."
    }
  },
  {
    kanji: "編み物",
    hiragana: "あみもの",
    english: "knitting",
    example: {
      jp: "母は編み物が得意だ。",
      en: "My mother is good at knitting."
    }
  },
  {
    kanji: "網",
    hiragana: "あみ",
    english: "net",
    example: {
      jp: "魚を網で捕まえた。",
      en: "They caught fish with a net."
    }
  },
  {
    kanji: "操る",
    hiragana: "あやつる",
    english: "to operate, to manipulate",
    example: {
      jp: "彼は機械を巧みに操る。",
      en: "He skillfully operates the machine."
    }
  },
  {
    kanji: "危うい",
    hiragana: "あやうい",
    english: "dangerous, uncertain",
    example: {
      jp: "危うく事故になるところだった。",
      en: "It was almost an accident."
    }
  },
  {
    kanji: "怪しい",
    hiragana: "あやしい",
    english: "suspicious, doubtful",
    example: {
      jp: "怪しい人物を見かけた。",
      en: "I saw a suspicious person."
    }
  },
  {
    kanji: "誤る",
    hiragana: "あやまる",
    english: "to make a mistake",
    example: {
      jp: "判断を誤った。",
      en: "I made an incorrect judgment."
    }
  },
  {
    kanji: "歩み",
    hiragana: "あゆみ",
    english: "progress, history",
    example: {
      jp: "会社の歩みを紹介します。",
      en: "We introduce the company's history."
    }
  },
  {
    kanji: "荒い",
    hiragana: "あらい",
    english: "rough, violent",
    example: {
      jp: "波が荒い。",
      en: "The waves are rough."
    }
  },
  {
    kanji: "粗い",
    hiragana: "あらい",
    english: "coarse",
    example: {
      jp: "布の目が粗い。",
      en: "The fabric texture is coarse."
    }
  },
  {
    kanji: "予め",
    hiragana: "あらかじめ",
    english: "in advance",
    example: {
      jp: "予め連絡してください。",
      en: "Please contact us in advance."
    }
  },
  {
    kanji: "争い",
    hiragana: "あらそい",
    english: "conflict, dispute",
    example: {
      jp: "争いは避けたい。",
      en: "I want to avoid conflict."
    }
  },
  {
    kanji: "改まる",
    hiragana: "あらたまる",
    english: "to become formal",
    example: {
      jp: "改まった挨拶をした。",
      en: "I gave a formal greeting."
    }
  },
  {
    kanji: "改めて",
    hiragana: "あらためて",
    english: "again, once more",
    example: {
      jp: "改めてお礼を言います。",
      en: "I would like to thank you again."
    }
  },
  {
    kanji: "有り様",
    hiragana: "ありさま",
    english: "state, condition",
    example: {
      jp: "部屋はひどい有り様だった。",
      en: "The room was in terrible condition."
    }
  },
  {
    kanji: "有る",
    hiragana: "ある",
    english: "to exist, to have",
    example: {
      jp: "可能性は十分に有る。",
      en: "There is plenty of possibility."
    }
  },
  {
    kanji: "或いは",
    hiragana: "あるいは",
    english: "or, perhaps",
    example: {
      jp: "電車、或いはバスで行きます。",
      en: "I will go by train or perhaps by bus."
    }
  },
  {
    kanji: "現れる",
    hiragana: "あらわれる",
    english: "to appear",
    example: {
      jp: "突然人影が現れた。",
      en: "A figure suddenly appeared."
    }
  },
  {
    kanji: "有難い",
    hiragana: "ありがたい",
    english: "grateful, welcome",
    example: {
      jp: "ご協力は有難いです。",
      en: "Your cooperation is appreciated."
    }
  },
  {
    kanji: "有様",
    hiragana: "ありさま",
    english: "state, condition",
    example: {
      jp: "町はひどい有様だった。",
      en: "The town was in terrible condition."
    }
  },
  {
    kanji: "有りのまま",
    hiragana: "ありのまま",
    english: "as it is",
    example: {
      jp: "有りのままを話した。",
      en: "I told it exactly as it was."
    }
  },
  {
    kanji: "歩み",
    hiragana: "あゆみ",
    english: "progress, history",
    example: {
      jp: "会社の歩みを紹介します。",
      en: "We introduce the company's history."
    }
  },
  {
    kanji: "歩む",
    hiragana: "あゆむ",
    english: "to walk, to proceed",
    example: {
      jp: "人生を共に歩む。",
      en: "To walk through life together."
    }
  },
  {
    kanji: "誤り",
    hiragana: "あやまり",
    english: "mistake, error",
    example: {
      jp: "誤りを訂正した。",
      en: "I corrected the mistake."
    }
  },
  {
    kanji: "怪しむ",
    hiragana: "あやしむ",
    english: "to suspect",
    example: {
      jp: "彼の行動を怪しんだ。",
      en: "I became suspicious of his actions."
    }
  },
  {
    kanji: "危ぶむ",
    hiragana: "あやぶむ",
    english: "to fear, to worry about",
    example: {
      jp: "将来を危ぶんでいる。",
      en: "I worry about the future."
    }
  },
  {
    kanji: "操る",
    hiragana: "あやつる",
    english: "to manipulate, to operate",
    example: {
      jp: "彼は機械を操るのが上手だ。",
      en: "He is good at operating machines."
    }
  },
  {
    kanji: "荒い",
    hiragana: "あらい",
    english: "rough, wild",
    example: {
      jp: "海が荒い。",
      en: "The sea is rough."
    }
  },
  {
    kanji: "粗い",
    hiragana: "あらい",
    english: "coarse",
    example: {
      jp: "布の目が粗い。",
      en: "The fabric is coarse."
    }
  },
  {
    kanji: "予め",
    hiragana: "あらかじめ",
    english: "beforehand, in advance",
    example: {
      jp: "予め準備してください。",
      en: "Please prepare beforehand."
    }
  },
  {
    kanji: "改まる",
    hiragana: "あらたまる",
    english: "to become formal",
    example: {
      jp: "改まった態度を取った。",
      en: "He adopted a formal attitude."
    }
  },
  {
    kanji: "改める",
    hiragana: "あらためる",
    english: "to change, to reform",
    example: {
      jp: "生活習慣を改めた。",
      en: "I changed my lifestyle."
    }
  },
  {
    kanji: "争う",
    hiragana: "あらそう",
    english: "to compete, to dispute",
    example: {
      jp: "優勝を争った。",
      en: "They competed for the championship."
    }
  },
  {
    kanji: "荒廃",
    hiragana: "こうはい",
    english: "devastation, ruin",
    example: {
      jp: "戦争で町が荒廃した。",
      en: "The town was devastated by war."
    }
  },
  {
    kanji: "あらゆる",
    hiragana: "あらゆる",
    english: "all, every",
    example: {
      jp: "あらゆる方法を試した。",
      en: "I tried every method."
    }
  },
  {
    kanji: "現す",
    hiragana: "あらわす",
    english: "to express, to reveal",
    example: {
      jp: "感情を現した。",
      en: "He expressed his feelings."
    }
  },
  {
    kanji: "著す",
    hiragana: "あらわす",
    english: "to write, to publish",
    example: {
      jp: "彼は多くの本を著した。",
      en: "He wrote many books."
    }
  },
  {
    kanji: "有難う",
    hiragana: "ありがとう",
    english: "thank you",
    example: {
      jp: "助けてくれて有難う。",
      en: "Thank you for helping me."
    }
  },
  {
    kanji: "哀れ",
    hiragana: "あわれ",
    english: "pitiful, pathetic",
    example: {
      jp: "哀れな姿だった。",
      en: "It was a pitiful sight."
    }
  },
  {
    kanji: "案",
    hiragana: "あん",
    english: "plan, proposal",
    example: {
      jp: "新しい案を出した。",
      en: "I proposed a new plan."
    }
  },
  {
    kanji: "安易",
    hiragana: "あんい",
    english: "easygoing, careless",
    example: {
      jp: "安易な考えは危険だ。",
      en: "Careless thinking is dangerous."
    }
  },
  {
    kanji: "暗示",
    hiragana: "あんじ",
    english: "suggestion, hint",
    example: {
      jp: "彼は答えを暗示した。",
      en: "He hinted at the answer."
    }
  },
  {
    kanji: "暗礁",
    hiragana: "あんしょう",
    english: "reef, deadlock",
    example: {
      jp: "交渉は暗礁に乗り上げた。",
      en: "The negotiations reached a deadlock."
    }
  },
  {
    kanji: "安心",
    hiragana: "あんしん",
    english: "relief, peace of mind",
    example: {
      jp: "無事を聞いて安心した。",
      en: "I felt relieved to hear you were safe."
    }
  },
  {
    kanji: "安静",
    hiragana: "あんせい",
    english: "rest",
    example: {
      jp: "医者に安静を勧められた。",
      en: "The doctor recommended rest."
    }
  },
  {
    kanji: "案の定",
    hiragana: "あんのじょう",
    english: "just as expected",
    example: {
      jp: "案の定、失敗した。",
      en: "As expected, it failed."
    }
  },
  {
    kanji: "塩梅",
    hiragana: "あんばい",
    english: "condition, adjustment",
    example: {
      jp: "体の塩梅が悪い。",
      en: "I don't feel well."
    }
  },
  {
    kanji: "あんまり",
    hiragana: "あんまり",
    english: "not very, not much",
    example: {
      jp: "あんまり好きではない。",
      en: "I don't like it very much."
    }
  },
  {
    kanji: "意義",
    hiragana: "いぎ",
    english: "meaning, significance",
    example: {
      jp: "勉強する意義を考える。",
      en: "Consider the significance of studying."
    }
  },
  {
    kanji: "意向",
    hiragana: "いこう",
    english: "intention, inclination",
    example: {
      jp: "本人の意向を尊重する。",
      en: "Respect the person's wishes."
    }
  },
  {
    kanji: "移行",
    hiragana: "いこう",
    english: "transition, shift",
    example: {
      jp: "新制度へ移行する。",
      en: "Move to the new system."
    }
  },
  {
    kanji: "異議",
    hiragana: "いぎ",
    english: "objection",
    example: {
      jp: "異議があれば述べてください。",
      en: "Please state any objections."
    }
  },
  {
    kanji: "生き甲斐",
    hiragana: "いきがい",
    english: "purpose in life",
    example: {
      jp: "仕事が生き甲斐です。",
      en: "My work is my reason for living."
    }
  },
  {
    kanji: "意気込む",
    hiragana: "いきごむ",
    english: "to be enthusiastic",
    example: {
      jp: "試合に意気込んでいる。",
      en: "He is enthusiastic about the match."
    }
  },
  {
    kanji: "育成",
    hiragana: "いくせい",
    english: "training, development",
    example: {
      jp: "人材育成が重要だ。",
      en: "Human resource development is important."
    }
  },
  {
    kanji: "幾多",
    hiragana: "いくた",
    english: "many, numerous",
    example: {
      jp: "幾多の困難を乗り越えた。",
      en: "He overcame many difficulties."
    }
  },
  {
    kanji: "憩い",
    hiragana: "いこい",
    english: "rest, relaxation",
    example: {
      jp: "公園は市民の憩いの場だ。",
      en: "The park is a place of relaxation for citizens."
    }
  },
  {
    kanji: "勇ましい",
    hiragana: "いさましい",
    english: "brave, gallant",
    example: {
      jp: "勇ましい姿だった。",
      en: "It was a brave appearance."
    }
  },
  {
    kanji: "潔い",
    hiragana: "いさぎよい",
    english: "graceful, manly",
    example: {
      jp: "潔い態度に感心した。",
      en: "I admired his graceful attitude."
    }
  },
  {
    kanji: "依然",
    hiragana: "いぜん",
    english: "still, as yet",
    example: {
      jp: "状況は依然として厳しい。",
      en: "The situation is still severe."
    }
  },
  {
    kanji: "委託",
    hiragana: "いたく",
    english: "consignment, entrusting",
    example: {
      jp: "業務を委託した。",
      en: "The work was outsourced."
    }
  },
  {
    kanji: "痛感",
    hiragana: "つうかん",
    english: "keen realization",
    example: {
      jp: "努力の必要性を痛感した。",
      en: "I keenly realized the need for effort."
    }
  },
  {
    kanji: "至って",
    hiragana: "いたって",
    english: "extremely, very",
    example: {
      jp: "至って健康です。",
      en: "I am perfectly healthy."
    }
  },
  {
    kanji: "一概に",
    hiragana: "いちがいに",
    english: "unconditionally, generally",
    example: {
      jp: "一概に言えない。",
      en: "You cannot say that categorically."
    }
  },
  {
    kanji: "一同",
    hiragana: "いちどう",
    english: "all present, everyone",
    example: {
      jp: "一同感謝しております。",
      en: "Everyone is grateful."
    }
  },
    {
    kanji: "一変",
    hiragana: "いっぺん",
    english: "complete change",
    example: {
      jp: "町の景色が一変した。",
      en: "The town's scenery changed completely."
    }
  },
  {
    kanji: "意図",
    hiragana: "いと",
    english: "intention, purpose",
    example: {
      jp: "彼の意図が分からない。",
      en: "I do not understand his intention."
    }
  },
  {
    kanji: "営む",
    hiragana: "いとなむ",
    english: "to run, to carry on",
    example: {
      jp: "家族で店を営んでいる。",
      en: "The family runs a shop."
    }
  },
  {
    kanji: "挑む",
    hiragana: "いどむ",
    english: "to challenge",
    example: {
      jp: "新しい仕事に挑む。",
      en: "I challenge myself with a new job."
    }
  },
  {
    kanji: "威嚇",
    hiragana: "いかく",
    english: "threat, intimidation",
    example: {
      jp: "動物が敵を威嚇した。",
      en: "The animal threatened its enemy."
    }
  },
  {
    kanji: "異様",
    hiragana: "いよう",
    english: "strange, bizarre",
    example: {
      jp: "異様な雰囲気だった。",
      en: "It was a strange atmosphere."
    }
  },
  {
    kanji: "衣類",
    hiragana: "いるい",
    english: "clothing",
    example: {
      jp: "衣類を整理した。",
      en: "I organized my clothes."
    }
  },
  {
    kanji: "入り組む",
    hiragana: "いりくむ",
    english: "to be intricate, complicated",
    example: {
      jp: "話が入り組んでいる。",
      en: "The story is complicated."
    }
  },
  {
    kanji: "要る",
    hiragana: "いる",
    english: "to need",
    example: {
      jp: "時間が要る。",
      en: "It takes time."
    }
  },
  {
    kanji: "異論",
    hiragana: "いろん",
    english: "objection, different opinion",
    example: {
      jp: "異論はありません。",
      en: "I have no objection."
    }
  },
  {
    kanji: "印鑑",
    hiragana: "いんかん",
    english: "seal, personal stamp",
    example: {
      jp: "印鑑が必要です。",
      en: "A personal seal is required."
    }
  },
  {
    kanji: "陰気",
    hiragana: "いんき",
    english: "gloomy",
    example: {
      jp: "陰気な天気だ。",
      en: "The weather is gloomy."
    }
  },
  {
    kanji: "隠居",
    hiragana: "いんきょ",
    english: "retirement",
    example: {
      jp: "祖父は隠居した。",
      en: "My grandfather retired."
    }
  },
  {
    kanji: "印象",
    hiragana: "いんしょう",
    english: "impression",
    example: {
      jp: "良い印象を受けた。",
      en: "I got a good impression."
    }
  },
  {
    kanji: "引退",
    hiragana: "いんたい",
    english: "retirement",
    example: {
      jp: "選手が引退した。",
      en: "The athlete retired."
    }
  },
  {
    kanji: "陰謀",
    hiragana: "いんぼう",
    english: "conspiracy",
    example: {
      jp: "陰謀説を信じている。",
      en: "He believes in conspiracy theories."
    }
  },
  {
    kanji: "飢える",
    hiragana: "うえる",
    english: "to starve, to hunger",
    example: {
      jp: "知識に飢えている。",
      en: "I hunger for knowledge."
    }
  },
  {
    kanji: "植える",
    hiragana: "うえる",
    english: "to plant",
    example: {
      jp: "庭に花を植えた。",
      en: "I planted flowers in the garden."
    }
  },
  {
    kanji: "魚市場",
    hiragana: "うおいちば",
    english: "fish market",
    example: {
      jp: "朝早く魚市場へ行った。",
      en: "I went to the fish market early in the morning."
    }
  },
  {
    kanji: "浮気",
    hiragana: "うわき",
    english: "affair, unfaithfulness",
    example: {
      jp: "浮気が発覚した。",
      en: "The affair was discovered."
    }
  },
  {
    kanji: "浮かぶ",
    hiragana: "うかぶ",
    english: "to float, to come to mind",
    example: {
      jp: "良い考えが浮かんだ。",
      en: "A good idea came to mind."
    }
  },
  {
    kanji: "受け持つ",
    hiragana: "うけもつ",
    english: "to take charge of",
    example: {
      jp: "この授業を受け持っています。",
      en: "I am in charge of this class."
    }
  },
  {
    kanji: "薄暗い",
    hiragana: "うすぐらい",
    english: "dim",
    example: {
      jp: "部屋は薄暗かった。",
      en: "The room was dim."
    }
  },
  {
    kanji: "埋まる",
    hiragana: "うまる",
    english: "to be filled",
    example: {
      jp: "席が埋まった。",
      en: "The seats were filled."
    }
  },
  {
    kanji: "埋める",
    hiragana: "うめる",
    english: "to fill up",
    example: {
      jp: "穴を埋めた。",
      en: "I filled the hole."
    }
  },
  {
    kanji: "敬う",
    hiragana: "うやまう",
    english: "to respect",
    example: {
      jp: "年長者を敬う。",
      en: "Respect your elders."
    }
  },
  {
    kanji: "裏返す",
    hiragana: "うらがえす",
    english: "to turn inside out",
    example: {
      jp: "服を裏返した。",
      en: "I turned the clothes inside out."
    }
  },
  {
    kanji: "裏切る",
    hiragana: "うらぎる",
    english: "to betray",
    example: {
      jp: "友人を裏切った。",
      en: "He betrayed his friend."
    }
  },
  {
    kanji: "占う",
    hiragana: "うらなう",
    english: "to predict, to tell fortunes",
    example: {
      jp: "将来を占う。",
      en: "Predict the future."
    }
  },
  {
    kanji: "恨み",
    hiragana: "うらみ",
    english: "grudge, resentment",
    example: {
      jp: "恨みを抱いている。",
      en: "He holds a grudge."
    }
  },
  {
    kanji: "恨む",
    hiragana: "うらむ",
    english: "to resent",
    example: {
      jp: "運命を恨んだ。",
      en: "He resented his fate."
    }
  },
  {
    kanji: "羨ましい",
    hiragana: "うらやましい",
    english: "envious",
    example: {
      jp: "彼が羨ましい。",
      en: "I envy him."
    }
  },
  {
    kanji: "売り出し",
    hiragana: "うりだし",
    english: "sale, marketing",
    example: {
      jp: "新商品の売り出しが始まった。",
      en: "The new product sale started."
    }
  },
  {
    kanji: "潤う",
    hiragana: "うるおう",
    english: "to be enriched, to moisten",
    example: {
      jp: "雨で土地が潤った。",
      en: "The rain enriched the land."
    }
  },
  {
    kanji: "嬉しい",
    hiragana: "うれしい",
    english: "happy, glad",
    example: {
      jp: "合格して嬉しい。",
      en: "I am happy to have passed."
    }
  },
  {
    kanji: "上回る",
    hiragana: "うわまわる",
    english: "to exceed",
    example: {
      jp: "予想を上回った。",
      en: "It exceeded expectations."
    }
  },
  {
    kanji: "運河",
    hiragana: "うんが",
    english: "canal",
    example: {
      jp: "有名な運河を訪れた。",
      en: "I visited the famous canal."
    }
  },
  {
    kanji: "運営",
    hiragana: "うんえい",
    english: "management, operation",
    example: {
      jp: "会社の運営に参加する。",
      en: "Participate in company management."
    }
  },
  {
    kanji: "運送",
    hiragana: "うんそう",
    english: "transportation, shipping",
    example: {
      jp: "荷物を運送する。",
      en: "Transport the goods."
    }
  },
  {
    kanji: "運賃",
    hiragana: "うんちん",
    english: "fare, freight charge",
    example: {
      jp: "運賃が値上がりした。",
      en: "The fare increased."
    }
  },
  {
    kanji: "運搬",
    hiragana: "うんぱん",
    english: "transportation, conveyance",
    example: {
      jp: "荷物を運搬する。",
      en: "Transport the cargo."
    }
  },
  {
    kanji: "営業",
    hiragana: "えいぎょう",
    english: "business, operation",
    example: {
      jp: "店は営業中です。",
      en: "The store is open."
    }
  },
  {
    kanji: "栄光",
    hiragana: "えいこう",
    english: "glory",
    example: {
      jp: "栄光を勝ち取った。",
      en: "He won glory."
    }
  },
  {
    kanji: "映写",
    hiragana: "えいしゃ",
    english: "projection",
    example: {
      jp: "映画を映写した。",
      en: "The movie was projected."
    }
  },
  {
    kanji: "映像",
    hiragana: "えいぞう",
    english: "image, video",
    example: {
      jp: "映像が美しい。",
      en: "The visuals are beautiful."
    }
  },
  {
    kanji: "英雄",
    hiragana: "えいゆう",
    english: "hero",
    example: {
      jp: "彼は国民的英雄だ。",
      en: "He is a national hero."
    }
  },
  {
    kanji: "液体",
    hiragana: "えきたい",
    english: "liquid",
    example: {
      jp: "水は液体です。",
      en: "Water is a liquid."
    }
  },
  {
    kanji: "餌",
    hiragana: "えさ",
    english: "feed, bait",
    example: {
      jp: "魚に餌を与えた。",
      en: "I fed the fish."
    }
  },
  {
    kanji: "閲覧",
    hiragana: "えつらん",
    english: "inspection, reading",
    example: {
      jp: "資料を閲覧した。",
      en: "I examined the documents."
    }
  },
  {
    kanji: "獲物",
    hiragana: "えもの",
    english: "prey, catch",
    example: {
      jp: "獲物を追いかける。",
      en: "Chase the prey."
    }
  },
  {
    kanji: "縁",
    hiragana: "えん",
    english: "fate, connection, relationship",
    example: {
      jp: "人との縁を大切にしてください。",
      en: "Please value your relationships with people."
    }
  },
  {
    kanji: "沿う",
    hiragana: "そう",
    english: "to follow, to go along",
    example: {
      jp: "川に沿って歩いた。",
      en: "I walked along the river."
    }
  },
  {
    kanji: "援助",
    hiragana: "えんじょ",
    english: "assistance, aid",
    example: {
      jp: "被災地への援助が必要だ。",
      en: "Aid for the disaster area is necessary."
    }
  },
  {
    kanji: "演習",
    hiragana: "えんしゅう",
    english: "exercise, practice",
    example: {
      jp: "授業で演習を行った。",
      en: "We did exercises in class."
    }
  },
  {
    kanji: "演出",
    hiragana: "えんしゅつ",
    english: "production, direction",
    example: {
      jp: "舞台の演出が素晴らしい。",
      en: "The stage direction is wonderful."
    }
  },
  {
    kanji: "演説",
    hiragana: "えんぜつ",
    english: "speech, address",
    example: {
      jp: "首相が演説を行った。",
      en: "The prime minister gave a speech."
    }
  },
  {
    kanji: "煙突",
    hiragana: "えんとつ",
    english: "chimney",
    example: {
      jp: "煙突から煙が出ている。",
      en: "Smoke is coming from the chimney."
    }
  },
  {
    kanji: "追い込む",
    hiragana: "おいこむ",
    english: "to drive into, corner",
    example: {
      jp: "相手を追い込んだ。",
      en: "They cornered the opponent."
    }
  },
  {
    kanji: "追い出す",
    hiragana: "おいだす",
    english: "to drive out",
    example: {
      jp: "猫を外へ追い出した。",
      en: "I drove the cat outside."
    }
  },
  {
    kanji: "老いる",
    hiragana: "おいる",
    english: "to grow old",
    example: {
      jp: "誰でも老いる。",
      en: "Everyone grows old."
    }
  },
  {
    kanji: "応急",
    hiragana: "おうきゅう",
    english: "emergency",
    example: {
      jp: "応急処置をした。",
      en: "I gave first aid."
    }
  },
  {
    kanji: "応対",
    hiragana: "おうたい",
    english: "reception, dealing with",
    example: {
      jp: "丁寧に応対した。",
      en: "I responded politely."
    }
  },
  {
    kanji: "応用",
    hiragana: "おうよう",
    english: "application",
    example: {
      jp: "知識を応用する。",
      en: "Apply knowledge."
    }
  },
  {
    kanji: "大げさ",
    hiragana: "おおげさ",
    english: "exaggerated",
    example: {
      jp: "大げさに話した。",
      en: "He exaggerated the story."
    }
  },
  {
    kanji: "大筋",
    hiragana: "おおすじ",
    english: "outline, main point",
    example: {
      jp: "計画の大筋を説明した。",
      en: "I explained the outline of the plan."
    }
  },
  {
    kanji: "大空",
    hiragana: "おおぞら",
    english: "sky, heavens",
    example: {
      jp: "鳥が大空を飛ぶ。",
      en: "Birds fly in the sky."
    }
  },
  {
    kanji: "大幅",
    hiragana: "おおはば",
    english: "drastic, substantial",
    example: {
      jp: "価格が大幅に下がった。",
      en: "Prices dropped substantially."
    }
  },
  {
    kanji: "侵す",
    hiragana: "おかす",
    english: "to invade, violate",
    example: {
      jp: "権利を侵してはいけない。",
      en: "You must not violate rights."
    }
  },
  {
    kanji: "犯す",
    hiragana: "おかす",
    english: "to commit, to perpetrate",
    example: {
      jp: "大きな過ちを犯した。",
      en: "He committed a serious mistake."
    }
  },
  {
    kanji: "拝む",
    hiragana: "おがむ",
    english: "to worship, pray",
    example: {
      jp: "神社で拝んだ。",
      en: "I prayed at the shrine."
    }
  },
  {
    kanji: "補う",
    hiragana: "おぎなう",
    english: "to compensate, supplement",
    example: {
      jp: "不足分を補う。",
      en: "Make up for the shortage."
    }
  },
  {
    kanji: "臆病",
    hiragana: "おくびょう",
    english: "cowardly",
    example: {
      jp: "彼は少し臆病だ。",
      en: "He is somewhat cowardly."
    }
  },
  {
    kanji: "屋外",
    hiragana: "おくがい",
    english: "outdoors",
    example: {
      jp: "屋外で運動する。",
      en: "Exercise outdoors."
    }
  },
  {
    kanji: "送り仮名",
    hiragana: "おくりがな",
    english: "kana suffix",
    example: {
      jp: "送り仮名に注意してください。",
      en: "Pay attention to okurigana."
    }
  },
  {
    kanji: "収まる",
    hiragana: "おさまる",
    english: "to settle down",
    example: {
      jp: "騒ぎが収まった。",
      en: "The disturbance settled down."
    }
  },
  {
    kanji: "納まる",
    hiragana: "おさまる",
    english: "to fit into",
    example: {
      jp: "箱に納まった。",
      en: "It fit into the box."
    }
  },
  {
    kanji: "治まる",
    hiragana: "おさまる",
    english: "to be cured, calm down",
    example: {
      jp: "痛みが治まった。",
      en: "The pain subsided."
    }
  },
  {
    kanji: "収める",
    hiragana: "おさめる",
    english: "to obtain, achieve",
    example: {
      jp: "成功を収めた。",
      en: "He achieved success."
    }
  },
  {
    kanji: "納める",
    hiragana: "おさめる",
    english: "to pay, deliver",
    example: {
      jp: "税金を納めた。",
      en: "I paid the taxes."
    }
  },
  {
    kanji: "治める",
    hiragana: "おさめる",
    english: "to govern",
    example: {
      jp: "国を治める。",
      en: "Govern a country."
    }
  },
  {
    kanji: "惜しい",
    hiragana: "おしい",
    english: "regrettable,惜しい",
    example: {
      jp: "惜しい試合だった。",
      en: "It was a close match."
    }
  },
  {
    kanji: "惜しむ",
    hiragana: "おしむ",
    english: "to regret, spare",
    example: {
      jp: "努力を惜しまない。",
      en: "Spare no effort."
    }
  },
  {
    kanji: "押し寄せる",
    hiragana: "おしよせる",
    english: "to rush in",
    example: {
      jp: "波が押し寄せた。",
      en: "The waves rushed in."
    }
  },
  {
    kanji: "おだてる",
    hiragana: "おだてる",
    english: "to flatter",
    example: {
      jp: "彼をおだてないでください。",
      en: "Please don't flatter him."
    }
  },
  {
    kanji: "落ち着き",
    hiragana: "おちつき",
    english: "calmness",
    example: {
      jp: "落ち着きを取り戻した。",
      en: "I regained my composure."
    }
  },
  {
    kanji: "乙",
    hiragana: "おつ",
    english: "second class, peculiar",
    example: {
      jp: "乙な味がする。",
      en: "It has a unique taste."
    }
  },
  {
    kanji: "脅かす",
    hiragana: "おどかす",
    english: "to threaten, surprise",
    example: {
      jp: "子供を脅かした。",
      en: "He frightened the child."
    }
  },
  {
    kanji: "衰える",
    hiragana: "おとろえる",
    english: "to weaken",
    example: {
      jp: "体力が衰えた。",
      en: "My physical strength weakened."
    }
  },
  {
    kanji: "驚き",
    hiragana: "おどろき",
    english: "surprise",
    example: {
      jp: "驚きの結果だった。",
      en: "It was a surprising result."
    }
  },
  {
    kanji: "脅す",
    hiragana: "おどす",
    english: "to threaten",
    example: {
      jp: "人を脅してはいけない。",
      en: "You must not threaten people."
    }
  },
  {
    kanji: "各々",
    hiragana: "おのおの",
    english: "each, every",
    example: {
      jp: "各々の意見を聞く。",
      en: "Listen to each person's opinion."
    }
  },
  {
    kanji: "自ずと",
    hiragana: "おのずと",
    english: "naturally",
    example: {
      jp: "答えは自ずと分かる。",
      en: "The answer becomes clear naturally."
    }
  },
  {
    kanji: "怯える",
    hiragana: "おびえる",
    english: "to be frightened",
    example: {
      jp: "犬が雷に怯えている。",
      en: "The dog is frightened of thunder."
    }
  },
  {
    kanji: "帯びる",
    hiragana: "おびる",
    english: "to carry, to be tinged with",
    example: {
      jp: "赤みを帯びている。",
      en: "It has a reddish tint."
    }
  },
  {
    kanji: "おまけ",
    hiragana: "おまけ",
    english: "bonus, free gift",
    example: {
      jp: "おまけをもらった。",
      en: "I received a free gift."
    }
  },
  {
    kanji: "お宮",
    hiragana: "おみや",
    english: "shrine",
    example: {
      jp: "お宮へ参拝した。",
      en: "I visited the shrine."
    }
  },
  {
    kanji: "思い付き",
    hiragana: "おもいつき",
    english: "idea, inspiration",
    example: {
      jp: "思い付きで始めた。",
      en: "I started it on a whim."
    }
  },
  {
    kanji: "赴く",
    hiragana: "おもむく",
    english: "to proceed to, head toward",
    example: {
      jp: "現場へ赴いた。",
      en: "He went to the site."
    }
  },
  {
    kanji: "重んじる",
    hiragana: "おもんじる",
    english: "to value, respect",
    example: {
      jp: "伝統を重んじる。",
      en: "Respect tradition."
    }
  },
  {
    kanji: "及ぼす",
    hiragana: "およぼす",
    english: "to exert, affect",
    example: {
      jp: "環境に影響を及ぼす。",
      en: "It affects the environment."
    }
  },
  {
    kanji: "及ぶ",
    hiragana: "およぶ",
    english: "to reach, to amount to",
    example: {
      jp: "被害は全国に及んだ。",
      en: "The damage spread throughout the country."
    }
  },
  {
    kanji: "折",
    hiragana: "おり",
    english: "opportunity, occasion",
    example: {
      jp: "近くに来た折には寄ってください。",
      en: "Please stop by when you are nearby."
    }
  },
  {
    kanji: "織物",
    hiragana: "おりもの",
    english: "textile, fabric",
    example: {
      jp: "京都の織物は有名だ。",
      en: "Kyoto textiles are famous."
    }
  },
  {
    kanji: "下ろす",
    hiragana: "おろす",
    english: "to lower, to unload",
    example: {
      jp: "荷物を車から下ろした。",
      en: "I unloaded the luggage from the car."
    }
  },
  {
    kanji: "卸す",
    hiragana: "おろす",
    english: "to sell wholesale",
    example: {
      jp: "商品を店に卸している。",
      en: "They wholesale products to stores."
    }
  },
  {
    kanji: "恩恵",
    hiragana: "おんけい",
    english: "blessing, benefit",
    example: {
      jp: "科学の恩恵を受けている。",
      en: "We benefit from science."
    }
  },
  {
    kanji: "穏やか",
    hiragana: "おだやか",
    english: "calm, gentle",
    example: {
      jp: "穏やかな天気だった。",
      en: "The weather was calm."
    }
  },
  {
    kanji: "温和",
    hiragana: "おんわ",
    english: "gentle, mild",
    example: {
      jp: "彼は温和な性格だ。",
      en: "He has a gentle personality."
    }
  },
  {
    kanji: "甲",
    hiragana: "こう",
    english: "first, former",
    example: {
      jp: "甲と乙を比較する。",
      en: "Compare A and B."
    }
  },
  {
    kanji: "甲乙",
    hiragana: "こうおつ",
    english: "superiority or inferiority",
    example: {
      jp: "甲乙つけがたい。",
      en: "It is difficult to choose between them."
    }
  },
  {
    kanji: "好意",
    hiragana: "こうい",
    english: "goodwill, favor",
    example: {
      jp: "彼の好意に感謝する。",
      en: "I appreciate his kindness."
    }
  },
  {
    kanji: "行為",
    hiragana: "こうい",
    english: "act, conduct",
    example: {
      jp: "危険な行為は禁止です。",
      en: "Dangerous acts are prohibited."
    }
  },
  {
    kanji: "強引",
    hiragana: "ごういん",
    english: "forcible, pushy",
    example: {
      jp: "強引に話を進めた。",
      en: "He pushed the discussion forward forcefully."
    }
  },
  {
    kanji: "公益",
    hiragana: "こうえき",
    english: "public interest",
    example: {
      jp: "公益を重視する。",
      en: "Value the public interest."
    }
  },
  {
    kanji: "高価",
    hiragana: "こうか",
    english: "expensive, valuable",
    example: {
      jp: "高価な時計を買った。",
      en: "I bought an expensive watch."
    }
  },
  {
    kanji: "降下",
    hiragana: "こうか",
    english: "descent",
    example: {
      jp: "飛行機が降下を始めた。",
      en: "The airplane began descending."
    }
  },
  {
    kanji: "高級",
    hiragana: "こうきゅう",
    english: "high-class, luxury",
    example: {
      jp: "高級レストランへ行った。",
      en: "I went to a luxury restaurant."
    }
  },
  {
    kanji: "抗議",
    hiragana: "こうぎ",
    english: "protest, objection",
    example: {
      jp: "市民が抗議した。",
      en: "Citizens protested."
    }
  },
  {
    kanji: "興業",
    hiragana: "こうぎょう",
    english: "entertainment business",
    example: {
      jp: "映画興業が成功した。",
      en: "The movie business succeeded."
    }
  },
  {
    kanji: "貢献",
    hiragana: "こうけん",
    english: "contribution",
    example: {
      jp: "社会に貢献したい。",
      en: "I want to contribute to society."
    }
  },
  {
    kanji: "口実",
    hiragana: "こうじつ",
    english: "excuse, pretext",
    example: {
      jp: "病気を口実に休んだ。",
      en: "He used illness as an excuse."
    }
  },
  {
    kanji: "向上",
    hiragana: "こうじょう",
    english: "improvement",
    example: {
      jp: "技術の向上を目指す。",
      en: "Aim to improve skills."
    }
  },
  {
    kanji: "拘束",
    hiragana: "こうそく",
    english: "restraint, restriction",
    example: {
      jp: "自由を拘束された。",
      en: "His freedom was restricted."
    }
  },
  {
    kanji: "後退",
    hiragana: "こうたい",
    english: "retreat, decline",
    example: {
      jp: "景気が後退した。",
      en: "The economy declined."
    }
  },
  {
    kanji: "好調",
    hiragana: "こうちょう",
    english: "favorable condition",
    example: {
      jp: "売上は好調だ。",
      en: "Sales are going well."
    }
  },
  {
    kanji: "肯定",
    hiragana: "こうてい",
    english: "affirmation",
    example: {
      jp: "彼はその意見を肯定した。",
      en: "He affirmed the opinion."
    }
  },
  {
    kanji: "購読",
    hiragana: "こうどく",
    english: "subscription",
    example: {
      jp: "新聞を購読している。",
      en: "I subscribe to a newspaper."
    }
  },
  {
    kanji: "購入",
    hiragana: "こうにゅう",
    english: "purchase",
    example: {
      jp: "新しい車を購入した。",
      en: "I purchased a new car."
    }
  },
  {
    kanji: "公平",
    hiragana: "こうへい",
    english: "fairness",
    example: {
      jp: "公平な判断をする。",
      en: "Make a fair judgment."
    }
  },
  {
    kanji: "公募",
    hiragana: "こうぼ",
    english: "public recruitment",
    example: {
      jp: "作品を公募した。",
      en: "The works were publicly solicited."
    }
  },
  {
    kanji: "巧妙",
    hiragana: "こうみょう",
    english: "ingenious, skillful",
    example: {
      jp: "巧妙な手口だった。",
      en: "It was a clever trick."
    }
  },
  {
    kanji: "効率",
    hiragana: "こうりつ",
    english: "efficiency",
    example: {
      jp: "仕事の効率を上げる。",
      en: "Improve work efficiency."
    }
  },
  {
    kanji: "交流",
    hiragana: "こうりゅう",
    english: "exchange, interaction",
    example: {
      jp: "学生同士が交流した。",
      en: "The students interacted."
    }
  },
  {
    kanji: "考慮",
    hiragana: "こうりょ",
    english: "consideration",
    example: {
      jp: "事情を考慮してください。",
      en: "Please take the circumstances into account."
    }
  },
  {
    kanji: "越える",
    hiragana: "こえる",
    english: "to exceed, to cross",
    example: {
      jp: "百人を越えた。",
      en: "It exceeded one hundred people."
    }
  },
  {
    kanji: "焦げる",
    hiragana: "こげる",
    english: "to burn, scorch",
    example: {
      jp: "パンが焦げた。",
      en: "The bread got burnt."
    }
  },
  {
    kanji: "心掛ける",
    hiragana: "こころがける",
    english: "to keep in mind",
    example: {
      jp: "健康に心掛けている。",
      en: "I try to stay healthy."
    }
  },
  {
    kanji: "試み",
    hiragana: "こころみ",
    english: "attempt, trial",
    example: {
      jp: "新しい試みを始めた。",
      en: "We started a new attempt."
    }
  },
  {
    kanji: "試みる",
    hiragana: "こころみる",
    english: "to attempt",
    example: {
      jp: "実験を試みた。",
      en: "I attempted the experiment."
    }
  },
  {
    kanji: "志",
    hiragana: "こころざし",
    english: "ambition, aspiration",
    example: {
      jp: "高い志を持つ。",
      en: "Have high aspirations."
    }
  },
  {
    kanji: "志す",
    hiragana: "こころざす",
    english: "to aspire to",
    example: {
      jp: "医者を志している。",
      en: "He aspires to become a doctor."
    }
  },
  {
    kanji: "心得る",
    hiragana: "こころえる",
    english: "to understand, know",
    example: {
      jp: "礼儀を心得ている。",
      en: "He understands proper manners."
    }
  },
  {
    kanji: "個々",
    hiragana: "ここ",
    english: "individual, each",
    example: {
      jp: "個々の事情が異なる。",
      en: "Each circumstance is different."
    }
  },
  {
    kanji: "拒む",
    hiragana: "こばむ",
    english: "to refuse, reject",
    example: {
      jp: "提案を拒んだ。",
      en: "He rejected the proposal."
    }
  },
  {
    kanji: "誇張",
    hiragana: "こちょう",
    english: "exaggeration",
    example: {
      jp: "少し誇張して話した。",
      en: "He exaggerated a little."
    }
  },
  {
    kanji: "滑稽",
    hiragana: "こっけい",
    english: "funny, ridiculous",
    example: {
      jp: "滑稽な場面だった。",
      en: "It was a comical scene."
    }
  },
  {
    kanji: "孤独",
    hiragana: "こどく",
    english: "loneliness",
    example: {
      jp: "孤独を感じる。",
      en: "I feel lonely."
    }
  },
  {
    kanji: "好ましい",
    hiragana: "このましい",
    english: "desirable, favorable",
    example: {
      jp: "好ましい結果となった。",
      en: "It became a desirable result."
    }
  },
  {
    kanji: "混合",
    hiragana: "こんごう",
    english: "mixture",
    example: {
      jp: "二つの液体を混合した。",
      en: "The two liquids were mixed."
    }
  },
  {
    kanji: "根拠",
    hiragana: "こんきょ",
    english: "basis, grounds",
    example: {
      jp: "その根拠を示してください。",
      en: "Please show the evidence."
    }
  },
  {
    kanji: "混雑",
    hiragana: "こんざつ",
    english: "crowding, congestion",
    example: {
      jp: "駅は朝から混雑している。",
      en: "The station is crowded from the morning."
    }
  },
  {
    kanji: "困難",
    hiragana: "こんなん",
    english: "difficulty, hardship",
    example: {
      jp: "困難を乗り越えた。",
      en: "He overcame difficulties."
    }
  },
  {
    kanji: "今日",
    hiragana: "こんにち",
    english: "today, present age",
    example: {
      jp: "今日の社会問題を考える。",
      en: "Consider today's social problems."
    }
  },
  {
    kanji: "混乱",
    hiragana: "こんらん",
    english: "confusion, disorder",
    example: {
      jp: "会場は混乱した。",
      en: "The venue fell into confusion."
    }
  },
  {
    kanji: "差異",
    hiragana: "さい",
    english: "difference, discrepancy",
    example: {
      jp: "両者に差異がある。",
      en: "There is a difference between the two."
    }
  },
  {
    kanji: "採算",
    hiragana: "さいさん",
    english: "profitability",
    example: {
      jp: "採算が取れない。",
      en: "It is not profitable."
    }
  },
  {
    kanji: "再生",
    hiragana: "さいせい",
    english: "regeneration, playback",
    example: {
      jp: "動画を再生する。",
      en: "Play the video."
    }
  },
  {
    kanji: "最善",
    hiragana: "さいぜん",
    english: "best, utmost",
    example: {
      jp: "最善を尽くした。",
      en: "I did my best."
    }
  },
  {
    kanji: "採択",
    hiragana: "さいたく",
    english: "adoption, approval",
    example: {
      jp: "提案が採択された。",
      en: "The proposal was adopted."
    }
  },
  {
    kanji: "再燃",
    hiragana: "さいねん",
    english: "rekindling",
    example: {
      jp: "議論が再燃した。",
      en: "The debate reignited."
    }
  },
  {
    kanji: "栽培",
    hiragana: "さいばい",
    english: "cultivation",
    example: {
      jp: "野菜を栽培している。",
      en: "They cultivate vegetables."
    }
  },
  {
    kanji: "細胞",
    hiragana: "さいぼう",
    english: "cell",
    example: {
      jp: "細胞を研究している。",
      en: "They study cells."
    }
  },
  {
    kanji: "材木",
    hiragana: "ざいもく",
    english: "timber, lumber",
    example: {
      jp: "材木を運んだ。",
      en: "They transported lumber."
    }
  },
  {
    kanji: "遮る",
    hiragana: "さえぎる",
    english: "to interrupt, block",
    example: {
      jp: "話を遮らないでください。",
      en: "Please do not interrupt."
    }
  },
  {
    kanji: "作用",
    hiragana: "さよう",
    english: "effect, action",
    example: {
      jp: "薬が作用している。",
      en: "The medicine is taking effect."
    }
  },
  {
    kanji: "妨げる",
    hiragana: "さまたげる",
    english: "to hinder",
    example: {
      jp: "発展を妨げる。",
      en: "Hinder development."
    }
  },
  {
    kanji: "さほど",
    hiragana: "さほど",
    english: "not so much",
    example: {
      jp: "さほど難しくない。",
      en: "It is not that difficult."
    }
  },
  {
    kanji: "産出",
    hiragana: "さんしゅつ",
    english: "production, yield",
    example: {
      jp: "石油を産出する。",
      en: "Produce oil."
    }
  },
  {
    kanji: "参照",
    hiragana: "さんしょう",
    english: "reference",
    example: {
      jp: "資料を参照してください。",
      en: "Please refer to the materials."
    }
  },
  {
    kanji: "賛成",
    hiragana: "さんせい",
    english: "agreement, approval",
    example: {
      jp: "その意見に賛成です。",
      en: "I agree with that opinion."
    }
  },
  {
    kanji: "残高",
    hiragana: "ざんだか",
    english: "balance",
    example: {
      jp: "口座残高を確認した。",
      en: "I checked my account balance."
    }
  },
  {
    kanji: "惨事",
    hiragana: "さんじ",
    english: "disaster, tragedy",
    example: {
      jp: "大きな惨事が起きた。",
      en: "A major tragedy occurred."
    }
  },
  {
    kanji: "仕える",
    hiragana: "つかえる",
    english: "to serve",
    example: {
      jp: "王に仕える。",
      en: "Serve the king."
    }
  },
  {
    kanji: "強いて",
    hiragana: "しいて",
    english: "by force, dare to",
    example: {
      jp: "強いて言えば賛成です。",
      en: "If I had to say, I agree."
    }
  },
  {
    kanji: "しいんと",
    hiragana: "しいんと",
    english: "silent, quiet",
    example: {
      jp: "部屋はしいんとしていた。",
      en: "The room was completely silent."
    }
  },
  {
    kanji: "自覚",
    hiragana: "じかく",
    english: "self-awareness",
    example: {
      jp: "責任を自覚する。",
      en: "Be aware of one's responsibility."
    }
  },
  {
    kanji: "自我",
    hiragana: "じが",
    english: "ego, self",
    example: {
      jp: "自我が芽生える。",
      en: "The ego develops."
    }
  },
  {
    kanji: "指揮",
    hiragana: "しき",
    english: "command, direction",
    example: {
      jp: "部隊を指揮した。",
      en: "He commanded the troops."
    }
  },
  {
    kanji: "資源",
    hiragana: "しげん",
    english: "resource",
    example: {
      jp: "天然資源が豊富だ。",
      en: "Natural resources are abundant."
    }
  },
  {
    kanji: "施行",
    hiragana: "しこう",
    english: "enforcement",
    example: {
      jp: "法律が施行された。",
      en: "The law was enforced."
    }
  },
  {
    kanji: "思考",
    hiragana: "しこう",
    english: "thinking, thought",
    example: {
      jp: "思考力を鍛える。",
      en: "Train thinking ability."
    }
  },
  {
    kanji: "試行",
    hiragana: "しこう",
    english: "trial",
    example: {
      jp: "試行錯誤を繰り返した。",
      en: "We repeated trial and error."
    }
  },
  {
    kanji: "事項",
    hiragana: "じこう",
    english: "matter, item",
    example: {
      jp: "注意事項を読む。",
      en: "Read the precautions."
    }
  },
  {
    kanji: "施策",
    hiragana: "しさく",
    english: "measure, policy",
    example: {
      jp: "新しい施策を導入した。",
      en: "A new policy was introduced."
    }
  },
  {
    kanji: "持続",
    hiragana: "じぞく",
    english: "continuation, sustainability",
    example: {
      jp: "成長を持続する。",
      en: "Maintain growth."
    }
  },
  {
    kanji: "実践",
    hiragana: "じっせん",
    english: "practice, implementation",
    example: {
      jp: "理論を実践する。",
      en: "Put theory into practice."
    }
  },
  {
    kanji: "執着",
    hiragana: "しゅうちゃく",
    english: "attachment, obsession",
    example: {
      jp: "物に執着しない。",
      en: "Do not become attached to possessions."
    }
  },
  {
    kanji: "柔軟",
    hiragana: "じゅうなん",
    english: "flexible",
    example: {
      jp: "柔軟な考え方が必要だ。",
      en: "Flexible thinking is necessary."
    }
  },
  {
    kanji: "重複",
    hiragana: "ちょうふく",
    english: "duplication, overlap",
    example: {
      jp: "内容が重複している。",
      en: "The contents overlap."
    }
  },
  {
    kanji: "集計",
    hiragana: "しゅうけい",
    english: "tabulation",
    example: {
      jp: "データを集計した。",
      en: "The data was tabulated."
    }
  },
  {
    kanji: "修復",
    hiragana: "しゅうふく",
    english: "repair, restoration",
    example: {
      jp: "文化財を修復した。",
      en: "The cultural property was restored."
    }
  },
  {
    kanji: "需要",
    hiragana: "じゅよう",
    english: "demand",
    example: {
      jp: "需要が増えている。",
      en: "Demand is increasing."
    }
  },
  {
    kanji: "循環",
    hiragana: "じゅんかん",
    english: "circulation",
    example: {
      jp: "水が循環している。",
      en: "Water is circulating."
    }
  },
  {
    kanji: "順応",
    hiragana: "じゅんのう",
    english: "adaptation",
    example: {
      jp: "環境に順応した。",
      en: "He adapted to the environment."
    }
  },
  {
    kanji: "衝撃",
    hiragana: "しょうげき",
    english: "shock, impact",
    example: {
      jp: "大きな衝撃を受けた。",
      en: "I received a great shock."
    }
  },
  {
    kanji: "象徴",
    hiragana: "しょうちょう",
    english: "symbol",
    example: {
      jp: "平和の象徴だ。",
      en: "It is a symbol of peace."
    }
  },
  {
    kanji: "証明",
    hiragana: "しょうめい",
    english: "proof, demonstration",
    example: {
      jp: "身分を証明する。",
      en: "Prove your identity."
    }
  },
  {
    kanji: "省略",
    hiragana: "しょうりゃく",
    english: "omission",
    example: {
      jp: "説明を省略した。",
      en: "I omitted the explanation."
    }
  },
  {
    kanji: "所属",
    hiragana: "しょぞく",
    english: "affiliation",
    example: {
      jp: "大学に所属している。",
      en: "I belong to the university."
    }
  },
  {
    kanji: "慎重",
    hiragana: "しんちょう",
    english: "careful, prudent",
    example: {
      jp: "慎重に判断する。",
      en: "Judge carefully."
    }
  },
    {
    kanji: "真相",
    hiragana: "しんそう",
    english: "truth, real situation",
    example: {
      jp: "事件の真相を調べている。",
      en: "They are investigating the truth of the incident."
    }
  },
  {
    kanji: "浸透",
    hiragana: "しんとう",
    english: "penetration, permeation",
    example: {
      jp: "新しい制度が浸透した。",
      en: "The new system became widespread."
    }
  },
  {
    kanji: "振動",
    hiragana: "しんどう",
    english: "vibration",
    example: {
      jp: "地面が振動した。",
      en: "The ground vibrated."
    }
  },
  {
    kanji: "進展",
    hiragana: "しんてん",
    english: "progress, development",
    example: {
      jp: "交渉が進展した。",
      en: "The negotiations progressed."
    }
  },
  {
    kanji: "信念",
    hiragana: "しんねん",
    english: "belief, conviction",
    example: {
      jp: "自分の信念を貫く。",
      en: "Stick to your beliefs."
    }
  },
  {
    kanji: "辛抱",
    hiragana: "しんぼう",
    english: "patience, endurance",
    example: {
      jp: "辛抱強く待った。",
      en: "I waited patiently."
    }
  },
  {
    kanji: "推測",
    hiragana: "すいそく",
    english: "guess, conjecture",
    example: {
      jp: "原因を推測する。",
      en: "Guess the cause."
    }
  },
  {
    kanji: "遂行",
    hiragana: "すいこう",
    english: "accomplishment, execution",
    example: {
      jp: "任務を遂行した。",
      en: "He carried out the mission."
    }
  },
  {
    kanji: "衰退",
    hiragana: "すいたい",
    english: "decline, decay",
    example: {
      jp: "産業が衰退した。",
      en: "The industry declined."
    }
  },
  {
    kanji: "推薦",
    hiragana: "すいせん",
    english: "recommendation",
    example: {
      jp: "先生に推薦された。",
      en: "I was recommended by my teacher."
    }
  },
  {
    kanji: "随時",
    hiragana: "ずいじ",
    english: "at any time, whenever necessary",
    example: {
      jp: "結果を随時報告する。",
      en: "Report the results as needed."
    }
  },
  {
    kanji: "水平",
    hiragana: "すいへい",
    english: "horizontal, level",
    example: {
      jp: "机が水平ではない。",
      en: "The desk is not level."
    }
  },
  {
    kanji: "衰弱",
    hiragana: "すいじゃく",
    english: "weakness, debility",
    example: {
      jp: "体力が衰弱した。",
      en: "His physical strength weakened."
    }
  },
  {
    kanji: "末永い",
    hiragana: "すえながい",
    english: "lasting forever",
    example: {
      jp: "末永い幸せを願います。",
      en: "I wish you lasting happiness."
    }
  },
  {
    kanji: "姿勢",
    hiragana: "しせい",
    english: "posture, attitude",
    example: {
      jp: "姿勢を正してください。",
      en: "Please straighten your posture."
    }
  },
  {
    kanji: "施行",
    hiragana: "しこう",
    english: "enforcement",
    example: {
      jp: "法律が施行された。",
      en: "The law was enforced."
    }
  },
  {
    kanji: "自粛",
    hiragana: "じしゅく",
    english: "self-restraint",
    example: {
      jp: "外出を自粛した。",
      en: "People refrained from going out."
    }
  },
  {
    kanji: "持続",
    hiragana: "じぞく",
    english: "continuation, sustainability",
    example: {
      jp: "経済成長を持続する。",
      en: "Maintain economic growth."
    }
  },
  {
    kanji: "実態",
    hiragana: "じったい",
    english: "actual condition",
    example: {
      jp: "実態を調査する。",
      en: "Investigate the actual situation."
    }
  },
  {
    kanji: "執念",
    hiragana: "しゅうねん",
    english: "tenacity, obsession",
    example: {
      jp: "執念で成功した。",
      en: "He succeeded through determination."
    }
  },
  {
    kanji: "修了",
    hiragana: "しゅうりょう",
    english: "completion",
    example: {
      jp: "研修を修了した。",
      en: "I completed the training."
    }
  },
  {
    kanji: "収益",
    hiragana: "しゅうえき",
    english: "profit, earnings",
    example: {
      jp: "収益が増加した。",
      en: "Profits increased."
    }
  },
  {
    kanji: "主観",
    hiragana: "しゅかん",
    english: "subjectivity",
    example: {
      jp: "主観的な意見だ。",
      en: "It is a subjective opinion."
    }
  },
  {
    kanji: "主催",
    hiragana: "しゅさい",
    english: "organization, sponsorship",
    example: {
      jp: "大学が主催した。",
      en: "The university organized it."
    }
  },
  {
    kanji: "趣旨",
    hiragana: "しゅし",
    english: "purpose, meaning",
    example: {
      jp: "趣旨を理解してください。",
      en: "Please understand the purpose."
    }
  },
  {
    kanji: "出資",
    hiragana: "しゅっし",
    english: "investment",
    example: {
      jp: "会社に出資した。",
      en: "He invested in the company."
    }
  },
  {
    kanji: "首脳",
    hiragana: "しゅのう",
    english: "leader, head",
    example: {
      jp: "首脳会談が開かれた。",
      en: "A summit meeting was held."
    }
  },
  {
    kanji: "受容",
    hiragana: "じゅよう",
    english: "acceptance",
    example: {
      jp: "文化の受容が進んだ。",
      en: "Acceptance of the culture progressed."
    }
  },
  {
    kanji: "巡回",
    hiragana: "じゅんかい",
    english: "patrol, round",
    example: {
      jp: "警察が巡回している。",
      en: "The police are patrolling."
    }
  },
  {
    kanji: "順調",
    hiragana: "じゅんちょう",
    english: "favorable, smooth",
    example: {
      jp: "工事は順調に進んでいる。",
      en: "The construction is progressing smoothly."
    }
  },
  {
    kanji: "奨励",
    hiragana: "しょうれい",
    english: "encouragement, promotion",
    example: {
      jp: "読書を奨励する。",
      en: "Encourage reading."
    }
  },
  {
    kanji: "焦点",
    hiragana: "しょうてん",
    english: "focus, focal point",
    example: {
      jp: "議論の焦点は教育だ。",
      en: "The focus of the discussion is education."
    }
  },
  {
    kanji: "衝突",
    hiragana: "しょうとつ",
    english: "collision, conflict",
    example: {
      jp: "意見が衝突した。",
      en: "Their opinions clashed."
    }
  },
  {
    kanji: "証言",
    hiragana: "しょうげん",
    english: "testimony",
    example: {
      jp: "目撃者が証言した。",
      en: "The witness testified."
    }
  },
  {
    kanji: "象る",
    hiragana: "かたどる",
    english: "to symbolize, model after",
    example: {
      jp: "鳩は平和を象る。",
      en: "The dove symbolizes peace."
    }
  },
  {
    kanji: "消耗",
    hiragana: "しょうもう",
    english: "exhaustion, consumption",
    example: {
      jp: "体力を消耗した。",
      en: "I exhausted my strength."
    }
  },
  {
    kanji: "助言",
    hiragana: "じょげん",
    english: "advice",
    example: {
      jp: "先生から助言を受けた。",
      en: "I received advice from my teacher."
    }
  },
  {
    kanji: "所在",
    hiragana: "しょざい",
    english: "whereabouts, location",
    example: {
      jp: "責任の所在を明らかにする。",
      en: "Clarify where responsibility lies."
    }
  },
  {
    kanji: "所定",
    hiragana: "しょてい",
    english: "prescribed, designated",
    example: {
      jp: "所定の用紙に記入する。",
      en: "Fill out the designated form."
    }
  },
  {
    kanji: "処罰",
    hiragana: "しょばつ",
    english: "punishment",
    example: {
      jp: "違反者を処罰する。",
      en: "Punish the violator."
    }
  },
  {
    kanji: "新興",
    hiragana: "しんこう",
    english: "rising, emerging",
    example: {
      jp: "新興国が成長している。",
      en: "Emerging countries are growing."
    }
  },
  {
    kanji: "信仰",
    hiragana: "しんこう",
    english: "faith, belief",
    example: {
      jp: "宗教を信仰している。",
      en: "He practices a religion."
    }
  },
  {
    kanji: "進化",
    hiragana: "しんか",
    english: "evolution",
    example: {
      jp: "生物は進化する。",
      en: "Living things evolve."
    }
  },
  {
    kanji: "深刻",
    hiragana: "しんこく",
    english: "serious, grave",
    example: {
      jp: "深刻な問題だ。",
      en: "It is a serious problem."
    }
  },
  {
    kanji: "真摯",
    hiragana: "しんし",
    english: "sincere, earnest",
    example: {
      jp: "真摯な態度で臨む。",
      en: "Approach with sincerity."
    }
  },
  {
    kanji: "審査",
    hiragana: "しんさ",
    english: "examination, screening",
    example: {
      jp: "応募書類を審査する。",
      en: "Examine the applications."
    }
  },
  {
    kanji: "振興",
    hiragana: "しんこう",
    english: "promotion, development",
    example: {
      jp: "地域振興を進める。",
      en: "Promote regional development."
    }
  },
  {
    kanji: "進呈",
    hiragana: "しんてい",
    english: "presentation, gift",
    example: {
      jp: "記念品を進呈した。",
      en: "A commemorative gift was presented."
    }
  },
  {
    kanji: "信念",
    hiragana: "しんねん",
    english: "conviction, belief",
    example: {
      jp: "信念を曲げない。",
      en: "Do not abandon your beliefs."
    }
  },
  {
    kanji: "人格",
    hiragana: "じんかく",
    english: "personality, character",
    example: {
      jp: "人格を尊重する。",
      en: "Respect a person's character."
    }
  },
  {
    kanji: "迅速",
    hiragana: "じんそく",
    english: "quick, prompt",
    example: {
      jp: "迅速な対応が必要だ。",
      en: "A prompt response is necessary."
    }
  },
  {
    kanji: "浸水",
    hiragana: "しんすい",
    english: "flooding",
    example: {
      jp: "大雨で道路が浸水した。",
      en: "The road flooded because of heavy rain."
    }
  },
  {
    kanji: "診断",
    hiragana: "しんだん",
    english: "diagnosis",
    example: {
      jp: "医師の診断を受けた。",
      en: "I received a doctor's diagnosis."
    }
  },
  {
    kanji: "侵入",
    hiragana: "しんにゅう",
    english: "intrusion, invasion",
    example: {
      jp: "敷地への侵入は禁止だ。",
      en: "Entry into the property is prohibited."
    }
  },
  {
    kanji: "辛辣",
    hiragana: "しんらつ",
    english: "severe, bitter",
    example: {
      jp: "辛辣な批判を受けた。",
      en: "He received harsh criticism."
    }
  },
  {
    kanji: "衰弱",
    hiragana: "すいじゃく",
    english: "debility, weakness",
    example: {
      jp: "病気で体が衰弱した。",
      en: "His body weakened because of illness."
    }
  },
  {
    kanji: "推進",
    hiragana: "すいしん",
    english: "promotion, advancement",
    example: {
      jp: "改革を推進する。",
      en: "Promote reform."
    }
  },
  {
    kanji: "水準",
    hiragana: "すいじゅん",
    english: "level, standard",
    example: {
      jp: "生活水準が向上した。",
      en: "The standard of living improved."
    }
  },
  {
    kanji: "衰退",
    hiragana: "すいたい",
    english: "decline",
    example: {
      jp: "地域経済が衰退した。",
      en: "The local economy declined."
    }
  },
  {
    kanji: "推定",
    hiragana: "すいてい",
    english: "estimation",
    example: {
      jp: "被害額を推定した。",
      en: "The amount of damage was estimated."
    }
  },
  {
    kanji: "遂げる",
    hiragana: "とげる",
    english: "to accomplish",
    example: {
      jp: "大きな成功を遂げた。",
      en: "He achieved great success."
    }
  },
  {
    kanji: "是正",
    hiragana: "ぜせい",
    english: "correction, rectification",
    example: {
      jp: "問題点を是正する。",
      en: "Correct the problems."
    }
  },
  {
    kanji: "切実",
    hiragana: "せつじつ",
    english: "earnest, pressing",
    example: {
      jp: "切実な願いだった。",
      en: "It was a heartfelt wish."
    }
  },
  {
    kanji: "接触",
    hiragana: "せっしょく",
    english: "contact",
    example: {
      jp: "患者と接触した。",
      en: "I came into contact with the patient."
    }
  },
  {
    kanji: "設置",
    hiragana: "せっち",
    english: "installation, establishment",
    example: {
      jp: "新しい設備を設置した。",
      en: "They installed new equipment."
    }
  },
  {
    kanji: "説得",
    hiragana: "せっとく",
    english: "persuasion",
    example: {
      jp: "家族を説得した。",
      en: "I persuaded my family."
    }
  },
  {
    kanji: "絶望",
    hiragana: "ぜつぼう",
    english: "despair",
    example: {
      jp: "絶望を感じた。",
      en: "I felt despair."
    }
  },
  {
    kanji: "専念",
    hiragana: "せんねん",
    english: "devotion, concentration",
    example: {
      jp: "勉強に専念する。",
      en: "Devote oneself to studying."
    }
  },
  {
    kanji: "先方",
    hiragana: "せんぽう",
    english: "the other party",
    example: {
      jp: "先方から連絡があった。",
      en: "The other party contacted us."
    }
  },
  {
    kanji: "阻害",
    hiragana: "そがい",
    english: "obstruction, hindrance",
    example: {
      jp: "成長を阻害する。",
      en: "Hinder growth."
    }
  },
  {
    kanji: "促進",
    hiragana: "そくしん",
    english: "promotion, acceleration",
    example: {
      jp: "経済成長を促進する。",
      en: "Promote economic growth."
    }
  },
  {
    kanji: "措置",
    hiragana: "そち",
    english: "measure, action",
    example: {
      jp: "必要な措置を取った。",
      en: "Necessary measures were taken."
    }
  },
  {
    kanji: "率直",
    hiragana: "そっちょく",
    english: "frank, candid",
    example: {
      jp: "率直な意見を述べた。",
      en: "I expressed my honest opinion."
    }
  },
  {
    kanji: "存続",
    hiragana: "そんぞく",
    english: "continuation, survival",
    example: {
      jp: "会社の存続が危ぶまれる。",
      en: "The company's survival is in danger."
    }
  },
  {
    kanji: "損失",
    hiragana: "そんしつ",
    english: "loss",
    example: {
      jp: "大きな損失を受けた。",
      en: "They suffered a great loss."
    }
  },
  {
    kanji: "妥協",
    hiragana: "だきょう",
    english: "compromise",
    example: {
      jp: "双方が妥協した。",
      en: "Both sides compromised."
    }
  },
  {
    kanji: "妥当",
    hiragana: "だとう",
    english: "appropriate, valid",
    example: {
      jp: "妥当な判断だ。",
      en: "It is a reasonable judgment."
    }
  },
  {
    kanji: "打撃",
    hiragana: "だげき",
    english: "blow, damage",
    example: {
      jp: "経済に大きな打撃を与えた。",
      en: "It dealt a major blow to the economy."
    }
  },
  {
    kanji: "脱却",
    hiragana: "だっきゃく",
    english: "escape, break away",
    example: {
      jp: "依存から脱却する。",
      en: "Break away from dependence."
    }
  },
  {
    kanji: "達成",
    hiragana: "たっせい",
    english: "achievement",
    example: {
      jp: "目標を達成した。",
      en: "I achieved my goal."
    }
  },
  {
    kanji: "堪える",
    hiragana: "たえる",
    english: "to endure, withstand",
    example: {
      jp: "痛みに堪えた。",
      en: "He endured the pain."
    }
  },
  {
    kanji: "妥結",
    hiragana: "だけつ",
    english: "settlement, agreement",
    example: {
      jp: "交渉が妥結した。",
      en: "The negotiations reached a settlement."
    }
  },
  {
    kanji: "蓄積",
    hiragana: "ちくせき",
    english: "accumulation",
    example: {
      jp: "経験を蓄積する。",
      en: "Accumulate experience."
    }
  },
  {
    kanji: "秩序",
    hiragana: "ちつじょ",
    english: "order, discipline",
    example: {
      jp: "社会秩序を守る。",
      en: "Maintain social order."
    }
  },
  {
    kanji: "抽象",
    hiragana: "ちゅうしょう",
    english: "abstraction",
    example: {
      jp: "抽象的な考え方だ。",
      en: "It is an abstract way of thinking."
    }
  },
  {
    kanji: "中枢",
    hiragana: "ちゅうすう",
    english: "center, core",
    example: {
      jp: "政治の中枢にいる。",
      en: "He is at the center of politics."
    }
  },
  {
    kanji: "調停",
    hiragana: "ちょうてい",
    english: "mediation",
    example: {
      jp: "裁判所が調停した。",
      en: "The court mediated."
    }
  },
  {
    kanji: "沈滞",
    hiragana: "ちんたい",
    english: "stagnation",
    example: {
      jp: "経済が沈滞している。",
      en: "The economy is stagnant."
    }
  },
  {
    kanji: "追及",
    hiragana: "ついきゅう",
    english: "investigation, pursuit",
    example: {
      jp: "責任を追及した。",
      en: "They pursued responsibility."
    }
  },
  {
    kanji: "追跡",
    hiragana: "ついせき",
    english: "tracking, pursuit",
    example: {
      jp: "警察が犯人を追跡した。",
      en: "The police pursued the criminal."
    }
  },
  {
    kanji: "痛感",
    hiragana: "つうかん",
    english: "keen realization",
    example: {
      jp: "重要性を痛感した。",
      en: "I keenly realized its importance."
    }
  },
  {
    kanji: "通達",
    hiragana: "つうたつ",
    english: "official notice",
    example: {
      jp: "会社から通達があった。",
      en: "There was an official notice from the company."
    }
  },
  {
    kanji: "堤防",
    hiragana: "ていぼう",
    english: "embankment, levee",
    example: {
      jp: "堤防が決壊した。",
      en: "The levee collapsed."
    }
  },
  {
    kanji: "徹底",
    hiragana: "てってい",
    english: "thoroughness",
    example: {
      jp: "安全管理を徹底する。",
      en: "Ensure thorough safety management."
    }
  },
  {
    kanji: "転換",
    hiragana: "てんかん",
    english: "conversion, shift",
    example: {
      jp: "方針を転換した。",
      en: "The policy was changed."
    }
  },
  {
    kanji: "典型",
    hiragana: "てんけい",
    english: "typical example",
    example: {
      jp: "典型的な例だ。",
      en: "It is a typical example."
    }
  },
  {
    kanji: "伝達",
    hiragana: "でんたつ",
    english: "communication, transmission",
    example: {
      jp: "情報を伝達する。",
      en: "Transmit information."
    }
  },
  {
    kanji: "動揺",
    hiragana: "どうよう",
    english: "disturbance, agitation",
    example: {
      jp: "彼は動揺していた。",
      en: "He was upset."
    }
  },
  {
    kanji: "統括",
    hiragana: "とうかつ",
    english: "supervision, control",
    example: {
      jp: "全体を統括する。",
      en: "Supervise the entire operation."
    }
  }
];


export default n1Words;