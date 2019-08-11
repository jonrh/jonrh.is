import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

import profilePic2 from "../images/profile-pic-2017-with-colours.png";

// The Prism theme used to highlight source code in the blog
// Todo: Figure out a better way to load the prism-solarized theme. I manually copied the CSS file
// from the node_modules folder and into the project CSS folder. That's probably not ideal but not
// the worst. I did that because it was causing an error in the Chrome developer console. I took
// a screenshot of it at 2017.07.11 22:10
//require('prismjs/themes/prism-solarizedlight.css');
require("./../css/prism-solarizedlight.css");

// Font Awesome includes icons. I use it for social media icons. http://fontawesome.io/
require("./../css/font-awesome.min.css");

// My own manual CSS changes
require("./../css/jonrh.css");

require("./layoutStyle.css");


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

export default class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <div className="header">
          <a href="/">
            <img src={profilePic2} alt={`Jón Rúnar Helgason`} />
          </a>

          <a href="/" className="profileName">Jón Rúnar Helgason</a>

          <SocialIcons />
        </div>

        <div className="container">
          <nav>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/dashboard-consulting">Dashboard Consulting</Link></li>
            </ul>
          </nav>

          {children()}
        </div>
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
};
