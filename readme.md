# jonrh.is
Source code for my personal website [jonrh.is](https://jonrh.is), made with JavaScript,
[Next.js](https://nextjs.org/) and [React](https://reactjs.org/). The site is hosted and
automatically deployed with [Vercel](https://vercel.com/).

## Coding conventions
All JavaScript code is written in ES2015, ES2016, and so on. Sometimes Stage 4 ECMA features are
used (features that have been finalised but not published in the specification).

Generally I favour using string literals:

```javascript
const website = 'jonrh.is'; // Bad
const website = "jonrh.is"; // Okay
const website = `jonrh.is`; // Best
```

The website is formatted with [Prettier](https://github.com/prettier/prettier) with the following
parameters:

```
--print-width 100
--trailing-comma all
```

## Image dithering recipe
Photoshop -> File -> Export -> Save for web (Legacy)

* File format: PNG-8
* Colors: 2
* Dither: 100%
* Color reduction algorithm: Perceptual / Selective
* Dither algorithm: Diffusion
* Web Snap: 0%
* Matte: None
* Metadata: None
* Re-assign darker colour to #000 and assign as transparency colour
* Re-assign lighter colour to #ff7b00
* Save image, re-size if needed

Screenshots:
* Image -> Adjustments -> Gradient Map -> #00000 to #ff7b00
* Colors: 32
* Dither algorithm: Pattern