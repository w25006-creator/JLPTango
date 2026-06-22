'use client';

export default function QuizPage() {
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
                    <a href="/how" className="hover:text-red-500">使い方</a>
                    <a href="/quiz" className="text-red-500 font-bold border-b-2 border-red-500 pb-1">🎮 クイズ</a>
                </div>
            </nav>

            {/* Header */}
            <div className="max-w-3xl mx-auto px-8 pt-16 pb-8 text-center">
                <div className="bg-white bg-opacity-90 rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-700 mb-2">🎮 クイズ</h1>
                    <p className="text-gray-400 text-sm mb-8">Choose a quiz type and level to start!</p>

                    {/* Level Selector */}
                    <p className="font-bold text-gray-600 mb-3">Select Level</p>
                    <div className="flex justify-center gap-3 mb-8">
                        {['n5', 'n4', 'n3', 'n2', 'n1'].map(level => (
                            <div key={level} className="flex flex-col gap-2">
                                <a href={`/quiz/multiple?level=${level}`} className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold hover:bg-red-600 transition text-sm">
                                    {level.toUpperCase()}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Quiz Types */}
                    <p className="font-bold text-gray-600 mb-4">Select Quiz Type</p>
                    <div className="grid grid-cols-3 gap-4">

                        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
                            <p className="text-4xl mb-3">🔤</p>
                            <p className="font-bold text-gray-700 text-lg">Multiple Choice</p>
                            <p className="text-gray-400 text-xs mt-2">Choose the correct meaning from 4 options</p>
                            <div className="flex flex-col gap-2 mt-4">
                                {['n5', 'n4', 'n3', 'n2', 'n1'].map(level => (
                                    <a key={level} href={`/quiz/multiple?level=${level}`} className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-red-600 transition">
                                        {level.toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
                            <p className="text-4xl mb-3">🃏</p>
                            <p className="font-bold text-gray-700 text-lg">Flashcard</p>
                            <p className="text-gray-400 text-xs mt-2">Flip the card to check the meaning</p>
                            <div className="flex flex-col gap-2 mt-4">
                                {['n5', 'n4', 'n3', 'n2', 'n1'].map(level => (
                                    <a key={level} href={`/quiz/flashcard?level=${level}`} className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-blue-600 transition">
                                        {level.toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 text-center">
                            <p className="text-4xl mb-3">✍️</p>
                            <p className="font-bold text-gray-700 text-lg">Fill in the Blank</p>
                            <p className="text-gray-400 text-xs mt-2">Type the missing word in the sentence</p>
                            <div className="flex flex-col gap-2 mt-4">
                                {['n5', 'n4', 'n3', 'n2', 'n1'].map(level => (
                                    <a key={level} href={`/quiz/fillin?level=${level}`} className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-bold hover:bg-green-600 transition">
                                        {level.toUpperCase()}
                                    </a>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </main>
    );
}