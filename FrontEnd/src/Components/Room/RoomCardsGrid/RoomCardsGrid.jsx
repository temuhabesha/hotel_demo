import React from "react";
import RoomCard from "../RoomCard/RoomCard"; // Import the individual card component
import "./RoomCardsGrid.css"; // Link to its specific CSS file

const RoomCardsGrid = ({ rooms, onViewDetails }) => {
  return (
    <section className="room-cards-section">
      <div className="room-cards-container">
        {/* Reusing section title style from other components for consistency */}
        <h2 className="section-title">Our Comfortable Rooms</h2>
        <div className="room-grid">
          {/* Map through the 'rooms' array and render a RoomCard for each */}
          {rooms.map((room) => (
            <RoomCard
              key={room.id} // Unique key for React list rendering
              room={room} // Pass the individual room data to RoomCard
              onViewDetails={onViewDetails} // Pass the function to open modal
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomCardsGrid;
