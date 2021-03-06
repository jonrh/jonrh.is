import React from "react";
import Link from "next/link";
import Head from "next/head";
import moment from "moment";

import Layout from "../components/layout";
import Bio from "../components/Bio";

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
      <Layout>
        <Head>
          <title>jonrh - About</title>
        </Head>

        <h1>About</h1>

        <p><strong>Hello! My name is Jón Rúnar Helgason</strong>:</p>
        <ul>
          <li>I help contractors track time so they can be awesome at their trade.</li>
          <li>Frontend Software Engineer & Independent Dashboard Consultant.</li>
          <li>Icelander working remotely from Galway, Ireland.</li>
          <li>Not available for new opportunities at this time.</li>
        </ul>

        <p><strong>Recent work</strong>:</p>
        <ul>
          <li><a href="https://timavera.is">Tímavera</a>: Time tracking for contractors SaaS. <a href="https://itunes.apple.com/us/app/klukkinn/id1309092162">iOS</a> & <a href="https://play.google.com/store/apps/details?id=is.klukkinn.app">Android</a> apps.</li>
          <li><Link href="/portfolio#bd-monitor">BD Monitor</Link>: mobile dashboard app, <a href="https://appsto.re/us/CHXChb.i">iOS</a> & <a href="https://play.google.com/store/apps/details?id=is.vaki.bdhm">Android</a>.</li>
          <li><Link href="/portfolio#biomass-daily">Biomass Daily</Link> web dashboard for <a href="http://vakiiceland.is/">Vaki</a>.</li>
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
          <strong>Dashboard Consulting Services</strong>:<br />
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
          <li>GitHub: <a href="https://github.com/jonrh">jonrh</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/jonrh/">https://linkedin.com/in/jonrh/</a></li>
          <li>IRC, Freenode: jonrh</li>
        </ul>

        <hr style={{marginBottom: "2em"}}/>
        <Bio />
      </Layout>
    );
  }
}
