import React from "react";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="header">
        <a href="/">
          <img
            src="/images/profile-pic-2017-dither-dark.png"
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

export default Layout;
