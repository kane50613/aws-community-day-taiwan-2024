"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BlurIn } from "@/components/magicui/blur-in";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/language-toggle.tsx";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <BlurIn
      component={m.header}
      className="border-b bg-background sticky top-0 z-50"
      delay={0.3}
    >
      <div className="container flex items-center h-full py-2">
        <p>AWS CMD</p>
        <div className="flex-grow" />
        <LanguageToggle />
        <ThemeToggle />
        <Button variant="secondary" className="ml-2" asChild>
          <a href="https://events.awscmd.tw/" target="_blank">
            {t("register")}
          </a>
        </Button>
      </div>
    </BlurIn>
  );
};
