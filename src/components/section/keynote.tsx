import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import { useTranslations } from "next-intl";

interface KeynoteSpeakerProps {
  title: string;
  speaker: string;
  bio: string;
}
const keynotes: KeynoteSpeakerProps[] = [
  {
    title: "AI的過去現在未來",
    speaker: "黄浩文 (Haowen HUANG)",
    bio: "AI & Machine Learning Specialist, Developer Relations@AWS",
  },
  {
    title: "AI在人才市場現況與未來的應用",
    speaker: "許永昌",
    bio: "1111人力銀行 技術長",
  },
  {
    title: "停止擔憂，擁抱 AWS 與社群：十年創業路上的技術演進之旅",
    speaker: "李致緯 Richard Lee",
    bio: "TNL Mediagene 技術長",
  },
];

export const Keynote = () => {
  const t = useTranslations("sessions");

  return (
    <div className="container py-14 text-center max-w-screen-xl">
      <SectionTitle>{t("keynote")}</SectionTitle>
      <SectionHeading>掌握世界脈動</SectionHeading>

      <div className="flex gap-8 justify-center flex-col ">
        {keynotes.map((keynote, i) => (
          <KeynoteSpeaker
            title={keynote.title}
            speaker={keynote.speaker}
            bio={keynote.bio}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

const KeynoteSpeaker = ({ title, speaker, bio }: KeynoteSpeakerProps) => {
  const t = useTranslations("sessions");
  return (
    <div className="bg-secondary/50 text-start border p-8 rounded-3xl flex flex-col">
      <p className="text-primary/75 mb-4">{t("keynote")} • Track A</p>
      <div>
        <p className="text-2xl sm:text-3xl font-medium mb-1">{title}</p>
      </div>
      <div className="flex gap-4 items-center mb-4 sm:mb-0">
        <div>
          <p className="text-l sm:text-xl font-medium">{speaker}</p>
          <p className="text-primary/85">{bio}</p>
        </div>
      </div>
    </div>
  );
};
