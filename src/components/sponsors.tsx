"use client";

import { BlurIn } from "@/components/magicui/blur-in";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";

export const Sponsors = () => {
  const t = useTranslations("sponsors");

  return (
    <div
      className="py-14 text-center container max-w-screen-xl mx-auto"
      id="sponsors"
    >
      <BlurIn component={m.span} className="text-xl font-medium">
        {t("title")}
      </BlurIn>
      <BlurIn
        component={m.h2}
        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-12 py-1.5"
      >
        {t("heading")}
      </BlurIn>
      {/*<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">*/}
      {/*  {new Array(8).fill(0).map((_, i) => (*/}
      {/*    <BlurIn*/}
      {/*      key={i}*/}
      {/*      delay={0.05 * i}*/}
      {/*      className="rounded-md aspect-video overflow-hidden"*/}
      {/*    >*/}
      {/*      <Image*/}
      {/*        unoptimized*/}
      {/*        width={720}*/}
      {/*        height={480}*/}
      {/*        key={i}*/}
      {/*        loading="lazy"*/}
      {/*        src={`https://picsum.photos/seed/sponsors-${i + 1}/480/270.webp`}*/}
      {/*        className="object-cover"*/}
      {/*        alt="Sponsor"*/}
      {/*      />*/}
      {/*    </BlurIn>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
};
