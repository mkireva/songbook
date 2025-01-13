import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["bg", "en", "fr", "de"],

  // Used when no locale matches
  defaultLocale: "bg",
  pathnames: {
    "/project": {
      en: "/project",
      de: "/projekt",
      fr: "/projet",
      bg: "/project",
    },
    "/": {
      en: "/",
      de: "/",
      fr: "/",
      bg: "/",
    },
    "/about": {
      en: "/about",
      de: "/uber-uns",
      fr: "/a-propos",
      bg: "/za-nas",
    },
    "/thoughts": {
      en: "/thoughts",
      de: "/gedanken",
      fr: "/pensées",
      bg: "/misli",
    },
    "/songs": {
      en: "/songs",
      de: "/lieder",
      fr: "/chansons",
      bg: "/pesni",
    },
    
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);