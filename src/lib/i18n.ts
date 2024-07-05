import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

await i18next.use(I18nextBrowserLanguageDetector).init({
  ns: ["hero", "header"],
  fallbackLng: "zhTw",
  supportedLngs: ["zhTw", "en", "jp"],
  resources: {
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
      sessions: {
        title: "Sessions",
        heading: "Learn from the best in the industry",
        notAvailable: "No sessions available yet.",
      },
    },
    zhTw: {
      hero: {
        title: "AWS 開發者社群活動",
        banner: "我們正在尋找贊助商",
        description: "與 AWS 專家和同行建立聯繫。一起學習、分享和創新。",
        register: "立即報名",
      },
      header: {
        register: "我要報名",
      },
      sessions: {
        title: "議程",
        heading: "向業界最佳學習",
        notAvailable: "目前尚無議程。",
      },
    },
  },
});

export { i18next };
