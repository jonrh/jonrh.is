import React from "react";
import Image from "next/image";

/**
 * A dithered image that links to the original source image in colour.
 *
 * Props:
 *   src: source of the original image
 *   alt: image alt text
 *   width: width of the dithered image
 *   height: height of the dithered image
 *   webp: true/false. If true it indicates I have created an optimised
 *     WebP version which should be used instead of PNG. WebP typically
 *     has a better compression ratio than PNG.
 */
const Dither = ({src, alt, width, height, webp}) => {
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
    <a href={src}>
      <Image
        src={ditherSrc}
        alt={alt}
        width={width}
        height={height}
        unoptimized={true}
      />
    </a>
  );
};

/**
 * A dithered image that links to the original source image in colour. This
 * variant is for statically imported images instead of image route strings.
 * The benefit is that the images can be co-located along with the post source
 * instead of having to be located separately in the public folder. This was an
 * early limitation of Next.js. Another benefit is that the image width and
 * height do not to be passed in. Next.js <Image /> is able to infer it at
 * build time.
 *
 * @param original {object} a statically imported image object, example:
 *   `import img1 from "./image1.png"`. Used to link to the original image.
 *   Will result in a string like "/_next/static/media/image1.98cb2cda.png".
 * @param dither {object} a statically imported image object
 * @param alt {string} image alt text
 */
export const DitherV2 = ({original, dither, alt}) => {
  return (
    <a href={original.src}>
      <Image src={dither} alt={alt} unoptimized={true} />
    </a>
  );
};

export default Dither;