import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Demo credentials
        if (username === "admin" && password === "1234") {
            localStorage.setItem("adminToken", "true");
            navigate("/dashboard");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div
                className="card shadow p-4 text-center"
                style={{ width: "380px", borderRadius: "12px" }}
            >
                {/* Logo / Brand */}
                <div className="mb-4">
                    <img src="/logoIcon.jpg" alt="Randolph Hotels & Resorts" style={{ maxWidth: "120px" }} />
                    <h2 className="fw-bold text-primary">Randolph Hotels</h2>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
