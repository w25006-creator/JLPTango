import Kuroshiro from 'kuroshiro';
import KuromojiAnalyzer from 'kuroshiro-analyzer-kuromoji';

const kuroshiro = new Kuroshiro();
let initialized = false;

async function getKuroshiro() {
    if (!initialized) {
        await kuroshiro.init(new KuromojiAnalyzer());
        initialized = true;
    }
    return kuroshiro;
}

function generateSentence(word, meaning, partOfSpeech) {
    const pos = partOfSpeech ? partOfSpeech.toLowerCase() : '';

    if (pos.includes('verb')) {
        return {
            jp: `毎日${word}ます。`,
            en: `I ${meaning} every day.`
        };
    } else if (pos.includes('adjective')) {
        return {
            jp: `これは${word}です。`,
            en: `This is ${meaning}.`
        };
    } else if (word === '雨' || word === '水' || word === '川') {
        return {
            jp: `${word}がきれいです。`,
            en: `The ${meaning} is beautiful.`
        };
    } else if (pos.includes('noun')) {
        const templates = [
            { jp: `${word}が好きです。`, en: `I like ${meaning}.` },
            { jp: `${word}を見ます。`, en: `I look at the ${meaning}.` },
            { jp: `${word}があります。`, en: `There is a ${meaning}.` },
            { jp: `私の${word}は新しいです。`, en: `My ${meaning} is new.` },
        ];
        const index = word.length % templates.length;
        return templates[index];
    }

    return {
        jp: `${word}は大切です。`,
        en: `${meaning} is important.`
    };
}

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const text = searchParams.get('text');
    const word = searchParams.get('word');
    const meaning = searchParams.get('meaning');
    const pos = searchParams.get('pos');

    if (word && meaning) {
        const sentence = generateSentence(word, meaning, pos);
        return Response.json(sentence);
    }

    if (text) {
        const k = await getKuroshiro();
        const result = await k.convert(text, {
            mode: 'furigana',
            to: 'hiragana'
        });
        return Response.json({ result });
    }

    return Response.json({ error: 'No text provided' });
}