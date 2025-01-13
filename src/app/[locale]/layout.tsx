import { NextIntlClientProvider } from "next-intl";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { getMessages, getTranslations } from "next-intl/server";
import { Locale } from "lib/locales";
import { ThemeProvider } from "components/theme-provider";
import { notFound } from "next/navigation";
import { routing } from "i18n/routing";

const geistsans = GeistSans;

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  const { locale } = await params;
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

interface GenerateMetadataProps {
  params: {
    locale: string;
  };
}


interface GenerateMetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: GenerateMetadataProps) {
  const resolvedParams = await params; // Await the params object
  const locale = resolvedParams.locale; // Now access locale

  // Pass the locale explicitly to getTranslations
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://beinsasongs.eu'),
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('og.title'),
      description: t('og.description'),
      images: [
        '/opengraph-image.png'
      ]
    },
  };
}