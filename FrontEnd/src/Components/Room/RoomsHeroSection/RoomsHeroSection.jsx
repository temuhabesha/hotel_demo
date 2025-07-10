import React from "react";
import "./RoomsHeroSection.css"; // Link to its specific CSS file
import backgroundImage from '../../../assets/Image/gallary5.jpg'
const RoomsHeroSection = () => {
  // Use a wide, inviting image that truly represents the quality and comfort of LodgeLink's rooms.
  // Replace this URL with an actual high-quality, professional photo of your best room or a collage.
  
  // Example: A cozy bed in a well-lit room, a suite interior, or a feature shot of room amenities.

  return (
    <section
      className="rooms-hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Dynamically apply background image
    >
      <div className="rooms-hero-overlay"></div>{" "}
      {/* Dark overlay for text readability */}
      <div className="rooms-hero-content">
        <h1 className="rooms-hero-headline">Discover Your Perfect Retreat</h1>
        <p className="rooms-hero-subheadline">
          Explore LodgeLink Bahir Dar's comfortable and elegant accommodations,
          designed for your ultimate relaxation.
        </p>
      </div>
    </section>
  );
};

export default RoomsHeroSection;
