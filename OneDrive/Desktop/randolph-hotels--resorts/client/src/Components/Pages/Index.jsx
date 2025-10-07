import React from 'react';
import checkIcon from './../../assets/check-icon.png';
import closeIcon from './../../assets/xbox-x.png';
import userIcon from './../../assets/users-icon.png';
import babyIcon from './../../assets/baby-icon.png';
import roomIcon from './../../assets/room-icon.png';
import hotelImg from './../../assets/about-1.png';
import bedroomImg from './../../assets/about-2.png';

import element1 from './../../assets/bg-1.png'
import element2 from './../../assets/bg-2.png'

import { Link, useNavigate } from 'react-router-dom'
import Nav from './../Nav/Nav'

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper modules
import { Grid, Navigation } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';

import resorts from './../../assets/feature.png'
import user1 from './../../assets/test-1.png'
import user2 from './../../assets/test-2.png'
import user3 from './../../assets/test-3.png'
import quote from './../../assets/Quote.png'
import bookingImg from './../../assets/Bookings.png'
import blog1 from './../../assets/blog-1.jpg'
import blog2 from './../../assets/blog-2.jpg'
import blog3 from './../../assets/blog-3.jpg'


// Rooms data
import room1 from './../../assets/room-1.png';
import room2 from './../../assets/room-2.png';
import room3 from './../../assets/room-3.png';
import room4 from './../../assets/room-4.png';
import room5 from './../../assets/room-5.png';
import room6 from './../../assets/room-6.png';

//Form
import RoomAvailabilityForm from './RoomAvailabilityForm';

const Rooms = [
    {
        id: 'R1',
        name: 'Standard Room',
        src: room1,
        Price: '₦20,500',
        description: 'A comfortable room with essential amenities.'
    },
    {
        id: 'R2',
        name: 'Executive Room',
        src: room2,
        Price: '₦28,500',
        description: 'Spacious executive suite with modern facilities.'
    },
    {
        id: 'R3',
        name: 'Super Executive',
        src: room3,
        Price: '₦35,000',
        description: 'Luxury bedding and a beautiful view of the city.'
    },
    {
        id: 'R4',
        name: 'Delux Executive',
        src: room4,
        Price: '₦40,000',
        description: 'Elegantly furnished with premium amenities.'
    },
    {
        id: 'R5',
        name: 'Diamond Suite',
        src: room5,
        Price: '₦45,000',
        description: 'Spacious suite with a separate living area.'
    },
    {
        id: 'R6',
        name: 'VIP Suite',
        src: room6,
        Price: '₦55,000',
        description: 'Top-tier suite with luxury features and services.'
    }
];


