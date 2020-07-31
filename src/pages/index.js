import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import moment from "moment";

import Layout from "./../layouts/";

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
      <Layout>
        <Helmet title="jonrh" />

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
      </Layout>
    );
  }
}

BlogIndex.propTypes = {
  route: PropTypes.object,
};