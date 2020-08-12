import React from "react";

import Layout from "./../../layouts";

import tweet_screenshot from "./tweet.png";

const Post = () => {
  return (
    <Layout>
      <h1>Back into Cryptocurrencies</h1>
      <p>August 07, 2017</p>

      <p>
        Recently, I got back into cryptocurrencies. I got interested in bitcoin around 2010/2011,
        did a bit of CPU mining on my laptop (never won a block) and got ₿0.05 bitcoins for free
        from the Bitcoin Faucet (now worth about ~$150). Bitcoin seemed a very enticing
        alternative, given I was living under capital controls in Iceland at the time. However,
        bitcoin back then was super niche and the utility had not yet materialised. With time, I
        lost my bitcoins and mostly forgot about them but stayed loosely up-to-date over the years.
        Until now.
      </p>

      <p>This blog post was put together after a few exchanges on Twitter:</p>

      <img src={tweet_screenshot} alt="Tweets that inspired this blog post" />

      <h3>Getting Started</h3>
      <p>
        I recommend reading through the <a href="https://bitcoin.org/en/getting-started">getting
        started guide on bitcoin.org</a>. bitcoin.com also has some decent{" "}
        <a href="https://www.bitcoin.com/getting-started/">supporting material</a> but it seems to
        be a business pushing its own agenda. Roughly speaking the process is as follows:
      </p>

      <ol>
        <li>Create a <a href="https://bitcoin.org/en/choose-your-wallet">wallet</a>,</li>
        <li>Sign up at an <a href="https://bitcoin.org/en/exchanges">exchange</a>,</li>
        <li>Send fiat money to the exchange,</li>
        <li>Buy cryptocurrencies on the exchange,</li>
        <li>Immediately send to your wallet.</li>
      </ol>

      <p>
        Wallets are how you securely store cryptocurrencies. There are varying types of wallets
        that serve different purposes:
      </p>

      <ul>
        <li><strong>Hot</strong>: Mobile phone wallets.</li>
        <li>
          <strong>Cold</strong>: Offline hardware such as <a
          href="https://trezor.io/">Trezor</a> or <a
          href="https://www.ledgerwallet.com/products/ledger-nano-s">Ledger</a>.
        </li>
        <li><strong>Deep freeze</strong>: Private keys or wallet recovery codes (12-24 words)
          printed on paper.
        </li>
      </ul>

      <p>
        Hot wallets are for your daily spending. Do not store more in them than you would carry
        around in cash. The wallets I would recommend the most are offline hardware wallets. Long
        term, the safest option in my opinion would be laminated paper (to avoid water damage)
        wallets stored in fireproof safes at a minimum of two locations. Another interesting
        deep-freeze option is <a href="https://cryptosteel.com/">engraved stainless steel</a>.
      </p>

      <p><strong>Do</strong>:</p>

      <ul>
        <li>
          Use offline hardware wallets as soon as you can. It is the safest yet practical option
          out there.
        </li>
        <li>
          Write down the 12 or 24 word recovery phrase when creating a wallet. Do not skip this!
          It is a way to recover your funds if your phone/hardware gets destroyed, lost, or stolen.
          These words should be written down privately. Anyone with access to these words can use
          your money.
        </li>
        <li>
          Follow Andreas Antonopoulos on <a href="https://twitter.com/aantonop">Twitter</a> and
          especially <a href="https://www.youtube.com/user/aantonop">YouTube</a>. He is incredibly
          good at explaining bitcoin in simple terms.
        </li>
        <li>Be paranoid. You can probably not be paranoid enough.</li>
      </ul>

      <p><strong>Do not</strong>:</p>
      <ul>
        <li>Use a wallet on your personal computer. It is simply not secure enough.</li>
        <li>Keep fiat nor cryptocurrencies on exchanges. Exchanges get <a
          href="https://en.wikipedia.org/wiki/Mt._Gox">robbed</a> and <a
          href="https://en.wikipedia.org/wiki/BTC-e">seized</a>.
        </li>
        <li>Day trade cryptocurrencies unless you know what you are doing.</li>
        <li>Worry too much about when to buy. <a
          href="https://en.wikipedia.org/wiki/Dollar_cost_averaging">Just buy frequently over
          time</a> and hold.
        </li>
        <li>Mine cryptocurrencies for profit unless you know what you are doing. Mostly profitable
          on special
          hardware in datacenters.
        </li>
      </ul>

      <h3>What I do</h3>

      <ul>
        <li><strong>Exchange</strong>: Kraken.</li>
        <li><strong>Hot wallets</strong>: Jaxx &amp; Copay.</li>
        <li><strong>Cold wallet</strong>: Ledger Nano S.</li>
      </ul>

      <p>
        I look at bitcoin as a long term (5-30 years) storage of value: digital gold. Transaction
        fees can range from €0.5 to €4, so the only thing I will do with bitcoins is to hold on to
        them, buy other cryptocurrencies and maybe take part in <a
        href="https://en.wikipedia.org/wiki/Initial_coin_offering">ICOs</a>. I will look into other
        currencies for utility, like buying and trading things.
      </p>

      <p>
        I do not hold any allegiance to any specific cryptocurrencies. My strategy so far is more
        or less to “buy into crypto”. That means I split roughly on total <a
          href="https://coinmarketcap.com/charts/">market capitalisation</a> of each coin:
      </p>
      <ul>
        <li>Bitcoin: 60%</li>
        <li>Ethereum: 20%</li>
        <li>Alt coins: 20% (litecoin, etc)</li>
      </ul>

      <p>
        Personally I do keep a maximum of €200 on Kraken. I accept the risk of losing it but in
        return I have the option to buy more on short notice (when price drops). Furthermore, I
        never invest more into cryptocurrencies than I would be okay with loosing entirely. A hard
        earned lesson from the 2008 financial crash in Iceland.
      </p>
    </Layout>
  );
};

export default Post;




