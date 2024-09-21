import { SessionType } from "@/lib/session";
import { useTranslations } from "next-intl";

import KosukeEnomoto from "../../public/Kosuke_Enomoto.jpg";
import EricRuan from "../../public/eric-ruan.webp";
import ShunYoshie from "../../public/ShunYoshie.jpeg";
import LisaJia from "../../public/Lisa_Jia.jpg";
import DannyChan from "../../public/Danny_Chan.jpg";

export const getTrackASessions: (
  sessionT: ReturnType<typeof useTranslations>,
  panelDiscussionT: ReturnType<typeof useTranslations>
) => SessionType[] = (sessionT, panelDiscussionT) => [
  {
    title: sessionT("keynote"),
    speakers: [],
    time: "9:30 ~ 10:30",
    type: "Track A",
  },
  {
    title: panelDiscussionT("title"),
    speakers: [],
    time: "10:35 ~ 11:40",
    type: "Track A",
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
    title: sessionT("eric.bedrock.title"),
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
    title: "cdk-3factor-app: A 3factor app framework based on CDK",
    speakers: [
      {
        name: "Titan Lin",
        bio: "Taiwan",
      },
    ],
    time: "14:50 ~ 15:30",
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
    speakers: [],
    time: "16:30 ~ 17:00",
    type: "Track A",
  },
];
