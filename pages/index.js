import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

/** The frontpage or root route of the website */
const Index = () => {
  return (
    <Layout>
      <Head>
        <title>jonrh - Jón Rúnar Helgason</title>
        <meta name="description" content="Jón Rúnar Helgason is an Icelandic
          fullstack founder and frontend software engineer. Cofounder of
          Tímavera, a time tracking app for contractors." />
      </Head>

      <h1 style={{textAlign: "center"}}>Jón Rúnar Helgason</h1>

      <p>
        Cofounder of <a href="https://timavera.com">Tímavera</a>, a time
        tracking app that helps contractors eliminate the burden & guesswork of
        timesheets. Icelander living in Seattle. Want to get in touch? Drop an
        email at <a href="mailto:hi@jonrh.is">hi@jonrh.is</a>.
      </p>
    </Layout>
  );
};

export default Index;