import fs from 'fs';
import path from 'path';
import { SurahMetadata } from '@/lib/types';
import { SurahCard } from '@/components/SurahCard';
import { Search } from 'lucide-react';

export default async function HomePage() {
  const filePath = path.join(process.cwd(), 'data', 'surahs.json');
  const surahs: SurahMetadata[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-12 md:mb-16 text-center relative py-8 md:py-12">
        {/* Subtle background glow */}
        <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/5 blur-[100px] -z-10 rounded-full" />
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight leading-tight">
          Read, Listen, <span className="text-emerald-600 dark:text-emerald-400">&</span> Reflect
        </h2>
        <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-base md:text-lg px-4">
          Explore the profound wisdom of the Quran through multiple translations 
          and beautiful Arabic calligraphy.
        </p>
      </section>

      {/* Stats/Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-12">
        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-center shadow-sm dark:shadow-none hover:border-emerald-500/30 transition-colors">
          <p className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400">114</p>
          <p className="text-[10px] md:text-xs text-black/50 dark:text-white/50 uppercase font-medium tracking-wider mt-1">Surahs</p>
        </div>
        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-center shadow-sm dark:shadow-none hover:border-amber-500/30 transition-colors">
          <p className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">6236</p>
          <p className="text-[10px] md:text-xs text-black/50 dark:text-white/50 uppercase font-medium tracking-wider mt-1">Ayats</p>
        </div>
        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-center shadow-sm dark:shadow-none hover:border-emerald-500/30 transition-colors">
          <p className="text-xl md:text-2xl font-bold text-emerald-600 dark:text-emerald-400">Makkah</p>
          <p className="text-[10px] md:text-xs text-black/50 dark:text-white/50 uppercase font-medium tracking-wider mt-1">Revelation</p>
        </div>
        <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 text-center shadow-sm dark:shadow-none hover:border-amber-500/30 transition-colors">
          <p className="text-xl md:text-2xl font-bold text-amber-600 dark:text-amber-400">Madinah</p>
          <p className="text-[10px] md:text-xs text-black/50 dark:text-white/50 uppercase font-medium tracking-wider mt-1">Revelation</p>
        </div>
      </div>

      {/* Surah Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {surahs.map((surah) => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </div>
    </div>
  );
}
