'use client';

import { useEffect, useState } from 'react';

export default function FavoritesPage() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(saved);
    }, []);

    function removeFavorite(keyword) {
        const updated = favorites.filter(w => w.keyword !== keyword);
        setFavorites(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
    }

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
                    <a href="/favorites" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">お気に入り</a>
                    <a href="/how" className="hover:text-red-500">使い方</a>
                </div>
            </nav>

            {/* Header */}
            <div className="max-w-2xl mx-auto px-8 pt-16 pb-8">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
                    <h1 className="text-2xl font-bold text-center text-gray-700 mb-2">
                        🤍 お気に入り
                    </h1>
                    <p className="text-center text-gray-400 text-sm">
                        Your saved favorite words
                    </p>
                </div>
            </div>

            {/* Favorites List */}
            <div className="max-w-2xl mx-auto px-8 pb-12">

                {favorites.length === 0 && (
                    <div className="bg-white bg-opacity-90 rounded-2xl shadow-md p-8 text-center">
                        <p className="text-4xl mb-4">🤍</p>
                        <p className="text-gray-500 font-bold">No favorites yet!</p>
                        <p className="text-gray-400 text-sm mt-2">
                            Go to a vocabulary page and click the heart button to save words.
                        </p>
                        <a href="/" className="inline-block mt-4 bg-red-500 text-white px-6 py-2 rounded-xl font-bold hover:bg-red-600 transition">
                            Go to Home
                        </a>
                    </div>
                )}

                <div className="flex flex-col gap-4">
                    {favorites.map((word, index) => (
                        <div key={index} className="bg-white bg-opacity-90 rounded-2xl shadow-md p-6">

                            <div className="flex justify-between items-start">
                                <div className="text-center flex-1">
                                    <p className="text-sm text-gray-400">ふりがな</p>
                                    <p className="text-xl text-gray-500">{word.reading}</p>
                                    <p className="text-4xl font-bold text-black">{word.keyword}</p>
                                </div>
                                <button
                                    onClick={() => removeFavorite(word.keyword)}
                                    className="text-red-400 hover:text-red-600 text-2xl"
                                >
                                    ❤️
                                </button>
                            </div>

                            <div className="flex gap-4 mt-4">
                                <div className="flex-1 bg-gray-50 rounded-xl p-3">
                                    <p className="text-xs text-red-400 mb-1">意味 / Meaning</p>
                                    <p className="font-bold text-blue-600">{word.meaning}</p>
                                </div>
                                <div className="flex-1 bg-gray-50 rounded-xl p-3">
                                    <p className="text-xs text-blue-400 mb-1">品詞 / Type</p>
                                    <p className="font-bold text-gray-600">{word.pos}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </main>
    );
}