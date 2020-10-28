import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import Bio from "../components/Bio";
import get from "lodash/get";

// Slugs or path of a page that I (for now at least) don't want to show in the blog list
// These are sound mixes that I did a long time ago. The primary reason for hiding them is that I
// still haven't uploaded the actual MP3s that they were supposed to link to. At a later date I
// hope to fold these back in. This only hides the links from the link list. That means these pages
// are still publicly accessible on the route.
const hiddenPosts = [
  "/16september-2006-mix/",
  "/23september-2006-mix/",
  "/4october-2006-mix/",
  "/7october-2006-mix/",
  "/28october-2006-mix/",
  "/29december-2006-mix/",
  "/28january-2007-mix/",
  "/8april-2007-mix/",
  "/chris-lake-mini-mix/",
  "/6october-2007-mix/",
  "/25february-2008-mix/",
  "/20june-2009-mix/",
  "/how-i-use-beatport-on-a-mac/",
];

export default class Blog extends React.Component {
  render() {
    const pageLinks = [];
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    posts.forEach(post => {
      const {slug} = post.node.fields; // Example value: "/react-native-eu-2017-conference/"
      const postIsNotDraft = slug !== "/undefined/";
      const postIsNotHidden = !hiddenPosts.includes(slug);

      if (post.node.path !== "/404/" && postIsNotDraft && postIsNotHidden) {
        pageLinks.push(
          <li key={slug}>
            <Link style={{ boxShadow: "none" }} to={slug}>
              {post.node.frontmatter.title}
            </Link>
          </li>
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