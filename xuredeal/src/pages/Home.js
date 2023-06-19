import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Style.css';
import QRFormPopup from './QRFormPopUp';

import TypingAnimation from './TypingAnimation';
// import ImageAnimation from './ImageAnimation';
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
import screenSlideShow from './img/slideshow_1.gif';
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
import gplay1 from './img/gplay.png';
import astore from './img/astore.png';
import Modal from 'react-modal';
import gif from './img/slideshow_1.gif';
function Home() {

    const imgStyles = {
        width: '173px',
        height: '80px',
        paddingTop: '20px',
        marginRight: '10px',
        marginLeft: '-61px',
        borderRadius: '30px',
    };

    const img1Styles = {
        width: '170px',
        height: '80px',
        paddingTop: '20px',
        marginRight: '-55px',
        borderRadius: '30px',
    };

    const logostyle = {
        width: '50px',
        height: '50px',
        paddingTop: '20px',
        marginRight: '10px'
    };

    // const containersStyles = {
    //     display: 'flex',
    //     alignItems: 'center',
    //     marginTop: '-10px',
    //     marginLeft: '50px',
    // };

    const containersStyles = {
        display: 'flex',
        alignItems: 'center',
        marginTop: '-10px',
        marginLeft: '5%',
    };

    // Media Query for small screens
    const mediaQuery = `@media (max-width: 768px) {
  containersStyles.marginLeft = '2%';
}`;

    // Apply media query to adjust styles for small screens
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.textContent = mediaQuery;
    document.head.appendChild(styleSheet);
    // Media Query Styles
    const mediaQueryStyles = {
        '@media (max-width: 768px)': {
            imgStyles: {
                width: '120px',
                height: '60px',
                paddingTop: '10px',
                marginRight: '5px',
                gap: '20px',
            },
            logostyle: {
                width: '40px',
                height: '40px',
                paddingTop: '10px',
                marginRight: '5px'
            },
            containerStyles: {
                marginTop: '-5px'
            }
        }
    };



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
    const targetDate = new Date('2023-07-19T08:30:00'); // Set your target date here

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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        authenticate: '',
    });

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Process form data here
        console.log(formData);
        // Reset form fields
        setFormData({
            authenticate: '',
        });
        // Close the modal
        setIsModalOpen(false);
    };


    return (
        <div>
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
                                <li>
                                    <a href="#hero" data-after="Home"   >Home</a>
                                </li>
                                <li>
                                    <QRFormPopup />
                                    {/* <div>
                                        <a href="#" onClick={handleOpenModal}>Authenticate</a>

                                        {isModalOpen && (
                                            <div className="modal">
                                                <div className="modal-content">
                                                    <span className="close" onClick={handleCloseModal}>&times;</span>
                                                    <form onSubmit={handleSubmit}>
                                                        <h4>Authenticate your item   </h4>
                                                        <input type="text" name="authenticate" value={formData.authenticate} onChange={handleChange} placeholder="Authenticate" required />
                                                        <button type="submit">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        )}
                                    </div> */}

                                </li>
                                <li>
                                    <a href="#UserGuide" data-after="UserGuide" style={{ fontFamily: 'Inter' }}> <Link to="/UserGuide" >User Guide </Link></a>
                                </li>
                                <li>
                                    <a href="#works" data-after="works" style={{ fontFamily: 'Inter' }}>How it Works</a>
                                </li>
                                <li><a href="#contact" data-after="Contact" style={{ fontFamily: 'Inter' }}>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <section id="hero">
                <div class="hero container">
                    <div>

                        <h1 style={{ fontSize: '48px', paddingTop: '10px' }}>Authenticate, <span></span></h1>
                        <h1 style={{ fontSize: '48px', paddingTop: '10px' }}>Showcase, and Trade <span></span></h1>
                        <h1 style={{ fontSize: '40px', fontWeight: 'normal', marginLeft: '60px' }}><TypingAnimation words={words} typingSpeed={82} /> </h1>
                        {/* <h1 style={{ fontSize: '40px' }}><TypingAnimation words={words} typingSpeed={82} /></h1> */}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1 style={{ fontSize: '34px', fontWeight: 'normal' }}>The premier collectible haven </h1>
                        <div>
                            <div className="countdown-container">
                                {/* <h1 style={{ fontSize: '24px', fontWeight: 'normal', paddingBottom: '10px' }}>Launching In </h1> */}
                                <h1 style={{ fontSize: '18px', fontWeight: 'normal', paddingBottom: '5px', paddingLeft: '10px', paddingRight: '10px', textAlign: 'center' }}>Launching In</h1>
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
                        {/* <h1 style={{ fontSize: '24px', fontWeight: 'normal' }}>Launching In</h1> */}
                        {/* <div style={containersStyles}> */}
                        <div className="img-box">
                            <div className="img-item">
                                <img src={gplay} alt="Image Description" />
                            </div>
                            <div className="img-item">
                                <img src={appay} alt="Image Description" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section id="services">
                <div class="services container">
                    <div class="service-top">
                        <h1 class="section-title">Serv<span>i</span>ces</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum deleniti maiores pariatur assumenda quas
                            magni et, doloribus quod voluptate quasi molestiae magnam officiis dolorum, dolor provident atque molestias
                            voluptatum explicabo!</p>
                    </div>
                    <div class="service-bottom">
                        <div class="service-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                                architecto placeat beatae tenetur officia quod</p>
                        </div>
                        <div class="service-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                                architecto placeat beatae tenetur officia quod</p>
                        </div>
                        <div class="service-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                                architecto placeat beatae tenetur officia quod</p>
                        </div>
                        <div class="service-item">
                            <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
                            <h2>Web Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis rerum, magni voluptatem sed
                                architecto placeat beatae tenetur officia quod</p>
                        </div>
                    </div>
                </div>
            </section> */}


            {/* <!-- End Projects Section -->

            <!-- About Section --> */}
            <section id="works">
                <div>
                    <div >
                        <div className="text-container">
                            <div className="howxure-box">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '10px', }}>
                                    <h1 className="howxure">How Xure Deal Works?</h1>
                                </div>

                                <div class="middle-line">
                                    <div class="left-text">

                                        <div className="image-text-container">

                                            <img src={check} alt="Image Description" className="check-image" />

                                            <span>
                                                <div className="text-content">
                                                    <h1 className="ContentHeader">The Authentication </h1>
                                                    <h2 style={{ color: 'white', fontWeight: 'normal', paddingTop: '5px' }}>Have your item's Authenticity
                                                        certified by our community of Authenticators</h2>
                                                </div>
                                            </span>
                                        </div>
                                        <div className="lhorizontal-line"></div>
                                        <div className="image-text-container">
                                            <img src={Exhibition} alt="Image Description" className="check-image" />

                                            <span>
                                                <div className="text-content">
                                                    <h1 className="ContentHeader">The Exhibition </h1>
                                                    <h2 style={{ color: 'white', fontWeight: 'normal', paddingTop: '5px' }}>Showcase your authenticated items online or on your phone to other enthusiasts</h2>
                                                </div>
                                            </span>

                                        </div>
                                        <div className="lhorizontal-line"></div>
                                        <div className="image-text-container">
                                            <img src={Exchange} alt="Image Description" className="check-image" />

                                            <span>
                                                <div className="text-content">
                                                    <h1 className="ContentHeader">The Exchange </h1>
                                                    <h2 style={{ color: 'white', fontWeight: 'normal', paddingTop: '5px' }}>Buy and sell other authenticated items in the community on The Shop</h2>
                                                </div>

                                            </span>

                                        </div>
                                    </div>
                                    <div className="screenSlideShow">
                                        <img src={screenSlideShow} style={{ width: '100%', height: '100%' }} />
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
            {/* <!-- End About Section -->

            <!-- Contact Section --> */}
            <section id="contact">
                {/* <div class="contact container"> */}
                <div className="contact-box">

                    <div>
                        <h1 class="section-title" style={{ color: "white", fontWeight: 'bold' }}>Contact <span>Us</span></h1>
                    </div>
                    {/* <div class="contact-items">
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

                    </div> */}

                    {/* <div class="containercontact"> */}
                    <div>
                        <form action="/action_page.php">
                            <input type="text" id="fname" name="firstname" placeholder="Name" />

                            <input type="email" id="email" name="lastname" placeholder="Email Address" />

                            <input type="text" id="subject" name="lastname" placeholder="Subject" />

                            <textarea id="message" name="Message" placeholder="Your Message"></textarea>

                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    {/* </div> */}
                </div>
            </section>

            {/* <!-- End Contact Section -->

            <!-- Footer --> */}
            <footer class="footer-distributed">

                <div class="footer-left">
                    <div class="brand">
                        <img src={xuredeallogo} alt="Image Description" className="footerlogo-image" />
                        <h4 style={{ color: 'white', fontSize: '22px', textAlign: 'center', fontFamily: 'Inter' }}>Authenticate, Showcase, and Trade</h4>
                        <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontFamily: 'Inter' }}>Level 39, Marina Bay Financial Centre Tower 2 <br /> 10 Marina Boulevard Singapore 018983</p>
                    </div>
                </div>

                <div class="footer-center">
                    <div>
                        <ul class="grid1-container">
                            <li class="grid1-title"><h4 style={{ color: 'white', fontSize: '28px', textAlign: 'center', fontFamily: 'Inter', fontWeight: 'bold' }}>ABOUT</h4></li>
                            <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontFamily: 'Inter' }}><a href="#" >Contact Us </a> </p></li>
                            <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontFamily: 'Inter' }}><a href="#" >Privacy Policy</a></p></li>
                            <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontFamily: 'Inter' }}><a href="#" >Terms of Use</a></p></li>
                            <li class="grid1-item"> <p style={{ color: 'white', fontSize: '14px', textAlign: 'center', fontFamily: 'Inter' }}><a href="#" >FAQ's</a></p></li>
                        </ul>

                    </div>





                </div>

                <div class="footer-right">

                    <p class="footer-company-about">
                        <span><h4 style={{ color: 'white', fontSize: '28px', textAlign: 'center', fontFamily: 'Inter', fontWeight: 'bold' }}>Social Media </h4></span>
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
            <footer className="footer-bottom">
                <div class="credits">
                    <p style={{ color: 'white', fontFamily: 'Inter' }}>&copy; 2023 Xure Deal. All rights reserved.</p>
                </div>
            </footer>

        </div>
    );
}

export default Home;