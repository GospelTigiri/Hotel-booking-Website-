import React from 'react'
import { Link } from 'react-router-dom'

import hotelImg from './../../assets/about-1.png'
import bedroomImg from './../../assets/about-2.png'
import skilling from './../../assets/skills-img.png'
import element1 from './../../assets/bg-1.png'
import element2 from './../../assets/bg-2.png'
import resorts from './../../assets/feature.png'
import blog1 from './../../assets/blog-1.jpg'
import blog2 from './../../assets/blog-2.jpg'
import blog3 from './../../assets/blog-3.jpg'


const About = () => {
    return (
        <>
            {/* Page Section */}
            <div className="section-banner d-flex align-items-center text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-wrap text-center">
                                <div className="section-title">
                                    <h2>About Us</h2>
                                </div>
                                <div className="section-wrap d-flex align-tems-center justify-content-center">
                                    <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                        <li><Link to='/'>Home</Link>&nbsp; / &nbsp; <span className="fw-bold">About us</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About */}
            <section className="about-section my-5 py-5" id="about">
                <div className="container">
                    <div className="row align-items-center gy-4">
                        <div className="col-lg-6 position-relative image-wrapper">
                            <img
                                src={hotelImg}
                                alt="Hotel exterior"
                                className="img-fluid shadow-sm main-img"
                            />
                            <img
                                src={bedroomImg}
                                alt="Bedroom"
                                className="overlay-img shadow-sm p-1 bg-white"
                            />
                        </div>
                        <div className="col-lg-6 text-wrapper">
                            <div className="section-title about-title">
                                <span>About Us</span>
                                <h2>
                                    Most Safe & Rated <br /> Hotel In Port Harcourt
                                </h2>
                            </div>
                            <p>
                                Welcome to Randolph Hotels & Resorts, your premier destination for
                                comfort, elegance, and exceptional hospitality in the heart of Port
                                Harcourt.
                            </p>
                            <p>
                                Our facilities include fully equipped conference and event spaces,
                                exquisite dining options, a relaxing bar, and attentive staff
                                dedicated to making every moment memorable.
                            </p>
                            <div className="feature-peregraphs mt-4 mb-4">
                                <p>
                                    <i className="ri-check-line"></i> 24 hours Power Supply
                                </p>
                                <p>
                                    <i className="ri-check-line"></i> Free WiFi
                                </p>
                                <p>
                                    <i className="ri-check-line"></i> Free Swimming Pool
                                </p>
                            </div>
                            <button className="btn discover-btn mt-3">DISCOVER MORE</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog */}
            <div className="blog py-5 position-relative">
                <div className="container">
                    <img src={element1} className='element element1 position-absolute' alt="" />
                    <div className="row">
                        <div className="section-title text-center d-flex flex-column align-items-center">
                            <span>Our Blog</span>
                            <h2>Latest Blog & News</h2>
                            <p style={{ maxWidth: '800px' }}>Randolph Hotels & Resorts is excited to unveil a fresh seasonal menu at our beautiful Garden Bar. Guests can now enjoy handcrafted cocktails and locally inspired dishes, perfect for warm evenings under the stars.</p>
                        </div>
                        <div className="blog-wrapper mt-5">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 mb-3">
                                    <div className="blog-item">
                                        <div className="blog-image overflow-hidden">
                                            <img src={blog1} className='img-fluid' alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-date">
                                                22 July, 2025
                                            </div>
                                            <h4 className="mb-3">New Seasonal Menu at the Garden Bar</h4>
                                            <p className="mb-4">Randolph Hotels & Resorts is excited to unveil a fresh seasonal menu at our beautiful Garden Bar. Guests can now enjoy handcrafted cocktails and locally inspired dishes, perfect for warm evenings under the stars.</p>
                                            <button className="blog-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-3">
                                    <div className="blog-item">
                                        <div className="blog-image overflow-hidden">
                                            <img src={blog2} className='img-fluid' alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-date">
                                                28 September, 2025
                                            </div>
                                            <h4 className="mb-3">New Seasonal Menu at the Garden Bar</h4>
                                            <p className="mb-4">Randolph Hotels & Resorts is excited to unveil a fresh seasonal menu at our beautiful Garden Bar. Guests can now enjoy handcrafted cocktails and locally inspired dishes, perfect for warm evenings under the stars.</p>
                                            <button className="blog-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 mb-3">
                                    <div className="blog-item">
                                        <div className="blog-image overflow-hidden">
                                            <img src={blog3} className='img-fluid' alt="" />
                                        </div>
                                        <div className="blog-content">
                                            <div className="blog-date">
                                                01 October, 2025
                                            </div>
                                            <h4 className="mb-3">New Seasonal Menu at the Garden Bar</h4>
                                            <p className="mb-4">Randolph Hotels & Resorts is excited to unveil a fresh seasonal menu at our beautiful Garden Bar. Guests can now enjoy handcrafted cocktails and locally inspired dishes, perfect for warm evenings under the stars.</p>
                                            <button className="blog-btn">Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
