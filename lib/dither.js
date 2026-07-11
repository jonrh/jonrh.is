/** Minimal escape of characters that would break an HTML attribute value */
const escapeAttribute = (text) =>
  String(text).replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/**
 * A dithered image that links to the original source image in colour.
 * Registered as the {% dither %} shortcode in eleventy.config.js.
 *
 * Arguments:
 *   src: source of the original image
 *   alt: image alt text
 *   width: width of the dithered image
 *   height: height of the dithered image
 *   webp: true/false. If true it indicates I have created an optimised
 *     WebP version which should be used instead of PNG. WebP typically
 *     has a better compression ratio than PNG.
 */
export function dither(src, alt, width, height, webp) {
  // Replace the .jpg / .jpeg / .gif / .png file
  // ending with "-dither.png" or "-dither.webp".
  // File name convention:
  //   "/images/post/image.jpg"          source image in colour
  //   "/images/post/image-dither.png"   dithered PNG version
  //   "/images/post/image-dither.webp"  dithered Webp version if available
  const ditherSrcPng = src.replace(/\.(jpe?g|gif|png)/, "-dither.png");
  const ditherSrcWebp = src.replace(/\.(jpe?g|gif|png)/, "-dither.webp");
  const ditherSrc = webp ? ditherSrcWebp : ditherSrcPng;

  return (
    `<a href="${src}">` +
    `<img src="${ditherSrc}" alt="${escapeAttribute(alt)}" ` +
    `width="${width}" height="${height}" loading="lazy" decoding="async" />` +
    `</a>`
  );
}
