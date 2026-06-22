'use client';

import { useState, useEffect } from 'react';
import { languages, translateText } from '../utils/translate';

export default function LanguageSelector({ texts, onTranslate }) {
    const [selectedLang, setSelectedLang] = useState('en');
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('selectedLang') || 'en';
        setSelectedLang(saved);
    }, []);

    async function handleLanguageChange(langCode) {
        setOpen(false);
        if (langCode === selectedLang) return;
        setSelectedLang(langCode);
        localStorage.setItem('selectedLang', langCode);

        if (langCode === 'en') {
            onTranslate(texts);
            return;
        }

        setLoading(true);
        const translated = {};
        for (const key of Object.keys(texts)) {
            translated[key] = await translateText(texts[key], langCode);
        }
        setLoading(false);
        onTranslate(translated);
    }

    const current = languages.find(l => l.code === selectedLang);

    return (
        <div className="relative">
            <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-sm font-bold text-gray-600 hover:bg-gray-200 transition"
            >
                <span>{current?.flag}</span>
                <span>{current?.label}</span>
                <span className="text-xs">▼</span>
                {loading && <span className="text-xs text-red-500">...</span>}
            </button>

            {open && (
                <div className="absolute right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 w-48 max-h-80 overflow-y-auto">
                    {languages.map(lang => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-red-50 hover:text-red-500 transition text-left ${selectedLang === lang.code ? 'bg-red-50 text-red-500 font-bold' : 'text-gray-600'}`}
                        >
                            <span>{lang.flag}</span>
                            <span>{lang.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}