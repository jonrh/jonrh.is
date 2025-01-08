import React from "react";

import { Page } from "../components/Post";

// Todo
// + maybe: list old phones + chargers
// + maybe: mention a note that I do use Flask (Tímavera tech stack)
// + update Asana
// + review other software used
// + maybe: add Revolut as business banking
// + list 15" MacBook Pro Late-2013
// + list 37.5" ultrasharp
// + list brother printer
// + list scanner used in Ireland
// + other tech used in Ireland?
// + logitech brio
// + Services: Rollbar / Sentry / Imgix, etc
// + Maybe: airtags, bought oct 4th 2021

const macmini = "https://everymac.com/systems/apple/mac_mini/specs/mac-mini-core-i7-3.2-late-2018-specs.html";
const mba = "https://everymac.com/systems/apple/macbook-air/specs/macbook-air-m2-8-core-cpu-10-core-gpu-13-2022-specs.html";
const dellU4320Q = "https://www.dell.com/en-us/work/shop/dell-ultrasharp-43-4k-usb-c-monitor-u4320q/apd/210-avke/monitors-monitor-accessories";
const dell25 = "https://www.tftcentral.co.uk/reviews/dell_u2515h.htm";
const silverstone22 = "https://www.silverstonetek.com/product.php?pid=412";
const silverstone11 = "https://www.silverstonetek.com/product.php?pid=408";
const keyboard = "https://en.m.wikipedia.org/wiki/Magic_Keyboard";
const mouse = "https://www.logitechg.com/en-us/products/gaming-mice/g903-wireless-gaming-mouse.html";
const chair = "https://en.m.wikipedia.org/wiki/Aeron_chair";
const desk = "https://m2.ikea.com/us/en/p/vaestanby-table-dark-brown-vaestana-dark-brown-s59040344/";
const airpodspro = "https://en.wikipedia.org/wiki/AirPods_Pro";
const phone = "https://en.wikipedia.org/wiki/IPhone_13";
const ipadpro = "https://en.wikipedia.org/wiki/IPad_Pro";
const watch = "https://en.m.wikipedia.org/wiki/Apple_Watch";
const nswitch = "https://www.nintendo.com/switch/";
const procontroller = "https://en.m.wikipedia.org/wiki/Nintendo_Switch_Pro_Controller";
const yubikey = "https://www.yubico.com";
const applepencil = "https://en.m.wikipedia.org/wiki/Apple_Pencil";
const toothfairy = "https://apps.apple.com/us/app/toothfairy/id1191449274?mt=12";
const orion = "https://browser.kagi.com/";
const safari = "https://www.apple.com/safari/";
const chrome = "https://www.google.com/chrome/";
const firefox = "https://www.mozilla.org/en-US/firefox/new/";
const onep = "https://1password.com/";
const rectangle = "https://rectangleapp.com/";
const photoshop = "https://en.wikipedia.org/wiki/Adobe_Photoshop";
const illustrator = "https://en.wikipedia.org/wiki/Adobe_Illustrator";
const kagi = "https://kagi.com/";
const webstorm = "https://www.jetbrains.com/webstorm/";
const pycharm = "https://www.jetbrains.com/pycharm/";
const datagrip = "https://www.jetbrains.com/datagrip/";

{/* =============================== Hardware =============================== */}
const RodeWirelessGo2 = () => <a href="https://rode.com/en-us/microphones/wireless/wirelessgoii">Røde Wireless Go II</a>;
const AnkerPowerCore24K = () => <a href="https://www.anker.com/products/a1289">Anker PowerCore 24K</a>;
const MagSafeDuoCharger = () => <a href="https://support.apple.com/en-us/HT211925">MagSafe Duo Charger</a>;
const Compact35WDualUSBC = () => <a href="https://support.apple.com/en-us/HT213263">Compact 35W Dual USB-C</a>;

