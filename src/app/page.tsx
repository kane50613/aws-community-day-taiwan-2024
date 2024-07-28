import Head from "next/head";
import MainPage from "./[locale]/page.tsx";

export { generateMetadata } from "./[locale]/page.tsx";

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "AWS Community Day Taiwan 2024",
  description:
    "AWS Community Day Taiwan 是由 AWS User Group Taiwan 社群夥伴們一同號召發起的年度社群活動，這是一場能夠讓大家透過交流活動增進自我、學習成長、聯繫認識的重要機會！",
  startDate: "2024-09-28T09:30:00+08:00",
  endDate: "2024-09-28T17:30:00+08:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "瓶蓋工廠台北製造所",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 13, Sec. 2, Nangang Rd., Nangang Dist.",
      addressLocality: " Taipei City",
      postalCode: "115",
      addressRegion: "TW",
      addressCountry: "TW",
    },
  },
  image: ["https://awscmd.tw/assets/img/og-1200x630.png"],
  offers: {
    "@type": "Offer",
    url: "https://awscmd.tw",
    price: "0",
    priceCurrency: "TWD",
    availability: "https://schema.org/InStock",
    validFrom: "2024-04-15",
  },
  performer: {
    "@type": "PerformingGroup",
    name: "AWS User Group Taiwan",
  },
  organizer: {
    "@type": "Organization",
    name: "AWS User Group Taiwan",
    url: "https://www.facebook.com/groups/286709044738947",
  },
};

export default function Page() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }}
        />
      </Head>
      {/* hacky way to set the default locale */}
      <MainPage params={{ locale: "zh-Hant-Tw" }} />
    </>
  );
}
