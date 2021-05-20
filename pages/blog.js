import React from "react";
import Head from "next/head";

import Layout from "../components/layout";

// Slugs or path of a page that I (for now at least) don't want to show in the blog list
// These are sound mixes that I did a long time ago. The primary reason for hiding them is that I
// still haven't uploaded the actual MP3s that they were supposed to link to. At a later date I
// hope to fold these back in. This only hides the links from the link list. That means these pages
// are still publicly accessible on the route.
const hiddenPosts = [
  "/16september-2006-mix/",
  "/23september-2006-mix/",
  "/4october-2006-mix/",
  "/7october-2006-mix/",
  "/28october-2006-mix/",
  "/29december-2006-mix/",
  "/28january-2007-mix/",
  "/8april-2007-mix/",
  "/chris-lake-mini-mix/",
  "/6october-2007-mix/",
  "/25february-2008-mix/",
  "/20june-2009-mix/",
  "/how-i-use-beatport-on-a-mac/",
];

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>jonrh - Blog</title>
      </Head>

      <h1>Blog</h1>

      <ul>
        <li><a href="/60x60-meditation-challenge">60x60 Meditation challenge</a></li>
        <li><a href="/2019-setup">My Remote Setup in 2019</a></li>
        <li><a href="/react-native-eu-2017-conference">React Native EU 2017 Conference</a></li>
        <li><a href="/back-into-cryptocurrencies">Back into Cryptocurrencies</a></li>
        <li><a href="/react-native-locale-strings">React Native locale strings</a></li>
        <li><a href="/using-ffmpeg-to-convert-video-to-gif-on-macos">Using FFmpeg to convert video to gif on macOS</a></li>
        <li><a href="/custom-totalfinder-icon-in-osx-el-capitan">Custom TotalFinder Icon in OSX El Capitan</a></li>
        <li><a href="/retrospective-on-react">Retrospective on React</a></li>
        <li><a href="/gitignore-for-latex-projects">Gitignore for LaTeX projects</a></li>
        <li><a href="/macbook-early-2015-review">MacBook Early 2015 review</a></li>
        <li><a href="/considerations-before-buying-an-e-class-2002-2009-w211-mercedes-benz">Considerations before buying an E class 2002 – 2007 W211 Mercedes Benz</a></li>
        <li><a href="/fix-for-cannot-read-property-apply-of-undefined-using-reflux">Fix for “Cannot read property apply of undefined” using Reflux</a></li>
        <li><a href="/fix-for-deleted-missing-photos-videos-after-5-1-to-5-1-1-ios-upgrade">Fix for deleted (missing) photos &amp; videos after 5.1 to 5.1.1 iOS upgrade</a></li>
        <li><a href="/getting-the-asus-usb-bt211-bluetooth-dongle-to-work-on-a-hackintosh">Getting the Asus USB-BT211 Bluetooth dongle to work on a Hackintosh</a></li>
        <li><a href="/mac-app-store-problems">Mac App Store problems</a></li>
        <li><a href="/registering-a-is-domain-with-bluehost">Registering a .is domain with Bluehost</a></li>
        <li><a href="/26-slim-bicycle-tire-review">26″ slim bicycle tire review</a></li>
        <li><a href="/oddities-in-scripting-for-google-docs-spreadsheet">Oddities in Google docs spreadsheet</a></li>
        <li><a href="/great-minds-think-alike">Great minds think alike</a></li>
        <li><a href="/deadmau5-ghosts-and-stuff-lyrics">Deadmau5 – Ghosts ‘n’ Stuff lyrics</a></li>
      </ul>

      {/*<h2>Old posts</h2>*/}
      {/*<ul>*/}
      {/*  <li><a href="/16september-2006-mix">16september-2006-mix</a></li>*/}
      {/*  <li><a href="/23september-2006-mix">23september-2006-mix</a></li>*/}
      {/*  <li><a href="/4october-2006-mix">4october-2006-mix</a></li>*/}
      {/*  <li><a href="/7october-2006-mix">7october-2006-mix</a></li>*/}
      {/*  <li><a href="/28october-2006-mix">28october-2006-mix</a></li>*/}
      {/*  <li><a href="/29december-2006-mix">29december-2006-mix</a></li>*/}
      {/*  <li><a href="/28january-2007-mix">28january-2007-mix</a></li>*/}
      {/*  <li><a href="/8april-2007-mix">8april-2007-mix</a></li>*/}
      {/*  <li><a href="/chris-lake-mini-mix">chris-lake-mini-mix</a></li>*/}
      {/*  <li><a href="/6october-2007-mix">6october-2007-mix</a></li>*/}
      {/*  <li><a href="/25february-2008-mix">25february-2008-mix</a></li>*/}
      {/*  <li><a href="/20june-2009-mix">20june-2009-mix</a></li>*/}
      {/*  <li><a href="/how-i-use-beatport-on-a-mac">how-i-use-beatport-on-a-mac</a></li>*/}
      {/*</ul>*/}

    </Layout>
  );
};

export default Blog;