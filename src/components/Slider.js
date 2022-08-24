import React, { useState } from "react";
import { Transition } from "react-transition-group";

import "./_others.scss";
import "./_service.scss";
import "./_about.scss";
import "./_testimonial.scss";
import "./owl-carousel.css";
import "./_contact.scss";
import "./_footer.scss";
import "./_slider.scss";
import "./_coming-soon.scss";
import "./font-awesome.css";
import "./inovative.css";
import './sidebar.css'
import './header.css'
import logo from "../assets/imgs/logo.jpeg";
import img from "../assets/images/product/a-02.jpg";
import "./video.css";
import testi from "../assets/images/testimonial/t-01.jpg";
import cl from "../assets/images/testimonial/client-1.png";
import cl2 from "../assets/images/testimonial/client-3.png";
import cl1 from "../assets/images/testimonial/client-1.png";
import innove from "../assets/images/cms/about.jpg";
import service from "../assets/images/service/01.jpg";
import service2 from "../assets/images/service/02.jpg";
import service3 from "../assets/images/service/03.jpg";
import service4 from "../assets/images/service/04.jpg";
import service5 from "../assets/images/service/05.jpg";
import service6 from "../assets/images/service/06.png";
import slide from "../assets/images/slider/slider-6.jpg";
import team1 from "../assets/images/team/t3.jpg";
import team2 from "../assets/images/team/t4.jpg";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "../togglevideo.css";

