import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "zh-Hant-Tw"];

const messages: Record<(typeof locales)[number], any> = {
  en: {
    hero: {
      title: "The Community Event for AWS Builders",
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
        pricing: "Inquire for pricing",
      },
      copyright: "© 2024 AWS User Group, not affiliated with Amazon",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  "zh-Hant-Tw": {
    hero: {
      title: "AWS 開發者社群活動",
      banner: "我們正在尋找贊助商",
      description: "與 AWS 專家和同行建立聯繫。一起學習、分享和創新。",
      register: "立即報名",
    },
    metadata: {
      title: "AWS Community Day Taiwan 2024",
      description: "與 AWS 專家和同行建立聯繫。一起學習、分享和創新。",
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
      heading: "向業界最佳學習",
      notAvailable: "目前尚無議程。",
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
        pricing: "詢問報價",
      },
      copyright: "© 2024 AWS User Group 與 Amazon 無關",
      privacy: "隱私政策",
      terms: "服務條款",
    },
  },
};

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: messages[locale],
  };
});
