"use client";

import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import { SessionType } from "@/lib/session.ts";
import AmyLee from "public/Amy_Lee.jpg";
import LoveKiwi from "public/Love_Kiwi.jpg";
import Otto from "public/Otto.jpg";
import EugeneWang from "public/Eugene_Wang.jpg";
import AlanXu from "public/Alan_Xu.jpg";
import Image from "next/image";
import BlurFade from "@/components/magicui/blur-fade.tsx";

type Speaker = SessionType["speakers"][number] & {
  type: "host" | "speaker";
};

const speakers: Speaker[] = [
  {
    name: "Amy Lee",
    bio: "AWS User Group Taiwan Community Leader",
    image: AmyLee,
    link: "https://www.linkedin.com/in/shu-mei-lee/",
    type: "host",
  },
  {
    name: "林奇葳",
    bio: "1111 人力銀行高階獵才中心 總經理",
    image: LoveKiwi,
    type: "speaker",
  },
  {
    name: "顏勝豪 Otto",
    bio: "國泰金控 數數發中心 雲端策略發展部 協理",
    image: Otto,
    type: "speaker",
  },
  {
    name: "Eugene Wang",
    bio: "USPACE COO",
    image: EugeneWang,
    type: "speaker",
  },
  {
    name: "Alan Xu",
    bio: "AWS Educate cloud ambassador tech support",
    type: "speaker",
    image: AlanXu,
  },
];

export const PanelDiscussion = () => {
  const t = useTranslations("panelDiscussion");

  return (
    <div className="container py-14 text-center max-w-screen-xl">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionHeading>
        破解焦慮世代：雲端、
        <br />
        AI 與新世代人才的融合之路
      </SectionHeading>
      <p className="text-primary/85 text-balance leading-relaxed">
        邀請來自業界領導者、及新世代雲端、AI人才分享經驗與跨世代見解，探討 AI
        與雲端技術將如何重塑企業吸引、
        <br />
        培育乃至留任人才的方式， 以及產、學如何適應這股潮流，
        讓企業能夠永續；讓學生、新鮮人能夠在浪潮中準備自己。
      </p>
      <div className="grid sm:grid-cols-3 md:grid-cols-5 w-full mt-12 gap-4">
        {speakers.map((speaker, index) => (
          <BlurFade key={index} delay={index * 0.1} inView>
            <div className="flex flex-col items-center h-full">
              {speaker.image && (
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  unoptimized
                  className="object-cover aspect-square rounded-3xl border max-w-32 mb-2"
                />
              )}
              <p className="font-medium">{speaker.name}</p>
              <div className="flex items-center flex-grow">
                <p className="text-primary/75 mt-2 text-balance">
                  {speaker.bio}
                </p>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};
