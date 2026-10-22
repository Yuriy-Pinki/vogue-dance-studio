"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Locale, NavDictionary } from "@/dictionaries/types";

interface NavbarProps {
  dict: NavDictionary;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const SNAP = [0.85, 0, 0.15, 1] as const;
const LOCALES: Locale[] = ["ru", "en"];

export default function Navbar({ dict, locale, onLocaleChange }: NavbarProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 border-b border-chalk/10 bg-obsidian/60 backdrop-blur-md"
      initial={reduceMotion ? false : { y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: SNAP }}
    >
      <nav className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6 md:px-12">
        <a
          href="#top"
          className="flex items-center gap-2 font-display text-base uppercase tracking-[0.18em] text-chalk sm:text-lg sm:tracking-[0.25em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <span className="text-fuchsia" aria-hidden>
            ✦
          </span>
          {dict.brand}
        </a>

        <ul className="hidden items-center gap-8 font-mono text-[11px] uppercase tracking-[0.3em] text-silver md:flex">
          <li>
            <a href="#about" className="transition-colors hover:text-gold">
              {dict.links.about}
            </a>
          </li>
          <li>
            <a href="#classes" className="transition-colors hover:text-gold">
              {dict.links.classes}
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label={dict.languageLabel}
            className="relative flex border border-chalk/20 p-0.5 font-mono text-[11px] tracking-[0.2em]"
          >
            {LOCALES.map((code) => {
              const active = code === locale;
              return (
                <button
                  key={code}
                  type="button"
                  lang={code}
                  aria-pressed={active}
                  onClick={() => onLocaleChange(code)}
                  className={`relative isolate px-2.5 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-gold ${
                    active ? "text-obsidian" : "text-silver hover:text-chalk"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="locale-pill"
                      className="absolute inset-0 -z-10 bg-chalk"
                      transition={{ duration: reduceMotion ? 0 : 0.2, ease: SNAP }}
                    />
                  )}
                  {dict.languages[code]}
                </button>
              );
            })}
          </div>

          <a
            href="#classes"
            aria-label={dict.cta}
            className="group inline-flex items-center gap-2 bg-fuchsia px-3 py-2 sm:px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-chalk transition-colors hover:bg-chalk hover:text-obsidian focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            <span className="hidden sm:inline">{dict.cta}</span>
            <ArrowUpRight
              className="size-3.5 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
