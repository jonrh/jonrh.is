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

const SocialIcons = () => {
  return (
    <div className="socialicons">
      <a href="mailto:hi@jonrh.is">
        <i className="fa fa-envelope fa-2x" aria-hidden="true" />
      </a>
      {" "}
      <a href="https://github.com/jonrh">
        <i className="fa fa-github fa-2x" aria-hidden="true" />
      </a>
      {" "}
      <a href="https://linkedin.com/in/jonrh">
        <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
      </a>
    </div>
  );
};

const Template = ({ children }) => {
  return (
    <div>
      <Head>
        <style id="typography.js" dangerouslySetInnerHTML={{__html: typography.toString()}} />
      </Head>

      <div className="header">
        <a href="/">
          <img
            src="/images/profile-pic-2017-with-colours.png"
            alt="Profile of Jón Rúnar Helgason"
          />
        </a>

        <a href="/" className="profileName">Jón Rúnar Helgason</a>

        <SocialIcons />
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
