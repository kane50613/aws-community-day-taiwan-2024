import { Header } from "@/components/section/header.tsx";
import { Particles } from "@/components/magicui/particles.tsx";
import { Hero } from "@/components/section/hero.tsx";
import { Images } from "@/components/section/images.tsx";
import { Sessions } from "@/components/section/sessions.tsx";
import { Sponsors } from "@/components/section/sponsors.tsx";
import { Footer } from "@/components/section/footer.tsx";
import { MotionLoader } from "@/components/motion-loader.tsx";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n.ts";
import { Metadata } from "next";
import { Keynote } from "@/components/section/keynote.tsx";
import { PanelDiscussion } from "@/components/section/panel-discussion.tsx";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale = "zh-Hant-Tw" },
}: {
  params: {
    locale: string;
  };
}) {
  const t = await getTranslations({
    locale,
    namespace: "hero",
  });

  return {
    title: t("title"),
    description: `${t("description")}${t("date")}`,
    alternates: {
      canonical: new URL(
        `https://awscmd.tw/${locale === "zh-Hant-Tw" ? "" : locale}`,
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
      <Keynote />
      <PanelDiscussion />
      <Sessions />
      <Sponsors />
      <Footer />
    </MotionLoader>
  );
}
