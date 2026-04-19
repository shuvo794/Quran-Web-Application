import type { Metadata } from "next";
import { Amiri, Scheherazade_New, Inter } from "next/font/google";
import "./globals.css";
import { SettingsProvider } from "@/components/SettingsProvider";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

const amiri = Amiri({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-amiri",
});

const scheherazade = Scheherazade_New({
  weight: ["400", "700"],
  subsets: ["arabic"],
  variable: "--font-scheherazade",
});

export const metadata: Metadata = {
  title: "Al-Quran | The Noble Quran",
  description:
    "Experience the Quran with beautiful Arabic typography and multiple translations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={`${inter.className} ${amiri.variable} ${scheherazade.variable} min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300 flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SettingsProvider>
            <Navbar />
            <main className="flex-1 overflow-y-auto pt-24">{children}</main>
            <footer className="border-t border-black/5 dark:border-white/5 py-8 px-6 text-center text-black/30 dark:text-white/30 text-sm">
              <p>
                © {new Date().getFullYear()} Al-Quran Application | Built with
                Next.js & Hono
              </p>
            </footer>
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
