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

import cl2 from "../assets/images/testimonial/client-3.png";
import cl1 from "../assets/images/testimonial/client-1.png";
import innove from "../assets/images/cms/about.jpg";

import slide from "../assets/images/slider/slider-6.jpg";

import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import "../togglevideo.css";
import Slider from "./Slider";
import Main from "./Main";
import Ourservice from "./Ourservice";
import Latestproject from "./Latestproject";
import Teamarea from "./Teamarea";
import Brandarea from "./Brandarea";
import Workarea from "./Workarea";
import Testimonals from "./Testimonals";
import Contact from "./Contact";
import Footer from "./Footer";

const House = () => {
 

  const backImage = {
    backgroundImage: "url(" + slide + ")",
    backgroundSize: "auto",
    backgroundRepeat: "no-repeat",
  };
  


  


  /*
  
    ---------------------------------------------------------------------------Sidebarrr-----------------
   */
  const [isClickSideBar, setClickSideBar] = useState(false);

  const [sideBarClass,setBarClass]=useState('mobile_sidebar')
  
  const [c,x]=useState("");

  const handlersidebar = () => {
    setClickSideBar(true);
      
    setBarClass('mobile_sidebar')
  };
  const handlerClassName=()=>{
      setBarClass('mobile_sidebar_back')
  }

  return (
    <>
     

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
          <Slider handlerClassName={handlerClassName}/>
          
          <Main/>
          <Ourservice/>
          <Latestproject/>
          <Teamarea/>
          <Brandarea/>
          <Workarea/>
          <Testimonals/>
          <Contact/>
          <Footer/>
          
          
          </div>
          
        </div>
      </div>
    </>
  );
};

export default House;
