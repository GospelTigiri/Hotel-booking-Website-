import React, { useState, useEffect } from "react";
import axios from "axios"; // make sure axios is imported
import { useNavigate } from "react-router-dom";

function AddRoom() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        rimage: null, // will hold file object
        rtype: "",
        rprice: "",
        rdesc: "",
        rtotal: "",
        ravailable: "",
        radults: "",
        rbedsize: "",
        rtv: "",
        rwifi: "",
        rheater: "",
        rphone: "",
        rlaundry: "",
    });

    const [message, setMessage] = useState("");

    // handle text/select inputs
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // handle file upload
    const handleFileChange = (e) => {
        setForm({ ...form, rimage: e.target.files[0] });
    };

    // handle submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // prepare formData for file upload + other inputs
            const formData = new FormData();
            for (const key in form) {
                formData.append(key, form[key]);
            }

            const res = await axios.post(
                "http://localhost/randolphhotels/addroom.php",
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            if (res.data.success) {
                setMessage("✅ Room added successfully!");
                setForm({
                    rimage: null,
                    rtype: "",
                    rprice: "",
                    rdesc: "",
                    rtotal: "",
                    ravailable: "",
                    radults: "",
                    rbedsize: "",
                    rtv: "",
                    rwifi: "",
                    rheater: "",
                    rphone: "",
                    rlaundry: "",
                });

                // redirect to rooms list
                setTimeout(() => navigate("/admin/rooms"), 1200);
            } else {
                setMessage("❌ Failed to add room. " + res.data.message);
            }
        } catch (err) {
            console.error("Error adding room:", err);
            setMessage("❌ Error while adding room.");
        }
    };

    // auto clear message
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => setMessage(""), 4000);
            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <div
            className="d-flex justify-content-center align-items-start bg-light"
            style={{ minHeight: "100vh", paddingTop: "40px" }}
        >
            <div
                className="card shadow-lg p-4"
                style={{ borderRadius: "18px", width: "600px" }}
            >
                <h4
                    className="text-center mb-3"
                    style={{ color: "#0A1D56", fontWeight: "bold" }}
                >
                    Add New Room
                </h4>

                {message && (
                    <div
                        className={`alert text-center ${message.includes("✅") ? "alert-success" : "alert-danger"
                            }`}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-2">
                    <div className="mb-3">
                        <label className="form-label fw-bold">Room Image</label>
                        <input
                            type="file"
                            className="form-control"
                            name="rimage"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Room Type</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rtype"
                            value={form.rtype}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Price per Night</label>
                        <input
                            type="number"
                            className="form-control"
                            name="rprice"
                            value={form.rprice}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Description</label>
                        <textarea
                            className="form-control"
                            name="rdesc"
                            value={form.rdesc}
                            onChange={handleChange}
                            rows="3"
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Total Rooms</label>
                        <input
                            type="number"
                            className="form-control"
                            name="rtotal"
                            value={form.rtotal}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Available Rooms</label>
                        <input
                            type="number"
                            className="form-control"
                            name="ravailable"
                            value={form.ravailable}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Adults</label>
                        <input
                            type="number"
                            className="form-control"
                            name="radults"
                            min="1"
                            max="3"
                            value={form.radults}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Bed Size</label>
                        <input
                            type="text"
                            className="form-control"
                            name="rbedsize"
                            value={form.rbedsize}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Select options */}
                    {["rtv", "rwifi", "rheater", "rphone", "rlaundry"].map((field) => (
                        <div className="mb-3" key={field}>
                            <label className="form-label fw-bold">
                                {field.replace("r", "").toUpperCase()}
                            </label>
                            <select
                                className="form-control"
                                name={field}
                                value={form[field]}
                                onChange={handleChange}
                            >
                                <option value="">Select</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="btn w-100"
                        style={{
                            backgroundColor: "#0A1D56",
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: "12px",
                        }}
                    >
                        ➕ Add Room
                    </button>
                </form>
            </div>
        </div>
    );
}

export default AddRoom;
