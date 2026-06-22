const n2Words = [
  {kanji: "あいかわらず", hiragana: "あいかわらず", english: "as usual, as ever", example: {jp: "彼はあいかわらず元気です。", en: "He is as energetic as ever."}},
  {kanji: "アイデア", hiragana: "アイデア", english: "idea", example: {jp: "いいアイデアを思いつきました。", en: "I came up with a good idea."}},
  {kanji: "曖昧",
    hiragana: "あいまい",
    english: "vague, ambiguous",
    example: {
      jp: "彼の説明は曖昧でした。",
      en: "His explanation was ambiguous."
    }},
  {kanji: "遭う",
    hiragana: "あう",
    english: "to encounter",
    example: {
      jp: "事故に遭いました。",
      en: "I encountered an accident."
    }},
  {kanji: "扇ぐ",
    hiragana: "あおぐ",
    english: "to fan",
    example: {
      jp: "暑いので扇ぎます。",
      en: "I fan myself because it is hot."
    }},
  {kanji: "青白い",
    hiragana: "あおじろい",
    english: "pale",
    example: {
      jp: "彼の顔は青白かったです。",
      en: "His face was pale."
    }},
  {kanji: "あかんぼう",
    hiragana: "あかんぼう",
    english: "baby",
    example: {
      jp: "あかんぼうが眠っています。",
      en: "The baby is sleeping."
    }},
  {kanji: "明き",
    hiragana: "あき",
    english: "vacancy, free space",
    example: {
      jp: "席に明きがあります。",
      en: "There is a vacant seat."
    }},
  {kanji: "あきれる",
    hiragana: "あきれる",
    english: "to be amazed, shocked",
    example: {
      jp: "彼の態度にあきれました。",
      en: "I was shocked by his attitude."
    }},
  {kanji: "アクセント",
    hiragana: "アクセント",
    english: "accent",
    example: {
      jp: "日本語のアクセントは難しいです。",
      en: "Japanese accents are difficult."
    }},
  {kanji: "あくび",
    hiragana: "あくび",
    english: "yawn",
    example: {
      jp: "授業中にあくびをしました。",
      en: "I yawned during class."
    }},
  {kanji: "飽くまで",
    hiragana: "あくまで",
    english: "to the end, thoroughly",
    example: {
      jp: "彼はあくまで反対しました。",
      en: "He opposed it to the very end."
    }},
  {kanji: "明け方",
    hiragana: "あけがた",
    english: "dawn",
    example: {
      jp: "明け方に雨が降りました。",
      en: "It rained at dawn."
    }},
  {kanji: "揚げる",
    hiragana: "あげる",
    english: "to fry",
    example: {
      jp: "母が天ぷらを揚げています。",
      en: "My mother is frying tempura."
    }},
  {
    kanji: "挙げる",
    hiragana: "あげる",
    english: "to raise, to cite",
    example: {
      jp: "手を挙げてください。",
      en: "Please raise your hand."
    }
  },
  {
    kanji: "憧れる",
    hiragana: "あこがれる",
    english: "to admire, long for",
    example: {
      jp: "私は医者に憧れています。",
      en: "I admire doctors."
    }
  },
  {
    kanji: "足跡",
    hiragana: "あしあと",
    english: "footprints",
    example: {
      jp: "雪の上に足跡がありました。",
      en: "There were footprints in the snow."
    }
  },
  {
    kanji: "味わう",
    hiragana: "あじわう",
    english: "to taste, savor",
    example: {
      jp: "京都料理を味わいました。",
      en: "I enjoyed Kyoto cuisine."
    }
  },
  {
    kanji: "預かる",
    hiragana: "あずかる",
    english: "to keep, take care of",
    example: {
      jp: "荷物を預かります。",
      en: "I will keep your luggage."
    }
  },
  {
    kanji: "暖まる",
    hiragana: "あたたまる",
    english: "to become warm",
    example: {
      jp: "部屋が暖まりました。",
      en: "The room became warm."
    }
  },
  {
    kanji: "暖める",
    hiragana: "あたためる",
    english: "to warm, heat",
    example: {
      jp: "スープを暖めます。",
      en: "I will heat the soup."
    }
  },
  {
    kanji: "あたりまえ",
    hiragana: "あたりまえ",
    english: "natural, ordinary",
    example: {
      jp: "それはあたりまえです。",
      en: "That is natural."
    }
  },
  {
    kanji: "あちらこちら",
    hiragana: "あちらこちら",
    english: "here and there",
    example: {
      jp: "あちらこちらを見て回りました。",
      en: "I looked around here and there."
    }
  },
  {
    kanji: "厚かましい",
    hiragana: "あつかましい",
    english: "impudent, shameless",
    example: {
      jp: "厚かましいお願いですね。",
      en: "That is a shameless request."
    }
  },
  {
    kanji: "圧縮",
    hiragana: "あっしゅく",
    english: "compression",
    example: {
      jp: "ファイルを圧縮しました。",
      en: "I compressed the file."
    }
  },
  {
    kanji: "宛名",
    hiragana: "あてな",
    english: "address, addressee",
    example: {
      jp: "封筒に宛名を書きます。",
      en: "I write the address on the envelope."
    }
  },
  {
    kanji: "当てはまる",
    hiragana: "あてはまる",
    english: "to apply to",
    example: {
      jp: "この条件に当てはまります。",
      en: "This applies to the condition."
    }
  },
  {
    kanji: "当てはめる",
    hiragana: "あてはめる",
    english: "to apply, fit",
    example: {
      jp: "公式に数字を当てはめます。",
      en: "I substitute numbers into the formula."
    }
  },
  {
    kanji: "暴れる",
    hiragana: "あばれる",
    english: "to act violently",
    example: {
      jp: "子どもが暴れています。",
      en: "The child is acting violently."
    }
  },
  {
    kanji: "脂",
    hiragana: "あぶら",
    english: "fat, oil",
    example: {
      jp: "肉の脂が多いです。",
      en: "The meat contains much fat."
    }
  },
  {
    kanji: "あぶる",
    hiragana: "あぶる",
    english: "to scorch",
    example: {
      jp: "魚を火であぶります。",
      en: "I roast the fish over the fire."
    }
  },
  {
    kanji: "あふれる",
    hiragana: "あふれる",
    english: "to overflow",
    example: {
      jp: "川の水があふれました。",
      en: "The river overflowed."
    }
  },
  {
    kanji: "雨戸",
    hiragana: "あまど",
    english: "storm shutter",
    example: {
      jp: "台風の前に雨戸を閉めました。",
      en: "I closed the shutters before the typhoon."
    }
  },
  {
    kanji: "甘やかす",
    hiragana: "あまやかす",
    english: "to spoil, pamper",
    example: {
      jp: "子どもを甘やかしてはいけません。",
      en: "You should not spoil children."
    }
  },
  {
    kanji: "余る",
    hiragana: "あまる",
    english: "to remain, be left over",
    example: {
      jp: "食べ物が余りました。",
      en: "Some food was left over."
    }
  },
  {
    kanji: "編物",
    hiragana: "あみもの",
    english: "knitting",
    example: {
      jp: "祖母は編物が得意です。",
      en: "My grandmother is good at knitting."
    }
  },
  {
    kanji: "編む",
    hiragana: "あむ",
    english: "to knit",
    example: {
      jp: "セーターを編んでいます。",
      en: "I am knitting a sweater."
    }
  },
  {
    kanji: "危うい",
    hiragana: "あやうい",
    english: "dangerous, critical",
    example: {
      jp: "危うい状況でした。",
      en: "It was a dangerous situation."
    }
  },
  {
    kanji: "怪しい",
    hiragana: "あやしい",
    english: "suspicious",
    example: {
      jp: "あの男は怪しいです。",
      en: "That man looks suspicious."
    }
  },
  {
    kanji: "争う",
    hiragana: "あらそう",
    english: "to argue, compete",
    example: {
      jp: "兄弟が争っています。",
      en: "The brothers are arguing."
    }
  },
  {
    kanji: "改めて",
    hiragana: "あらためて",
    english: "again, once again",
    example: {
      jp: "後で改めて連絡します。",
      en: "I will contact you again later."
    }
  },
  {
    kanji: "改める",
    hiragana: "あらためる",
    english: "to change, to reform",
    example: {
      jp: "生活習慣を改める必要があります。",
      en: "It is necessary to change one's lifestyle."
    }
  },
  {
    kanji: "著す",
    hiragana: "あらわす",
    english: "to write, to publish",
    example: {
      jp: "彼は多くの本を著しました。",
      en: "He wrote many books."
    }
  },
  {
    kanji: "有難い",
    hiragana: "ありがたい",
    english: "grateful, thankful",
    example: {
      jp: "助けていただいて有難いです。",
      en: "I am grateful for your help."
    }
  },
  {
    kanji: "あわただしい",
    hiragana: "あわただしい",
    english: "busy, hurried",
    example: {
      jp: "年末はいつもあわただしいです。",
      en: "The end of the year is always busy."
    }
  },
  {
    kanji: "案外",
    hiragana: "あんがい",
    english: "unexpectedly",
    example: {
      jp: "試験は案外簡単でした。",
      en: "The exam was easier than expected."
    }
  },
  {
    kanji: "言い出す",
    hiragana: "いいだす",
    english: "to begin to say",
    example: {
      jp: "彼は突然帰りたいと言い出しました。",
      en: "He suddenly said that he wanted to go home."
    }
  },
  {
    kanji: "言い付ける",
    hiragana: "いいつける",
    english: "to tell, to order",
    example: {
      jp: "先生は宿題を言い付けました。",
      en: "The teacher assigned homework."
    }
  },
  {
    kanji: "意義",
    hiragana: "いぎ",
    english: "meaning, significance",
    example: {
      jp: "この研究には大きな意義があります。",
      en: "This research has great significance."
    }
  },
  {
    kanji: "生き生き",
    hiragana: "いきいき",
    english: "vividly, lively",
    example: {
      jp: "子どもたちは生き生きと遊んでいます。",
      en: "The children are playing lively."
    }
  },
  {
    kanji: "育児",
    hiragana: "いくじ",
    english: "childcare",
    example: {
      jp: "彼女は育児に専念しています。",
      en: "She is devoted to childcare."
    }
  },
  {
    kanji: "幾分",
    hiragana: "いくぶん",
    english: "somewhat, to some extent",
    example: {
      jp: "今日は幾分涼しいです。",
      en: "It is somewhat cooler today."
    }
  },
  {
    kanji: "生け花",
    hiragana: "いけばな",
    english: "flower arrangement",
    example: {
      jp: "母は生け花を習っています。",
      en: "My mother is learning flower arrangement."
    }
  },
  {
    kanji: "以後",
    hiragana: "いご",
    english: "after this, from now on",
    example: {
      jp: "以後気を付けます。",
      en: "I will be careful from now on."
    }
  },
  {
    kanji: "以降",
    hiragana: "いこう",
    english: "since, after",
    example: {
      jp: "午後六時以降は営業していません。",
      en: "We are not open after 6 p.m."
    }
  },
  {
    kanji: "勇ましい",
    hiragana: "いさましい",
    english: "brave, heroic",
    example: {
      jp: "勇ましい兵士の話を聞きました。",
      en: "I heard a story about a brave soldier."
    }
  },
  {
    kanji: "衣食住",
    hiragana: "いしょくじゅう",
    english: "food, clothing, and shelter",
    example: {
      jp: "衣食住は生活の基本です。",
      en: "Food, clothing, and shelter are the basics of life."
    }
  },
  {
    kanji: "意地悪",
    hiragana: "いじわる",
    english: "mean, unkind",
    example: {
      jp: "彼は意地悪な人ではありません。",
      en: "He is not a mean person."
    }
  },
  {
    kanji: "依然",
    hiragana: "いぜん",
    english: "still, as yet",
    example: {
      jp: "問題は依然として残っています。",
      en: "The problem still remains."
    }
  },
  {
    kanji: "急ぐ",
    hiragana: "いそぐ",
    english: "to hurry",
    example: {
      jp: "駅へ急ぎました。",
      en: "I hurried to the station."
    }
  },
  {
    kanji: "傷む",
    hiragana: "いたむ",
    english: "to spoil, to go bad",
    example: {
      jp: "この果物は傷みやすいです。",
      en: "This fruit spoils easily."
    }
  },
  {
    kanji: "至る",
    hiragana: "いたる",
    english: "to reach, to lead to",
    example: {
      jp: "話し合いは結論に至りました。",
      en: "The discussion reached a conclusion."
    }
  },
  {
    kanji: "一応",
    hiragana: "いちおう",
    english: "for the time being",
    example: {
      jp: "一応確認しておきます。",
      en: "I'll check it just in case."
    }
  },
  {
    kanji: "一段と",
    hiragana: "いちだんと",
    english: "even more",
    example: {
      jp: "冬になって一段と寒くなりました。",
      en: "It became even colder in winter."
    }
  },
  {
    kanji: "一流",
    hiragana: "いちりゅう",
    english: "first-class, top rank",
    example: {
      jp: "彼は一流の料理人です。",
      en: "He is a first-class chef."
    }
  },
  {
    kanji: "著しい",
    hiragana: "いちじるしい",
    english: "remarkable, significant",
    example: {
      jp: "人口の増加が著しいです。",
      en: "The population growth is remarkable."
    }
  },
  {
    kanji: "一斉",
    hiragana: "いっせい",
    english: "simultaneously",
    example: {
      jp: "学生たちは一斉に立ち上がりました。",
      en: "The students stood up simultaneously."
    }
  },
  {
    kanji: "一旦",
    hiragana: "いったん",
    english: "once, temporarily",
    example: {
      jp: "一旦家へ帰ります。",
      en: "I will go home once."
    }
  },
  {
    kanji: "一定",
    hiragana: "いってい",
    english: "fixed, constant",
    example: {
      jp: "一定の温度を保ってください。",
      en: "Please keep a constant temperature."
    }
  },
  {
    kanji: "移転",
    hiragana: "いてん",
    english: "relocation, transfer",
    example: {
      jp: "会社は来月移転します。",
      en: "The company will relocate next month."
    }
  },
  {
    kanji: "井戸",
    hiragana: "いど",
    english: "well",
    example: {
      jp: "昔は井戸の水を使っていました。",
      en: "People used well water in the past."
    }
  },
  {
    kanji: "挑む",
    hiragana: "いどむ",
    english: "to challenge",
    example: {
      jp: "彼は新しい仕事に挑んでいます。",
      en: "He is taking on a new challenge."
    }
  },
  {
    kanji: "稲",
    hiragana: "いね",
    english: "rice plant",
    example: {
      jp: "秋になると稲が黄金色になります。",
      en: "The rice plants turn golden in autumn."
    }
  },
  {
    kanji: "居眠り",
    hiragana: "いねむり",
    english: "dozing, nap",
    example: {
      jp: "授業中に居眠りしてしまいました。",
      en: "I accidentally dozed off during class."
    }
  },
  {
    kanji: "命じる",
    hiragana: "めいじる",
    english: "to order, to command",
    example: {
      jp: "上司は部下に仕事を命じました。",
      en: "The boss ordered his subordinate to work."
    }
  },
  {
    kanji: "違反",
    hiragana: "いはん",
    english: "violation",
    example: {
      jp: "交通違反で罰金を払いました。",
      en: "I paid a fine for a traffic violation."
    }
  },
  {
    kanji: "威張る",
    hiragana: "いばる",
    english: "to be arrogant, to boast",
    example: {
      jp: "彼は少し成功するとすぐ威張ります。",
      en: "He becomes arrogant as soon as he achieves some success."
    }
  },
  {
    kanji: "嫌がる",
    hiragana: "いやがる",
    english: "to dislike, to hate",
    example: {
      jp: "子どもは野菜を食べるのを嫌がります。",
      en: "Children dislike eating vegetables."
    }
  },
  {
    kanji: "いやに",
    hiragana: "いやに",
    english: "awfully, unusually",
    example: {
      jp: "今日はいやに静かですね。",
      en: "It's unusually quiet today."
    }
  },
  {
    kanji: "愈々",
    hiragana: "いよいよ",
    english: "at last, finally",
    example: {
      jp: "いよいよ試験の日が来ました。",
      en: "At last, the day of the exam has come."
    }
  },
  {
    kanji: "入れ物",
    hiragana: "いれもの",
    english: "container",
    example: {
      jp: "この入れ物に水を入れてください。",
      en: "Please put water in this container."
    }
  },
  {
    kanji: "インキ",
    hiragana: "インキ",
    english: "ink",
    example: {
      jp: "プリンターのインキがなくなりました。",
      en: "The printer ink has run out."
    }
  },
  {
    kanji: "印刷",
    hiragana: "いんさつ",
    english: "printing",
    example: {
      jp: "資料を印刷してください。",
      en: "Please print the documents."
    }
  },
  {
    kanji: "引退",
    hiragana: "いんたい",
    english: "retirement",
    example: {
      jp: "彼は去年引退しました。",
      en: "He retired last year."
    }
  },
  {
    kanji: "引用",
    hiragana: "いんよう",
    english: "quotation, citation",
    example: {
      jp: "論文で資料を引用しました。",
      en: "I cited the material in the paper."
    }
  },
  {
    kanji: "飢える",
    hiragana: "うえる",
    english: "to starve, to hunger",
    example: {
      jp: "多くの人が食料不足で飢えています。",
      en: "Many people are starving because of food shortages."
    }
  },
  {
    kanji: "浮かぶ",
    hiragana: "うかぶ",
    english: "to float; to come to mind",
    example: {
      jp: "良い考えが浮かびました。",
      en: "A good idea came to mind."
    }
  },
  {
    kanji: "浮く",
    hiragana: "うく",
    english: "to float",
    example: {
      jp: "木の葉が水に浮いています。",
      en: "Leaves are floating on the water."
    }
  },
  {
    kanji: "承る",
    hiragana: "うけたまわる",
    english: "to receive, to hear (humble)",
    example: {
      jp: "ご意見を承りました。",
      en: "I have received your opinion."
    }
  },
  {
    kanji: "受け持つ",
    hiragana: "うけもつ",
    english: "to be in charge of",
    example: {
      jp: "私はこのクラスを受け持っています。",
      en: "I am in charge of this class."
    }
  },
  {
    kanji: "動かす",
    hiragana: "うごかす",
    english: "to move",
    example: {
      jp: "机を動かしてください。",
      en: "Please move the desk."
    }
  },
  {
    kanji: "伺う",
    hiragana: "うかがう",
    english: "to visit; to ask (humble)",
    example: {
      jp: "明日会社に伺います。",
      en: "I will visit the company tomorrow."
    }
  },
  {
    kanji: "敬う",
    hiragana: "うやまう",
    english: "to respect",
    example: {
      jp: "年上の人を敬いましょう。",
      en: "Let us respect older people."
    }
  },
  {
    kanji: "羨ましい",
    hiragana: "うらやましい",
    english: "envious",
    example: {
      jp: "海外旅行ができて羨ましいです。",
      en: "I envy your ability to travel abroad."
    }
  },
  {
    kanji: "裏返す",
    hiragana: "うらがえす",
    english: "to turn inside out",
    example: {
      jp: "シャツを裏返して洗います。",
      en: "I wash the shirt inside out."
    }
  },
  {
    kanji: "売り切れ",
    hiragana: "うりきれ",
    english: "sold out",
    example: {
      jp: "人気の商品は売り切れました。",
      en: "The popular product has sold out."
    }
  },
  {
    kanji: "噂",
    hiragana: "うわさ",
    english: "rumor",
    example: {
      jp: "その噂を聞きました。",
      en: "I heard that rumor."
    }
  },
  {
    kanji: "云々",
    hiragana: "うんぬん",
    english: "and so on; this and that",
    example: {
      jp: "理由がどうこう云々する必要はありません。",
      en: "There is no need to argue about the reasons and so on."
    }
  },
  {
    kanji: "運河",
    hiragana: "うんが",
    english: "canal",
    example: {
      jp: "その町には大きな運河があります。",
      en: "There is a large canal in that town."
    }
  },
  {
    kanji: "運賃",
    hiragana: "うんちん",
    english: "fare, transportation charge",
    example: {
      jp: "バスの運賃を払いました。",
      en: "I paid the bus fare."
    }
  },
  {
    kanji: "運搬",
    hiragana: "うんぱん",
    english: "transportation, conveyance",
    example: {
      jp: "荷物の運搬を頼みました。",
      en: "I requested transportation of the luggage."
    }
  },
  {
    kanji: "永遠",
    hiragana: "えいえん",
    english: "eternity",
    example: {
      jp: "永遠の愛を誓いました。",
      en: "They swore eternal love."
    }
  },
  {
    kanji: "影響",
    hiragana: "えいきょう",
    english: "influence, effect",
    example: {
      jp: "天候が作物に影響します。",
      en: "The weather affects crops."
    }
  },
  {
    kanji: "営業",
    hiragana: "えいぎょう",
    english: "business operation",
    example: {
      jp: "店は九時から営業します。",
      en: "The store opens for business at nine."
    }
  },
  {
    kanji: "衛星",
    hiragana: "えいせい",
    english: "satellite",
    example: {
      jp: "衛星が宇宙を回っています。",
      en: "The satellite is orbiting in space."
    }
  },
  {
    kanji: "液体",
    hiragana: "えきたい",
    english: "liquid",
    example: {
      jp: "この液体は危険です。",
      en: "This liquid is dangerous."
    }
  },
  {
    kanji: "駅員",
    hiragana: "えきいん",
    english: "station employee",
    example: {
      jp: "駅員に道を聞きました。",
      en: "I asked the station employee for directions."
    }
  },
  {
    kanji: "宴会",
    hiragana: "えんかい",
    english: "banquet, party",
    example: {
      jp: "会社の宴会に参加しました。",
      en: "I attended the company banquet."
    }
  },
  {
    kanji: "延期",
    hiragana: "えんき",
    english: "postponement",
    example: {
      jp: "試合は雨で延期されました。",
      en: "The match was postponed because of rain."
    }
  },
  {
    kanji: "演劇",
    hiragana: "えんげき",
    english: "theater, drama",
    example: {
      jp: "学校で演劇を見ました。",
      en: "I watched a play at school."
    }
  },
  {
    kanji: "援助",
    hiragana: "えんじょ",
    english: "assistance, aid",
    example: {
      jp: "被災地に援助を送りました。",
      en: "Aid was sent to the disaster area."
    }
  },
  {
    kanji: "演説",
    hiragana: "えんぜつ",
    english: "speech",
    example: {
      jp: "市長の演説を聞きました。",
      en: "I listened to the mayor's speech."
    }
  },
  {
    kanji: "煙突",
    hiragana: "えんとつ",
    english: "chimney",
    example: {
      jp: "煙突から煙が出ています。",
      en: "Smoke is coming out of the chimney."
    }
  },
  {
    kanji: "遠慮",
    hiragana: "えんりょ",
    english: "restraint; hesitation",
    example: {
      jp: "遠慮なく使ってください。",
      en: "Please use it without hesitation."
    }
  },
  {
    kanji: "老い",
    hiragana: "おい",
    english: "old age",
    example: {
      jp: "老いについて考えました。",
      en: "I thought about old age."
    }
  },
  {
    kanji: "追い越す",
    hiragana: "おいこす",
    english: "to overtake",
    example: {
      jp: "前の車を追い越しました。",
      en: "I overtook the car ahead."
    }
  },
  {
    kanji: "応援",
    hiragana: "おうえん",
    english: "support, cheering",
    example: {
      jp: "みんなでチームを応援しました。",
      en: "We all cheered for the team."
    }
  },
  {
    kanji: "王様",
    hiragana: "おうさま",
    english: "king",
    example: {
      jp: "昔々、王様がいました。",
      en: "Long ago, there was a king."
    }
  },
  {
    kanji: "応じる",
    hiragana: "おうじる",
    english: "to respond, to comply",
    example: {
      jp: "要望に応じました。",
      en: "I responded to the request."
    }
  },
  {
    kanji: "横断",
    hiragana: "おうだん",
    english: "crossing",
    example: {
      jp: "道路を横断するときは注意してください。",
      en: "Please be careful when crossing the road."
    }
  },
  {
    kanji: "応用",
    hiragana: "おうよう",
    english: "application, practical use",
    example: {
      jp: "この知識を仕事に応用できます。",
      en: "This knowledge can be applied to work."
    }
  },
  {
    kanji: "欧米",
    hiragana: "おうべい",
    english: "Europe and America",
    example: {
      jp: "彼は欧米を旅行しました。",
      en: "He traveled through Europe and America."
    }
  },
  {
    kanji: "大げさ",
    hiragana: "おおげさ",
    english: "exaggerated",
    example: {
      jp: "そんなに大げさに言わないでください。",
      en: "Please don't exaggerate so much."
    }
  },
  {
    kanji: "大通り",
    hiragana: "おおどおり",
    english: "main street",
    example: {
      jp: "大通りは車が多いです。",
      en: "There are many cars on the main street."
    }
  },
  {
    kanji: "岡",
    hiragana: "おか",
    english: "hill",
    example: {
      jp: "岡の上に家があります。",
      en: "There is a house on the hill."
    }
  },
  {
    kanji: "沖",
    hiragana: "おき",
    english: "offshore, open sea",
    example: {
      jp: "船は沖へ向かいました。",
      en: "The ship headed offshore."
    }
  },
  {
    kanji: "屋外",
    hiragana: "おくがい",
    english: "outdoors",
    example: {
      jp: "屋外でイベントが開かれます。",
      en: "The event will be held outdoors."
    }
  },
  {
    kanji: "贈る",
    hiragana: "おくる",
    english: "to give, to present",
    example: {
      jp: "友達に花を贈りました。",
      en: "I gave flowers to my friend."
    }
  },
  {
    kanji: "収める",
    hiragana: "おさめる",
    english: "to obtain, to achieve",
    example: {
      jp: "彼は大きな成功を収めました。",
      en: "He achieved great success."
    }
  },
  {
    kanji: "納める",
    hiragana: "おさめる",
    english: "to pay, to deliver",
    example: {
      jp: "税金を納めました。",
      en: "I paid the taxes."
    }
  },
  {
    kanji: "治める",
    hiragana: "おさめる",
    english: "to govern, to rule",
    example: {
      jp: "王が国を治めていました。",
      en: "The king ruled the country."
    }
  },
  {
    kanji: "恐らく",
    hiragana: "おそらく",
    english: "probably, perhaps",
    example: {
      jp: "彼は恐らく来ないでしょう。",
      en: "He probably won't come."
    }
  },
  {
    kanji: "恐れる",
    hiragana: "おそれる",
    english: "to fear",
    example: {
      jp: "失敗を恐れてはいけません。",
      en: "You should not fear failure."
    }
  },
  {
    kanji: "おしゃべり",
    hiragana: "おしゃべり",
    english: "chatting, talkative",
    example: {
      jp: "彼女はおしゃべりが好きです。",
      en: "She likes chatting."
    }
  },
  {
    kanji: "穏やか",
    hiragana: "おだやか",
    english: "calm, gentle",
    example: {
      jp: "今日は穏やかな天気です。",
      en: "The weather is calm today."
    }
  },
  {
    kanji: "落ち着く",
    hiragana: "おちつく",
    english: "to calm down",
    example: {
      jp: "少し落ち着いてください。",
      en: "Please calm down a little."
    }
  },
  {
    kanji: "おっとり",
    hiragana: "おっとり",
    english: "gentle, easygoing",
    example: {
      jp: "彼女はおっとりした性格です。",
      en: "She has a gentle personality."
    }
  },
  {
    kanji: "驚かす",
    hiragana: "おどろかす",
    english: "to surprise",
    example: {
      jp: "弟を驚かせました。",
      en: "I surprised my younger brother."
    }
  },
  {
    kanji: "脅かす",
    hiragana: "おどかす",
    english: "to threaten, to frighten",
    example: {
      jp: "大きな音が子どもを脅かしました。",
      en: "The loud noise frightened the child."
    }
  },
  {
    kanji: "おまけ",
    hiragana: "おまけ",
    english: "bonus, extra",
    example: {
      jp: "店でおまけをもらいました。",
      en: "I received a bonus item at the store."
    }
  },
  {
    kanji: "思い込む",
    hiragana: "おもいこむ",
    english: "to assume, to believe firmly",
    example: {
      jp: "彼は自分が正しいと思い込んでいます。",
      en: "He firmly believes that he is right."
    }
  },
  {
    kanji: "思いやり",
    hiragana: "おもいやり",
    english: "consideration, kindness",
    example: {
      jp: "思いやりのある人になりたいです。",
      en: "I want to become a considerate person."
    }
  },
  {
    kanji: "主に",
    hiragana: "おもに",
    english: "mainly",
    example: {
      jp: "この店は主に魚を売っています。",
      en: "This store mainly sells fish."
    }
  },
  {
    kanji: "泳ぎ",
    hiragana: "およぎ",
    english: "swimming",
    example: {
      jp: "彼は泳ぎが得意です。",
      en: "He is good at swimming."
    }
  },
  {
    kanji: "及ぼす",
    hiragana: "およぼす",
    english: "to exert, to affect",
    example: {
      jp: "環境に影響を及ぼします。",
      en: "It affects the environment."
    }
  },
  {
    kanji: "下ろす",
    hiragana: "おろす",
    english: "to lower, to unload",
    example: {
      jp: "荷物を車から下ろしました。",
      en: "I unloaded the luggage from the car."
    }
  },
  {
    kanji: "卸す",
    hiragana: "おろす",
    english: "to sell wholesale",
    example: {
      jp: "商品を店に卸しています。",
      en: "They wholesale products to stores."
    }
  },
  {
    kanji: "恩恵",
    hiragana: "おんけい",
    english: "blessing, benefit",
    example: {
      jp: "技術の恩恵を受けています。",
      en: "We benefit from technology."
    }
  },
  {
    kanji: "温泉",
    hiragana: "おんせん",
    english: "hot spring",
    example: {
      jp: "週末に温泉へ行きました。",
      en: "I went to a hot spring on the weekend."
    }
  },
  {
    kanji: "温帯",
    hiragana: "おんたい",
    english: "temperate zone",
    example: {
      jp: "日本の多くは温帯に属します。",
      en: "Most of Japan belongs to the temperate zone."
    }
  },
  {
    kanji: "温暖",
    hiragana: "おんだん",
    english: "warm, mild climate",
    example: {
      jp: "この地域は温暖な気候です。",
      en: "This area has a mild climate."
    }
  },
  {
    kanji: "可",
    hiragana: "か",
    english: "pass, acceptable",
    example: {
      jp: "試験の結果は可でした。",
      en: "The exam result was a pass."
    }
  },
  {
    kanji: "課",
    hiragana: "か",
    english: "section, department",
    example: {
      jp: "私は営業課で働いています。",
      en: "I work in the sales department."
    }
  },
  {
    kanji: "カード",
    hiragana: "カード",
    english: "card",
    example: {
      jp: "カードで支払いました。",
      en: "I paid by card."
    }
  },
  {
    kanji: "貝",
    hiragana: "かい",
    english: "shellfish",
    example: {
      jp: "海で貝を拾いました。",
      en: "I picked up shells at the beach."
    }
  },
  {
    kanji: "開会",
    hiragana: "かいかい",
    english: "opening of a meeting",
    example: {
      jp: "十時に開会します。",
      en: "The meeting will begin at ten."
    }
  },
  {
    kanji: "会館",
    hiragana: "かいかん",
    english: "hall, assembly building",
    example: {
      jp: "市民会館でコンサートがあります。",
      en: "There is a concert at the civic hall."
    }
  },
  {
    kanji: "改札",
    hiragana: "かいさつ",
    english: "ticket gate",
    example: {
      jp: "改札で友達を待っています。",
      en: "I am waiting for my friend at the ticket gate."
    }
  },
  {
    kanji: "解散",
    hiragana: "かいさん",
    english: "breakup, dissolution",
    example: {
      jp: "会議は五時に解散しました。",
      en: "The meeting ended at five."
    }
  },
  {
    kanji: "回数",
    hiragana: "かいすう",
    english: "number of times",
    example: {
      jp: "練習の回数を増やしました。",
      en: "I increased the number of practice sessions."
    }
  },
  {
    kanji: "回数券",
    hiragana: "かいすうけん",
    english: "book of tickets",
    example: {
      jp: "バスの回数券を買いました。",
      en: "I bought a book of bus tickets."
    }
  },
  {
    kanji: "回答",
    hiragana: "かいとう",
    english: "answer, reply",
    example: {
      jp: "質問に回答してください。",
      en: "Please answer the question."
    }
  },
  {
    kanji: "外出",
    hiragana: "がいしゅつ",
    english: "going out",
    example: {
      jp: "午後は外出しています。",
      en: "I will be out in the afternoon."
    }
  },
  {
    kanji: "改善",
    hiragana: "かいぜん",
    english: "improvement",
    example: {
      jp: "サービスを改善しました。",
      en: "The service was improved."
    }
  },
  {
    kanji: "快適",
    hiragana: "かいてき",
    english: "comfortable",
    example: {
      jp: "この部屋はとても快適です。",
      en: "This room is very comfortable."
    }
  },
  {
    kanji: "解釈",
    hiragana: "かいしゃく",
    english: "interpretation",
    example: {
      jp: "その文章の解釈は難しいです。",
      en: "The interpretation of that passage is difficult."
    }
  },
  {
    kanji: "改正",
    hiragana: "かいせい",
    english: "revision, amendment",
    example: {
      jp: "法律が改正されました。",
      en: "The law was revised."
    }
  },
  {
    kanji: "解説",
    hiragana: "かいせつ",
    english: "explanation, commentary",
    example: {
      jp: "先生の解説は分かりやすいです。",
      en: "The teacher's explanation is easy to understand."
    }
  },
  {
    kanji: "回復",
    hiragana: "かいふく",
    english: "recovery",
    example: {
      jp: "病気から回復しました。",
      en: "I recovered from the illness."
    }
  },
  {
    kanji: "開放",
    hiragana: "かいほう",
    english: "opening, liberation",
    example: {
      jp: "公園が一般に開放されました。",
      en: "The park was opened to the public."
    }
  },
  {
    kanji: "概論",
    hiragana: "がいろん",
    english: "general theory, outline",
    example: {
      jp: "経済学概論を勉強しています。",
      en: "I am studying an introduction to economics."
    }
  },
  {
    kanji: "顔付き",
    hiragana: "かおつき",
    english: "facial expression",
    example: {
      jp: "彼の顔付きが変わりました。",
      en: "His facial expression changed."
    }
  },
  {
    kanji: "抱える",
    hiragana: "かかえる",
    english: "to hold, to have problems",
    example: {
      jp: "会社は問題を抱えています。",
      en: "The company has problems."
    }
  },
  {
    kanji: "価格",
    hiragana: "かかく",
    english: "price",
    example: {
      jp: "価格が上がりました。",
      en: "The price increased."
    }
  },
  {
    kanji: "化学",
    hiragana: "かがく",
    english: "chemistry",
    example: {
      jp: "私は化学を専攻しています。",
      en: "I major in chemistry."
    }
  },
  {
    kanji: "限る",
    hiragana: "かぎる",
    english: "to limit; to be best",
    example: {
      jp: "夏は冷たい飲み物に限ります。",
      en: "Cold drinks are the best in summer."
    }
  },
  {
    kanji: "限り",
    hiragana: "かぎり",
    english: "limit; as long as",
    example: {
      jp: "私が知っている限りでは正しいです。",
      en: "As far as I know, it is correct."
    }
  },
  {
    kanji: "輝く",
    hiragana: "かがやく",
    english: "to shine",
    example: {
      jp: "星が夜空で輝いています。",
      en: "The stars are shining in the night sky."
    }
  },
  {
    kanji: "係",
    hiragana: "かかり",
    english: "person in charge",
    example: {
      jp: "受付係に聞いてください。",
      en: "Please ask the person in charge at the reception."
    }
  },
  {
    kanji: "覚悟",
    hiragana: "かくご",
    english: "resolution, preparedness",
    example: {
      jp: "失敗する覚悟が必要です。",
      en: "You need to be prepared to fail."
    }
  },
  {
    kanji: "学会",
    hiragana: "がっかい",
    english: "academic society",
    example: {
      jp: "学会で研究を発表しました。",
      en: "I presented my research at an academic conference."
    }
  },
  {
    kanji: "活気",
    hiragana: "かっき",
    english: "energy, liveliness",
    example: {
      jp: "市場は活気があります。",
      en: "The market is lively."
    }
  },
  {
    kanji: "学期",
    hiragana: "がっき",
    english: "school term",
    example: {
      jp: "新しい学期が始まりました。",
      en: "The new school term has started."
    }
  },
  {
    kanji: "活躍",
    hiragana: "かつやく",
    english: "activity, success",
    example: {
      jp: "彼は世界で活躍しています。",
      en: "He is active around the world."
    }
  },
  {
    kanji: "活用",
    hiragana: "かつよう",
    english: "practical use, utilization",
    example: {
      jp: "AIを活用しています。",
      en: "We are utilizing AI."
    }
  },
  {
    kanji: "仮定",
    hiragana: "かてい",
    english: "assumption",
    example: {
      jp: "その仮定は正しくありません。",
      en: "That assumption is not correct."
    }
  },
  {
    kanji: "過程",
    hiragana: "かてい",
    english: "process",
    example: {
      jp: "製造過程を見学しました。",
      en: "I observed the manufacturing process."
    }
  },
  {
    kanji: "角度",
    hiragana: "かくど",
    english: "angle",
    example: {
      jp: "角度を変えて見てください。",
      en: "Please look at it from a different angle."
    }
  },
  {
    kanji: "確認",
    hiragana: "かくにん",
    english: "confirmation",
    example: {
      jp: "もう一度確認してください。",
      en: "Please confirm it once again."
    }
  },
  {
    kanji: "学問",
    hiragana: "がくもん",
    english: "scholarship, learning",
    example: {
      jp: "学問は大切です。",
      en: "Learning is important."
    }
  },
  {
    kanji: "隠す",
    hiragana: "かくす",
    english: "to hide",
    example: {
      jp: "秘密を隠しています。",
      en: "He is hiding a secret."
    }
  },
  {
    kanji: "拡大",
    hiragana: "かくだい",
    english: "expansion, enlargement",
    example: {
      jp: "市場を拡大しています。",
      en: "The market is expanding."
    }
  },
  {
    kanji: "確率",
    hiragana: "かくりつ",
    english: "probability",
    example: {
      jp: "成功する確率は高いです。",
      en: "The probability of success is high."
    }
  },
  {
    kanji: "影",
    hiragana: "かげ",
    english: "shadow",
    example: {
      jp: "木の影で休みました。",
      en: "I rested in the shade of the tree."
    }
  },
  {
    kanji: "陰",
    hiragana: "かげ",
    english: "shade, behind the scenes",
    example: {
      jp: "彼は陰で努力しています。",
      en: "He works hard behind the scenes."
    }
  },
  {
    kanji: "欠ける",
    hiragana: "かける",
    english: "to lack",
    example: {
      jp: "注意が欠けています。",
      en: "You lack attention."
    }
  },
  {
    kanji: "加減",
    hiragana: "かげん",
    english: "condition, adjustment",
    example: {
      jp: "火加減に注意してください。",
      en: "Please pay attention to the heat level."
    }
  },
  {
    kanji: "過去",
    hiragana: "かこ",
    english: "past",
    example: {
      jp: "過去を振り返りました。",
      en: "I looked back on the past."
    }
  },
  {
    kanji: "囲む",
    hiragana: "かこむ",
    english: "to surround",
    example: {
      jp: "みんなで机を囲みました。",
      en: "We gathered around the table."
    }
  },
  {
    kanji: "火災",
    hiragana: "かさい",
    english: "fire, conflagration",
    example: {
      jp: "火災が発生しました。",
      en: "A fire broke out."
    }
  },
  {
    kanji: "飾る",
    hiragana: "かざる",
    english: "to decorate",
    example: {
      jp: "部屋に花を飾りました。",
      en: "I decorated the room with flowers."
    }
  },
  {
    kanji: "貸し出し",
    hiragana: "かしだし",
    english: "lending, loan service",
    example: {
      jp: "図書館の貸し出し期間は二週間です。",
      en: "The library loan period is two weeks."
    }
  },
  {
    kanji: "過失",
    hiragana: "かしつ",
    english: "mistake, negligence",
    example: {
      jp: "彼の過失で事故が起きました。",
      en: "The accident happened because of his negligence."
    }
  },
  {
    kanji: "果実",
    hiragana: "かじつ",
    english: "fruit",
    example: {
      jp: "この果実は甘いです。",
      en: "This fruit is sweet."
    }
  },
  {
    kanji: "賢い",
    hiragana: "かしこい",
    english: "wise, clever",
    example: {
      jp: "彼はとても賢い学生です。",
      en: "He is a very clever student."
    }
  },
  {
    kanji: "課税",
    hiragana: "かぜい",
    english: "taxation",
    example: {
      jp: "その商品には課税されます。",
      en: "That product is subject to taxation."
    }
  },
  {
    kanji: "肩幅",
    hiragana: "かたはば",
    english: "shoulder width",
    example: {
      jp: "肩幅を測ってください。",
      en: "Please measure the shoulder width."
    }
  },
  {
    kanji: "片道",
    hiragana: "かたみち",
    english: "one way",
    example: {
      jp: "片道切符を買いました。",
      en: "I bought a one-way ticket."
    }
  },
  {
    kanji: "勝手",
    hiragana: "かって",
    english: "selfish; convenience",
    example: {
      jp: "勝手なことをしないでください。",
      en: "Please don't act selfishly."
    }
  },
  {
    kanji: "活動",
    hiragana: "かつどう",
    english: "activity",
    example: {
      jp: "地域活動に参加しています。",
      en: "I participate in community activities."
    }
  },
  {
    kanji: "悲しみ",
    hiragana: "かなしみ",
    english: "sadness",
    example: {
      jp: "深い悲しみを感じました。",
      en: "I felt deep sadness."
    }
  },
  {
    kanji: "必ずしも",
    hiragana: "かならずしも",
    english: "not necessarily",
    example: {
      jp: "お金があれば必ずしも幸せとは限りません。",
      en: "Having money does not necessarily mean happiness."
    }
  },
  {
    kanji: "被せる",
    hiragana: "かぶせる",
    english: "to cover",
    example: {
      jp: "鍋にふたを被せました。",
      en: "I put a lid on the pot."
    }
  },
  {
    kanji: "家庭",
    hiragana: "かてい",
    english: "home, family",
    example: {
      jp: "家庭を大切にしています。",
      en: "I value my family."
    }
  },
  {
    kanji: "加入",
    hiragana: "かにゅう",
    english: "joining, enrollment",
    example: {
      jp: "保険に加入しました。",
      en: "I enrolled in insurance."
    }
  },
  {
    kanji: "加熱",
    hiragana: "かねつ",
    english: "heating",
    example: {
      jp: "十分に加熱してください。",
      en: "Please heat it thoroughly."
    }
  },
  {
    kanji: "株式会社",
    hiragana: "かぶしきがいしゃ",
    english: "joint-stock company",
    example: {
      jp: "彼は株式会社を設立しました。",
      en: "He established a corporation."
    }
  },
  {
    kanji: "被害",
    hiragana: "ひがい",
    english: "damage, injury",
    example: {
      jp: "台風による被害が出ました。",
      en: "The typhoon caused damage."
    }
  },
  {
    kanji: "学歴",
    hiragana: "がくれき",
    english: "educational background",
    example: {
      jp: "履歴書に学歴を書きます。",
      en: "I write my educational background on the resume."
    }
  },
  {
    kanji: "活力",
    hiragana: "かつりょく",
    english: "energy, vitality",
    example: {
      jp: "朝食は一日の活力になります。",
      en: "Breakfast gives energy for the day."
    }
  },
  {
    kanji: "兼ねる",
    hiragana: "かねる",
    english: "to serve as; to be unable to",
    example: {
      jp: "会議室を食堂として兼ねています。",
      en: "The room also serves as a cafeteria."
    }
  },
  {
    kanji: "可能",
    hiragana: "かのう",
    english: "possible",
    example: {
      jp: "明日までに完成することは可能です。",
      en: "It is possible to finish it by tomorrow."
    }
  },
  {
    kanji: "我慢",
    hiragana: "がまん",
    english: "patience, endurance",
    example: {
      jp: "少し我慢してください。",
      en: "Please be patient for a while."
    }
  },
  {
    kanji: "構う",
    hiragana: "かまう",
    english: "to mind; to care for",
    example: {
      jp: "気にしなくても構いません。",
      en: "You don't have to worry about it."
    }
  },
  {
    kanji: "神",
    hiragana: "かみ",
    english: "god, deity",
    example: {
      jp: "神社で神に祈りました。",
      en: "I prayed to the god at the shrine."
    }
  },
  {
    kanji: "雷",
    hiragana: "かみなり",
    english: "thunder",
    example: {
      jp: "昨夜は雷が鳴っていました。",
      en: "There was thunder last night."
    }
  },
  {
    kanji: "貨物",
    hiragana: "かもつ",
    english: "cargo, freight",
    example: {
      jp: "貨物列車が通りました。",
      en: "A freight train passed by."
    }
  },
  {
    kanji: "かゆい",
    hiragana: "かゆい",
    english: "itchy",
    example: {
      jp: "蚊に刺されて腕がかゆいです。",
      en: "My arm is itchy because of a mosquito bite."
    }
  },
  {
    kanji: "空",
    hiragana: "から",
    english: "empty",
    example: {
      jp: "箱は空でした。",
      en: "The box was empty."
    }
  },
  {
    kanji: "殻",
    hiragana: "から",
    english: "shell, husk",
    example: {
      jp: "卵の殻を捨てました。",
      en: "I threw away the eggshell."
    }
  },
  {
    kanji: "刈る",
    hiragana: "かる",
    english: "to cut, to mow",
    example: {
      jp: "庭の草を刈りました。",
      en: "I cut the grass in the garden."
    }
  },
  {
    kanji: "河川",
    hiragana: "かせん",
    english: "river",
    example: {
      jp: "河川の水位が上がっています。",
      en: "The river level is rising."
    }
  },
  {
    kanji: "為替",
    hiragana: "かわせ",
    english: "exchange, remittance",
    example: {
      jp: "外国為替を勉強しています。",
      en: "I am studying foreign exchange."
    }
  },
  {
    kanji: "感激",
    hiragana: "かんげき",
    english: "deep emotion, impression",
    example: {
      jp: "素晴らしい演奏に感激しました。",
      en: "I was deeply moved by the wonderful performance."
    }
  },
  {
    kanji: "歓迎",
    hiragana: "かんげい",
    english: "welcome",
    example: {
      jp: "新入社員を歓迎しました。",
      en: "We welcomed the new employees."
    }
  },
  {
    kanji: "観光",
    hiragana: "かんこう",
    english: "sightseeing",
    example: {
      jp: "京都へ観光に行きました。",
      en: "I went sightseeing in Kyoto."
    }
  },
  {
    kanji: "観察",
    hiragana: "かんさつ",
    english: "observation",
    example: {
      jp: "動物を観察しました。",
      en: "I observed the animals."
    }
  },
  {
    kanji: "感謝",
    hiragana: "かんしゃ",
    english: "gratitude",
    example: {
      jp: "両親に感謝しています。",
      en: "I am grateful to my parents."
    }
  },
  {
    kanji: "患者",
    hiragana: "かんじゃ",
    english: "patient",
    example: {
      jp: "病院には多くの患者がいます。",
      en: "There are many patients in the hospital."
    }
  },
  {
    kanji: "勘定",
    hiragana: "かんじょう",
    english: "calculation; bill",
    example: {
      jp: "お勘定をお願いします。",
      en: "May I have the bill, please?"
    }
  },
 {
    kanji: "感心",
    hiragana: "かんしん",
    english: "admiration, being impressed",
    example: {
      jp: "彼の努力に感心しました。",
      en: "I was impressed by his efforts."
    }
  },
  {
    kanji: "完成",
    hiragana: "かんせい",
    english: "completion",
    example: {
      jp: "新しい橋が完成しました。",
      en: "The new bridge was completed."
    }
  },
  {
    kanji: "完全",
    hiragana: "かんぜん",
    english: "perfect, complete",
    example: {
      jp: "完全に理解できました。",
      en: "I understood it completely."
    }
  },
  {
    kanji: "関税",
    hiragana: "かんぜい",
    english: "customs duty, tariff",
    example: {
      jp: "輸入品には関税がかかります。",
      en: "Imported goods are subject to customs duties."
    }
  },
  {
    kanji: "感動",
    hiragana: "かんどう",
    english: "being moved, impression",
    example: {
      jp: "映画を見て感動しました。",
      en: "I was moved by the movie."
    }
  },
  {
    kanji: "管理",
    hiragana: "かんり",
    english: "management, control",
    example: {
      jp: "時間の管理は大切です。",
      en: "Time management is important."
    }
  },
  {
    kanji: "完了",
    hiragana: "かんりょう",
    english: "completion, finish",
    example: {
      jp: "作業が完了しました。",
      en: "The work has been completed."
    }
  },
  {
    kanji: "関連",
    hiragana: "かんれん",
    english: "relation, connection",
    example: {
      jp: "その事件には関連があります。",
      en: "There is a connection to that incident."
    }
  },
  {
    kanji: "議員",
    hiragana: "ぎいん",
    english: "member of parliament, assembly member",
    example: {
      jp: "議員が演説をしました。",
      en: "The assembly member gave a speech."
    }
  },
  {
    kanji: "記憶",
    hiragana: "きおく",
    english: "memory",
    example: {
      jp: "昔の記憶を思い出しました。",
      en: "I recalled old memories."
    }
  },
  {
    kanji: "気温",
    hiragana: "きおん",
    english: "air temperature",
    example: {
      jp: "今日は気温が高いです。",
      en: "The temperature is high today."
    }
  },
  {
    kanji: "機械",
    hiragana: "きかい",
    english: "machine",
    example: {
      jp: "工場で機械が動いています。",
      en: "Machines are operating in the factory."
    }
  },
  {
    kanji: "企業",
    hiragana: "きぎょう",
    english: "company, enterprise",
    example: {
      jp: "大企業に就職したいです。",
      en: "I want to work for a large company."
    }
  },
  {
    kanji: "危険",
    hiragana: "きけん",
    english: "danger",
    example: {
      jp: "ここは危険です。",
      en: "This place is dangerous."
    }
  },
  {
    kanji: "希望",
    hiragana: "きぼう",
    english: "hope, wish",
    example: {
      jp: "将来に希望を持っています。",
      en: "I have hope for the future."
    }
  },
  {
    kanji: "基本",
    hiragana: "きほん",
    english: "basis, foundation",
    example: {
      jp: "基本を勉強しましょう。",
      en: "Let's study the basics."
    }
  },
  {
    kanji: "客観的",
    hiragana: "きゃっかんてき",
    english: "objective",
    example: {
      jp: "客観的に判断してください。",
      en: "Please judge objectively."
    }
  },
  {
    kanji: "逆",
    hiragana: "ぎゃく",
    english: "opposite, reverse",
    example: {
      jp: "逆の方向へ行きました。",
      en: "I went in the opposite direction."
    }
  },
  {
    kanji: "吸収",
    hiragana: "きゅうしゅう",
    english: "absorption",
    example: {
      jp: "植物は水を吸収します。",
      en: "Plants absorb water."
    }
  },
  {
    kanji: "休日",
    hiragana: "きゅうじつ",
    english: "holiday",
    example: {
      jp: "休日は家で休みます。",
      en: "I rest at home on holidays."
    }
  },
  {
    kanji: "給与",
    hiragana: "きゅうよ",
    english: "salary, pay",
    example: {
      jp: "給与が上がりました。",
      en: "My salary increased."
    }
  },
  {
    kanji: "強化",
    hiragana: "きょうか",
    english: "strengthening",
    example: {
      jp: "安全対策を強化しました。",
      en: "We strengthened the safety measures."
    }
  },
  {
    kanji: "競技",
    hiragana: "きょうぎ",
    english: "competition, sporting event",
    example: {
      jp: "競技に参加しました。",
      en: "I participated in the competition."
    }
  },
  {
    kanji: "供給",
    hiragana: "きょうきゅう",
    english: "supply",
    example: {
      jp: "電力の供給が止まりました。",
      en: "The electricity supply stopped."
    }
  },
  {
    kanji: "共同",
    hiragana: "きょうどう",
    english: "cooperation, joint",
    example: {
      jp: "共同研究を行っています。",
      en: "We are conducting joint research."
    }
  },
  {
    kanji: "強調",
    hiragana: "きょうちょう",
    english: "emphasis",
    example: {
      jp: "先生は重要な点を強調しました。",
      en: "The teacher emphasized the important points."
    }
  },
  {
    kanji: "恐怖",
    hiragana: "きょうふ",
    english: "fear, terror",
    example: {
      jp: "恐怖を感じました。",
      en: "I felt fear."
    }
  },
  {
    kanji: "協力",
    hiragana: "きょうりょく",
    english: "cooperation",
    example: {
      jp: "ご協力ありがとうございます。",
      en: "Thank you for your cooperation."
    }
  },
  {
    kanji: "許可",
    hiragana: "きょか",
    english: "permission",
    example: {
      jp: "先生の許可をもらいました。",
      en: "I received the teacher's permission."
    }
  },
  {
    kanji: "記録",
    hiragana: "きろく",
    english: "record",
    example: {
      jp: "試合の記録を残しました。",
      en: "I kept a record of the match."
    }
  },
  {
    kanji: "緊急",
    hiragana: "きんきゅう",
    english: "emergency",
    example: {
      jp: "緊急会議が開かれました。",
      en: "An emergency meeting was held."
    }
  },
  {
    kanji: "禁止",
    hiragana: "きんし",
    english: "prohibition",
    example: {
      jp: "ここでの喫煙は禁止です。",
      en: "Smoking is prohibited here."
    }
  },
  {
    kanji: "緊張",
    hiragana: "きんちょう",
    english: "tension, nervousness",
    example: {
      jp: "試験の前で緊張しています。",
      en: "I am nervous before the exam."
    }
  },
  {
    kanji: "金融",
    hiragana: "きんゆう",
    english: "finance",
    example: {
      jp: "金融について勉強しています。",
      en: "I am studying finance."
    }
  },
  {
    kanji: "区域",
    hiragana: "くいき",
    english: "zone, district",
    example: {
      jp: "この区域は立入禁止です。",
      en: "This area is off-limits."
    }
  },
  {
    kanji: "空気",
    hiragana: "くうき",
    english: "air; atmosphere",
    example: {
      jp: "部屋の空気を入れ替えました。",
      en: "I changed the air in the room."
    }
  },
  {
    kanji: "偶然",
    hiragana: "ぐうぜん",
    english: "coincidence",
    example: {
      jp: "駅で偶然友達に会いました。",
      en: "I met my friend at the station by chance."
    }
  },
  {
    kanji: "工夫",
    hiragana: "くふう",
    english: "device, ingenuity",
    example: {
      jp: "時間を節約する工夫をしました。",
      en: "I devised a way to save time."
    }
  },
  {
    kanji: "区分",
    hiragana: "くぶん",
    english: "division, classification",
    example: {
      jp: "ごみを区分してください。",
      en: "Please separate the garbage."
    }
  },
  {
    kanji: "組合",
    hiragana: "くみあい",
    english: "union, association",
    example: {
      jp: "労働組合に加入しました。",
      en: "I joined the labor union."
    }
  },
  {
    kanji: "悔しい",
    hiragana: "くやしい",
    english: "frustrating, regrettable",
    example: {
      jp: "試合に負けて悔しかったです。",
      en: "I was frustrated because I lost the match."
    }
  },
  {
    kanji: "苦情",
    hiragana: "くじょう",
    english: "complaint",
    example: {
      jp: "お客様から苦情がありました。",
      en: "There was a complaint from a customer."
    }
  },
  {
    kanji: "苦痛",
    hiragana: "くつう",
    english: "pain, suffering",
    example: {
      jp: "長時間立つのは苦痛です。",
      en: "Standing for a long time is painful."
    }
  },
  {
    kanji: "配る",
    hiragana: "くばる",
    english: "to distribute",
    example: {
      jp: "資料を皆に配りました。",
      en: "I distributed the materials to everyone."
    }
  },
  {
    kanji: "訓練",
    hiragana: "くんれん",
    english: "training",
    example: {
      jp: "消防訓練に参加しました。",
      en: "I participated in the fire drill."
    }
  },
  {
    kanji: "経営",
    hiragana: "けいえい",
    english: "management, administration",
    example: {
      jp: "父は会社を経営しています。",
      en: "My father manages a company."
    }
  },
  {
    kanji: "契約",
    hiragana: "けいやく",
    english: "contract",
    example: {
      jp: "会社と契約を結びました。",
      en: "I signed a contract with the company."
    }
  },
  {
    kanji: "経済",
    hiragana: "けいざい",
    english: "economy",
    example: {
      jp: "経済の勉強をしています。",
      en: "I am studying economics."
    }
  },
  {
    kanji: "計画",
    hiragana: "けいかく",
    english: "plan",
    example: {
      jp: "旅行の計画を立てています。",
      en: "I am making a travel plan."
    }
  },
  {
    kanji: "警告",
    hiragana: "けいこく",
    english: "warning",
    example: {
      jp: "先生から警告を受けました。",
      en: "I received a warning from the teacher."
    }
  },
  {
    kanji: "景気",
    hiragana: "けいき",
    english: "economic condition",
    example: {
      jp: "景気が回復しています。",
      en: "The economy is recovering."
    }
  },
  {
    kanji: "敬語",
    hiragana: "けいご",
    english: "honorific language",
    example: {
      jp: "敬語を正しく使いましょう。",
      en: "Let's use honorific language correctly."
    }
  },
  {
    kanji: "傾向",
    hiragana: "けいこう",
    english: "tendency",
    example: {
      jp: "最近その傾向が強いです。",
      en: "That tendency has become stronger recently."
    }
  },
  {
    kanji: "警備",
    hiragana: "けいび",
    english: "security, guarding",
    example: {
      jp: "警備員が入口にいます。",
      en: "A security guard is at the entrance."
    }
  },
  {
    kanji: "結果",
    hiragana: "けっか",
    english: "result",
    example: {
      jp: "試験の結果が出ました。",
      en: "The exam results have been released."
    }
  },
  {
    kanji: "決定",
    hiragana: "けってい",
    english: "decision",
    example: {
      jp: "会議で決定しました。",
      en: "It was decided at the meeting."
    }
  },
  {
    kanji: "欠点",
    hiragana: "けってん",
    english: "fault, weakness",
    example: {
      jp: "自分の欠点を直したいです。",
      en: "I want to correct my weaknesses."
    }
  },
  {
    kanji: "健康",
    hiragana: "けんこう",
    english: "health",
    example: {
      jp: "健康に気を付けています。",
      en: "I take care of my health."
    }
  },
  {
    kanji: "現在",
    hiragana: "げんざい",
    english: "present, current",
    example: {
      jp: "現在、日本に住んでいます。",
      en: "I currently live in Japan."
    }
  },
  {
    kanji: "検査",
    hiragana: "けんさ",
    english: "inspection, examination",
    example: {
      jp: "病院で検査を受けました。",
      en: "I had a medical examination at the hospital."
    }
  },
  {
    kanji: "現実",
    hiragana: "げんじつ",
    english: "reality",
    example: {
      jp: "現実は厳しいです。",
      en: "Reality is harsh."
    }
  },
  {
    kanji: "建設",
    hiragana: "けんせつ",
    english: "construction",
    example: {
      jp: "新しい橋を建設しています。",
      en: "They are constructing a new bridge."
    }
  },
  {
    kanji: "現象",
    hiragana: "げんしょう",
    english: "phenomenon",
    example: {
      jp: "不思議な現象が起こりました。",
      en: "A strange phenomenon occurred."
    }
  },
  {
    kanji: "現代",
    hiragana: "げんだい",
    english: "modern times",
    example: {
      jp: "現代社会について学びます。",
      en: "We study modern society."
    }
  },
  {
    kanji: "限定",
    hiragana: "げんてい",
    english: "limit, restriction",
    example: {
      jp: "期間限定の商品です。",
      en: "This is a limited-time product."
    }
  },
  {
    kanji: "見当",
    hiragana: "けんとう",
    english: "guess, estimate",
    example: {
      jp: "全く見当がつきません。",
      en: "I have absolutely no idea."
    }
  },
  {
    kanji: "検討",
    hiragana: "けんとう",
    english: "consideration, examination",
    example: {
      jp: "その案を検討しています。",
      en: "We are considering the proposal."
    }
  },
  {
    kanji: "現場",
    hiragana: "げんば",
    english: "actual site, workplace",
    example: {
      jp: "事故の現場へ行きました。",
      en: "I went to the accident site."
    }
  },
  {
    kanji: "権利",
    hiragana: "けんり",
    english: "right, privilege",
    example: {
      jp: "誰にも教育を受ける権利があります。",
      en: "Everyone has the right to receive an education."
    }
  },
  {
    kanji: "効く",
    hiragana: "きく",
    english: "to be effective",
    example: {
      jp: "この薬はよく効きます。",
      en: "This medicine works well."
    }
  },
  {
    kanji: "交換",
    hiragana: "こうかん",
    english: "exchange",
    example: {
      jp: "名刺を交換しました。",
      en: "We exchanged business cards."
    }
  },
  {
    kanji: "公開",
    hiragana: "こうかい",
    english: "opening to the public",
    example: {
      jp: "映画が来月公開されます。",
      en: "The movie will be released next month."
    }
  },
  {
    kanji: "後悔",
    hiragana: "こうかい",
    english: "regret",
    example: {
      jp: "後悔しないように頑張ります。",
      en: "I will do my best so that I have no regrets."
    }
  },
  {
    kanji: "工場",
    hiragana: "こうじょう",
    english: "factory",
    example: {
      jp: "父は工場で働いています。",
      en: "My father works at a factory."
    }
  },
  {
    kanji: "向上",
    hiragana: "こうじょう",
    english: "improvement, advancement",
    example: {
      jp: "技術の向上を目指します。",
      en: "We aim to improve our skills."
    }
  },
  {
    kanji: "交通",
    hiragana: "こうつう",
    english: "traffic, transportation",
    example: {
      jp: "交通事故に注意してください。",
      en: "Please be careful of traffic accidents."
    }
  },
  {
    kanji: "行動",
    hiragana: "こうどう",
    english: "action, behavior",
    example: {
      jp: "早く行動しましょう。",
      en: "Let's act quickly."
    }
  },
  {
    kanji: "公平",
    hiragana: "こうへい",
    english: "fairness",
    example: {
      jp: "公平な判断をしてください。",
      en: "Please make a fair judgment."
    }
  },
  {
    kanji: "効率",
    hiragana: "こうりつ",
    english: "efficiency",
    example: {
      jp: "仕事の効率を上げます。",
      en: "I will improve work efficiency."
    }
  },
  {
    kanji: "交流",
    hiragana: "こうりゅう",
    english: "exchange, interaction",
    example: {
      jp: "留学生と交流しました。",
      en: "I interacted with international students."
    }
  },
  {
    kanji: "高齢",
    hiragana: "こうれい",
    english: "advanced age, elderly",
    example: {
      jp: "高齢者の人口が増えています。",
      en: "The elderly population is increasing."
    }
  },
  {
    kanji: "誤解",
    hiragana: "ごかい",
    english: "misunderstanding",
    example: {
      jp: "私の言葉を誤解しないでください。",
      en: "Please don't misunderstand my words."
    }
  },
  {
    kanji: "呼吸",
    hiragana: "こきゅう",
    english: "breathing",
    example: {
      jp: "深く呼吸してください。",
      en: "Please take a deep breath."
    }
  },
  {
    kanji: "国際",
    hiragana: "こくさい",
    english: "international",
    example: {
      jp: "国際会議に参加しました。",
      en: "I participated in an international conference."
    }
  },
  {
    kanji: "個人",
    hiragana: "こじん",
    english: "individual, personal",
    example: {
      jp: "個人情報を守ってください。",
      en: "Please protect personal information."
    }
  },
  {
    kanji: "故障",
    hiragana: "こしょう",
    english: "breakdown, malfunction",
    example: {
      jp: "エアコンが故障しました。",
      en: "The air conditioner broke down."
    }
  },
  {
    kanji: "古代",
    hiragana: "こだい",
    english: "ancient times",
    example: {
      jp: "古代の歴史を勉強しています。",
      en: "I am studying ancient history."
    }
  },
  {
    kanji: "国家",
    hiragana: "こっか",
    english: "nation, state",
    example: {
      jp: "国家の安全が重要です。",
      en: "National security is important."
    }
  },
  {
    kanji: "言語",
    hiragana: "げんご",
    english: "language",
    example: {
      jp: "外国語を学ぶのが好きです。",
      en: "I like learning foreign languages."
    }
  },
  {
    kanji: "幸福",
    hiragana: "こうふく",
    english: "happiness",
    example: {
      jp: "家族と過ごす時間が幸福です。",
      en: "Spending time with my family brings happiness."
    }
  },
  {
    kanji: "誤る",
    hiragana: "あやまる",
    english: "to make a mistake",
    example: {
      jp: "判断を誤ってしまいました。",
      en: "I made an incorrect judgment."
    }
  },
  {
    kanji: "混雑",
    hiragana: "こんざつ",
    english: "crowding, congestion",
    example: {
      jp: "駅は朝とても混雑します。",
      en: "The station is very crowded in the morning."
    }
  },
  {
    kanji: "混乱",
    hiragana: "こんらん",
    english: "confusion, disorder",
    example: {
      jp: "会場は混乱していました。",
      en: "The venue was in confusion."
    }
  },
  {
    kanji: "採用",
    hiragana: "さいよう",
    english: "employment, adoption",
    example: {
      jp: "新しい社員が採用されました。",
      en: "A new employee was hired."
    }
  },
  {
    kanji: "財産",
    hiragana: "ざいさん",
    english: "property, assets",
    example: {
      jp: "彼は多くの財産を持っています。",
      en: "He owns many assets."
    }
  },
  {
    kanji: "最大",
    hiragana: "さいだい",
    english: "maximum, biggest",
    example: {
      jp: "今年最大のイベントです。",
      en: "It is the biggest event of the year."
    }
  },
  {
    kanji: "最低",
    hiragana: "さいてい",
    english: "minimum, worst",
    example: {
      jp: "最低限の準備が必要です。",
      en: "Minimum preparation is necessary."
    }
  },
  {
    kanji: "災害",
    hiragana: "さいがい",
    english: "disaster",
    example: {
      jp: "災害に備えましょう。",
      en: "Let's prepare for disasters."
    }
  },
  {
    kanji: "材料",
    hiragana: "ざいりょう",
    english: "material, ingredient",
    example: {
      jp: "料理の材料を買いました。",
      en: "I bought ingredients for cooking."
    }
  },
  {
    kanji: "作業",
    hiragana: "さぎょう",
    english: "work, operation",
    example: {
      jp: "作業が終わりました。",
      en: "The work has been completed."
    }
  },
  {
    kanji: "作品",
    hiragana: "さくひん",
    english: "work, piece of art",
    example: {
      jp: "彼の作品は有名です。",
      en: "His works are famous."
    }
  },
  {
    kanji: "作物",
    hiragana: "さくもつ",
    english: "crop",
    example: {
      jp: "今年の作物はよく育ちました。",
      en: "This year's crops grew well."
    }
  },
  {
    kanji: "削減",
    hiragana: "さくげん",
    english: "reduction, cut",
    example: {
      jp: "経費を削減しました。",
      en: "We reduced expenses."
    }
  },
  {
    kanji: "支える",
    hiragana: "ささえる",
    english: "to support",
    example: {
      jp: "家族が私を支えてくれます。",
      en: "My family supports me."
    }
  },
  {
    kanji: "刺さる",
    hiragana: "ささる",
    english: "to stick into",
    example: {
      jp: "指にとげが刺さりました。",
      en: "A thorn stuck into my finger."
    }
  },
  {
    kanji: "指す",
    hiragana: "さす",
    english: "to point; to indicate",
    example: {
      jp: "地図で場所を指してください。",
      en: "Please point to the place on the map."
    }
  },
  {
    kanji: "撮影",
    hiragana: "さつえい",
    english: "photographing, filming",
    example: {
      jp: "公園で撮影をしました。",
      en: "We did filming in the park."
    }
  },
  {
    kanji: "作成",
    hiragana: "さくせい",
    english: "creation, preparation",
    example: {
      jp: "報告書を作成しました。",
      en: "I created the report."
    }
  },
  {
    kanji: "殺到",
    hiragana: "さっとう",
    english: "rush, flood",
    example: {
      jp: "注文が殺到しました。",
      en: "Orders poured in."
    }
  },
  {
    kanji: "さっぱり",
    hiragana: "さっぱり",
    english: "refreshing; not at all",
    example: {
      jp: "運動した後はさっぱりしました。",
      en: "I felt refreshed after exercising."
    }
  },
  {
    kanji: "砂漠",
    hiragana: "さばく",
    english: "desert",
    example: {
      jp: "砂漠を旅行してみたいです。",
      en: "I want to travel through a desert."
    }
  },
  {
    kanji: "差別",
    hiragana: "さべつ",
    english: "discrimination",
    example: {
      jp: "差別をなくすべきです。",
      en: "Discrimination should be eliminated."
    }
  },
  {
    kanji: "冷ます",
    hiragana: "さます",
    english: "to cool",
    example: {
      jp: "お茶を少し冷ましてください。",
      en: "Please let the tea cool a little."
    }
  },
  {
    kanji: "覚ます",
    hiragana: "さます",
    english: "to awaken",
    example: {
      jp: "目を覚ましてください。",
      en: "Please wake up."
    }
  },
  {
    kanji: "冷める",
    hiragana: "さめる",
    english: "to cool down",
    example: {
      jp: "料理が冷めてしまいました。",
      en: "The food has become cold."
    }
  },
  {
    kanji: "覚める",
    hiragana: "さめる",
    english: "to wake up",
    example: {
      jp: "夢から覚めました。",
      en: "I woke up from the dream."
    }
  },
  {
    kanji: "騒音",
    hiragana: "そうおん",
    english: "noise",
    example: {
      jp: "騒音が問題になっています。",
      en: "Noise has become a problem."
    }
  },
  {
    kanji: "捜査",
    hiragana: "そうさ",
    english: "investigation",
    example: {
      jp: "警察が事件を捜査しています。",
      en: "The police are investigating the case."
    }
  },
  {
    kanji: "操作",
    hiragana: "そうさ",
    english: "operation, handling",
    example: {
      jp: "機械の操作は簡単です。",
      en: "Operating the machine is easy."
    }
  },
  {
    kanji: "想像",
    hiragana: "そうぞう",
    english: "imagination",
    example: {
      jp: "想像以上に難しかったです。",
      en: "It was more difficult than I imagined."
    }
  },
  {
    kanji: "相談",
    hiragana: "そうだん",
    english: "consultation, discussion",
    example: {
      jp: "先生に進路について相談しました。",
      en: "I consulted my teacher about my future."
    }
  },
  {
    kanji: "存在",
    hiragana: "そんざい",
    english: "existence",
    example: {
      jp: "宇宙には未知の存在があるかもしれません。",
      en: "There may be unknown beings in space."
    }
  },
  {
    kanji: "尊重",
    hiragana: "そんちょう",
    english: "respect",
    example: {
      jp: "他人の意見を尊重しましょう。",
      en: "Let's respect other people's opinions."
    }
  },
  {
    kanji: "対象",
    hiragana: "たいしょう",
    english: "target, object",
    example: {
      jp: "この制度は学生が対象です。",
      en: "This system is intended for students."
    }
  },
  {
    kanji: "対策",
    hiragana: "たいさく",
    english: "measure, countermeasure",
    example: {
      jp: "地震対策が必要です。",
      en: "Earthquake countermeasures are necessary."
    }
  },
  {
    kanji: "態度",
    hiragana: "たいど",
    english: "attitude",
    example: {
      jp: "彼の態度は丁寧です。",
      en: "His attitude is polite."
    }
  },
  {
    kanji: "大半",
    hiragana: "たいはん",
    english: "majority, most",
    example: {
      jp: "参加者の大半は学生でした。",
      en: "Most of the participants were students."
    }
  },
  {
    kanji: "大量",
    hiragana: "たいりょう",
    english: "large quantity",
    example: {
      jp: "大量の雨が降りました。",
      en: "A large amount of rain fell."
    }
  },
  {
    kanji: "確か",
    hiragana: "たしか",
    english: "certain, sure",
    example: {
      jp: "確か彼は東京に住んでいます。",
      en: "If I remember correctly, he lives in Tokyo."
    }
  },
  {
    kanji: "達成",
    hiragana: "たっせい",
    english: "achievement",
    example: {
      jp: "目標を達成しました。",
      en: "I achieved my goal."
    }
  },
  {
    kanji: "単純",
    hiragana: "たんじゅん",
    english: "simple",
    example: {
      jp: "問題は意外に単純でした。",
      en: "The problem was surprisingly simple."
    }
  },
  {
    kanji: "地域",
    hiragana: "ちいき",
    english: "region, area",
    example: {
      jp: "地域活動に参加しています。",
      en: "I participate in community activities."
    }
  },
  {
    kanji: "地位",
    hiragana: "ちい",
    english: "position, status",
    example: {
      jp: "彼は高い地位にいます。",
      en: "He holds a high position."
    }
  },
  {
    kanji: "知識",
    hiragana: "ちしき",
    english: "knowledge",
    example: {
      jp: "専門知識が必要です。",
      en: "Specialized knowledge is necessary."
    }
  },
  {
    kanji: "中央",
    hiragana: "ちゅうおう",
    english: "center, central",
    example: {
      jp: "中央駅で会いましょう。",
      en: "Let's meet at the central station."
    }
  },
  {
    kanji: "調査",
    hiragana: "ちょうさ",
    english: "investigation, survey",
    example: {
      jp: "市場調査を行いました。",
      en: "We conducted a market survey."
    }
  },
  {
    kanji: "直接",
    hiragana: "ちょくせつ",
    english: "directly",
    example: {
      jp: "先生に直接聞きました。",
      en: "I asked the teacher directly."
    }
  },
  {
    kanji: "提案",
    hiragana: "ていあん",
    english: "proposal, suggestion",
    example: {
      jp: "新しい提案をしました。",
      en: "I made a new proposal."
    }
  },
  {
    kanji: "適切",
    hiragana: "てきせつ",
    english: "appropriate",
    example: {
      jp: "適切な表現を使ってください。",
      en: "Please use appropriate expressions."
    }
  },
  {
    kanji: "独立",
    hiragana: "どくりつ",
    english: "independence",
    example: {
      jp: "将来は独立したいです。",
      en: "I want to become independent in the future."
    }
  },
  {
    kanji: "特徴",
    hiragana: "とくちょう",
    english: "feature, characteristic",
    example: {
      jp: "この商品の特徴を説明します。",
      en: "I will explain this product's features."
    }
  },
  {
    kanji: "努力",
    hiragana: "どりょく",
    english: "effort",
    example: {
      jp: "努力は必ず報われます。",
      en: "Effort is always rewarded."
    }
  },
  {
    kanji: "内容",
    hiragana: "ないよう",
    english: "contents",
    example: {
      jp: "授業の内容を復習しました。",
      en: "I reviewed the lesson contents."
    }
  },
  {
    kanji: "流れ",
    hiragana: "ながれ",
    english: "flow",
    example: {
      jp: "川の流れが速いです。",
      en: "The river current is fast."
    }
  },
  {
    kanji: "認識",
    hiragana: "にんしき",
    english: "recognition, awareness",
    example: {
      jp: "問題の認識が必要です。",
      en: "Awareness of the problem is necessary."
    }
  },
  {
    kanji: "能力",
    hiragana: "のうりょく",
    english: "ability",
    example: {
      jp: "語学能力を高めたいです。",
      en: "I want to improve my language ability."
    }
  },
  {
    kanji: "判断",
    hiragana: "はんだん",
    english: "judgment",
    example: {
      jp: "冷静な判断が必要です。",
      en: "Calm judgment is necessary."
    }
  },
  {
    kanji: "比較",
    hiragana: "ひかく",
    english: "comparison",
    example: {
      jp: "二つの商品を比較しました。",
      en: "I compared the two products."
    }
  },
  {
    kanji: "評価",
    hiragana: "ひょうか",
    english: "evaluation",
    example: {
      jp: "先生から高い評価を受けました。",
      en: "I received a high evaluation from the teacher."
    }
  },
  {
    kanji: "表現",
    hiragana: "ひょうげん",
    english: "expression",
    example: {
      jp: "日本語の表現を勉強しています。",
      en: "I am studying Japanese expressions."
    }
  },
  {
    kanji: "部分",
    hiragana: "ぶぶん",
    english: "part, portion",
    example: {
      jp: "分からない部分を質問しました。",
      en: "I asked about the part I didn't understand."
    }
  },
  {
    kanji: "分析",
    hiragana: "ぶんせき",
    english: "analysis",
    example: {
      jp: "データを分析しました。",
      en: "I analyzed the data."
    }
  },
  {
    kanji: "変化",
    hiragana: "へんか",
    english: "change",
    example: {
      jp: "気候の変化が問題です。",
      en: "Climate change is a problem."
    }
  },
  {
    kanji: "方法",
    hiragana: "ほうほう",
    english: "method",
    example: {
      jp: "効率的な方法を探しています。",
      en: "I am looking for an efficient method."
    }
  },
  {
    kanji: "目的",
    hiragana: "もくてき",
    english: "purpose, objective",
    example: {
      jp: "旅行の目的は勉強です。",
      en: "The purpose of the trip is studying."
    }
  },
  {
    kanji: "要求",
    hiragana: "ようきゅう",
    english: "demand, request",
    example: {
      jp: "会社は改善を要求しました。",
      en: "The company demanded improvements."
    }
  },
  {
    kanji: "予測",
    hiragana: "よそく",
    english: "prediction",
    example: {
      jp: "天気を予測しました。",
      en: "I predicted the weather."
    }
  },
  {
    kanji: "理解",
    hiragana: "りかい",
    english: "understanding",
    example: {
      jp: "内容を理解できました。",
      en: "I understood the contents."
    }
  },
  {
    kanji: "理由",
    hiragana: "りゆう",
    english: "reason",
    example: {
      jp: "遅れた理由を説明してください。",
      en: "Please explain the reason for being late."
    }
  },
  {
    kanji: "連絡",
    hiragana: "れんらく",
    english: "contact, communication",
    example: {
      jp: "後で連絡します。",
      en: "I will contact you later."
    }
  }
];

export default n2Words;