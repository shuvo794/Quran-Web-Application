# Al-Quran Web Application

A modern, high-performance Quranic application built with **Next.js 16**, **Hono**, and **Tailwind CSS**. This application offers a premium reading experience with beautiful Arabic typography, multiple translations, and advanced search capabilities.

## 🌟 Features

- **Full Quran Database**: All 114 Surahs with metadata and complete verse content.
- **Bi-lingual Translations**: Every verse includes both **English (Sahih International)** and **Bengali** translations.
- **Premium Typography**: High-quality Arabic scripts powered by **Amiri** and **Scheherazade New**.
- **Persistent Settings**: Customize Arabic/Translation font families and sizes. Settings are saved automatically via `localStorage`.
- **Fast Search**: Instant search functionality across all verse translations.
- **SSG Ready**: Static Site Generation for all 114 Surahs ensuring maximum performance and SEO.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile devices.
- **Theme Support**: Dynamic Light and Dark mode support (In Progress).

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org/) (App Router)
- **Backend**: [Hono](https://hono.dev/) (Node.js API)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data Source**: Al-Quran Cloud API

## 📂 Project Architecture

The application follows a clean separation of concerns:

- `app/`: Contains the Next.js routes and layouts.
  - `page.tsx`: The Surah gallery/list.
  - `surah/[id]/page.tsx`: Dynamic reading view (SSG).
  - `search/page.tsx`: Client-side search interface.
  - `api/`: Hono-powered API routes for data serving.
- `components/`: Reusable UI components (Sidebar, Navbar, Cards, etc.).
- `data/`: Local storage of Quranic JSON data for fast builds and search.
- `lib/`: Shared utilities, types, and logic providers.
- `scripts/`: Data fetching and processing utilities.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-link>
   cd quran-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Fetch the Quran data:
   ```bash
   node scripts/fetch-data.js
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Build for production:
   ```bash
   npm run build
   ```

## 📖 How it Works

1. **Data Layer**: The application uses a custom script to pull the entire Quran database into local JSON files. This removes external API latency and allows for full static site generation.
2. **Backend**: Hono handles the internal API requests for surah lists and searching, providing a lightweight and fast Node.js backend.
3. **Frontend**: The App Router leverages React Server Components for data fetching and Client Components for interactive elements like the settings sidebar.
4. **Static Generation**: During the build process, Next.js generates static HTML for all 114 Surahs, providing instantaneous page loads for readers.

---
Built with ❤️ for the Quran Community.
