import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { Analytics } from '@vercel/analytics/react';

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://beinsasongs.vercel.app/"),
  title: {
    default: "Песни от Учителя Петър Дънов",
    template: "%s Песни от Учителя Петър Дънов - Четвърто преработено и допълнено издание"
  },
  description:
    "Четвърто преработено и допълнено издание, 2024. Изданието съдържа вокални и инструментални композиции от Учителя Петър Дънов и негови ученици.",
  openGraph: {
    title: "Песни от Учителя Петър Дънов",
    description: "Четвърто преработено и допълнено издание, 2024. Изданието съдържа вокални и инструментални композиции от Учителя Петър Дънов и негови ученици",
    type: "website",
    locale: "bg_BG",
    url: "https://beinsasongs.vercel.app/",
    siteName: "Песни от Учителя",
  },
  twitter: {
    card: "summary_large_image",
  },

  keywords: [
    "Петър Дънов",
    "Песни от Учителя",
    "Вехади",
    "Беинса Дуно",
    "Песнарка",
    "Петър Ганев",
    "Мария Кирева",
    "окултна музика",
    "Beinsa Duno",
    "Beinsa Douno",
    "Peter Deunov",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <NavBar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
