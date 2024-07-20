import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import Link from "next/link";

export const Footer = () => {
  const t = useTranslations("footer");
  const metadataT = useTranslations("metadata");

  return (
    <footer className="w-full container">
      <div className="py-12 flex text-center md:text-start flex-col md:flex-row items-center gap-4">
        <h3 className="text-3xl md:text-4xl font-bold">
          {t("sponsor.message")}
        </h3>
        <div className="flex-grow" />
        <Button className="rounded-full text-md font-medium" size="lg" asChild>
          <a href="mailto:sponsor@awscmd.tw">{t("sponsor.contact")}</a>
        </Button>
        <Button
          className="rounded-full text-md font-medium"
          size="lg"
          variant="outline"
          asChild
        >
          <a href="https://awscmd.tw/sponsorship.pdf" target="_blank">
            {t("sponsor.pricing")}
          </a>
        </Button>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between border-t py-14 gap-8">
        <div className="space-y-4">
          <p className="font-medium text-lg">{metadataT("title")}</p>
          <p className="text-primary/75 text-sm">{t("copyright")}</p>
        </div>
        <div className="grid gap-2 text-sm text-primary/75">
          <p>{t("privacy")}</p>
          <p>{t("terms")}</p>
          <a
            target="_blank"
            href="https://github.com/kane50613/aws-community-day-taiwan-2024"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
