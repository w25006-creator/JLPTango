'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const sentences = {
    "学校": { jp: "私は学校に行きます。", en: "I go to school." },
    "川": { jp: "川で魚を釣ります。", en: "I fish in the river." },
    "手": { jp: "手を洗ってください。", en: "Please wash your hands." },
    "水": { jp: "水を飲みます。", en: "I drink water." },
    "赤": { jp: "赤いりんごを食べます。", en: "I eat a red apple." },
    "仕事": { jp: "仕事は楽しいです。", en: "Work is fun." },
    "英語": { jp: "英語を勉強します。", en: "I study English." },
    "問題": { jp: "問題がありません。", en: "There is no problem." },
    "部屋": { jp: "部屋を掃除します。", en: "I clean my room." },
    "子供": { jp: "子供は公園で遊びます。", en: "Children play in the park." },
    "時間": { jp: "時間がありません。", en: "I have no time." },
    "雨": { jp: "今日は雨が降ります。", en: "It rains today." },
    "先生": { jp: "先生は親切です。", en: "The teacher is kind." },
    "年": { jp: "今年は何年ですか？", en: "What year is this year?" },
    "手紙": { jp: "手紙を書きます。", en: "I write a letter." },
    "電話": { jp: "電話をかけます。", en: "I make a phone call." },
    "病気": { jp: "病気で休みます。", en: "I rest because I am sick." },
    "眼鏡": { jp: "眼鏡をかけています。", en: "I wear glasses." },
    "戸": { jp: "戸を閉めてください。", en: "Please close the door." },
    "煙草": { jp: "煙草は体に悪いです。", en: "Tobacco is bad for your body." },
};

function generateSentence(word, meaning, partOfSpeech) {
    const pos = partOfSpeech ? partOfSpeech.toLowerCase() : '';

    if (pos.includes('verb')) {
        return { jp: `毎日${word}ます。`, en: `I ${meaning} every day.` };
    } else if (pos.includes('adjective')) {
        return { jp: `これは${word}です。`, en: `This is ${meaning}.` };
    } else {
        const templates = [
            { jp: `${word}が好きです。`, en: `I like ${meaning}.` },
            { jp: `${word}を見ます。`, en: `I look at the ${meaning}.` },
            { jp: `${word}があります。`, en: `There is a ${meaning}.` },
            { jp: `私の${word}は大切です。`, en: `My ${meaning} is important.` },
        ];
        const index = word.length % templates.length;
        return templates[index];
    }
}

export default function VocabularyPage() {
    const params = useParams();
    const level = params.level;
    const upperLevel = level.toUpperCase();

    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [furiganaMap, setFuriganaMap] = useState({});
    const [aiSentences, setAiSentences] = useState({});
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    function fetchFuriganaForWords(newWords) {
        newWords.forEach((word) => {
            const keyword = word.japanese[0].word || word.japanese[0].reading;
            const meaning = word.senses[0].english_definitions[0];
            const pos = word.senses[0].parts_of_speech[0] || '';
            const wordSentence = sentences[keyword];

            if (wordSentence) {
                fetch(`/api/furigana?text=${encodeURIComponent(wordSentence.jp)}`)
                    .then(res => res.json())
                    .then(furiganaData => {
                        setFuriganaMap(prev => ({
                            ...prev,
                            [keyword]: furiganaData.result
                        }));
                    });
            } else {
                const generated = generateSentence(keyword, meaning, pos);
                setAiSentences(prev => ({ ...prev, [keyword]: generated }));
                fetch(`/api/furigana?text=${encodeURIComponent(generated.jp)}`)
                    .then(res => res.json())
                    .then(furiganaData => {
                        setFuriganaMap(prev => ({
                            ...prev,
                            [keyword]: furiganaData.result
                        }));
                    });
            }
        });
    }

    useEffect(() => {
        fetch(`/api/vocabulary?level=${level}&page=1`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.data.filter(word =>
                    word.jlpt.includes(`jlpt-${level}`)
                );
                setWords(filtered);
                setLoading(false);
                fetchFuriganaForWords(filtered);
                if (data.data.length < 20) setHasMore(false);
            });
    }, [level]);

    function loadMore() {
        const nextPage = page + 1;
        setLoadingMore(true);
        fetch(`/api/vocabulary?level=${level}&page=${nextPage}`)
            .then(res => res.json())
            .then(data => {
                const filtered = data.data.filter(word =>
                    word.jlpt.includes(`jlpt-${level}`)
                );
                setWords(prev => [...prev, ...filtered]);
                setPage(nextPage);
                setLoadingMore(false);
                fetchFuriganaForWords(filtered);
                if (data.data.length < 20) setHasMore(false);
            });
    }

    return (
        <main className="min-h-screen bg-white p-8">

            <a href="/" className="text-red-500 hover:underline text-sm mb-6 block">
                ← Back to Home
            </a>

            <h1 className="text-4xl font-bold text-center text-red-600 mb-2">
                {upperLevel} 単語
            </h1>
            <p className="text-center text-gray-500 mb-10">
                {upperLevel} Vocabulary Words
            </p>

            {loading && (
                <p className="text-center text-gray-400">Loading words...</p>
            )}

            <div className="max-w-md mx-auto flex flex-col gap-6">
                {words.map((word, index) => {
                    const japanese = word.japanese[0];
                    const sense = word.senses[0];
                    const keyword = japanese.word || japanese.reading;
                    const sentence = sentences[keyword] || aiSentences[keyword];
                    const furigana = furiganaMap[keyword];

                    return (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl shadow-md p-6">

                            <div className="text-center mb-4">
                                <p className="text-sm text-gray-400">ふりがな</p>
                                <p className="text-2xl text-gray-500">{japanese.reading}</p>
                                <p className="text-5xl font-bold text-black">
                                    {japanese.word || japanese.reading}
                                </p>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm text-gray-400">意味 / Meaning</p>
                                <p className="text-xl font-bold text-blue-600">
                                    {sense.english_definitions[0]}
                                </p>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm text-gray-400">品詞 / Type</p>
                                <p className="text-gray-600">
                                    {sense.parts_of_speech[0]}
                                </p>
                            </div>

                            <div className="bg-gray-50 rounded-xl p-4">
                                <p className="text-sm text-gray-400 mb-2">例文 / Example</p>
                                {sentence ? (
                                    <>
                                        {furigana ? (
                                            <p
                                                className="text-lg font-bold"
                                                dangerouslySetInnerHTML={{ __html: furigana }}
                                            />
                                        ) : (
                                            <p className="text-lg font-bold">{sentence.jp}</p>
                                        )}
                                        <p className="text-gray-500 text-sm mt-1">{sentence.en}</p>
                                    </>
                                ) : (
                                    <p className="text-gray-400 text-sm">Loading sentence...</p>
                                )}
                            </div>

                        </div>
                    );
                })}

                {!loading && hasMore && (
                    <button
                        onClick={loadMore}
                        disabled={loadingMore}
                        className="w-full py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 disabled:opacity-50"
                    >
                        {loadingMore ? 'Loading...' : 'Load More'}
                    </button>
                )}

                {!hasMore && (
                    <p className="text-center text-gray-400 text-sm">No more words!</p>
                )}
            </div>

        </main>
    );
}