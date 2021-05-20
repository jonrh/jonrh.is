import React from "react";
import Link from "next/link";
import Head from "next/head";
import moment from "moment";

import Layout from "../components/layout";

/**
 * Returns the duration of my frontend experience. Calculated so I don't have
 * to update it every year. Moment humanize() uses rounding.
 *
 * Examples:
 *  "4 years" requested at 2018-04-30.
 *  "4 years" after 53 months (4 years and 5 months)
 *  "5 years" after 54 months (4 years and 6 months)
 */
function getFrontendExperienceInYears() {
  const ru = 3;
  const ucd = 12;
  const vaki = 13;
  const bespokedashboards = moment().diff("2016-08-01", "months", true);
  const totalFrontendExperienceInMonths = ru + ucd + vaki + bespokedashboards;

  return moment.duration(totalFrontendExperienceInMonths, "months").humanize()
}

const About = () => {
  return (
    <Layout>
      <Head>
        <title>jonrh - About</title>
      </Head>

      <h1>About</h1>

      <p><strong>Hello! My name is Jón Rúnar Helgason</strong>:</p>
      <ul>
        <li>I help contractors <a href="https://timavera.com">track time</a> so they can be awesome at their trade.</li>
        <li>Fullstack Founder & Frontend Software Engineer.</li>
        <li>Available for hire to create bespoke websites.</li>
      </ul>

      <p><strong>Recent work</strong>:</p>
      <ul>
        <li><a href="https://timavera.is">Tímavera</a>: Time tracking for contractors SaaS. <a href="https://itunes.apple.com/us/app/klukkinn/id1309092162">iOS</a> & <a href="https://play.google.com/store/apps/details?id=is.klukkinn.app">Android</a> apps.</li>
        <li><a href="https://jonogmarteinn.is">jonogmarteinn.is</a>: website for a master painter in Iceland.</li>
        <li><Link href="/portfolio#bd-monitor">BD Monitor</Link>: mobile dashboard app, <a href="https://appsto.re/us/CHXChb.i">iOS</a> & <a href="https://play.google.com/store/apps/details?id=is.vaki.bdhm">Android</a>.</li>
        <li><Link href="/portfolio#biomass-daily">Biomass Daily</Link> web dashboard for <a href="http://vakiiceland.is/">Vaki</a>.</li>
      </ul>

      <p><strong>Background</strong>:</p>
      <ul>
        <li>Frontend: {getFrontendExperienceInYears()}. JavaScript, TypeScript, React & React Native.</li>
        <li>Backend: 2 years. Python, NodeJS, Java, SQL, and others.</li>
        <li>MSc in Computer Science from <a href="https://www.ucd.ie/">University College Dublin</a>.</li>
        <li>BSc in Computer Science from <a href="https://en.ru.is/">Reykjavík University</a>.</li>
        <li>Interests: Next.js, FaunaDB, serverless.</li>
      </ul>

      <p><strong>I can be contacted via</strong>:</p>

      <ul>
        <li>Email: <a href="mailto:hi@jonrh.is">hi@jonrh.is</a></li>
        <li>GitHub: <a href="https://github.com/jonrh">jonrh</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/jonrh/">https://linkedin.com/in/jonrh/</a></li>
        <li>IRC, Libre.chat: jonrh</li>
      </ul>
    </Layout>
  );
};

export default About;
