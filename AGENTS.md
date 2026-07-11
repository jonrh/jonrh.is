# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Start 11ty development server with live reload
- **Build**: `npm run build` - Build the static site into `/_site/`
- **Format code**: `npx prettier --write .` - Format all code with Prettier
- **Lint staged**: `npx lint-staged` - Run Prettier on staged files (used in pre-commit hook)

## Project Architecture

This is a static personal website built with [11ty](https://www.11ty.dev/) (Eleventy), hosted on Vercel.

### Core Structure

- **Content**: 11ty input directory is `/content/`, output routes mirror it
  - `index.njk` - Homepage
  - `blog.njk` - Blog listing page with hardcoded post links
  - Individual blog posts as folders with `index.md` files
  - Static pages: `about.njk`, `portfolio.njk`, `tools.njk`
- **Layouts**: Nunjucks templates in `/_includes/`
  - `layout.njk` - Base HTML document with header and navigation
  - `post.njk` - Blog post template with SEO validation, wraps `layout.njk`
- **Shortcodes**: `lib/dither.js` - the `{% dither %}` shortcode for dithered images
- **Styling**: CSS files in `/css/`, copied through to `/css/` on the site
- **Static assets**: Images and files in `/public/`, copied to the output root

### Content Management

- Blog posts are individual Markdown files in `/content/[post-name]/index.md`
- Each post declares `layout: post.njk` and the `title`, `dateDisplay`, `metaDescription`, and `sourceFile` front matter keys
- Meta descriptions are validated (50-160 characters) during build via the `validateMetaDescription` filter in `eleventy.config.js`
- Markdown is not preprocessed by a template engine (`markdownTemplateEngine: false`), so template-like syntax in code blocks is safe; use plain HTML in posts for dithered images
- Images co-located with a post (`/content/[post-name]/*.png`) are passthrough copied next to the page
- Blog listing in `blog.njk` is manually maintained with hardcoded links
- Old music mix posts are hidden from the blog listing (see comment in `blog.njk`) but remain publicly accessible

### Image Handling

Images follow a dithering workflow described in readme.md:

- Most previews are 2-color dithered PNGs using #000000 to #ff7b00 gradient
- Screenshots use 32 colors with pattern dithering
- Original and dithered versions often coexist

### Code Formatting

All code is formatted with Prettier using default settings. Pre-commit hooks automatically format staged files via lint-staged. Markdown posts and `.njk` templates are not Prettier-formatted (see `.prettierignore`).

## Key Files

- `eleventy.config.js` - 11ty configuration: directories, passthrough copies, shortcodes, filters
- `vercel.json` - Vercel build command, output directory, and trailing slash behaviour
- `package.json` - Dependencies and npm scripts
- `.husky/pre-commit` - Git hook that runs lint-staged
