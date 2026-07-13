# AGENTS.md

This file provides guidance to AI coding agents (Claude Code, Codex, and similar tools) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Start 11ty development server with live reload
- **Build**: `npm run build` - Build the static site into `/_site/`
- **Format code**: `npx prettier --write .` - Format all code with Prettier
- **Lint staged**: `npx lint-staged` - Run Prettier on staged files (used in pre-commit hook)

## Project Architecture

This is a static personal website built with [11ty](https://www.11ty.dev/) (Eleventy), hosted on Vercel. Pages and layouts are Preact JSX; blog posts are Markdown.

### JSX templating

Pages and layouts are `.11ty.jsx` files following 11ty's [official JSX approach](https://www.11ty.dev/docs/languages/jsx/). The `11ty.jsx` extension is registered in `eleventy.config.js`: `tsx` transpiles the JSX on import, each template's default export returns a Preact element, and `preact-render-to-string` serializes it to a static HTML string at build time. **No React and no client-side JavaScript is shipped** — Preact is used only as a build-time renderer in place of the docs' `react-dom/server`.

- Every `.11ty.jsx` file starts with the pragmas `/** @jsxRuntime automatic */` and `/** @jsxImportSource preact */` so `tsx` transpiles to Preact's runtime rather than React's (tsx does not read a `tsconfig.json` here, so the pragmas are required per file).
- Templates export `data` (front matter: `layout`, `title`, `metaDescription`, etc.) and a default function returning the JSX body.
- Pre-rendered HTML (a layout's child content, or Markdown output) is injected with `dangerouslySetInnerHTML`.
- `preact-render-to-string` does not emit a doctype, so the extension prepends `<!doctype html>` to the one render that starts with `<html>` (the base layout).

### Core Structure

- **Content**: 11ty input directory is `/content/`, output routes mirror it
  - `index.11ty.jsx` - Homepage
  - `blog.11ty.jsx` - Blog listing page with hardcoded post links
  - Individual blog posts as folders with `index.md` files
  - Static pages: `about.11ty.jsx`, `portfolio.11ty.jsx`, `tools.11ty.jsx`
- **Layouts**: JSX templates in `/_includes/`
  - `layout.11ty.jsx` - Base HTML document with header and navigation
  - `post.11ty.jsx` - Blog post template with SEO validation, chains into `layout.11ty.jsx`
- **Styling**: CSS source files in `/css/` (`modern-normalize.css` is the vendored, minified reset), read and concatenated into a single inline `<style>` at build time by `layout.11ty.jsx` — not served as separate stylesheets
- **Static assets**: Images and files in `/public/`, copied to the output root

### Content Management

- Blog posts are individual Markdown files in `/content/[post-name]/index.md`
- Each post declares `layout: post.11ty.jsx` and the `title`, `dateDisplay`, `metaDescription`, and `sourceFile` front matter keys
- A Markdown post renders to HTML and is injected into the JSX `post.11ty.jsx` layout, which chains into `layout.11ty.jsx`
- Meta descriptions are validated (50-160 characters) during build by `post.11ty.jsx`, which throws to fail the build if invalid
- Markdown is not preprocessed by a template engine (`markdownTemplateEngine: false`), so template-like syntax in code blocks is safe; use plain HTML in posts for dithered images
- Images co-located with a post (`/content/[post-name]/*.png`) are passthrough copied next to the page
- Blog listing in `blog.11ty.jsx` is manually maintained with hardcoded links
- Old music mix posts are hidden from the blog listing (see comment in `blog.11ty.jsx`) but remain publicly accessible

### Image Handling

Dithered images link to their full-colour original. `portfolio.11ty.jsx` defines a local `Dither` component (colour `image.png` → `image-dither.png`); Markdown posts use the equivalent plain `<a><img></a>` HTML. The dithering workflow is described in readme.md:

- Most previews are 2-color dithered PNGs using #000000 to #ff7b00 gradient
- Screenshots use 32 colors with pattern dithering
- Original and dithered versions often coexist

### Code Formatting

All code is formatted with Prettier using default settings. Pre-commit hooks automatically format staged files via lint-staged. Markdown posts and `content/tools.11ty.jsx` (hand-formatted for density) are not Prettier-formatted (see `.prettierignore`).

## Key Files

- `eleventy.config.js` - 11ty configuration: the `11ty.jsx` extension (tsx + preact-render-to-string), directories, passthrough copies
- `vercel.json` - Vercel build command, output directory, and trailing slash behaviour
- `package.json` - Dependencies and npm scripts
- `.husky/pre-commit` - Git hook that runs lint-staged
