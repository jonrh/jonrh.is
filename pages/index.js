import React, { Component } from "react";
import Helmet from "react-helmet";

import { config } from "config";
import PageLink from "../components/common/PageLink";

class IndexPage extends Component {
  render() {
    const blogPosts = this.props.route.pages.filter(page => {
      return page.file.ext === "md" && page.data.date;
    });

    const blogPostLinks = blogPosts.map(page => {
      return (
        <li key={page.path}>
          <PageLink to={page.path}>
            {page.data.title}
          </PageLink>
        </li>
      );
    });

    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | Home`}
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" },
          ]}
        />
        <p>Welcome to the Gatsby Barebones Starter!</p>

        <ul>
          {blogPostLinks}
        </ul>
      </div>
    );
  }
}

export default IndexPage;
