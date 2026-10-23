"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { MEDIA, type MediaItem } from "@/lib/media";
import type { ClassesDictionary } from "@/dictionaries/types";
import { bookingLinkProps, type ClassId } from "@/lib/booking";

interface ClassesSectionProps {
  dict: ClassesDictionary;
}

const SNAP = [0.85, 0, 0.15, 1] as const;

const PROGRAMS: { id: ClassId; image: MediaItem; premium?: boolean }[] = [
  { id: "offline-beginners", image: MEDIA.hands },
  { id: "offline-middle", image: MEDIA.arch },
  { id: "individual", image: MEDIA.portraitBw, premium: true },
  { id: "runway-club", image: MEDIA.raise },
  { id: "old-way-club", image: MEDIA.floorBw },
];

const cardIn: Variants = {
  hidden: { y: 48, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: (i % 3) * 0.1, duration: 0.6, ease: SNAP },
  }),
};

export default function ClassesSection({ dict }: ClassesSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id="classes" className="relative scroll-mt-16 border-t border-chalk/10 bg-obsidian px-6 py-24 text-chalk md:px-12 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(40%_30%_at_90%_10%,rgba(123,44,191,0.14),transparent_70%)]"
      />

      <header className="relative mb-16 grid gap-8 md:mb-20 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-gold">{dict.eyebrow}</p>
          <h2 className="font-display text-[clamp(2.75rem,8vw,7rem)] uppercase leading-[0.9] tracking-[0.06em]">
            {dict.title}
          </h2>
        </div>
        <p className="max-w-md text-base leading-relaxed text-silver lg:col-span-5 lg:justify-self-end">{dict.intro}</p>
      </header>

      <ul className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-6">
        {PROGRAMS.map((program, i) => {
          const item = dict.items[program.id];
          return (
            <motion.li
              key={program.id}
              className={`group flex flex-col border bg-charcoal ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"} md:last:col-span-2 lg:last:col-span-3 transition-colors duration-300 hover:border-fuchsia ${
                program.premium ? "border-gold/60" : "border-chalk/10"
              }`}
              variants={cardIn}
              custom={i}
              initial={reduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.2, ease: SNAP } }}
            >
              <div className={`relative isolate aspect-[4/3] overflow-hidden border-b border-chalk/10 ${i >= 3 ? "lg:aspect-[16/9]" : ""} ${i === PROGRAMS.length - 1 ? "md:aspect-[16/9]" : ""}`}>
                <Image
                  src={asset(program.image.src)}
                  alt={program.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top grayscale contrast-125 transition-transform duration-500 group-hover:scale-105 [@media(hover:none)]:grayscale-0"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-red-600 opacity-0 mix-blend-color transition-opacity duration-500 group-hover:opacity-80"
                />
                <span className="pointer-events-none absolute left-4 top-4 bg-obsidian/85 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-chalk backdrop-blur-md">
                  {item.format}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-8">
                <p className={`font-mono text-[11px] uppercase tracking-[0.3em] ${program.premium ? "text-gold" : "text-fuchsia"}`}>
                  {item.level}
                </p>
                <h3 className="mt-3 font-display text-3xl uppercase leading-tight tracking-[0.04em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-silver">{item.description}</p>

                <dl className="mb-8 mt-8 grid gap-6 font-mono text-xs uppercase tracking-[0.15em]">
                  <div>
                    <dt className="mb-2 text-[10px] tracking-[0.3em] text-silver">{dict.scheduleLabel}</dt>
                    {item.schedule.map((line) => (
                      <dd key={line} className="text-chalk/90">
                        {line}
                      </dd>
                    ))}
                  </div>
                  <div>
                    <dt className="mb-2 text-[10px] tracking-[0.3em] text-silver">{dict.pricesLabel}</dt>
                    {item.prices.map((price) => (
                      <dd key={price.label} className="flex items-baseline gap-2 py-1">
                        <span className="text-chalk/70">{price.label}</span>
                        <span aria-hidden className="flex-1 border-b border-dotted border-chalk/20" />
                        <span className="text-base text-gold">{price.value}</span>
                      </dd>
                    ))}
                  </div>
                </dl>

                <a
                  {...bookingLinkProps}
                  className="mt-auto flex items-center justify-between gap-3 bg-fuchsia px-6 py-4 font-mono text-sm uppercase tracking-[0.2em] text-chalk transition-colors hover:bg-chalk hover:text-obsidian focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  <span>
                    {dict.bookCta}
                    <span className="sr-only">{` ${item.title} ${dict.newTabHint}`}</span>
                  </span>
                  <ArrowUpRight
                    className="size-4 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </a>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
