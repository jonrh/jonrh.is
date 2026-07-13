/** @jsxRuntime automatic */
/** @jsxImportSource preact */

import { readFileSync } from "node:fs";

/**
 * All CSS is read from the /css/ source files at build time and concatenated
 * into a single inline <style> below, so every page ships its styles in the
 * same request with no extra round-trips. modern-normalize (the reset) comes
 * first, then the global styles, then layout. Paths resolve relative to this
 * module so the build works regardless of the working directory.
 */
const css = [
  "../css/modern-normalize.css",
  "../css/jonrh.css",
  "../css/layout.css",
]
  .map((path) => readFileSync(new URL(path, import.meta.url), "utf8"))
  .join("\n");

/**
 * Base HTML document with the header and navigation. Every page renders into
 * data.content, which is a pre-rendered HTML string injected below.
 */
export default function (data) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{data.title}</title>
        <meta name="author" content="Jón Rúnar Helgason" />
        {data.metaDescription && (
          <meta name="description" content={data.metaDescription} />
        )}
        <style dangerouslySetInnerHTML={{ __html: css }} />
      </head>
      <body>
        <div>
          <div class="header">
            <a href="/">
              <picture>
                <source
                  srcset="/jon-runar-helgason-2026.webp"
                  type="image/webp"
                />
                <img
                  src="/jon-runar-helgason-2026.png"
                  alt="Profile of Jón Rúnar Helgason"
                />
              </picture>
            </a>

            <a href="/" class="profileName">
              Jón Rúnar Helgason
            </a>
          </div>

          <div class="container">
            <nav>
              <ul>
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/tools">Tools</a>
                </li>
                <li>
                  <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </nav>

            <main dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </body>
    </html>
  );
}
