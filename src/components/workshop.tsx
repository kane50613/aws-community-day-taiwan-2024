"use client";

import { BlurIn } from "@/components/magicui/blur-in.tsx";
import { m } from "framer-motion";
import React from "react";
import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/section-title.tsx";

export const Workshop = () => {
  const t = useTranslations("workshop");

  return (
    <div className="py-14 md:text-start container mx-auto relative md:rounded-md bg-primary-foreground text-primary">
      <SectionTitle className="md:text-lg">{t("title")}</SectionTitle>
      <BlurIn
        component={m.h3}
        className="text-2xl md:text-3xl font-display font-bold mb-2 py-1.5"
      >
        生成式 AI 工作坊：用 SageMaker 打造 AI 心理測驗
      </BlurIn>
    </div>
  );
};
