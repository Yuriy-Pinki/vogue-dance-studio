import type { ClassId } from "@/lib/booking";
import type { SocialId } from "@/lib/contacts";

export type Locale = "ru" | "en";

export interface NavDictionary {
  brand: string;
  links: { about: string; classes: string; faq: string; contacts: string };
  cta: string;
  /** aria-label группы переключателя языка */
  languageLabel: string;
  languages: Record<Locale, string>;
  newTabHint: string;
}

export interface HeroDictionary {
  /** Мета-строка над заголовком (mono) */
  metaTags: string[];
  eyebrow: string;
  /** Заголовок по словам — каждое слово анимируется отдельно */
  titleWords: string[];
  signature: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  scrollHint: string;
  newTabHint: string;
  locationBadge: string;
  seasonBadge: string;
  /** Подпись к фото в стиле журнального кредита */
  imageCaption: string;
  /** Бегущая строка категорий */
  marquee: string[];
}

export interface AboutDictionary {
  eyebrow: string;
  title: string;
  quote: string;
  quoteAuthor: string;
  story: string[];
  factsTitle: string;
  facts: { label: string; value: string }[];
  /** Подписи к галерее; alt-тексты — в `src/lib/media.ts` */
  gallery: string[];
}

export interface ClassCardDictionary {
  format: string;
  level: string;
  title: string;
  description: string;
  schedule: string[];
  prices: { label: string; value: string }[];
}

export interface ClassesDictionary {
  eyebrow: string;
  title: string;
  intro: string;
  scheduleLabel: string;
  pricesLabel: string;
  bookCta: string;
  /** Для screen reader: ссылка откроется в новой вкладке */
  newTabHint: string;
  items: Record<ClassId, ClassCardDictionary>;
}

export interface FaqDictionary {
  eyebrow: string;
  title: string;
  items: { question: string; answer: string }[];
}

export interface FooterDictionary {
  eyebrow: string;
  title: string;
  studio: {
    label: string;
    address: string;
    city: string;
    note: string;
    mapsCta: string;
    bookCta: string;
  };
  socialTitle: string;
  socials: Record<SocialId, { label: string; handle: string }>;
  collab: string;
  /** Подпись-логотип (крупный wordmark) */
  wordmark: string;
  /** `{year}` подставляется в компоненте */
  copyright: string;
  credits: { role: string; name: string }[];
  backToTop: string;
  newTabHint: string;
}

export interface Dictionary {
  meta: {
    /** Короткое имя бренда для шаблона title и JSON-LD */
    brand: string;
    title: string;
    description: string;
  };
  nav: NavDictionary;
  hero: HeroDictionary;
  about: AboutDictionary;
  classes: ClassesDictionary;
  faq: FaqDictionary;
  footer: FooterDictionary;
}
