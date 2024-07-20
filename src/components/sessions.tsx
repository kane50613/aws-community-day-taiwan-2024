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
import Image from "next/image";

type SessionType = {
  title: string;
  speakers: {
    name: string;
    bio: string;
    image: string;
  }[];
  time: string;
  duration: string;
  type: "main" | "workshop" | "lightning";
};

const sessions: SessionType[] = [
  // {
  //   title: "Keynote",
  //   speakers: [
  //     {
  //       name: "John Doe",
  //       bio: "CEO of Company",
  //       image: "https://via.placeholder.com/150",
  //     },
  //   ],
  //   time: "9:00 AM",
  //   duration: "30 minutes",
  //   type: "main",
  // },
  // {
  //   title: "How to build a website",
  //   speakers: [
  //     {
  //       name: "John Doe",
  //       bio: "CEO of Company",
  //       image: "https://via.placeholder.com/150",
  //     },
  //   ],
  //   time: "10:00 AM",
  //   duration: "30 minutes",
  //   type: "main",
  // },
];

export const Sessions = () => {
  const t = useTranslations("sessions");

  const [selected, setSelected] = useState("main");

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
          onValueChange={setSelected}
          className="mb-12 sticky top-0"
        >
          <TabsList className="rounded-full [&>button]:rounded-full border-black/5 border dark:bg-neutral-900">
            <TabsTrigger value="main">{t("tabs.main")}</TabsTrigger>
            <TabsTrigger value="workshops">{t("tabs.workshops")}</TabsTrigger>
            <TabsTrigger value="lightning-talks">
              {t("tabs.lightning")}
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </BlurIn>
      {filteredSessions.length ? (
        <Table className="text-start">
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Speakers</TableHead>
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
    <TableCell className="text-base">
      {session.time} • {session.duration}
    </TableCell>
    <TableCell className="text-lg font-semibold">{session.title}</TableCell>
    <TableCell className="flex flex-col">
      {session.speakers.map((x) => (
        <div key={x.name} className="flex items-center gap-2">
          <Image
            src={x.image}
            alt={x.name}
            className="w-8 h-8 rounded-full border-2"
            width={150}
            height={150}
            unoptimized
          />
          <div>
            <p>{x.name}</p>
          </div>
        </div>
      ))}
    </TableCell>
  </TableRow>
);
