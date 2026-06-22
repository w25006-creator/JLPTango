export const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'ne', label: 'नेपाली', flag: '🇳🇵' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'hi', label: 'हिंदी', flag: '🇮🇳' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'my', label: 'မြန်မာ', flag: '🇲🇲' },
    { code: 'tl', label: 'Filipino', flag: '🇵🇭' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
];

export async function translateText(text, targetLang) {
    if (targetLang === 'en') return text;
    try {
        const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${targetLang}`
        );
        const data = await res.json();
        return data.responseData.translatedText || text;
    } catch {
        return text;
    }
}