import React from 'react'

const Contact = () => {
  return (
<div className='inner-page'>
  {/* rts header area start */}
  <header className="header-area header-two">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- header top start --> */}
                        <div className="header-top-two">
                            <div className="social-area">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-behance"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fa-brands fa-discord"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="right-area">
                                <ul>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="/Contact">Contact</a></li>
                                    <li><a href="#">En(US)</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- header top end --> */}
                        <div className="header-main-two header--sticky">
                            {/* <a href="index.html">
                                <img src="assets/images/logo/03.svg" alt="logo"/>
                            </a> */}
                            <h4>Polymatric</h4>
                            {/* <!-- nav --> */}
                            <div className="nav-area-main d-xl-block d-lg-block d-md-none d-sm-none d-none">
                                <nav>
                                    <ul>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Solutions</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>PRODUCTS</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/UseCasesDetails2">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>ChatBot Builder</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Generative AI Chatbot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCases2">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Live Chat</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/useCase">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Dialogflow Integration</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/FAQ">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>FAQ ChatBot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <p>INDUSTRIES</p>
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Blog">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>eCommerce</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Healthcare</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing2">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Education</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Register">
                                                                        {/* <img src="assets/images/mega-menu/08.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Banking</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Integrations</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>ALL INTEGRATIONS</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Feature">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Omnichannel messaging</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCase">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>eCommerce sites</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Chatbot Builder</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Login">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Zendesk ChatBot</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Login">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Website and CMS</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Blog">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Mobile Apps</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>CRMs</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing2">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Automation and Analytics</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="has-dropdown mega-menu">
                                            <a className="links-main" href="#">Resources</a>
                                            <div className="rts-mega-menu">
                                                <div className="wrapper">
                                                    <div className="row g-0">
                                                        <div className="col-lg-3">
                                                          <p>ALL RESOURCES</p>  
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/AboutOpenUp">
                                                                        {/* <img src="assets/images/mega-menu/01.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Blog</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCase">
                                                                        {/* <img src="assets/images/mega-menu/02.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Case Studies</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing">
                                                                        {/* <img src="assets/images/mega-menu/03.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Comparison</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Login">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>videos</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Login">
                                                                        {/* <img src="assets/images/mega-menu/04.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Chatbot Templates</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-lg-3">
                                                            <ul className="mega-menu-item">
                                                                <li>
                                                                    <a href="/Blog">
                                                                        {/* <img src="assets/images/mega-menu/05.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>ROI Calculator</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/UseCasesDetails">
                                                                        {/* <img src="assets/images/mega-menu/06.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Whitepapers</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="/Pricing2">
                                                                        {/* <img src="assets/images/mega-menu/07.svg" alt="icon"/> */}
                                                                        <div className="info">
                                                                            <p>Generative AI Guide</p>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                        <li><a className="links-main" href="/Contact">Pricing</a></li>
                                    </ul>
                                </nav>
                            </div>
                            {/* <!-- nav end --> */}
                            <div className="button-area">
                                <a href="/Login">Login</a>
                                <a href="/" className="rts-btn btn-primary">Get Started</a>
                            </div>
                            <div className="menu-btn d-xl-none d-lg-none d-md-block d-sm-block" id="menu-btn">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                                    <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                                    <rect width="20" height="2" fill="#1F1F25"></rect>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  {/* rts header area end */}
  {/* rts contact form are start */}
  <br/><br/>
  <div className="rts-contact-form-area rts-section-gap">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-4 col-md-12">
          <div id="form-messages" />
          {/* left contact form */}
          <form
            id="contact-form"
            className="contact-page-form"
            action="https://themewant.com/products/html/openup/mailer.php"
            method="post"
          >
            <h3 className="title">Get In Touch</h3>
            {/* ingle input start */}
            <div className="single-input">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter you full name"
                required=""
              />
              <i className="fa-regular fa-user" />
            </div>
            {/* single input end */}
            {/* ingle input start */}
            <div className="single-input">
              <label htmlFor="email">Your Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="openup@info.com"
              />
              <i className="fa-light fa-envelope" />
            </div>
            {/* single input end */}
            {/* ingle input start */}
            <div className="single-input">
              <label htmlFor="textarea">Enter Your Message</label>
              <textarea
                name="message"
                id="textarea"
                placeholder="Write here your details message"
                defaultValue={""}
              />
              <i className="fa-light fa-marker" />
            </div>
            {/* single input end */}
            <button className="rts-btn btn-primary">Send Message</button>
          </form>
          {/* left contact form end */}
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="map-area-start">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7302.196316307801!2d90.41794101531372!3d23.779518703573338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1684403774021!5m2!1sen!2sbd"
              height={520}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* rts contact form are end */}
  {/* contact single card area start */}
  <div className="card-contact-page-area rts-section-gapBottom">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          {/* single contact card area start */}
          <div className="single-card-area-wrapper">
            <h5 className="title">Sales</h5>
            <p className="dsic">
              Need help? Our support team is available to answer of 24x7
            </p>
            <a href="#" className="rts-btn btn-primary">
              Talk To Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          {/* single contact card area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          {/* single contact card area start */}
          <div className="single-card-area-wrapper">
            <h5 className="title">24X7 Support</h5>
            <p className="dsic">
              Need help? Our support team is available to answer of 24x7
            </p>
            <a href="#" className="rts-btn btn-primary">
              Talk To Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          {/* single contact card area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          {/* single contact card area start */}
          <div className="single-card-area-wrapper">
            <h5 className="title">Partnership</h5>
            <p className="dsic">
              Partner with us? Reach out and we'll explore all opportunities.
            </p>
            <a href="#" className="rts-btn btn-primary">
              Talk To Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          {/* single contact card area end */}
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
          {/* single contact card area start */}
          <div className="single-card-area-wrapper">
            <h5 className="title">Request Demo</h5>
            <p className="dsic">
              Have an out of the box idea for a new AI Demo to add.
            </p>
            <a href="#" className="rts-btn btn-primary">
              Talk To Us <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
          {/* single contact card area end */}
        </div>
      </div>
    </div>
  </div>
  {/* contact single card area end */}
  {/* cta area start */}
  {/* cta area start */}
  <div className="rts-cta-area rts-section-gapBottom  bg_faq">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-main-wrapper bg_image">
            <div className="left">
              <h3 className="title">
                All set to level up <br />
                your content game?
              </h3>
              <a href="/" className="rts-btn btn-primary">
                Get Started Now
              </a>
            </div>
            <div className="right">
              <img src="assets/images/cta/02.png" alt="cta-area" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* cta area end */}
  {/* cta area end */}
  {/* rts footer area start */}
  <div className="rts-footer-area  bg-footer footer-one">
    <div className="container rts-section-gapTop pb--100 pb_sm--30">
      <div className="row">
        <div className="col-lg-12">
          {/* footer main wrapper */}
          <div className="footer-one-main-wrapper">
            {/* single sized  footer  */}
            <div className="footer-singl-wized left-logo">
              <div className="head">
                <h4>Polymatric</h4>
              </div>
              <div className="body">
                <p className="dsic">
                  Polymatric is an artificial intelligence trained to automate
                  important tasks such writing optimized product descriptions.
                </p>
                <div className="social-style-two">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-behance" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-discord" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized">
              <div className="head">
                <h6 className="title">Company</h6>
              </div>
              <div className="body">
                <ul className="menu">
                  <li>
                    <a href="/AboutOpenUp">About Us</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Affiliate Program</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized">
              <div className="head">
                <h6 className="title">Use Cases</h6>
              </div>
              <div className="body">
                <ul className="menu">
                  <li>
                    <a href="#">For Teams</a>
                  </li>
                  <li>
                    <a href="#">For Email Marketers</a>
                  </li>
                  <li>
                    <a href="#">For Blog Writers</a>
                  </li>
                  <li>
                    <a href="#">For social managers</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* single sized  footer end */}
            {/* single sized  footer  */}
            <div className="footer-singl-wized input-area">
              <div className="head">
                <h6 className="title">News &amp; Update</h6>
              </div>
              <div className="body">
                <form action="#">
                  <div className="input-area-fill">
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required=""
                    />
                    <button> Subscribe</button>
                  </div>
                </form>
                <p className="disc">
                  Subscribe our newsletter for future updates. don’t worry we
                  don’t spam your email address
                </p>
              </div>
            </div>
            {/* single sized  footer end */}
          </div>
          {/* footer main wrapper end */}
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          {/* footer-copyright-area start */}
          <div className="copy-right-start-two">
            <p>
              <a href="https://www.vagonon.com/" target="_blank">
                Vagonon©
              </a>{" "}
              2023. All Rights Reserved.
            </p>
            <ul>
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          {/* footer-copyright-area end */}
        </div>
      </div>
    </div>
  </div>
  {/* rts footer area end */}
  <div id="anywhere-home" className=""></div>
  {/* right switcher */}
  {/* <div className="modal-sidebar-scroll rts-dark-light">
    <ul>
      <li>
        <a href="dark/index.html">
          <span>Dark</span>
          <i className="rts-go-dark fal fa-moon" />
        </a>
      </li>
      <li>
        <a href="https://themewant.com/products/html/openup-rtl">
          <span>RTL</span>
          <i className="fa-solid fa-paragraph-left" />
        </a>
      </li>
    </ul>
  </div> */}
  {/* right switcher end */}
  {/* header style two */}
  <div id="side-bar" className="side-bar header-two">
    <button className="close-icon-menu">
      <i className="far fa-times" />
    </button>
    {/* mobile menu area start */}
    <div className="mobile-menu-main">
      <nav className="nav-main mainmenu-nav mt--30">
        <ul className="mainmenu metismenu" id="mobile-menu-active">
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Home
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="index.html">
                  Content Writing 01
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-two.html">
                  Content Writing 03
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-three.html">
                  Content Writing 03
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-four.html">
                  Ai Chat Bot
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Voice Generator
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Image Generator
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="index-five.html">
                  Photo Stock
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="feature.html" className="main">
              Use Cases
            </a>
          </li>
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Pages
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="/AboutOpenUp">
                  About Us
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog.html">
                  Blog
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="blog-details.html">
                  Blog Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Contact">
                  Contact
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="use-case.html">
                  Use Case
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="use-case-2.html">
                  Use Case 2
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="case-details.html">
                  Use Case Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="case-details-2.html">
                  Use Case Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing.html">
                  Pricing
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing-two.html">
                  Pricing Two
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="pricing-three.html">
                  Pricing Three
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="faq.html">
                  FAQ
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Login">
                  Log In
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="registration.html">
                  Registration
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="reset.html">
                  Reset
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="404.html">
                  Not Found
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="feature.html" className="main">
              Feature
            </a>
          </li>
          <li className="has-droupdown parent">
            <a href="#" className="main">
              Shop
            </a>
            <ul className="submenu mm-collapse">
              <li>
                <a className="mobile-menu-link" href="shop-details.html">
                  Product Details
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="cart.html">
                  Cart
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="checkout.html">
                  Checkout
                </a>
              </li>
              <li>
                <a className="mobile-menu-link" href="/Login">
                  My Account
                </a>
              </li>
            </ul>
          </li>
          <li className="parent">
            <a href="/Contact" className="main">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="rts-social-style-one pl--20 mt--100">
        <ul>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    {/* mobile menu area end */}
  </div>
  {/* header style two End */}
  {/* rts backto top start */}
  <div className="progress-wrap">
    <svg
      className="progress-circle svg-content"
      width="100%"
      height="100%"
      viewBox="-1 -1 102 102"
    >
      <path
        d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
        style={{
          transition: "stroke-dashoffset 10ms linear 0s",
          strokeDasharray: "307.919, 307.919",
          strokeDashoffset: "307.919"
        }}
      />
    </svg>
  </div>
  {/* rts backto top end */}
</div>

  )
}

export default Contact
