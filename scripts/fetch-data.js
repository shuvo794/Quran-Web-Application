const fs = require('fs');
const path = require('path');

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
    } catch (e) {
      if (i === retries - 1) throw e;
      console.log(`Retrying ${url} (${i + 1}/${retries})...`);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

async function main() {
  const dataDir = path.join(__dirname, '../data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  console.log('Fetching Surah list...');
  const surahList = await fetchWithRetry('http://api.alquran.cloud/v1/surah');
  fs.writeFileSync(path.join(dataDir, 'surahs.json'), JSON.stringify(surahList.data, null, 2));

  console.log(`Fetched ${surahList.data.length} surahs. Now fetching details...`);

  // To avoid huge files, we can fetch them individually or in chunks.
  // For SSG, individual files per surah is better.
  const surahDetailsDir = path.join(dataDir, 'chapters');
  if (!fs.existsSync(surahDetailsDir)) {
    fs.mkdirSync(surahDetailsDir, { recursive: true });
  }

  for (const surah of surahList.data) {
    console.log(`Fetching Surah ${surah.number}: ${surah.englishName}...`);
    // Editions: quran-uthmani (Arabic), en.sahih (English), bn.bengali (Bengali)
    const url = `http://api.alquran.cloud/v1/surah/${surah.number}/editions/quran-uthmani,en.sahih,bn.bengali`;
    const details = await fetchWithRetry(url);
    
    // Merge the editions into a cleaner format
    const formatted = {
      number: surah.number,
      name: surah.name,
      englishName: surah.englishName,
      englishNameTranslation: surah.englishNameTranslation,
      revelationType: surah.revelationType,
      numberOfAyahs: surah.numberOfAyahs,
      ayats: details.data[0].ayahs.map((ayah, index) => ({
        number: ayah.number,
        numberInSurah: ayah.numberInSurah,
        juz: ayah.juz,
        text: ayah.text,
        en: details.data[1].ayahs[index].text,
        bn: details.data[2].ayahs[index].text,
      }))
    };

    fs.writeFileSync(
      path.join(surahDetailsDir, `${surah.number}.json`),
      JSON.stringify(formatted, null, 2)
    );
  }

  console.log('All data fetched successfully!');
}

main().catch(console.error);
