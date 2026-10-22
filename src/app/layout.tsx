import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { defaultLocale, getDictionary } from "@/dictionaries";
import "./globals.css";

// Cinzel и Syne не содержат кириллицы — для RU-дефолта берём Playfair Display.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "cyrillic"],
});

const dict = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: dict.meta.title,
  description: dict.meta.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
