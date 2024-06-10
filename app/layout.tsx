import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import Footer from "./Footer";
import NavBar from "./NavBar";

const garamond = EB_Garamond({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://beinsabook.vercel.app`)
    : new URL(`http://localhost:${process.env.PORT || 3000}`),
  title: "Песни от Учителя",
  description:
    "Четвърто преработено и допълнено издание, 2024. Изданието съдържа вокални и инструментални композиции от Учителя Петър Дънов и негови ученици.",
  keywords: [
    "Петър Дънов",
    "Песни от Учителя",
    "Вехади",
    "Беинса Дуно",
    "Песнарка",
    "Петър Ганев",
    "Мария Кирева",
  ],
  openGraph: {
    images: "/opengraph-image.png",
  },
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
        <Footer />
      </body>
    </html>
  );
}
