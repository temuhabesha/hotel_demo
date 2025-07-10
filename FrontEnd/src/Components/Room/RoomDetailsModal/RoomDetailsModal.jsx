import React, { useState } from "react";
import { Link } from "react-scroll"; // Assuming you have react-scroll for smooth scrolling to CTA
import "./RoomDetailsModal.css"; // Link to its specific CSS file

const RoomDetailsModal = ({ room, onClose }) => {
  // State to manage the current image displayed in the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to navigate to the next image in the gallery
  const goToNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % room.galleryImages.length
    );
  };

  // Function to navigate to the previous image in the gallery
  const goToPreviousImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + room.galleryImages.length) % room.galleryImages.length
    );
  };

  // If no room data is provided (e.g., due to an error), don't render the modal
  if (!room) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Prevent clicks inside the modal content from closing the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close button for the modal */}
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>

        <h2 className="modal-room-name">{room.name}</h2>

        {/* Image Carousel/Gallery */}
        <div className="modal-image-carousel">
          <img
            src={room.galleryImages[currentImageIndex]}
            alt={room.name}
            className="carousel-main-image"
          />
          {/* Only show navigation buttons and thumbnails if there's more than one image */}
          {room.galleryImages.length > 1 && (
            <>
              <button
                className="carousel-nav-button prev"
                onClick={goToPreviousImage}
              >
                &#10094;
              </button>
              <button
                className="carousel-nav-button next"
                onClick={goToNextImage}
              >
                &#10095;
              </button>
              {/* Thumbnail navigation for quick image selection */}
              <div className="carousel-thumbnails">
                {room.galleryImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${room.name} thumbnail ${index + 1}`}
                    className={`thumbnail-image ${
                      index === currentImageIndex ? "active" : ""
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Room Details: Description and Amenities */}
        <div className="modal-details-grid">
          <div className="modal-description">
            <h3>Description</h3>
            <p>{room.description}</p>
          </div>

          <div className="modal-amenities">
            <h3>Room Features</h3>
            <ul>
              <li>
                <strong>Price:</strong> ${room.price} / night
              </li>
              <li>
                <strong>Occupancy:</strong> {room.occupancy}
              </li>
              <li>
                <strong>Bed Type:</strong> {room.bedType}
              </li>
              <li>
                <strong>Size:</strong> {room.size}
              </li>
              {/* Map through all detailed amenities */}
              {room.fullAmenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optional: Room-specific Policies */}
        {room.policies && (
          <div className="modal-policies">
            <h3>Policies</h3>
            <p>{room.policies}</p>
          </div>
        )}

        {/* Call to Action Button */}
        <div className="modal-cta">
          <Link
            to="final-call-to-action" // Target the ID of your FinalCallToAction section
            smooth={true}
            duration={500}
            onClick={onClose} // Close modal after clicking "Book Now"
            className="modal-book-button"
          >
            Book Now for ${room.price}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsModal;
