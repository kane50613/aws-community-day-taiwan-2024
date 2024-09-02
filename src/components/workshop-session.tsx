import { useLocale, useTranslations } from "next-intl";
import { IntlLocale } from "@/i18n.ts";
import { SessionType } from "@/lib/session.ts";
import { Speaker } from "@/components/speaker.tsx";

export const WorkshopSession = ({ session }: { session: SessionType }) => {
  const t = useTranslations("sessions");

  const locale = useLocale();

  return (
    <div className="py-8 md:text-start container mx-auto relative md:rounded-md bg-primary-foreground text-primary border-y md:border">
      <span className="font-medium text-primary/75">
        {session.time} • {t(`${session.language}Sess`)}
      </span>
      <h3 className="text-2xl md:text-3xl font-display font-bold mb-2 py-1.5 text-balance">
        {session.title}
      </h3>
      {session.description && (
        <p className="text-primary/85">
          {typeof session.description === "string"
            ? session.description
            : session.description[locale as IntlLocale]}
        </p>
      )}
      <div className="flex flex-wrap mt-8 gap-x-8 gap-y-4 w-full">
        {session.speakers.map((speaker, index) => (
          <Speaker speaker={speaker} key={index} compact />
        ))}
      </div>
    </div>
  );
};
