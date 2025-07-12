import React from "react";
import { Link } from "react-scroll"; // Assuming you have react-scroll for smooth scrolling to Contact
import "./GalleryCTA.css";

const GalleryCTA = ({ id }) => {
  return (
    <section className="gallery-cta-section" id={id}>
      <div className="gallery-cta-container">
        <h2 className="gallery-cta-headline">
          Ready to experience LodgeLink Bahir Dar?
        </h2>
        <p className="gallery-cta-subheadline">
          See yourself relaxing in our comfortable rooms and enjoying our
          amenities. Let's plan your stay.
        </p>
        <div className="gallery-cta-buttons">
          {/* Link to your Contact section using react-scroll */}
          <Link
            to="final-call-to-action" // Ensure your Contact/Booking section has this ID
            smooth={true}
            duration={500}
            className="gallery-cta-button primary"
          >
            Book Your Stay
          </Link>
          {/* Optional: Link to WhatsApp for direct inquiries */}
          <a
            href="https://wa.me/YOUR_ETHIOPIAN_WHATSAPP_NUMBER" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-cta-button secondary"
          >
            Contact via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryCTA;
