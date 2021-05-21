import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

/** The frontpage or root route of the website */
const Index = () => {
  return (
    <Layout>
      <Head>
        <title>jonrh - Jón Rúnar Helgason</title>
        <meta name="description" content="Jón Rúnar Helgason is an Icelandic fullstack founder
          and frontend software engineer. He is a Co-Founder of Tímavera, a time tracking app
          for contractors." />
      </Head>

      <h1>Hi, I'm Jón Rúnar 👋</h1>

      <p>
        I am a cofounder of <a href="https://timavera.com">Tímavera</a>, a time tracking app that
        helps contractors eliminate the burden & guesswork of timesheets. From and currently
        living in Iceland 🇮🇸. Lived for 6 years in Ireland 🇮🇪 between 2015 and 2021. If you want
        to get in touch please drop me an email at <a href="mailto:hi@jonrh.is">hi@jonrh.is</a>.
      </p>
    </Layout>
  );
};

export default Index;