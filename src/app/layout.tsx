import { ReactNode } from "react";
import "@/index.css";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

export const metadata = {
  icons: "/favicon.png",
};

const metaPixelScript = `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '472534399086992');
          fbq('track', 'PageView');`;
const dcardPixelScript = `!function(){
var d=function d(a) {
  for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)
  n[i-1]=arguments[i];
  d.queue.push([a].concat(n))
};
d.queue=[],window.dadk=window.dadk||d;
var a=document.createElement("script");
a.src="undefined"!=typeof URLSearchParams?"https://unpkg.com/@dcard/web-ad-tracking-sdk/build/dadk.iife.js":"https://unpkg.com/@dcard/web-ad-tracking-sdk/build/outdated-dadk.iife.js",
document.head.appendChild(a),
window.dadk("init", "Rya7ULBB-AJOlVFeUoRZA"), window.dadk("track", "PageView")}();`;

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
