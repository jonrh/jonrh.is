# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Start Next.js development server
- **Build**: `npm run build` - Build production version
- **Production server**: `npm start` - Start production server after build
- **Format code**: `npx prettier --write .` - Format all code with Prettier
- **Lint staged**: `npx lint-staged` - Run Prettier on staged files (used in pre-commit hook)

## Project Architecture

This is a static personal website built with Next.js and React, hosted on Vercel.

### Core Structure

- **Pages**: Next.js file-based routing in `/pages/`
  - `index.js` - Homepage
  - `blog.js` - Blog listing page with hardcoded post links
  - Individual blog posts as folders with `index.mdx` files
  - Static pages: `about.js`, `portfolio.js`, `tools.js`
- **Components**: Reusable React components in `/components/`
  - `layout/index.js` - Main layout wrapper with header and navigation
  - `Post.js` - Blog post template with SEO validation
  - `Dither.js` - Image dithering utility
- **Styling**: CSS files in `/css/` and component-level CSS
- **Static assets**: Images and files in `/public/`

### Content Management

- Blog posts are individual MDX files in `/pages/[post-name]/index.mdx`
- Each MDX post is wrapped with the `Post` component and must include the `title`, `path`, `date`, and `metaDescription` props
- Meta descriptions are validated (50-160 characters) during build
- Blog listing in `blog.js` is manually maintained with hardcoded links
- Hidden posts array excludes old music mix posts from blog listing

### Image Handling

Images follow a dithering workflow described in README.md:

- Most previews are 2-color dithered PNGs using #000000 to #ff7b00 gradient
- Screenshots use 32 colors with pattern dithering
- Original and dithered versions often coexist

### Code Formatting

All code is formatted with Prettier using default settings. Pre-commit hooks automatically format staged files via lint-staged.

## Key Files

- `next.config.js` - Next.js configuration with MDX support
- `package.json` - Dependencies and npm scripts
- `.husky/pre-commit` - Git hook that runs lint-staged