const Slider = () => {
  const left = -1194;
  const an = "translate3d(" + left + "px, " + 0 + "px," + 0 + "+px);";
  const dur = 1;
  const backImage = {
    backgroundImage: "url(" + slide + ")",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
  };
  const anime = {
    transform: an,
    transition: `all ${dur}s ease ${dur}s`,
    width: "4081px",
  };

  const [isplay, setPlay] = useState(false);
  const hadnlervid = (event) => {
    setPlay(true);
  };
  console.log("selam");
  const handlertog = (event) => {
    setPlay(false);
    console.log("tog");
  };


  /*
  
    ---------------------------------------------------------------------------Sidebarrr-----------------
   */
  const [isClickSideBar, setClickSideBar] = useState(false);

  const [sideBarClass,setBarClass]=useState('mobile_sidebar')
  

  const handlersidebar = () => {
    setClickSideBar(true);
      
    setBarClass('mobile_sidebar')
  };
  const handlerClassName=()=>{
      setBarClass('mobile_sidebar_back')
  }

  return (
    <>
      <div
        className="toggleVideocon"
        style={{ display: isplay ? "flex" : "none" }}
        onClick={handlertog}
      >
        <div>
          <ReactPlayer
            config={{ file: { attributes: { poster: "v1.jpg" } } }}
            height="100%"
            width="100%"
            playing={isplay}
            muted={false}
            controls={true}
            url="drone.mp4"
          />
        </div>
      </div>

      <div className="home-03"  >
        <div className="main-wrapper"  >
          <header className="header-area">
            <div className="header-large-device home-bg">
              <div className="header-bottom">
                <div className="container">
                  <div className="row no-gutters align-items-center">
                    <div className="col-xl-2 col-lg-2 ">
                      <div className="logo logo-res-lg   ">
                        <a href="index.html">
                          <img src={logo} alt="logo" />
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="main-menu menu-lh-1 main-menu-padding-1 menu-text-white main-menu-padding1">
                        <nav>
                          <ul>
                            <li>
                              <a className="active" href="index.html">
                                Home
                              </a>
                              <ul className="sub-menu-width">
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
                            <li>
                              <a href="#">Pages</a>
                              <ul className="sub-menu-width">
                                <li>
                                  <a href="about-us.html">About Us</a>
                                </li>
                                <li>
                                  <a href="faq.html">FAQ</a>
                                </li>
                                <li>
                                  <a href="404.html">404 Page</a>
                                </li>
                                <li>
                                  <a href="contact.html">Contact Page</a>
                                </li>
                                <li>
                                  <a href="coming-soon.html">Comming Soon</a>
                                </li>
                                <li>
                                  <a href="empty-cart.html">Empty Cart</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="shop-fullwide.html">Shop</a>
                              <ul className="mega-menu-style-2 mega-menu-width2 menu-negative-mrg3">
                                <li className="mega-menu-sub-width20">
                                  <a className="menu-title" href="#">
                                    Shop Layout
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="shop-fullwide.html">
                                        Shop Fullwidth
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-sidebar.html">
                                        Shop Sidebar
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-3-col.html">
                                        Shop 03 Columns
                                      </a>
                                    </li>
                                    <li>
                                      <a href="shop-list-style.html">
                                        Shop List Style
                                      </a>
                                    </li>
                                    <li>
                                      <a href="order-tracking.html">
                                        Order Tracking
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-sub-width22">
                                  <a className="menu-title" href="#">
                                    Product Layout
                                  </a>
                                  <ul>
                                    <li>
                                      <a href="product-details.html">
                                        Product Details
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-details-group.html">
                                        Grouped
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-details-sticky.html">
                                        Sticky Info
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-details-video.html">
                                        Video
                                      </a>
                                    </li>
                                    <li>
                                      <a href="product-details-affiliate.html">
                                        Affiliate
                                      </a>
                                    </li>
                                  </ul>
                                </li>
                                <li className="mega-menu-sub-width20">
                                  <a className="menu-title" href="#">
                                    Shop Pages
                                  </a>
                                  <ul>
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
                            <li>
                              <a href="blog.html">Blog</a>
                              <ul className="sub-menu-width">
                                <li>
                                  <a href="blog-layout-02.html">Blog Layout</a>
                                </li>
                                <li>
                                  <a href="blog.html">Blog Page</a>
                                </li>
                                <li>
                                  <a href="blog-no-sidebar.html">
                                    Blog No sidebar
                                  </a>
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
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end">
                      <div className="header-right-wrap header-right-flex">
                        <div className="same-style same-style-mrg-dec">
                          <a href="login-register.html">
                            <i className="fa fa-user" aria-hidden="true"></i>
                          </a>
                        </div>
                        <div className="same-style same-style-mrg-dec">
                          <a href="wishlist.html">
                            <i className="fa fa-heart-o"></i>
                            <span>
                              <i
                                className="fa fa-bell-o"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                        </div>
                        <div className="same-style same-style-mrg-dec">
                          <a href="cart.html">
                            <i className="fa fa-shopping-cart"></i>
                            <span>0</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-small-device bg-main">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="mobile-logo mobile-logo-width">
                      <a href="index.html">
                        <img alt="" src={logo} />
                      </a>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="col-6">
                      <div className="header-right-wrap header-right-flex">
                        <div className="same-style same-style-mrg-dec">
                          <a href="login-register.html">
                            <i className="fa fa-user-o"></i>
                          </a>
                        </div>
                        <div className="same-style">
                          <a href="wishlist.html">
                            <i className="fa fa-heart-o"></i>
                          </a>
                        </div>
                        <div className="same-style">
                          <a className="cart-active" href="cart.html">
                            <i className="fa fa-cart-arrow-down"></i>
                          </a>
                        </div>
                        <div className="same-style" onClick={handlersidebar}>
                          <a className="mobile-menu-button-active" href="#">
                            <i className="fa fa-bars"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div onClick={handlerClassName}>
          <div className="sidebar-cart-active" >
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
        
          {isClickSideBar &&
          <div className={`mobile-menu-active clickalbe-sidebar-wrapper-style-1 mobile_sideindex ${sideBarClass}`} style={{opacity:1}}>
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
           }
          
          <div className="slider-area" onClick={handlerClassName}>
            <div className="container-fluid p-0">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="main-slider-active-2 owl-carousel slider-nav-position-2 slider-nav-style-2 owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div className="owl-stage" style={{ width: "100%" }}>
                        <div
                          className="owl-item cloned"
                          style={{ width: "100%" }}
                        >
                          <div
                            className="single-main-slider slider-animated-2 bg-img slider-height-2"
                            style={backImage}
                          >
                            <div className="container height-100-percent">
                              <div className="main-slider-content-2">
                                <h1 className="animated">
                                  Housing Block Building
                                </h1>
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
          <div className="innovative-ideas-area pt-100 pb-100" onClick={handlerClassName}>
            <div className="container">
              <div className="row">
                <div className="innovative-ideas col-12 p-0">
                  <div className="col-lg-6 col-12 in_col">
                    <div
                      className="innovative-ideas-info"
                      style={{ height: "100%" }}
                    >
                      <div
                        className="innovative-ideas-img"
                        style={{ height: "100%" }}
                      >
                        <img src={img} />
                      </div>
                      <div
                        className="video-btn-3 video-btn-3-yellow "
                        style={{ padding: "0", borderRadius: "50%" }}
                      >
                        <div className="video-popup" onClick={hadnlervid}>
                          <i className="fa fa-play"></i>
                        </div>
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
                      <a
                        href="https://www.youtube.com/"
                        className="Button-Widget"
                      >
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
                      <img src={service} alt="" />
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
                      <i
                        className="fa fa-glass"
                        aria-hidden="true"
                        style={{ color: "#fff" }}
                      ></i>
                    </div>
                    <div className="our-Services-text">
                      <h4 style={{ color: "#fff" }}>Restaurant Design </h4>
                      <p style={{ color: "#ffff" }}>
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
                      <img src={service2} alt="" />
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
                      <img src={service4} alt="" />
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
                      <img src={service5} alt="" />
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
                            <img src="assets/images/projects/p-01.jpg" alt="" />
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
                            <img src="assets/images/projects/p-02.jpg" alt="" />
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
                            <img src="assets/images/projects/p-03.jpg" alt="" />
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
                            <img src="assets/images/projects/p-04.jpg" alt="" />
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
                <div id="projects-2" className="tab-pane">
                  <div className="row">
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 p-0">
                      <div className="projects-wrap">
                        <div className="projects-img">
                          <a href="product-details.html">
                            <img src="assets/images/projects/p-01.jpg" alt="" />
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
                            <img src="assets/images/projects/p-02.jpg" alt="" />
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
                            <img src="assets/images/projects/p-03.jpg" alt="" />
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
                            <img src="assets/images/projects/p-04.jpg" alt="" />
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
                      <img src={team1} alt="" />
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
                      <img src={team2} alt="" />
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
                        <img src="assets/images/brand-logo/01.png" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="assets/images/brand-logo/07.png" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="assets/images/brand-logo/03.png" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="assets/images/brand-logo/08.png" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="assets/images/brand-logo/05.png" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="assets/images/brand-logo/12.png" alt="" />
                      </div>
                      <div className="single-brand-logo">
                        <img src="assets/images/brand-logo/07.png" alt="" />
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
                      <img src={testi} alt="" />
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
                    <div class="testimonials-active-1 owl-carousel owl-loaded owl-drag">
                      <div class="owl-stage-outer">
                        <div class="owl-stage" style={anime}>
                          <div
                            class="owl-item cloned"
                            style={{ width: "597.2px;" }}
                          >
                            <div class="single-testimonials d-flex col-12">
                              <div class="client-info">
                                <p>
                                  A wonderful serenity has taken possession of
                                  my entire soul, like these sweet mornings of
                                  spring which I enjoy with my whole heart.
                                </p>
                                <div class="testimonials-details">
                                  <div class="testimonials-img">
                                    <a href="#">
                                      <img src={cl} alt="" />
                                    </a>
                                  </div>
                                  <div class="testimonials-text">
                                    <h3>Albert Junior</h3>
                                    <p>Designer</p>
                                  </div>
                                </div>
                                <div class="testimonials-icon">
                                  <i
                                    class="fa fa-quote-left"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="owl-nav">
                        <div class="owl-prev"></div>
                        <div class="owl-next"></div>
                      </div>
                      <div class="owl-dots">
                        <div class="owl-dot active">
                          <span></span>
                        </div>
                        <div class="owl-dot">
                          <span></span>
                        </div>
                        <div class="owl-dot">
                          <span></span>
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
                        <h3 className="contact-title">Bergama Şube</h3>
                        <ul>
                          <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#"> 0532 290 80 35</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                            <a href="#">bilgievar@gmail.com</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Eren Güngör Sk. No:15 Yenikent/Bergama</a>
                          </li>
                        </ul>
                      </div>
                      <div className="contact-text">
                        <h3 className="contact-title">AliAğa Şube</h3>
                        <ul>
                          <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#">0532 290 80 35</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-envelope"
                              aria-hidden="true"
                            ></i>
                            <a href="#">bilgievar@gmail.com</a>
                          </li>
                          <li>
                            <i
                              className="fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                            <a href="#">Kurtuluş Mh. Fevzi Paşa Cd. No:81/B Aliağa</a>
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
                              placeholder="İsmin"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <input
                              name="email"
                              type="email"
                              placeholder="Email Adresin"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <input
                              name="your Subject"
                              type="text"
                              placeholder="Konu"
                            />
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <textarea
                              name="message"
                              placeholder="Mesajın"
                            ></textarea>
                          </div>
                          <div className="col-lg-12 col-md-12 col-12">
                            <button className="submit" type="submit">
                              Mesaj Gönder
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
                          <img src="assets/images/logo/logo.png" alt="logo" />
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
                                  src="assets/images/footer/footer-01.jpg"
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
                                  src="assets/images/footer/footer-02.jpg"
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
                                  src="assets/images/footer/footer-03.jpg"
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
                                  src="assets/images/footer/footer-04.jpg"
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
                                  src="assets/images/footer/footer-05.jpg"
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
                                  src="assets/images/footer/footer-06.jpg"
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
      </div>
    </>
  );
};

export default Slider;
