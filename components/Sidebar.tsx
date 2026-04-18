'use client';

import React from 'react';
import { useSettings } from './SettingsProvider';
import { Settings, X, Type, Search, List } from 'lucide-react';

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { settings, updateSettings } = useSettings();

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={onClose}
        />
      )}
      
      <aside className={`
        fixed top-0 right-0 h-full w-80 glass z-50 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="p-6 h-full flex flex-col gap-8 transition-colors">
          <div className="flex justify-between items-center border-b border-black/10 dark:border-white/10 pb-4">
            <h2 className="text-xl font-bold text-emerald-600 dark:text-amber-400 flex items-center gap-2">
              <Settings className="w-5 h-5" /> Settings
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors text-black dark:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 overflow-y-auto">
            {/* Arabic Font Selection */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-black/50 dark:text-white/70 uppercase tracking-wider">Arabic Font</label>
              <div className="grid grid-cols-1 gap-2">
                {['Amiri', 'Scheherazade New'].map((font) => (
                  <button
                    key={font}
                    onClick={() => updateSettings({ arabicFont: font as any })}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      settings.arabicFont === font 
                      ? 'border-emerald-500 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' 
                      : 'border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 text-black dark:text-white'
                    }`}
                    style={{ fontFamily: font }}
                  >
                    {font}
                  </button>
                ))}
              </div>
            </div>

            {/* Arabic Font Size */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-black/50 dark:text-white/70 uppercase tracking-wider">Arabic size</label>
                <span className="text-emerald-600 dark:text-emerald-400 font-mono">{settings.arabicFontSize}px</span>
              </div>
              <input 
                type="range" 
                min="16" max="64" step="2"
                value={settings.arabicFontSize}
                onChange={(e) => updateSettings({ arabicFontSize: parseInt(e.target.value) })}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Translation Font Size */}
            <div className="space-y-3">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-black/50 dark:text-white/70 uppercase tracking-wider">Translation size</label>
                <span className="text-amber-600 dark:text-amber-400 font-mono">{settings.translationFontSize}px</span>
              </div>
              <input 
                type="range" 
                min="12" max="32" step="1"
                value={settings.translationFontSize}
                onChange={(e) => updateSettings({ translationFontSize: parseInt(e.target.value) })}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="mt-auto pt-4 border-t border-black/10 dark:border-white/10 text-[10px] text-black/30 dark:text-white/50 text-center uppercase tracking-widest font-bold">
            Settings persist automatically
          </div>
        </div>
      </aside>
    </>
  );
}
