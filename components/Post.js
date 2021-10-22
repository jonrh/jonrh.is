import React from "react";
import Head from "next/head";

import Layout from "./layout";

const dateStyle = {
  display: "block",
  marginTop: "-1em",
  marginBottom: "1.5em",
};

/**
 * Ensure that each post has a meta description for better SEO. If the checks
 * fail an error will be thrown and the build will fail. This ensures that a
 * change can not be accidentally deployed.
 */
function metaDescriptionQualityCheck(metaDescription, title, date) {
  if (!metaDescription) {
    throw new Error(`Meta description is missing. Post: ${title}, date: ${date}.`);
  }

  if (metaDescription.length < 50 || metaDescription.length > 160) {
    throw new Error(`Meta description is ${metaDescription.length} characters, should be 50-160.`);
  }
}

/** A template for a blog post page */
const Post = ({title, date, metaDescription, children}) => {
  metaDescriptionQualityCheck(metaDescription, title, date);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Jón Rúnar Helgason" />
        <meta name="description" content={metaDescription} />
      </Head>

      <h1>{title}</h1>
      <p style={dateStyle}>{date}</p>

      <div>{children}</div>
    </Layout>
  );
};

export default Post;