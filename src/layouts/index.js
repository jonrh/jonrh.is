import React from "react";
import Link from "gatsby-link";
import { Container } from "react-responsive-grid";
import { rhythm, scale } from "../utils/typography";

// The Prism theme used to highlight source code in the blog
require('prismjs/themes/prism-solarizedlight.css');

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
            Dashboard Consulting
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
            jonrh Dashboard Consulting
          </Link>
        </h3>
      );
    }
    return (
      <Container
        style={{
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </Container>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
};
