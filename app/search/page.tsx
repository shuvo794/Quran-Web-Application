'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Loader2, BookOpen, ArrowRight } from 'lucide-react';
import { SurahCard } from '@/components/SurahCard';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ surahs: any[], ayahs: any[] }>({ surahs: [], ayahs: [] });
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(timer);
  }, [query]);

  // Search logic
  useEffect(() => {
    if (!debouncedQuery || debouncedQuery.length < 3) {
      setResults({ surahs: [], ayahs: [] });
      return;
    }

    const performSearch = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`);
        const data = await res.json();
        setResults(data);
      } catch (e) {
        console.error('Search failed', e);
      } finally {
        setLoading(false);
      }
    };

    performSearch();
  }, [debouncedQuery]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-black mb-8 tracking-tight flex items-center gap-4">
        <Search className="w-8 h-8 text-amber-500" /> Search Ayahs
      </h2>

      <div className="relative mb-12 group">
        <input 
          type="text" 
          placeholder="Search for a Surah name or translation text (English/Bengali)..."
          className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-6 pl-14 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all group-hover:bg-black/[0.08] dark:group-hover:bg-white/[0.08] text-black dark:text-white"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-black/30 dark:text-white/30" />
        {loading && (
          <Loader2 className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-emerald-500 animate-spin" />
        )}
      </div>

      <div className="space-y-12">
        {results.surahs.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Matching Surahs</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {results.surahs.map((surah) => (
                <SurahCard key={surah.number} surah={surah} />
              ))}
            </div>
          </div>
        )}

        {results.ayahs.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Matching Ayahs</h3>
            <div className="space-y-12">
              {results.ayahs.map((result) => (
                <div key={result.surah.number} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-emerald-100 dark:border-emerald-900/30 pb-2">
                    <Link 
                      href={`/surah/${result.surah.number}`}
                      className="text-lg font-bold text-emerald-600 dark:text-emerald-400 hover:text-amber-500 transition-colors flex items-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" /> {result.surah.englishName} ({result.surah.name})
                    </Link>
                    <Link 
                      href={`/surah/${result.surah.number}`}
                      className="text-xs text-black/40 dark:text-white/40 uppercase hover:text-black dark:hover:text-white transition-colors flex items-center gap-1"
                    >
                      View Surah <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="space-y-6">
                    {result.matches.map((ayah: any) => (
                      <div key={ayah.number} className="pl-6 border-l-2 border-black/5 dark:border-white/5 hover:border-amber-500 transition-colors">
                        <p className="text-xs text-black/30 dark:text-white/30 mb-2 uppercase tracking-widest font-mono">
                          Ayat {ayah.numberInSurah}
                        </p>
                        <p className="text-black/80 dark:text-white/80 translation-text mb-2">
                          {ayah.en}
                        </p>
                        <p className="text-slate-500 dark:text-amber-100/50 italic translation-text">
                          {ayah.bn}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {results.surahs.length === 0 && results.ayahs.length === 0 && query.length >= 3 && !loading ? (
          <div className="text-center py-20 text-black/30 dark:text-white/30 italic">
            No verses found matching "{query}"
          </div>
        ) : query.length > 0 && query.length < 3 ? (
          <div className="text-center py-20 text-black/30 dark:text-white/30 italic">
            Type at least 3 characters to search...
          </div>
        ) : null}
      </div>
    </div>
  );
}
