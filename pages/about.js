import React from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../components/layout";

const About = () => {
  const frontendYearsOfExperience = new Date().getUTCFullYear() - 2014;

  return (
    <Layout>
      <Head>
        <title>jonrh - About</title>
        <meta name="description" content="Jón Rúnar Helgason is an Icelandic fullstack founder
          and frontend software engineer. He is a Co-Founder of Tímavera, a time tracking app
          for contractors." />
      </Head>

      <h1>About</h1>

      <p><strong>Hello! My name is Jón Rúnar Helgason</strong>:</p>
      <ul>
        <li>I help contractors <a href="https://timavera.com">track time</a> so they can be awesome at their trade.</li>
        <li>Fullstack Founder & Frontend Software Engineer.</li>
        <li>Currently unavailable for hire.</li>
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
        <li>Frontend: {frontendYearsOfExperience} years. JavaScript, TypeScript, React & React Native.</li>
        <li>Backend: 2 years. Python, NodeJS, Java, SQL, and others.</li>
        <li>MSc in Computer Science from <a href="https://www.ucd.ie/">University College Dublin</a>.</li>
        <li>BSc in Computer Science from <a href="https://en.ru.is/">Reykjavík University</a>.</li>
        <li>Interests: Deno & Deno Deploy, FaunaDB, serverless.</li>
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
