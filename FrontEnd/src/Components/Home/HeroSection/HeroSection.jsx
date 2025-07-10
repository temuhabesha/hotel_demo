import React from "react";
import { Link } from "react-scroll"; // Import Link for smooth scrolling
import "./HeroSection.css"; // Link to your CSS file
import backgroundVideo from "../../../assets/Video/Hotel_video.mp4";

const HeroSection = () => {

  return (
    // The main section container with the ID for navigation
    <section id="hero" className="hero-section">
      <video className="hero-background-video" autoPlay loop muted playsInline>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for text readability */}
      <div className="hero-overlay"></div>

      {/* Content Container */}
      <div className="hero-content">
        <h1 className="hero-heading">
          Your Comfort Starts at LodgeLink Bahir Dar
        </h1>
        <p className="hero-subheading">
          Affordable, Clean, and Peaceful Stay Near Lake Tana.
        </p>

        {/* Call to Action Button */}
        <Link
          to="rooms" // Scrolls to the section with id="rooms"
          smooth={true}
          duration={500}
          className="hero-cta-button"
        >
          Check Availability
        </Link>
        {/* If you implement a modal for booking, you would do something like:
        <button className="hero-cta-button" onClick={onOpenBookingModal}>Book Now</button>
        And onOpenBookingModal would be a prop passed from a parent component.
        */}
      </div>
    </section>
  );
};

export default HeroSection;
