import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import logoIcon from './../../assets/logoIcon.jpg';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <>
            <footer className="bg-dark text-light pt-5">
                <div className="container">
                    <div className="row gy-4">
                        {/* Logo & Contact */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="footer-widget mb-3 text-center text-lg-start">
                                <Link to="/" className="logo d-flex align-items-center gap-2 justify-content-center justify-content-lg-start mb-3">
                                    <img src={logoIcon} alt="Randolph Logo" className="logo-img" />
                                    <span className="logo-text">
                                        Randolph <span className="logo-subtext">Hotels & Resorts</span>
                                    </span>
                                </Link>
                                <ul className="list-unstyled small">
                                    <li className="mb-2"><i className="ri-phone-line me-2"></i> +234 803-184-6516</li>
                                    <li className="mb-2"><i className="ri-mail-line me-2"></i> info@randolphhotel.com</li>
                                    <li><i className="ri-map-pin-line me-2"></i> No. 101 Old Aba Road, Port Harcourt</li>
                                </ul>
                            </div>
                        </div>

                        {/* Our Links */}
                        <div className="col-12 col-sm-6 col-lg-2 text-center text-sm-start">
                            <div className="f-widget-title mb-3">
                                <h2 className="fs-5">Our Links</h2>
                            </div>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/rooms">Services</Link></li>
                                <li><Link to="/facilities">Facilities</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="col-12 col-sm-6 col-lg-2 text-center text-sm-start">
                            <div className="f-widget-title mb-3">
                                <h2 className="fs-5">Our Services</h2>
                            </div>
                            <ul className="list-unstyled d-flex flex-column gap-2">
                                <li><Link to="/faq">FAQ</Link></li>
                                <li><Link to="/support">Support</Link></li>
                                <li><Link to="/privacy">Privacy</Link></li>
                                <li><Link to="/terms">Terms & Conditions</Link></li>
                            </ul>
                        </div>

                        {/* WhatsApp Contact */}
                        <div className="col-12 col-sm-6 col-lg-4 text-center text-sm-start">
                            <div className="f-widget-title mb-3">
                                <h2 className="fs-5">Chat With Us</h2>
                            </div>
                            <a
                                href="https://wa.me/2348012345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn w-100 d-flex align-items-center justify-content-center"
                                style={{
                                    backgroundColor: "#fff", // WhatsApp green
                                    color: "#333333",           // dark gray text
                                    fontWeight: "500",
                                    borderRadius: "8px",
                                    padding: "12px"
                                }}
                            >
                                <i
                                    className="fa-brands fa-whatsapp me-2 fs-5"
                                    style={{ color: "#333333" }} // dark gray icon
                                ></i>
                                <span style={{ color: "#333333", fontWeight: "500" }}>Message Us</span>
                            </a>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="border-top mt-4 pt-3">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-3">
                            <p className="mb-0 small">
                                © {year} All rights reserved by <Link to="/" className="text-light">Randolph Hotels & Resorts</Link>
                            </p>

                            <div className="footer-social d-flex justify-content-center gap-3">
                                <a href="https://www.facebook.com/share/v/1GQAkB3ej4/" target="_blank"><i className="bi bi-facebook"></i></a>
                                <a href="https://vt.tiktok.com/ZSSoBp4vc/" target="_blank"><i className="bi bi-tiktok"></i></a>
                                <a href="https://www.instagram.com/reel/DNa5thmtVdr/" target="_blank"><i className="bi bi-instagram"></i></a>
                                <a href="https://x.com/Randolphresort/status/1956426005704503655" target="_blank"><i className="bi bi-twitter"></i></a>
                            </div>

                            <p className="mb-0 small">Developed by Burabari Gospel</p>
                        </div>
                    </div>
                </div>
            </footer >
        </>
    );
};

export default Footer;
