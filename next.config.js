const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["js", "md", "mdx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  // Highlight unsafe React lifecycles, legacy APIs, etc. in dev mode.
  reactStrictMode: true,
};

const nextConfigWithMDX = withMDX(nextConfig);

module.exports = nextConfigWithMDX;