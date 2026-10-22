"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore, type ReactNode } from "react";
import { defaultLocale, getDictionary, type Dictionary, type Locale } from "@/dictionaries";

interface LocaleContextValue {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
}

const STORAGE_KEY = "locale";
const CHANGE_EVENT = "locale-change";

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: unknown): value is Locale {
  return value === "ru" || value === "en";
}

// localStorage как внешний стор: сервер и гидрация видят defaultLocale, клиент — сохранённый язык.
function readStoredLocale(): Locale {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(stored) ? stored : defaultLocale;
  } catch {
    return defaultLocale;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(CHANGE_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(CHANGE_EVENT, onChange);
  };
}

function setLocale(locale: Locale) {
  try {
    window.localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Приватный режим / заблокированное хранилище — язык просто не запомнится.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, readStoredLocale, () => defaultLocale);
  const dict = getDictionary(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = dict.meta.title;
  }, [locale, dict]);

  const value = useMemo(() => ({ locale, dict, setLocale }), [locale, dict]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}
