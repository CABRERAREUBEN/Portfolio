import { useState, useCallback } from "react";
import PopupWindow1 from "../components/PopupWindow1";
import PortalPopup from "../components/PortalPopup";
import "./HomeTablet.css";
const HomeTablet = () => {
  const [isPopupWindowOpen, setPopupWindowOpen] = useState(false);

  const openPopupWindow = useCallback(() => {
    setPopupWindowOpen(true);
  }, []);

  const closePopupWindow = useCallback(() => {
    setPopupWindowOpen(false);
  }, []);

  return (
    <>
      <div className="home-tablet">
        <div className="home-tablet-child" />
        <div className="home-tablet-item" />
        <div className="home-tablet-inner" />
        <img
          className="viber-image-2023-05-03-12-28-3-icon3"
          alt=""
          src="/viber-image-20230503-122830477-1@2x.png"
        />
        <div className="home2">{`Home `}</div>
        <div className="authenticate1" onClick={openPopupWindow}>
          Authenticate
        </div>
        <div className="user-guide2">User Guide</div>
        <div className="how-it-works1">How it works</div>
        <div className="contact-us2">Contact Us</div>
        <div className="authenticate-showcase-and2">
          Authenticate, Showcase, and Trade
        </div>
        <div className="categories1">{`<Categories>`}</div>
        <div className="the-premier-collectible1">
          The premier collectible haven.
        </div>
        <div className="image-3-parent">
          <img className="image-3-icon" alt="" src="/image-3@2x.png" />
          <img className="image-4-icon" alt="" src="/image-4@2x.png" />
        </div>
        <div className="launching-in">Launching in:</div>
        <div className="download-now">Download Now</div>
        <div className="rectangle-parent5">
          <div className="group-child22" />
          <div className="group">
            <div className="div13">12</div>
            <div className="days">Days</div>
          </div>
          <div className="container">
            <div className="div14">03</div>
            <div className="days">Months</div>
          </div>
          <div className="parent1">
            <div className="div13">09</div>
            <div className="days">Hours</div>
          </div>
          <div className="parent2">
            <div className="div16">33</div>
            <div className="days">Minutes</div>
          </div>
          <div className="parent3">
            <div className="div17">08</div>
            <div className="days">Seconds</div>
          </div>
          <img className="group-icon" alt="" src="/group-18.svg" />
          <img className="group-child23" alt="" src="/group-18.svg" />
          <img className="group-child24" alt="" src="/group-18.svg" />
          <img className="group-child25" alt="" src="/group-18.svg" />
        </div>
        <div className="home-tablet-child1" />
        <div className="home-tablet-child2" />
        <img className="exhibition-1-icon" alt="" src="/exhibition-1@2x.png" />
        <b className="how-xure-deal">How Xure Deal works?</b>
        <b className="contact-us3">Contact us</b>
        <div className="group-parent">
          <img className="group-child26" alt="" src="/group-37.svg" />
          <div className="the-authentication-parent">
            <b className="the-authentication">The Authentication</b>
            <div className="have-your-items">
              Have your item’s authenticity certified by our community of
              authenticators
            </div>
            <div className="group-child27" />
          </div>
        </div>
        <div className="group-container">
          <img className="group-child28" alt="" src="/group-35.svg" />
          <div className="the-exhibition-parent">
            <b className="the-authentication">The Exhibition</b>
            <div className="showcase-your-authenticated">
              Showcase your authenticated items online or on your phone to other
              enthusiasts
            </div>
            <div className="group-child29" />
          </div>
        </div>
        <div className="group-parent1">
          <img className="group-child28" alt="" src="/group-33.svg" />
          <div className="the-exhibition-parent">
            <b className="the-exchange">The Exchange</b>
            <div className="buy-and-sell">
              Buy and sell other authenticated items in the community on The
              Shop
            </div>
            <div className="group-child29" />
          </div>
        </div>
        <img className="line-icon" alt="" src="/line-7.svg" />
        <div className="rectangle-parent6">
          <div className="group-child32" />
          <div className="full-name">Full Name</div>
        </div>
        <div className="rectangle-parent7">
          <div className="group-child32" />
          <div className="email-address">Email Address</div>
        </div>
        <div className="rectangle-parent8">
          <div className="group-child32" />
          <div className="subject">Subject</div>
        </div>
        <div className="rectangle-parent9">
          <div className="group-child35" />
          <div className="message">Message</div>
        </div>
        <div className="home-tablet-inner1">
          <div className="rectangle-parent10">
            <div className="group-child36" />
            <div className="send-message">Send Message</div>
          </div>
        </div>
        <div className="ellipse-div" />
        <div className="footer1">
          <b className="about1">ABOUT</b>
          <div className="terms-of-use1">Terms of Use</div>
          <div className="contact-us4">Contact Us</div>
          <div className="privacy-policy1">Privacy Policy</div>
          <div className="faqs1">FAQs</div>
          <img
            className="viber-image-2023-05-03-12-28-3-icon4"
            alt=""
            src="/viber-image-20230503-122830477-2@2x.png"
          />
          <b className="authenticate-showcase-and3">
            Authenticate, Showcase, and Trade
          </b>
          <div className="lorem-ipsum-dolor2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <b className="social-media1">SOCIAL MEDIA</b>
          <img className="instagram-icon1" alt="" src="/instagram1.svg" />
          <div className="facebook1">
            <div className="facebook-item" />
            <img className="facebook-icon1" alt="" src="/facebook1.svg" />
          </div>
          <img className="twitter-icon1" alt="" src="/twitter1.svg" />
          <div className="rectangle-parent11">
            <div className="group-child37" />
            <div className="xure-deal-all1">
              ©2023 Xure Deal. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
      {isPopupWindowOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePopupWindow}
        >
          <PopupWindow1 onClose={closePopupWindow} />
        </PortalPopup>
      )}
    </>
  );
};

export default HomeTablet;
