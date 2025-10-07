import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RoomAvailabilityForm() {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState('');
    const [status, setStatus] = useState(null);
    const [availability, setAvailability] = useState(null);
    const [numRooms, setNumRooms] = useState(1);
    const [roomList, setRoomList] = useState([]);

    // Get today's date in yyyy-mm-dd format
    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        axios.get('http://localhost/randolphhotels/fetchrooms.php?t=1')
            .then(response => {
                setRoomList(response.data);
            })
            .catch(err => console.error("Error fetching rooms:", err));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!checkIn || !checkOut || !roomType) {
            setStatus('⚠️ Please fill in all fields.');
            return;
        }

        // Extra validation
        if (checkIn < today) {
            setStatus("❌ Check-In date cannot be in the past.");
            return;
        }

        if (checkOut < checkIn) {
            setStatus("❌ Check-Out date cannot be earlier than Check-In date.");
            return;
        }

        axios.post('http://localhost/randolphhotels/roomavailability.php', {
            checkIn,
            checkOut,
            roomType,
            numRooms
        }).then(res => {
            setAvailability(res.data.status); // raw backend value
            if (res.data.status === 'Available') {
                setStatus('✅ ' + res.data.status);
            } else if (res.data.status === 'Limited rooms available for this room type.') {
                setStatus('⚠️ ' + res.data.status);
            } else if (res.data.status === 'Not Available. Please try another room type.') {
                setStatus('❌ ' + res.data.status);
            } else {
                setStatus('❌ ' + res.data.message);
            }

            setTimeout(() => {
                setStatus('');
            }, 4000);
        })
            .catch(err => {
                console.error(err);
                setStatus('❌ Error checking availability');
            });
    };

    const handleBookNow = () => {
        window.location.href = `/payment?roomType=${roomType}&checkIn=${checkIn}&checkOut=${checkOut}&numRooms=${numRooms}`;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row mb-2 mt-2">
                <div className="col-md-6 mb-3">
                    <label className='form-label d-flex align-items-center'>
                        <i className="bi bi-calendar me-2 text-warning"></i>
                        Check-In Date
                    </label>
                    <input
                        type="date"
                        className='form-control p-3'
                        value={checkIn}
                        min={today}   // 🚫 prevents past dates
                        onChange={(e) => setCheckIn(e.target.value)}
                    />
                </div>

                <div className="col-md-6 mb-3">
                    <label className='form-label d-flex align-items-center'>
                        <i className="bi bi-calendar2-check me-2 text-warning"></i>
                        Check-Out Date
                    </label>
                    <input
                        type="date"
                        className='form-control p-3'
                        value={checkOut}
                        min={checkIn || today}   // 🚫 checkout must be today or after checkin
                        onChange={(e) => setCheckOut(e.target.value)}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-2">
                    <label className='form-label d-flex align-items-center'>
                        <i className="bi bi-people-fill me-2 text-warning"></i>
                        No. of Rooms
                    </label>
                    <input
                        type="number"
                        className="form-control p-3"
                        value={numRooms}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (/^\d*$/.test(value) && (value === "" || (Number(value) >= 1 && Number(value) <= 52))) {
                                setNumRooms(value);
                            }
                        }}
                        onBlur={() => {
                            if (numRooms === "" || numRooms === null || Number(numRooms) < 1) {
                                setNumRooms(1);
                            } else if (Number(numRooms) > 52) {
                                setNumRooms(52);
                            }
                        }}
                        placeholder="No. of Rooms"
                    />
                </div>

                <div className="col-md-6">
                    <label className='form-label d-flex align-items-center'>
                        <i className="bi bi-door-closed-fill me-2 text-warning"></i>
                        Room Type
                    </label>
                    <select
                        className='form-select p-3'
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                    >
                        <option value="">Room Type</option>
                        {roomList.map(room => (
                            <option key={room.id} value={room.rtype}>{room.rtype}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="row mt-2">
                {/* Check Availability */}
                <div className="col-md-6 mb-2">
                    <button
                        type='submit'
                        className="btn btn-appointment text-white px-4 py-2 w-100"
                    >
                        ROOM CHECK
                    </button>
                </div>

                {/* Book Now */}
                <div className="col-md-6 mb-2">
                    <button
                        type="button"
                        className="btn btn-primary text-white px-4 py-2 w-100"
                        onClick={handleBookNow}
                        disabled={!(availability === 'Available' || availability === 'Limited rooms available for this room type.')}
                    >
                        BOOK NOW
                    </button>
                </div>

            </div>

            {status && (
                <div className="alert mt-3 p-3 text-center"
                    style={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: '5px',
                        fontWeight: 'bold'
                    }}
                >
                    {status}
                </div>
            )}
        </form>
    );
}

export default RoomAvailabilityForm;
