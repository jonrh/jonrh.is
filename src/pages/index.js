import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import include from "underscore.string/include";

import Bio from "../components/Bio";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = [];
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");
    posts.forEach(post => {
      if (post.node.path !== "/404/") {
        const title = get(post, "node.frontmatter.title") || post.node.path;
        pageLinks.push(
          <li
            key={post.node.path}
            style={{
              marginBottom: rhythm(1 / 4),
            }}
          >
            <Link style={{ boxShadow: "none" }} to={post.node.fields.slug}>
              {post.node.frontmatter.title}
            </Link>
          </li>,
        );
      }
    });

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />

        <p>
          <Link to={"/about"}><span>About Me</span></Link>
          <span style={{marginRight: 15}}> </span>
          <Link to={"/about"}><span>Dashboard Consulting</span></Link>
        </p>

        <Bio />



        <ul>
          {pageLinks}
        </ul>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
};

export default BlogIndex;

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }
  
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
