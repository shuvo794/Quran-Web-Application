'use client';

import Link from 'next/link';
import { SurahMetadata } from '@/lib/types';
import { motion } from 'framer-motion';

export function SurahCard({ surah }: { surah: SurahMetadata }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: surah.number % 10 * 0.05 }}
    >
      <Link 
        href={`/surah/${surah.number}`}
        className="group relative flex items-center gap-4 p-4 md:p-5 rounded-3xl bg-white/50 dark:bg-white/[0.02] backdrop-blur-sm border border-slate-200/50 dark:border-white/5 surah-card h-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-none hover:border-emerald-500/50 hover:shadow-[0_8px_30px_-4px_rgba(16,185,129,0.15)] dark:hover:bg-white/[0.04] transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/5 group-hover:to-transparent dark:group-hover:from-emerald-500/10 rounded-3xl transition-all duration-500 pointer-events-none" />
        <div className="relative flex-none w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-100/80 dark:bg-emerald-900/40 rounded-2xl rotate-45 group-hover:rotate-90 group-hover:scale-110 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/60 transition-all duration-500" />
          <span className="relative text-base md:text-lg font-bold text-emerald-700 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">{surah.number}</span>
        </div>
        
        <div className="flex-1 min-w-0 z-10">
          <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
            {surah.englishName}
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-white/50 truncate font-medium">
            {surah.englishNameTranslation}
          </p>
        </div>

        <div className="flex-none text-right z-10">
          <h4 className="text-lg md:text-xl font-arabic font-bold text-emerald-600 dark:text-emerald-300 group-hover:scale-105 origin-right transition-transform duration-300">
            {surah.name}
          </h4>
          <div className="flex flex-col items-end gap-1 mt-2">
            <p className="text-[10px] text-slate-400 dark:text-white/40 uppercase tracking-widest font-bold">
              {surah.numberOfAyahs} Ayats
            </p>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-tighter ${
              surah.revelationType === 'Meccan' 
              ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' 
              : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
            }`}>
              {surah.revelationType}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
