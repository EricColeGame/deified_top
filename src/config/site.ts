export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Deified Wiki",
  shortName: "Deified",
  logoText: "D",
  tagline: "Builds, Relics, Bosses & Guides",
  description: "Your ultimate Deified wiki: builds, relics, bosses, skills, combat strategies, achievements and beginner guides for the dark fantasy turn-based tactical roguelite.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://deified.top",
  supportEmail: "support@deified.top",
  gameUrl: "https://store.steampowered.com/app/3623530/Deified/",
  heroVideoId: "XXalKI6jcIY", // Deified PC gameplay - turn-based tactical roguelite showcase
  social: {
    discord: "https://steamcommunity.com/app/3623530/discussions/",
    youtube: "https://steamcommunity.com/app/3623530/guides/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
