'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import n5Words from '../../data/n5';
import n4Words from '../../data/n4';
import n3Words from '../../data/n3';
import n2Words from '../../data/n2';
import n1Words from '../../data/n1';

export default function VocabularyPage() {
    const params = useParams();
    const level = params.level;
    const upperLevel = level.toUpperCase();

    const allWords = level === 'n5' ? n5Words : level === 'n4' ? n4Words : level === 'n3' ? n3Words : level === 'n2' ? n2Words : level === 'n1' ? n1Words : [];
    const [visible, setVisible] = useState(10);

    const visibleWords = allWords.slice(0, visible);

    const loadMore = () => {
        setVisible(prev => prev + 10);
    };

    return (
        <main className="min-h-screen bg-white p-8">

            {/* Back Button */}
            <a href="/" className="text-red-500 hover:underline text-sm mb-6 block">
                ← Back to Home
            </a>

            {/* Header */}
            <h1 className="text-4xl font-bold text-center text-red-600 mb-2">
                {upperLevel} 単語
            </h1>
            <p className="text-center text-gray-500 mb-4">
                {upperLevel} Vocabulary Words
            </p>
            <p className="text-center text-gray-400 text-sm mb-10">
                Showing {visibleWords.length} of {allWords.length} words
            </p>

            {/* No words message */}
            {allWords.length === 0 && (
                <p className="text-center text-gray-400">
                    Coming soon...
                </p>
            )}

            {/* Word Cards */}
            <div className="max-w-md mx-auto flex flex-col gap-6">
                {visibleWords.map((word, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">

                        {/* Word with Furigana */}
                        <div className="text-center mb-4">
                            <p className="text-sm text-gray-400">ふりがな</p>
                            <p className="text-2xl text-gray-500">{word.hiragana}</p>
                            <p className="text-5xl font-bold text-black">{word.kanji}</p>
                        </div>

                        {/* Meaning */}
                        <div className="mb-4">
                            <p className="text-sm text-gray-400">意味 / Meaning</p>
                            <p className="text-xl font-bold text-blue-600">{word.english}</p>
                        </div>

                        {/* Example Sentence */}
                        <div className="bg-gray-50 rounded-xl p-4">
                            <p className="text-sm text-gray-400 mb-2">例文 / Example</p>
                            <p className="text-lg font-bold">{word.example.jp}</p>
                            <p className="text-gray-500 text-sm mt-1">{word.example.en}</p>
                        </div>

                    </div>
                ))}

                {/* Load More Button */}
                {visible < allWords.length && (
                    <button
                        onClick={loadMore}
                        className="w-full py-3 rounded-xl border-2 border-red-400 text-red-500 font-bold hover:bg-red-50 transition"
                    >
                        Load More ({allWords.length - visible} remaining)
                    </button>
                )}

                {/* All loaded message */}
                {visible >= allWords.length && allWords.length > 0 && (
                    <p className="text-center text-gray-400 text-sm">
                        ✅ All {allWords.length} words loaded!
                    </p>
                )}
            </div>

        </main>
    );
}