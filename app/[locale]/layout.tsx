import "./globals.css";
import "react-day-picker/dist/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextIntlClientProvider } from "next-intl";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import { notFound } from "next/navigation";

import Footer from "@/components/Global/Footer";
import FooterLayer from "@/components/Global/FooterLayer";
import Header from "@/components/Global/Header";
import Navbar from "@/components/Global/Navbar";
import NextUi from "@/components/Providers/NextUi";
import { ReduxProviders } from "@/context/Provider";

import MetaTags from "./MetaTags";

const inter = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  // Language Switcher Client Provider
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} dir={locale == "en" ? "ltr" : "rtl"}>
      <head>
        <MetaTags />
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <NextUi>
            <Header />
            <Navbar />
            <ReduxProviders>{children}</ReduxProviders>
            <Footer />
            <FooterLayer />
          </NextUi>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
