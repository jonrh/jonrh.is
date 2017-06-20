import React, { Component } from "react";
import Link from "gatsby-link";

class Index extends Component {
  render() {
    return (
      <div>
        <div>Halló halló</div>

        <br />

        <Link to="/blog/">Blog</Link>
      </div>
    );
  }
}

export default Index;
