import { dither } from "./lib/dither.js";

export default function (eleventyConfig) {
  // Static assets served as-is from the output root, same as Next.js /public
  eleventyConfig.addPassthroughCopy({ "public/": "/" });
  eleventyConfig.addPassthroughCopy({ "css/": "/css/" });

  // Images co-located with blog posts, copied next to the generated page
  eleventyConfig.addPassthroughCopy("content/**/*.png");

  // A dithered image that links to the original source image in colour
  eleventyConfig.addShortcode("dither", dither);

  // Used on the about page to compute years of experience at build time
  eleventyConfig.addGlobalData("currentYear", () =>
    new Date().getUTCFullYear(),
  );

  // Ensure that each post has a meta description for better SEO. If the
  // checks fail an error will be thrown and the build will fail. This
  // ensures that a change can not be accidentally deployed. Used by the
  // post.njk layout.
  eleventyConfig.addFilter(
    "validateMetaDescription",
    (metaDescription, title, date) => {
      if (!metaDescription) {
        throw new Error(
          `Meta description is missing. Post: ${title}, date: ${date}.`,
        );
      }

      if (metaDescription.length < 50 || metaDescription.length > 160) {
        throw new Error(
          `Meta description is ${metaDescription.length} characters, ` +
            `should be 50-160. Post: ${title}.`,
        );
      }

      return "";
    },
  );

  return {
    dir: {
      input: "content",
      includes: "../_includes",
      output: "_site",
    },

    // Blog posts are plain Markdown. No template preprocessing so that code
    // examples containing template syntax (for example ${{ github.sha }} in
    // GitHub Action YAML) are never accidentally interpreted.
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
