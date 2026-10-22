"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { HeroDictionary } from "@/dictionaries/types";

interface HeroSectionProps {
  dict: HeroDictionary;
}

// Staccato: короткий «щелчок» без пружины — как поза на счёт.
const SNAP = [0.85, 0, 0.15, 1] as const;

const letterVariants: Variants = {
  hidden: { y: "110%", skewY: 8, opacity: 0 },
  visible: (i: number) => ({
    y: "0%",
    skewY: 0,
    opacity: 1,
    transition: { delay: 0.35 + i * 0.09, duration: 0.55, ease: SNAP },
  }),
};

const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.7, ease: SNAP },
  }),
};

export default function HeroSection({ dict }: HeroSectionProps) {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? "visible" : "hidden";
  const letters = dict.titleWords.join(" ").split("");

  return (
    <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-obsidian text-chalk">
      {/* Атмосфера: фуксия/фиолет из темноты + золотая подиумная линия */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_75%_30%,rgba(225,0,90,0.22),transparent_70%),radial-gradient(45%_40%_at_15%_85%,rgba(123,44,191,0.18),transparent_70%)]"
      />
      <motion.div
        aria-hidden
        className="absolute left-0 top-1/2 -z-10 h-px w-full origin-left bg-gradient-to-r from-transparent via-gold/40 to-transparent"
        initial={reduceMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: SNAP, delay: 0.2 }}
      />

      {/* Мета-строка */}
      <motion.ul
        className="flex flex-wrap gap-x-6 gap-y-2 px-6 pt-8 font-mono text-[11px] uppercase tracking-[0.3em] text-silver md:px-12"
        variants={fadeUp}
        custom={0.1}
        initial={initial}
        animate="visible"
      >
        {dict.metaTags.map((tag) => (
          <li key={tag} className="flex items-center gap-2">
            <span className="size-1.5 bg-fuchsia" aria-hidden />
            {tag}
          </li>
        ))}
      </motion.ul>

      <div className="flex flex-1 flex-col justify-center px-6 py-16 md:px-12">
        <motion.p
          className="mb-6 max-w-xl font-mono text-xs uppercase tracking-[0.35em] text-gold"
          variants={fadeUp}
          custom={0.2}
          initial={initial}
          animate="visible"
        >
          {dict.eyebrow}
        </motion.p>

        <h1 className="font-display uppercase leading-[0.85] tracking-[0.08em]">
          <span className="sr-only">
            {dict.titleWords.join(" ")} {dict.signature}
          </span>
          <span aria-hidden className="flex overflow-hidden text-[clamp(5rem,22vw,20rem)]">
            {letters.map((char, i) => (
              <motion.span
                key={`${char}-${i}`}
                className="inline-block"
                variants={letterVariants}
                custom={i}
                initial={initial}
                animate="visible"
              >
                {char === " " ? " " : char}
              </motion.span>
            ))}
          </span>
          <motion.span
            aria-hidden
            className="mt-4 block font-display text-[clamp(1.5rem,4vw,3.5rem)] normal-case italic tracking-[0.04em] text-gold"
            variants={fadeUp}
            custom={0.35 + letters.length * 0.09}
            initial={initial}
            animate="visible"
          >
            {dict.signature}
          </motion.span>
        </h1>

        <motion.p
          className="mt-8 max-w-lg text-base leading-relaxed text-silver md:text-lg"
          variants={fadeUp}
          custom={0.9 + letters.length * 0.09}
          initial={initial}
          animate="visible"
        >
          {dict.subtitle}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-4"
          variants={fadeUp}
          custom={1.05 + letters.length * 0.09}
          initial={initial}
          animate="visible"
        >
          {/* TODO: заменить href на buildBookingUrl() из src/lib/booking.ts (Google Form pre-fill) + target="_blank" rel="noopener noreferrer" */}
          <motion.a
            href="#"
            className="group inline-flex items-center gap-3 bg-fuchsia px-8 py-4 font-mono text-sm uppercase tracking-[0.2em] text-chalk shadow-[0_0_40px_-8px_rgba(225,0,90,0.7)] transition-colors hover:bg-chalk hover:text-obsidian focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            whileHover={reduceMotion ? undefined : { x: 4 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.15, ease: SNAP }}
          >
            {dict.ctaPrimary}
            <ArrowUpRight
              className="size-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden
            />
          </motion.a>
          <a
            href="#schedule"
            className="inline-flex items-center gap-2 border border-chalk/20 px-6 py-4 font-mono text-sm uppercase tracking-[0.2em] text-chalk/80 transition-colors hover:border-gold hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            {dict.ctaSecondary}
          </a>
        </motion.div>
      </div>

      {/* Подиумная бегущая строка */}
      <div className="relative border-y border-chalk/10 py-4">
        <div className="flex overflow-hidden" aria-hidden>
          <motion.div
            className="flex shrink-0 whitespace-nowrap"
            animate={reduceMotion ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          >
            {[...dict.marquee, ...dict.marquee].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="flex items-center gap-8 pr-8 font-display text-2xl uppercase tracking-[0.15em] text-chalk/70 md:text-3xl"
              >
                {item}
                <span className="text-fuchsia">✦</span>
              </span>
            ))}
          </motion.div>
        </div>
        <ul className="sr-only">
          {dict.marquee.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <motion.div
        className="flex items-center justify-end gap-2 px-6 py-5 font-mono text-[11px] uppercase tracking-[0.3em] text-silver md:px-12"
        variants={fadeUp}
        custom={1.6}
        initial={initial}
        animate="visible"
      >
        {dict.scrollHint}
        <ArrowDown className="size-3.5 animate-bounce" aria-hidden />
      </motion.div>
    </section>
  );
}
