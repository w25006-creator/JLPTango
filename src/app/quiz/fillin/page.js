'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const sentences = {
    "学校": { jp: "私は___に行きます。", en: "I go to school.", answer: "学校" },
    "川": { jp: "___で魚を釣ります。", en: "I fish in the river.", answer: "川" },
    "手": { jp: "___を洗ってください。", en: "Please wash your hands.", answer: "手" },
    "水": { jp: "___を飲みます。", en: "I drink water.", answer: "水" },
    "赤": { jp: "___いりんごを食べます。", en: "I eat a red apple.", answer: "赤" },
    "仕事": { jp: "___は楽しいです。", en: "Work is fun.", answer: "仕事" },
    "英語": { jp: "___を勉強します。", en: "I study English.", answer: "英語" },
    "問題": { jp: "___がありません。", en: "There is no problem.", answer: "問題" },
    "部屋": { jp: "___を掃除します。", en: "I clean my room.", answer: "部屋" },
    "子供": { jp: "___は公園で遊びます。", en: "Children play in the park.", answer: "子供" },
    "時間": { jp: "___がありません。", en: "I have no time.", answer: "時間" },
    "雨": { jp: "今日は___が降ります。", en: "It rains today.", answer: "雨" },
    "先生": { jp: "___は親切です。", en: "The teacher is kind.", answer: "先生" },
    "手紙": { jp: "___を書きます。", en: "I write a letter.", answer: "手紙" },
    "電話": { jp: "___をかけます。", en: "I make a phone call.", answer: "電話" },
    "病気": { jp: "___で休みます。", en: "I rest because I am sick.", answer: "病気" },
    "眼鏡": { jp: "___をかけています。", en: "I wear glasses.", answer: "眼鏡" },
    "戸": { jp: "___を閉めてください。", en: "Please close the door.", answer: "戸" },
};

function FillinQuiz() {
    const searchParams = useSearchParams();
    const level = searchParams.get('level') || 'n5';

    const [words, setWords] = useState([]);
    const [current, setCurrent] = useState(0);
    const [input, setInput] = useState('');
    const [checked, setChecked] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [loading, setLoading] = useState(true);
    const [quizWords, setQuizWords] = useState([]);

    useEffect(() => {
        fetch(`/api/vocabulary?level=${level}&page=1`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.data.filter(w => w.jlpt.includes(`jlpt-${level}`));
                const withSentences = filtered.filter(w => {
                    const keyword = w.japanese[0].word || w.japanese[0].reading;
                    return sentences[keyword];
                });
                setWords(filtered);
                setQuizWords(withSentences.slice(0, 10));
                setLoading(false);
            });
    }, [level]);

    function handleCheck() {
        if (!input.trim()) return;
        const keyword = quizWords[current].japanese[0].word || quizWords[current].japanese[0].reading;
        const answer = sentences[keyword].answer;
        const isCorrect = input.trim() === answer;
        setCorrect(isCorrect);
        setChecked(true);
        if (isCorrect) setScore(prev => prev + 1);
    }

    function handleNext() {
        const nextIndex = current + 1;
        if (nextIndex >= quizWords.length) {
            setFinished(true);
        } else {
            setCurrent(nextIndex);
            setInput('');
            setChecked(false);
            setCorrect(false);
        }
    }

    function handleRestart() {
        setCurrent(0);
        setInput('');
        setChecked(false);
        setCorrect(false);
        setScore(0);
        setFinished(false);
    }

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-white text-xl">Loading...</p>
        </div>
    );

    if (quizWords.length === 0) return (
        <main
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        >
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-12 text-center max-w-md mx-auto">
                <p className="text-5xl mb-4">😅</p>
                <h2 className="text-2xl font-bold text-gray-700 mb-4">Not enough sentences for this level yet!</h2>
                <a href="/quiz" className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition">
                    Back to Quiz
                </a>
            </div>
        </main>
    );

    if (finished) return (
        <main
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        >
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-12 text-center max-w-md mx-auto">
                <p className="text-5xl mb-4">🎉</p>
                <h2 className="text-3xl font-bold text-gray-700 mb-2">Quiz Finished!</h2>
                <p className="text-gray-400 mb-6">Your score</p>
                <p className="text-6xl font-bold text-red-500 mb-2">
                    {score}<span className="text-3xl text-gray-400">/{quizWords.length}</span>
                </p>
                <p className="text-gray-500 mb-8">
                    {score >= 8 ? 'Excellent! 🌟' : score >= 5 ? 'Good job! 👍' : 'Keep practicing! 💪'}
                </p>
                <div className="flex gap-4 justify-center">
                    <button onClick={handleRestart} className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition">
                        Try Again
                    </button>
                    <a href="/quiz" className="bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-bold hover:bg-gray-300 transition">
                        Back to Quiz
                    </a>
                </div>
            </div>
        </main>
    );

    const word = quizWords[current];
    const keyword = word.japanese[0].word || word.japanese[0].reading;
    const sentence = sentences[keyword];
    const meaning = word.senses[0].english_definitions[0];

    return (
        <main
            className="min-h-screen"
            style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
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
                    </div>
                </div>
                <div className="flex items-center gap-6 text-sm text-gray-600">
                    <a href="/" className="hover:text-red-500">ホーム</a>
                    <a href="/quiz" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">🎮 クイズ</a>
                </div>
            </nav>

            <div className="max-w-xl mx-auto px-8 pt-12">

                {/* Progress */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-white font-bold">Question {current + 1} / {quizWords.length}</p>
                    <p className="text-white font-bold">Score: {score}</p>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mb-8">
                    <div
                        className="bg-red-500 h-2 rounded-full transition-all"
                        style={{ width: `${((current + 1) / quizWords.length) * 100}%` }}
                    />
                </div>

                {/* Question Card */}
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 mb-6">
                    <p className="text-sm text-gray-400 mb-1">Fill in the blank</p>
                    <p className="text-xs text-gray-400 mb-4">Hint: {meaning}</p>

                    <p className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        {sentence.jp}
                    </p>

                    <p className="text-gray-400 text-sm text-center mb-4">
                         {checked ? sentence.en : sentence.en.replace(meaning, '___')}
                    </p>

                    {/* Input */}
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && !checked && handleCheck()}
                        placeholder="Type the missing word..."
                        disabled={checked}
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-red-400 text-center"
                    />

                    {/* Result */}
                    {checked && (
                        <div className={`mt-4 p-4 rounded-xl text-center ${correct ? 'bg-green-100' : 'bg-red-100'}`}>
                            {correct ? (
                                <p className="text-green-600 font-bold">✅ Correct!</p>
                            ) : (
                                <>
                                    <p className="text-red-600 font-bold">❌ Wrong!</p>
                                    <p className="text-gray-600 text-sm mt-1">
                                        Answer: <span className="font-bold">{sentence.answer}</span>
                                    </p>
                                </>
                            )}
                        </div>
                    )}
                </div>

                {/* Buttons */}
                {!checked ? (
                    <button
                        onClick={handleCheck}
                        className="w-full bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition"
                    >
                        Check Answer
                    </button>
                ) : (
                    <button
                        onClick={handleNext}
                        className="w-full bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition"
                    >
                        {current + 1 >= quizWords.length ? 'See Results' : 'Next Question'}
                    </button>
                )}

            </div>
        </main>
    );
}

export default function FillinQuizPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-white text-xl">Loading...</p></div>}>
            <FillinQuiz />
        </Suspense>
    );
}