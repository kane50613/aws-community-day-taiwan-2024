import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "zh-Hant-Tw", "jp"] as const;

const messages: Record<(typeof locales)[number], any> = {
  en: {
    hero: {
      title: "AWS Community Day Taiwan 2024",
      banner: "We are looking for sponsors",
      description:
        "Connect with AWS experts and peers to learn, share, and innovate together.",
      register: "Register Now",
      date: "September 28, 2024 (Saturday)",
      location: "POPOP Taipei (Next to Nangang Station)",
    },
    metadata: {
      title: "AWS Community Day Taiwan 2024",
      description:
        "Connect with AWS experts and peers to learn, share, and innovate together.",
    },
    header: {
      register: "Register",
    },
    sponsors: {
      title: "Sponsors",
      heading: "We couldn't do it without you",
    },
    sessions: {
      title: "Sessions",
      heading: "More sessions coming soon - Stay tuned",
      notAvailable: "No sessions available at the moment.",
      keynoteAndPanel: "Keynote and Panel Discussion",
      comingSoon: "Coming soon",
      MandarinSess: "Mandarin Session",
      EnglishSess: "English Session",
      table: {
        title: "Title",
        time: "Time",
        speakers: "Speakers",
      },
      tabs: {
        main: "Main Track",
        workshops: "Workshops",
        lightning: "Lightning Talks",
      },
    },
    footer: {
      sponsor: {
        message: "Interested in sponsoring?",
        contact: "Contact Us",
        pricing: "View Sponsorship Packages",
        personal: "Personal",
        enterprise: "Enterprise",
      },
      copyright: "© 2024 AWS User Group Taiwan. All rights reserved.",
      translationDisclaimer:
        "Disclaimer: this page is translated by Generative AI, and content may be inaccurate.",
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
      date: "2024 年 09 月 28 日 (六)",
      location: "瓶蓋工廠台北製造所 (南港車站旁)",
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
      keynoteAndPanel: "主題演講與焦點論壇",
      comingSoon: "精彩議程 即將公開",
      MandarinSess: "中文議程",
      EnglishSess: "英語議程",
      table: {
        title: "標題",
        time: "時間",
        speakers: "講者",
      },
      tabs: {
        main: "主軸議程",
        workshops: "工作坊",
        lightning: "閃電講",
      },
    },
    footer: {
      sponsor: {
        message: "有興趣贊助嗎？",
        contact: "聯絡我們",
        pricing: "查看贊助方案",
        personal: "個人贊助",
        enterprise: "企業贊助",
      },
      copyright: "© 2024 AWS User Group Taiwan. All rights reserved.",
      translationDisclaimer: "",
      privacy: "隱私政策",
      terms: "服務條款",
    },
  },
  jp: {
    hero: {
      title: "AWS コミュニティデー台湾 2024",
      banner: "スポンサーを募集しています",
      description: "AWS の専門家や仲間とつながり、共に学び、共有し、革新する。",
      register: "今すぐ登録",
      date: "2024年9月28日（土）",
      location: "ボトルキャップファクトリー台北（南港駅隣接）",
    },
    metadata: {
      title: "AWS コミュニティデー台湾 2024",
      description: "AWS の専門家や仲間とつながり、共に学び、共有し、革新する。",
    },
    header: {
      register: "登録する",
    },
    sponsors: {
      title: "スポンサー",
      heading: "皆様のご支援なしでは実現できません",
    },
    sessions: {
      title: "セッション",
      heading: "さらなるセッションが近日公開 - お楽しみに",
      notAvailable: "現在、利用可能なセッションはありません。",
      keynoteAndPanel: "基調講演とパネルディスカッション",
      comingSoon: "エキサイティングなセッションが近日公開",
      MandarinSess: "中国語セッション",
      EnglishSess: "英語セッション",
      table: {
        title: "タイトル",
        time: "時間",
        speakers: "スピーカー",
      },
      tabs: {
        main: "メイントラック",
        workshops: "ワークショップ",
        lightning: "ライトニングトーク",
      },
    },
    footer: {
      sponsor: {
        message: "スポンサーにご興味がありますか？",
        contact: "お問い合わせ",
        pricing: "スポンサーシッププランを見る",
        personal: "個人協賛",
        enterprise: "企業協賛",
      },
      copyright: "© 2024 AWS User Group Taiwan. All rights reserved.",
      translationDisclaimer:
        "免責事項：このページは生成AIによって翻訳されており、内容が不正確である可能性があります。",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
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
