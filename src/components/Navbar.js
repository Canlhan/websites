import React from 'react'



import classes from './Home.module.css'
import logo from '../assets/imgs/logo.jpeg'
import './_header.scss'

const Navbar = () => {


  return (
   <>
         <header className="header_area">
                <div className="header-large-device">                   
                    <div className="header-bottom">
                        <div className="container">
                            <div className="row no-gutters align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div className="logo logo-res-lg">
                                        <a href="index.html">
                                            <img src={logo} className={classes.logo} alt="logo"/>
                                        </a>
                                    </div>
                                </div>                           
                                <div className="col-lg-6">
                                    <div className="main-menu menu-lh-1 main-menu-padding-1 menu-text-white main-menu-padding1">
                                        <nav>
                                            <ul>
                                                <li><a className="active" href="index.html">Home</a>
                                                    <ul className="sub-menu-width">
                                                        <li><a href="home-02.html">Home-02</a></li>
                                                        <li><a href="home-03.html">Home-03</a></li> 
                                                        <li><a href="home-04.html">Home-04</a></li> 
                                                        <li><a href="home-05.html">Home-05</a></li> 
                                                    </ul>
                                                </li>
                                                <li><a href="#">Pages</a>
                                                    <ul className="sub-menu-width">
                                                        <li><a href="about-us.html">About Us</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                        <li><a href="404.html">404 Page</a></li>
                                                        <li><a href="contact.html">Contact Page</a></li>
                                                        <li><a href="coming-soon.html">Comming Soon</a></li>
                                                        <li><a href="empty-cart.html">Empty Cart</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop-fullwide.html">Shop</a>
                                                    <ul className="mega-menu-style-2 mega-menu-width2 menu-negative-mrg3">
                                                        <li className="mega-menu-sub-width20"><a className="menu-title" href="#">Shop Layout</a>
                                                            <ul>
                                                                <li><a href="shop-fullwide.html">Shop Fullwidth</a></li>
                                                                <li><a href="shop-sidebar.html">Shop Sidebar</a></li>
                                                                <li><a href="shop-3-col.html">Shop 03 Columns</a></li>
                                                                <li><a href="shop-list-style.html">Shop List Style</a></li>
                                                                <li><a href="order-tracking.html">Order Tracking</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-sub-width22"><a className="menu-title" href="#">Product Layout</a>
                                                            <ul>
                                                                <li><a href="product-details.html">Product Details</a></li>
                                                                <li><a href="product-details-group.html">Grouped</a></li>
                                                                <li><a href="product-details-sticky.html">Sticky Info</a></li>
                                                                <li><a href="product-details-video.html">Video</a></li>
                                                                <li><a href="product-details-affiliate.html">Affiliate</a></li>
                                                            </ul>
                                                        </li>
                                                        <li className="mega-menu-sub-width20"><a className="menu-title" href="#">Shop Pages</a>
                                                            <ul>
                                                                <li><a href="my-account.html">My Account</a></li>
                                                                <li><a href="checkout.html">Check Out</a></li>
                                                                <li><a href="cart.html">Shopping Cart</a></li>
                                                                <li><a href="wishlist.html">Wishlist</a></li>
                                                                <li><a href="login-register.html">login / register</a></li>
                                                            </ul>
                                                        </li>                                                        
                                                    </ul>
                                                </li>
                                                <li><a href="blog.html">Blog</a>
                                                    <ul className="sub-menu-width">
                                                        <li><a href="blog-layout-02.html">Blog Layout</a></li>
                                                        <li><a href="blog.html">Blog Page</a></li>
                                                        <li><a href="blog-no-sidebar.html">Blog No sidebar</a></li>
                                                        <li><a href="blog-right-sidebar.html">Blog Right Sidebar</a></li>
                                                        <li><a href="blog-details.html">Blog Details</a></li>                                                        
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex justify-content-end">
                                    <div className="header-right-wrap header-right-flex">
                                        <div className="same-style same-style-mrg-dec">
                                            <a href="login-register.html"><i className="fa fa-user" aria-hidden="true"></i></a>
                                        </div>
                                        <div className="same-style same-style-mrg-dec">
                                            <a href="wishlist.html"><i className="fa fa-heart-o"></i>
                                                <span><i className="fa fa-bell-o" aria-hidden="true"></i></span>
                                            </a>
                                        </div>
                                        <div className="same-style same-style-mrg-dec">
                                            <a href="cart.html"><i className="fa fa-shopping-cart"></i>
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
                                        <img alt="" src="assets/images/logo/logo.png"/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="header-right-wrap header-right-flex">
                                    <div className="same-style same-style-mrg-dec">
                                        <a href="login-register.html"><i className="fa fa-user" aria-hidden="true"></i></a>
                                    </div>
                                    <div className="same-style">
                                        <a href="wishlist.html"><i className="fa fa-heart-o"></i>
                                            <span><i className="fa fa-bell-o" aria-hidden="true"></i></span>
                                        </a>
                                    </div>
                                    <div className="same-style">
                                        <a className="cart-active" href="cart.html"><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                            <span>0</span>
                                        </a>
                                    </div>
                                    <div className="same-style">
                                        <a className="mobile-menu-button-active" href="#"><i className="fa fa-bars"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>     
   
   </>
  )
}

export default Navbar