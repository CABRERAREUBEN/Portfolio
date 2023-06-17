import styles from "./UserGuide.module.css";
const UserGuide = () => {
  return (
    <div className={styles.userGuide}>
      <div className={styles.userGuideChild} />
      <div className={styles.userGuideItem} />
      <div className={styles.userGuideInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.userGuideChild1} />
      <img className={styles.usersIcon} alt="" src="/users.svg" />
      <div className={styles.userGuideChild2} />
      <div className={styles.ellipseDiv} />
      <div className={styles.userGuideChild3} />
      <b className={styles.physical}>Physical</b>
      <b className={styles.online}>Online</b>
      <div className={styles.userGuideChild4} />
      <div className={styles.userGuideChild5} />
      <img
        className={styles.verifiedProfileIcon}
        alt=""
        src="/verified-profile.svg"
      />
      <div className={styles.userGuideChild6} />
      <div className={styles.itemsAreAuthenticated}>
        Items are authenticated in person
      </div>
      <div className={styles.authenticationProcessIs}>
        Authentication process is done by the authenticator
      </div>
      <div className={styles.itemsWillBe}>
        Items will be tagged as physically verified
      </div>
      <div className={styles.userGuideChild7} />
      <div className={styles.userGuideChild8} />
      <div className={styles.userGuideChild9} />
      <div className={styles.itemsCanBe}>
        Items can be authenticated remotely, by authenticators across the globe
      </div>
      <div className={styles.authenticationProcessIs1}>
        Authentication process is done by both the authenticator and you
      </div>
      <div className={styles.itemsWillBe1}>
        Items will be tagged as online verified
      </div>
      <img className={styles.layer1Icon} alt="" src="/layer-1.svg" />
      <img className={styles.groupIcon} alt="" src="/group-12@2x.png" />
      <div className={styles.aboutParent}>
        <b className={styles.about}>ABOUT</b>
        <div className={styles.termsOfUse}>Terms of Use</div>
        <div className={styles.contactUs}>Contact Us</div>
        <div className={styles.privacyPolicy}>Privacy Policy</div>
        <div className={styles.faqs}>FAQs</div>
        <div className={styles.viberImage2023050312283Parent}>
          <img
            className={styles.viberImage2023050312283Icon}
            alt=""
            src="/viber-image-20230503-122830477-2@2x.png"
          />
          <div className={styles.authenticateShowcaseAnd}>
            Authenticate, Showcase, and Trade
          </div>
          <div className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <b className={styles.socialMedia}>SOCIAL MEDIA</b>
        <img className={styles.groupIcon1} alt="" src="/group1.svg" />
        <div className={styles.rectangleParent}>
          <div className={styles.groupChild} />
          <img className={styles.facebookIcon} alt="" src="/facebook1.svg" />
        </div>
        <img className={styles.frameChild} alt="" src="/group-21.svg" />
        <div className={styles.frameItem} />
        <div className={styles.xureDealAll}>
          ©2023 Xure Deal. All Rights Reserved.
        </div>
      </div>
      <b className={styles.userGuide1}>User Guide</b>
      <div className={styles.lineDiv} />
      <img className={styles.globeIcon} alt="" src="/globe.svg" />
      <img
        className={styles.shieldAccessIcon}
        alt=""
        src="/shield-access.svg"
      />
      <div className={styles.rectangleGroup}>
        <div className={styles.groupItem} />
        <img
          className={styles.viberImage2023050312283Icon1}
          alt=""
          src="/viber-image-20230503-122830477-1@2x.png"
        />
        <div className={styles.component1}>
          <div className={styles.home}>Home</div>
        </div>
        <div className={styles.component2}>
          <div className={styles.home}>Authenticate</div>
        </div>
        <div className={styles.component4}>
          <div className={styles.home}>How it works</div>
        </div>
        <div className={styles.component5}>
          <div className={styles.home}>Contact Us</div>
        </div>
        <div className={styles.userGuide2}>User Guide</div>
      </div>
    </div>
  );
};

export default UserGuide;
