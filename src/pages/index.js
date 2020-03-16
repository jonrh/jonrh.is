import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import Helmet from "react-helmet";
import moment from "moment";

/** The frontpage or root route of the website */
export default class BlogIndex extends React.Component {
  /**
   * Returns a human readable string in English for how many years I have lived in Ireland. Rounds
   * to the nearest year.
   *
   * Examples:
   *  "4 years" after 4 years and 5 months
   *  "5 years" after 4 years and 6 months
   */
  getYearsLivedInIreland() {
    const irelandMoveDate = "2015-09-01";
    const durationInIreland = moment().diff(irelandMoveDate);
    return moment.duration(durationInIreland).humanize();
  }

  render() {
    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />

        <h1>Hi, I'm Jón Rúnar 👋</h1>

        <p>
          I am a co-founder <a href="https://timavera.com">Tímavera</a>, a time tracking app that
          helps contractors eliminate the burden & guesswork of timesheets.
        </p>

        <p>
          From Iceland 🇮🇸 but been living and working remotely from Galway in Ireland 🇮🇪 for
          the past {this.getYearsLivedInIreland()}.
        </p>

        <p>
          If you want to get in touch please drop me an email at {" "}
          <a href="mailto:hi@jonrh.is">hi@jonrh.is</a>.
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
