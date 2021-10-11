const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "md", "mdx"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  }
});