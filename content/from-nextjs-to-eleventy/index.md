---
layout: post.11ty.jsx
title: "From Next.js to Eleventy"
dateDisplay: "July 13, 2026"
metaDescription: "Migrated jonrh.is from Next.js and React to Eleventy with Preact JSX rendered to static HTML. No React runtime and no client-side JavaScript."
sourceFile: content/from-nextjs-to-eleventy/index.md
---

This website moved from [Next.js][nextjs] and React to [Eleventy][11ty] (11ty).
Pages and layouts are now [Preact][preact] JSX rendered to static HTML at build
time. No React runtime and no client-side JavaScript ships. Blog posts stay
Markdown.

**Summary**:

+ Swapped Next.js + React for Eleventy, Preact, and a build-time JSX transpile
+ Zero client-side JavaScript, static HTML rendered at build time
+ Homepage payload down about 97%, from 212 kB (32 requests) to 6.1 kB (3 requests)
+ 201 files changed, +948 / −1,398 lines (excluding the lock file)
+ Same static output, same URLs
+ An LLM did a lot of the mechanical grunt work

## Why

The site moved to [Next.js v10 in October 2020][nextcommit] (from Gatsby v1). I
picked Next.js at the time because Gatsby was becoming cumbersome to work with, and I
wanted hands-on familiarity with Next.js, which I would go on to use in many other
projects over the following years. Now felt like a good time to try something different.

The initial plan was for this
site to be dynamic, but over the past 6 years it has stayed fully static. The idea with
[this conversion](https://github.com/jonrh/jonrh.is/pull/34) was to go back to basics and drop React and JavaScript from the runtime
entirely. I considered
[Astro][astro] but 11ty seemed more minimal and fully static, so I tried it first.

A secondary motivation was to test how well Fable 5 would perform on a conversion like
this. In Claude Code I gave it a `/goal` to convert the site and it did the
whole thing in one shot in 29 minutes. That first pass would have been technically
sufficient. I still spent a few more hours finishing it off with Opus 4.8 across several
chats, then had Codex and Cursor review the result. Some of the cleanup was undoing old
Next.js assumptions the mechanical conversion had carried over, like a leftover
React-root `<div>` wrapper and blog images still parked in a shared `public/` folder
rather than beside their Markdown.

## What changed

The homepage used to make 32 requests and transfer about 212 kB (605 kB uncompressed),
nearly all of it the React and Next.js runtime. It now makes 3 requests and transfers
6.1 kB (10.1 kB uncompressed), about 97% lighter. Build time was cut from about 20s
to 10s. Blog posts were converted from MDX to plain Markdown and now co-locate their
images. It still deploys to Vercel, now as a plain static build.

## JSX for templating

I told Fable 5 to use its best judgment on templating, and it chose
[Nunjucks][nunjucks]. A reasonable pick, but for now I prefer to stay with stateless
functional components using JSX. It is what I have used for the past 12 years, and
coming from React it was the smaller conversion. The Preact flavor of JSX was a pleasant surprise here: it allows `class` instead
of `className`, and plain inline `style` strings instead of React's style objects.
React JSX has never permitted either, and being able to write them felt instantly
natural.

## Takeaways

11ty was pleasant to work with. It is minimal, has plenty of templating options, and
takes little to learn. It mostly faded into the background as a small config file.

Fable 5's code quality felt on par with Opus 4.8, but it was noticeably more
resourceful. It came in handy for verifying that the site and routes converted
identically. It made decent high-level choices, though not always the ones I ultimately
wanted, so it needed steering.


Performance was not really the win here. Both the Next.js and the Eleventy versions
score a perfect 100 in Lighthouse, so most visitors would probably not notice any difference. The
lighter payload is a nice bonus.

The real takeaway is about the cost of switching. Thanks to LLMs, changing frameworks
is no longer the hard, time-consuming, or risky task it used to be. This framework switch felt as easy as swapping a library. That is a massive software
engineering win for long-term maintainability in the industry.



[nextjs]: https://nextjs.org/
[11ty]: https://www.11ty.dev/
[preact]: https://preactjs.com/
[astro]: https://astro.build/
[tsx]: https://tsx.is/
[nunjucks]: https://mozilla.github.io/nunjucks/
[nextcommit]: https://github.com/jonrh/jonrh.is/commit/381b10f
[pr34]: https://github.com/jonrh/jonrh.is/pull/34
