import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BRAND = { primary: "#0A1D56" };

export default function EditRoom() {
    const { id } = useParams(); // room ID from URL
    const navigate = useNavigate();

    const [form, setForm] = useState({
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

    const [preview, setPreview] = useState(""); // preview uploaded/current image
    const [message, setMessage] = useState("");

    // fetch current room details
    useEffect(() => {
        axios
            .get(`http://localhost/randolphhotels/getroom.php?id=${id}`)
            .then((res) => {
                setForm(res.data);
                if (res.data.rimage) {
                    setPreview(`http://localhost/randolphhotels/uploads/${res.data.rimage}`);
                }
            })
            .catch((err) => console.error("Error fetching room:", err));
    }, [id]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, rimage: file });
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            for (const key in form) {
                formData.append(key, form[key]);
            }
            formData.append("id", id);

            const res = await axios.post(
                "http://localhost/randolphhotels/updateroom.php",
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );

            if (res.data.success) {
                setMessage("✅ Room updated successfully!");
                setTimeout(() => navigate("/admin/rooms"), 1200);
            } else {
                setMessage("❌ Update failed: " + res.data.message);
            }
        } catch (err) {
            console.error("Error updating room:", err);
            setMessage("❌ Error while updating room.");
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-start bg-light"
            style={{ minHeight: "100vh", paddingTop: "40px" }}
        >
            <div className="card shadow-lg p-4" style={{ borderRadius: "18px", width: "600px" }}>
                <h4 className="text-center mb-3" style={{ color: BRAND.primary, fontWeight: "bold" }}>
                    Edit Room
                </h4>

                {message && (
                    <div
                        className={`alert text-center ${message.includes("✅") ? "alert-success" : "alert-danger"
                            }`}
                    >
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* Image */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Room Image</label>
                        {preview && (
                            <div className="mb-2">
                                <img
                                    src={preview}
                                    alt="Preview"
                                    style={{ width: "100px", borderRadius: "8px" }}
                                />
                            </div>
                        )}
                        <input type="file" className="form-control" name="rimage" onChange={handleFileChange} />
                    </div>

                    {/* Other fields */}
                    {[
                        { name: "rtype", label: "Room Type", type: "text" },
                        { name: "rprice", label: "Price per Night", type: "number" },
                        { name: "rdesc", label: "Description", type: "textarea" },
                        { name: "rtotal", label: "Total Rooms", type: "number" },
                        { name: "ravailable", label: "Available Rooms", type: "number" },
                        { name: "radults", label: "Adults", type: "number" },
                        { name: "rbedsize", label: "Bed Size", type: "text" },
                    ].map((field) => (
                        <div className="mb-3" key={field.name}>
                            <label className="form-label fw-bold">{field.label}</label>
                            {field.type === "textarea" ? (
                                <textarea
                                    className="form-control"
                                    name={field.name}
                                    value={form[field.name] || ""}
                                    onChange={handleChange}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    className="form-control"
                                    name={field.name}
                                    value={form[field.name] || ""}
                                    onChange={handleChange}
                                />
                            )}
                        </div>
                    ))}

                    {/* Yes/No fields */}
                    {["rtv", "rwifi", "rheater", "rphone", "rlaundry"].map((field) => (
                        <div className="mb-3" key={field}>
                            <label className="form-label fw-bold">
                                {field.replace("r", "").toUpperCase()}
                            </label>
                            <select
                                className="form-control"
                                name={field}
                                value={form[field] || ""}
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
                            backgroundColor: BRAND.primary,
                            color: "white",
                            fontWeight: "bold",
                            borderRadius: "12px",
                        }}
                    >
                        💾 Update Room
                    </button>
                </form>
            </div>
        </div>
    );
}
