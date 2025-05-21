# jonrh.is

Source code for my personal website [jonrh.is](https://jonrh.is), made with JavaScript,
[Next.js](https://nextjs.org/) and [React](https://reactjs.org/). The site is hosted and
automatically deployed with [Vercel](https://vercel.com/).

## Coding conventions

All JavaScript code is written in ES2015, ES2016, and so on. Sometimes Stage 4
ECMA features are used (features that have been finalised but not published in
the specification). Code is formatted with [Prettier](https://github.com/prettier/prettier).

## Image dithering recipe

Most image previews on the site are dithered PNGs with 2 colours. Some images
that are tricky to reduce to 2 colours use 32 instead. They are of the same
dimension as the original but most of the time are only 8-20% of the size in
kilobytes. A lossy compression but achieves far greater results even when
compared to modern image codecs.

In Photoshop, add an [Adjustment Layer](https://www.youtube.com/watch?v=2xlfgn60XsA)
on top with a Gradient Map going from #000000 to #ff7b00. The visibility of
that layer can then be toggled for the purpose of doing exports. Depending on
the image or screenshot it may be worth to reverse the gradient and play around
with the location of the mid-point between the black and orange. Commonly used
midpoints are 20%, 50%, and 80%.

Photoshop -> File -> Export -> Save for web (Legacy)

- File format: PNG-8
- Colors: 2
- Dither: 100%
- Color reduction algorithm: Perceptual / Selective
- Dither algorithm: Diffusion
- Web Snap: 0%
- Matte: None
- Metadata: None
- Re-assign darker colour to #000 and assign as transparency colour
- Re-assign lighter colour to #ff7b00
- Save image, re-size if needed

Screenshots:

- Colors: 32
- Dither algorithm: Pattern
