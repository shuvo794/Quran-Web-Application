'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Settings } from '@/lib/types';

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
  arabicFont: 'Amiri',
  arabicFontSize: 32,
  translationFontSize: 16,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('quran-settings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse settings');
      }
    }
    setMounted(true);
  }, []);

  const updateSettings = (newSettings: Partial<Settings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);
    localStorage.setItem('quran-settings', JSON.stringify(updated));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      <div 
        style={{ 
          '--arabic-font-size': `${settings.arabicFontSize}px`,
          '--translation-font-size': `${settings.translationFontSize}px`,
        } as React.CSSProperties}
      >
        {children}
      </div>
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    // If we're on the server or in a context-less environment (like prerendering)
    // return default settings instead of throwing an error.
    return {
      settings: defaultSettings,
      updateSettings: () => {},
    };
  }
  return context;
}
