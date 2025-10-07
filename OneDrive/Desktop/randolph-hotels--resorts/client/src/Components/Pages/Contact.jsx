import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <>
            {/* Page Section */}
            <div className="section-banner d-flex align-items-center text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-wrap text-center">
                                <div className="section-title">
                                    <h2>Contact</h2>
                                </div>
                                <div className="section-wrap d-flex align-tems-center justify-content-center">
                                    <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                        <li><Link to='/'>Home</Link>&nbsp; / &nbsp; <span className="fw-bold">Contact</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-page mb-5">
                <div className="container">
                    <div className="row justify-content-center align-items-start g-5">

                        {/* LEFT: Contact Info */}
                        <div className="col-lg-4 order-lg-1">
                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-geo-alt fs-2 me-3 text-primary"></i>
                                <div className="contact-info">
                                    <h5>Office Address</h5>
                                    <p className="mb-0">101 Old Aba, Port Harcourt, Nigeria</p>
                                </div>
                            </div>
                            <hr />

                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-clock fs-2 me-3 text-primary"></i>
                                <div className="contact-info">
                                    <h5>Working Hours</h5>
                                    <p className="mb-0">
                                        24 Hours
                                    </p>
                                </div>
                            </div>
                            <hr />

                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-envelope fs-2 me-3 text-primary"></i>
                                <div className="contact-info">
                                    <h5>Message Us</h5>
                                    <p className="mb-0">
                                        support@randolphhotel.com<br />
                                        info@randolphhotel.com
                                    </p>
                                </div>
                            </div>
                            <hr />
                            <div className="mb-4 d-flex align-items-start">
                                <i className="bi bi-telephone fs-2 me-3 text-primary"></i>
                                <div className="contact-info">
                                    <h5>Phone</h5>
                                    <p className="mb-0">
                                        +234 8031846516<br />
                                        +234 8031846516
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Contact Form */}
                        <div className="col-lg-8 order-lg-2 contact-form-wrap p-4 rounded" style={{ backgroundColor: "#f1f3f7ff" }}>
                            <h1 className="mb-5 text-center fs-1 fw-bolder">Get In Touch</h1>
                            <form>
                                <div className="row mb-4 contact-wrap">
                                    <div className="col input-box">
                                        <input type="text" className="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="col input-box">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="row mb-4 contact-wrap">
                                    <div className="col input-box">
                                        <input type="text" className="form-control" placeholder="Phone No." />
                                    </div>
                                    <div className="col input-box">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                </div>
                                <div className="mb-4 input-box">
                                    <textarea className="form-control" rows={4} placeholder="Write comments"></textarea>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">SUBMIT NOW</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
