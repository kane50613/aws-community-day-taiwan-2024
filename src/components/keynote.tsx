"use client";

import Image from "next/image";
import Haowen from "public/Haowen.png";
import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import { useTranslations } from "next-intl";

export const Keynote = () => {
  const t = useTranslations("sessions");

  return (
    <div className="container py-14 text-center">
      <SectionTitle>{t("keynote")}</SectionTitle>
      <SectionHeading>AI的過去現在未來</SectionHeading>
      <div className="flex gap-8 md:flex-row-reverse flex-col">
        <div className="bg-secondary/50 text-start border p-8 rounded-3xl flex flex-col">
          <p className="text-primary/75 mb-4">{t("keynote")} • Track A</p>
          <p className="text-xl md:text-2xl font-medium">
            黄浩文 (Haowen HUANG)
          </p>
          <p className="text-primary/85 mb-4">
            AI & Machine Learning Specialist, Developer Relations@AWS
          </p>
          <p className="text-primary/85">
            擁有電信、互聯網以及雲計算等行業超過 20
            年的豐富經驗，曾任職於微軟、Sun 和中國電信。他目前專注於生成式
            AI、大型語言模型
            (LLM)、機器學習和數據科學等領域的技術內容創作和實踐分享，致力於賦能全球開發者。
          </p>
        </div>
        <Image
          src={Haowen}
          alt="黄浩文"
          unoptimized
          className="object-contain aspect-square rounded-3xl border max-w-52"
        />
      </div>
    </div>
  );
};
