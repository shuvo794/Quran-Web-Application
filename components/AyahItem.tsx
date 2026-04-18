'use client';

import React from 'react';
import { Ayah } from '@/lib/types';
import { useSettings } from './SettingsProvider';
import { motion } from 'framer-motion';

export function AyahItem({ ayah }: { ayah: Ayah }) {
  const { settings } = useSettings();

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group border-b border-black/5 dark:border-white/5 py-12 last:border-0 hover:bg-black/[0.01] dark:hover:bg-white/[0.01] transition-colors rounded-xl px-4"
    >
      <div className="flex flex-col gap-8">
        {/* Ayah Header/Metadata */}
        <div className="flex justify-between items-center text-xs text-black/30 dark:text-white/30 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 flex items-center justify-center border border-black/10 dark:border-white/10 rounded-lg group-hover:border-emerald-500 transition-colors">
              {ayah.numberInSurah}
            </div>
            <span>Juz {ayah.juz}</span>
          </div>
          <button className="hover:text-emerald-600 dark:hover:text-amber-400 transition-colors uppercase font-bold text-[10px]">Share</button>
        </div>

        {/* Arabic Text */}
        <div 
          className="arabic-text text-right text-emerald-900 dark:text-emerald-100 leading-[2.5]" 
          style={{ fontFamily: settings.arabicFont }}
        >
          {ayah.text}
        </div>

        {/* Translations */}
        <div className="space-y-4">
          <div className="translation-text text-black/80 dark:text-white/80 border-l-2 border-emerald-100 dark:border-emerald-900/50 pl-6 group-hover:border-emerald-500/50 transition-colors">
            {ayah.en}
          </div>
          <div className="translation-text text-slate-500 dark:text-amber-100/70 italic border-l-2 border-amber-100 dark:border-amber-900/50 pl-6 group-hover:border-amber-500/50 transition-colors">
            {ayah.bn}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
