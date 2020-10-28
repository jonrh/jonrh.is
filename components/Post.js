import React from "react";
import Head from "next/head";

import Layout from "./layout";
import Bio from "./Bio";

/** A template for a blog post page */
const Post = ({title, date, children}) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>
      <p
        style={{
          display: "block",
          marginTop: "-1em",
          marginBottom: "1.5em",
        }}
      >
        {date}
      </p>

      <div>
        {children}
      </div>

      <hr />
      <Bio />
    </Layout>
  );
};

export default Post;