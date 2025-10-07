import React, { useEffect, useMemo, useState, useRef } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    PieChart, Pie, Cell
} from "recharts";
import { getRooms, getBookings } from "../../api";

const BRAND = {
    primary: "#0A1D56",  // Randolph deep blue
    info: "#17A2B8",
    success: "#28A745",
    light: "#f8f9fa",
};

const COLORS = [BRAND.primary, BRAND.info, BRAND.success];

export default function DashboardOverview() {
    const [rooms, setRooms] = useState([]);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState("");
    const pollRef = useRef(null);

    // === LIVE FETCH ===
    const fetchAll = async () => {
        try {
            setErr("");
            const [rRes, bRes] = await Promise.all([getRooms(), getBookings()]);
            setRooms(Array.isArray(rRes.data) ? rRes.data : []);
            setBookings(Array.isArray(bRes.data) ? bRes.data : []);
        } catch (e) {
            setErr("Failed to load dashboard data.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAll();
        pollRef.current = setInterval(fetchAll, 30000);
        return () => clearInterval(pollRef.current);
    }, []);

    // === DERIVED METRICS ===
    const now = new Date();
    const totalRooms = rooms.length;
    const totalBookings = bookings.length;

    // Occupancy
    const occupiedRoomIds = new Set(
        bookings
            .filter(b => {
                const ci = b?.checkIn ? new Date(b.checkIn) : null;
                const co = b?.checkOut ? new Date(b.checkOut) : null;
                return ci && co && ci <= now && now < co;
            })
            .map(b => b.roomId)
    );
    const occupancyRate = totalRooms
        ? ((occupiedRoomIds.size / totalRooms) * 100).toFixed(1)
        : "0.0";

    // Upcoming bookings (shortened, max 5)
    const upcoming = useMemo(() => {
        return bookings
            .filter(b => {
                const ci = b?.checkIn ? new Date(b.checkIn) : null;
                return ci && ci >= now;
            })
            .sort((a, b) => new Date(a.checkIn) - new Date(b.checkIn))
            .slice(0, 5);
    }, [bookings]);

    // Booking Trends
    const bookingTrends = useMemo(() => {
        const map = new Map();
        bookings.forEach(b => {
            if (!b?.checkIn) return;
            const key = new Date(b.checkIn).toLocaleDateString();
            map.set(key, (map.get(key) || 0) + 1);
        });
        return Array.from(map, ([date, count]) => ({ date, count }));
    }, [bookings]);

    // Breakdown by room type
    const bookingByType = useMemo(() => {
        const map = new Map();
        bookings.forEach(b => {
            const type = b?.roomType || "Unknown";
            map.set(type, (map.get(type) || 0) + 1);
        });
        return Array.from(map, ([type, count]) => ({ type, count }));
    }, [bookings]);

    if (loading) {
        return <div className="container py-5 text-center">Loading dashboard…</div>;
    }

    return (
        <div className="container py-4">
            <h2 className="mb-4 text-center" style={{ color: BRAND.primary, fontWeight: "bold" }}>
                Admin Analytics Dashboard
            </h2>

            {err && <div className="alert alert-danger">{err}</div>}

            {/* KPI Row */}
            <div className="row g-4 justify-content-center">
                <div className="col-md-4">
                    <div className="p-4 rounded text-white shadow text-center" style={{ background: BRAND.primary }}>
                        <h6>Total Bookings</h6>
                        <h2>{totalBookings}</h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 rounded text-white shadow text-center" style={{ background: BRAND.info }}>
                        <h6>Total Rooms</h6>
                        <h2>{totalRooms}</h2>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="p-4 rounded text-white shadow text-center" style={{ background: BRAND.success }}>
                        <h6>Occupancy</h6>
                        <h2>{occupancyRate}%</h2>
                    </div>
                </div>
            </div>

            {/* Charts Row */}
            <div className="row mt-5 g-4">
                <div className="col-lg-6">
                    <div className="p-3 rounded shadow">
                        <h6 className="text-center mb-2" style={{ color: BRAND.primary }}>Booking Trends</h6>
                        <ResponsiveContainer width="100%" height={280}>
                            <LineChart data={bookingTrends}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="date" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Line type="monotone" dataKey="count" stroke={BRAND.primary} strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="p-3 rounded shadow">
                        <h6 className="text-center mb-2" style={{ color: BRAND.primary }}>Bookings by Room Type</h6>
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie data={bookingByType} dataKey="count" nameKey="type" outerRadius={100} label>
                                    {bookingByType.map((_, i) => (
                                        <Cell key={i} fill={COLORS[i % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Upcoming Bookings */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="p-3 rounded shadow">
                        <h6 className="mb-3" style={{ color: BRAND.primary }}>Upcoming Bookings</h6>
                        <ul className="list-group list-group-flush">
                            {upcoming.length === 0 && (
                                <li className="list-group-item text-center text-muted">
                                    No upcoming bookings
                                </li>
                            )}
                            {upcoming.map((b) => (
                                <li key={b.id} className="list-group-item d-flex justify-content-between align-items-center small">
                                    <div>
                                        <strong>{b.guestName || "Guest"}</strong> • {b.roomType || "Type"}
                                        <div className="text-muted">
                                            {b.checkIn ? new Date(b.checkIn).toDateString() : "—"}
                                        </div>
                                    </div>
                                    <span className="badge rounded-pill bg-light text-dark shadow-sm">
                                        ₦{(Number(b.price) || 0).toLocaleString()}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
