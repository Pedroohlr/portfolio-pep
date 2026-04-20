import type { Locale, SiteContent } from "./types";
import { pt } from "./pt";
import { en } from "./en";

const content: Record<Locale, SiteContent> = { pt, en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

export type { Locale, SiteContent };
export { pt, en };
