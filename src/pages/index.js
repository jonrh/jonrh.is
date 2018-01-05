import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";

import Bio from "../components/Bio";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    // console.log("props", this.props)
    const pageLinks = [];
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");
    posts.forEach(post => {
      if (post.node.path !== "/404/" && post.node.fields.slug !== "/undefined/") {
        const title = get(post, "node.frontmatter.title") || post.node.fields.slug;

        pageLinks.push(
          <li
            key={post.node.fields.slug}
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
          <Link to={"/dashboard-consulting"}><span>Dashboard Consulting</span></Link>
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
  route: PropTypes.object,
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
