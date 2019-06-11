import React from "react";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import profilePic from "../images/profile-pic-2017.png";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={profilePic}
          alt={`Jón Rúnar Helgason`}
          style={{
            float: "left",
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2.2),
            height: rhythm(2.2),
          }}
        />

        <strong>Jón Rúnar Helgason</strong>

        <br />

        <div className="socialicons">
          <a href="mailto:hi@jonrh.is">
            <i className="fa fa-envelope fa-2x" aria-hidden="true" />
          </a>
          {" "}
          <a href="https://linkedin.com/in/jonrh">
            <i className="fa fa-linkedin fa-2x" aria-hidden="true" />
          </a>
          {" "}
          <a href="https://github.com/jonrh">
            <i className="fa fa-github fa-2x" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}

export default Bio;
