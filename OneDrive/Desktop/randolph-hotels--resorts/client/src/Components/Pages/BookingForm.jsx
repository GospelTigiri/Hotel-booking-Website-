import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BookingForm() {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [roomType, setRoomType] = useState('');
    const [numRooms, setNumRooms] = useState(1);
    const [roomList, setRoomList] = useState([]);

    const [status, setStatus] = useState(null);        // Display text
    const [availability, setAvailability] = useState(null); // Raw backend status

    useEffect(() => {
        axios.get('http://localhost/randolphhotels/fetchrooms.php?t=1')
            .then(response => {
                setRoomList(response.data);
            })
            .catch(err => console.error("Error fetching rooms:", err));
    }, []);

    const handleCheckAvailability = (e) => {
        e.preventDefault();

        if (!checkIn || !checkOut || !roomType) {
            setStatus('⚠️ Please fill in all fields.');
            setAvailability(null);
            return;
        }

        axios.post('http://localhost/randolphhotels/checkAvailability.php', {
            checkIn,
            checkOut,
            roomType,
            numRooms
        })
            .then(res => {
                const result = res.data.status; // e.g., "available", "limited", "not_available"
                setAvailability(result);

                if (result === 'available') {
                    setStatus('✅ Room Available');
                } else if (result === 'limited') {
                    setStatus('⚠️ Limited Availability');
                } else {
                    setStatus('❌ Not Available');
                }
            })
            .catch(err => {
                console.error(err);
                setStatus('Error checking availability');
                setAvailability(null);
            });
    };

    const handleBookNow = () => {
        window.location.href = `/payment?roomType=${roomType}&checkIn=${checkIn}&checkOut=${checkOut}&numRooms=${numRooms}`;
    };

    return (
        <form onSubmit={handleCheckAvailability}>
            {/* Dates */}
            <div className="row mb-3 mt-4">
                <div className="col-md-6 mb-3">
                    <label className='form-label d-flex align-items-center'>
                        <i className="bi bi-calendar me-2 text-warning"></i>
                        Check-In Date
                    </label>
                    <input
                        type="date"
                        className='form-control p-3'
                        value={checkIn}
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
                        onChange={(e) => setCheckOut(e.target.value)}
                    />
                </div>
            </div>

            {/* Room Count + Type */}
            <div className="row mb-3">
                <div className="col-md-6 mb-3">
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
                        <option value="">Select Room Type</option>
                        {roomList.map(room => (
                            <option key={room.id} value={room.rtype}>{room.rtype}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Buttons */}
            <div className="row mt-3">
                <div className="col-md-6 mb-2">
                    <button
                        type='submit'
                        className="btn btn-appointment text-white px-4 py-2 w-100"
                    >
                        Find Rooms
                    </button>
                </div>

                <div className="col-md-6 mb-2">
                    <button
                        type="button"
                        className="btn btn-success w-100"
                        onClick={handleBookNow}
                        disabled={!(availability === 'available' || availability === 'limited')}
                        title={!(availability === 'available' || availability === 'limited') ? "Check availability first" : ""}
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* Status Message */}
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

export default BookingForm;
