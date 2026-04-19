# Al-Quran Web Application 📖✨

A beautifully designed, highly responsive, and feature-rich Quran web application built with **Next.js**, **React**, and **Tailwind CSS**. It provides a seamless experience for reading, listening, and reflecting on the Noble Quran with multiple translations, stunning typography, and a modern UI.

## 🚀 Features

- **Decent & Premium UI**: A highly responsive, modern interface featuring **Glassmorphism**, smooth hover effects, radial gradients, and dynamic animations (powered by Framer Motion).
- **Surah List Page**: Browse all 114 Surahs with their Arabic names, English names, and detailed metadata (Makkah/Madinah revelation, number of Ayats).
- **Ayat Page (Surah Detail)**: Read through all verses of a selected Surah. Features clean Arabic text and dual translations (English & Bengali).
- **Advanced Search Functionality**: Search seamlessly for any Surah by its name or number, or search for specific words within the English/Bengali translations.
- **Customizable Settings Panel (Sidebar)**:
  - **Arabic Font Selection**: Choose between beautiful Arabic fonts like *Amiri* and *Scheherazade New*.
  - **Font Size Adjustments**: Sliders to independently adjust the Arabic text size and the Translation text size.
  - **Persistent Settings**: All your reading preferences are automatically saved to your browser's `localStorage` so they persist across sessions.
- **Dark/Light Mode**: Full support for system-wide or manually toggled dark and light themes, ensuring a comfortable reading experience at any time of day.

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [Hono](https://hono.dev/) (For lightweight and fast API routing)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: `next/font/google` for Inter, Amiri, and Scheherazade New.

## ⚙️ Getting Started

### Prerequisites
Make sure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### Installation

1. Clone the repository (or download the source code):
   ```bash
   git clone <repository-url>
   cd Quran-Web-Application
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

- `/app`: Next.js App Router containing pages (`page.tsx`, `search/page.tsx`, `surah/[id]/page.tsx`) and the Hono API routes (`api/[[...route]]/route.ts`).
- `/components`: Reusable UI components like `Navbar`, `Sidebar`, `SurahCard`, `AyahItem`, and `SettingsProvider`.
- `/data`: Contains the JSON data for all Surahs and their respective Ayahs (with translations).
- `/lib`: TypeScript types and helper functions.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
