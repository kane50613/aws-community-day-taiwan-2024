// @ts-check
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/2024"
};

export default withNextIntl(nextConfig);
