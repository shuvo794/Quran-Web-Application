'use client';

import React from 'react';
import { Ayah } from '@/lib/types';
import { useSettings } from './SettingsProvider';
import { motion } from 'framer-motion';

export function AyahItem({ ayah }: { ayah: Ayah }) {
  const { settings } = useSettings();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative border-b border-black/5 dark:border-white/5 py-14 last:border-0 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] transition-colors rounded-2xl px-6 md:px-8 mb-4 overflow-hidden"
    >
      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex flex-col gap-10 relative z-10">
        {/* Ayah Header/Metadata */}
        <div className="flex justify-between items-center text-xs text-slate-400 dark:text-white/40 uppercase tracking-widest font-bold">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center bg-black/5 dark:bg-white/5 rounded-xl group-hover:bg-emerald-50 dark:group-hover:bg-emerald-900/30 group-hover:text-emerald-600 dark:group-hover:text-amber-400 transition-colors duration-300">
              {ayah.numberInSurah}
            </div>
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">Juz {ayah.juz}</span>
          </div>
          <button className="px-4 py-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 hover:text-emerald-600 dark:hover:text-amber-400 transition-colors uppercase font-black text-[10px] tracking-widest">Share</button>
        </div>

        {/* Arabic Text */}
        <div 
          className="arabic-text text-right text-slate-800 dark:text-emerald-50 leading-[2.2] md:leading-[2.5]" 
          style={{ fontFamily: settings.arabicFont }}
        >
          {ayah.text}
        </div>

        {/* Translations */}
        <div className="space-y-6 bg-black/[0.02] dark:bg-black/20 p-6 rounded-2xl border border-black/5 dark:border-white/5 group-hover:border-emerald-500/20 transition-colors duration-300">
          <div className="translation-text text-slate-700 dark:text-white/90 font-medium leading-relaxed">
            {ayah.en}
          </div>
          <div className="translation-text text-slate-500 dark:text-amber-100/60 italic leading-relaxed">
            {ayah.bn}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
