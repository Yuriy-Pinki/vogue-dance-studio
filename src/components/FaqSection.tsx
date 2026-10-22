"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";
import type { FaqDictionary } from "@/dictionaries/types";

interface FaqSectionProps {
  dict: FaqDictionary;
}

const SNAP = [0.85, 0, 0.15, 1] as const;

export default function FaqSection({ dict }: FaqSectionProps) {
  const reduceMotion = useReducedMotion();
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-16 border-t border-chalk/10 bg-obsidian px-6 py-24 text-chalk md:px-12 md:py-36">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <motion.header
          className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
          initial={reduceMotion ? false : { y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: SNAP }}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.35em] text-gold">{dict.eyebrow}</p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] uppercase leading-[0.95] tracking-[0.06em]">
            {dict.title}
          </h2>
        </motion.header>

        <ul className="border-t border-chalk/15 lg:col-span-8">
          {dict.items.map((item, i) => {
            const open = openIndex === i;
            const buttonId = `${baseId}-q-${i}`;
            const panelId = `${baseId}-a-${i}`;
            return (
              <motion.li
                key={item.question}
                className="border-b border-chalk/15"
                initial={reduceMotion ? false : { y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: SNAP }}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="group flex w-full items-start gap-5 py-7 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:gap-8"
                  >
                    <span
                      aria-hidden
                      className={`pt-2 font-mono text-[11px] tracking-[0.3em] transition-colors ${open ? "text-fuchsia" : "text-silver"}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 font-display text-xl leading-snug transition-colors md:text-3xl ${
                        open ? "text-chalk" : "text-chalk/80 group-hover:text-chalk"
                      }`}
                    >
                      {item.question}
                    </span>
                    <motion.span
                      aria-hidden
                      className={`mt-1 flex size-8 shrink-0 items-center justify-center border transition-colors ${
                        open ? "border-fuchsia text-fuchsia" : "border-chalk/20 text-silver group-hover:border-gold group-hover:text-gold"
                      }`}
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25, ease: SNAP }}
                    >
                      <Plus className="size-4" />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className="overflow-hidden"
                      initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={reduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: SNAP }}
                    >
                      <p className="max-w-2xl pb-8 pl-10 text-base leading-relaxed text-silver md:pl-[3.25rem] md:text-[17px]">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
