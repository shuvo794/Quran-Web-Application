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
      <section className="mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
          Read, Listen, <span className="text-amber-400">&</span> Reflect
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto text-lg">
          Explore the profound wisdom of the Quran through multiple translations 
          and beautiful Arabic calligraphy.
        </p>
      </section>

      {/* Stats/Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-white/5 text-center">
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">114</p>
          <p className="text-xs text-black/40 dark:text-white/40 uppercase">Surahs</p>
        </div>
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-white/5 text-center">
          <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">6236</p>
          <p className="text-xs text-black/40 dark:text-white/40 uppercase">Ayats</p>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-white/5 text-center">
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">Makkah</p>
          <p className="text-xs text-black/40 dark:text-white/40 uppercase">Revelation</p>
        </div>
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-white/5 text-center">
          <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">Madinah</p>
          <p className="text-xs text-black/40 dark:text-white/40 uppercase">Revelation</p>
        </div>
      </div>

      {/* Surah Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {surahs.map((surah) => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </div>
    </div>
  );
}
