export interface SurahMetadata {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
}

export interface Ayah {
  number: number;
  numberInSurah: number;
  juz: number;
  text: string; // Arabic
  en: string;   // English translation
  bn: string;   // Bengali translation
}

export interface SurahDetail extends SurahMetadata {
  ayats: Ayah[];
}

export interface Settings {
  arabicFont: 'Amiri' | 'Scheherazade New';
  arabicFontSize: number;
  translationFontSize: number;
}
