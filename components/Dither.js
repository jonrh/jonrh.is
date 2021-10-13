import React from "react";
import Image from "next/image";

/**
 * A dithered image that links to the original source image in colour.
 *
 * The width and height props are for the dithered image.
 */
const Dither = ({src, alt, width, height}) => {
  // Replace the .jpg / .jpeg / .gif / .png file ending with "-dither.png"
  // File name convention:
  //   "/images/post/image.jpg"         source image in colour
  //   "/images/post/image-dither.png"  dithered version:
  const ditherSrc = src.replace(/\.(jpe?g|gif|png)/, "-dither.png");
  console.log(ditherSrc);

  return (
    <a href={src}>
      <Image
        src={ditherSrc}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
};

export default Dither;