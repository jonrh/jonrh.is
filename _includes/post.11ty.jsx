/** @jsxRuntime automatic */
/** @jsxImportSource preact */

// Blog post template. Wraps the rendered post body (data.content) with a
// heading, date, and a link back to the source on GitHub, then chains into
// the base layout.
export const data = {
  layout: "layout.11ty.jsx",
};

/**
 * Ensure that each post has a meta description for better SEO. Throwing here
 * fails the build so a change can not be accidentally deployed without one.
 */
function validateMetaDescription(metaDescription, title, date) {
  if (!metaDescription) {
    throw new Error(
      `Meta description is missing. Post: ${title}, date: ${date}.`,
    );
  }

  if (metaDescription.length < 50 || metaDescription.length > 160) {
    throw new Error(
      `Meta description is ${metaDescription.length} characters, ` +
        `should be 50-160. Post: ${title}.`,
    );
  }
}

/** A direct link to the GitHub source if path is defined */
const Path = ({ path }) => {
  if (!path) return null;

  const url = `https://github.com/jonrh/jonrh.is/blob/main/${path}`;

  return (
    <footer style="text-align: center; margin-top: 5em">
      <a href={url}>History & source</a>
    </footer>
  );
};

const Date = ({ date }) => {
  if (!date) return null;

  return (
    <p style="display: block; margin-top: -1em; margin-bottom: 1.5em">{date}</p>
  );
};

export default function (data) {
  validateMetaDescription(data.metaDescription, data.title, data.dateDisplay);

  return (
    <article>
      <h1>{data.title}</h1>

      <Date date={data.dateDisplay} />

      <div dangerouslySetInnerHTML={{ __html: data.content }} />

      <Path path={data.sourceFile} />
    </article>
  );
}
