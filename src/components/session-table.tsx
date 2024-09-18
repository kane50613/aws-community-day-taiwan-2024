import { useTranslations } from "next-intl";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.tsx";
import { SessionType } from "@/lib/session.ts";
import { WorkshopSession } from "@/components/workshop-session.tsx";
import { SessionRow } from "@/components/session-row.tsx";

export const SessionTable = ({
  type,
  sessions,
}: {
  type: SessionType["type"];
  sessions: SessionType[];
}) => {
  const t = useTranslations("sessions");

  if (!sessions.length)
    return <span className="text-primary/75 text-sm">{t("notAvailable")}</span>;

  if (type === "Workshop")
    return (
      <div className="flex flex-col gap-8">
        {sessions.map((session, index) => (
          <WorkshopSession session={session} key={index} />
        ))}
      </div>
    );

  return (
    <Table className="text-start">
      <TableHeader>
        <TableRow>
          <TableHead>{t("table.time")}</TableHead>
          <TableHead>{t("table.title")}</TableHead>
          <TableHead>{t("table.speakers")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {sessions.map((session, i) => (
          <SessionRow session={session} key={i} />
        ))}
      </TableBody>
    </Table>
  );
};
