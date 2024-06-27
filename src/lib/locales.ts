export const locales = ["bg", "en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];