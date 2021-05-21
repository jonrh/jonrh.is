import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>jonrh - Portfolio</title>
        <meta name="description" content="Jón Rúnar Helgason's portfolio consists of frontend
          engineering work in JavaScript, React and React Native. Dashboards, websites and apps." />
      </Head>

      <h1>Portfolio</h1>
      <p>
        Over the years I’ve specialised in designing and constructing frontend applications,
        that is websites and mobile apps for iPhone and Android. More specifically the type of
        apps that I’ve specialised in are bespoke dashboards that add insights and convenience
        for the customers & employees of a company.
      </p>
      <ul>
        <li><a href="#timavera">Tímavera</a></li>
        <li><a href="#websitesemail">Websites & Email for Contractors</a></li>
        <li><a href="#activitystream">Activity Stream</a></li>
        <li><a href="#bd-monitor">Vaki: mobile dashboard app</a></li>
        <li><a href="#biomass-daily">Vaki: web dashboard</a></li>
        <li><a href="#ja-gadget-widget">Já.is: Widget & Gadget</a></li>
      </ul>

      <h2 id="timavera"><a href="#previous-work">#</a>Tímavera</h2>
      <p>2017 - Current</p>
      <p>
        Time tracking for contractors. Designed for small companies with simple needs: track
        projects, hours & locations. Frontend engineering, devops, customer support and daily
        operations. Made the iOS & Android apps with JavaScript and React Native. Website with
        React. Set up continuous deployments with CircleCI & Docker. {" "}
        <a href="https://timavera.com">timavera.com</a>
      </p>

      <img src="/images/consulting/timavera_app.png" alt="Tímavera timeclock mobile app" />
      <img src="/images/consulting/timavera_dashboard.png" alt="Web dashboard for Tímavera time tracking" />

      <h2 id="websitesemail"><a href="#websitesemail">#</a>Branded Websites & Email</h2>
      <p>2018 - Current</p>
      <p>
        Digital presence for individuals and companies. Branded email using leading providers
        such as Fastmail and Gmail. Websites showcasing area of expertise, past projects or simple
        contact pages.
      </p>

      <p>
        <ul>
          <li><a href="https://jonogmarteinn.is">jonogmarteinn.is</a></li>
          <li><a href="https://malco.is">malco.is</a></li>
          <li><a href="https://sonjajayz.com">sonjajayz.com</a> work in progress</li>
        </ul>
      </p>

      <img src="/images/jonogmarteinn_dark.png" alt="Screenshot from jonogmarteinn.is" />
      <img src="/images/malco_dark.png" alt="Screenshot from malco.is, a simple site with contact details" />

      <h2 id="activitystream"><a href="#activitystream">#</a>Activity Stream</h2>
      <p>2017 - 2018</p>
      <p>
        Operations intelligence for Live Entertainment & Sports. Iceland’s Startup of the Year in
        2017 and AI/ML Startup of the Year in 2018. Created and maintained dashboards and
        visualisations for the AI engine. JavaScript, TypeScript & Mithril. Remote contractor. {" "}
        <a href="https://www.activitystream.com/">activitystream.com</a>
      </p>
      <img src="/images/consulting/activitystream_dashboard_framed.png" alt="UI Design of Activity Stream dashboard" />

      <h2 id="vaki"><a href="#vaki">#</a>Vaki</h2>
      <p>
        Vaki Aquaculture Systems Ltd. is the industry leader in fish counting and size estimation
        of live fish. Vaki offers a variety of solutions but the one I worked on was the{" "}
        <a href="https://vakiiceland.is/biomass-daily/">Biomass Daily system</a>.
        The gist of it is this: you are a company that operates fish farms. On each farm there are
        multiple sea cages with salmon. You rent hardware frames from Vaki and lower them into
        the sea cages. As the salmon swim through the frames their weight is measured. This data
        is then aggregated and analysed in various dashboards. {" "}
        <a href="https://vakiiceland.is/">vakiiceland.is</a>
      </p>
      <img src="/images/consulting/bd_frames_and_fish.png" alt="Biomass Daily frames" />

      <h3 id="bd-monitor"><a href="#bd-monitor">#</a>iPhone App: BD Monitor</h3>
      <p>2016 - 2017</p>
      <p>
        This project was about creating an auxiliary mobile app to monitor the status of the
        hardware frames that run 24/7 capturing size estimations. Before this app, users would
        check the current hardware status on a PC. With an app the process became more convenient
        for the site managers, who are often on the move. Product development from sketches all
        the way to a finished mobile app.
      </p>
      <p>
        The app was written in JavaScript ES2015 and React Native.
      </p>

      <img src="/images/consulting/mockup.png" alt="Early mockups demonstrating bottom navigation and History view" />

      <img src="/images/consulting/bdmonitor1.png" alt="BD Monitor login and home screen" />
      <img src="/images/consulting/bdmonitor2.png" alt="BD Monitor Summary & Settings" />
      <img src="/images/consulting/bdmonitor3.png" alt="BD Monitor History" />
      <img src="/images/consulting/bdmonitor4.png" alt="BD Monitor Utilisation" />
      <img src="/images/consulting/bdmonitor5.png" alt="BD Monitor sea cage detail view" />


      <h4 id="biomass-daily"><a href="#biomass-daily">#</a>Web Dashboard: biomassdaily.com</h4>
      <p>2014 - 2015</p>
      <p>
        Access is restricted to users of the Biomass Daily system. The system has been in daily
        active use by Vaki's customers and employees since its launch in 2015.
      </p>

      <p>Main features:</p>

      <ul>
        <li><strong>Dashboard</strong> of current operational status of hardware in the field.</li>
        <li><strong>Trend analysis</strong> of weight data to see how population is progressing.</li>
        <li><strong>Distribution</strong> analysis to observe weight distribution and health of population.</li>
        <li><strong>Administration</strong> section to manage users and privileges.</li>
        <li><strong>Secure Login</strong> with username and email.</li>
        <li><strong>Multiple languages</strong>: English, Spanish, Norwegian &amp; Icelandic.</li>
      </ul>

      <p>Technical implementation:</p>

      <ul>
        <li>
          <strong>Single page application</strong> web site. Written in JavaScript (version ES5)
          and structured in the <a href="https://facebook.github.io/react/">React</a> library.
          User interface structure provided by Bootstrap. More technical details can be found in
          my blog post: <a href="http://jonrh.is/retrospective-on-react/">Retrospective on
          React</a>.
        </li>
        <li>
          <strong>Backend</strong> provides all data through a web service API and JSON. Written
          and maintained by Vaki in C# and Microsoft SQL Server database.
        </li>
      </ul>

      <img src="/images/consulting/bd_dashboard.png" alt="Biomass Daily sea cages dashboard" />
      <img src="/images/consulting/bd_trendgraph.png" alt="Biomass Daily weight trendgraph" />
      <img src="/images/consulting/bd_distribution.png" alt="Biomass Daily weight distribution" />
      <img src="/images/consulting/bd_fcr.png" alt="Biomass Daily Feed Conversion Ratio" />
      <img src="/images/consulting/bd_login.png" alt="Biomass Daily Login" />

      <h2 id="ja-gadget-widget"><a href="#ja-gadget-widget">#</a>Já.is Gadget & Widget</h2>
      <p>
        This was the project that sparked my interest in frontend development. A very small 1-2
        week project I worked on back in 2010 for <a href="https://ja.is/">Já.is</a>, the
        official phonebook registry of Iceland. Super simple{" "}
        <a href="https://en.wikipedia.org/wiki/Dashboard_(macOS)">OSX Widget</a> and{" "}
        <a href="https://en.wikipedia.org/wiki/Windows_Desktop_Gadgets">Windows Gadget</a>{" "}
        dashboard tools, obsolete today as operating systems have dropped support. You would
        start typing some name and it would drop down an autocomplete menu of possible results.
        Once enter was pressed it would redirect to the <em>ja.is</em> website.
      </p>

      <img
        src="/images/consulting/ja_combined.png"
        alt="Screenshot of the Já.is OSX Widget and Windows Gadget"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <p>
        This was one of the most fun projects I worked on. I didn't know it at the time but this
        project planted a seed that would eventually lead me to specialising in dashboards as a
        career.
      </p>
    </Layout>
  );
};

export default Portfolio;
