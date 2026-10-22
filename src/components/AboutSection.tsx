"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { assetPath } from "@/lib/asset";
import type { AboutDictionary } from "@/dictionaries/types";

interface AboutSectionProps {
  dict: AboutDictionary;
}

const SNAP = [0.85, 0, 0.15, 1] as const;

// Порядок совпадает с dict.gallery
const GALLERY = [
  { src: "/assets/optimized/verushka-floor.webp", aspect: "aspect-square", offset: "" },
  { src: "/assets/optimized/house-of-bonchinche.webp", aspect: "aspect-[1080/1428]", offset: "md:mt-24" },
  { src: "/assets/optimized/verushka-arch.webp", aspect: "aspect-[1080/1740]", offset: "md:mt-10" },
] as const;

const reveal: Variants = {
  hidden: { y: 32, opacity: 0 },
  visible: (delay: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.7, ease: SNAP },
  }),
};

export default function AboutSection({ dict }: AboutSectionProps) {
  const reduceMotion = useReducedMotion();
  const motionProps = {
    variants: reveal,
    initial: reduceMotion ? "visible" : "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
  } as const;

  return (
    <section id="about" className="relative scroll-mt-16 border-t border-chalk/10 bg-obsidian px-6 py-24 text-chalk md:px-12 md:py-36">
      {/* Шапка разворота */}
      <motion.header className="mb-16 md:mb-24" {...motionProps}>
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-gold">{dict.eyebrow}</p>
        <h2 className="font-display text-[clamp(2.75rem,8vw,7rem)] uppercase leading-[0.9] tracking-[0.06em]">
          {dict.title}
        </h2>
        <motion.div
          aria-hidden
          className="mt-8 h-px origin-left bg-gradient-to-r from-gold via-gold/40 to-transparent"
          initial={reduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: SNAP }}
        />
      </motion.header>

      <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-8">
          {/* Pull quote */}
          <motion.figure className="relative mb-14" {...motionProps}>
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 -top-10 font-display text-[8rem] leading-none text-fuchsia/80 md:-left-8"
            >
              “
            </span>
            <blockquote className="relative font-display text-[clamp(1.75rem,3.6vw,3.25rem)] italic leading-[1.15] text-chalk">
              {dict.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              <span aria-hidden className="h-px w-10 bg-gold" />
              {dict.quoteAuthor}
            </figcaption>
          </motion.figure>

          <motion.div
            className="gap-10 text-base leading-relaxed text-silver md:columns-2 md:text-[17px] [&>p+p]:mt-5 [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-3 [&>p:first-child]:first-letter:font-display [&>p:first-child]:first-letter:text-7xl [&>p:first-child]:first-letter:leading-[0.8] [&>p:first-child]:first-letter:text-gold"
            {...motionProps}
            custom={0.15}
          >
            {dict.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
        </div>

        {/* Досье */}
        <motion.aside className="lg:col-span-4" {...motionProps} custom={0.25}>
          <div className="border border-gold/30 bg-charcoal p-8">
            <h3 className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-gold">{dict.factsTitle}</h3>
            <dl className="divide-y divide-chalk/10">
              {dict.facts.map((fact) => (
                <div key={fact.label} className="grid gap-1 py-4 first:pt-0 last:pb-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.3em] text-silver">{fact.label}</dt>
                  <dd className="font-display text-xl leading-snug text-chalk">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.aside>
      </div>

      {/* Галерея выходов: монохром → цвет при наведении */}
      <div className="mt-20 grid items-start gap-6 sm:grid-cols-2 md:mt-28 md:grid-cols-3 md:gap-8">
        {GALLERY.map((image, i) => {
          const text = dict.gallery[i];
          if (!text) return null;
          return (
            <motion.figure key={image.src} className={`group ${image.offset}`} {...motionProps} custom={i * 0.12}>
              <div className={`group relative overflow-hidden border border-chalk/10 transition-colors duration-500 hover:border-gold ${image.aspect}`}>
                <Image
                  src={assetPath(image.src)}
                  alt={text.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale contrast-125 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 [@media(hover:none)]:grayscale-0"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-fuchsia opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-20"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-silver transition-colors group-hover:text-gold">
                {text.caption}
              </figcaption>
            </motion.figure>
          );
        })}
      </div>
    </section>
  );
}
