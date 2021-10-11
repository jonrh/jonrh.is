import React from "react";
import Link from "next/link";
import Head from "next/head";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

// Legacy font theme from the days of GatsbyJS
import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";
const typography = new Typography(Wordpress2016);

const Template = ({ children }) => {
  return (
    <div>
      <Head>
        <style id="typography.js" dangerouslySetInnerHTML={{__html: typography.toString()}} />
      </Head>

      <div className="header">
        <a href="/">
          <img
            src="/images/profile-pic-2017-dither.png"
            alt="Profile of Jón Rúnar Helgason"
          />
        </a>

        <a href="/" className="profileName">Jón Rúnar Helgason</a>
      </div>

      <div className="container">
        <nav>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>

        {children}
      </div>
    </div>
  );
};

export default Template;
