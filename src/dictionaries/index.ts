import { en } from "./en";
import { ru } from "./ru";
import type { Dictionary, Locale } from "./types";

export const defaultLocale: Locale = "ru";

const dictionaries: Record<Locale, Dictionary> = { ru, en };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary, Locale } from "./types";
