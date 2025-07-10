import React from "react";
import "./RoomCard.css"; // Link to its specific CSS file

const RoomCard = ({ room, onViewDetails }) => {
  return (
    <div className="room-card">
      <div className="room-card-image-container">
        <img
          src={room.previewImage}
          alt={room.name}
          className="room-card-image"
        />
      </div>
      <div className="room-card-content">
        <h3 className="room-card-name">{room.name}</h3>
        {/* Displaying price in ETB, based on Bahir Dar location */}
        <p className="room-card-price">Starting from ${room.price} / night</p>
        <ul className="room-card-amenities-preview">
          {room.amenitiesPreview.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
        <button
          onClick={() => onViewDetails(room)} // Calls the function passed from parent
          className="room-card-details-button"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
