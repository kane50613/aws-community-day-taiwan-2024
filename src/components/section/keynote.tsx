import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import { useTranslations } from "next-intl";
import Image, { type StaticImageData } from "next/image";
import Haowen from "../../../public/Haowen.png";
import Richard from "../../../public/Richard.jpg";
import YoungChang from "../../../public/YoungChang.jpg";

interface KeynoteSpeakerProps {
  title: string;
  speaker: string;
  bio: string;
  image: StaticImageData;
  gridColumn: 1 | 2;
}
const keynotes: KeynoteSpeakerProps[] = [
  {
    title: "AI的過去現在未來",
    speaker: "黄浩文 (Haowen HUANG)",
    bio: "AI & Machine Learning Specialist, Developer Relations@AWS",
    image: Haowen,
    gridColumn: 1,
  },
  {
    title: "AI在人才市場現況與未來的應用",
    speaker: "許永昌",
    bio: "1111人力銀行 技術長",
    image: YoungChang,
    gridColumn: 1,
  },
  {
    title: "停止擔憂，擁抱 AWS 與社群：十年創業路上的技術演進之旅",
    speaker: "李致緯 Richard Lee",
    bio: "TNL Mediagene 技術長",
    image: Richard,
    gridColumn: 2,
  },
];

export const Keynote = () => {
  const t = useTranslations("sessions");

  return (
    <div className="container py-14 text-center max-w-screen-xl">
      <SectionTitle>{t("keynote")}</SectionTitle>
      <SectionHeading>掌握世界脈動</SectionHeading>
      <div className="flex flex-col sm:grid grid-cols-2 gap-10 sm:gap-8 justify-center">
        {keynotes.map((keynote, i) => (
          <KeynoteSpeaker {...keynote} key={i} />
        ))}
      </div>
    </div>
  );
};

const KeynoteSpeaker = ({
  title,
  speaker,
  bio,
  image,
  gridColumn,
}: KeynoteSpeakerProps) => {
  const t = useTranslations("sessions");

  return (
    <div
      className="flex gap-8 justify-center relative"
      style={{
        gridColumn: `span ${gridColumn} / span ${gridColumn}`,
      }}
    >
      <Image
        src={image}
        alt={speaker}
        className="absolute rounded-xl sm:hidden object-cover object-top aspect-square max-w-20 -top-6 right-4 bg-background shadow-lg"
      />
      <Image
        src={image}
        alt={speaker}
        className="object-cover sm:block hidden aspect-square rounded-3xl border object-top max-w-52"
      />
      <div className="bg-secondary/50 text-start border px-8 py-6 rounded-3xl flex flex-col">
        <p className="text-primary/75 mb-4">{t("keynote")} • Track A</p>
        <p className="text-2xl sm:text-3xl font-semibold mb-2 flex-grow">
          {title}
        </p>
        <p className="text-xl font-medium">{speaker}</p>
        <p className="text-primary/85">{bio}</p>
      </div>
    </div>
  );
};
