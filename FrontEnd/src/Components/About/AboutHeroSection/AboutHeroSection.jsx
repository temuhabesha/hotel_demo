import React from "react";
import "./AboutHeroSection.css"; // Link to its specific CSS
import backgroundImage from '../../../assets/Image/exteror.jpg'

const AboutHeroSection = () => {
  // Use a warm, inviting image that represents your hotel's ambiance or location.
  // Replace this URL with an actual high-quality image of LodgeLink
  // Example: a cozy hotel lobby, an inviting room interior, or a sunset view over Lake Tana.

  return (
    <section
      className="about-hero-section"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
    >
      <div className="about-hero-overlay"></div>{" "}
      {/* Dark overlay for text readability */}
      <div className="about-hero-content">
        <h1 className="about-hero-headline">
          Welcome to LodgeLink Bahir Dar – Your Home Away from Home
        </h1>
        <p className="about-hero-subheadline">
          Experience authentic Ethiopian hospitality, comfort, and relaxation in
          the heart of Bahir Dar.
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;
