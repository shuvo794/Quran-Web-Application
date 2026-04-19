'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Settings, BookOpen } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
        <nav className="pointer-events-auto w-full max-w-4xl bg-white/70 dark:bg-black/60 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] rounded-full px-4 md:px-6 py-3 flex justify-between items-center transition-all duration-300">
          <Link href="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="bg-gradient-to-tr from-emerald-100 to-emerald-50 dark:from-emerald-900 dark:to-emerald-800/50 group-hover:from-emerald-200 group-hover:to-emerald-100 dark:group-hover:from-emerald-800 dark:group-hover:to-emerald-700/50 p-2 md:p-2.5 rounded-full shadow-sm transition-all duration-300">
              <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 dark:text-amber-400" />
            </div>
            <div>
              <h1 className="text-base md:text-lg font-black bg-gradient-to-r from-emerald-700 to-emerald-500 dark:from-amber-400 dark:to-emerald-400 bg-clip-text text-transparent tracking-tight">
                Al-Quran
              </h1>
              <p className="text-[8px] md:text-[9px] text-slate-500 dark:text-white/50 uppercase tracking-[0.2em] leading-none font-bold mt-0.5">The Noble Quran</p>
            </div>
          </Link>

          <div className="flex items-center gap-1 md:gap-3">
            <ThemeToggle />
            <Link 
              href="/search" 
              className="p-2.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all duration-300 group"
              title="Search Ayats"
            >
              <Search className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-amber-400 transition-colors" />
            </Link>
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2.5 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all duration-300 group"
              title="Open Settings"
            >
              <Settings className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-emerald-600 dark:group-hover:text-amber-400 transition-colors" />
            </button>
          </div>
        </nav>
      </div>
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
