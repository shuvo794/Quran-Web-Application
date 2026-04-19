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
      <section className="mb-14 md:mb-20 text-center relative py-12 md:py-20 rounded-3xl overflow-hidden mt-6 md:mt-8 border border-black/5 dark:border-white/5 bg-gradient-to-b from-white to-transparent dark:from-white/[0.02]">
        {/* Premium background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent dark:from-emerald-500/10 -z-10" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-400/10 dark:bg-amber-500/10 rounded-full blur-[80px] -z-10" />
        <div className="absolute top-20 -left-20 w-60 h-60 bg-emerald-400/10 dark:bg-emerald-500/10 rounded-full blur-[80px] -z-10" />
        
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-slate-900 dark:text-white relative z-10">
          Read, Listen, <br className="md:hidden"/> <span className="text-emerald-600 dark:text-emerald-400">&</span> Reflect
        </h2>
        <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto text-lg md:text-xl px-6 relative z-10 font-medium">
          Explore the profound wisdom of the Quran through multiple translations 
          and beautiful Arabic calligraphy.
        </p>
      </section>

      {/* Stats/Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 mb-14 md:mb-16">
        <div className="group p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center shadow-sm hover:shadow-xl dark:shadow-none hover:border-emerald-500/30 dark:hover:bg-white/[0.04] transition-all duration-300">
          <p className="text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">114</p>
          <p className="text-[11px] md:text-xs text-slate-500 dark:text-white/50 uppercase font-bold tracking-widest mt-2">Surahs</p>
        </div>
        <div className="group p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center shadow-sm hover:shadow-xl dark:shadow-none hover:border-amber-500/30 dark:hover:bg-white/[0.04] transition-all duration-300">
          <p className="text-3xl md:text-4xl font-black text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">6236</p>
          <p className="text-[11px] md:text-xs text-slate-500 dark:text-white/50 uppercase font-bold tracking-widest mt-2">Ayats</p>
        </div>
        <div className="group p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center shadow-sm hover:shadow-xl dark:shadow-none hover:border-emerald-500/30 dark:hover:bg-white/[0.04] transition-all duration-300">
          <p className="text-3xl md:text-4xl font-black text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">Makkah</p>
          <p className="text-[11px] md:text-xs text-slate-500 dark:text-white/50 uppercase font-bold tracking-widest mt-2">Revelation</p>
        </div>
        <div className="group p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 text-center shadow-sm hover:shadow-xl dark:shadow-none hover:border-amber-500/30 dark:hover:bg-white/[0.04] transition-all duration-300">
          <p className="text-3xl md:text-4xl font-black text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">Madinah</p>
          <p className="text-[11px] md:text-xs text-slate-500 dark:text-white/50 uppercase font-bold tracking-widest mt-2">Revelation</p>
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
