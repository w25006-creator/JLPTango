'use client';

import { useState } from 'react';

export default function SearchPage() {
    const [query, setQuery] = useState('');
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    async function handleSearch() {
        if (!query.trim()) return;
        setLoading(true);
        setSearched(true);
        const res = await fetch(`/api/vocabulary?keyword=${encodeURIComponent(query)}`);
        const data = await res.json();
        setWords(data.data || []);
        setLoading(false);
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
                    <a href="/search" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">単語検索</a>
                    <a href="/favorites" className="hover:text-red-500">お気に入り</a>
                    <a href="/how" className="hover:text-red-500">使い方</a>
                </div>
            </nav>

            {/* Search Section */}
            <div className="max-w-2xl mx-auto px-8 pt-16 pb-8">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">

                    <h1 className="text-2xl font-bold text-center text-gray-700 mb-2">
                        🔍 単語検索
                    </h1>
                    <p className="text-center text-gray-400 text-sm mb-6">
                        Search for any Japanese word
                    </p>

                    {/* Search Bar */}
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            onKeyDown={e => e.key === 'Enter' && handleSearch()}
                            placeholder="例：学校、water、school..."
                            className="flex-1 border border-gray-300 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-red-400"
                        />
                        <button
                            onClick={handleSearch}
                            className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-600 transition"
                        >
                            検索
                        </button>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="max-w-2xl mx-auto px-8 pb-12">
                {loading && (
                    <p className="text-center text-gray-500 bg-white bg-opacity-80 rounded-xl p-4">
                        Loading...
                    </p>
                )}

                {!loading && searched && words.length === 0 && (
                    <p className="text-center text-gray-500 bg-white bg-opacity-80 rounded-xl p-4">
                        No results found for "{query}"
                    </p>
                )}

                <div className="flex flex-col gap-4">
                    {words.map((word, index) => {
                        const japanese = word.japanese[0];
                        const sense = word.senses[0];

                        return (
                            <div key={index} className="bg-white bg-opacity-90 rounded-2xl shadow-md p-6">

                                <div className="text-center mb-4">
                                    <p className="text-sm text-gray-400">ふりがな</p>
                                    <p className="text-xl text-gray-500">{japanese.reading}</p>
                                    <p className="text-4xl font-bold text-black">
                                        {japanese.word || japanese.reading}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="flex-1 bg-gray-50 rounded-xl p-3">
                                        <p className="text-xs text-red-400 mb-1">意味 / Meaning</p>
                                        <p className="font-bold text-blue-600">
                                            {sense.english_definitions[0]}
                                        </p>
                                    </div>
                                    <div className="flex-1 bg-gray-50 rounded-xl p-3">
                                        <p className="text-xs text-blue-400 mb-1">品詞 / Type</p>
                                        <p className="font-bold text-gray-600">
                                            {sense.parts_of_speech[0]}
                                        </p>
                                    </div>
                                </div>

                                {word.jlpt && word.jlpt.length > 0 && (
                                    <div className="mt-3">
                                        <span className="bg-red-100 text-red-500 text-xs font-bold px-3 py-1 rounded-full">
                                            {word.jlpt[0].toUpperCase().replace('JLPT-', '')}
                                        </span>
                                    </div>
                                )}

                            </div>
                        );
                    })}
                </div>
            </div>

        </main>
    );
}