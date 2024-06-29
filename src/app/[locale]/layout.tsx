import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { getMessages, getTranslations } from "next-intl/server";
import { Locale } from "@/src/lib/locales"; 
import { ThemeProvider } from "@/src/components/theme-provider";

const geistsans = GeistSans;
type Props = {
  children: React.ReactNode;
  params: {
    locale: "bg" | "en" | "de" | "fr";
  };
};

const RootLayout: React.FC<Props> = async ({
  children,
  params: { locale },
}) => {
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
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "root" });

  return {
    metadataBase: new URL("https://beinsasongs.eu/"), // Replace with your actual domain
    title: t("metadata.title"),
    description: t("metadata.description"),
    openGraph: {
      title: t("metadata.title"),
      description: t("metadata.description"),
      type: "website",
      locale: locale,
      url: "https://beinsasongs.eu/",
      siteName: t("metadata.siteName"),
      images: "opengraph-image.png",
    },
    twitter: {
      card: "summary_large_image",
      site: "@beinsasongs",
      title: t("metadata.title"),
      description: t("metadata.description"),
      images: "opengraph-image.png",
    },
  };
}

export default RootLayout;
