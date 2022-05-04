import React from 'react'
import '../index.css';
import Logo from "../images/logo.png";


export default function about(props) {
    return (
        <>

            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <a className="navbar-brand" href="index.html">
                            <img src={Logo} alt="" />
                            <span>
                                Ani Shopee
                            </span>
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/dashboard"> Home </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about"> About </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/pet_adop"> Pets Category </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link pr-lg-0" href="/contact"> Contact us</a>
                                </li>
                                <li className="nav-item">
                                        <a href="/" class="btn btn-secondary">Log out</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <section class="contact_section layout_padding-bottom layout_padding2-top">
                <div class="container ">
                    <div class="heading_container ">
                        <h2 class="">
                            Contact Us
                            <hr />
                        </h2>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ">
                            <form action="#">
                                <div>
                                    <input type="text" placeholder="Name" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Pone Number" />
                                </div>
                                <div>
                                    <input type="text" class="message-box" placeholder="Message" />
                                </div>
                                <div class="btn-box">
                                    <button>
                                        SEND
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>


            <section className="info_section">
                <div className="container">
                    <div className="row container mx-5">
                        <div className="col-md-6 col-lg-3">
                            <div className="info_logo">
                                <div>
                                    <a href=" ">
                                        <img src={Logo} alt="" />
                                        <span>
                                            Ani Shopee
                                        </span>
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non harum ex accusamus vero molestiae dolorem aut explicabo ratione debitis minus.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="info_links ">
                                <h5>
                                    Contact Details
                                </h5>
                                <div className="info_contact">
                                    <div className="contact_link_box">
                                        <a href=" ">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            <span>
                                                J-Tower, Aurangabad, Maharashtra.
                                            </span>
                                        </a>
                                        <a href=" ">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <span>
                                                Call +91 9370821861
                                            </span>
                                        </a>
                                        <a href=" ">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <span>
                                                jaybhavsar9370@gmail.com
                                            </span>
                                        </a>
                                    </div>
                                </div>
                                <div className="info_social">
                                    <a href=" ">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </a>
                                    <a href=" ">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                    <a href=" ">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </a>
                                    <a href=" ">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="info_insta">
                                <h5>
                                    INFORMATION
                                </h5>
                                <p className="pr-0 pr-md-4 pr-md-5">
                                    Lorem ipsum dolor, doloribus corporis harum quae saepe minus. Reiciendis vel obcaecati voluptatem dolores facere dignissimos beatae distinctio.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="footer_section">
                <div className="container">
                    <p>
                        &copy; <span id="displayYear"></span> All Rights Reserved By Ani Shopee
                    </p>
                </div>
            </footer>

        </>
    )
}