const Index = () => {

    const navigate = useNavigate();

    const handleClick = (id) => (
        navigate(`/RoomsDetails/${id}`)
    )

    const handleBooking = (e) => {
        e.preventDefault();
        alert('Booking form submitted!');
        // Here, you’d collect form data and send to your backend.
    };

    return (
        <>
            <Nav />
            {/* Hero */}
            <header className="pt-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="hero-content">
                                <h1>Enjoy <br /> comfort & <br />luxury</h1>
                                <p>
                                    Relax in beautifully designed rooms, breathtaking surroundings, and
                                    world-class service
                                </p>
                                <button
                                    className="btn"
                                    onClick={() => navigate("/contact")}
                                >
                                    Visit Us
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="container check-room">
                                <h2 className="text-center mb-3">Check Room Availability</h2>

                                <RoomAvailabilityForm />

                                {/* You can put more content below if needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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
                            <a href="#rooms" className="btn discover-btn mt-3">
                                DISCOVER MORE
                            </a>

                        </div>
                    </div>
                </div>
            </section>

            {/* Rooms */}
            <section id="rooms" className="container py-5">
                <div className="section-title text-center my-5">
                    <span>The pleasure of luxury</span>
                    <h2>Rooms & Suites</h2>
                    <p className="text-muted w-75 mx-auto">
                        Step into a world of refined comfort with our Rooms and Suites. Thoughtfully appointed and beautifully styled, each one invites you to unwind and enjoy the luxury you deserve.
                    </p>

                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    modules={[Grid]}
                    grid={{ rows: 2, fill: 'row' }}
                    style={{ rowGap: 0 }}
                    breakpoints={{
                        320: { slidesPerView: 1, grid: { rows: 1 } },
                        768: { slidesPerView: 2, grid: { rows: 2 } },
                        1200: { slidesPerView: 3, grid: { rows: 2 } },
                    }}
                    className="rooms-swiper"
                >
                    {Rooms.map((Room) => (
                        <SwiperSlide key={Room.id}>
                            <div className="single-service">
                                <div className="service-thumb">
                                    <img src={Room.src} alt={Room.name} className="img-fluid" />
                                </div>
                                <div className="service-content">
                                    <div className="day-book">
                                        <ul>
                                            <li>{Room.Price} / Night</li>
                                            <button onClick={() => handleClick(Room.id)} className="btn-single">RESERVATION</button>
                                        </ul>
                                    </div>
                                    <h5 className="card-title">{Room.name}</h5>
                                    <p className="room-pere">{Room.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </section>

            {/* Resort */}
            <div className="resort my-5 mb-0">
                <div className="container-fluid position-relative">
                    <img src={element2} className='element element2 position-absolute' alt="" />

                    <div className="row p-0 align-items center">
                        <div className="col-lg-6 image-wrapper p-0">
                            <img src={resorts} className='img-fluid shadow-sm resort-img' alt="" />
                        </div>

                        <div className="col-lg-4 ps-5 pt-5 text-wrapper resort-content">
                            <div className="section-title about-title">
                                <span>Randolph Hotel & Resorts</span>
                                <h2>VIP SUITE</h2>
                            </div>
                            <p>Step into the VIP Suite at Randolph Hotels & Resorts — an exclusive retreat where timeless elegance and modern comfort meet. This spacious suite welcomes you with sophisticated décor, a plush king-size bed, and a private lounge perfect for relaxing or entertaining in style.</p>
                            <p>Unwind in the luxurious spa-inspired bathroom or sip your morning coffee on a private balcony overlooking the serene surroundings. With thoughtful amenities and attentive service, our VIP Suite promises a stay that's both indulgent and unforgettable.</p>

                            <Link to="/rooms" className="btn discover-btn mt-3 my-5">
                                DISCOVER MORE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="testimonial-section py-5">
                <div className="container">
                    <div className="text-center mb-4">
                        <small className="text-uppercase text-warning fw-bold">Testimonial</small>
                        <h2 className="fw-bold display-5 text-dark">What Our Clients Say</h2>
                        <p className="text-muted w-75 mx-auto">
                            Our guests love the calm atmosphere, beautiful spaces, and caring team
                            that always makes them feel right at home at Randolph Hotels & Resorts.
                        </p>
                    </div>

                    <Swiper
                        modules={[Navigation]}
                        navigation={true}        // ✅ turns arrows on
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        breakpoints={{
                            1399: { slidesPerView: 3 },
                            991: { slidesPerView: 2 }, // ✅ show 2 slides on tablets
                            0: { slidesPerView: 1 },   // ✅ 1 slide on mobile
                        }}
                        className="test-swiper"
                    >
                        {/* slide 1 */}
                        <SwiperSlide>
                            <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <img src={user1} className="testimonial-img rounded-circle me-3" alt="Client 1" />
                                    <div className="testimonial-info">
                                        <h5 className="mb-0 fw-bold">Jina Nilson</h5>
                                        <small className="text-muted">Client</small>
                                    </div>
                                    <img src={quote} alt="Quote" />
                                </div>
                                <div className="stars text-warning mb-3">
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <p className="text-muted">
                                    Randolph Hotels & Resorts always feels like home. The staff are
                                    amazing and the ambiance is perfect.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* slide 2 */}
                        <SwiperSlide>
                            <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <img src={user2} className="testimonial-img rounded-circle me-3" alt="Client 2" />
                                    <div className="testimonial-info">
                                        <h5 className="mb-0 fw-bold">Brailty Dcosta</h5>
                                        <small className="text-muted">Client</small>
                                    </div>
                                    <img src={quote} alt="Quote" />
                                </div>
                                <div className="stars text-warning mb-3">
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <p className="text-muted">
                                    Incredible service and luxurious rooms. Highly recommended for a
                                    relaxing stay.
                                </p>
                            </div>
                        </SwiperSlide>

                        {/* slide 3 */}
                        <SwiperSlide>
                            <div className="testimonial-card p-4 rounded bg-white shadow-sm">
                                <div className="d-flex align-items-center mb-3 justify-content-between">
                                    <img src={user3} className="testimonial-img rounded-circle me-3" alt="Client 3" />
                                    <div className="testimonial-info">
                                        <h5 className="mb-0 fw-bold">Elena Cruz</h5>
                                        <small className="text-muted">Client</small>
                                    </div>
                                    <img src={quote} alt="Quote" />
                                </div>
                                <div className="stars text-warning mb-3">
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill me-1"></i>
                                    <i className="ri-star-fill"></i>
                                </div>
                                <p className="text-muted">
                                    A true luxury experience — the food, the rooms, and the views are
                                    all stunning!
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            {/* Book Room */}
            <div className="py-5 bg-white">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-5 mb-4 d-flex flex-column">
                            <div className="section-title book-title">
                                <span>Make appointment</span>
                                <h2>Book A Room</h2>
                            </div>
                            <RoomAvailabilityForm />

                            {/* You can put more content below if needed */}
                        </div>
                        <div className='col-lg-6 d-flex justify-content-end'>
                            <img src={bookingImg} className='img-fluid booking-img' alt="" />
                        </div>
                    </div>
                </div>
            </div>

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
                                            <a href="#rooms" className="blog-btn" style={{ color: "#000000" }}>
                                                Discover More
                                            </a>
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
                                            <a href="#rooms" className="blog-btn" style={{ color: "#000000" }}>
                                                Discover More
                                            </a>
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
                                            <a href="#rooms" className="blog-btn" style={{ color: "#000000" }}>
                                                Discover More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
