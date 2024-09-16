"use client";

import Image from "next/image";
import Haowen from "../../../public/Haowen.png";
import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import { useTranslations } from "next-intl";

export const Keynote = () => {
  const t = useTranslations("sessions");

  return (
    <div className="container py-14 text-center max-w-screen-xl">
      <SectionTitle>{t("keynote")}</SectionTitle>
      <SectionHeading>AI的過去現在未來</SectionHeading>
      <div className="flex gap-8 justify-center">
        <Image
          src={Haowen}
          alt="黄浩文"
          unoptimized
          className="object-cover sm:block hidden aspect-square rounded-3xl border max-w-52"
        />
        <div className="bg-secondary/50 text-start border p-8 rounded-3xl flex flex-col">
          <p className="text-primary/75 mb-4">{t("keynote")} • Track A</p>
          <div className="flex gap-4 items-center mb-4 sm:mb-0">
            <Image
              src={Haowen}
              alt="黄浩文"
              unoptimized
              className="max-w-20 border rounded-xl sm:hidden"
            />
            <div>
              <p className="text-xl sm:text-2xl font-medium">
                黄浩文 (Haowen HUANG)
              </p>
            </div>
          </div>
          <p className="text-primary/85 mb-4">
            AI & Machine Learning Specialist, Developer Relations@AWS
          </p>
          <p className="text-primary/85">
            擁有超過 20 年的電信、互聯網和雲計算行業經驗，曾在微軟、Sun
            和中國電信工作過。
            <br />
            現在專注於生成式
            AI、大型語言模型、機器學習和數據科學，致力於分享技術內容並幫助全球開發者。
          </p>
        </div>
      </div>
    </div>
  );
};
