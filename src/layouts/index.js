import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { rhythm, scale } from "../utils/typography";

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

export default class Template extends React.Component {
  render() {
    const { location, children } = this.props;

    let header;

    if (location.pathname === "/") {
      header = (
        <h1
          style={{
            ...scale(1.2),
            marginBottom: rhythm(1.2),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to={"/"}
          >
            jonrh <br />
            Dashboard Consultant
          </Link>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: "Montserrat, sans-serif",
            marginTop: 0,
            marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: "none",
              textDecoration: "none",
              color: "inherit",
            }}
            to={"/"}
          >
            jonrh Dashboard Consultant
          </Link>
        </h3>
      );
    }

    return (
      <div style={{
        maxWidth: "42rem",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "2.6rem 1.3rem"
      }}>
        {header}
        {children()}
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
};
