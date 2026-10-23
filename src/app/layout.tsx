import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { defaultLocale, getDictionary } from "@/dictionaries";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// Cinzel and Syne lack Cyrillic glyphs, so Playfair Display covers the RU default.
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
const ogImage = { url: OG_IMAGE.path, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: OG_IMAGE.alt };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: dict.meta.title,
    template: `%s | ${dict.meta.brand}`,
  },
  description: dict.meta.description,
  keywords: [
    "vogue dance",
    "vogue femme",
    "verushka bonchinche",
    "vogue warszawa",
    "dance studio warsaw",
    "catwalk",
    "hands performance",
  ],
  authors: [{ name: "Verushka Bonchinche" }],
  creator: "Verushka Bonchinche",
  alternates: {
    canonical: "/",
    languages: { ru: "/", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: dict.meta.title,
    description: dict.meta.description,
    locale: "ru_RU",
    alternateLocale: ["en_US"],
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: dict.meta.title,
    description: dict.meta.description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
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
