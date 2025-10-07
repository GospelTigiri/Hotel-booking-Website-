import React, { useEffect, useState } from "react";
import { getRooms, deleteRoom } from "../../api";
import { Link } from "react-router-dom";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

const BRAND = {
    primary: "#0A1D56", // Hotel Blue
};

export default function RoomsManagement() {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchRooms = async () => {
        try {
            setLoading(true);
            const res = await getRooms();
            setRooms(res.data);
            setError("");
        } catch (err) {
            console.error("Failed to load rooms:", err);
            setError("❌ Failed to load rooms. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRooms();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this room?")) return;
        try {
            await deleteRoom(id);
            fetchRooms(); // refresh after delete
        } catch (err) {
            console.error("Failed to delete room:", err);
        }
    };

    if (loading) return <p className="text-center">Loading rooms...</p>;

    return (
        <div className="container py-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 style={{ color: BRAND.primary }}>Rooms Management</h2>

                {/* Add Room button with Hotel Blue */}
                <Link
                    to="/dashboard/admin/add-room"
                    className="btn d-flex align-items-center text-white"
                    style={{ backgroundColor: BRAND.primary }}
                >
                    <PlusCircle className="me-2" size={18} /> Add Room
                </Link>
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <table className="table table-hover shadow-sm rounded">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Room Type</th>
                        <th>Price (₦)</th>
                        <th>Total Rooms</th>
                        <th>Available</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.length > 0 ? (
                        rooms.map((room) => (
                            <tr key={room.id}>
                                <td>{room.id}</td>
                                <td>{room.rtype}</td>
                                <td>₦{Number(room.rprice).toLocaleString()}</td>
                                <td>{room.rtotal}</td>
                                <td>{room.ravailable}</td>
                                <td>
                                    {/* Edit button */}
                                    <Link
                                        to={`/dashboard/admin/edit-room/${room.id}`}
                                        className="btn btn-sm text-white me-2"
                                        style={{ backgroundColor: BRAND.primary }}
                                    >
                                        <Pencil size={16} />
                                    </Link>

                                    {/* Delete button */}
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => handleDelete(room.id)}
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="text-center">
                                No rooms found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
} 