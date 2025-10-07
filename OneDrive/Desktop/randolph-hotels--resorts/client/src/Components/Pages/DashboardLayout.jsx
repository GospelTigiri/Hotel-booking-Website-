import React, { useEffect, useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { getRooms, getBookings } from "../../api";
import logo from "../../assets/logoIcon.jpg"; // adjust path if needed
import { Menu, X, LayoutDashboard, BedDouble, BookOpen, LogOut } from "lucide-react";

const BRAND = {
    primary: "#0A1D56", // Hotel Blue
    light: "#f8f9fa",
};

function DashboardLayout() {
    const [rooms, setRooms] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const [roomsRes, bookingsRes] = await Promise.all([
                getRooms(),
                getBookings(),
            ]);
            setRooms(roomsRes.data);
            setBookings(bookingsRes.data);
        } catch (err) {
            setError("Failed to load dashboard data.");
        }
    };

    const handleLogout = () => {
        // clear any stored admin session/token if you’re using one
        // localStorage.removeItem("adminToken");  <-- example

        navigate("/"); // Redirect back to website home
    };

    return (
        <div className="bg-light" style={{ minHeight: "100vh" }}>
            {/* Fixed Header */}
            <div
                className="shadow-sm bg-white d-flex align-items-center justify-content-between px-4 py-3"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                }}
            >
                <div className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Randolph Hotels & Resorts"
                        style={{ maxWidth: "60px", marginRight: "12px" }}
                    />
                    <h4 className="m-0" style={{ color: BRAND.primary }}>
                        Admin Dashboard
                    </h4>
                </div>

                <div className="d-flex align-items-center gap-2">
                    {/* Toggle Menu Button */}
                    <button
                        className="btn text-white d-flex align-items-center gap-2"
                        onClick={() => setMenuOpen(true)}
                        style={{
                            borderRadius: "20px",
                            backgroundColor: BRAND.primary,
                        }}
                    >
                        <Menu size={20} /> Menu
                    </button>
                </div>
            </div>

            {/* Sidebar (Right) */}
            <div
                className={`position-fixed top-0 end-0 h-100 shadow-lg`}
                style={{
                    width: menuOpen ? "220px" : "0",
                    background: BRAND.primary,
                    overflowX: "hidden",
                    transition: "width 0.3s ease",
                    zIndex: 1100,
                }}
            >
                <div className="d-flex justify-content-between align-items-center p-3 border-bottom border-light">
                    <h6 className="text-white m-0">Navigation</h6>
                    <X
                        size={24}
                        className="text-white cursor-pointer"
                        onClick={() => setMenuOpen(false)}
                    />
                </div>
                <nav className="nav flex-column p-3">
                    <Link
                        to="/dashboard"
                        className={`nav-link py-3 text-center rounded ${location.pathname === "/dashboard"
                            ? "bg-white text-dark fw-bold border-start border-3 border-dark"
                            : "text-white"
                            }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <LayoutDashboard size={28} className="mb-1" />
                        <div>Overview</div>
                    </Link>

                    <Link
                        to="/dashboard/rooms"
                        className={`nav-link py-3 text-center rounded ${location.pathname === "/dashboard/rooms"
                            ? "bg-white text-dark fw-bold border-start border-3 border-dark"
                            : "text-white"
                            }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <BedDouble size={28} className="mb-1" />
                        <div>Manage Rooms</div>
                    </Link>

                    <Link
                        to="/dashboard/bookings"
                        className={`nav-link py-3 text-center rounded ${location.pathname === "/dashboard/bookings"
                            ? "bg-white text-dark fw-bold border-start border-3 border-dark"
                            : "text-white"
                            }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        <BookOpen size={28} className="mb-1" />
                        <div>Booking Management</div>
                    </Link>

                    {/* Log Out Button */}
                    <button
                        onClick={() => {
                            navigate("/"); // go back to website home
                        }}
                        className="btn mt-4 py-3 rounded text-center fw-bold text-white"
                        style={{ backgroundColor: "transparent", border: "none" }}
                    >
                        <LogOut size={24} className="mb-1" />
                        <div>Log Out</div>
                    </button>

                </nav>
            </div>

            {/* Content Area */}
            <div className="container" style={{ paddingTop: "100px" }}>
                {error && (
                    <div className="alert alert-danger text-center">{error}</div>
                )}

                {/* Child Pages */}
                <Outlet context={{ rooms, bookings }} />
            </div>
        </div>
    );
}

export default DashboardLayout;
