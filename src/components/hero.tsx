"use client";

import { BlurIn } from "@/components/magicui/blur-in";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text.tsx";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="pt-16 relative md:pt-32">
      <Gradient />
      <div className="flex items-center justify-center flex-col container">
        <BlurIn delay={0.3}>
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              🚀 {t("banner")}
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </BlurIn>
        <BlurIn
          component={m.h1}
          className="font-medium font-display text-center text-balance text-4xl tracking-[-0.02em] drop-shadow-sm md:text-7xl lg:text-8xl md:leading-[5rem] py-6"
        >
          {t("title")}
        </BlurIn>
        <BlurIn
          component={m.span}
          delay={0.15}
          className="text-lg md:text-xl text-foreground/75 text-center mb-12 text-balance"
        >
          {t("description")}
        </BlurIn>
        <BlurIn delay={0.45}>
          <Button className="rounded-full px-6" asChild>
            <a
              href="https://tw.events.awsug.net/events/aws-community-day-2024"
              target="_blank"
            >
              {t("register")}
              <ArrowRightIcon className="w-4 ml-2" />
            </a>
          </Button>
        </BlurIn>
      </div>
    </div>
  );
};

const Gradient = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={cn(
        "bg-gradient-to-b from-transparent to-transparent absolute top-0 left-0 w-full h-[100dvh] opacity-50 via-70% transition-opacity",
        // the opacity-0 class is used to prevent the Flash of Unstyled Content (FOUC)
        mounted
          ? theme === "dark"
            ? "via-[#613b95]"
            : "via-[#FF9900]"
          : "opacity-0",
      )}
    />
  );
};
