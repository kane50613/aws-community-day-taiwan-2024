import { useTranslations } from "next-intl";
import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import { getTrackASessions } from "@/sessions/trackA";
import { trackBSessions } from "@/sessions/trackB";
import { workshopSessions } from "@/sessions/workshop";
import { InteractiveSessionsTable } from "../interactive-sessions-table";

export const Sessions = () => {
  const t = useTranslations("sessions");

  const sessions = [
    ...getTrackASessions(t),
    ...trackBSessions,
    ...workshopSessions,
  ];

  return (
    <div className="py-14 text-center md:container mx-auto relative">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionHeading className="text-balance">{t("heading")}</SectionHeading>
      <InteractiveSessionsTable
        sessions={sessions}
        workshopLabel={t("tabs.workshops")}
      />
    </div>
  );
};
