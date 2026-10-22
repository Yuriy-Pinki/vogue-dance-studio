export type Locale = "ru" | "en";

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
  /** Бегущая строка категорий */
  marquee: string[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  hero: HeroDictionary;
}
