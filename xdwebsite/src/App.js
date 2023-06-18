import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import TypingAnimation from './TypingAnimation';
import ImageAnimation from './ImageAnimation';
import imageSrc from './img/userguide.png';
import imageSrc1 from './img/works.png';
import gplay from './img/button-google-play.png';
import appay from './img/button-app-store.png';
import shoes from './img/shoes.png';
import watches from './img/watches.png';
import bag from './img/bags.png';
import jewelry from './img/jewelry.png';
import collectibles from './img/coll.png';
import artwork from './img/artwork.png';
import Countdown from './Countdown';
import xuredeallogo from './img/xuredeal-logo/Logo-design-Xure-Deal-gold-colors-dark-BG-PNG.png';
import check from './img/Icons-Xure-Deal/Group 37.png'
import Exchange from './img/Icons-Xure-Deal/Group 33.png'
import Exhibition from './img/Icons-Xure-Deal/Group 35.png'
import iphoneauthenticate from './img/Icons-Xure-Deal/Authenticate.png'
import iphoneexhibition from './img/Icons-Xure-Deal/Exhibition.png'
// import '@fortawesome/fontawesome-free/css/all.css';
import fb from './img/Icons-Xure-Deal/Group 1.png';
import twitter from './img/Icons-Xure-Deal/Group 2.png';
import ig from './img/Icons-Xure-Deal/Group.png';
import sa from './img/Icons-Xure-Deal/Shield Access.png';
import vp from './img/Icons-Xure-Deal/Verified Profile.png';
import l1 from './img/Icons-Xure-Deal/Layer_1.png';
import globe from './img/Icons-Xure-Deal/Globe.png';

