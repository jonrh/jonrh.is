/** @jsxRuntime automatic */
/** @jsxImportSource preact */

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
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/jonrh.css" />
        <link rel="stylesheet" href="/css/layout.css" />
      </head>
      <body>
        <div>
          <div class="header">
            <a href="/">
              <picture>
                <source
                  srcset="/images/jon-runar-helgason-2026.webp"
                  type="image/webp"
                />
                <img
                  src="/images/jon-runar-helgason-2026.png"
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
