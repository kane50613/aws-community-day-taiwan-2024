import { SessionType } from "@/lib/session";

import SubinKim from "../../public/Subin_Kim.png";
import ErnestChiang from "../../public/Ernest_Chiang.jpg";
import TonyChung from "../../public/Tony_Chung.jpeg";
import GordenWei from "../../public/Gorden_Wei.jpg";
import SonuKim from "../../public/Sonu_Kim.jpg";
import KazukiMiura from "../../public/Kazuki_Miura.png";
import MichaelHuang from "../../public/Michael_Huang.jpg";
import EdwardOo from "../../public/EdwardOo.jpg";
import KimiHuang from "../../public/Kimi_Huang.jpg";
import ScottHsieh from "../../public/Scott_Hsieh.jpg";

export const trackBSessions: SessionType[] = [
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
    time: "10:35 ~ 11:05", 
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
    time: "11:10 ~ 11:40",
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
        name: "Kimi Huang",
        bio: "AUO Corporation / Principal Site Reliability Engineer, Taiwan",
        image: KimiHuang,
      },
      {
        name: "Scott Hsieh",
        bio: "104 Corporation / AWS Community Hero, Taiwan",
        image: ScottHsieh,
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
];
