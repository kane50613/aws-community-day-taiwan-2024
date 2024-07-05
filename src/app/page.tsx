import MainPage from "./[locale]/page.tsx";
export { generateMetadata } from "./[locale]/page.tsx";

export default function Page() {
  // hacky way to set the default locale
  return <MainPage params={{ locale: "zh-Hant-Tw" }} />;
}
