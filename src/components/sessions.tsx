"use client";

import { BlurIn } from "@/components/magicui/blur-in";
import { m } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslations } from "next-intl";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

type SessionType = {
  title: string;
  speakers: {
    name: string;
    bio?: string;
  }[];
  time: string;
  type: "Track A" | "Track B";
};

const sessions: SessionType[] = [
  // {
  //   title: "cdk-appsync-starter - An AWS AppSync Framework based on CDK",
  //   speakers: [
  //     {
  //       name: "Titan Lin",
  //     },
  //   ],
  //   time: "12:10 ~ 12:50",
  //   type: "Track A",
  // },
  {
    title: "The Journey to localize AWS BuilderCards in Japan",
    speakers: [
      {
        name: "Kosuke Enomoto",
      },
    ],
    time: "13:00 ~ 13:40",
    type: "Track A",
  },
  {
    title: "運用AWS技術打造智慧防災助手",
    speakers: [
      {
        name: "Eric Ruan",
      },
    ],
    time: "13:50 ~ 14:30",
    type: "Track A",
  },
  {
    title: "Behind the scenes of 24-hour global online event",
    speakers: [
      {
        name: "Shun Yoshie",
      },
    ],
    time: "15:40 ~ 16:20",
    type: "Track A",
  },
  {
    title:
      "隕石級 AI 來惹，來用 AWS 打造可升空的知識火箭 👉 知識整理、超速學習、順便看懂 AI",
    speakers: [
      {
        name: "Ernest Chiang",
      },
    ],
    time: "12:10 ~ 12:50",
    type: "Track B",
  },
  {
    title: "永續發展新機遇，資料策略提升企業效率",
    speakers: [
      {
        name: "Tony Chung",
        bio: "CKmates銓鍇國際 / AWS Ambassador / AWS Community Builder",
      },
    ],
    time: "13:50 ~ 14:30",
    type: "Track B",
  },
  {
    title: "GenAI 生圖輕鬆上手 Demo",
    speakers: [
      {
        name: "AWS Educate Student Ambassadors",
      },
    ],
    time: "14:50 ~ 15:30",
    type: "Track B",
  },
  {
    title: "透過 AWS Bedrock 打造自己的專業知識庫",
    speakers: [
      {
        name: "Gorden Wei",
      },
    ],
    time: "15:40 ~ 16:20",
    type: "Track B",
  },
];

export const Sessions = () => {
  const t = useTranslations("sessions");

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

const SessionRow = ({ session }: { session: SessionType }) => (
  <TableRow>
    <TableCell className="text-base">{session.time}</TableCell>
    <TableCell className="text-lg font-semibold">{session.title}</TableCell>
    <TableCell className="space-y-1">
      {session.speakers.map((x) => (
        <p key={x.name}>{x.name}</p>
      ))}
    </TableCell>
  </TableRow>
);
