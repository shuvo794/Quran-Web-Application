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
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 px-4 md:px-6 py-3 md:py-4 flex justify-between items-center transition-colors">
        <Link href="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="bg-emerald-100 dark:bg-emerald-900 group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 p-1.5 md:p-2 rounded-xl transition-colors">
            <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 dark:text-amber-400" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 dark:from-amber-400 dark:to-emerald-400 bg-clip-text text-transparent">
              Al-Quran
            </h1>
            <p className="text-[9px] md:text-[10px] text-black/50 dark:text-white/50 uppercase tracking-widest leading-none font-bold">The Noble Quran</p>
          </div>
        </Link>

        <div className="flex items-center gap-2 md:gap-4">
          <ThemeToggle />
          <Link 
            href="/search" 
            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors group"
            title="Search Ayats"
          >
            <Search className="w-5 h-5 md:w-6 md:h-6 text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-amber-400 transition-colors" />
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="p-2 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors group"
            title="Open Settings"
          >
            <Settings className="w-5 h-5 md:w-6 md:h-6 text-black/70 dark:text-white/70 group-hover:text-emerald-600 dark:group-hover:text-amber-400 transition-colors" />
          </button>
        </div>
      </nav>
      
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
