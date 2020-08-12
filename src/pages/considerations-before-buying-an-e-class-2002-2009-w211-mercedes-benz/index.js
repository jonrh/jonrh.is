import React from "react";

import Layout from "./../../layouts";

import jonrh_benz from "./jonrh-benz.jpg";
import benz_meetup from "./benz-meetup-2014.jpg";
import service_brake from "./service-brake-visit-workshop.jpg";
import say_what from "./say-what.gif";
import sbc_mercedes_benz from "./sbc-mercedes-benz.jpg";

const Post = () => {
  return (
    <Layout>
      <h1>Considerations before buying an E class 2002 – 2007 W211 Mercedes Benz</h1>
      <p>May 03, 2015</p>

      <p><strong>Tl;Dr</strong> summary version at the bottom.</p>

      <p>
        This blog post details my experience of buying a used <a
        href="http://en.wikipedia.org/wiki/Mercedes-Benz_E-Class_(W211)">W211</a> Mercedes Benz.
        The purpose of it is to hopefully allow others to avoid the mistakes that I made in the
        buying process.
      </p>

      <p>
        Back in September 2014 I finally realised a long running dream to buy a Mercedes Benz. I
        was pretty stoked about it. The model was Avantgarde E270 2002 CDI (disel).
      </p>

      {/*
        Todo: There is some funky stuff done with the colour. It's more grey than it should be.
        For example if a PNG of this same jpg image is used it gets grey. The JPG is unaffected.
      */}
      <img src={jonrh_benz} alt="Me and then newly bought Mercedes" />

      <p>
        Before buying the car I searched for months for a suitable candidate and test drove about
        5 other cars. I read a lot of guides but what I found most helpful in my pre-buy research
        was <a href="https://www.youtube.com/user/Mercedessource">Mercedessource’s</a> <a
        href="https://www.youtube.com/playlist?list=PLtRKk64pu2wor0z1jFnOhv6LIBlIh1Kxa">Buying a 10
        to 15 Year Old Mercedes</a> video series. The series covers a lot of good advice but if I
        were to pick one tip it’d be the how important it is to have the car inspected by a
        professional before committing to the purchase. This point was also raised in all the
        guides I read and as well by my friends.
      </p>

      <img
        src={benz_meetup}
        alt="A picture of lined up cars from an Icelandic Mercedes Benz meet up"
      />

      <p>
        Initial inspection by me revealed that the car had been very well taken care of by its
        prior owners, it looked incredibly good for being 12 years old. The car had been driven
        137,000 KM (~85,000 miles). The service record showed that it had always been taken in for
        service at set times. The car had 3 previous owners, first owner had the car for about 6
        years, second owner few months, and the third owner about 6 years. In the initial test
        drive the car drove incredibly well, very stable and shifting was tight. One thing had me
        worried though:
      </p>

      <img
        src={service_brake}
        alt='Picture of dashboard in Mercedes W211 displaying the "Service brake Visit workshop!" warning message.'
      />

      <p>
        Before the test drive I asked the prior owner about this warning message and he said that
        he had the car inspected before listing it on sale and that the front brake pads needed
        replacement (more on that later). I was wary but confident that an independent inspection
        of the car would tell.
      </p>

      <h2>Professional inspection</h2>
      <p>
        After the initial test drive I took the car to a full inspection at the indie Mercedes
        specialist <a href="http://www.doktorinn.is/">Bíla-Doktorinn</a> (<em>e</em>: The
        Car-Doctor). The shop came highly recommended by few friends for their extensive knowledge
        working with Mercedes Benz. Bíla-Doktorinn made a list of flaws and upcoming maintenance.
        Among the things mentioned was that the front brake pads and discs would need a replacement
        in the next few thousand kilometers. Aside from some other minor flaws the owner of
        Bíla-Doktorinn affirmed that the prior owner had taken very good care of it and had it
        serviced at his shop throughout the years so he was very familiar with it. This to me
        sounded very reassuring so I proceeded with the buy and booked an appointment at
        Bíla-Doktorinn to fix the brakes and other maintenance.
      </p>

      <p>
        The shop had a fairly busy schedule so after about a week and a half they took the car in.
        While working on the car they found some other flaws with the car. For example they found
        that the water pump was loose. It wasn’t really reassuring to hear that after the car had
        been deeply inspected, but friends assured me it wasn’t such of a big deal. The water pumps
        tends to be in a very hard to access place and easy to miss. This was indeed the case, when
        replacing the time belt the mechanics noticed the loose pump, called me and got my
        confirmation to have it fixed as well, for which I am very thankful.
      </p>

      <p>
        However after about a day after the service I noticed that the front breaks would
        consistently squeak when coming to a slow stop. I drove the car for about a week on the
        advice of friends, sometimes car breaks will stop squeaking after they have been worn in
        for a few days. Another thing bugged me, the warning message ”<em>Service brake Visit
        workshop!</em>” was still appearing. After about a week I contacted Bíla-Doktorinn about it
        and they took a second look and fixed the brake squeak issue at no cost.
      </p>

      <p>
        When picking the car up I queried Bíla-Doktorinn if he was able to clear the warning
        message. <em>Then</em> I was told the true meaning of the error message. The <a
          href="http://en.wikipedia.org/wiki/Sensotronic_Brake_Control">SBC</a> brake pump,
        essentially the brain of the braking system was due for a replacement. The cost, about
        200,000 - 400,000 ISK (about $1500 - $3000).
      </p>

      <img src={say_what} alt='A surprised woman saying "Say what?"' />

      <p>Very shocked and a bit mad I asked:</p>
      <blockquote>
        <p>Why did you not tell me about this when I had the car inspected by you?</p>
      </blockquote>

      <p>Rúnar, the owner replied:</p>
      <blockquote>
        <p>This happened after you bought the car.</p>
      </blockquote>

      <p>
        A flat out lie as the message had been in the dashboard since I test drove the car and
        turns on as soon the car is switched on. From my point of view Rúnar took a gamble by
        denying responsibility hoping that I did not have a proof that the error message had indeed
        been in the car from the start. His gamble payed off as I had not taken a picture and error
        codes did not include mileage numbers until in later models.
      </p>

      <img src={sbc_mercedes_benz} alt="SBC unit in the engine compartment of a Mercedes Benz" />

      <p>
        After bitterly digesting this all and finding that I had no legal rights to a damage claim
        due to my lack of evidence, I find 3 things disturbing:
      </p>

      <ol>
        <li>
          The error message ”<em>Service brake Visit Workshop!</em>” is displayed in the dashboard
          when the car is turned on. It’s an umbrella warning message indicating that something is
          either faulty or due for replacement in the braking system. It is <strong>not</strong> an
          indicator for expected wear on, for example brake pads or discs (then the warning message
          includes the word <em>wear</em>). This warning message alone should have tipped off an
          experienced Mercedes mechanic doing work on this type of car. It didn’t.
        </li>
        <li>
          A simple code scan on the car will show this fault as well. Either Bíla-Doktorinn did not
          do such a scan or overlooked it. A major mistake since the reason why people take their
          car in for professional inspection is to find hidden faults like this.
        </li>
        <li>
          Here is the kicker, the prior owner told me that before listing the car on sale he had it
          inspected by, you guessed it, Bíla-Doktorinn. If true, this means the car got
          inspected <strong>TWICE</strong> and this easy to find but major fault went unnoticed. I’d
          call that gross incompetence.
        </li>
      </ol>

      <p>
        There is another possibility, that the owner of the shop and the prior owner were close
        friends and I was being misled as to the true state of the car. I however find that
        scenario unlikely.
      </p>

      <h2>Conclusion</h2>
      <p>
        Given everything, here are some of the things I’d consider before buying an used E class
        2002-2007 W211 Mercedes Benz. Learned from my bitter experience:
      </p>
      <ul>
        <li>
          Be wary of Mercedes Benz cars with the SBC braking system. It did get recalled in some
          parts of the world, in others it was replaced for free or partially under a 10 year
          warranty goodwill. <a
            href="http://autoweek.com/article/car-news/mercedes-cancels-wire-brake-system-decision-blow-technologys-future">The
            SBC was removed in 2006</a> (W211 facelift).
        </li>
        <li>
          If considering buying a Mercedes Benz with a SBC, find out if it has been changed or not.
        </li>
        <li>
          Trust yourself, get your hands on a OBDII scanner and scan for yourself, double check
          the codes online. An example of an inexpensive scanner: <a
            href="http://www.amazon.com/gp/product/B001LHVOVK/">Autel MaxiScan MS300 CAN</a>.
        </li>
        <li>
          It may seem excessive but the next time I buy a used car I’ll seriously consider having
          it inspected by 2 independent shops.
        </li>
        <li>
          Take pictures of the dashboard with mileage numbers visible if you see any warning
          messages in the dashboard <em>before</em> having the car inspected.
        </li>
      </ul>

      <p><strong>Tl;dr summary</strong>:</p>
      <ul>
        <li>Bought a used Mercedes Benz E class 270 CDI 2002 model.</li>
        <li>
          <a href="http://www.doktorinn.is/">Bíla-Doktorinn</a> inspected the car twice and failed
          both times to figure out there was something wrong with the SBC system.
        </li>
        <li>
          A simple code scan would have revealed the fault. Warning in dashboard also gives a
          strong clue given model type. Gross incompetence on behalf of Bíla-Doktorinn for not
          finding it.
        </li>
        <li>Estimated repair cost from my pocket 200,000 - 400,000 ISK ($1500 - $3000).</li>
      </ul>
    </Layout>
  );
};

export default Post;
