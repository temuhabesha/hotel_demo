import React from "react";
import "./ContactDetails.css"; // Link to its specific CSS file

const ContactDetails = () => {
  // Replace with your actual LodgeLink Bahir Dar contact information
  const contactInfo = {
    phone: "+251912345678", // Example: Replace with actual Ethiopian number
    whatsapp: "251912345678", // WhatsApp number without +, just digits for wa.me link
    email: "info@lodgelinkbahirdar.com",
    address: "Kebele 0X, Near [Landmark], Bahir Dar, Ethiopia", // Replace with exact address
    operatingHours: "Reception: 24/7 | Restaurant: 7:00 AM - 10:00 PM", // Optional
  };

  return (
    <section className="contact-details-section">
      <div className="contact-details-container">
        <h2 className="section-heading">Get in Touch</h2>
        <p className="section-subheading">
          We're always happy to assist you. Find the best way to connect with
          LodgeLink Bahir Dar below.
        </p>

        <div className="details-grid">
          <div className="detail-item">
            <span className="detail-icon">📞</span>
            <div className="detail-content">
              <h3>Phone Number</h3>
              <a href={`tel:${contactInfo.phone}`} className="detail-link">
                {contactInfo.phone}
              </a>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">📱</span>
            <div className="detail-content">
              <h3>WhatsApp</h3>
              <a
                href={`https://wa.me/${contactInfo.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">📧</span>
            <div className="detail-content">
              <h3>Email Address</h3>
              <a href={`mailto:${contactInfo.email}`} className="detail-link">
                {contactInfo.email}
              </a>
            </div>
          </div>

          <div className="detail-item">
            <span className="detail-icon">📍</span>
            <div className="detail-content">
              <h3>Our Location</h3>
              <address className="detail-address">
                {contactInfo.address}
              </address>
              {/* This link will be replaced by GoogleMapEmbed later, but useful for now */}
              <a
                href="https://maps.app.goo.gl/YOUR_Maps_LINK" // Replace with actual Google Maps link
                target="_blank"
                rel="noopener noreferrer"
                className="detail-link map-link"
              >
                View on Map
              </a>
            </div>
          </div>

          {contactInfo.operatingHours && (
            <div className="detail-item full-width">
              {" "}
              {/* Occupy full width for hours */}
              <span className="detail-icon">⏰</span>
              <div className="detail-content">
                <h3>Operating Hours</h3>
                <p className="detail-text">{contactInfo.operatingHours}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
