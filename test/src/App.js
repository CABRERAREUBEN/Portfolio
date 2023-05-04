import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section id="header">
    <div class="header container">
      <div class="nav-bar">
        <div class="brand">
          <a href="#hero">
            <h1><span>C</span>abrera <span>R</span>euben</h1>
          </a>
        </div>
        <div class="nav-list">
          <div class="hamburger">
            <div class="bar"></div>
          </div>
          <ul>
            <li><a href="#hero" data-after="Home">Home</a></li>
           <li><a href="#services" data-after="Service">Services</a></li> 
            <li><a href="#projects" data-after="Projects">Projects</a></li>
            <li><a href="#about" data-after="About">About</a></li>
            <li><a href="#contact" data-after="Contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="hero">
    <div class="hero container">
      <div>
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>Reuben Cabrera <span></span></h1>
        <a href="#projects" type="button" class="cta">Portfolio</a>
      </div>
    </div>
  </section>

  <section id="projects">
  <div class="projects container">
      <div class="projects-header">
        <h1 class="section-title">Recent <span>Projects</span></h1>
      </div>
      </div>
      <div class="all-projects">
        <div class="project-item">
          <div class="project-info">
            <h1>E- Commerce System for Almerez Marketing</h1>
            <h2>Capstone Project</h2>
            <p>Made for Almerez Marketing for our Thesis. Capstone but made with pure and love also to put a lot of interest for our System</p>
          </div>
          <div class="project-img">
           
          </div>
        </div>
        <div class="project-item">
          <div class="project-info">
            <h1>Zafu Online System</h1>
            <h2>Senior High School Capstone</h2>
            <p>Made for our Thesis. Capstone but made with pure and love also to put a lot of interest for our System</p>
          </div>
          <div class="project-img">
            
          </div>
        </div>
        </div>

    </section>
    
      
        
    <section id="about">
    <div class="about container">
      <div class="col-left">
      <div class="about-img">
          
        </div>
      </div>
      <div class="col-right">
        <h1 class="section-title">About <span>me</span></h1>
        <h2>Full Stack Developer</h2>
        <p>I'm a Full Stack Developer but Mostly focus on the back-end, I've been programming since grade 8 . I've been interested to Programming ever since, Programming have been my daily dose + give me a cup of coffee and will definitely finisH my task. </p>
          
          <b>CERTIFICATIONS</b>
          <li>Microsoft Technology Associate: 98-364 -
Database Administration Fundamentals 
(November 2020)</li>
          <li>Microsoft Technology Associate: 98-366 –
Networking Fundamentals 
(August 2019)</li>
          <li>MTA: Introduction to Programming Using 
HTML and CSS (November 2020)</li>
          <li>Introduction to Arduino Interface with 
MATLAB & Simulink</li>
          
        <a href="img/CABRERA, REUBEN CHRISTIAN R..pdf" class="cta">Download Resume</a>
          
      </div>
    </div>
  </section>
  <section id="contact">
    <div class="contact container">
      <div>
        <h1 class="section-title">Contact <span>Me</span></h1>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div class="contact-info">
            <form action="index.php" method="post">
                           
                           <div class="row">
			<h1>Contact Me</h1>
	</div>
	<div class="row">
			<h4>I love to hear from you!</h4>
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
					<input type="text" name="subject"required />
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
        <div class="contact-item">
          <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
          <div class="contact-info">
            <h2>Location</h2>
            <h2>Manila, Philippines</h2>
          </div>
        </div>
      </div>
    </div>
        </section>
          
        </div>
      
  );
}

export default App;
