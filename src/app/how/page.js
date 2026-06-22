'use client';

import { useState } from 'react';

export default function HowPage() {
    const [lang, setLang] = useState('en');

    const text = {
        en: {
            title: 'How to Use',
            subtitle: 'Learn how to use JLPTango',
            steps: [
                { icon: '1', title: 'Select Your Level', desc: 'Go to the home page and click on your JLPT level (N5 to N1). N5 is for beginners and N1 is for advanced learners.' },
                { icon: '2', title: 'Study Word Cards', desc: 'Each card shows the kanji, furigana, English meaning, part of speech, and an example sentence.' },
                { icon: '3', title: 'Load More Words', desc: 'At the bottom of the page, click the Load More button to see more vocabulary words.' },
                { icon: '4', title: 'Search for Words', desc: 'Click the search link in the navbar to search for any Japanese word in English or Japanese.' },
                { icon: '5', title: 'Save Favorites', desc: 'Click the heart button on any word card to save it. Go to favorites page to review saved words.' },
            ],
            tips: 'Study Tips',
            tipsList: [
                'Study a little every day rather than a lot at once',
                'Write the kanji by hand to remember better',
                'Say the word out loud when you read it',
                'Try to use the word in your own sentence',
            ]
        },
        ja: {
            title: '使い方',
            subtitle: 'JLPTangoの使い方を説明します',
            steps: [
                { icon: '1', title: 'レベルを選ぶ', desc: 'ホームページでJLPTのレベルを選んでください。N5は初心者向け、N1は上級者向けです。' },
                { icon: '2', title: '単語カードで学習', desc: '各カードには漢字・ふりがな・英語の意味・品詞・例文が表示されます。' },
                { icon: '3', title: 'もっと単語を見る', desc: 'ページの下にあるLoad Moreボタンをクリックすると、さらに多くの単語が表示されます。' },
                { icon: '4', title: '単語を検索する', desc: 'ナビバーの単語検索をクリックして、好きな単語を検索できます。' },
                { icon: '5', title: 'お気に入りに保存', desc: '単語カードのハートボタンをクリックすると、お気に入りに保存されます。' },
            ],
            tips: '学習のコツ',
            tipsList: [
                '一度にたくさんより、毎日少しずつ勉強しよう',
                '漢字は手で書いて覚えよう',
                '単語を読むとき、声に出して言ってみよう',
                '自分で例文を作ってみよう',
            ]
        },
        ne: {
            title: 'कसरी प्रयोग गर्ने',
            subtitle: 'JLPTango कसरी प्रयोग गर्ने सिक्नुहोस्',
            steps: [
                { icon: '1', title: 'आफ्नो स्तर छान्नुहोस्', desc: 'होम पेजमा गएर आफ्नो JLPT स्तर छान्नुहोस्। N5 सुरुवातीका लागि र N1 उन्नत सिकारुका लागि हो।' },
                { icon: '2', title: 'शब्द कार्ड पढ्नुहोस्', desc: 'प्रत्येक कार्डमा कान्जी, फुरिगाना, अर्थ, शब्दको प्रकार र उदाहरण वाक्य देखिन्छ।' },
                { icon: '3', title: 'थप शब्द हेर्नुहोस्', desc: 'पेजको तलमा Load More बटन थिच्नुहोस् र थप शब्दहरू हेर्नुहोस्।' },
                { icon: '4', title: 'शब्द खोज्नुहोस्', desc: 'नेभबारमा खोज लिंक थिचेर जुनसुकै जापानी शब्द खोज्न सक्नुहुन्छ।' },
                { icon: '5', title: 'मनपर्ने शब्द बचत गर्नुहोस्', desc: 'शब्द कार्डको मुटु बटन थिचेर मनपर्ने शब्द बचत गर्नुहोस्।' },
            ],
            tips: 'अध्ययन सुझाव',
            tipsList: [
                'हरेक दिन अलिअलि पढ्नुहोस्',
                'कान्जी हातले लेखेर याद गर्नुहोस्',
                'शब्द पढ्दा ठूलो स्वरमा भन्नुहोस्',
                'आफैं उदाहरण वाक्य बनाउने प्रयास गर्नुहोस्',
            ]
        }
    };

    const t = text[lang];

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
                        <p className="text-xs text-gray-400">JLPT</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <a href="/" className="hover:text-red-500">ホーム</a>
                    <a href="/search" className="hover:text-red-500">単語検索</a>
                    <a href="/favorites" className="hover:text-red-500">お気に入り</a>
                    <a href="/how" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">使い方</a>
                    <div className="flex gap-1 bg-gray-100 rounded-full px-2 py-1">
                        <button onClick={() => setLang('en')} className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'en' ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-red-500'}`}>EN</button>
                        <button onClick={() => setLang('ja')} className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'ja' ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-red-500'}`}>JP</button>
                        <button onClick={() => setLang('ne')} className={`px-3 py-1 rounded-full text-xs font-bold transition ${lang === 'ne' ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-red-500'}`}>NE</button>
                    </div>
                </div>
            </nav>

            {/* Header */}
            <div className="max-w-3xl mx-auto px-8 pt-16 pb-8">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-700 mb-2">
                        {t.title}
                    </h1>
                    <p className="text-gray-400 text-sm">{t.subtitle}</p>
                </div>
            </div>

            {/* Steps */}
            <div className="max-w-3xl mx-auto px-8 pb-8">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
                    <div className="flex flex-col gap-6">
                        {t.steps.map((step, i) => (
                            <div key={i} className="flex gap-4 items-start">
                                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center shrink-0">
                                    <span className="text-white font-bold">{step.icon}</span>
                                </div>
                                <div>
                                    <p className="font-bold text-gray-700 text-lg">{step.title}</p>
                                    <p className="text-gray-500 text-sm mt-1">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tips */}
            <div className="max-w-3xl mx-auto px-8 pb-12">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-bold text-gray-700 mb-4">
                        {t.tips}
                    </h2>
                    <div className="flex flex-col gap-3">
                        {t.tipsList.map((tip, i) => (
                            <div key={i} className="bg-gray-50 rounded-xl p-3">
                                <p className="text-gray-600">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </main>
    );
}