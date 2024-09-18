import { BlurIn } from "@/components/magicui/blur-in.tsx";
import { ArrowRightIcon } from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button.tsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Gradient } from "../gradient";
import { Banner } from "../banner";
import { TrackAnchor } from "../track-anchor";

export const Hero = () => {
  const t = useTranslations("hero");

  return (
    <div className="pt-16 relative md:pt-32">
      <Gradient />
      <div className="flex items-center justify-center flex-col container">
        <BlurIn delay={0.3}>
          <Banner label={t("banner")} />
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
          className="text-lg md:text-xl text-foreground/75 text-center mb-6 text-balance"
        >
          {t("description")}
        </BlurIn>
        <BlurIn
          component={m.span}
          delay={0.15}
          className="text-lg md:text-xl text-foreground/90 text-center mb-12 text-balance"
        >
          {t("date")}{" "}
          <Link
            href="https://maps.app.goo.gl/n94UJm493sSvmcdT8"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("location")}
          </Link>
        </BlurIn>
        <BlurIn delay={0.45}>
          <Button className="rounded-full px-6" asChild>
            <TrackAnchor
              href="https://tw.events.awsug.net/events/aws-community-day-2024"
              target="_blank"
              download
              track="SubmitApplication"
            >
              {t("register")}
              <ArrowRightIcon className="w-4 ml-2" />
            </TrackAnchor>
          </Button>
        </BlurIn>
      </div>
    </div>
  );
};
