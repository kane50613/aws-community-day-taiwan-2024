"use client";

import { BlurIn } from "@/components/magicui/blur-in";
import { m } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

const sponsors = [
  {
    title: "KlickKlack",
    image:
      "https://www.kkco.com.tw/wp-content/uploads/2023/03/2023-KlickKlack-Logo.svg",
  },
  {
    title: "中華電信",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Chunghwa_Telecom.svg/2880px-Chunghwa_Telecom.svg.png",
  },
  {
    title: "104",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/104_logo.png/1200px-104_logo.png",
  },
];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container">
        {sponsors.map((sponsor, i) => (
          <BlurIn
            key={i}
            delay={0.05 * i}
            className="rounded-md aspect-video overflow-hidden flex items-center bg-white px-4"
          >
            <Image
              unoptimized
              width={720}
              height={480}
              key={i}
              loading="lazy"
              src={sponsor.image}
              title={sponsor.title}
              className="object-contain"
              alt={sponsor.title}
            />
          </BlurIn>
        ))}
      </div>
    </div>
  );
};
