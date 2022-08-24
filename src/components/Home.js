import React, { Fragment } from "react";


import "./_others.scss";
import "./_service.scss";
import "./_about.scss";
import "./_testimonial.scss";
import "./owl-carousel.css";
import "./_contact.scss";
import "./_footer.scss";
import "./_slider.scss"
import "./_coming-soon.scss"
import logo from "../assets/imgs/logo.jpeg";

const Home = () => {

  
 

  


  return (
    <Fragment>
      
      <div className="home-03">
        <div className="main-wrapper">
          <div className="sidebar-cart-active">
            <div className="sidebar-cart-all">
              <a className="cart-close" href="#">
                <i className=" ti-close "></i>
              </a>
              <div className="cart-content">
                <h3>Shopping Cart</h3>
                <ul>
                  <li className="single-product-cart">
                    <div className="cart-img">
                      <a href="#">
                        <img src="assets/images/cart/cart-1.jpg" alt="" />
                      </a>
                    </div>
                    <div className="cart-title">
                      <h4>
                        <a href="#">Awesome Mobile</a>
                      </h4>
                      <span> 1 × $49.00 </span>
                    </div>
                    <div className="cart-delete">
                      <a href="#">×</a>
                    </div>
                  </li>
                  <li className="single-product-cart">
                    <div className="cart-img">
                      <a href="#">
                        <img src="assets/images/cart/cart-2.jpg" alt="" />
                      </a>
                    </div>
                    <div className="cart-title">
                      <h4>
                        <a href="#">Nice Headphones</a>
                      </h4>
                      <span> 1 × $49.00 </span>
                    </div>
                    <div className="cart-delete">
                      <a href="#">×</a>
                    </div>
                  </li>
                </ul>
                <div className="cart-total">
                  <h4>
                    Subtotal: <span>$170.00</span>
                  </h4>
                </div>
                <div className="cart-checkout-btn">
                  <a className="btn-hover cart-btn-style" href="cart.html">
                    view cart
                  </a>
                  <a
                    className="no-mrg btn-hover cart-btn-style"
                    href="checkout.html"
                  >
                    checkout
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-menu-active clickalbe-sidebar-wrapper-style-1">
            <div className="clickalbe-sidebar-wrap">
              <a className="sidebar-close">
                <i className=" ti-close "></i>
              </a>
              <div className="mobile-menu-content-area sidebar-content-100-percent">
                <div className="mobile-search">
                  <form className="search-form" action="#">
                    <input type="text" placeholder="Search entire store…" />
                    <button className="button-search">
                      <i className=" ti-search "></i>
                    </button>
                  </form>
                </div>
                <div className="clickable-mainmenu-wrap clickable-mainmenu-style1">
                  <nav>
                    <ul>
                      <li className="has-sub-menu">
                        <a href="index.html">Home</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="home-02.html">Home-02</a>
                          </li>
                          <li>
                            <a href="home-03.html">Home-03</a>
                          </li>
                          <li>
                            <a href="home-04.html">Home-04</a>
                          </li>
                          <li>
                            <a href="home-05.html">Home-05</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub-menu">
                        <a href="#">Pages</a>
                        <ul className="sub-menu-2">
                          <li>
                            <a href="about-us.html">About Us</a>
                          </li>
                          <li>
                            <a href="contact.html">Contact Page</a>
                          </li>
                          <li>
                            <a href="404.html">404 Page</a>
                          </li>
                          <li>
                            <a href="faq.html">FAQ</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Comming Soon</a>
                          </li>
                          <li>
                            <a href="empty-cart.html">Empty Cart</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub-menu">
                        <a href="#">shop</a>
                        <ul className="sub-menu-2">
                          <li className="has-sub-menu">
                            <a href="#">Shop Layout</a>
                            <ul className="sub-menu-2">
                              <li>
                                <a href="shop-fullwide.html">Shop Fullwidth</a>
                              </li>
                              <li>
                                <a href="shop-sidebar.html">Shop Sidebar</a>
                              </li>
                              <li>
                                <a href="shop-3-col.html">Shop 03 Columns</a>
                              </li>
                              <li>
                                <a href="shop-list-style.html">
                                  Shop List Style
                                </a>
                              </li>
                              <li>
                                <a href="order-tracking.html">Order Tracking</a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-sub-menu">
                            <a href="#">Product Layout</a>
                            <ul className="sub-menu-2">
                              <li>
                                <a href="product-details.html">Single 01</a>
                              </li>
                              <li>
                                <a href="product-details-group.html">Grouped</a>
                              </li>
                              <li>
                                <a href="product-details-sticky.html">
                                  Sticky Info
                                </a>
                              </li>
                              <li>
                                <a href="product-details-video.html">Video</a>
                              </li>
                              <li>
                                <a href="product-details-affiliate.html">
                                  Affiliate
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="has-sub-menu">
                            <a href="#">Shop Page</a>
                            <ul className="sub-menu-2">
                              <li>
                                <a href="my-account.html">My Account</a>
                              </li>
                              <li>
                                <a href="checkout.html">Check Out</a>
                              </li>
                              <li>
                                <a href="cart.html">Shopping Cart</a>
                              </li>
                              <li>
                                <a href="wishlist.html">Wishlist</a>
                              </li>
                              <li>
                                <a href="login-register.html">
                                  login / register
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="has-sub-menu">
                        <a href="#">Blog</a>
                        <ul className="sub-menu-2">
                          <li>
                            <a href="blog-layout-02.html">Blog layout</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog Page</a>
                          </li>
                          <li>
                            <a href="blog-no-sidebar.html">Blog No sidebar</a>
                          </li>
                          <li>
                            <a href="blog-right-sidebar.html">
                              Blog Right Sidebar
                            </a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-aside-content">
                  <div className="social-icon-style-2 mb-25">
                    <a className="facebook" href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a className="twitter" href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a className="instagram" href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a className="pinterest" href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-area">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="main-slider-active-2 owl-carousel slider-nav-position-2 slider-nav-style-2 owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div
                        className="owl-stage"
                        style={{
                          
                          transition: "all 0s ease 1s",
                          
                          width: "8813px",
                        }}
                      >
                        
                        <div
                          className="owl-item cloned active"
                          style={{ width: "1920px" }}
                        >

                          <div
                            className="single-main-slider slider-animated-2 bg-img slider-height-2"
                            style={{
                              backgroundImage:"url('https://picsum.photos/2920/1000')"
                              
                            }}
                          >
                            <div className="container height-100-percent">
                              <div className="main-slider-content-2">
                                <h1 className="animated">Studio builds</h1>
                                <div className="Button-Widget-genesis">
                                  <a
                                    href="product-details.html"
                                    className="Button-Widget"
                                  >
                                    <div className="Button-Content">
                                      <span>Shop now</span>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
           
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="innovative-ideas-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="innovative-ideas col-12 p-0">
                  <div className="col-lg-6 col-12">
                    <div className="innovative-ideas-info">
                      <div className="innovative-ideas-img">
                        <a href="#">
                          <img src="https://picsum.photos/600/700" alt="" />
                        </a>
                      </div>
                      <div className="video-btn-3 video-btn-3-yellow">
                        <a
                          className="video-popup"
                          href="https://player.vimeo.com/video/181061053?autoplay=1&amp;byline=0&amp;collections=0"
                        >
                          <i className="fa fa-play"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-12">
                    <div className="innovative-ideas-elementor">
                      <h3>Welcome to Inner</h3>
                      <h2>Innovative ideas stylish designs</h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <div className="Button-Widget-genesis">
                        <a
                          href="product-details.html"
                          className="Button-Widget"
                        >
                          <div className="Button-Content">
                            <span>Shop now</span>
                          </div>
                        </a>
                      </div>
                    </div>
                    <section
                      id="counter-stats"
                      className="wow fadeInRight"
                      data-wow-duration="1.4s"
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 stats text-center">
                            <div className="count">25</div>
                            <h5>Years of Experience</h5>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 stats text-center">
                            <div className="count">1250</div>
                            <h5>Projects Completed</h5>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6 col-md-6 col-sm-6 stats text-center">
                            <div className="count">15</div>
                            <h5>Separate Villas</h5>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-6 stats text-center">
                            <div className="count">20</div>
                            <h5>Miles from the City</h5>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="our-Services-area pb-100 pt-100">
            <div className="container">
              <div className="row our-Services-cover mb-30">
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services">
                    <h2>Our Services</h2>
                    <p>
                      Far far away behind the word mountains far from the
                      countries Vokalia and Consonantia there live the blind
                      texts.
                    </p>
                    <div className="Button-Widget-genesis">
                      <a href="#" className="Button-Widget">
                        <div className="Button-Content">
                          <span>View All</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-img">
                      <img src="https://picsum.photos/300/300" alt="" />
                    </div>
                    <div className="our-Services-icon">
                      <i className="fa fa-home" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Residential Design </h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-icon">
                      <i className="fa fa-glass" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Restaurant Design </h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row our-Services-cover">
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-img">
                      <img src="https://picsum.photos/300/300" alt="" />
                    </div>
                    <div className="our-Services-icon">
                      <i className="fa fa-desktop" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Corporate Design</h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-img">
                      <img src="https://picsum.photos/300/300" alt="" />
                    </div>
                    <div className="our-Services-icon">
                      <i className="fa fa-money" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Commercial Design </h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="our-Services-info">
                    <div className="our-Services-img">
                      <img src="https://picsum.photos/300/300" alt="" />
                    </div>
                    <div className="our-Services-icon">
                      <i className="fa fa-wrench" aria-hidden="true"></i>
                    </div>
                    <div className="our-Services-text">
                      <h4>Industrial Design </h4>
                      <p>
                        We bring the right people together to challenge
                        established thinking and drive transform in 2021
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="latest-projects-area pt-100 pb-0">
            <div className="container">
              <div className="section-title text-center mb-50">
                <h3>Portfolio</h3>
                <h2>latest projects </h2>
              </div>
            </div>
            <div className="container-fluid p-0">
              <div className="latest-projects-tab-list nav mb-20">
                <a className="active" href="#projects-1" data-toggle="tab">
                  <span>All</span>
                </a>
                <a href="#projects-2" data-toggle="tab">
                  <span>Residential</span>
                </a>
                <a href="#projects-3" data-toggle="tab">
                  <span>Corporate</span>
                </a>
                <a href="#projects-4" data-toggle="tab">
                  <span>Restaurant</span>
                </a>
                <a href="#projects-5" data-toggle="tab">
                  <span>Commercial</span>
                </a>
              </div>
              <div className="tab-content jump">
                <div id="projects-1" className="tab-pane active">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="#">
                            <img src="https://picsum.photos/525/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Residential Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/525/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Corporate Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/525/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Commercial Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/525/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Restaurant Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/525/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Residential Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/525/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Commercial Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="projects-2" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/525/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Residential Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/500/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Commercial Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="projects-3" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/500/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Residential Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="projects-4" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="https://picsum.photos/450/400" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Commercial Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="assets/images/projects/p-05.jpg" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Residential Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="projects-5" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="assets/images/projects/p-06.jpg" alt="" />
                          </a>
                        </div>
                        <div className="projects-gallery-wrap projects-gallery">
                          <div className="projects-gallery-bg">
                            <div className="projects-gallery-caption">
                              <h5 className="projects-title">
                                Commercial Design
                              </h5>
                              <p className="projects-content">
                                Far far away behind the word mountains far from
                                the countries Vokalia and Consonantia there live
                                the blind texts.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="team-area pb-100 pt-90">
            <div className="container">
              <div className="row team-column">
                <div className="col-lg-4 col-12">
                  <div className="team-info">
                    <div className="team-box">
                      <h2>Meet our team</h2>
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                      <div className="Button-Widget-genesis">
                        <a href="#" className="Button-Widget">
                          <div className="Button-Content">
                            <span>View All</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="team-info">
                    <div className="team-img">
                      <img src="https://picsum.photos/350/300" alt="" />
                      <div className="hover-area">
                        <div className="profile-icon">
                          <ul className="ekit-team-social-list">
                            <li>
                              <a>
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-text text-center">
                      <h4>Maximus Holden </h4>
                      <p>Interior Designer</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                  <div className="team-info">
                    <div className="team-img">
                      <img src="https://picsum.photos/350/300" alt="" />
                      <div className="hover-area">
                        <div className="profile-icon">
                          <ul className="ekit-team-social-list">
                            <li>
                              <a>
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                            <li>
                              <a>
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                ></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="team-text text-center">
                      <h4>Bryn Mccormick </h4>
                      <p>Project Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="brand-logo-area bg-gray section-padding-3">
            <div className="container">
              <div className="brand-logo-ptb">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="brand-logo-active owl-carousel">
                      <div className="single-brand-logo">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="https://picsum.photos/200/300" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="work-area pt-100 pb-100">
            <div className="container">
              <div className="work-title text-center">
                <h2>How We work</h2>
                <p>
                  Far far away behind the word mountains far from the countries
                  Vokalia and Consonantia there live the blind texts.
                </p>
              </div>
              <div className="row work-cover">
                <div className="col-lg-4 col-md-4">
                  <div className="work-info">
                    <h2>01</h2>
                    <h3>Concept</h3>
                    <p>
                      Far far away behind the word mountains far from the
                      countries Vokalia and Consonantia there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="work-info">
                    <h2>02</h2>
                    <h3>Design</h3>
                    <p>
                      Far far away behind the word mountains far from the
                      countries Vokalia and Consonantia there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="work-info">
                    <h2>03</h2>
                    <h3>Development</h3>
                    <p>
                      Far far away behind the word mountains far from the
                      countries Vokalia and Consonantia there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonials-area">
            <div className="container-fluid p-0">
              <div className="row">
                <div className="testimonials col-12 p-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <a href="#">
                      <img src="https://picsum.photos/750/550" alt="" />
                    </a>
                  </div>
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="testimonials-elementor">
                      <h2>Testimonials</h2>
                      <p>
                        Far far away behind the word mountains far from the
                        countries Vokalia and Consonantia there live the blind
                        texts.
                      </p>
                    </div>
                    <div className="testimonials-active-1 owl-carousel owl-loaded owl-drag">
                      <div className="single-testimonials d-flex col-12">
                        <div className="client-info">
                          <p>
                            A wonderful serenity has taken possession of my
                            entire soul, like these sweet mornings of spring
                            which I enjoy with my whole heart.
                          </p>
                          <div className="testimonials-details">
                            <div className="testimonials-img">
                              <a href="#">
                                <img
                                  src="https://picsum.photos/750/300"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="testimonials-text">
                              <h3>Clara Jepsen</h3>
                              <p>CEO</p>
                            </div>
                          </div>
                          <div className="testimonials-icon">
                            <i
                              className="fa fa-quote-left"
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-us-area">
            <div className="container">
              <div className="row">
                <div className="contact col-12 p-0">
                  <div className="col-xl-6 col-lg-6 col-md-12 p-0">
                    <div className="contact-info">
                      <h2>Get in touch</h2>
                      <p>
                        Far far away behind the word mountains far from the
                        countries Vokalia and Consonantia there live the blind
                        texts.
                      </p>
                      <div className="contact-text">
                        <h3 className="contact-title">Ubud, Bali</h3>
                        <ul>
                          <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#">(+62) 81 2345 1234</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Contact@mail.com</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Jl. Raya Ubud No.88, Bali 80571</a>
                          </li>
                        </ul>
                      </div>
                      <div className="contact-text">
                        <h3 className="contact-title">Denpasar, Bali</h3>
                        <ul>
                          <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#">(+62) 81 2345 1234</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Contact@mail.com</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Jl. Niti Mandala, Renon, Bali 80225</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12 p-0">
                    <div className="contact-form-area">
                      <form
                        id="contact-form"
                        action="assets/mail-php/mail.php"
                        method="post"
                      >
                        <div className="row">
                          <div className="col-lg-12 col-md-12 col-12">
                            <input
                              name="telephone"
                              type="text"
                              placeholder="Your name"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <input
                              name="email"
                              type="email"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <input
                              name="your Subject"
                              type="text"
                              placeholder="Your Subject"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <textarea
                              name="message"
                              placeholder="Your Message"
                            ></textarea>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <button className="submit" type="submit">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer-area">
            <div className="container">
              <div className="footer-top">
                <div className="row align-items-top">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <div className="footer-logo">
                        <a href="index.html">
                          <img src={logo} alt="logo" />
                        </a>
                      </div>
                      <p>
                        One day however a small line of blind text by the name
                        of Lorem Ipsum decided to leave for the far World of
                        Grammar.
                      </p>
                      <div className="profile-icon">
                        <ul className="ekit-team-social-list">
                          <li>
                            <a>
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i
                                className="fa fa-instagram"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a>
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <h3 className="footer-title">Other Pages</h3>
                      <div className="footer-info-list">
                        <ul>
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">FAQ</a>
                          </li>
                          <li>
                            <a href="#">Projects</a>
                          </li>
                          <li>
                            <a href="#">News</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <h3 className="footer-title">Quick Links </h3>
                      <div className="footer-info-list">
                        <ul>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Terms of Service</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Disclaimer</a>
                          </li>
                          <li>
                            <a href="#">Credits</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="footer-widget">
                      <h3 className="footer-title">Latest Projects</h3>
                      <div className="footer-instagram">
                        <div className="col-lg-4 p-0">
                          <div className="instagram-info">
                            <div className="instagram-img">
                              <a href="#">
                                <img
                                  src="https://picsum.photos/100/100"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 p-0">
                          <div className="instagram-info">
                            <div className="instagram-img">
                              <a href="#">
                                <img
                                  src="https://picsum.photos/100/100"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 p-0">
                          <div className="instagram-info">
                            <div className="instagram-img">
                              <a href="#">
                                <img
                                  src="https://picsum.photos/100/100"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="footer-instagram">
                        <div className="col-lg-4 p-0">
                          <div className="instagram-info">
                            <div className="instagram-img">
                              <a href="#">
                                <img
                                  src="https://picsum.photos/100/100"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 p-0">
                          <div className="instagram-info">
                            <div className="instagram-img">
                              <a href="#">
                                <img
                                  src="https://picsum.photos/100/100"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 p-0">
                          <div className="instagram-info">
                            <div className="instagram-img">
                              <a href="#">
                                <img
                                  src="https://picsum.photos/100/100"
                                  alt=""
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom-area">
                <div className="row align-items-center">
                  <div className="container">
                    <div className="footer-bottom footer-bottom-pb footer-bottom-pt w-100">
                      <div className="row">
                        <div className="col-md-6 col-sm-6 col-12 text-left">
                          <p>Genesis Design Template Kit by Mio theme</p>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12 text-right">
                          <p>Copyright © 2021. All rights reserved.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>

          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span className=" ti-close " aria-hidden="true"></span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="row no-gutters">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="quickview-slider-active owl-carousel">
                        <a
                          className="img-popup"
                          href="assets/images/product/quickview-1.jpg"
                        >
                          <img
                            src="assets/images/product/quickview-1.jpg"
                            alt=""
                          />
                        </a>
                        <a
                          className="img-popup"
                          href="assets/images/product/quickview-2.jpg"
                        >
                          <img
                            src="assets/images/product/quickview-2.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                      <div className="product-details-content quickview-content-padding bg-gray">
                        <h2 className="uppercase">JAW SHARK WOMEN T-SHIRT</h2>
                        <h3>$19.99</h3>
                        <div className="product-details-peragraph">
                          <p>
                            Sed ligula sapien, fermentum id est eget, viverra
                            auctor sem. Vivamus maximus enim vitae urna porta,
                            ut euismod nibh lacinia. Pellentesque at diam sed
                            libero tincidunt feugiat.
                          </p>
                        </div>
                        <div className="product-details-action-wrap">
                          <div className="product-details-quality">
                            <div className="cart-plus-minus">
                              <input
                                className="cart-plus-minus-box"
                                type="text"
                                name="qtybutton"
                                value="2"
                              />
                            </div>
                          </div>
                          <div className="product-details-cart">
                            <a title="Add to cart" href="#">
                              Add to cart
                            </a>
                          </div>
                          <div className="product-details-wishlist">
                            <a title="Add to wishlist" href="#">
                              <i className="fa fa-heart-o"></i>
                            </a>
                          </div>
                          <div className="product-details-compare">
                            <a title="Add to compare" href="#">
                              <i className="fa fa-compress"></i>
                            </a>
                          </div>
                        </div>
                        <div className="product-details-meta">
                          <span>SKU: N/A</span>
                          <span>
                            Categories: <a href="#">Woman</a>,{" "}
                            <a href="#">Dress</a>, <a href="#">Style</a>,{" "}
                            <a href="#">T-Shirt</a>, <a href="#">Mango</a>
                          </span>
                          <span>
                            Tag: <a href="#">Fashion</a>, <a href="#">Dress</a>{" "}
                          </span>
                          <span>
                            Product ID: <a href="#">274</a>
                          </span>
                        </div>
                        <div className="product-details-info">
                          <a href="#">
                            <i className=" ti-location-pin "></i>Check Store
                            availability
                          </a>
                          <a href="#">
                            <i className=" ti-shopping-cart "></i>Delivery and
                            Return
                          </a>
                          <a href="#">
                            <i className="ti-pin"></i>Ask a Question
                          </a>
                        </div>
                        <div className="product-details-social-wrap">
                          <span>SHARE THIS PRODUCT</span>
                          <div className="product-details-social">
                            <a className="facebook" href="#">
                              <i className="fa fa-facebook"></i>
                            </a>
                            <a className="twitter" href="#">
                              <i className="fa fa-twitter"></i>
                            </a>
                            <a className="pinterest" href="#">
                              <i className="fa fa-pinterest-p"></i>
                            </a>
                            <a className="google-plus" href="#">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
