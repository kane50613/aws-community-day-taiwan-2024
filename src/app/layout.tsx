import { ReactNode } from "react";
import "@/index.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

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
