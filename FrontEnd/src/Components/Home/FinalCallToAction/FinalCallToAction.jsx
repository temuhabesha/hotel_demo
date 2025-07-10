import React from "react";
import { Link } from "react-scroll"; // For smooth scrolling
import "./FinalCallToAction.css"; // Link to your CSS file

const FinalCallToAction = () => {
  // Replace with actual contact details for LodgeLink Bahir Dar
  const whatsappNumber = "+2519xxxxxxxx"; // Your hotel's WhatsApp number
  const phoneNumber = "+25158xxxxxxxx"; // Your hotel's phone number

  return (
    // Section container with optional ID for navigation
    <section id="final-cta" className="final-cta-section">
      <div className="final-cta-container">
        {/* Bold Call to Action Text */}
        <h2 className="final-cta-heading">
          Book your room now and enjoy the best stay in Bahir Dar.
        </h2>

        {/* Key Action Buttons */}
        <div className="cta-buttons">
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber.replace(/\+/g, "")}`} // WhatsApp link format
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button whatsapp-cta-button"
            aria-label="Chat with us on WhatsApp"
          >
            WhatsApp Us
          </a>

          {/* Phone Number Button */}
          <a
            href={`tel:${phoneNumber}`}
            className="cta-button phone-cta-button"
            aria-label="Call us"
          >
            Call {phoneNumber}
          </a>

          {/* Primary Booking Button - Scrolls to the Contact/Booking section */}
          <Link
            to="contact" // Scrolls to the section with id="contact" (where your form/modal trigger is)
            smooth={true}
            duration={500}
            className="cta-button book-now-cta-button"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCallToAction;
