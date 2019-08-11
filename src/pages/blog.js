import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import { rhythm, scale } from "../utils/typography";
import Bio from "../components/Bio";
import get from "lodash/get";

export default class Blog extends React.Component {
  render() {
    const pageLinks = [];
    const posts = get(this, "props.data.allMarkdownRemark.edges");
    posts.forEach(post => {
      if (post.node.path !== "/404/" && post.node.fields.slug !== "/undefined/") {

        pageLinks.push(
          <li key={post.node.fields.slug}>
            <Link style={{ boxShadow: "none" }} to={post.node.fields.slug}>
              {post.node.frontmatter.title}
            </Link>
          </li>,
        );
      }
    });

    return (
      <div>
        <Helmet title={"jonrh - Blog"} />
        <h1>Blog</h1>

        <ul>
          {pageLinks}
        </ul>

        <hr />
        <Bio />
      </div>
    );
  }
}

export const pageQuery = graphql`
query BlogQuery {  
  # Sort the blog posts by date descending. Not sure why frontmatter___ has to be in front, just 
  # did the same as some code I saw: https://github.com/gatsbyjs/gatsby/pull/1177/files
  allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`;