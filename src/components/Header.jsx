import React from "react";
import logo from "../assets/img/logo.svg"
import BurgerMenu from "../assets/img/burger-menu-icon.svg"

function Header() {
    return (
        <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <div className="logo-icon">
                            <a href="/">
                                <img src={logo} alt="logo" />
                            </a>
                            <img alt="bar-menu" className="bar-menu" src={BurgerMenu} />
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="menu-bar">
                            <nav>
                                <ul>
                                    <li><a href="index">Home</a></li>
                                    <li><a href="about">About</a>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Schedule</a>
                                        <ul>
                                            <li><a href="schedule">Schedule</a></li>
                                            <li><a href="online-schedule">online Schedule </a></li>
                                            <li><a href="apointment-1">Apointment 1 </a></li>
                                            <li><a href="apointment-2">Apointment 2 </a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Pages</a>
                                        <ul>
                                            <li><a href="portfolio">Portfolio</a></li>
                                            <li><a href="portfolio-details">Portfolio Details</a></li>
                                            <li><a href="pricing-table">Pricing Table</a></li>
                                            <li><a href="404">404</a></li>
                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children"><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog-style-1">Blog Style 1</a></li>
                                            <li><a href="blog-style-2">Blog Style 2</a></li>
                                            <li><a href="blog-details">Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-1">
                        <div className="extras">
                            <a href="javascript:void(0)" id="desktop-menu" className="menu-btn">
                                <img alt="burger-menu" src={BurgerMenu} />
                            </a>
                        </div>
                    </div>
                    <div className="menu-wrap">
                        <div className="menu-inner ps ps--active-x ps--active-y">
                            <span className="menu-cls-btn"><i className="cls-leftright"></i><i className="cls-rightleft"></i></span>
                            <div className="hambur">
                                <h3>Let’s be Together</h3>
                                <p>Don't miss the next workout:</p>
                                <div className="data-to">
                                    <h6>22<span>june</span></h6>
                                    <h5>6:30pm</h5>
                                    <p><b>Huntington Central Park Equestrian Center</b>
                                        18381 Goldenwest St, Huntington Beach, CA 92648, United States</p>

                                </div>
                                <div className="contact-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689446.104646556!2d28.705460424349365!3d48.83127549941125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1d9c154700e8f%3A0x1068488f64010!2sUkraine!5e0!3m2!1sen!2s!4v1661009847728!5m2!1sen!2s" width="600" height="450" className="border-0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobile-nav d-block" id="mobile-nav" >

                <div className="res-log">

                    <a href="index">

                        <img src="/assets/img/logo-w.svg" alt="Responsive Logo" />

                    </a>

                </div>

                <ul>

                    <li>

                        <a href="index">Home</a>

                    </li>

                    <li><a href="about">About</a>

                    </li>

                    <li className="menu-item-has-children"><a href="JavaScript:void(0)">Schedule</a>

                        <ul className="sub-menu">

                            <li><a href="schedule">Schedule</a></li>

                            <li><a href="online-schedule">online Schedule</a></li>

                            <li><a href="apointment-1">Apointment 1</a></li>

                            <li><a href="apointment-2">Apointment 2</a></li>

                        </ul>

                    </li>

                    <li className="menu-item-has-children"><a href="JavaScript:void(0)">Pages</a>

                        <ul className="sub-menu">

                            <li><a href="portfolio">Portfolio</a></li>
                            <li><a href="portfolio-details">Portfolio Details</a></li>
                            <li><a href="pricing-table">Pricing Table</a></li>
                            <li><a href="404">404</a></li>

                        </ul>

                    </li>

                    <li className="menu-item-has-children"><a href="JavaScript:void(0)">Blog</a>
                        <ul className="sub-menu">

                            <li><a href="blog-style-1">Blog Style 1</a></li>
                            <li><a href="blog-style-2">Blog Style 2</a></li>
                            <li><a href="blog-details">Blog Details</a></li>

                        </ul>

                    </li>

                    <li><a href="contact">Contact</a></li>

                </ul>
                <ul className="Contacts mobil">

                    <li><a href="callto:+1(495)2311782"><i className="fa-solid fa-phone"></i>+1 (495) 231 17 82</a></li>
                    <li><a href="hana_evans@gmail.com"><i className="fa-regular fa-envelope"></i>hana_evans@gmail.com</a></li>
                </ul>
                <span className="res-cross"><i className="cls-leftright"></i><i className="cls-rightleft"></i></span>

            </div>
        </header>
    );
}

export default Header;