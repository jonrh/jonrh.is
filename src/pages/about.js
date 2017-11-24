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


            <p>
                <strong>My name is Jón Rúnar Helgason</strong>:
                <ul>
                  <li>I help companies create bespoke product dashboards.</li>
                  <li>Independent dashboard consultant & frontend software engineer.</li>
                  <li>Fully booked for the foreseeable future.</li>
                  <li>Icelander working remotely from Galway, Ireland.</li>
                </ul>
            </p>

            <p>
                <strong>Recent dashboard work</strong>:
                <ul>
                    <li>Klukkinn: super simple timeclock for trade professionals. <a href="https://itunes.apple.com/us/app/klukkinn/id1309092162">iOS</a> & <a href="https://play.google.com/store/apps/details?id=is.klukkinn.app">Android</a>.</li>
                    <li>BD Monitor: auxiliary <a href="https://appsto.re/us/CHXChb.i">iOS</a> & <a href="https://play.google.com/store/apps/details?id=is.vaki.bdhm">Android</a> mobile dashboard for Biomass Daily.</li>
                  <li><Link to={"/retrospective-on-react"}>Biomass Daily</Link> web dashboard for <a href="http://vaki.is/">Vaki</a>.</li>
                  <li>Web dashboards made with React and mobile apps with React Native.</li>
                </ul>
            </p>

            <p>
                <strong>Background</strong>:
                <ul>
                    <li>Frontend: 3 years in JavaScript, React & React Native.</li>
                    <li>Backend: 2 years in Python, Java, SQL, and others.</li>
                    <li>MSc in Computer Science from <a href="https://www.ucd.ie/">University College Dublin</a>.</li>
                    <li>BSc in Computer Science from <a href="https://en.ru.is/">Reykjavík University</a>.</li>
                    <li>Interested in functional programming: ReasonML, Elm, PureScript, etc.</li>
                </ul>
            </p>

            <p>
                <strong>Services</strong>:<br />
                I help companies create product dashboards, in other words: a dashboard for your product used by your
                customers. Essentially I take care of the frontend while your company can focus on a good backend. We
                will be a good fit if you:
            </p>

            <ul>
                <li>Require a tailor made dashboard to improve your customer's utility of your product.</li>
                <li>Have in-house backend expertise to serve your data through an API.</li>
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
