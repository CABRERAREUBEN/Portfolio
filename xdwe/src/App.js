import logo from './logo.svg';
import './App.css';
import './assets/css/steller.css'
import { useEffect } from 'react';

function App() {


  return (

    <div>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="Start your development with Steller landing page." />
      <meta name="author" content="Devcrud" />

      <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top={0}>
        <div className="container">
          <a className="navbar-brand" href="#"><img src="assets/imgs/logo.svg" alt="" /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">Authenticate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#service">User Guide</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">How it Works?</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#testmonial">Testmonial</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#blog">Blog</a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="- btn btn-primary rounded ml-4" href="components.html">Copmonents</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End of page navibation */}
      {/* Page Header */}
      <header className="header" id="home">
        <div className="container">
          <div className="infos">
            <h6 className="subtitle">hello,I'm</h6>
            <h6 className="title">James Smith</h6>
            <p>UI/UX Designer</p>
            <div className="buttons pt-3">
              <button className="btn btn-primary rounded">HIRE ME</button>
              <button className="btn btn-dark rounded">DOWNLOAD CV</button>
            </div>
            <div className="socials mt-4">
              <a className="social-item" href="javascript:void(0)"><i className="ti-facebook" /></a>
              <a className="social-item" href="javascript:void(0)"><i className="ti-google" /></a>
              <a className="social-item" href="javascript:void(0)"><i className="ti-github" /></a>
              <a className="social-item" href="javascript:void(0)"><i className="ti-twitter" /></a>
            </div>
          </div>
          <div className="img-holder">
            <img src="assets/imgs/man.svg" alt="" />
          </div>
        </div>
        {/* Header-widget */}
        <div className="widget">
          <div className="widget-item">
            <h2>124</h2>
            <p>Happy Clients</p>
          </div>
          <div className="widget-item">
            <h2>456</h2>
            <p>Project Completed</p>
          </div>
          <div className="widget-item">
            <h2>789</h2>
            <p>Awards Won</p>
          </div>
        </div>
      </header>
      {/* End of Page Header */}
      {/* About section */}
      <section id="about" className="section mt-3">
        <div className="container mt-5">
          <div className="row text-center text-md-left">
            <div className="col-md-3">
              <img src="assets/imgs/avatar.jpg" alt="" className="img-thumbnail mb-4" />
            </div>
            <div className="pl-md-4 col-md-9">
              <h6 className="title">James Smith</h6>
              <p className="subtitle">UI/UX Designer</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.</p>
              <button className="btn btn-primary rounded mt-3">DOWNLOAD CV</button>
            </div>
          </div>
        </div>
      </section>
      {/* Service section */}
      <section id="service" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Service</h6>
          <h6 className="section-title mb-4">What I Do</h6>
          <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
          <div className="row">
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-crown" />
                  <h5>UI/UX Design</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-desktop" />
                  <h5>Web Design</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-mobile" />
                  <h5>App Design</h5>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-3 mb-4">
              <div className="custom-card card border">
                <div className="card-body">
                  <i className="icon ti-bar-chart" />
                  <h5>SEO</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Sectoin */}
      {/* Skills section */}
      <section className="section">
        <div className="container text-center">
          <h6 className="subtitle">Skills</h6>
          <h6 className="section-title mb-4">Why Choose me</h6>
          <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
          <div className="row text-left">
            <div className="col-sm-6">
              <h6 className="mb-3">Photoshop</h6>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '89%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>89%</span></div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">Web Design</h6>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '83%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>83%</span></div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">App Design</h6>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '95%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>95%</span></div>
              </div>
            </div>
            <div className="col-sm-6">
              <h6 className="mb-3">SEO</h6>
              <div className="progress">
                <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}><span>90%</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of Skills sections */}
      {/* Portfolio section */}
      <section id="portfolio" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Portfolio</h6>
          <h6 className="section-title mb-4">Check My Wonderful Works</h6>
          <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
          <div className="row">
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/folio-1.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                    <a href="javascript:void(0)"><i className="ti-link" /></a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/folio-2.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                    <a href="javascript:void(0)"><i className="ti-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/folio-3.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                    <a href="javascript:void(0)"><i className="ti-link" /></a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/folio-4.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                    <a href="javascript:void(0)"><i className="ti-link" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="img-wrapper">
                <img src="assets/imgs/folio-5.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                    <a href="javascript:void(0)"><i className="ti-link" /></a>
                  </div>
                </div>
              </div>
              <div className="img-wrapper">
                <img src="assets/imgs/folio-6.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-infos">
                    <h5>Project Title</h5>
                    <a href="javascript:void(0)"><i className="ti-zoom-in" /></a>
                    <a href="javascript:void(0)"><i className="ti-link" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End of portfolio section */}
      {/* Testmonial Section */}
      {/* <section id="testmonial" className="section">
        <div className="container text-center">
          <h6 className="subtitle">Testmonial</h6>
          <h6 className="section-title mb-4">What People Say About Me</h6>
          <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
          <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
              <li data-target="#carouselExampleIndicators" data-slide-to={1} />
              <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card testmonial-card border">
                  <div className="card-body">
                    <img src="assets/imgs/avatar-1.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p>
                    <h1 className="title">Emma Re</h1>
                    <h1 className="subtitle">Graphic Designer</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card testmonial-card border">
                  <div className="card-body">
                    <img src="assets/imgs/avatar-2.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p>
                    <h1 className="title">James Bert</h1>
                    <h1 className="subtitle">Web Designer</h1>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card testmonial-card border">
                  <div className="card-body">
                    <img src="assets/imgs/avatar-3.jpg" alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum voluptates in enim vel amet?</p>
                    <h1 className="title">Michael Abra</h1>
                    <h1 className="subtitle">Web Developer</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End of testmonial section */}
      {/* Blog Section */}
      {/* <section id="blog" className="section">
        <div className="container text-center">
          <h6 className="subtitle">My Blogs</h6>
          <h6 className="section-title mb-4">Latest News</h6>
          <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
          <div className="row text-left">
            <div className="col-md-4">
              <div className="card border mb-4">
                <img src="assets/imgs/blog-1.jpg" alt="" className="card-img-top w-100" />
                <div className="card-body">
                  <h5 className="card-title">Designe for Everyone</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)"><i className="ti-thumb-up" /> 456</a>
                    <a href="javascript:void(0)"><i className="ti-comment" /> 123</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad vel dolorum, iusto velit, minima? Voluptas nemo harum impedit nisi.</p>
                  <a href="javascript:void(0)">Read More..</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border mb-4">
                <img src="assets/imgs/blog-2.jpg" alt="" className="card-img-top w-100" />
                <div className="card-body">
                  <h5 className="card-title">Web Layouts</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)"><i className="ti-thumb-up" /> 456</a>
                    <a href="javascript:void(0)"><i className="ti-comment" /> 123</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad vel dolorum, iusto velit, minima? Voluptas nemo harum impedit nisi.</p>
                  <a href="javascript:void(0)">Read More..</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border mb-4">
                <img src="assets/imgs/blog-3.jpg" alt="" className="card-img-top w-100" />
                <div className="card-body">
                  <h5 className="card-title">Bootstrap Framework</h5>
                  <div className="post-details">
                    <a href="javascript:void(0)">Posted By: Admin</a>
                    <a href="javascript:void(0)"><i className="ti-thumb-up" /> 456</a>
                    <a href="javascript:void(0)"><i className="ti-comment" /> 123</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad vel dolorum, iusto velit, minima? Voluptas nemo harum impedit nisi.</p>
                  <a href="javascript:void(0)">Read More..</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Hire me section */}
      {/* <section className="bg-gray p-0 section">
        <div className="container">
          <div className="card bg-primary">
            <div className="card-body text-light">
              <div className="row align-items-center">
                <div className="col-sm-9 text-center text-sm-left">
                  <h5 className="mt-3">Hire Me For Your Project</h5>
                  <p className="mb-3">Accusantium labore nostrum similique quisquam.</p>
                </div>
                <div className="col-sm-3 text-center text-sm-right">
                  <button className="btn btn-light rounded">Hire Me!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End od Hire me section. */}
      {/* Contact Section */}
      <section id="contact" className="position-relative section">
        <div className="container text-center">
          <h6 className="subtitle">Contact</h6>
          <h6 className="section-title mb-4">Get In Touch With Me</h6>
          <p className="mb-5 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos. <br /> rerum commodi corrupti, temporibus non quam.</p>
          <div className="contact text-left">
            <div className="form">
              <h6 className="subtitle">Available 24/7</h6>
              <h6 className="section-title mb-4">Get In Touch</h6>
              <form>
                <div className="form-group">
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                </div>
                <div className="form-group">
                  <textarea name="contact-message" id cols={30} rows={5} className="form-control" placeholder="Message" defaultValue={""} />
                </div>
                <button type="submit" className="btn btn-primary btn-block rounded w-lg">Send Message</button>
              </form>
            </div>
            <div className="contact-infos">
              <div className="item">
                <i className="ti-location-pin" />
                <div className>
                  <h5>Location</h5>
                  <p> 12345 Fake ST NoWhere AB Country</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-mobile" />
                <div>
                  <h5>Phone Number</h5>
                  <p>(123) 456-7890</p>
                </div>
              </div>
              <div className="item">
                <i className="ti-email" />
                <div className="mb-0">
                  <h5>Email Address</h5>
                  <p>info@website.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="map">
          <iframe src="https://snazzymaps.com/embed/61257" />
        </div>
      </section>
      {/* End of Contact Section */}
      {/* Page Footer */}
      <footer className="page-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <p>Copyright  © <a href="http://www.devcrud.com" target="_blank">DevCRUD</a></p>
            </div>
            <div className="col-sm-6">
              <div className="socials">
                <a className="social-item" href="javascript:void(0)"><i className="ti-facebook" /></a>
                <a className="social-item" href="javascript:void(0)"><i className="ti-google" /></a>
                <a className="social-item" href="javascript:void(0)"><i className="ti-github" /></a>
                <a className="social-item" href="javascript:void(0)"><i className="ti-twitter" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End of page footer */}
      {/* core  */}
      {/* bootstrap 3 affix */}
      {/* steller js */}

    </div>

  );
}

export default App;
