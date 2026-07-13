/** @jsxRuntime automatic */
/** @jsxImportSource preact */

/** The frontpage or root route of the website. */
export const data = {
  layout: "layout.11ty.jsx",
  permalink: "/",
  title: "jonrh - Jón Rúnar Helgason",
  metaDescription:
    "Jón Rúnar Helgason is an Icelandic fullstack founder and software " +
    "engineer. Cofounder of Tímavera, a time tracking app for contractors.",
};

export default function () {
  return (
    <>
      <h1 style="text-align: center">Jón Rúnar Helgason</h1>

      <p>
        Cofounder of <a href="https://timavera.com">Tímavera</a>, a time
        tracking app that helps contractors eliminate the burden & guesswork of
        timesheets. Icelander living in Seattle. Want to get in touch? Drop an
        email at <a href="mailto:hi@jonrh.is">hi@jonrh.is</a>.
      </p>
    </>
  );
}
