import axios from "axios";

const API_URL = "http://localhost/randolphhotels"; // ✅ base folder

// Rooms
export const getRooms = () => axios.get(`${API_URL}/fetchrooms.php`);
export const getRoomById = (id) => axios.get(`${API_URL}/getroom.php?id=${id}`);
export const addRoom = (room) => axios.post(`${API_URL}/addroom.php`, room);
export const updateRoom = (id, room) =>
    axios.post(`${API_URL}/updateroom.php?id=${id}`, room);
export const deleteRoom = (id) =>
    axios.post(`${API_URL}/deleteroom.php?id=${id}`);

// Bookings
export const getBookings = () => axios.get(`${API_URL}/fetchbookings.php`);
export const addBooking = (booking) =>
    axios.post(`${API_URL}/addbooking.php`, booking);
export const deleteBooking = (id) =>
    axios.post(`${API_URL}/deletebooking.php?id=${id}`);

// ✅ Assign a room to a booking
export const assignRoom = (bookingId, roomNumber) =>
    axios.post(`${API_URL}/assignroom.php`, {
        booking_id: bookingId,
        room_number: roomNumber,
    });
