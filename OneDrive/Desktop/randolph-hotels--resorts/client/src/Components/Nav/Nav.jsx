import React, { useState } from "react";
import logoIcon from './../../assets/logoIcon.jpg';
import { Link, useNavigate } from "react-router-dom";

function Nav() {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    // 🔹 Example: check logged-in user from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <nav className="navbar navbar-expand-lg main-navbar w-100">
                <div className="container-fluid px-5 d-flex align-items-center">

                    {/* LOGO */}
                    <Link to="/" className="navbar-brand d-flex align-items-center m-auto">
                        <img src={logoIcon} alt="Randolph Logo" className="logo-img" />
                        <span className="brand-name fw-bold fs-4">
                            <span className="text-primary">Rand</span>
                            <span className="text-accent">olph</span>
                        </span>
                    </Link>

                    {/* TOGGLER (Mobile) */}
                    <button
                        className="navbar-toggler border-0"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {isMenuOpen ? (
                            <i className="bi bi-x-lg fs-1 text-white"></i>
                        ) : (
                            <i className="bi bi-list fs-1 text-white"></i>
                        )}
                    </button>

                    {/* MENU */}
                    <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
                        <ul className="navbar-nav d-flex gap-lg-4 text-start">
                            <li className="nav-item"><Link className="nav-link" to="/" onClick={closeMenu}>Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about" onClick={closeMenu}>About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/rooms" onClick={closeMenu}>Services</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/facilities" onClick={closeMenu}>Facilities</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/blogs" onClick={closeMenu}>Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link></li>

                            {/* Other links */}
                            <Link to="/login" className="btn btn-outline-primary">Log In</Link>

                        </ul>
                    </div>

                    {/* RESERVATION BUTTON */}
                    <button
                        className="btn nav-btn rounded d-none d-lg-block ms-3"
                        onClick={() => navigate('/rooms')}
                    >
                        RESERVATION
                    </button>
                </div>
            </nav>

            {/* INFOBAR */}
            <div className="infobar w-100 bg-light py-2">
                <div className="container-fluid px-5 d-flex flex-wrap justify-content-between align-items-center">
                    <div className="contact-info d-flex gap-4 small">
                        <span><i className="bi bi-telephone me-1"></i> +234 8073309451</span>
                        <span><i className="bi bi-envelope me-1"></i> info@randolphhotel.com</span>
                    </div>
                    <div className="social-icons d-flex gap-3">
                        <a
                            href="https://www.facebook.com/share/v/1GQAkB3ej4/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-facebook"></i>
                        </a>

                        <a
                            href="https://vt.tiktok.com/ZSSoBp4vc/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-tiktok"></i>
                        </a>

                        <a
                            href="https://www.instagram.com/reel/DNa5thmtVdr/?utm_source=ig_web_button_share_sheet&igsh=MXU0ZW8za3QybWZ4NA=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-instagram"></i>
                        </a>

                        <a
                            href="https://x.com/Randolphresort/status/1956426005704503655"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="bi bi-twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
