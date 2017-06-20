import React, { Component } from "react";
import Link from "gatsby-link";

class Blog extends Component {
  render() {
    return (
      <div>
        <div>Blog</div>
        <ul>
          <li>Blog 1</li>
          <li>Blog 2</li>
          <li>Blog 3</li>
        </ul>

        <br />

        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default Blog;
