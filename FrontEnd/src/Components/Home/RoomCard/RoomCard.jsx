import React from "react";
import { Link } from "react-scroll"; // For smooth scrolling the button
import "./RoomCard.css"; // Link to its specific CSS

const RoomCard = ({ imageUrl, title, features, price }) => {
  return (
    <div className="room-card">
      <div className="room-card-image-container">
        <img src={imageUrl} alt={title} className="room-card-image" />
      </div>
      <div className="room-card-content">
        <h3 className="room-card-title">{title}</h3>
        <ul className="room-card-features">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <p className="room-card-price">{price}</p>

        {/* Book Now Button for individual room */}
        <Link
          to="contact" // Scrolls to the Contact section (assumed to have booking form/details)
          smooth={true}
          duration={500}
          className="room-card-button"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default RoomCard;