import user from './img/Icons-Xure-Deal/Users.png';
import g12 from './img/Icons-Xure-Deal/Group 12.png';
function App() {
  const imgStyles = {
    width: '180px',
    height: '80px',
    paddingTop: '20px',
    marginRight: '10px'

  };
  const logostyle = {
    width: '50px',
    height: '50px',
    paddingTop: '20px',
    marginRight: '10px'

  };

  const containerStyles = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '-10px'
  };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const words = ['Shoes', 'Watches', 'Bags', 'Jewelry', 'Collectibles', 'Artwork'];
  // const words = ['Shoes👕', 'Watches⌚', 'Bags🛍️', 'Jewelry💍', 'Collectibles', 'Artwork🎨'];


  // const content = [
  //   { type: 'image', src: shoes, alt: 'Image alt text 1' },
  //   { type: 'image', src: watches, alt: 'Image alt text 2' },
  //   { type: 'image', src: bag, alt: 'Image alt text 2' },
  //   { type: 'image', src: jewelry, alt: 'Image alt text 2' },
  //   { type: 'image', src: collectibles, alt: 'Image alt text 2' },
  //   { type: 'image', src: artwork, alt: 'Image alt text 2' },
  // ];

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




  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  //menu mobile
  useEffect(() => {
    const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
    const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
    const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
    const header = document.querySelector('.header.container');

    const handleClick = () => {
      hamburger.classList.toggle('active');
      mobile_menu.classList.toggle('active');
    };

    hamburger.addEventListener('click', handleClick);

    const handleScroll = () => {
      const scroll_position = window.scrollY;
      if (scroll_position > 250) {
        header.style.backgroundColor = '#29323c';
      } else {
        header.style.backgroundColor = 'transparent';
      }
    };

    document.addEventListener('scroll', handleScroll);

    menu_item.forEach((item) => {
      item.addEventListener('click', handleClick);
    });

    // Cleanup function to remove event listeners
    return () => {
      hamburger.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
      menu_item.forEach((item) => {
        item.removeEventListener('click', handleClick);
      });
    };
  }, []);

  const [activeLink, setActiveLink] = useState('');

  const handleClick = (event) => {
    setActiveLink(event.target.getAttribute('href'));
  };

  return (
    <div className="App">
      <section id="header">
        <div class="header container">
          <div class="nav-bar">
            <div class="brand">
              <a href="#hero">
                <img src={xuredeallogo} alt="Image Description" className="small-image" />
              </a>
            </div>
            <div class="nav-list">
              <div class="hamburger">
                <div class="bar"></div>
              </div>

              <ul>
                {/* <li> <a href="#hero" data-after="Home">Home</a> </li>
           <li><a href="#verify" data-after="Verify" >Authenticate</a></li> 
            <li><a href="#userguide" data-after="userguide">User Guide</a></li>
            <li><a href="#works" data-after="works" >How it Works?</a></li>
            <li><a href="#contact" data-after="Contact">Contact Us</a></li> */}
                <li className={activeLink === 'home' ? 'active' : ''}>
                  <a href="#hero" onClick={() => handleLinkClick('home')}>Home</a>
                </li>
                <li className={activeLink === 'verify' ? 'active' : ''}>
                  <a href="#verify" onClick={() => handleLinkClick('verify')}>Authenticate</a>
                </li>
                <li className={activeLink === 'userguide' ? 'active' : ''}>
                  <a href="#userguide" onClick={() => handleLinkClick('userguide')}>User Guide</a>
                </li>
                <li className={activeLink === 'works' ? 'active' : ''}>
                  <a href="#works" onClick={() => handleLinkClick('works')}>How it Works?</a>
                </li>
                <li className={activeLink === 'contact' ? 'active' : ''}>
                  <a href="#contact" onClick={() => handleLinkClick('contact')}>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="hero">
        <div class="hero container">
          <div>
            <h1 style={{ fontSize: '58px', paddingTop: '10px' }}>Authenticate, <span></span></h1>
            <h1 style={{ fontSize: '58px', paddingTop: '10px' }}>Showcase, and Trade <span></span></h1>
            <h1 style={{ fontSize: '58px', paddingTop: '10px' }}><TypingAnimation words={words} typingSpeed={82} /></h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: '34px', fontWeight: 'normal' }}>The premier collectible haven </h1>
            <div>
              <div className="countdown-container">
                <h1 style={{ fontSize: '24px', fontWeight: 'normal', paddingBottom: '10px' }}>Launching In </h1>
                <div className="countdown-box">
                  <div className="countdown-item">
                    <p>{timeRemaining.months}</p>
                    <span>Months</span>
                  </div>
                  <div className="countdown-item">
                    <p>{timeRemaining.days}</p>
                    <span>Days</span>
                  </div>
                  <div className="countdown-item">
                    <p>{timeRemaining.hours}</p>
                    <span>Hours</span>
                  </div>
                  <div className="countdown-item">
                    <p>{timeRemaining.minutes}</p>
                    <span>Minutes</span>
                  </div>
                  <div className="countdown-item">
                    <p>{timeRemaining.seconds}</p>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <h1 style={{ fontSize: '24px', fontWeight:'normal'}}>Available Now</h1> */}
            <div style={containerStyles}>
              <img src={gplay} alt="Image Description" style={imgStyles} />
              <img src={appay} alt="Image Description" style={imgStyles} />
            </div>
          </div>
        </div>
      </section>

      <section id="verify">
        <div class="hero container">
          <div>
            <h1>Authenticate</h1>
            <input type="text" placeholder="Enter text" />
            <input type="submit" value="Submit" />
          </div>
        </div>
      </section>

      <section id="userguide">
        <div class="hero container">
          <div className={`scrollable-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className="text-container">
              <h1>User Guide</h1>
              <div className="grid-container">
                {/* <div className="grid-title">Physical</div> */}
                <div className="grid-item"> <img src={sa} alt="Image Description" className="check-image" />Items are authenticated in person</div>
                <div className="grid-item"><img src={vp} alt="Image Description" className="check-image" />Authentication process is done by <br /> the authenticator</div>
                <div className="grid-item"><img src={l1} alt="Image Description" className="check-image" />Items will be tagged as physically<br />verified</div>
                {/* <div className="grid-title">Online</div> */}
                <div className="grid-item"><img src={globe} alt="Image Description" className="check-image" />Items will be tagged as online <br /> verified</div>
                <div className="grid-item"><img src={user} alt="Image Description" className="check-image" />Items will be tagged as online <br /> verified</div>
                <div className="grid-item"><img src={g12} alt="Image Description" className="check-image" />Items will be tagged as online <br /> verified</div>
              </div>
            </div>
            <div className="center-line" />
          </div>
        </div>
      </section>

      <section id="works">
        <div>
          <div className={`scrollable-container ${isScrolled ? 'scrolled' : ''}`}>
            <div className="text-container">
              <h1 style={{ fontSize: '50px', fontWeight: 'extra bold', paddingTop: '60px' }}>How Xure Deal Works?</h1>
              <div class="middle-line">
                <div class="left-text">

                  <div className="image-text-container">

                    <img src={check} alt="Image Description" className="check-image" />

                    <span>
                      <div className="text-content">
                        <h1 style={{ fontSize: '30px', fontWeight: 'Medium', }} >The Authentication </h1>
                        <h2 style={{ color: 'white', fontWeight: 'normal', paddingTop: '5px' }}>Have your item's Authenticity
                          <br /> certified by our community of <br />Authenticators</h2>
                      </div>
                    </span>
                  </div>
                  <div className="lhorizontal-line"></div>
                  <div className="image-text-container">
                    <img src={Exhibition} alt="Image Description" className="exhibition-image" />

                    <span>
                      <div className="text-content">
                        <h1 style={{ fontSize: '30px', fontWeight: 'Medium', paddingTop: '133px', paddingRight: '60px' }} >The Exhibition </h1>
                        <h2 style={{ color: 'white', fontWeight: 'normal', paddingTop: '5px' }}>Showcase your authenticated <br />items online or on your phone to <br /> other enthusiasts</h2>
                      </div>
                    </span>

                  </div>
                  <div className="lhorizontal-line"></div>
                  <div className="image-text-container">
                    <img src={Exchange} alt="Image Description" className="exhibition-image" />

                    <span>
                      <div className="text-content">
                        <h1 style={{ fontSize: '30px', fontWeight: 'Medium', paddingTop: '133px', paddingRight: '60px' }} >The Exchange </h1>
                        <h2 style={{ color: 'white', fontWeight: 'normal', paddingTop: '5px' }}>Buy and sell other authenticated items <br /> in the community on The Shop</h2>
                      </div>
                    </span>

                  </div>
                  {/* <div className="image-text-container">
                    <img src={Exchange} alt="Image Description" className="exchange-image" />
                    <span>
                      <div className="text-content">
                        <h1 style={{ fontSize: '30px', fontWeight: 'Medium', paddingTop: '60px', paddingRight: '60px' }} >The Exchange </h1>
                        <h2 style={{ color: 'white', fontWeight: 'normal', paddingTop: '5px' }}>Buy and sell other authenticated items <br /> in the community on The Shop</h2>
                      </div>
                    </span>

                  </div> */}
                  <div className="llhorizontal-line"></div>
                </div>



                {/* <img src={iphoneauthenticate} alt="Image Description" className="authenticate-image" /> */}

                {/* <span class="right-text">
                  
                  <div className="text-content">
                    <h1 style={{ fontSize: '30px', fontWeight: 'Medium' }}>The Exhibition</h1>
                    <h2 style={{ color: 'white', fontWeight: 'normal', paddingTop: '5px' }}>Showcase your authenticated
                      <br /> items online or on your phone <br /> to other enthusiasts</h2>
                  </div>
                  <div className="rhorizontal-line"></div>
                </span>
                <div className="image-right-text-container">

                  <img src={Exhibition} alt="Image Description" className="exhibition-image" />
                </div> */}
              </div>



            </div>
            <div className="center-line" />
          </div>
        </div>
      </section>



      <section id="contact">
        <div class="contact container">
          <div>
            <h1 class="section-title">Contact <span>Us</span></h1>
          </div>
          <div class="contact-items">
            <div class="contact-item">

              <div class="contact-info">
                <form action="index.php" method="post">

                  <div class="row">
                    <div className="image-text-container">
                      <img src="https://img.icons8.com/bubbles/100/000000/phone.png" className="contact-image" />

                      <div> <h1 >Contact Us</h1>
                        <div class="row">
                          <h4 style={{ fontSize: '15px' }}>We love to hear from you!</h4>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div class="styled-input wide">
                    <input type="text" name="name" required />
                    <label>Name</label>
                  </div>
                  <div class="styled-input wide">
                    <input type="text" name="Email" required />
                    <label>Email</label>
                  </div>
                  <div class="styled-input wide">
                    <input type="text" name="subject" required />
                    <label>Subject</label>
                  </div>
                  <div class="styled-input wide">
                    <textarea required name="message"></textarea>
                    <label>Message</label>
                  </div>
                  <div class="btn-lrg submit-btn">Send Message</div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </section>


      <footer class="footer-distributed">

        <div class="footer-left">
          <div class="brand">
            <img src={xuredeallogo} alt="Image Description" className="footerlogo-image" />
            <h4 style={{ color: 'white', fontSize: '22px', textAlign: 'center' }}>Authenticate, Showcase, and Trade</h4>
            <p style={{ color: 'white', fontSize: '14px', textAlign: 'center' }}>Level 39, Marina Bay Financial Centre Tower 2 <br /> 10 Marina Boulevard Singapore 018983</p>
          </div>
        </div>

        <div class="footer-center">
          <div>
            <ul class="grid1-container">
              <li class="grid1-title"><h4 style={{ color: 'white', fontSize: '28px', textAlign: 'center' }}>ABOUT</h4></li>
              <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>Contact Us </p></li>
              <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>Privacy Policy</p></li>
              <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>Terms of Use</p></li>
              <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontWeight: 'bold' }}>FAQ's</p></li>
            </ul>

          </div>





        </div>

        <div class="footer-right">

          <p class="footer-company-about">
            <span><h4 style={{ color: 'white', fontSize: '28px', textAlign: 'center' }}>Social Media </h4></span>
          </p>



          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Image Description" className="footer-image" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Image Description" className="footer-image" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={ig} alt="Image Description" className="footer-image" />
          </a>




        </div>

      </footer>
      <footer>
        <div class="credits">
          <p style={{ color: 'white' }}>&copy; 2023 Xure Deal. All rights reserved.</p>
        </div>
      </footer>
    </div>


  );
}

export default App;
