import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import { rhythm, scale } from "../utils/typography";

import Bio from "../components/Bio";

/** Images */
import bd_dashboard from "./../images/consulting/bd_dashboard.png";
import bd_distribution from "./../images/consulting/bd_distribution.png";
import bd_fcr from "./../images/consulting/bd_fcr.png";
import bd_frames_and_fish from "./../images/consulting/bd_frames_and_fish.png";
import bd_login from "./../images/consulting/bd_login.png";
import bd_trendgraph from "./../images/consulting/bd_trendgraph.png";
import bdmonitor1 from "./../images/consulting/bdmonitor1.png";
import bdmonitor2 from "./../images/consulting/bdmonitor2.png";
import bdmonitor3 from "./../images/consulting/bdmonitor3.png";
import bdmonitor4 from "./../images/consulting/bdmonitor4.png";
import bdmonitor5 from "./../images/consulting/bdmonitor5.png";
import ja_combined from "./../images/consulting/ja_combined.png";
import mockup from "./../images/consulting/mockup.png";


export default class Consulting extends React.Component {
  render() {
    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title") +" - Dashboard Consulting"} />
        <h1>Dashboard Consulting</h1>

        <p style={{textDecoration: "underline"}}>
          <strong>I help companies create bespoke dashboards their customers want to use</strong>
        </p>

        <p>
          Over the years I’ve specialised in designing and constructing front end applications,
          that is websites and mobile apps for iPhone and Android. More specifically the type of
          apps that I’ve specialised in are bespoke dashboards that add insights and convenience
          for the customers & employees of a company.
        </p>

        <p>
          What is a dashboard? Think of a dashboard in a car, except for the operation of your
          business or product. To take an analogy here are few example indicators:
        </p>

        <ul>
          <li><strong>Car dashboard</strong>: speedometer, fuel gauge, check engine light</li>
          <li><strong>Business dashboard</strong>: quarterly profit, conversion rate, cash burn rate</li>
          <li><strong>Product dashboard</strong>: current hardware readings, utilisation, uptime</li>
        </ul>

        <p>
          An ideal dashboard consists of 1 - 3 indicators providing an at a glance view of the
          current status. However often dashboards need to provide more insights than that, for
          example to identify a potential problem.
        </p>

        <p>
          My value proposition is that I take care of the dashboard frontend so you don't have to
          invest your employee resources in mastering a frontend tech that may become obsolete after
          a few years or months. Focus your effort on your customers, product, data and a backend
          that will outlast multiple frontends.
        </p>

        <p>
          We will be a good fit if you:
        </p>

        <ul>
          <li>Are a small to medium sized business.</li>
          <li>Require a branded &amp; tailor made dashboard for yourself or your customers.</li>
          <li>Have in-house backend expertise to serve your data through an API.</li>
          <li>Have a good idea of what your most important indicators are and what to filter by.</li>
          <li>Want to entirely offload the frontend work &amp; responsibilities.</li>
        </ul>

        <h2>Let's work together!</h2>
        <p>
          Tap into my dashboard expertise and let's make an awesome dashboard together. If you
          think I would be a great fit to help you bring added value to your customers, I'd love to
          hear from you. Please don't hesitate to get in touch at <a href="mailto:hi@jonrh.is">hi@jonrh.is</a>.
        </p>

        <h3 id="previous-work"><a href="#previous-work">#</a>Previous Work</h3>
        <p>
          The bulk of my professional work on dashboards has been done for the company Vaki
          Aquaculture Systems Ltd., the industry leader in fish counting and size estimation of
          live fish. Vaki offers a variety of solutions but the one I worked on was the
          <a href="http://www.vaki.is/products/biomass-daily/">Biomass Daily system</a>. The gist
          of it is this: you are a company that operates fish farms. On each farm there are
          multiple sea cages with salmon. You rent hardware frames from Vaki and lower them into
          the sea cages. As the salmon swim through the frames their weight is estimated. This
          data is then aggregated and analysed in various dashboards.
        </p>
        <img src={bd_frames_and_fish} alt="Biomass Daily frames" />

        <h3 id="bd-monitor"><a href="#bd-monitor">#</a>iPhone App: BD Monitor</h3>
        <p>
          This project was about creating an auxiliary mobile app to monitor the status of the
          hardware frames that run 24/7 capturing size estimations. Before this app, customers
          would check the current hardware status on a PC. With an app the process became
          significantly more convenient for the site managers, who are often on the move.
        </p>
        <img src={mockup} alt="Early mockups demonstrating bottom navigation and History view" />

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

        <img src={bdmonitor1} alt="BD Monitor login and home screen" />
        <img src={bdmonitor2} alt="BD Monitor Summary & Settings" />
        <img src={bdmonitor3} alt="BD Monitor History" />
        <img src={bdmonitor4} alt="BD Monitor Utilisation" />
        <img src={bdmonitor5} alt="BD Monitor sea cage detail view" />


        <h4 id="biomass-daily"><a href="#biomass-daily">#</a>Web Dashboard: biomassdaily.com</h4>
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

        <h3 id="ja-gadget-widget"><a href="#ja-gadget-widget">#</a>Já.is Gadget/Widget</h3>
        <p>
          This was the project that sparked my interest and lead me to where I am today. A very small 1-2 week project I worked on back in 2010 for <a href="https://ja.is/">Já.is</a>, the official phonebook registry of Iceland. Super simple <a href="https://en.wikipedia.org/wiki/Dashboard_(macOS)">OSX Widget</a> and <a href="https://en.wikipedia.org/wiki/Windows_Desktop_Gadgets">Windows Gadget</a> dashboard tools, obsolete today as operating systems have dropped support. You would start typing some name and it would drop down an autocomplete menu of possible results. Once enter was pressed it would redirect to the ja.is website.
        </p>

        <img
          src={ja_combined}
          alt="Screenshot of the Já.is OSX Widget and Windows Gadget"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />

        <p>
          This was one of the most fun projects I worked on. I didn't know it at the time but this project planted a seed that would eventually lead me to specialising in dashboards as a career.
        </p>


        <h2>Let's work together!</h2>
        <p>
          Tap into my dashboard expertise and let's make an awesome dashboard together. If you think I would be a great fit to help you bring added value to your customers, I'd love to hear from you. Please don't hesitate to get in touch at <a href="mailto:hi@jonrh.is">hi@jonrh.is</a>
        </p>

        <hr style={{marginBottom: rhythm(1)}}/>
        <Bio />
      </div>
    );
  }
}

Consulting.propTypes = {
  route: PropTypes.object,
};

export const pageQuery = graphql`
query ConsultingQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`;
