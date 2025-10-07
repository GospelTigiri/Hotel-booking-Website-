import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomById } from "../../api";
import stars from "./../../assets/stars.png";
import RoomAvailabilityForm from "./RoomAvailabilityForm";

const RoomsDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const data = await getRoomById(id);
                setRoom(data);
            } catch (err) {
                console.error("Failed to fetch room:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchRoom();
    }, [id]);

    if (loading) return <div className="text-center my-5">Loading...</div>;
    if (!room) return <div className="text-center my-5">Room not found</div>;

    return (
        <div className="container py-5">
            <div className="row gy-5 align-items-start">
                {/* Room Info */}
                <div className="col-lg-7">
                    <img
                        src={room.imageUrl || "/default-room.png"}
                        alt={room.name}
                        className="img-fluid w-100 mb-3 rounded"
                    />

                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <h2 className="fw-bold">{room.name}</h2>
                            <p className="text-muted">₦{room.price} / Night</p>
                        </div>
                        <img src={stars} alt="rating" style={{ height: "24px" }} />
                    </div>

                    <p>{room.description || "No description available."}</p>
                </div>

                {/* Availability Form */}
                <div className="col-lg-5">
                    <div className="p-4 shadow bg-light rounded">
                        <h3 className="text-center mb-4">Check Room Availability</h3>
                        <RoomAvailabilityForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomsDetails;
