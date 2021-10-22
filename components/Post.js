import React from "react";
import Head from "next/head";

import Layout from "./layout";

const dateStyle = {
  display: "block",
  marginTop: "-1em",
  marginBottom: "1.5em",
};

/** A template for a blog post page */
const Post = ({title, date, children}) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Jón Rúnar Helgason" />
      </Head>

      <h1>{title}</h1>
      <p style={dateStyle}>{date}</p>

      <div>{children}</div>
    </Layout>
  );
};

export default Post;