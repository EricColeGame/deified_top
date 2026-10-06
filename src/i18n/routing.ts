import { defineRouting } from "next-intl/routing";

export const locales = ["en", "de", "fr", "ja"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
