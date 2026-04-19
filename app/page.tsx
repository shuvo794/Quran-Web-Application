import fs from 'fs';
import path from 'path';
import { SurahMetadata } from '@/lib/types';
import { SurahCard } from '@/components/SurahCard';
import { Search, MapPin, Layers, Moon, Sun } from 'lucide-react';
import * as motion from 'framer-motion/client';

export default async function HomePage() {
  const filePath = path.join(process.cwd(), 'data', 'surahs.json');
  const surahs: SurahMetadata[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-14 md:mb-20 text-center relative py-16 md:py-28 rounded-[2.5rem] overflow-hidden mt-6 md:mt-8 border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm">
        {/* Premium background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400/10 via-transparent to-transparent dark:from-emerald-500/10 -z-10" />
        
        {/* Decorative Arabic Text (Static background) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-arabic text-emerald-500/[0.03] dark:text-emerald-500/[0.05] pointer-events-none select-none -z-10">
          القرآن
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h2 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight text-slate-900 dark:text-white">
            Read, Listen, <br className="md:hidden"/> <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-amber-400 dark:to-emerald-400 bg-clip-text text-transparent">&</span> Reflect
          </h2>
          <p className="text-slate-600 dark:text-white/60 max-w-2xl mx-auto text-lg md:text-2xl px-6 font-medium leading-relaxed">
            Explore the profound wisdom of the Quran through multiple translations 
            and beautiful Arabic calligraphy.
          </p>
        </motion.div>
      </section>

      {/* Stats/Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
        <motion.div 
          whileHover={{ y: -5 }}
          className="group p-5 md:p-8 rounded-[2rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm border border-black/5 dark:border-white/5 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-none hover:border-emerald-500/30 transition-all duration-500"
        >
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
            <Layers className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1">114</p>
          <p className="text-[11px] md:text-xs text-slate-500 dark:text-white/50 uppercase font-bold tracking-[0.2em]">Surahs</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="group p-5 md:p-8 rounded-[2rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm border border-black/5 dark:border-white/5 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-none hover:border-amber-500/30 transition-all duration-500"
        >
          <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
            <Search className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <p className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-1">6236</p>
          <p className="text-[11px] md:text-xs text-slate-500 dark:text-white/50 uppercase font-bold tracking-[0.2em]">Ayats</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="group p-5 md:p-8 rounded-[2rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm border border-black/5 dark:border-white/5 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-none hover:border-emerald-500/30 transition-all duration-500"
        >
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
            <MapPin className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">Makkah</p>
          <p className="text-[11px] md:text-xs text-slate-500 dark:text-white/50 uppercase font-bold tracking-[0.2em]">Revelation</p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="group p-5 md:p-8 rounded-[2rem] bg-white/70 dark:bg-white/[0.03] backdrop-blur-sm border border-black/5 dark:border-white/5 text-center shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-none hover:border-amber-500/30 transition-all duration-500"
        >
          <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500">
            <MapPin className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <p className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1">Madinah</p>
          <p className="text-[11px] md:text-xs text-slate-500 dark:text-white/50 uppercase font-bold tracking-[0.2em]">Revelation</p>
        </motion.div>
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