{/* =============================== Software =============================== */}
const Arc = () => <a href="https://arc.net">Arc</a>;
const Fork = () => <a href="https://fork.dev">Fork</a>;
const Qbserve = () => <a href="https://qotoqot.com/qbserve">Qbserve</a>;
const Timing = () => <a href="https://timingapp.com">Timing</a>;
const ChatGPT = () => <a href="https://openai.com">ChatGPT Plus</a>;
const Xcode = () => <a href="https://developer.apple.com/xcode/">Xcode</a>;
const Adstio = () => <a href="https://developer.android.com/studio">Android Studio</a>;
const Skype = () => <a href="https://skype.com">Skype</a>;
const Toky = () => <a href="https://toky.co">Toky</a>;
const Cursor = () => <a href="https://cursor.com">Cursor</a>;
const Zed = () => <a href="https://zed.dev">Zed</a>;
const MacVim = () => <a href="https://github.com/macvim-dev/macvim">MacVim</a>;

// Experimental code formatting to maximize HTML content per line
const Content = () => (<>
<p>A list of current and past hardware and software tools.</p>
<p>Last updated: January 6, 2025.</p>

Table of contents:
<ul>
  <li><a href="#hardware">Hardware</a></li>
  <li><a href="#software">Software</a></li>
  <li><a href="#techstack">Preferred tech stack</a></li>
  <li><a href="#notes">Notes</a></li>
  <li><a href="#changelog">Changelog</a></li>
  <li><a href="#past-hardware">Past hardware</a></li>
  <li><a href="#past-software">Past software</a></li>
</ul>

{/* ============================ Hardware ============================ */}
<h2 id="hardware">Hardware</h2>
<ul>
  <li><strong>Laptop</strong>: <a href={mba}>13.6" MacBook Air M2</a>, 10-core, 24GB RAM, 2TB SSD</li>
  <li><strong>Monitor / TV</strong>: Dell 42.5" UltraSharp <a href={dellU4320Q}>U4320Q</a>, 3840x2160</li>
  <li><strong>Phone</strong>: <a href={phone}>iPhone 13 mini</a> 256GB</li>
  <li><strong>Headphones</strong>: <a href={airpodspro}>AirPods Pro 2nd gen</a></li>
  <li><strong>Gaming</strong>: Nintendo <a href={nswitch}>Switch</a> & <a href={procontroller}>Pro Controller</a></li>
  <li><strong>Battery</strong>: <AnkerPowerCore24K /></li>
  <li><strong>Chargers</strong>: <MagSafeDuoCharger /> & <Compact35WDualUSBC /></li>
  <li><strong>2FA</strong>: <a href={yubikey}>Yubikey</a></li>
</ul>

{/* ============================ Software ============================ */}
<h2 id="software">Software</h2>
<ul>
  <li><strong>IDEs</strong>: <a href={webstorm}>WebStorm</a>, <a href={pycharm}>PyCharm</a>, <a href={datagrip}>DataGrip</a>, <Cursor /></li>
  <li>
    <strong>Browsers</strong>:
    <ul>
      <li><a href={orion}>Orion</a> - primary</li>
      <li><a href={safari}>Safari</a> - secondary</li>
      <li><Arc /> - work, multiple profiles</li>
      <li><a href={chrome}>Chrome</a> - work</li>
      <li><a href={firefox}>Firefox</a> - dev testing</li>
    </ul>
  </li>
  <li><strong>AI</strong>: <ChatGPT /> (OpenAI)</li>
  <li><strong>Search engine</strong>: <a href={kagi}>Kagi</a></li>
  <li><strong>Task management</strong>: <a href="https://asana.com/">Asana</a> (work), <a href="https://todoist.com">Todoist</a> (personal)</li>
  <li><strong>Chat</strong>: <a href="https://slack.com">Slack</a> (work), <a href="https://www.signal.org">Signal</a> & <a href="https://telegram.org">Telegram</a> (personal)</li>
  <li><strong>VoIP</strong>: <Toky /> (work), <Skype /> (personal)</li>
  <li><strong>Notes</strong>: <a href="(https://en.wikipedia.org/wiki/Notes_(Apple)">Notes</a> on macOS & iOS</li>
  <li><strong>Text editors</strong>: <MacVim />, <Zed /></li>
  <li><strong>Version control</strong>: <a href="https://www.gitkraken.com/">GitKraken</a></li>
  <li><strong>Time tracking</strong>: <a href="https://timavera.com/">Tímavera</a></li>
  <li><strong>Terminal</strong>: <a href="https://sw.kovidgoyal.net/kitty/">Kitty</a></li>
  <li><strong>Email</strong>: <a href="https://www.fastmail.com">Fastmail</a></li>
  <li><strong>VPN</strong>: <a href="https://www.ivpn.net">IVPN</a></li>
  <li><strong>Images</strong>: <a href={photoshop}>Photoshop</a>, <a href={illustrator}>Illustrator</a></li>
  <li><strong>Window manager</strong>: <a href={rectangle}>Rectangle</a></li>
  <li><strong>Secrets</strong>: <a href={onep}>1Password</a></li>
  <li><strong>Utils</strong>: <a href={toothfairy}>ToothFairy</a></li>
</ul>

{/* ====================== Preferred tech stack ====================== */}
<h2 id="techstack">Preferred tech stack</h2>
<ul>
  <li><strong>Infrastructure</strong>: AWS, Vercel, Deno Deploy</li>
  <li><strong>Frameworks</strong>: Next.js, React Native & Expo</li>
  <li><strong>CSS frameworks</strong>: Tailwind, Bootstrap</li>
  <li><strong>Programming language</strong>: JavaScript</li>
  <li><strong>Database</strong>: Fauna</li>
</ul>

{/* ============================= Notes ============================== */}
<h2 id="notes">Notes</h2>
<ul>
  <li>
    Been trying to work mostly outdoors after acquiring the MacBook Air
    M2 so the Dell 42.5" UltraSharp <a href={dellU4320Q}>U4320Q</a>{" "}
    monitor is personally mostly used as a TV. Partner uses it a lot when
    working from home. A great monitor with a massive screen real estate.
    The monitor runs at a native 3840x2160 resolution (4K) which is like
    having 4x 1920x1080 monitors except in one panel.
  </li>
</ul>

{/* =========================== Changelog ============================ */}
<h2 id="changelog">Changelog</h2>
<h3>8th Jan 2025</h3>
<p>
  Started using <Cursor /> as an IDE. An AI-first code editor built on top of 
  VSCode.
</p>

<h3>1st Dec 2024</h3>
<p>
  Started using <Zed /> as a text editor. A high-performance, 
  multiplayer code editor written in Rust.
</p>

<h3>1st Jul 2024</h3>
<p>
  Loaned a friend the <RodeWirelessGo2/> wireless microphone. May or may not
  turn out to be a permanent loan.
</p>
<p>
  A great wireless microphone in a small package. Used it a lot when making
  regular VoIP calls. Saw little to no use after moving multiple timezones.
  The AirPods Pro 2 were good enough for occasional customer calls.
</p>
<p>
  In my setup I clipped the WG II mic to my shirt, used AirPods Pro for
  incoming audio and the WG II receiver plugged into my computer via USB-C.
  This resulted in a noticeably better incoming and outgoing audio quality.
  The AirPods Pro could dedicate the entire Bluetooth bandwidth to what I
  would hear instead of chopping the bandwidth in half for handling both
  directions with a way worse mic. A major selling point of it to me was being
  able to freely walk around in my office while on calls.
</p>
<p>
  It could be a bit of a fumble to get working correctly. macOS was not great
  at remembering or properly handling audio device preferences. If the AirPods
  Pro re-connected macOS would for example sometimes set the mic input to the
  Airpods even though there was a way better mic already connected. Maybe there
  is software out there that could enforce a firm preferences.
</p>
<p>
  Would recommend it or the newer variants of it to tech-savvy workers that
  want improved audio quality or the option to walk or pace around while on
  calls. If strictly seated or making a lot of calls a purpose built wired
  headset would probably be more suitable and reliable.
</p>

<h3>10th Jun 2024</h3>
<p>
  Wrote a <a href="/anker-powercore-24k-review">review</a> on
  the <AnkerPowerCore24K/> external battery after 1 year of use. It has
  become a must have companion for the MacBook Air M2.
</p>

<h3>5th Oct 2023</h3>
<p>
  Stopped using <Fork />. It is still installed and serves as a fallback
  if GitKraken acts up. Ultimately found the flow of GitKraken to be
  more suitable.
</p>

<h3>2nd Jul 2023</h3>
<p>
  Bought <AnkerPowerCore24K />. Intended as an external battery for the
  MacBook Air M2. Lasts for about 1.2x charges.
</p>

<h3>28th Jun 2023</h3>
<p>Started trying out <Fork /> as an alternative to GitKraken.</p>

<h3>22nd May 2023</h3>
<p>
  <a href={macmini}>Mac Mini Late-2018</a> given away as a hand-me-down.
  A great machine that still has a lot left in it. Did not see much use
  after acquiring the 13.6" MacBook Air M2. Have owned three Mac Minis in
  the past and they have all been great, small, and cost effective
  machines. Some of Apple's finest work.
</p>
<p>
  Also gave away <a href={keyboard}>Apple Magic Keyboard</a> to go along
  with the Mac Mini. Fantastic keyboard. Been a big fan of Apple
  keyboards throughout the years. Best tried so far. Even prefer it to
  mechanical keyboards because of the much shorter key travel distance.
</p>

<h3>16th Mar 2023</h3>
<p>
  Subscribed to a <ChatGPT /> subscription with OpenAI for access to ChatGPT 4.
</p>

<h3>26th Jan 2023</h3>
<p>
  Started using <Arc />. A Chromium based browser for power users.
  First-class support for multiple profiles and better tab management.
  Convenient when managing multiple separate logins for the same or
  similar set of websites (Gmail, Google Ads, etc). Non-pinned tabs
  automatically clear up the next day.
</p>

<h3>9th Nov 2022</h3>
<p>Upgraded to AirPods Pro 2nd gen from 1st gen.</p>

<h3>8th Nov 2022</h3>
<p>
  <a href={watch}>Apple Watch 4</a> given away as a hand-me-down. Did not
  get a new watch. Liked the sleep and health tracking of the device but
  not enough to warrant buying a new watch. Enjoy having a free arm more.
</p>

<p>
  <a href={ipadpro}>iPad Pro 11"</a> & <a href={applepencil}>Apple Pencil
  2nd gen</a> given away as hand-me-down. The iPad and pencil was great
  for signing PDFs and general browsing. However the device did not live
  up to expectations doing frontend development work. The hardware is
  great but the device is seriously hamstrung by the operating system.
</p>

<p>
  <a href={airpodspro}>AirPods Pro</a> given away as hand-me-down.
  Amazing headphones that still had decent amount of life left. Although
  they had been used a lot (4-8h per day) and battery capacity was
  reduced. Upgraded to the AirPods Pro 2nd gen. Was initially very
  sceptical about the AirPods Pro but decided to give it a try on a
  recommendation of others. Used Bose QC-35 before which had slightly
  better sound and active noise cancelling. However the QC-35 would often
  have connection issues especially when switching between multiple
  devices. The AirPods switched more or less seamlessly between devices,
  sounded good enough, and had good enough active noise cancellation.
  The winning formula was how small the overall package is.
</p>

<h3>5th Nov 2022</h3>
<p>
  Handed down two Dell 25" UltraSharp <a href={dell25}>U2515H</a>{" "}
  (2560x1440) monitors along with SilverStone{" "}
  <a href={silverstone22}>SST-ARM22BC</a> &{" "}
  <a href={silverstone11}>SST-ARM11BC</a> monitor mounts. Great monitors
  and mounts that have many more years left. The exact monitors are no
  longer sold but a Dell UltraSharp has always proved exceptional. Would
  not hesitate to buy the exact monitor mounts again. It was such a game
  changer to have them, desk became a lot less cluttered, better looking,
  and easier to clean.
</p>
<p>
  Handed down as well a <a href={mouse}>Logitech G903</a> wireless mouse.
  It was okay. Expensive and ugly but tracked exceptionally well. Used it
  directly on the desk. After some time the left clicker started to ghost
  and occasionally double click on single clicks which was annoying. The
  infinity scroll wheel is bar-none the best scroll wheel. It was
  available on some high-end Logitech mice. A massive quality of life
  improvement if scrolling a lot in very large documents.
</p>

<h3>29th Jul 2022</h3>
<p>
  After upgrading to the M2 MacBook Air the Mac Mini did not see much use
  any more. Also did not install <Qbserve /> nor <Timing /> again. Both
  great software. Would recommend for keeping track of productivity and
  time ledger programs used. Might use again later but do not currently
  have as much use for them.
</p>

<h3>28th Jul 2022</h3>
<p>
  Upgraded to a 13.6" MacBook Air M2 from 15" MacBook Pro Late-2013. Came
  with <Compact35WDualUSBC />.
</p>

<h3>12th Jul 2022</h3>
<p>
  The Tímavera production app was converted from a standard React Native
  project to Expo. In that transition there were no longer any underlying
  native iOS and Android projects and hence I did not have to use{" "}
  <Xcode /> and <Adstio /> anymore. I reluctantly had to use those for 6 years
  while managing standard React Native projects since August 2016. Of the two
  Android Studio was a clear winner. Google made a very smart move to build on
  top of IntelliJ, in my opinion the best Java IDE there was at the time. A
  comprehensive and robust developer tool. It felt like Xcode was not designed
  by practicing developers and that it was burdened with legacy. For example
  managing configuration in <i>Info.plist</i> and terrifying git diffs on
  the <i>.xcodeproj</i> file.
</p>

<h3>6th Jan 2022</h3>
<p>Subscribed to <Toky /> business VoIP.</p>

<h3>4th Oct 2021</h3>
<p>Bought <MagSafeDuoCharger/>.</p>

<h3>25th Aug 2021</h3>
<p>Bought <RodeWirelessGo2 /> wireless microphone.</p>

<h3>6th May 2019</h3>
<p>Subscribed to <Skype /> VoIP with phone numbers.</p>

{/* ========================= Past hardware ========================== */}
<h2 id="past-hardware">Past hardware</h2>
History of hardware used in the past.

<ul>
  <li><strong>Microphone</strong>: <RodeWirelessGo2/>. Aug 2021 - Jul 2024.</li>
  <li><strong>Workstation</strong>: <a href={macmini}>Mac Mini Late-2018</a>, 6-core, 64GB RAM, 2TB SSD. Jan 2019 - May 2023.</li>
  <li><strong>Keyboard</strong>: <a href={keyboard}>Apple Magic Keyboard</a>. Jan 2019 - May 2023.</li>
  <li><strong>Watch</strong>: <a href={watch}>Apple Watch 4</a>. Jan 2019 - Nov 2022.</li>
  <li><strong>Tablet</strong>: <a href={ipadpro}>iPad Pro 11</a> & <a href={applepencil}>Apple Pencil 2nd gen</a>. Jan 2019 - Nov 2022.</li>
  <li><strong>Headphones</strong>: <a href={airpodspro}>AirPods Pro 1st gen</a>. Aug 2021 - Nov 2022.</li>
  <li><strong>Monitors</strong>: 2x <a href={dell25}>Dell 25" UltraSharp U2515H</a>. Oct 2016 - Nov 2022.</li>
  <li><strong>Wireless mouse</strong>: <a href={mouse}>Logitech G903</a>. Nov 2017 - Nov 2022.</li>
</ul>

{/* ========================= Past software ========================== */}
<h2 id="past-software">Past software</h2>
History of software used in the past.

<ul>
  <li>
    <strong>IDEs</strong>:
    <ul>
      <li><Xcode />. Aug 2016 - Jul 2022.</li>
      <li><Adstio />. Aug 2016 - Jul 2022.</li>
    </ul>
  </li>
  <li><strong>Search engine</strong>: DuckDuckGo</li>
  <li><strong>Productivity</strong>: <Qbserve />. Jun 2016 - May 2023.</li>
  <li><strong>Productivity</strong>: <Timing />. May 2018 - May 2023.</li>
</ul>

</>);

const Tools = () => (
  <Page
    title="Tools"
    path="tools"
    metaDescription="A list of current and past hardware and software tools."
  >
    <Content />
  </Page>
);

export default Tools;