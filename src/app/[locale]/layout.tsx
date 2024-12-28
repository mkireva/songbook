import { NextIntlClientProvider } from "next-intl";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { getMessages, getTranslations } from "next-intl/server";
import { ThemeProvider } from "components/theme-provider";
import { notFound } from "next/navigation";
import { Locale, routing } from "i18n/routing";

const geistsans = GeistSans;
type Props = {
  children: React.ReactNode;
  params: {
    locale: "bg" | "en" | "de" | "fr";
  };
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={geistsans.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          themes={["light", "dark"]}
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <NavBar />
            {children}
            <Analytics />
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}



// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }) {
//   const { locale } = params;
//   const t = await getTranslations({ locale, namespace: "Metadata" });

//   return {
//     metadataBase: new URL("https://beinsasongs.eu/"),
//     title: t("title"),
//     description: t("metadata.description"),
//     keywords: t("metadata.keywords"),
//     openGraph: {
//       title: t("metadata.title"),
//       description: t("metadata.description"),
//       type: "website",
//       locale: locale,
//       url: "https://beinsasongs.eu/",
//       siteName: t("metadata.siteName"),
//       images: "opengraph-image.png",
//     },
//     twitter: {
//       card: "summary_large_image",
//       site: "@beinsasongs",
//       title: t("metadata.title"),
//       description: t("metadata.description"),
//       images: "opengraph-image.png",
//     },
//   };
// }