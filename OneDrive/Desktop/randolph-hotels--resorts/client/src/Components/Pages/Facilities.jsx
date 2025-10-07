import React from 'react'
import { Link } from 'react-router-dom'

import element2 from './../../assets/bg-2.png'
import resorts from './../../assets/feature.png'
import garden1 from '../../assets/garden1.jpeg'
import pool from '../../assets/pool.jpeg'

const Facilities = () => {
    return (
        <>
            {/* Page Section */}
            <div className="section-banner d-flex align-items-center text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-wrap text-center">
                                <div className="section-title">
                                    <h2>Facilities</h2>
                                </div>
                                <div className="section-wrap d-flex align-tems-center justify-content-center">
                                    <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                        <li><Link to='/'>Home</Link>&nbsp; / &nbsp; <span className="fw-bold">Facilities</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🏨 Facilities Section */}
            <section className="py-5" style={{ backgroundColor: "#f9f9f9" }}>
                <div className="container">
                    {/* Section Title */}
                    <div className="text-center mb-5">
                        <h2 className="fw-bold" style={{ color: "#0d1b2a" }}>Our Facilities</h2>
                        <p className="text-muted fs-5">
                            Experience world-class luxury at Randolph Hotels & Resorts — where every detail is designed for comfort, relaxation, and elegance.
                        </p>
                    </div>

                    {/* Exotic Rooms */}
                    <div className="row g-5 align-items-center mb-5">
                        <div className="col-lg-6">
                            <img
                                src={resorts}
                                alt="Exotic Rooms"
                                className="img-fluid rounded shadow"
                                style={{
                                    height: "370px",
                                    width: "100%",
                                    objectFit: "cover",
                                    border: "6px solid #0d1b2a",
                                    borderRadius: "15px"
                                }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3" style={{ color: "#0d1b2a" }}>Exotic Rooms</h3>
                            <p className="text-muted fs-5">
                                Our rooms combine modern comfort with timeless elegance — tailored for both leisure and business guests seeking a luxurious stay.
                            </p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Spacious and elegantly furnished</li>
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Premium bedding & smart amenities</li>
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Designed for relaxation & productivity</li>
                            </ul>
                            <Link to="/rooms">
                                <button className="btn discover-btn mt-3 my-5">DISCOVER MORE</button>
                            </Link>
                        </div>
                    </div>

                    {/* Swimming Pool (Alternate Layout) */}
                    <div className="row g-5 align-items-center mb-5 flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <img
                                src={pool}
                                alt="Swimming Pool"
                                className="img-fluid rounded shadow"
                                style={{
                                    height: "370px",
                                    width: "100%",
                                    objectFit: "cover",
                                    border: "6px solid #0d1b2a",
                                    borderRadius: "15px"
                                }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3" style={{ color: "#0d1b2a" }}>Olympic-size Swimming Pool</h3>
                            <p className="text-muted fs-5">
                                Dive into relaxation at our Olympic-size swimming pool, ideal for fitness, leisure, and family fun under the sun.
                            </p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Full Olympic dimensions</li>
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Relaxing sunbeds & shaded cabanas</li>
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Safe & family-friendly with lifeguards</li>
                            </ul>
                        </div>
                    </div>

                    {/* Executive African Garden */}
                    <div className="row g-5 align-items-center mb-5">
                        <div className="col-lg-6">
                            <img
                                src={garden1}
                                alt="Executive African Garden"
                                className="img-fluid rounded shadow"
                                style={{
                                    height: "370px",
                                    width: "100%",
                                    objectFit: "cover",
                                    border: "6px solid #0d1b2a",
                                    borderRadius: "15px"
                                }}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3" style={{ color: "#0d1b2a" }}>Executive African Garden</h3>
                            <p className="text-muted fs-5">
                                Escape into serenity at our Executive African Garden — a lush retreat for relaxation, intimate gatherings, and unforgettable experiences.
                            </p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Beautifully landscaped with African design</li>
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Perfect for events & photography</li>
                                <li><i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i> Tranquil ambiance surrounded by nature</li>
                            </ul>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-5">
                        <a
                            href="tel:+2348162408205"
                            className="btn px-4 py-3 shadow-lg"
                            style={{
                                backgroundColor: "#0d1b2a",
                                color: "#fff",
                                fontWeight: "600",
                                borderRadius: "30px",
                                textDecoration: "none",
                                fontSize: "18px",
                            }}
                        >
                            📞 Call for Enquiries: +234 816 240 8205
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Facilities
