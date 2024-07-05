import BlurIn from "@/components/magicui/blur-in.tsx";
import { m } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { i18next } from "@/lib/i18n.ts";

export const Sessions = () => (
  <div className="py-14 text-center container max-w-screen-xl mx-auto relative">
    <BlurIn component={m.span} className="text-xl font-medium">
      {i18next.t("sessions:title")}
    </BlurIn>
    <BlurIn
      component={m.h2}
      className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 py-1.5"
    >
      {i18next.t("sessions:heading")}
    </BlurIn>
    <BlurIn delay={0.2}>
      <Tabs defaultValue="main" className="mb-12 sticky top-0">
        <TabsList className="rounded-full [&>button]:rounded-full border-black/5 border dark:bg-neutral-900">
          <TabsTrigger value="main">Main</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>
          <TabsTrigger value="lightning-talks">Lightning Talks</TabsTrigger>
        </TabsList>
      </Tabs>
    </BlurIn>
    <span className="text-primary/75 text-sm">No sessions available yet.</span>
  </div>
);
