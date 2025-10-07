import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { assignRoom } from "../../api";

const BRAND = { primary: "#0A1D56" };

export default function Bookings() {
    const { rooms, bookings } = useOutletContext();
    const [message, setMessage] = useState("");

    const handleAssignRoom = async (bookingId, roomNumber) => {
        if (!roomNumber) return;
        try {
            await assignRoom({ bookingId, roomNumber });
            setMessage("✅ Room assigned successfully!");
            // Ideally refetch data, but since DashboardLayout loads rooms/bookings,
            // you could trigger reload there or force page reload:
            setTimeout(() => window.location.reload(), 1000);
        } catch (err) {
            console.error(err);
            setMessage("❌ Failed to assign room.");
        }
    };

    // Calculate stats
    const reservedCount = bookings.filter((b) => b.status === "reserved").length;
    const availableRooms = rooms.length - reservedCount;

    return (
        <div className="my-4">
            <h3 className="mb-3" style={{ color: BRAND.primary, fontWeight: "bold" }}>
                Booking Management
            </h3>

            {message && (
                <div
                    className={`alert ${message.includes("✅") ? "alert-success" : "alert-danger"
                        }`}
                >
                    {message}
                </div>
            )}

            {/* Stats Section */}
            <div className="mb-3 d-flex justify-content-between">
                <span className="fw-bold">Total Rooms: {rooms.length}</span>
                <span className="fw-bold text-danger">Reserved: {reservedCount}</span>
                <span className="fw-bold text-success">
                    Available: {availableRooms}
                </span>
            </div>

            {/* Bookings Table */}
            <table className="table table-bordered shadow-sm">
                <thead style={{ backgroundColor: BRAND.primary, color: "white" }}>
                    <tr>
                        <th>Guest</th>
                        <th>Check-In</th>
                        <th>Check-Out</th>
                        <th>Status</th>
                        <th>Assigned Room</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((b) => (
                            <tr key={b.id}>
                                <td>{b.name}</td>
                                <td>{b.checkIn}</td>
                                <td>{b.checkOut}</td>
                                <td>{b.status}</td>
                                <td>{b.roomNumber || "Not assigned"}</td>
                                <td>
                                    <select
                                        className="form-select"
                                        defaultValue={b.roomNumber || ""}
                                        onChange={(e) => handleAssignRoom(b.id, e.target.value)}
                                    >
                                        <option value="">-- Assign Room --</option>
                                        {rooms.map((r) => (
                                            <option key={r.id} value={r.number}>
                                                Room {r.number} ({r.type})
                                            </option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No bookings found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
