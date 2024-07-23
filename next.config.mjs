// @ts-check
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  output: "export",
  trailingSlash: true,
};

export default withNextIntl(nextConfig);
