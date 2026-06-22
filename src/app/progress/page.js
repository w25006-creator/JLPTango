'use client';

import { useEffect, useState } from 'react';

export default function ProgressPage() {
    const [favorites, setFavorites] = useState([]);
    const [quizScores, setQuizScores] = useState([]);
    const [studiedWords, setStudiedWords] = useState({});

    useEffect(() => {
        // Load favorites
        const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(savedFavorites);

        // Load quiz scores
        const savedScores = JSON.parse(localStorage.getItem('quizScores') || '[]');
        setQuizScores(savedScores);

        // Load studied words
        const studied = JSON.parse(localStorage.getItem('studiedWords') || '{}');
        setStudiedWords(studied);
    }, []);

    const totalStudied = Object.values(studiedWords).reduce((a, b) => a + b, 0);
    const totalFavorites = favorites.length;
    const totalQuizzes = quizScores.length;
    const avgScore = totalQuizzes > 0
        ? Math.round(quizScores.reduce((a, b) => a + b.score, 0) / totalQuizzes)
        : 0;

    const levels = ['n5', 'n4', 'n3', 'n2', 'n1'];
    const levelColors = {
        n5: 'bg-red-500',
        n4: 'bg-green-500',
        n3: 'bg-blue-500',
        n2: 'bg-purple-500',
        n1: 'bg-orange-500',
    };
    const levelTextColors = {
        n5: 'text-red-500',
        n4: 'text-green-500',
        n3: 'text-blue-500',
        n2: 'text-purple-500',
        n1: 'text-orange-500',
    };

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
                    <a href="/" className="hover:text-red-500">ホーム</a>
                    <a href="/search" className="hover:text-red-500">単語検索</a>
                    <a href="/favorites" className="hover:text-red-500">お気に入り</a>
                    <a href="/quiz" className="hover:text-red-500">🎮 クイズ</a>
                    <a href="/progress" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">📊 進捗</a>
                    <a href="/how" className="hover:text-red-500">使い方</a>
                </div>
            </nav>

            {/* Header */}
            <div className="max-w-3xl mx-auto px-8 pt-16 pb-8">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8 text-center">
                    <h1 className="text-3xl font-bold text-gray-700 mb-2">📊 進捗</h1>
                    <p className="text-gray-400 text-sm">Your learning progress</p>
                </div>
            </div>

            {/* Stats */}
            <div className="max-w-3xl mx-auto px-8 pb-8">
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-6 text-center">
                        <p className="text-4xl font-bold text-red-500">{totalStudied}</p>
                        <p className="text-gray-500 text-sm mt-1">Words Studied</p>
                    </div>
                    <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-6 text-center">
                        <p className="text-4xl font-bold text-pink-500">{totalFavorites}</p>
                        <p className="text-gray-500 text-sm mt-1">Favorites</p>
                    </div>
                    <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-6 text-center">
                        <p className="text-4xl font-bold text-blue-500">{totalQuizzes}</p>
                        <p className="text-gray-500 text-sm mt-1">Quizzes Taken</p>
                    </div>
                    <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-6 text-center">
                        <p className="text-4xl font-bold text-green-500">{avgScore}%</p>
                        <p className="text-gray-500 text-sm mt-1">Avg Quiz Score</p>
                    </div>
                </div>
            </div>

            {/* Level Progress */}
            <div className="max-w-3xl mx-auto px-8 pb-8">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-bold text-gray-700 mb-6">📚 Words Studied Per Level</h2>
                    <div className="flex flex-col gap-4">
                        {levels.map(level => {
                            const count = studiedWords[level] || 0;
                            const max = 100;
                            const percent = Math.min((count / max) * 100, 100);
                            return (
                                <div key={level}>
                                    <div className="flex justify-between mb-1">
                                        <p className={`font-bold ${levelTextColors[level]}`}>{level.toUpperCase()}</p>
                                        <p className="text-gray-400 text-sm">{count} words</p>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-4">
                                        <div
                                            className={`${levelColors[level]} h-4 rounded-full transition-all`}
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Quiz History */}
            <div className="max-w-3xl mx-auto px-8 pb-12">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
                    <h2 className="text-xl font-bold text-gray-700 mb-6">🎮 Quiz History</h2>
                    {quizScores.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-4xl mb-3">🎮</p>
                            <p className="text-gray-400">No quizzes taken yet!</p>
                            <a href="/quiz" className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-red-600 transition">
                                Take a Quiz
                            </a>
                        </div>
                    ) : (
                        <div className="flex flex-col gap-3">
                            {quizScores.slice(-10).reverse().map((quiz, i) => (
                                <div key={i} className="flex justify-between items-center bg-gray-50 rounded-xl p-4">
                                    <div>
                                        <p className="font-bold text-gray-700">{quiz.type}</p>
                                        <p className="text-gray-400 text-xs">{quiz.level.toUpperCase()} • {quiz.date}</p>
                                    </div>
                                    <p className={`text-xl font-bold ${quiz.score >= 80 ? 'text-green-500' : quiz.score >= 50 ? 'text-orange-500' : 'text-red-500'}`}>
                                        {quiz.score}%
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </main>
    );
}