import { Button } from "@/components/ui/button.tsx";
import { ThemeToggle } from "@/components/theme-toggle.tsx";
import { BlurIn } from "@/components/magicui/blur-in.tsx";
import { m } from "framer-motion";
import { useTranslations } from "next-intl";
import { LanguageToggle } from "@/components/language-toggle.tsx";
import { ThemedLogo } from "../themed-logo";
import { TrackAnchor } from "../track-anchor";

export const Header = () => {
  const t = useTranslations("header");

  return (
    <BlurIn
      component={m.header}
      className="border-b bg-background sticky top-0 z-50"
      delay={0.3}
    >
      <div className="container flex items-center h-full py-2">
        <ThemedLogo />
        <div className="flex-grow" />
        <LanguageToggle />
        <ThemeToggle />
        <Button variant="secondary" className="ml-2" asChild>
          <TrackAnchor
            href="https://tw.events.awsug.net/events/aws-community-day-2024"
            target="_blank"
            track="SubmitApplication"
            download
          >
            {t("register")}{" "}
          </TrackAnchor>
        </Button>
      </div>
    </BlurIn>
  );
};
