'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function MultipleQuiz() {
    const searchParams = useSearchParams();
    const level = searchParams.get('level') || 'n5';

    const [words, setWords] = useState([]);
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [options, setOptions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`/api/vocabulary?level=${level}&page=1`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.data.filter(w => w.jlpt.includes(`jlpt-${level}`));
                setWords(filtered);
                setLoading(false);
                generateOptions(filtered, 0);
            });
    }, [level]);

    function generateOptions(wordList, index) {
        if (wordList.length < 4) return;
        const correct = wordList[index].japanese[0].reading;
        const others = wordList
            .filter((_, i) => i !== index)
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map(w => w.japanese[0].reading);
        const all = [...others, correct].sort(() => Math.random() - 0.5);
        setOptions(all);
    }

    function handleAnswer(option) {
        if (selected) return;
        setSelected(option);
        const correct = words[current].senses[0].english_definitions[0];
        if (option === correct) setScore(prev => prev + 1);
    }

    function handleNext() {
        const nextIndex = current + 1;
        if (nextIndex >= words.length || nextIndex >= 10) {
            setFinished(true);
        } else {
            setCurrent(nextIndex);
            setSelected(null);
            generateOptions(words, nextIndex);
        }
    }

    function handleRestart() {
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setFinished(false);
        generateOptions(words, 0);
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
                <h2 className="text-3xl font-bold text-gray-700 mb-2">Quiz Finished!</h2>
                <p className="text-gray-400 mb-6">Your score</p>
                <p className="text-6xl font-bold text-red-500 mb-2">{score}<span className="text-3xl text-gray-400">/{Math.min(10, words.length)}</span></p>
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

    if (words.length === 0) return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-white text-xl">No words found!</p>
        </div>
    );

    const word = words[current];
    const japanese = word.japanese[0];
    const correct = word.japanese[0].reading;

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
                    <a href="/quiz" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">クイズ</a>
                </div>
            </nav>

            <div className="max-w-xl mx-auto px-8 pt-12">

                {/* Progress */}
                <div className="flex justify-between items-center mb-4">
                    <p className="text-white font-bold">Question {current + 1} / {Math.min(10, words.length)}</p>
                    <p className="text-white font-bold">Score: {score}</p>
                </div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mb-8">
                    <div
                        className="bg-red-500 h-2 rounded-full transition-all"
                        style={{ width: `${((current + 1) / Math.min(10, words.length)) * 100}%` }}
                    />
                </div>

                {/* Question Card */}
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 text-center mb-6">
                    <p className="text-sm text-gray-400 mb-2">What is the reading of this word?</p>
                    <p className="text-6xl font-bold text-gray-800">{japanese.word || japanese.reading}</p>
                </div>

                {/* Options */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    {options.map((option, i) => {
                        let style = 'bg-white bg-opacity-90 border-2 border-gray-200 text-gray-700';
                        if (selected) {
                            if (option === correct) style = 'bg-green-500 border-green-500 text-white';
                            else if (option === selected) style = 'bg-red-500 border-red-500 text-white';
                            else style = 'bg-white bg-opacity-50 border-gray-200 text-gray-400';
                        }
                        return (
                            <button
                                key={i}
                                onClick={() => handleAnswer(option)}
                                className={`${style} rounded-xl p-4 font-bold text-left hover:shadow-md transition`}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>

                {/* Next Button */}
                {selected && (
                    <button
                        onClick={handleNext}
                        className="w-full bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition"
                    >
                        {current + 1 >= Math.min(10, words.length) ? 'See Results' : 'Next Question'}
                    </button>
                )}

            </div>
        </main>
    );
}

export default function MultipleQuizPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-white text-xl">Loading...</p></div>}>
            <MultipleQuiz />
        </Suspense>
    );
}