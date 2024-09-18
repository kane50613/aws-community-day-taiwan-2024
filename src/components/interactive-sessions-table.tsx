"use client";

import { SessionType } from "@/lib/session";
import { useState } from "react";
import { BlurIn } from "./magicui/blur-in";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SessionTable } from "./session-table";

export const InteractiveSessionsTable = ({
  sessions,
  workshopLabel,
}: {
  sessions: SessionType[];
  workshopLabel: string;
}) => {
  const [selected, setSelected] = useState<SessionType["type"]>("Track A");

  const filteredSessions = sessions.filter((x) => x.type === selected);

  return (
    <>
      <BlurIn delay={0.2}>
        <Tabs
          value={selected}
          onValueChange={(value) => setSelected(value as SessionType["type"])}
          className="mb-12 sticky top-0"
        >
          <TabsList className="rounded-full [&>button]:rounded-full border-muted/30 border dark:bg-neutral-950">
            <TabsTrigger value="Track A">Track A</TabsTrigger>
            <TabsTrigger value="Track B">Track B</TabsTrigger>
            <TabsTrigger value="Workshop">{workshopLabel}</TabsTrigger>
          </TabsList>
        </Tabs>
      </BlurIn>
      <SessionTable type={selected} sessions={filteredSessions} />
    </>
  );
};
