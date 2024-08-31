"use client";

import { useMountedTheme } from "@/lib/use-mounted-theme.ts";
import { BlurIn } from "@/components/magicui/blur-in.tsx";
import { m } from "framer-motion";
import React from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils.ts";

export const Workshop = () => {
  const t = useTranslations("workshop");

  const { theme, mounted } = useMountedTheme();

  return (
    <div
      className={cn(
        "py-14 text-start container mx-auto relative rounded-md bg-primary-foreground",
        mounted && theme === "dark" ? "text-white" : "text-black",
      )}
    >
      <BlurIn component={m.span} className="text-xl font-medium">
        {t("title")}
      </BlurIn>
      <BlurIn
        component={m.h2}
        className="text-2xl md:text-3xl font-display font-bold mb-2 py-1.5"
      >
        生成式 AI 工作坊：用 SageMaker 打造 AI 心理測驗
      </BlurIn>
    </div>
  );
};
