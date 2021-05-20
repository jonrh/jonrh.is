import React from "react";
import Head from "next/head";
import moment from "moment";

import Layout from "../components/layout";

/**
 * Returns a human readable string in English for how many years I have lived in Ireland. Rounds
 * to the nearest year.
 *
 * Examples:
 *  "4 years" after 4 years and 5 months
 *  "5 years" after 4 years and 6 months
 */
function getYearsLivedInIreland() {
  const irelandMoveDate = "2015-09-01";
  const durationInIreland = moment().diff(irelandMoveDate);
  return moment.duration(durationInIreland).humanize();
}

/** The frontpage or root route of the website */
const Index = () => {
  return (
    <Layout>
      <Head>
        <title>jonrh</title>
      </Head>

      <h1>Hi, I'm Jón Rúnar 👋</h1>

      <p>
        I am a co-founder <a href="https://timavera.com">Tímavera</a>, a time tracking app that
        helps contractors eliminate the burden & guesswork of timesheets.
      </p>

      <p>
        From Iceland 🇮🇸 but been living and working remotely from Galway in Ireland 🇮🇪 for
        the past {getYearsLivedInIreland()}.
      </p>

      <p>
        If you want to get in touch please drop me an email at {" "}
        <a href="mailto:hi@jonrh.is">hi@jonrh.is</a>.
      </p>
    </Layout>
  );
};

export default Index;
