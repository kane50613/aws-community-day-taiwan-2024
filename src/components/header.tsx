"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BlurIn } from "@/components/magicui/blur-in";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <BlurIn
      component={m.header}
      className="border-b bg-background sticky top-0 z-50"
      delay={0.3}
    >
      <div className="container flex items-center h-full py-2 gap-2">
        <p>AWS CMD</p>
        <div className="flex-grow" />
        <ThemeToggle />
        <Button variant="secondary">{t("register")}</Button>
      </div>
    </BlurIn>
  );
};
