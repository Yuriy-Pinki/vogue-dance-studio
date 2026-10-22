"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUp, ArrowUpRight, MapPin } from "lucide-react";
import type { FooterDictionary } from "@/dictionaries/types";
import { externalLinkProps, SOCIAL_LINKS, STUDIO_MAPS_URL, type SocialId } from "@/lib/contacts";

interface FooterSectionProps {
  dict: FooterDictionary;
  year: number;
}

const SNAP = [0.85, 0, 0.15, 1] as const;
const SOCIAL_ORDER: SocialId[] = ["instagram", "telegram", "whatsapp"];

const reveal: Variants = {
  hidden: { y: 32, opacity: 0 },
  visible: (delay: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: { delay, duration: 0.7, ease: SNAP },
  }),
};

export default function FooterSection({ dict, year }: FooterSectionProps) {
  const reduceMotion = useReducedMotion();
  const motionProps = {
    variants: reveal,
    initial: reduceMotion ? "visible" : "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-60px" },
  } as const;

  // Показываем только соцсети с подтверждённой ссылкой (см. src/lib/contacts.ts)
  const socials = SOCIAL_ORDER.flatMap((id) => {
    const href = SOCIAL_LINKS[id];
    return href ? [{ id, href, ...dict.socials[id] }] : [];
  });

  return (
    <footer id="contacts" className="relative scroll-mt-16 overflow-hidden border-t border-chalk/10 bg-obsidian text-chalk">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_100%,rgba(225,0,90,0.16),transparent_70%),radial-gradient(40%_35%_at_90%_80%,rgba(123,44,191,0.14),transparent_70%)]"
      />

      <div className="relative px-6 pt-24 md:px-12 md:pt-36">
        <motion.header className="mb-14 md:mb-20" {...motionProps}>
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-gold">{dict.eyebrow}</p>
          <h2 className="font-display text-[clamp(2.75rem,8vw,7rem)] uppercase leading-[0.9] tracking-[0.06em]">
            {dict.title}
          </h2>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Карточка студии */}
          <motion.div
            className="group relative border border-gold/50 bg-charcoal p-8 transition-colors duration-300 hover:border-gold md:p-12 lg:col-span-7"
            {...motionProps}
            custom={0.1}
          >
            <div aria-hidden className="pointer-events-none absolute inset-2 border border-gold/15" />
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              <MapPin className="size-3.5 text-fuchsia" aria-hidden />
              {dict.studio.label}
            </p>
            <address className="mt-8 not-italic">
              <span className="block font-display text-[clamp(2.5rem,6vw,5rem)] uppercase leading-none tracking-[0.04em]">
                {dict.studio.address}
              </span>
              <span className="mt-3 block font-mono text-sm uppercase tracking-[0.3em] text-silver">{dict.studio.city}</span>
            </address>
            <p className="mt-6 max-w-sm text-base text-silver">{dict.studio.note}</p>
            <a
              href={STUDIO_MAPS_URL}
              {...externalLinkProps}
              className="group/cta mt-10 inline-flex items-center gap-3 bg-fuchsia px-7 py-4 font-mono text-sm uppercase tracking-[0.2em] text-chalk shadow-[0_0_40px_-10px_rgba(225,0,90,0.7)] transition-colors hover:bg-chalk hover:text-obsidian focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {dict.studio.mapsCta}
              <span className="sr-only">{` ${dict.newTabHint}`}</span>
              <ArrowUpRight
                className="size-4 transition-transform duration-150 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                aria-hidden
              />
            </a>
          </motion.div>

          {/* Соцсети */}
          <motion.div className="flex flex-col lg:col-span-5" {...motionProps} custom={0.2}>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.3em] text-gold">{dict.socialTitle}</p>
            <ul className="border-t border-chalk/15">
              {socials.map((social) => (
                <li key={social.id} className="border-b border-chalk/15">
                  <a
                    href={social.href}
                    {...externalLinkProps}
                    className="group/link flex items-center justify-between gap-4 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                  >
                    <span>
                      <span className="block font-display text-3xl uppercase tracking-[0.06em] transition-colors group-hover/link:text-fuchsia md:text-4xl">
                        {social.label}
                      </span>
                      {social.handle && (
                        <span className="mt-1 block font-mono text-xs tracking-[0.2em] text-silver">{social.handle}</span>
                      )}
                      <span className="sr-only">{` ${dict.newTabHint}`}</span>
                    </span>
                    <ArrowUpRight
                      className="size-6 text-silver transition-[color,translate] duration-150 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-hover/link:text-fuchsia"
                      aria-hidden
                    />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 font-display text-xl italic leading-snug text-gold md:text-2xl">{dict.collab}</p>
          </motion.div>
        </div>
      </div>

      {/* Wordmark */}
      <motion.p
        aria-hidden
        className="relative mt-20 select-none whitespace-nowrap px-6 text-center font-display text-[clamp(2.5rem,11vw,15rem)] uppercase leading-none tracking-[0.08em] text-transparent [-webkit-text-stroke:1px_rgba(212,175,55,0.35)] md:mt-28"
        initial={reduceMotion ? false : { y: "40%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: SNAP }}
      >
        {dict.wordmark}
      </motion.p>

      {/* Нижняя плашка: копирайт, титры, наверх */}
      <div className="relative flex flex-col gap-6 border-t border-chalk/10 px-6 py-8 font-mono text-[11px] uppercase tracking-[0.2em] text-silver md:flex-row md:items-center md:justify-between md:px-12">
        <p>{dict.copyright.replace("{year}", String(year))}</p>
        <dl className="flex flex-wrap gap-x-8 gap-y-2">
          {dict.credits.map((credit) => (
            <div key={credit.role} className="flex gap-2">
              <dt className="text-silver/70">{credit.role}</dt>
              <dd className="text-chalk/80">{credit.name}</dd>
            </div>
          ))}
        </dl>
        <a
          href="#top"
          className="inline-flex items-center gap-2 self-start text-chalk/80 transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:self-auto"
        >
          {dict.backToTop}
          <ArrowUp className="size-3.5" aria-hidden />
        </a>
      </div>
    </footer>
  );
}
