import { useTranslations } from "next-intl";
import { TableCell, TableRow } from "@/components/ui/table.tsx";
import { SessionType } from "@/lib/session.ts";
import { WorkshopSession } from "@/components/workshop-session.tsx";
import { Speaker } from "@/components/speaker.tsx";

export const SessionRow = ({ session }: { session: SessionType }) => {
  const t = useTranslations("sessions");

  if (session.type === "Workshop") return <WorkshopSession session={session} />;

  return (
    <TableRow>
      <TableCell className="text-base md:text-nowrap">{session.time}</TableCell>
      <TableCell className="text-lg font-semibold min-w-[240px]">
        <p>{session.title}</p>
        {session.language && (
          <>
            <i className="text-sm font-normal text-primary/75">
              {t(`${session.language}Sess`)}
            </i>
          </>
        )}
      </TableCell>
      <TableCell>
        <div className="space-y-1 flex flex-col gap-1 min-w-[240px]">
          {session.speakers.map((speaker, index) => (
            <Speaker speaker={speaker} key={index} />
          ))}
        </div>
      </TableCell>
    </TableRow>
  );
};
