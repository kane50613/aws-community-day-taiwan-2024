"use client";

import { BlurIn } from "@/components/magicui/blur-in";
import { m } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";

export const Sessions = () => {
  const t = useTranslations("sessions");

  return (
    <div className="py-14 text-center container max-w-screen-xl mx-auto relative">
      <BlurIn component={m.span} className="text-xl font-medium">
        {t("title")}
      </BlurIn>
      <BlurIn
        component={m.h2}
        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 py-1.5"
      >
        {t("heading")}
      </BlurIn>
      <BlurIn delay={0.2}>
        <Tabs defaultValue="main" className="mb-12 sticky top-0">
          <TabsList className="rounded-full [&>button]:rounded-full border-black/5 border dark:bg-neutral-900">
            <TabsTrigger value="main">{t("tabs.main")}</TabsTrigger>
            <TabsTrigger value="workshops">{t("tabs.workshops")}</TabsTrigger>
            <TabsTrigger value="lightning-talks">
              {t("tabs.lightning")}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </BlurIn>
      <span className="text-primary/75 text-sm">{t("notAvailable")}</span>
    </div>
  );
};
