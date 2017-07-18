import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import { rhythm, scale } from "../utils/typography";

import Bio from "../components/Bio";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title") +" - About Me"} />
        <h1>About Me</h1>


        <p><strong>My name is Jón Rúnar Helgason</strong>:</p>

        <ul>
          <li>Independent dashboard consultant & frontend software engineer</li>
          <li>Available for contract work in September 2017.</li>
          <li>Currently working on two iOS and Android mobile dashboards written in React Native.</li>
          <li>Very interested in functional programming: Elm, PureScript, ReasonML, Haskell, etc.</li>
          <li>Icelander working remotely from Galway, Ireland.</li>
        </ul>

        <ul>
          <li>Created the <Link to={"/retrospective-on-react"}>Biomass Daily web app</Link> for <a href="http://vaki.is/">Vaki</a>, interactive dashboard.</li>
          <li>Frontend for 3 years in JavaScript, React & React Native.</li>
          <li>Backend for 2 years (Python/Java/SQL) but found passion in the rapidly changing frontend.</li>
          <li>MSc Computer Science from <a href="https://www.ucd.ie/">University College Dublin</a>.</li>
          <li>BSc Computer Science from <a href="https://en.ru.is/">Reykjavík University</a>.</li>
        </ul>

        <p>
          <strong>Services</strong>:
          I help companies make informed business decisions based on their data. To do that I’ve
          specialised in creating tailor made dashboard websites and mobile apps. We will be a good
          fit if you:
        </p>

        <ul>
          <li>Require a tailor made dashboard to make good use of your company’s data.</li>
          <li>Have in-house backend expertise to serve your data through an API.</li>
          <li>Have a good idea what your KPIs are and what to filter by.</li>
          <li>Want to offload entirely the frontend work & responsibilities.</li>
        </ul>

        <p><strong>I can be contacted via</strong>:</p>

        <ul>
          <li>Email: <a href="mailto:hi@jonrh.is">hi@jonrh.is</a></li>
          <li>Twitter: <a href="http://twitter.com/jonrh/">@jonrh</a></li>
          <li>GitHub: <a href="https://github.com/jonrh">jonrh</a></li>
          <li>Mastodon: <a href="https://mastodon.social/@jonrh">jonrh</a></li>
          <li>LinkedIn: <a href="http://is.linkedin.com/in/jonrh">http://is.linkedin.com/in/jonrh</a></li>
          <li>IRC, Freenode: jonrh</li>
        </ul>

        <hr style={{marginBottom: rhythm(1)}}/>
        <Bio />
      </div>
    );
  }
}

About.propTypes = {
  route: PropTypes.object,
};

export const pageQuery = graphql`
query AboutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;
