"use client";

import { BlurIn } from "@/components/magicui/blur-in";
import { m } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import React, { ReactNode, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import Link from "next/dist/client/link";
import Image from "next/image";
import KosukeEnomoto from "../../public/Kosuke_Enomoto.jpg";
import EricRuan from "../../public/eric-ruan.webp";
import ShunYoshie from "../../public/ShunYoshie.jpeg";
import SubinKim from "../../public/Subin_Kim.png";
import ErnestChiang from "../../public/Ernest_Chiang.jpg";
import TonyChung from "../../public/Tony_Chung.jpeg";
import ShiunChiu from "../../public/Shiun_Chiu.jpg";
import YunaLin from "../../public/Yuan_Lin.jpg";
import RichieLiu from "../../public/Richie_Liu.jpg";
import HarryChung from "../../public/Harry_Chung.jpg";
import GordenWei from "../../public/Gorden_Wei.jpg";
import SonuKim from "../../public/Sonu_Kim.jpg";
import LisaJia from "../../public/Lisa_Jia.jpg";
import DannyChan from "../../public/Danny_Chan.jpg";

type SessionType = {
  title: ReactNode;
  speakers: {
    name: string;
    bio?: string;
    link?: string;
    image?: any;
  }[];
  time: string;
  type: "Track A" | "Track B";
  language?: "Mandarin" | "English";
};

export const Sessions = () => {
  const t = useTranslations("sessions");
  const sessions: SessionType[] = [
    {
      title: t("keynoteAndPanel"),
      speakers: [
        {
          name: t("comingSoon"),
        },
      ],
      time: "9:30 ~ 11:30",
      type: "Track A",
    },
    {
      title: "cdk-appsync-starter - An AWS AppSync Framework based on CDK",
      speakers: [
        {
          name: "Titan Lin",
          bio: "Taiwan",
        },
      ],
      time: "12:10 ~ 12:50",
      type: "Track A",
      language: "Mandarin",
    },
    {
      title: "The Journey to localize AWS BuilderCards in Japan",
      speakers: [
        {
          name: "Kosuke Enomoto",
          bio: "AWS Community Builder / JAWS-UG Organizer, Japan",
          link: "https://www.linkedin.com/in/kosuke-enomoto/",
          image: KosukeEnomoto,
        },
      ],
      time: "13:00 ~ 13:40",
      type: "Track A",
      language: "English",
    },
    {
      title: "運用AWS技術打造智慧防災助手",
      speakers: [
        {
          name: "Eric Ruan",
          bio: "AWS Community Builder, Taiwan",
          link: "https://www.linkedin.com/in/ycjuan/",
          image: EricRuan,
        },
      ],
      time: "13:50 ~ 14:30",
      type: "Track A",
      language: "Mandarin",
    },
    {
      title: (
        <>
          Dive deep into serverless system design: <br />
          Event-driven, Decoupling, Real-world Practice
        </>
      ),
      speakers: [
        {
          name: "Danny Chan",
          bio: "AWS Community Builder, Hong Kong",
          link: "https://www.linkedin.com/in/danny-code/",
          image: DannyChan,
        },
        {
          name: "Lisa Jia",
          bio: "Entrepreneur, Hong Kong",
          image: LisaJia,
        },
      ],
      time: "15:40 ~ 16:20",
      type: "Track A",
      language: "Mandarin",
    },
    {
      title: "Behind the scenes of 24-hour global online event",
      speakers: [
        {
          name: "Shun Yoshie",
          bio: "AWS Security Hero, Japan",
          link: "https://www.linkedin.com/in/shun-yoshie-6aba9970/",
          image: ShunYoshie,
        },
      ],
      time: "15:40 ~ 16:20",
      type: "Track A",
      language: "English",
    },
    {
      title: "Lightning Talks",
      speakers: [
        {
          name: "",
        },
      ],
      time: "16:30 ~ 17:00",
      type: "Track A",
    },
    {
      title: "Slack Bot Gateway Development with AWS Lambda",
      speakers: [
        {
          name: "Subin Kim",
          image: SubinKim,
          link: "https://github.com/sudosubin",
          bio: "Korea",
        },
      ],
      time: "10:30 ~ 11:30",
      type: "Track B",
      language: "English",
    },
    {
      title: (
        <>
          隕石級 AI 來惹，來用 AWS 打造可升空的知識火箭
          <br /> 👉 知識整理、超速學習、順便看懂 AI
        </>
      ),
      speakers: [
        {
          name: "Ernest Chiang",
          bio: "AWS Community Hero, Taiwan",
          link: "https://www.ernestchiang.com/",
          image: ErnestChiang,
        },
      ],
      time: "12:10 ~ 12:50",
      type: "Track B",
      language: "Mandarin",
    },
    {
      title: "AWS Certification - 備考訓練營",
      speakers: [
        {
          name: "Coming soon...",
        },
      ],
      time: "13:50 ~ 14:30",
      type: "Track B",
      language: "Mandarin",
    },
    {
      title: "永續發展新機遇，資料策略提升企業效率",
      speakers: [
        {
          name: "Tony Chung",
          bio: "CKmates銓鍇國際 / AWS Ambassador / AWS Community Builder, Taiwan",
          image: TonyChung,
          link: "https://www.linkedin.com/in/tonychungwenche/",
        },
      ],
      time: "13:50 ~ 14:30",
      type: "Track B",
      language: "Mandarin",
    },
    {
      title: "GenAI 生圖輕鬆上手 Demo",
      speakers: [
        {
          name: "Shiun Chiu",
          bio: "AWS Educate Student Ambassador, Taiwan",
          image: ShiunChiu,
          link: "https://www.linkedin.com/in/shiunchiu/",
        },
        {
          name: "Yuna Lin",
          bio: "AWS Educate Student Ambassador, Taiwan",
          image: YunaLin,
          link: "https://www.linkedin.com/in/yuna-lin-851371286/",
        },
        {
          name: "Richie Liu",
          bio: "AWS Educate Student Ambassador, Taiwan",
          image: RichieLiu,
          link: "https://www.linkedin.com/in/rich-liu/",
        },
        {
          name: "Harry Chung",
          bio: "AWS Educate Student Ambassador, Taiwan",
          image: HarryChung,
          link: "https://www.linkedin.com/in/chih-han-chung-943950268/",
        },
      ],
      time: "14:50 ~ 15:30",
      type: "Track B",
      language: "Mandarin",
    },
    {
      title: "透過 AWS Bedrock 打造自己的專業知識庫",
      speakers: [
        {
          name: "Gorden Wei",
          bio: "iKala Cloud / AWS Community Builder, Taiwan",
          link: "https://www.kmp.tw/",
          image: GordenWei,
        },
      ],
      time: "15:40 ~ 16:20",
      type: "Track B",
      language: "Mandarin",
    },
    {
      title: "Case Study for Repurposing Video Content With Generative AI",
      speakers: [
        {
          name: "Kazuki Miura",
          bio: "Hokkaido Television Broadcasting Co., Ltd. / AWS Community Hero, Korea",
        },
        {
          name: "Sonu Kim",
          bio: "Serverless Operations, Inc. / AWS Community Builder, Korea",
          image: SonuKim,
          link: "https://www.linkedin.com/in/sonukim/",
        },
      ],
      time: "16:30 ~ 17:00",
      type: "Track B",
      language: "English",
    },
  ];
  const [selected, setSelected] = useState<SessionType["type"]>("Track A");
  const filteredSessions = sessions.filter((x) => x.type === selected);
  return (
    <div className="py-14 text-center container max-w-screen-xl mx-auto relative">
      <BlurIn component={m.span} className="text-xl font-medium">
        {t("title")}
      </BlurIn>
      <BlurIn
        component={m.h2}
        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 py-1.5"
      >
        {t("heading")}
      </BlurIn>
      <BlurIn delay={0.2}>
        <Tabs
          value={selected}
          onValueChange={(value) => setSelected(value as SessionType["type"])}
          className="mb-12 sticky top-0"
        >
          <TabsList className="rounded-full [&>button]:rounded-full border-black/5 border dark:bg-neutral-900">
            <TabsTrigger value="Track A">Track A</TabsTrigger>
            <TabsTrigger value="Track B">Track B</TabsTrigger>
          </TabsList>
        </Tabs>
      </BlurIn>
      {filteredSessions.length ? (
        <Table className="text-start">
          <TableHeader>
            <TableRow>
              <TableHead>{t("table.time")}</TableHead>
              <TableHead>{t("table.title")}</TableHead>
              <TableHead>{t("table.speakers")}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sessions
              .filter((session) => session.type === selected)
              .map((session, i) => (
                <SessionRow session={session} key={i} />
              ))}
          </TableBody>
        </Table>
      ) : (
        <span className="text-primary/75 text-sm">{t("notAvailable")}</span>
      )}
    </div>
  );
};

const SessionRow = ({ session }: { session: SessionType }) => {
  const t = useTranslations("sessions");
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
            <Link
              href={speaker.link ?? "#"}
              rel="noopener noreferrer"
              key={"speaker-link-" + index}
              target={speaker.link ? "_blank" : "_self"}
              onClick={(e) => {
                if (!speaker.link) return e.preventDefault();
              }}
            >
              <div className="flex gap-4">
                {speaker.image && (
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    unoptimized
                    className="h-[3lh] object-contain w-auto rounded-full"
                  />
                )}
                <div className="flex flex-col justify-center">
                  <p key={index}>{speaker.name}</p>
                  <i key={"speaker-title-" + index} className="text-primary/75">
                    {speaker.bio}
                  </i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </TableCell>
    </TableRow>
  );
};
