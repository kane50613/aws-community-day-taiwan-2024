import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import { useTranslations } from "next-intl";

export const Keynote = () => {
  const t = useTranslations("sessions");

  return (
      <div className="container py-14 text-center max-w-screen-xl">
        <SectionTitle>{t("keynote")}</SectionTitle>
        <SectionHeading>掌握世界脈動</SectionHeading>

        <div className="flex gap-8 justify-center flex-col md:flex-row">
          <div className="bg-secondary/50 text-start border p-8 rounded-3xl flex flex-col">
            <p className="text-primary/75 mb-4">{t("keynote")} • Track A</p>
            <div>
              <p className="text-2xl sm:text-3xl font-medium">AI的過去現在未來</p>
            </div>
            <div className="flex gap-4 items-center mb-4 sm:mb-0">
              <div>
                <p className="text-l sm:text-xl font-medium">
                  黄浩文 (Haowen HUANG)
                </p>
                <p className="text-primary/85">
                  AI & Machine Learning Specialist, Developer Relations@AWS
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary/50 text-start border p-8 rounded-3xl flex flex-col">
            <p className="text-primary/75 mb-4">{t("keynote")} • Track A</p>
            <div>
              <p className="text-2xl sm:text-3xl font-medium">AI在人才市場現況與未來的應用</p>
            </div>
            <div className="flex gap-4 items-center mb-4 sm:mb-0">
              <div>
                <p className="text-l sm:text-xl font-medium">
                  許永昌
                </p>
                <p className="text-primary/85">
                  1111人力銀行 技術長
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
