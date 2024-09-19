import ShiunChiu from "../../public/Shiun_Chiu.jpg";
import YunaLin from "../../public/Yuan_Lin.jpg";
import RichieLiu from "../../public/Richie_Liu.jpg";
import HarryChung from "../../public/Harry_Chung.jpg";
import ScottHsieh from "../../public/Scott_Hsieh.jpg";
import { SessionType } from "@/lib/session";

const awsEducateAmbassador = [
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
];

export const workshopSessions: SessionType[] = [
  {
    time: "12:10 ~ 12:50",
    title: "世界咖啡館",
    type: "Workshop",
    language: "Mandarin",
    speakers: awsEducateAmbassador,
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
    speakers: awsEducateAmbassador,
  },
  {
    time: "14:50 ~ 17:00",
    title: "Amazon Athena：初識雅典娜，連結智慧的火炬",
    type: "Workshop",
    language: "Mandarin",
    description:
      "這場工作坊中，你能夠迅速地認識、操作 Amazon Athena 的基礎和進階功能，包括基礎知識、聯合查詢、用戶定義的函數查詢（UDFs）、事務型資料湖的建置與查詢、透過 Amazon Athena 施展機器學習的能力到 Apache Spark 的使用。更好地認識 Amazon Athena 之後，在變化多端的世界裡頭，針對資料洞見，你就能有更多的手段去達成你的目的。認識完 Athena 再回去黑悟空，簡直完美！",
    speakers: [
      {
        name: "Scott Hsieh",
        bio: "Data Architect in 104, AWS Data Hero",
        image: ScottHsieh,
      },
    ],
  },
];
