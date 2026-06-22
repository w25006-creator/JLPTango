'use client';


import { useState } from 'react';


export default function Home() {
  const [lang, setLang] = useState('en');


  const text = {
    en: {
      subtitle: 'Japanese Vocabulary Learning Site',
      desc1: 'Learn JLPT vocabulary efficiently at your own level.',
      desc2: 'Kanji, furigana, meaning and example sentences included.',
      selectLevel: 'Select Your Level',
      levels: [
        { code: 'n5', label: 'N5', title: 'Beginner', desc: 'Learn basic vocabulary' },
        { code: 'n4', label: 'N4', title: 'Elementary', desc: 'Learn daily vocabulary' },
        { code: 'n3', label: 'N3', title: 'Intermediate', desc: 'Learn wide range of words' },
        { code: 'n2', label: 'N2', title: 'Upper Int.', desc: 'Learn natural Japanese' },
        { code: 'n1', label: 'N1', title: 'Advanced', desc: 'Learn advanced Japanese' },
      ],
      features: [
        { icon: '📋', title: 'Word Cards', desc: 'Study with kanji, furigana, meaning and example sentences' },
        { icon: '🔍', title: 'Search', desc: 'Quickly search any word you want to study' },
        { icon: '🤍', title: 'Favorites', desc: 'Save words and review them anytime' },
        { icon: '📊', title: 'Level Study', desc: 'Step up gradually with your JLPT level' },
      ]
    },
    ja: {
      subtitle: '日本語単語学習サイト',
      desc1: 'JLPTの単語を、レベルに合わせて効率よく学習しましょう。',
      desc2: '漢字・ふりがな・意味・例文付きの単語カードで、しっかり身につきます。',
      selectLevel: 'レベルを選んでください',
      levels: [
        { code: 'n5', label: 'N5', title: '初心者レベル', desc: '基本的な単語を学ぼう' },
        { code: 'n4', label: 'N4', title: '初級レベル', desc: '日常で使う単語を学ぼう' },
        { code: 'n3', label: 'N3', title: '中級レベル', desc: '幅広い場面の単語を学ぼう' },
        { code: 'n2', label: 'N2', title: '中上級レベル', desc: 'より自然な日本語を学ぼう' },
        { code: 'n1', label: 'N1', title: '上級レベル', desc: '高度な日本語を学ぼう' },
      ],
      features: [
        { icon: '📋', title: '単語カードで学習', desc: '漢字・ふりがな・意味・例文付きのカードで効率的に学習' },
        { icon: '🔍', title: '検索機能', desc: '調べたい単語をすぐに検索して学習に役立てよう' },
        { icon: '🤍', title: 'お気に入り機能', desc: '覚えたい単語を保存して繰り返し学習できる' },
        { icon: '📊', title: 'レベル別学習', desc: 'JLPTのレベルに合わせて無理なくステップアップ' },
      ]
    },
    ne: {
      subtitle: 'जापानी शब्द सिकाउने साइट',
      desc1: 'आफ्नो स्तर अनुसार JLPT शब्दहरू सिक्नुहोस्।',
      desc2: 'कान्जी, फुरिगाना, अर्थ र उदाहरण वाक्यसहित।',
      selectLevel: 'आफ्नो स्तर छान्नुहोस्',
      levels: [
        { code: 'n5', label: 'N5', title: 'सुरुवाती', desc: 'आधारभूत शब्द सिक्नुहोस्' },
        { code: 'n4', label: 'N4', title: 'प्रारम्भिक', desc: 'दैनिक शब्द सिक्नुहोस्' },
        { code: 'n3', label: 'N3', title: 'मध्यम', desc: 'विभिन्न शब्द सिक्नुहोस्' },
        { code: 'n2', label: 'N2', title: 'माथिल्लो मध्यम', desc: 'स्वाभाविक जापानी सिक्नुहोस्' },
        { code: 'n1', label: 'N1', title: 'उन्नत', desc: 'उच्च स्तरको जापानी सिक्नुहोस्' },
      ],
      features: [
        { icon: '📋', title: 'शब्द कार्ड', desc: 'कान्जी, फुरिगाना, अर्थ र उदाहरणसहित सिक्नुहोस्' },
        { icon: '🔍', title: 'खोज सुविधा', desc: 'जुनसुकै शब्द तुरुन्त खोज्नुहोस्' },
        { icon: '🤍', title: 'मनपर्ने शब्द', desc: 'शब्द बचत गरी पछि फेरि अध्ययन गर्नुहोस्' },
        { icon: '📊', title: 'स्तर अनुसार', desc: 'आफ्नो JLPT स्तर अनुसार बिस्तारै सिक्नुहोस्' },
      ]
    }
  };


  const t = text[lang];


  const levelColors = [
    { border: 'border-red-200 hover:border-red-400', bg: 'bg-red-100', text: 'text-red-500', bar: 'bg-red-400' },
    { border: 'border-green-200 hover:border-green-400', bg: 'bg-green-100', text: 'text-green-500', bar: 'bg-green-400' },
    { border: 'border-blue-200 hover:border-blue-400', bg: 'bg-blue-100', text: 'text-blue-500', bar: 'bg-blue-400' },
    { border: 'border-purple-200 hover:border-purple-400', bg: 'bg-purple-100', text: 'text-purple-500', bar: 'bg-purple-400' },
    { border: 'border-orange-200 hover:border-orange-400', bg: 'bg-orange-100', text: 'text-orange-500', bar: 'bg-orange-400' },
  ];


  return (
    <main
      className="min-h-screen"
      style={{
        backgroundImage: 'url(/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >


      {/* Navbar */}
      <nav className="bg-white bg-opacity-90 shadow-sm px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="JLPTango Logo" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-xl font-bold">
              <span className="text-gray-800">JLPT</span>
              <span className="text-red-500">ango</span>
            </p>
            <p className="text-xs text-gray-400">（JLPT 単語）</p>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="/" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">🏠 ホーム</a>
          <a href="/search" className="hover:text-red-500">🔍 単語検索</a>
          <a href="/favorites" className="hover:text-red-500">🤍 お気に入り</a>
          <a href="/progress" className="hover:text-red-500">📊 進捗</a>
          <a href="/how" className="hover:text-red-500">ℹ️ 使い方</a>
          <a href="/quiz" className="hover:text-red-500">🎮 クイズ</a>
          {/* Language Selector in Navbar */}
          <div className="flex gap-1 bg-gray-100 rounded-full px-2 py-1">
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'en' ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-red-500'}`}>EN</button>
            <button onClick={() => setLang('ja')} className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'ja' ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-red-500'}`}>日本語</button>
            <button onClick={() => setLang('ne')} className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'ne' ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-red-500'}`}>नेपाली</button>
          </div>
        </div>
      </nav>


      {/* Hero Section */}
      <div
        className="relative w-full h-96 flex items-center justify-center text-center"
        style={{ background: 'rgba(255,255,255,0.6)' }}
      >
        <div>
          <p className="text-gray-600 text-sm mb-1">日本語単語学習</p>
          <h1 className="text-6xl font-bold mb-2">
            <span className="text-gray-800">JLPT</span>
            <span className="text-red-500">ango</span>
          </h1>
          <p className="text-xl text-gray-700 mb-3">（JLPT 単語）</p>
          <div className="w-16 h-0.5 bg-red-500 mx-auto mb-3"></div>
          <p className="text-gray-600 font-medium">{t.subtitle}</p>
          <p className="text-gray-500 text-sm mt-2">{t.desc1}</p>
          <p className="text-gray-500 text-sm">{t.desc2}</p>


          {/* Language Selector in Hero */}
          <div className="flex justify-center gap-2 mt-4">
            <button onClick={() => setLang('en')} className={`px-4 py-1 rounded-full text-sm font-bold border transition ${lang === 'en' ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-500 border-gray-300 hover:border-red-400'}`}>EN</button>
            <button onClick={() => setLang('ja')} className={`px-4 py-1 rounded-full text-sm font-bold border transition ${lang === 'ja' ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-500 border-gray-300 hover:border-red-400'}`}>日本語</button>
            <button onClick={() => setLang('ne')} className={`px-4 py-1 rounded-full text-sm font-bold border transition ${lang === 'ne' ? 'bg-red-500 text-white border-red-500' : 'bg-white text-gray-500 border-gray-300 hover:border-red-400'}`}>नेपाली</button>
          </div>
        </div>
      </div>


      {/* Level Selector */}
      <div className="max-w-5xl mx-auto px-8 -mt-12 mb-8">
        <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
          <h2 className="text-center text-lg font-bold text-gray-700 mb-6">
            🌸 {t.selectLevel}
          </h2>
          <div className="grid grid-cols-5 gap-4">
            {t.levels.map((level, i) => (
             
                <a key={level.code}
                href={`/vocabulary/${level.code}`}
                className={`flex flex-col items-center p-4 rounded-xl border-2 ${levelColors[i].border} hover:shadow-md transition text-center bg-white`}
              >
                <div className={`w-12 h-12 ${levelColors[i].bg} rounded-full flex items-center justify-center mb-2`}>
                  <span className={`${levelColors[i].text} text-xl`}>🌸</span>
                </div>
                <p className={`text-2xl font-bold ${levelColors[i].text}`}>{level.label}</p>
                <p className="text-sm font-bold text-gray-600 mt-1">{level.title}</p>
                <p className="text-xs text-gray-400">{level.desc}</p>
                <div className={`w-full h-1 ${levelColors[i].bar} rounded mt-3`}></div>
              </a>
            ))}
          </div>
        </div>
      </div>


      {/* Features */}
      <div className="max-w-5xl mx-auto px-8 py-12 grid grid-cols-4 gap-6 bg-white bg-opacity-80 rounded-2xl mb-8">
        {t.features.map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-xl">{feature.icon}</span>
            </div>
            <p className="font-bold text-gray-700">{feature.title}</p>
            <p className="text-xs text-gray-400 mt-1">{feature.desc}</p>
          </div>
        ))}
      </div>


    </main>
  );
}
