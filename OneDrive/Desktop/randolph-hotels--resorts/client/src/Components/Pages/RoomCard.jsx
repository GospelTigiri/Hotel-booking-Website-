const RoomCard = ({ room }) => {
    return (
        <div className="room-card">
            <img src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.price}</p>
        </div>
    );
};

export default RoomCard;
