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
      <header className="relative py-20 bg-emerald-50 dark:bg-emerald-950/20 border-b border-black/5 dark:border-white/5 overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.05)_0%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_center,_rgba(6,78,59,0.1)_0%,_transparent_70%)]" />
        
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
        <div className="py-12 text-center text-4xl md:text-5xl font-arabic text-emerald-100/40">
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
      <div className="max-w-4xl mx-auto px-6 py-12 border-t border-white/5 flex justify-between">
        {surah.number > 1 && (
          <Link 
            href={`/surah/${surah.number - 1}`}
            className="flex items-center gap-2 text-white/50 hover:text-amber-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Previous Surah
          </Link>
        )}
        <div />
        {surah.number < 114 && (
          <Link 
            href={`/surah/${surah.number + 1}`}
            className="flex items-center gap-2 text-white/50 hover:text-amber-400 transition-colors"
          >
            Next Surah <ArrowLeft className="w-4 h-4 rotate-180" />
          </Link>
        )}
      </div>
    </div>
  );
}
