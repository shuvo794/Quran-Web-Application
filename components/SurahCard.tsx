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
        className="group relative flex items-center gap-4 p-5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 surah-card h-full"
      >
        <div className="relative flex-none w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl rotate-45 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/50 transition-colors" />
          <span className="relative text-lg font-bold text-amber-500">{surah.number}</span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
            {surah.englishName}
          </h3>
          <p className="text-sm text-white/50 truncate">
            {surah.englishNameTranslation}
          </p>
        </div>

        <div className="flex-none text-right">
          <h4 className="text-xl font-arabic font-bold text-emerald-300">
            {surah.name}
          </h4>
          <p className="text-[10px] text-white/40 uppercase tracking-tighter">
            {surah.numberOfAyahs} Ayats
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
