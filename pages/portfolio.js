import React from "react";
import Head from "next/head";

import Layout from "../components/layout";
import Dither from "../components/Dither";

/** 2-column grid wrapper */
const TwoImagesSideBySide = ({children}) => {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>jonrh - Portfolio</title>
        <meta name="description" content="Jón Rúnar Helgason's portfolio
          consists of frontend engineering work in JavaScript, React and React
          Native. Dashboards, websites and apps." />
      </Head>

      <h1>Portfolio</h1>
      <p>
        Specialised in product development over the years. Mostly focused on
        design and construction of frontend applications, that is websites and
        mobile apps for iPhone and Android.
      </p>

      <ul>
        <li><a href="#timavera">Tímavera</a></li>
        <li><a href="#websitesemail">Websites & Email for Contractors</a></li>
        <li><a href="#tinycrm">Tiny CRM</a></li>
        <li><a href="#activitystream">Activity Stream</a></li>
        <li><a href="#bd-monitor">Vaki: mobile dashboard app</a></li>
        <li><a href="#biomass-daily">Vaki: web dashboard</a></li>
        <li><a href="#ja-gadget-widget">Já.is: Widget & Gadget</a></li>
      </ul>

      <h2 id="timavera"><a href="#previous-work">#</a>Tímavera</h2>
      <p>2017 - Current</p>
      <p>
        Time tracking for contractors. Designed for small companies with simple
        needs: track projects, hours & locations. Frontend engineering, devops,
        customer support and daily operations. Made the iOS & Android apps with
        JavaScript and React Native. Website with React. Python & Flask API.
        Set up continuous deployments with CircleCI & Docker. {" "}
        <a href="https://timavera.com">timavera.com</a>
      </p>

      <TwoImagesSideBySide>
        <Dither
          src="/images/portfolio/timavera/1_login.png"
          alt="Tímavera mobile app on the login screen. Inputs: company,
           employee name, and password."
          width={1659} height={2622}
        />
        <Dither
          src="/images/portfolio/timavera/2_projects.png"
          alt="Tímavera mobile app on the projects screen. Shows buttons for
           Project A, Jobsite B, Contract C, and Installation D."
          width={1659} height={2622}
        />
      </TwoImagesSideBySide>

      <TwoImagesSideBySide>
        <Dither
          src="/images/portfolio/timavera/3_clocked_in.png"
          alt="Tímavera mobile app on the clocked in screen. Clocked into
           Project A, elapsed time is 03:13:37. A square stop buttons to stop
           or clock out and a plus button for adding a comment or an image."
          width={1659} height={2622}
        />
        <Dither
          src="/images/portfolio/timavera/4_comment.png"
          alt="Tímavera mobile app on a screen to add a comment to a time
           entry. Comment: Foudation complete. Bought materials for $1337.
           Buttons shown are to add the comment and a button for adding an
           image."
          width={1659} height={2622}
        />
      </TwoImagesSideBySide>

      <TwoImagesSideBySide>
        <Dither
          src="/images/portfolio/timavera/5_entries.png"
          alt="Tímavera mobile app screen showing a list of time entries.
           Time entries are grouped by day and show the time when clocked in
           and clocked out along with total duration in hours as well as
           the name of the project."
          width={1659} height={2622}
        />
        <Dither
          src="/images/portfolio/timavera/6_entry.png"
          alt="Tímavera mobile app screen showing a detail screen for a single
           time entry. Duration: 7.00 hours. Start: 08:00 Wed 4 Jan 2023.
           End: 15:00, Wed 4 Jan 2023. Project: Project A. Comment: 12:00,
           Foundation complete. Bought materials for $1337."
          width={1659} height={2622}
        />
      </TwoImagesSideBySide>

      <Dither
        src="/images/portfolio/timavera/timavera_dashboard.png"
        alt="Screenshot of the Tímavera web dashboard. Shown is a table
        containing 3 time entries. The main pages are Time Entries, Projects,
        Employees, Report. The time entries table can then be filtered by
        calendar dates, project, and or employee."
        width={1650} height={748}
      />

      <h2 id="websitesemail"><a href="#websitesemail">#</a>Branded Websites & Email</h2>
      <p>2018 - Current</p>
      <p>
        Digital presence for individuals and companies. Branded email using leading providers
        such as Fastmail and Gmail. Websites showcasing area of expertise, past projects or simple
        contact pages.
      </p>

      <ul>
        <li><a href="https://litasyn.is">litasyn.is</a></li>
        <li><a href="https://malco.is">malco.is</a></li>
        <li><a href="https://konnismidur.is">konnismidur.is</a></li>
      </ul>

      <br />

      <Dither
        src="/images/portfolio/litasyn/litasyn.png"
        alt="Screenshot from litasyn.is"
        width={1974} height={1634}
      />
      <Dither
        src="/images/portfolio/malco_dark.png"
        alt="Screenshot from malco.is, a simple site with contact details"
        width={1202} height={1078}
      />

      <h2 id="tinycrm"><a href="#tinycrm">Tiny CRM</a></h2>
      <p>2021 - Current</p>
      <p>
        Hobby project with a friend.
        Experimenting with new tech, UI & UX.
        Aimed to be an intermediate CRM for those that need something better
        than a text docu&shy;ment or a spreadsheet but something simpler and more
        lightweight than the established CRMs.

        See more at <a href="https://tinycrm.app">tinycrm.app</a>.
        Currently in the very early days.
        If interested to try it out send us a line
        at <a href="mailto:tinycrm@tinycrm.app">tinycrm@tinycrm.app</a>.
      </p>

      <h2 id="activitystream"><a href="#activitystream">#</a>Activity Stream</h2>
      <p>2017 - 2018</p>
      <p>
        Business intelligence for Live Entertainment & Sports. Iceland’s Startup of the Year in
        2017 and AI/ML Startup of the Year in 2018. Created and maintained dashboards and
        visualisations for the AI engine. JavaScript, TypeScript & Mithril. Remote contractor. {" "}
        <a href="https://www.activitystream.com/">activitystream.com</a>
      </p>
      <Dither
        src="/images/portfolio/activitystream_dashboard_framed.png"
        alt="UI Design of Activity Stream dashboard"
        width={1921} height={1119}
      />

      <h2 id="vaki"><a href="#vaki">#</a>Vaki</h2>
      <p>
        Vaki Aquaculture Systems Ltd. is the industry leader in fish counting
        and size estimation of live fish. Worked on the{" "}
        <a href="https://vakiiceland.is/biomass-daily/">Biomass Daily</a> system.

        A company operating salmon farms would rent hardware frames from Vaki
        and place them in the se cages. As the salmon swim through the frames
        their weight is measured. This data is then aggregated and analysed in
        various dashboards. <a href="https://vakiiceland.is/">vakiiceland.is</a>
      </p>
      <Dither
        src="/images/portfolio/bd_frames_and_fish.png"
        alt="Biomass Daily frames"
        width={655} height={272}
      />

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

      <Dither
        src="/images/portfolio/mockup.png"
        alt="Early mockups demonstrating bottom navigation and History view"
        width={1024} height={508}
      />

      <Dither
        src="/images/portfolio/bdmonitor1.png"
        alt="BD Monitor login and home screen"
        width={700} height={700}
      />
      <Dither
        src="/images/portfolio/bdmonitor2.png"
        alt="BD Monitor Summary & Settings"
        width={700} height={700}
      />
      <Dither
        src="/images/portfolio/bdmonitor3.png"
        alt="BD Monitor History"
        width={700} height={700}
      />
      <Dither
        src="/images/portfolio/bdmonitor4.png"
        alt="BD Monitor Utilisation"
        width={700} height={700}
      />
      <Dither
        src="/images/portfolio/bdmonitor5.png"
        alt="BD Monitor sea cage detail view"
        width={700} height={700}
      />


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

      <Dither
        src="/images/portfolio/bd_dashboard.png"
        alt="Biomass Daily sea cages dashboard"
        width={2758} height={1860}
      />
      <Dither
        src="/images/portfolio/bd_trendgraph.png"
        alt="Biomass Daily weight trendgraph"
        width={2758} height={1860}
      />
      <Dither
        src="/images/portfolio/bd_distribution.png"
        alt="Biomass Daily weight distribution"
        width={2758} height={1860}
      />
      <Dither
        src="/images/portfolio/bd_fcr.png"
        alt="Biomass Daily Feed Conversion Ratio"
        width={2758} height={1860}
      />
      <Dither
        src="/images/portfolio/bd_login.png"
        alt="Biomass Daily Login"
        width={2758} height={1860}
      />

      <h2 id="ja-gadget-widget"><a href="#ja-gadget-widget">#</a>Já.is Gadget & Widget</h2>
      <p>
        A small 1-2 week summer internship project back in 2010 for{" "}
        <a href="https://ja.is/">Já.is</a>, the official phonebook registry of
        Iceland. Super simple{" "}
        <a href="https://en.wikipedia.org/wiki/Dashboard_(macOS)">OSX Widget</a>{" "}
        and{" "}
        <a href="https://en.wikipedia.org/wiki/Windows_Desktop_Gadgets">Windows Gadget</a>{" "}
        dashboard tools, obsolete today as operating systems have dropped
        support. By typing a name it would drop down an autocomplete menu of
        possible results. Once enter was pressed it would redirect to the ja.is
        website.
      </p>

      <div style={{ display: "flex", justifyContent: "center"}} >
        <Dither
          src="/images/portfolio/ja_combined.png"
          alt="Screenshot of the Já.is OSX Widget and Windows Gadget"
          width={369} height={230}
        />
      </div>

      <p>
        A very fun project to work on. Did not know it at the time but this
        project planted a seed that would eventually grow into a career in
        frontend and product development.
      </p>
    </Layout>
  );
};

export default Portfolio;
