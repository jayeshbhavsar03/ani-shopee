import React from 'react'
// import SignIn from './component/SignIn';
import '../index.css';
import Logo from "../images/logo.png";
import Slider from "../images/slider-bg.jpg";
import S1 from "../images/s1.png";
import S2 from "../images/s2.png";
import S3 from "../images/s3.png";
import g1 from "../images/g1.jpg";
import g2 from "../images/g2.jpg";
import g3 from "../images/g3.jpg";
import g4 from "../images/g4.jpg";
import g5 from "../images/g5.jpg";
import g6 from "../images/g6.jpg";
import client_bg from "../images/client-bg.jpg";
import c1 from "../images/client1.jpg";
import c2 from "../images/client2.jpg";
import c3 from "../images/client3.jpg";



export default function Main(props) {
    return (
        <>
            <div className="hero_area">
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <a className="navbar-brand" href=" ">
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
                                        <a className="nav-link" href=" "> Home </a>
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
                <section className=" slider_section position-relative">
                    <div className="slider_bg_box">
                        <img src={Slider} alt="" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-6">
                                <div className="detail-box">
                                    <h1>
                                        Welcome to
                                        <br />Our Ani Shopee
                                    </h1>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae iste officiis repellat nisi placeat consectetur voluptatibus, facilis vero blanditiis eveniet? Similique deleniti impedit ipsum corporis molestiae natus qui? Unde, corrupti.
                                    </p>
                                    <div className="btn-box">
                                        <a href=" " className="btn-1">
                                            What we do
                                        </a>
                                        <a href=" " className="btn-2">
                                            Adopt Pet
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            <section className="wedo_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            <hr />
                            What We Do
                            <hr />
                        </h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam ipsa rem, labore cupiditate temporibus nemo repellat mollitia voluptatem quaerat fugiat nisi sunt.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={S1} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Pet Adoption
                                    </h6>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam ipsa rem, labore cupiditate temporibus nemo repellat mollitia voluptatem.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={S2} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Pet Care
                                    </h6>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam ipsa rem, labore cupiditate temporibus nemo repellat mollitia voluptatem.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="box">
                                <div className="img-box">
                                    <img src={S3} alt="" />
                                </div>
                                <div className="detail-box">
                                    <h6>
                                        Pet Training
                                    </h6>
                                    <p>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid magnam ipsa rem, labore cupiditate temporibus nemo repellat mollitia voluptatem.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="gallery_section ">
                <div className="container-fluid">
                    <div className="heading_container heading_center">
                        <h2>
                            <hr />
                            Pet For Adoption
                            <hr />
                        </h2>
                    </div>
                    <div className="row">
                        <div className=" col-sm-8 col-md-6 px-0">
                            <div className="img-box">
                                <img src={g1} alt="" />
                                <div className="btn-box">
                                    <a href={g1} data-toggle="lightbox" className="btn-1">
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 px-0">
                            <div className="img-box">
                                <img src={g2} alt="" />
                                <div className="btn-box">
                                    <a href={g2} data-toggle="lightbox" className="btn-1">
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 px-0">
                            <div className="img-box">
                                <img src={g3} alt="" />
                                <div className="btn-box">
                                    <a href={g3} data-toggle="lightbox" className="btn-1">
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 px-0">
                            <div className="img-box">
                                <img src={g4} alt="" />
                                <div className="btn-box">
                                    <a href={g4} data-toggle="lightbox" className="btn-1">
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 col-md-3 px-0">
                            <div className="img-box">
                                <img src={g5} alt="" />
                                <div className="btn-box">
                                    <a href={g5} data-toggle="lightbox" className="btn-1">
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 col-md-6 px-0">
                            <div className="img-box">
                                <img src={g6} alt="" />
                                <div className="btn-box">
                                    <a href={g6} data-toggle="lightbox" className="btn-1">
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="client_section layout_padding">
                <div className="client_bg_box">
                    <img src={client_bg} alt="" />
                </div>
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2>
                            <hr />
                            What Says Our Clients
                            <hr />
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="box">
                                <div className="img-box">
                                    <img src={c1} alt="" className="box-img" />
                                </div>
                                <div className="detail-box">
                                    <div className="client_id">
                                        <div className="client_info">
                                            <h6>
                                                Jayesh Bhavsar
                                            </h6>
                                        </div>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 offset-md-5">
                            <div className="box">
                                <div className="img-box">
                                    <img src={c2} alt="" className="box-img" />
                                </div>
                                <div className="detail-box">
                                    <div className="client_id">
                                        <div className="client_info">
                                            <h6>
                                                Subham Hupad
                                            </h6>
                                        </div>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="box">
                                <div className="img-box">
                                    <img src={c3} alt="" className="box-img" />
                                </div>
                                <div className="detail-box">
                                    <div className="client_id">
                                        <div className="client_info">
                                            <h6>
                                                Sankalp Babhanikar
                                            </h6>
                                        </div>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                                </div>
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
                                    <a href=" ">
                                        <img src={Logo} alt="" />
                                        <span>
                                            Ani Shopee
                                        </span>
                                    </a>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ducimus quia velit ipsa, error a nesciunt natus dolores rerum veniam?
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