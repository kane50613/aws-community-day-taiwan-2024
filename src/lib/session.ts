import { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { IntlLocale } from "@/i18n.ts";

export type SessionType = {
  title: ReactNode;
  speakers: {
    name: string;
    bio?: string;
    link?: string;
    image?: StaticImageData;
  }[];
  time: string;
  type: "Track A" | "Track B" | "Workshop";
  description?: string | Partial<Record<IntlLocale, string>>;
  language?: "Mandarin" | "English";
};
