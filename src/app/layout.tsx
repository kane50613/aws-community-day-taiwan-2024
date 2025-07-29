import { ReactNode } from "react";
import "@/index.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { metaPixelScript } from "@/lib/sciprts.ts";

export const metadata = {
  icons: "/favicon.png",
};

export default async function Layout({
  children,
  params: { locale = "zh-Hant-Tw" },
}: {
  children: ReactNode;
  params: {
    locale: string;
  };
}) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages({
    locale,
  });

  return (
    <html lang={locale}>
      <head>
        {process.env.NODE_ENV === "production" && (
          <Script id="meta-pixel-script">{metaPixelScript}</Script>
        )}
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
