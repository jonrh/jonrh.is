import React from "react";

import { Page } from "../components/Post";

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
const astudio = "https://developer.android.com/studio/";

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

const Tools = () => {
  return (
    <Page
      title="Tools"
      path="tools"
      metaDescription="A list of current and past hardware and software tools."
    >
      <p>A list of current and past hardware and software tools.</p>
      <p>Last updated: August 3, 2023.</p>

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
        <li><strong>Microphone</strong>: <RodeWirelessGo2 /></li>
        <li><strong>Gaming</strong>: Nintendo <a href={nswitch}>Switch</a> & <a href={procontroller}>Pro Controller</a></li>
        <li><strong>Battery</strong>: <AnkerPowerCore24K /></li>
        <li><strong>Chargers</strong>: <MagSafeDuoCharger /> & <Compact35WDualUSBC /></li>
        <li><strong>2FA</strong>: <a href={yubikey}>Yubikey</a></li>
      </ul>

      {/* ============================ Software ============================ */}
      <h2 id="software">Software</h2>
      <ul>
        <li><strong>IDEs</strong>: <a href={webstorm}>WebStorm</a>, <a href={pycharm}>PyCharm</a>, <a href={datagrip}>DataGrip</a>, <a href={astudio}>Android Studio</a></li>
        <li>
          <strong>Browsers</strong>:
          <ul>
            <li><a href={orion}>Orion</a> - primary</li>
            <li><a href={safari}>Safari</a> - secondary</li>
            <li><Arc /> - work, multiple profiles</li>
            <li><a href={chrome}>Chrome</a> - work</li>
            <li><a href={firefox}>Firefox</a> - rare dev testing</li>
          </ul>
        </li>
        <li><strong>Search engine</strong>: <a href={kagi}>Kagi</a></li>
        <li><strong>Task management</strong>: <a href="https://asana.com/">Asana</a> (work), <a href="https://todoist.com">Todoist</a> (personal)</li>
        <li><strong>Chat</strong>: <a href="https://slack.com">Slack</a> (work), <a href="https://www.signal.org">Signal</a> & <a href="https://telegram.org">Telegram</a> (personal)</li>
        <li><strong>Notes</strong>: <a href="(https://en.wikipedia.org/wiki/Notes_(Apple)">Notes</a> on macOS & iOS</li>
        <li><strong>Text editors</strong>: <a href="https://github.com/macvim-dev/macvim">MacVim</a> (general)</li>
        <li><strong>Version control</strong>: <Fork /> & <a href="https://www.gitkraken.com/">GitKraken</a></li>
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
        <li>
          Currently still have the <RodeWirelessGo2 /> but no longer actively
          using it. A really great wireless microphone in a small package.
          Bought to improve audio quality in VoIP calls but not making nearly
          as many calls as before. The AirPods Pro 2 are good enough for
          occasional customer calls. Would recommend the Wireless Go II to
          office workers that make regular customer calls or audio/video team
          meetings. If making frequent calls a purpose built wired headset
          would probably be best.
        </li>
      </ul>

      {/* =========================== Changelog ============================ */}
      <h2 id="changelog">Changelog</h2>
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

      <h3>4th Oct 2021</h3>
      <p>Bought <MagSafeDuoCharger/>.</p>

      <h3>25th Aug 2021</h3>
      <p>Bought <RodeWirelessGo2 /> wireless microphone.</p>

      {/* ========================= Past hardware ========================== */}
      <h2 id="past-hardware">Past hardware</h2>
      History of hardware used in the past.

      <ul>
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
        <li><strong>Search engine</strong>: DuckDuckGo</li>
        <li><strong>Productivity</strong>: <Qbserve />. Jun 2016 - May 2023.</li>
        <li><strong>Productivity</strong>: <Timing />. May 2018 - May 2023.</li>
      </ul>

    </Page>
  );
};

export default Tools;