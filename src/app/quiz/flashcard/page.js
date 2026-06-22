'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function FlashcardQuiz() {
    const searchParams = useSearchParams();
    const level = searchParams.get('level') || 'n5';

    const [words, setWords] = useState([]);
    const [current, setCurrent] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [known, setKnown] = useState(0);
    const [unknown, setUnknown] = useState(0);
    const [finished, setFinished] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/vocabulary?level=${level}&page=1`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.data.filter(w => w.jlpt.includes(`jlpt-${level}`));
                setWords(filtered);
                setLoading(false);
            });
    }, [level]);

    function handleKnew() {
        setKnown(prev => prev + 1);
        handleNext();
    }

    function handleDidntKnow() {
        setUnknown(prev => prev + 1);
        handleNext();
    }

    function handleNext() {
        const nextIndex = current + 1;
        if (nextIndex >= Math.min(10, words.length)) {
            setFinished(true);
        } else {
            setCurrent(nextIndex);
            setFlipped(false);
        }
    }

    function handleRestart() {
        setCurrent(0);
        setFlipped(false);
        setKnown(0);
        setUnknown(0);
        setFinished(false);
    }

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-white text-xl">Loading...</p>
        </div>
    );

    if (finished) return (
        <main
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: 'url(/background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
        >
            <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-12 text-center max-w-md mx-auto">
                <p className="text-5xl mb-4">🎉</p>
                <h2 className="text-3xl font-bold text-gray-700 mb-6">Finished!</h2>
                <div className="flex justify-center gap-8 mb-8">
                    <div className="text-center">
                        <p className="text-4xl font-bold text-green-500">{known}</p>
                        <p className="text-gray-400 text-sm">Knew it</p>
                    </div>
                    <div className="text-center">
                        <p className="text-4xl font-bold text-red-500">{unknown}</p>
                        <p className="text-gray-400 text-sm">Need practice</p>
                    </div>
                </div>
                <p className="text-gray-500 mb-8">
                    {known >= 8 ? 'Excellent! 🌟' : known >= 5 ? 'Good job! 👍' : 'Keep practicing! 💪'}
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

    if (words.length === 0) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-white text-xl">No words found!</p>
        </div>
    );

    const word = words[current];
    const japanese = word.japanese[0];
    const meaning = word.senses[0].english_definitions[0];
    const pos = word.senses[0].parts_of_speech[0];

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
                    <p className="text-white font-bold">Card {current + 1} / {Math.min(10, words.length)}</p>
                    <div className="flex gap-4">
                        <p className="text-green-300 font-bold">✅ {known}</p>
                        <p className="text-red-300 font-bold">❌ {unknown}</p>
                    </div>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mb-8">
                    <div
                        className="bg-red-500 h-2 rounded-full transition-all"
                        style={{ width: `${((current + 1) / Math.min(10, words.length)) * 100}%` }}
                    />
                </div>

                {/* Flashcard */}
                <div
                    onClick={() => setFlipped(!flipped)}
                    className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-12 text-center cursor-pointer hover:shadow-xl transition mb-6 min-h-64 flex flex-col items-center justify-center"
                >
                    {!flipped ? (
                        <>
                            <p className="text-7xl font-bold text-gray-800 mb-4">
                                {japanese.word || japanese.reading}
                            </p>
                            <p className="text-gray-400 text-sm mt-4">👆 Click to flip</p>
                        </>
                    ) : (
                        <>
                            <p className="text-sm text-gray-400 mb-2">ふりがな</p>
                            <p className="text-2xl text-gray-500 mb-2">{japanese.reading}</p>
                            <p className="text-sm text-gray-400 mb-1">意味 / Meaning</p>
                            <p className="text-4xl font-bold text-blue-600 mb-3">{meaning}</p>
                            <p className="text-gray-400 text-sm">{pos}</p>
                        </>
                    )}
                </div>

                {/* Buttons */}
                {!flipped ? (
                    <p className="text-center text-white text-sm">Click the card to see the meaning</p>
                ) : (
                    <div className="flex gap-4">
                        <button
                            onClick={handleDidntKnow}
                            className="flex-1 bg-red-500 text-white py-4 rounded-xl font-bold hover:bg-red-600 transition text-lg"
                        >
                            ❌ Did not know
                        </button>
                        <button
                            onClick={handleKnew}
                            className="flex-1 bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition text-lg"
                        >
                            ✅ Knew it!
                        </button>
                    </div>
                )}

            </div>
        </main>
    );
}

export default function FlashcardQuizPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-white text-xl">Loading...</p></div>}>
            <FlashcardQuiz />
        </Suspense>
    );
}