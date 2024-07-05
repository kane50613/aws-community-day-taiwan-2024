// @ts-check
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  output: "export",
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/zh-Hant-Tw/",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
