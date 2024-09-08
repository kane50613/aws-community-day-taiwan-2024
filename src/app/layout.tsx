import { ReactNode } from "react";
import "@/index.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { dcardPixelScript, metaPixelScript } from "@/lib/sciprts.ts";

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

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script id="meta-pixel-script">{metaPixelScript}</Script>
            <Script id="dcard-pixel-script">{dcardPixelScript}</Script>
          </>
        )}
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
