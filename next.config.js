const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ["js", "md", "mdx"],
  future: {
    webpack5: true,
  },
});