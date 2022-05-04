import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css';
import Logo from "../images/logo.png";
import client_bg from "../images/client-bg.jpg";
import ap1 from "../images/ap1.jpg";
import ap2 from "../images/ap2.jpg";
import ap3 from "../images/ap3.jpg";


export default function pet_adop(props) {
    return (
        <>
            <header className="header_section">
                <div className="container">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        <Link className="navbar-brand" to="index.html">
                            <img src={Logo} alt="" />
                            <span>
                                Ani Shopee
                            </span>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/dashboard"> Home </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about"> About </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to=" "> Pets Category </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link pr-lg-0" to="/contact"> Contact us</Link>
                                </li>
                                <li className="nav-item">
                                        <Link to="/" class="btn btn-secondary">Buy Now</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <section className="pet-category layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            <hr />
                            Pet Category
                            <hr />
                        </h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="single-cat-item">
                                <div class="thumb">
                                    <img class="img-fluid" src={ap1} alt="" />
                                </div>
                                <Link to=" ">
                                    <h4>Rescue Dog</h4>
                                </Link>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, iste suscipit. Soluta eos aut earum deleniti debitis, ipsam consectetur vitae!
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="single-cat-item">
                                <div class="thumb">
                                    <img class="img-fluid" src={client_bg} alt="" />
                                </div>
                                <Link to=" ">
                                    <h4>Breed Dog</h4>
                                </Link>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, iste suscipit. Soluta eos aut earum deleniti debitis, ipsam consectetur vitae!
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="single-cat-item">
                                <div class="thumb">
                                    <img class="img-fluid" src={ap2} alt="" />
                                </div>
                                <Link to=" ">
                                    <h4 class="mx-1">Rescue Cat</h4>
                                </Link>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, iste suscipit. Soluta eos aut earum deleniti debitis, ipsam consectetur vitae!
                                </p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 text-center">
                            <div class="single-cat-item">
                                <div class="thumb">
                                    <img class="img-fluid" src={ap3} alt="" />
                                </div>
                                <Link to=" ">
                                    <h4>Breed Cat</h4>
                                </Link>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, iste suscipit. Soluta eos aut earum deleniti debitis, ipsam consectetur vitae!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            <hr />
                            Rescue Dogs
                            <hr />
                        </h2>
                    </div>
                    <div class="row">
                        <div class="pic-dog-cat card m-2" >
                            <img class="card-img-top" src={ap1} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">2 Month | Fe-Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                        <div class="pic-dog-cat card card m-2">
                            <img class="card-img-top" src={ap1} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">4 Month | Fe-Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                        <div class="pic-dog-cat card card m-2">
                            <img class="card-img-top" src={ap1} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">6 Month | Male</p>
                                <Link to="/contact" class="btn btn-secondary">Log out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            <hr />
                            Breed Dogs
                            <hr />
                        </h2>
                    </div>
                    <div class="row">
                        <div class="pic-dog-cat card m-2" >
                            <img class="card-img-top" src={client_bg} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">2 Month | Fe-Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                        <div class="pic-dog-cat card card m-2">
                            <img class="card-img-top" src={client_bg} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">4 Month | Fe-Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                        <div class="pic-dog-cat card card m-2">
                            <img class="card-img-top" src={client_bg} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">6 Month | Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            <hr />
                            Rescue Cat
                            <hr />
                        </h2>
                    </div>
                    <div class="row">
                        <div class="pic-dog-cat card m-2" >
                            <img class="card-img-top" src={ap2} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">2 Month | Fe-Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                        <div class="pic-dog-cat card card m-2">
                            <img class="card-img-top" src={ap2} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">4 Month | Fe-Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                        <div class="pic-dog-cat card card m-2">
                            <img class="card-img-top" src={ap2} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">6 Month | Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            <hr />
                            Breed Cat
                            <hr />
                        </h2>
                    </div>
                    <div class="row">
                        <div class="pic-dog-cat card m-2" >
                            <img class="card-img-top" src={ap3} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">2 Month | Fe-Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                        <div class="pic-dog-cat card card m-2">
                            <img class="card-img-top" src={ap3} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">4 Month | Fe-Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
                        </div>
                        <div class="pic-dog-cat card card m-2">
                            <img class="card-img-top" src={ap3} alt="a snow-capped mountain range" />
                            <div class="card-body text-dark text-center">
                                <h4 class="card-title">XYZ</h4>
                                <p class="card-text">6 Month | Male</p>
                                <Link to="/contact" class="btn btn-secondary">Buy Now</Link>
                            </div>
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
                                    <Link to=" ">
                                        <img src={Logo} alt="" />
                                        <span>
                                            Ani Shopee
                                        </span>
                                    </Link>
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
                                        <Link to=" ">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            <span>
                                                J-Tower, Aurangabad, Maharashtra.
                                            </span>
                                        </Link>
                                        <Link to=" ">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <span>
                                                Call +91 9370821861
                                            </span>
                                        </Link>
                                        <Link to=" ">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                            <span>
                                                jaybhavsar9370@gmail.com
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="info_social">
                                    <Link to=" ">
                                        <i className="fa fa-facebook" aria-hidden="true"></i>
                                    </Link>
                                    <Link to=" ">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </Link>
                                    <Link to=" ">
                                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                                    </Link>
                                    <Link to=" ">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </Link>
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