"use client";

import { BlurIn } from "@/components/magicui/blur-in.tsx";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs.tsx";
import { useTranslations } from "next-intl";
import { useState } from "react";
import KosukeEnomoto from "../../../public/Kosuke_Enomoto.jpg";
import EricRuan from "../../../public/eric-ruan.webp";
import ShunYoshie from "../../../public/ShunYoshie.jpeg";
import SubinKim from "../../../public/Subin_Kim.png";
import ErnestChiang from "../../../public/Ernest_Chiang.jpg";
import TonyChung from "../../../public/Tony_Chung.jpeg";
import GordenWei from "../../../public/Gorden_Wei.jpg";
import SonuKim from "../../../public/Sonu_Kim.jpg";
import LisaJia from "../../../public/Lisa_Jia.jpg";
import DannyChan from "../../../public/Danny_Chan.jpg";
import KazukiMiura from "../../../public/Kazuki_Miura.png";
import MichaelHuang from "../../../public/Michael_Huang.jpg";
import ShiunChiu from "../../../public/Shiun_Chiu.jpg";
import YunaLin from "../../../public/Yuan_Lin.jpg";
import RichieLiu from "../../../public/Richie_Liu.jpg";
import HarryChung from "../../../public/Harry_Chung.jpg";
import EdwardOo from "../../../public/EdwardOo.jpg";
import { SectionTitle } from "@/components/section-title.tsx";
import { SectionHeading } from "@/components/section-heading.tsx";
import { SessionTable } from "@/components/session-table.tsx";
import { SessionType } from "@/lib/session.ts";

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
      title: t("eric.bedrock.title"),
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
      time: "10:30 ~ 11:00",
      type: "Track B",
      language: "English",
    },
    {
      title: "當遇到 IT 不管 Cloud 賬號該怎麼辦",
      speakers: [
        {
          name: "Edward Oo",
          image: EdwardOo,
          link: "https://www.linkedin.com/in/ookangzheng/",
          bio: "Taiwan",
        },
      ],
      time: "11:00 ~ 12:05",
      type: "Track B",
      language: "Mandarin",
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
      title: "見「證」巔峰 : Golden Jacket 得主的雲端技能養成術",
      speakers: [
        {
          name: "Coming soon...",
        },
      ],
      time: "13:00 ~ 13:40",
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
      title: "GenAI 圖像生成理論與運用",
      speakers: [
        {
          name: "Michael Huang",
          bio: "AWS Educate Cloud Ambassador, Taiwan",
          link: "https://www.linkedin.com/in/maoxun-huang-a77913268/",
          image: MichaelHuang,
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
          bio: "Hokkaido Television Broadcasting Co., Ltd. / AWS Community Hero, Japan",
          image: KazukiMiura,
        },
        {
          name: "Sonu Kim",
          bio: "Serverless Operations, Inc. / AWS Community Builder, Japan / Korea",
          image: SonuKim,
          link: "https://www.linkedin.com/in/sonukim/",
        },
      ],
      time: "16:30 ~ 17:00",
      type: "Track B",
      language: "English",
    },
    {
      time: "13:50 ~ 16:20",
      title: "生成式 AI 工作坊：用 SageMaker 打造 AI 心理測驗",
      type: "Workshop",
      language: "Mandarin",
      description: {
        "zh-Hant-Tw":
          "學習使用 SageMaker，從模型選擇、訓練到部署，親手打造一個模型！能夠分析測驗結果，以特定語氣提供個人化的測驗回饋，最後將這個模型整合至 AWS Educate 雲端大使所打造的心理測驗平台！把 AI 創意轉化為實際應用",
        en: "Learn to use SageMaker, from model selection, training, to deployment, and build a model hands-on! The model will be able to analyze quiz results and provide personalized feedback in a specific tone. Finally, integrate this model into the psychological testing platform built by AWS Educate Cloud Ambassadors! Turn AI creativity into practical applications.",
      },
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
    },
  ];

  const [selected, setSelected] = useState<SessionType["type"]>("Track A");

  const filteredSessions = sessions.filter((x) => x.type === selected);

  return (
    <div className="py-14 text-center md:container mx-auto relative">
      <SectionTitle>{t("title")}</SectionTitle>
      <SectionHeading className="text-balance">{t("heading")}</SectionHeading>
      <BlurIn delay={0.2}>
        <Tabs
          value={selected}
          onValueChange={(value) => setSelected(value as SessionType["type"])}
          className="mb-12 sticky top-0"
        >
          <TabsList className="rounded-full [&>button]:rounded-full border-black/5 border dark:bg-neutral-900">
            <TabsTrigger value="Track A">Track A</TabsTrigger>
            <TabsTrigger value="Track B">Track B</TabsTrigger>
            <TabsTrigger value="Workshop">{t("tabs.workshops")}</TabsTrigger>
          </TabsList>
        </Tabs>
      </BlurIn>
      <SessionTable type={selected} sessions={filteredSessions} />
    </div>
  );
};
