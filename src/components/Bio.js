import React from "react";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import profilePic from "./profile-pic.png";
import { rhythm } from "../utils/typography";

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(1),
        }}
      >
        <img
          src={profilePic}
          alt={`Jón Rúnar Helgason`}
          style={{
            float: "left",
            marginRight: rhythm(1 / 4),
            marginBottom: 0,
            width: rhythm(1),
            height: rhythm(1),
          }}
        />
        Written by
        {" "}
        <strong>Jón Rúnar Helgason</strong>
      </p>
    );
  }
}

export default Bio;
