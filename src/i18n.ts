import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "zh-Hant-Tw", "jp"] as const;

const messages: Record<(typeof locales)[number], any> = {
  en: {
    hero: {
      title: "AWS Community Day Taiwan 2024",
      banner: "Seeking sponsors for our event",
      description:
        "Connect with AWS experts and peers. Learn, share, and innovate together.",
      register: "Register Now",
    },
    header: {
      register: "Register",
    },
    metadata: {
      title: "AWS Community Day Taiwan 2024",
      description:
        "Connect with AWS experts and peers. Learn, share, and innovate together.",
    },
    sessions: {
      title: "Sessions",
      heading: "Learn from the best in the industry",
      notAvailable: "No sessions available yet.",
      table: {
        title: "Title",
        time: "Time",
        speakers: "Speakers",
      },
      tabs: {
        main: "Main",
        workshops: "Workshops",
        lightning: "Lightning Talks",
      },
    },
    sponsors: {
      title: "Sponsors",
      heading: "We couldn't do it without you",
    },
    footer: {
      sponsor: {
        message: "Interested in sponsoring?",
        contact: "Contact Us",
        pricing: "View Pricing",
      },
      copyright: "© 2024 AWS User Group Taiwan. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  "zh-Hant-Tw": {
    hero: {
      title: "AWS Community Day Taiwan 2024",
      banner: "我們正在尋找贊助商",
      description: "與 AWS 專家和同行建立聯繫，一起學習、分享和創新。",
      register: "立即報名",
    },
    metadata: {
      title: "AWS Community Day Taiwan 2024",
      description: "與 AWS 專家和同行建立聯繫，一起學習、分享和創新。",
    },
    header: {
      register: "我要報名",
    },
    sponsors: {
      title: "贊助商",
      heading: "沒有您，我們無法做到",
    },
    sessions: {
      title: "議程",
      heading: "更多議程，即將公開 - 敬請期待",
      notAvailable: "目前尚無議程。",
      table: {
        title: "標題",
        time: "時間",
        speakers: "講者",
      },
      tabs: {
        main: "主軸議程",
        workshops: "工作坊",
        lightning: "閃電聊",
      },
    },
    footer: {
      sponsor: {
        message: "有興趣贊助嗎？",
        contact: "聯絡我們",
        pricing: "查看贊助方案",
      },
      copyright: "© 2024 AWS User Group Taiwan. All rights reserved.",
      privacy: "隱私政策",
      terms: "服務條款",
    },
  },
  jp: {
    hero: {
      title: "AWS Community Day Taiwan 2024",
      banner: "イベントのスポンサーを募集中",
      description:
        "AWS の専門家や仲間とつながりましょう。一緒に学び、共有し、革新しましょう。",
      register: "今すぐ登録",
    },
    metadata: {
      title: "AWS Community Day Taiwan 2024",
      description:
        "AWS の専門家や仲間とつながりましょう。一緒に学び、共有し、革新しましょう。",
    },
    header: {
      register: "登録",
    },
    sponsors: {
      title: "スポンサー",
      heading: "あなたなしではできません",
    },
    sessions: {
      title: "セッション",
      heading: "業界のベストから学ぶ",
      notAvailable: "現在セッションはありません。",
      table: {
        title: "タイトル",
        time: "時間",
        speakers: "スピーカー",
      },
      tabs: {
        main: "メイン",
        workshops: "ワークショップ",
        lightning: "ライトニングトーク",
      },
    },
    footer: {
      sponsor: {
        message: "スポンサーに興味がありますか？",
        contact: "お問い合わせ",
        pricing: "価格を見る",
      },
      privacy: "プライバシーポリシー",
      terms: "利用規約",
      copyright: "© 2024 AWS User Group Taiwan. All rights reserved.",
    },
  },
};

export default getRequestConfig(async ({ locale }) => {
  const message = messages[locale as keyof typeof messages];

  // Validate that the incoming `locale` parameter is valid
  if (!message) notFound();

  return {
    messages: message,
  };
});
