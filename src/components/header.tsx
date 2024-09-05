"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { BlurIn } from "@/components/magicui/blur-in";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/language-toggle.tsx";
import Image from "next/image";
import { useMountedTheme } from "@/lib/use-mounted-theme.ts";

export const Header = () => {
  const t = useTranslations("header");

  const { theme, mounted } = useMountedTheme();

  return (
    <BlurIn
      component={m.header}
      className="border-b bg-background sticky top-0 z-50"
      delay={0.3}
    >
      <div className="container flex items-center h-full py-2">
        <Image
          src={
            mounted && theme === "light" ? "/logo-black.svg" : "/logo-white.svg"
          }
          alt="AWS Community Day 2024"
          width={1068}
          height={390}
          unoptimized
          className="h-8 md:h-12 w-auto"
        />
        <div className="flex-grow" />
        <LanguageToggle />
        <ThemeToggle />
        <Button variant="secondary" className="ml-2" asChild>
          <a
            href="https://tw.events.awsug.net/events/aws-community-day-2024"
            target="_blank"
            download
          >
            {t("register")}
          </a>
        </Button>
      </div>
    </BlurIn>
  );
};
