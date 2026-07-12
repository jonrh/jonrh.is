// Registers a Node loader that transpiles JSX/TS on import. Must run before
// any .11ty.jsx template is imported below.
import "tsx/esm";
import { render as renderToStaticMarkup } from "preact-render-to-string";

export default function (eleventyConfig) {
  // Preact JSX templates (.11ty.jsx), following 11ty's official JSX approach:
  // https://www.11ty.dev/docs/languages/jsx/
  // Every page and layout is JSX. tsx transpiles the JSX on import, the
  // template's default export returns a Preact element, and
  // preact-render-to-string serializes it to a static HTML string at build
  // time. No React and no client-side JavaScript is shipped. Preact is used
  // in place of the docs' react-dom/server so the site stays React-free.
  //
  // preact-render-to-string does not emit a doctype, so it is prepended for
  // the one template whose output is a full document (the base layout, the
  // only render that starts with <html>). Page and layout-fragment renders
  // start with other tags and are passed through unchanged.
  eleventyConfig.addTemplateFormats("11ty.jsx");
  eleventyConfig.addExtension("11ty.jsx", {
    key: "11ty.js",
    compile: function () {
      return async function (data) {
        const content = await this.defaultRenderer(data);
        const html = renderToStaticMarkup(content);
        return html.startsWith("<html") ? "<!doctype html>" + html : html;
      };
    },
  });

  // Static assets served as-is from the output root, same as Next.js /public
  eleventyConfig.addPassthroughCopy({ "public/": "/" });
  eleventyConfig.addPassthroughCopy({ "css/": "/css/" });

  // Images co-located with blog posts, copied next to the generated page
  eleventyConfig.addPassthroughCopy("content/**/*.png");

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
  };
}
