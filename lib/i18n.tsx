"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Locale, SiteContent } from "@/content/types";
import { getContent } from "@/content";

interface I18nContextValue {
  locale: Locale;
  content: SiteContent;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const content = getContent(locale);

  return (
    <I18nContext.Provider value={{ locale, content, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
}
