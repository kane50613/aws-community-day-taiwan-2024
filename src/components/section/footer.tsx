import { Button } from "@/components/ui/button.tsx";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("footer");
  const heroT = useTranslations("hero");

  return (
    <footer className="w-full container">
      <div className="py-12 flex text-center md:text-start flex-col md:flex-row items-center gap-4">
        <h3 className="text-3xl md:text-4xl font-bold">
          {t("sponsor.message")}
        </h3>
        <div className="flex-grow" />
        <div className="flex gap-4 flex-wrap">
          <Button
            className="rounded-full text-md font-medium"
            size="lg"
            asChild
          >
            <a href="https://personal-sponsorship.awscmd.tw" target="_blank">
              {t("sponsor.personal")}
            </a>
          </Button>
          <Button
            className="rounded-full text-md font-medium"
            size="lg"
            variant="outline"
            asChild
          >
            <a
              href="https://youtrack.arcloud.com.tw/form/ef9ab607-00ae-49fd-a120-6127218a11db"
              target="_blank"
            >
              {t("sponsor.enterprise")}
            </a>
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center justify-between border-t py-14 gap-8">
        <div className="space-y-4">
          <p className="font-medium text-lg">{heroT("title")}</p>
          <p className="text-primary/75 text-sm">{t("copyright")}</p>
          <p className="text-primary/60 text-sm">
            {t("translationDisclaimer")}
          </p>
        </div>
        <div className="grid gap-2 text-sm text-primary/75">
          <a href="https://arcloud.com.tw/privacy" target="_blank">
            {t("privacy")}
          </a>
          <a href="https://aws.amazon.com/codeofconduct/" target="_blank">
            {t("terms")}
          </a>
        </div>
      </div>
    </footer>
  );
};
