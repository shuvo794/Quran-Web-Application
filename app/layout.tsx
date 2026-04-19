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
            {/* Global Background Decorations */}
            <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
              <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] animate-pulse" />
              <div className="absolute top-[40%] -right-[10%] w-[35%] h-[35%] rounded-full bg-amber-500/5 dark:bg-amber-500/10 blur-[120px] animate-pulse [animation-delay:2s]" />
              <div className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-emerald-500/5 dark:bg-emerald-500/10 blur-[120px] animate-pulse [animation-delay:4s]" />
            </div>

            <Navbar />
            <main className="flex-1 overflow-y-auto pt-24">{children}</main>
            <footer className="border-t border-black/5 dark:border-white/5 py-8 px-6 text-center text-black/30 dark:text-white/30 text-sm">
              <p>© 2026 Al-Quran Application</p>
            </footer>
          </SettingsProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
