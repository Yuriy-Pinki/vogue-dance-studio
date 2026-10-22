"use client";

import AboutSection from "./AboutSection";
import ClassesSection from "./ClassesSection";
import FaqSection from "./FaqSection";
import FooterSection from "./FooterSection";
import HeroSection from "./HeroSection";
import { useLocale } from "./LocaleProvider";
import Navbar from "./Navbar";

// Читает словарь из контекста и раздаёт секциям через props — смена языка мгновенная.
export default function HomeContent({ year }: { year: number }) {
  const { locale, dict, setLocale } = useLocale();

  return (
    <>
      <Navbar dict={dict.nav} locale={locale} onLocaleChange={setLocale} />
      <main className="flex-1">
        <HeroSection dict={dict.hero} />
        <AboutSection dict={dict.about} />
        <ClassesSection dict={dict.classes} />
        <FaqSection dict={dict.faq} />
      </main>
      <FooterSection dict={dict.footer} year={year} />
    </>
  );
}
