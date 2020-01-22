import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import Helmet from "react-helmet";

export default class BlogIndex extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />

        <h1>Hi, I'm Jón Rúnar 👋</h1>

        <p>
          I'm a frontend engineer & independent dashboard consultant from Iceland 🇮🇸 living and
          working remotely from Galway in Ireland 🇮🇪.
        </p>

        <p>
          I'm a co-founder of the micro SaaS <a href="https://timavera.is">Tímavera</a>, a
          deliberately simple time tracking solution for contractors.
        </p>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object,
};

export const pageQuery = graphql`
query IndexQuery {
  site {
    siteMetadata {
      title
    }
  }   
}
`;
