import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import blog1 from "./../../assets/blog-1.jpg";
import blog2 from "./../../assets/blog-2.jpg";
import blog3 from "./../../assets/blog-3.jpg";

const Blogs = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const allPosts = [
        {
            id: 1,
            date: "24 March 2025",
            title: "The Art of a Perfect Hotel Welcome",
            content:
                "From the moment you step through our doors, every detail is designed to make you feel at home. The first smile at check-in sets the tone, while a welcome drink refreshes you after your journey. Your room is prepared exactly as you like it — from the perfect pillow firmness to a personalized note waiting on your desk. Our philosophy is simple: first impressions last forever, so we make every arrival an unforgettable experience.",
            image: blog1,
            category: "Hospitality"
        },
        {
            id: 2,
            date: "28 September 2025",
            title: "Hidden Local Gems Near Our Hotel",
            content:
                "Step outside our lobby and you'll find a world of charm just minutes away. Whether it's a cozy café serving the best hot chocolate in town, a tiny bookstore hidden in a side street, or a hilltop viewpoint where sunsets paint the skyline in gold, these are places most tourists never see. Our concierge loves sharing these secrets with guests who want to explore beyond the usual attractions, discovering the city the way locals do.",
            image: blog2,
            category: "Local Attractions"
        },
        {
            id: 3,
            date: "10 October 2025",
            title: "Luxury Sleep: Behind the Scenes of Our Beds",
            content:
                "A truly restful night is an art form — and we've mastered it. Our beds are built with premium memory foam layered with breathable natural fibers to ensure comfort in every season. Lighting is soft and adjustable, perfect for winding down after a busy day. The curtains are thick enough to block early morning light, yet stylish enough to complement the room's décor. Even the scent in the air is carefully chosen to help you drift into deep, restorative sleep.",
            image: blog3,
            category: "Wellness"
        }
    ];


    const categories = [
        { name: "Local Attractions", count: 5 },
        { name: "Dining & Cuisine", count: 4 },
        { name: "Travel Tips", count: 3 },
        { name: "Wellness & Relaxation", count: 2 }
    ];

    const tags = [
        "Luxury",
        "Vacation",
        "Wellness",
        "Dining",
        "Local Guide",
        "Travel Tips",
        "Events"
    ];

    const filteredPosts = allPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            {/* Page Section */}
            <div className="section-banner d-flex align-items-center text-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="section-title mb-3">
                                <h2 className="fw-bold">Blog</h2>
                            </div>
                            <ul className="breadcrumb d-flex justify-content-center gap-2 m-0 p-0 list-unstyled">
                                <li>
                                    <Link to="/" className="text-white text-decoration-none">Home</Link>
                                </li>
                                <li>/</li>
                                <li className="fw-bold">Blog</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-page container my-5">
                <div className="row">

                    {/* Blog Posts */}
                    <div className="col-lg-8">
                        <h2 className="mb-4">Our Latest Stories</h2>
                        {filteredPosts.map(post => (
                            <div key={post.id} className="blog-post-card mb-5">
                                <img src={post.image} alt={post.title} className="img-fluid rounded" />
                                <div className="mt-3">
                                    <small className="text-muted">{post.date} — {post.category}</small>
                                    <h3 className="mt-2">{post.title}</h3>
                                    <p>{post.content}</p>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() => navigate("/contact")}
                                    >
                                        Visit Us
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="col-lg-4">
                        {/* Search */}
                        <div className="sidebar-widget mb-4">
                            <h5>Search</h5>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="form-control"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Categories */}
                        <div className="sidebar-widget mb-4">
                            <h5>Categories</h5>
                            <ul className="list-unstyled">
                                {categories.map(cat => (
                                    <li key={cat.name} className="d-flex justify-content-between">
                                        {cat.name} <span>({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Recent Posts */}
                        <div className="sidebar-widget mb-4">
                            <h5>Recent Posts</h5>
                            <ul className="list-unstyled">
                                {allPosts.slice(0, 3).map(post => (
                                    <li key={post.id} className="border-bottom py-2">
                                        <Link to={`/blog/${post.id}`} className="text-dark text-decoration-none">
                                            {post.title}
                                        </Link>
                                        <br />
                                        <small className="text-muted">{post.date}</small>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tags */}
                        <div className="sidebar-widget">
                            <h5>Tags</h5>
                            <div className="d-flex flex-wrap gap-2">
                                {tags.map(tag => (
                                    <span key={tag} className="badge bg-light text-dark border">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Blogs;
