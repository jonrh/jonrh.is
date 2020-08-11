import React from "react";

import Layout from "./../../layouts";

import desk_cover from "./desk_cover.jpg";
import desk_front from "./desk_front.jpg";
import desk_side from "./desk_side.jpg";

// Links
const l = {
	// Hardware
	macmini: "https://everymac.com/systems/apple/mac_mini/specs/mac-mini-core-i7-3.2-late-2018-specs.html",
	mbp: "https://everymac.com/systems/apple/macbook_pro/specs/macbook-pro-core-i7-2.6-15-dual-graphics-late-2013-retina-display-specs.html",
	dell38: "https://en.wikipedia.org/wiki/Dell_monitors#UltraSharp_LCD_monitors",
	dell25: "https://www.tftcentral.co.uk/reviews/dell_u2515h.htm",
	silverstone22: "https://www.silverstonetek.com/product.php?pid=412",
	silverstone11: "https://www.silverstonetek.com/product.php?pid=408",
	keyboard: "https://en.m.wikipedia.org/wiki/Magic_Keyboard",
	mouse: "https://www.logitechg.com/en-us/products/gaming-mice/g903-wireless-gaming-mouse.html",
	chair: "https://en.m.wikipedia.org/wiki/Aeron_chair",
	desk: "https://m2.ikea.com/us/en/p/vaestanby-table-dark-brown-vaestana-dark-brown-s59040344/",
	headphones: "https://en.m.wikipedia.org/wiki/Bose_headphones",
	phone: "https://en.m.wikipedia.org/wiki/IPhone_6S",
	tablet: "https://en.wikipedia.org/wiki/IPad_Pro",
	watch: "https://en.m.wikipedia.org/wiki/Apple_Watch",
	switch: "https://www.nintendo.com/switch/",
	procontroller: "https://en.m.wikipedia.org/wiki/Nintendo_Switch_Pro_Controller",
	twofa: "https://www.yubico.com",
	applepencil: "https://en.m.wikipedia.org/wiki/Apple_Pencil",

	// Software
	webstorm: "https://www.jetbrains.com/webstorm/",
	pycharm: "https://www.jetbrains.com/pycharm/",
	datagrip: "https://www.jetbrains.com/datagrip/",
	xcode: "https://developer.apple.com/xcode/",
	androidstudio: "https://developer.android.com/studio/",
	macdown: "https://github.com/MacDownApp/macdown",
	sublime: "https://www.sublimetext.com",
	asana: "https://asana.com/",
	todoist: "https://todoist.com",
	slack: "https://slack.com",
	signal: "https://www.signal.org",
	telegram: "https://telegram.org",
	qbserve: "https://qotoqot.com/qbserve/",
	timing: "https://timingapp.com",
	notes: "https://en.wikipedia.org/wiki/Notes_(Apple)",
	gitkraken: "https://www.gitkraken.com/",
	chrome: "https://www.google.com/chrome/",
	safari: "https://www.apple.com/safari/",
	timavera: "https://timavera.com/",
	iterm: "https://iterm2.com",
	fastmail: "https://www.fastmail.com",
	ivpn: "https://www.ivpn.net",
};

const Li = ({children, title}) => <li><strong>{title}</strong>: {children}</li>;

/**
 * Maybe to add later: Cable managment:
 *   + TODO-IRON-ROD
 *   + TODO-REUSABLE-ZIPTIES
 *   + TODO-HOOKS
 *   + TODO-SLEAVES
 *   + TODO-DOUBLE-SIDED-SQUARES
 *   + TODO: USB hub mounted underneath & Small Micro-USB charging cables
 */

const Post = (props) => {
	return (
		<Layout>
			<h1>My Remote Setup in 2019</h1>
			<p>August 18, 2019</p>

			<img
				src={desk_cover}
				alt="My desk showing a notebook, fountain pen, Mac Mini, monitors, keyboard and mouse"
			/>

			<h2>Hardware</h2>
			<ul>
				<Li title="Workstation"><a href={l.macmini}>Mac Mini Late-2018</a>, 6-core, 64GB RAM, 2TB SSD</Li>
				<Li title="Laptop"><a href={l.mbp}>15" MacBook Pro Late-2013</a>, 4-core, 16GB RAM, 1TB SSD</Li>
				<Li title="Main Monitor">Dell 38" UltraSharp <a href={l.dell38}>U3818DW</a>, 3840x1600</Li>
				<Li title="Side Monitors">2x Dell 25" UltraSharp <a href={l.dell25}>U2515H</a>, 2560x1440</Li>
				<Li title="Monitor Mounts">SilverStone<a href={l.silverstone22}>SST-ARM22BC</a> & <a href={l.silverstone11}>SST-ARM11BC</a></Li>
				<Li title="Keyboard"><a href={l.keyboard}>Apple Magic Keyboard</a></Li>
				<Li title="Wireless mouse"><a href={l.mouse}>Logitech G903</a></Li>
				<Li title="Headphones"><a href={l.headphones}>Bose QC35</a></Li>
				<Li title="Chair"><a href={l.chair}>Hermann Miller Aeron</a></Li>
				<Li title="Desk"><a href={l.desk}>Västanby</a></Li>
				<Li title="2FA"><a href={l.twofa}>Yubikey</a></Li>
			</ul>

			<h2>Other gear</h2>
			<ul>
				<Li title="Phone"><a href={l.phone}>iPhone 6S+</a> 128GB</Li>
				<Li title="Watch"><a href={l.watch}>Apple Watch 4</a></Li>
				<Li title="Tablet"><a href={l.tablet}>iPad Pro 11</a> & <a href={l.applepencil}>Apple Pencil 2nd gen</a></Li>
				<Li title="Gaming">Nintendo <a href={l.switch}>Switch</a> & <a href={l.procontroller}>Pro Controller</a></Li>
				<li>Fountain pen & notebook</li>
			</ul>

			<h2>Software</h2>
			<ul>
				<Li title="Development IDEs"><a href={l.webstorm}>WebStorm</a>, <a href={l.pycharm}>PyCharm</a>, <a href={l.datagrip}>DataGrip</a>, <a href={l.xcode}>Xcode</a>, <a href={l.androidstudio}>Android Studio</a></Li>
				<Li title="Text editors"><a href={l.macdown}>MacDown</a> (markdown), <a href={l.sublime}>Sublime Text</a> (general)</Li>
				<Li title="Task managment"><a href={l.asana}>Asana</a> (work), <a href={l.todoist}>Todoist</a> (personal)</Li>
				<Li title="Chat"><a href={l.slack}>Slack</a> (work), <a href={l.signal}>Signal</a> & <a href={l.telegram}>Telegram</a> (personal)</Li>
				<Li title="Productivity"><a href={l.qbserve}>Qbserve</a>, <a href={l.timing}>Timing</a></Li>
				<Li title="Notes"><a href={l.notes}>Notes</a> on macOS & iOS</Li>
				<Li title="Version control"><a href={l.gitkraken}>GitKraken</a></Li>
				<Li title="Browsers"><a href={l.chrome}>Chrome</a> & <a href={l.safari}>Safari</a></Li>
				<Li title="Time tracking"><a href={l.timavera}>Tímavera</a></Li>
				<Li title="Terminal"><a href={l.iterm}>iTerm</a></Li>
				<Li title="Email"><a href={l.fastmail}>Fastmail</a></Li>
				<Li title="VPN"><a href={l.ivpn}>IVPN</a></Li>
			</ul>

			<img
				src={desk_front}
				alt="My desk and chair"
			/>

			<img
				src={desk_side}
				alt="My desk and chair"
			/>

		</Layout>
	);
};

export default Post;