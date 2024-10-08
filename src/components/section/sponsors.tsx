import { BlurIn } from "@/components/magicui/blur-in.tsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils.ts";
import React from "react";
import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";

export interface Sponsor {
  title: string;
  image: string;
  link: string;
  style?: string;
}

type Tiers = "titanium" | "diamond" | "gold" | "silver";

const sponsors: {
  [key in Tiers]: Sponsor[];
} = {
  titanium: [
    {
      title: "AWS",
      image: "/AWS_logo_RGB.svg",
      link: "https://aws.amazon.com/tw/",
    },
    {
      title: "KlickKlack",
      image:
        "https://www.kkco.com.tw/wp-content/uploads/2023/03/2023-KlickKlack-Logo.svg",
      link: "https://www.kkco.com.tw/",
    },
  ],
  diamond: [
    {
      title: "MetaAge 邁達特",
      image: "/Metaage.png",
      link: "https://www.metaage.com.tw/",
    },
    {
      title: "JetBrains",
      image:
        "https://resources.jetbrains.com/storage/products/company/brand/logos/jetbrains.svg",
      link: "https://www.jetbrains.com/",
    },
  ],
  gold: [
    {
      title: "中華電信",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Chunghwa_Telecom.svg/2880px-Chunghwa_Telecom.svg.png",
      link: "https://www.cht.com.tw/",
    },
    {
      title: "F5",
      image: "/f5-logo-rgb.svg",
      link: "https://www.f5.com/",
      style: "h-[80%]",
    },
    {
      title: "1111人力銀行",
      image: "/1111.png",
      link: "https://www.1111.com.tw/",
    },
  ],
  silver: [
    {
      title: "104",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/104_logo.png/1200px-104_logo.png",
      link: "https://www.104.com.tw/",
    },
    {
      title: "DELI 得力光電",
      image: "/Deli.png",
      link: "https://www.deli.com.tw/",
    },
  ],
};

const personalSponsors = [
  "洪昌逸",
  "許榮倫",
  "林家瑋 (Ray Lin), AWS Security Hero",
  "楊致嘉",
  "陳振峰",
  "林承漢",
  "Kevin Wang",
  "許哲銘 Ming Xu",
  "魏仲威",
];

export const Sponsors = () => {
  const t = useTranslations("sponsors");

  return (
    <div className="py-14 text-center container mx-auto" id="sponsors">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionHeading>{t("heading")}</SectionHeading>
      {Object.entries(sponsors).map(([tier, sponsorList], tierIndex) =>
        sponsorList.length ? (
          <SponsorTier key={tierIndex} tier={tier} sponsorList={sponsorList} />
        ) : null,
      )}
      <PersonalSponsors />
    </div>
  );
};

interface SponsorImageProps {
  sponsor: Sponsor;
}

export const SponsorImage: React.FC<SponsorImageProps> = ({ sponsor }) => (
  <a
    href={sponsor.link}
    target="_blank"
    rel="noreferrer noopener"
    className="rounded-md aspect-[18/9] overflow-hidden flex items-center bg-white px-4"
  >
    <Image
      width={720}
      height={480}
      loading="lazy"
      src={sponsor.image}
      title={sponsor.title}
      className={cn("object-contain", sponsor.style)}
      alt={sponsor.title}
    />
  </a>
);

interface SponsorTierProps {
  tier: string;
  sponsorList: Sponsor[];
}

export const SponsorTier: React.FC<SponsorTierProps> = ({
  tier,
  sponsorList,
}) => {
  const t = useTranslations("sponsors");

  return (
    <div>
      <BlurIn
        component="h3"
        className="text-2xl font-display font-bold mt-10 mb-2 py-1.5 text-left"
      >
        {t(tier)}
      </BlurIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 container">
        {sponsorList.map((sponsor, sponsorIndex) => (
          <BlurIn key={sponsorIndex} delay={0.05 * sponsorIndex}>
            <SponsorImage sponsor={sponsor} />
          </BlurIn>
        ))}
      </div>
    </div>
  );
};

export const PersonalSponsors = () => (
  <div>
    <BlurIn
      component="h3"
      className="text-2xl font-display font-bold mt-10 mb-2 py-1.5 text-left"
    >
      個人贊助
    </BlurIn>
    <div className="flex flex-wrap gap-x-8 gap-y-4 container">
      {personalSponsors.map((sponsor, sponsorIndex) => (
        <BlurIn key={sponsorIndex} delay={0.05 * sponsorIndex}>
          {sponsor}
        </BlurIn>
      ))}
    </div>
  </div>
);
