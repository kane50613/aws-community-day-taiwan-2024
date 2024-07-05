import { themeScript } from "@/lib/theme-script.ts";
import { ReactNode } from "react";
import "@/index.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

export default async function Layout({
  children,
  params: { locale },
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
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
