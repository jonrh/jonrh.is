/** @jsxRuntime automatic */
/** @jsxImportSource preact */

export const data = {
  layout: "layout.11ty.jsx",
  title: "jonrh - About",
  metaDescription:
    "Jón Rúnar Helgason is an Icelandic fullstack founder and software " +
    "engineer. He is a Co-Founder of Tímavera, a time tracking app for " +
    "contractors.",
};

export default function () {
  const frontendYearsOfExperience = new Date().getUTCFullYear() - 2014;

  return (
    <>
      <h1>About</h1>

      <p>
        <strong>Currently</strong>:
      </p>
      <ul>
        <li>Founder & Software Engineer.</li>
        <li>Living in Seattle, Washington, USA.</li>
        <li>Moving to Bergen in Norway in November 2026.</li>
      </ul>

      <p>
        <strong>Background</strong>:
      </p>
      <ul>
        <li>
          Frontend: {frontendYearsOfExperience} years. JavaScript, TypeScript,
          React & React Native.
        </li>
        <li>Backend: 2 years. Python, NodeJS, Java, SQL, and others.</li>
        <li>
          MSc in Computer Science from{" "}
          <a href="https://www.ucd.ie/">University College Dublin</a>.
        </li>
        <li>
          BSc in Computer Science from{" "}
          <a href="https://en.ru.is/">Reykjavík University</a>.
        </li>
        <li>Interests: Zero, Deno & Deno Deploy, serverless.</li>
      </ul>

      <p>
        <strong>Contact & links</strong>:
      </p>

      <ul>
        <li>
          Email: <a href="mailto:hi@jonrh.is">hi@jonrh.is</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/jonrh">jonrh</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/jonrh/">
            https://linkedin.com/in/jonrh/
          </a>
        </li>
        <li>IRC, Libre.chat: jonrh</li>
      </ul>

      <a href="/about/jonrh-dither.png">
        <img
          src="/about/jonrh-dither.png"
          alt="Jón Rúnar Helgason profile picture."
          width="750"
          height="750"
          loading="lazy"
          decoding="async"
        />
      </a>
    </>
  );
}
