import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Nav from './../Nav/Nav'

// Swiper + Grid
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

// Banguet Hall & Garden Bar images
import garden1 from '../../assets/garden1.jpeg'
import hall from '../../assets/hall.jpg'

// Rooms data
import room1 from './../../assets/room-1.png';
import room2 from './../../assets/room-2.png';
import room3 from './../../assets/room-3.png';
import room4 from './../../assets/room-4.png';
import room5 from './../../assets/room-5.png';
import room6 from './../../assets/room-6.png';


const roomsData = [  // <-- renamed here
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

const Rooms = () => {

    const navigate = useNavigate();

    const handleClick = (id) => (
        navigate(`/RoomsDetails/${id}`)
    )

    return (
        <>
            <Nav />
            {/* Page Section */}
            <div className="section-banner d-flex align-items-center text-white">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="section-wrap text-center">
                                <div className="section-title">
                                    <h2>Services</h2>
                                </div>
                                <div className="section-wrap d-flex align-tems-center justify-content-center">
                                    <ul className="d-flex align-items-center text-center gap-3 m-0 p-0 position-relative">
                                        <li><Link to='/'>Home</Link> &nbsp; / &nbsp; <span className="fw-bold">Services</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rooms */}
            <section className="container py-5">
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
                    {roomsData.map((Room) => (
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

            {/* 🏛️ Banqueting Hall Section */}
            <section className="py-5" style={{ background: "#ffffff" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-5" style={{ color: "#0d1b2a" }}>
                            Banqueting Hall
                        </h2>
                        <div style={{ width: "80px", height: "4px", background: "#0053cc", margin: "12px auto", borderRadius: "2px" }}></div>
                        <p className="text-muted fs-5">
                            Celebrate your special moments in an elegant hall designed for grandeur and comfort.
                        </p>
                    </div>

                    <div className="row g-5 align-items-center flex-lg-row-reverse">
                        <div className="col-lg-6">
                            <img
                                src={hall}
                                alt="garden1"
                                className="img-fluid rounded shadow-lg"
                                style={{
                                    height: "420px",
                                    width: "100%",
                                    objectFit: "cover",
                                    border: "6px solid #0d1b2a",
                                }}
                            />
                        </div>

                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3" style={{ color: "#0d1b2a" }}>
                                Elegance for Every Occasion
                            </h3>
                            <p className="mb-4 text-muted fs-5">
                                Our Banqueting Hall provides the perfect ambiance for weddings, receptions, and galas — complete with luxury décor and premium services.
                            </p>

                            <ul className="list-unstyled mb-4 fs-5">
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i>
                                    Capacity: 300+ guests
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i>
                                    Luxury décor & lighting
                                </li>
                                <li>
                                    <i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i>
                                    Full catering service
                                </li>
                            </ul>

                            <a
                                href="tel:+2348037239639"
                                className="btn px-4 py-3 shadow"
                                style={{
                                    backgroundColor: "#0d1b2a",
                                    color: "#fff",
                                    fontWeight: "600",
                                    borderRadius: "30px",
                                }}
                            >
                                📞 Call for Enquiries: +234 803 723 9639
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🎉 Events Section */}
            <section className="py-5" style={{ background: "#f8f9fa" }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="fw-bold display-5" style={{ color: "#0d1b2a" }}>
                            Executive African Garden
                        </h2>
                        <div style={{ width: "80px", height: "4px", background: "#0053cc", margin: "12px auto", borderRadius: "2px" }}></div>
                        <p className="text-muted fs-5">
                            From birthdays to corporate parties, we make every event unforgettable with tailored experiences.
                        </p>
                    </div>

                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <img
                                src={garden1}
                                alt="garden1"
                                className="img-fluid rounded shadow-lg"
                                style={{
                                    height: "420px",
                                    width: "100%",
                                    objectFit: "cover",
                                    border: "6px solid #0d1b2a",
                                }}
                            />
                        </div>

                        <div className="col-lg-6">
                            <h3 className="fw-bold mb-3" style={{ color: "#0d1b2a" }}>
                                Memorable Experiences
                            </h3>
                            <p className="mb-4 text-muted fs-5">
                                Whether it's an anniversary, birthday, or corporate gathering, we ensure every detail is handled with precision and care.
                            </p>

                            <ul className="list-unstyled mb-4 fs-5">
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i>
                                    Flexible seating arrangements
                                </li>
                                <li className="mb-2">
                                    <i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i>
                                    Professional event planning
                                </li>
                                <li>
                                    <i className="bi bi-check-circle-fill me-2" style={{ color: "#0053cc" }}></i>
                                    Custom décor & entertainment
                                </li>
                            </ul>

                            <a
                                href="tel:+2348037239639"
                                className="btn px-4 py-3 shadow"
                                style={{
                                    backgroundColor: "#0d1b2a",
                                    color: "#fff",
                                    fontWeight: "600",
                                    borderRadius: "30px",
                                }}
                            >
                                📞 Call for Enquiries: +234 803 723 9639
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Rooms
