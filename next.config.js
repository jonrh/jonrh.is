const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const nextConfig = {
  pageExtensions: ["js", "md", "mdx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
};

const nextConfigWithMDX = withMDX(nextConfig);

module.exports = nextConfigWithMDX;