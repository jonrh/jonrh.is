import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { rhythm, scale } from "../utils/typography";
import moment from "moment";

import Bio from "../components/Bio";
import profilePic from "../images/profile-pic-2017.png";

export default class About extends React.Component {
  /**
   * Returns the duration of my frontend experience. Calculated so I don't have
   * to update it every year. Moment humanize() uses rounding.
   *
   * Examples:
   *  "4 years" requested at 2018-04-30.
   *  "4 years" after 53 months (4 years and 5 months)
   *  "5 years" after 54 months (4 years and 6 months)
   */
  getFrontendExperienceInYears() {
    const ru = 3;
    const ucd = 12;
    const vaki = 13;
    const bespokedashboards = moment().diff("2016-08-01", "months", true);
    const totalFrontendExperienceInMonths = ru + ucd + vaki + bespokedashboards;

    return moment.duration(totalFrontendExperienceInMonths, "months").humanize()
  }

  render() {
    return (
      <div>
        <Helmet title={"jonrh - About Me"} />
        <h1>About Me</h1>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={profilePic} alt={`Jón Rúnar Helgason`} />
        </div>

        <p><strong>My name is Jón Rúnar Helgason</strong>:</p>
        <ul>
          <li>I help companies create bespoke product dashboards.</li>
          <li>Independent dashboard consultant & frontend software engineer.</li>
          <li>Available for React Native mobile development in March 2019.</li>
          <li>Icelander working remotely from Galway, Ireland.</li>
        </ul>

        <p><strong>Recent work</strong>:</p>
        <ul>
          <li><a href="https://www.activitystream.com/">Activity Stream</a>: dashboard engineer contractor, Nov 2017 - Dec 2018.</li>
          <li><a href="https://timavera.is">Tímavera</a>: SaaS time clock for tradesmen. <a href="https://itunes.apple.com/us/app/klukkinn/id1309092162">iOS</a> & <a href="https://play.google.com/store/apps/details?id=is.klukkinn.app">Android</a> apps.</li>
          <li>BD Monitor: auxiliary <a href="https://appsto.re/us/CHXChb.i">iOS</a> & <a href="https://play.google.com/store/apps/details?id=is.vaki.bdhm">Android</a> mobile dashboard for Biomass Daily.</li>
          <li><Link to={"/retrospective-on-react"}>Biomass Daily</Link> web dashboard for <a href="http://vaki.is/">Vaki</a>. Made with React.</li>
        </ul>

        <p><strong>Background</strong>:</p>
        <ul>
          <li>Frontend: {this.getFrontendExperienceInYears()}. JavaScript, TypeScript, React & React Native.</li>
          <li>Backend: 2 years. Python, NodeJS, Java, SQL, and others.</li>
          <li>MSc in Computer Science from <a href="https://www.ucd.ie/">University College Dublin</a>.</li>
          <li>BSc in Computer Science from <a href="https://en.ru.is/">Reykjavík University</a>.</li>
          <li>Interested in functional programming: ReasonML, Elm, PureScript, etc.</li>
        </ul>

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
          <li>Twitter: <a href="https://twitter.com/jonrh">@jonrh</a></li>
          <li>GitHub: <a href="https://github.com/jonrh">jonrh</a></li>
          <li>Mastodon: <a href="https://mastodon.social/@jonrh">jonrh</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/jonrh/">https://linkedin.com/in/jonrh/</a></li>
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
