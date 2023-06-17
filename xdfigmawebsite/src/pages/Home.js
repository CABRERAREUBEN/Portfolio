import styles from "./Home.module.css";
import TypingAnimation from './TypingAnimation';
import React, { useState, useEffect } from 'react';
const Home = () => {
  const words = ['Shoes', 'Watches', 'Bags', 'Jewelry', 'Collectibles', 'Artwork'];



  //Clock
  const targetDate = new Date('2023-06-19T08:30:00'); // Set your target date here

  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime;

    if (timeDifference > 0) {
      const months = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor(
        (timeDifference / (1000 * 60 * 60 * 24)) % 30
      );
      const hours = Math.floor(
        (timeDifference / (1000 * 60 * 60)) % 24
      );
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      return { months, days, hours, minutes, seconds };
    }

    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  /*PROBLEM CAUSING TYPINGACTIONS AND COUNTDOWN */
  useEffect(() => {

    const intervalCountdown = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000); // Update countdown every 1 second

    return () => {
      clearInterval(intervalCountdown);
    };
  }, []);
  return (
    <div className={styles.home}>
      <div className={styles.homeChild} />
      <div className={styles.homeItem} />
      <div className={styles.homeInner} />
      <div className={styles.ellipseDiv} />
      <div className={styles.homeChild1} />
      <div className={styles.rectangleDiv} />
      <img
        className={styles.exhibitionIphone13starlightPIcon}
        alt=""
        src="/exhibition-iphone13starlight-portrait-1@2x.png"
      />
      <div className={styles.authenticationIphone13starligParent}>
        <img
          className={styles.authenticationIphone13starligIcon}
          alt=""
          src="/authentication-iphone13starlight-portrait-1@2x.png"
        />
        <div className={styles.authenticationIphone13starlig} />
      </div>
      <div className={styles.homeChild2} />
      <div className={styles.authenticateShowcaseAnd}>
        Authenticate, Showcase, and Trade
      </div>
      <div className={styles.categories}><TypingAnimation words={words} typingSpeed={82} /></div>
      <div className={styles.thePremierCollectible}>
        The premier collectible haven.
      </div>
      <div className={styles.image3Parent}>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
        <div className={styles.availableNow}>Available now</div>
      </div>
      <b className={styles.howXureDeal}>How Xure Deal works?</b>
      <div className={styles.contactUsParent}>
        <b className={styles.contactUs}>Contact Us</b>
        <img className={styles.groupChild} alt="" src="/line-7.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupItem} />
          <div className={styles.fullName}>Full Name</div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <div className={styles.fullName}>Email Address</div>
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.fullName}>Subject</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild2} />
          <div className={styles.fullName}>Message</div>
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupChild3} />
          <div className={styles.sendMessage}>Send Message</div>
        </div>
      </div>
      <div className={styles.areYouReady}>Are you ready?</div>
      <div className={styles.homeChild3} />
      <div className={styles.parent}>
        <div className={styles.div}>{timeRemaining.days}</div>
        <div className={styles.days}>Days</div>
      </div>
      <div className={styles.group}>
        <div className={styles.div}>{timeRemaining.hours}</div>
        <div className={styles.hours}>Hours</div>
      </div>
      <div className={styles.container}>
        <div className={styles.div2}>{timeRemaining.minutes}</div>
        <div className={styles.minutes}>Minutes</div>
      </div>
      <div className={styles.parent1}>
        <div className={styles.div3}>{timeRemaining.seconds}</div>
        <div className={styles.minutes}>Seconds</div>
      </div>
      <img className={styles.groupIcon} alt="" src="/group-18.svg" />
      <img className={styles.homeChild4} alt="" src="/group-18.svg" />
      <img className={styles.homeChild5} alt="" src="/group-18.svg" />
      <div className={styles.exchangeIphone13starlightPorParent}>
        <img
          className={styles.authenticationIphone13starligIcon}
          alt=""
          src="/exchange-iphone13starlight-portrait-1@2x.png"
        />
        <div className={styles.authenticationIphone13starlig1} />
      </div>
      <div className={styles.groupParent}>
        <img className={styles.groupChild4} alt="" src="/group-37.svg" />
        <div className={styles.theAuthenticationParent}>
          <b className={styles.availableNow}>The Authentication</b>
          <div className={styles.haveYourItems}>
            Have your item’s authenticity certified by our community of
            authenticators
          </div>
          <div className={styles.lineDiv} />
        </div>
      </div>
      <div className={styles.groupContainer}>
        <img className={styles.groupChild5} alt="" src="/group-35.svg" />
        <div className={styles.theExhibitionParent}>
          <b className={styles.theExhibition}>The Exhibition</b>
          <div className={styles.showcaseYourAuthenticated}>
            Showcase your authenticated items online or on your phone to other
            enthusiasts
          </div>
          <div className={styles.groupChild6} />
        </div>
      </div>
      <div className={styles.groupParent1}>
        <img className={styles.groupChild4} alt="" src="/group-33.svg" />
        <div className={styles.theExchangeParent}>
          <b className={styles.theExchange}>The Exchange</b>
          <div className={styles.buyAndSell}>
            Buy and sell other authenticated items in the community on The Shop
          </div>
          <div className={styles.groupChild8} />
        </div>
      </div>
      <div className={styles.aboutParent}>
        <b className={styles.about}>ABOUT</b>
        <div className={styles.termsOfUse}>Terms of Use</div>
        <div className={styles.contactUs1}>Contact Us</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.faqs}>FAQs</div>
        <div className={styles.viberImage2023050312283Parent}>
          <img
            className={styles.viberImage2023050312283Icon}
            alt=""
            src="/viber-image-20230503-122830477-2@2x.png"
          />
          <div className={styles.authenticateShowcaseAnd1}>
            Authenticate, Showcase, and Trade
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <b className={styles.socialMedia}>SOCIAL MEDIA</b>
        <img className={styles.groupIcon1} alt="" src="/group.svg" />
        <div className={styles.rectangleParent2}>
          <div className={styles.groupChild9} />
          <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
        </div>
        <img className={styles.frameChild} alt="" src="/group-2.svg" />
        <div className={styles.frameItem} />
        <div className={styles.xureDealAll}>
          ©2023 Xure Deal. All Rights Reserved.
        </div>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild10} /> {/* navbar */}
        <div className={styles.component1}>
          <a href="#"> <div className={styles.home1}>Home</div></a>
        </div>
        <img
          className={styles.viberImage2023050312283Icon1}
          alt=""
          src="/viber-image-20230503-122830477-1@2x.png"
        />
        <div className={styles.component2}>
          <a href="frame-4">< div className={styles.home1}>Authenticate</div> </a>
        </div>
        <div className={styles.component3}>
          <a href="user-guide"><div className={styles.home1}>User Guide</div> </a>
        </div>
        <div className={styles.component4}>
          <a href="#"><div className={styles.home1}>How it works</div></a>
        </div>
        <div className={styles.component5}>
          <a href="#"><div className={styles.home1}>Contact Us</div></a>
        </div>
      </div>
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
    </div>
  );
};

export default Home;
