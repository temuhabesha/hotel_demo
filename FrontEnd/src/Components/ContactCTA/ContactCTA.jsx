import React from "react";
// If you are using react-router-dom for navigation between pages:
import { Link as RouterLink } from "react-router-dom";
// If you are using react-scroll for smooth scrolling within a single page (e.g., to a booking section on HomePage):
// import { Link as ScrollLink } from 'react-scroll';
import "./ContactCTA.css"; // Link to its specific CSS file

const ContactCTA = () => {
  // Replace with your actual LodgeLink Bahir Dar WhatsApp number (digits only)
  const whatsAppNumber = "251912345678"; // Example: Replace with actual Ethiopian number

  return (
    <section className="contact-cta-section">
      <div className="contact-cta-container">
        <h2 className="contact-cta-headline">Have more questions?</h2>
        <p className="contact-cta-subheadline">
          Our team is ready to assist you. Let's chat directly or explore
          booking options.
        </p>
        <div className="contact-cta-buttons">
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsAppNumber}?text=Hello%20LodgeLink%20Bahir%20Dar,%20I%20have%20a%20question...`}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-cta-button whatsapp-button"
          >
            Chat on WhatsApp
          </a>

          {/* Booking Page Button */}
          {/* Option 1: If you have a dedicated booking page route */}
          <RouterLink
            to="/booking"
            className="contact-cta-button booking-button"
          >
            Book Your Stay Now
          </RouterLink>

          {/* Option 2: If booking is a section on your homepage, use react-scroll */}
          {/* Make sure your target section on the homepage has id="booking-section" */}
          {/*
          <ScrollLink
            to="booking-section"
            smooth={true}
            duration={500}
            className="contact-cta-button booking-button"
          >
            Book Your Stay Now
          </ScrollLink>
          */}
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
