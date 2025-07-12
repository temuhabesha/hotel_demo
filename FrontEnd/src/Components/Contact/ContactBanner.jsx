import React from "react";
import "./ContactBanner.css"; // Link to its specific CSS file
import backgroundImage from '../../assets/Image/gallary11.jpg'

const ContactBanner = () => {
  // Use a calming, high-quality image.
  // This could be a blurred image of a reception desk, a friendly staff member,
  // or a serene hotel interior that conveys welcome and professionalism.
  // Replace this URL with an actual image path from your project or a CDN.
  
  // Example: A person talking on a headset, or a clean, inviting desk.

  return (
    <section
      className="contact-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="contact-banner-overlay"></div>{" "}
      {/* For text readability */}
      <div className="contact-banner-content">
        <h1 className="contact-banner-headline">Contact Us</h1>
        <p className="contact-banner-subheadline">
          We’re here to help – reach out anytime.
        </p>
      </div>
    </section>
  );
};

export default ContactBanner;
