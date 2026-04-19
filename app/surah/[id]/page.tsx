import fs from 'fs';
import path from 'path';
import { SurahDetail, SurahMetadata } from '@/lib/types';
import { AyahItem } from '@/components/AyahItem';
import { ArrowLeft, MapPin, Layers } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  const filePath = path.join(process.cwd(), 'data', 'surahs.json');
  const surahs: SurahMetadata[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  return surahs.map((surah) => ({
    id: surah.number.toString(),
  }));
}

export default async function SurahPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const filePath = path.join(process.cwd(), 'data', 'chapters', `${id}.json`);
  const surah: SurahDetail = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  return (
    <div className="min-h-screen">
      {/* Surah Hero Header */}
      <header className="relative py-16 md:py-24 bg-gradient-to-b from-emerald-50/50 to-transparent dark:from-emerald-950/20 dark:to-transparent border-b border-black/5 dark:border-white/5 overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.1)_0%,_transparent_50%)] dark:bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.05)_0%,_transparent_50%)] dark:bg-[radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.05)_0%,_transparent_50%)]" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-black/40 dark:text-white/50 hover:text-amber-500 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Surahs
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2 text-emerald-600 dark:text-amber-500/80 font-mono text-xs uppercase tracking-[0.2em]">
                <span>Surah {surah.number}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {surah.revelationType}</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Layers className="w-3 h-3" /> {surah.numberOfAyahs} Ayats</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-2 tracking-tight">
                {surah.englishName}
              </h1>
              <p className="text-xl text-black/40 dark:text-white/50 italic">{surah.englishNameTranslation}</p>
            </div>
            
            <div className="text-right">
              <h2 className="text-6xl md:text-7xl font-arabic font-bold text-emerald-600 dark:text-emerald-300 drop-shadow-[0_0_30px_rgba(16,185,129,0.2)] dark:drop-shadow-[0_0_30px_rgba(110,231,183,0.3)]">
                {surah.name}
              </h2>
            </div>
          </div>
        </div>
      </header>

      {/* Bismillah Section (Unless Surah 9 or Surah 1) */}
      {surah.number !== 1 && surah.number !== 9 && (
        <div className="py-10 md:py-16 text-center text-3xl md:text-5xl font-arabic text-emerald-800/60 dark:text-emerald-100/40 tracking-wider">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
        </div>
      )}

      {/* Ayahs List */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex flex-col">
          {surah.ayats.map((ayah) => (
            <AyahItem key={ayah.number} ayah={ayah} />
          ))}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="max-w-4xl mx-auto px-6 py-12 border-t border-black/5 dark:border-white/5 flex justify-between">
        {surah.number > 1 && (
          <Link 
            href={`/surah/${surah.number - 1}`}
            className="flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-emerald-600 dark:hover:text-amber-400 transition-colors group font-medium"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> 
            <span className="hidden sm:inline">Previous Surah</span>
            <span className="sm:hidden">Prev</span>
          </Link>
        )}
        <div className="flex-1" />
        {surah.number < 114 && (
          <Link 
            href={`/surah/${surah.number + 1}`}
            className="flex items-center gap-2 text-black/50 dark:text-white/50 hover:text-emerald-600 dark:hover:text-amber-400 transition-colors group font-medium"
          >
            <span className="hidden sm:inline">Next Surah</span>
            <span className="sm:hidden">Next</span>
            <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
    </div>
  );
}
