import React, { useState } from "react";
import axios from "axios";

const Support = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const res = await axios.post("http://localhost/hotel-api/support.php", formData);
            if (res.data.success) {
                setStatus("Message sent successfully ✅");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("❌ Failed to send message. Please try again.");
            }
        } catch (err) {
            console.error(err);
            setStatus("❌ An error occurred.");
        }
    };

    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center">Customer Support</h1>
            <p className="text-center mb-5">Need help? Reach out via the form below or call us directly.</p>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-control"
                                rows="4"
                                placeholder="How can we help you?"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Send Message</button>
                    </form>
                    {status && <p className="mt-3 text-center">{status}</p>}
                </div>
            </div>

            <div className="text-center mt-5">
                <p>Email: <a href="mailto:support@randolphhotel.com">support@randolphhotel.com</a></p>
                <p>Phone: +234 803-184-6516</p>
                <p>Live Chat: Available from 9 AM – 9 PM daily</p>
            </div>
        </div>
    );
};

export default Support;
