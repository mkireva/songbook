export const locales = ["en", "bg", "de", "fr"] as const;
export type Locale = (typeof locales)[number];