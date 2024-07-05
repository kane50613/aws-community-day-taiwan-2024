import { Header } from "@/components/header.tsx";
import { Particles } from "@/components/magicui/particles.tsx";
import { Hero } from "@/components/hero.tsx";
import { Images } from "@/components/images.tsx";
import { Sessions } from "@/components/sessions.tsx";
import { Sponsors } from "@/components/sponsors.tsx";
import { Footer } from "@/components/footer.tsx";
import { MotionLoader } from "@/components/motion-loader.tsx";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n.ts";
import { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    locale: string;
  };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: new URL(
        `https://awscmd.tw/${
          params.locale === "zh-Hant-Tw" ? "" : params.locale
        }`,
      ),
    },
  } as Metadata;
}

export default function Page({
  params: { locale },
}: {
  params: {
    locale: string;
  };
}) {
  unstable_setRequestLocale(locale);

  return (
    <MotionLoader>
      <Header />
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={50}
      />
      <Hero />
      <Images />
      <Sessions />
      <Sponsors />
      <Footer />
    </MotionLoader>
  );
}
