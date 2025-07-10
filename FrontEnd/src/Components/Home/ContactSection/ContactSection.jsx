import React, { useState } from "react";
import "./ContactSection.css"; // Link to your CSS file

const ContactSection = () => {
  // State for the contact form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, log the form data to the console.
    // In a real MERN app, you would send this to your backend API.
    console.log("Form submitted:", formData);

    // Reset form after submission (optional)
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    alert("Thank you for your inquiry! We will get back to you soon.");
  };

  // Replace with your actual hotel details
  const hotelAddress = "Near Lake Tana, Bahir Dar, Amhara, Ethiopia";
  const hotelPhoneNumber = "+251 58 220 1234";
  const hotelEmail = "info@lodgelinkbahirdar.com";

  // Google Maps Embed URL for LodgeLink Bahir Dar (replace with your exact coordinates or business link)
  // You can get this by going to Google Maps, searching for your location, clicking "Share", then "Embed a map".
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15654.75704152733!2d37.37526955!3d11.5976587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164627b001a1d13f%3A0x6b7b1b1b1b1b1b1b!2sBahir%20Dar%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1719293147570!5m2!1sen!2set";
  // The above URL is a placeholder for Bahir Dar city center. Replace it with your hotel's exact embed URL.

  return (
    // Section container with ID for smooth scrolling navigation
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Title */}
        <h2 className="section-title">Find Us & Contact Us</h2>

        <div className="contact-content-grid">
          {/* Left Side: Map and Contact Details */}
          <div className="contact-info">
            {/* Interactive Map */}
            <div className="map-container">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LodgeLink Bahir Dar Location"
              ></iframe>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              <h3>Get in Touch</h3>
              <p>
                <strong>Address:</strong> {hotelAddress}
              </p>
              <p>
                <strong>Phone:</strong>{" "}
                <a href={`tel:${hotelPhoneNumber.replace(/\s/g, "")}`}>
                  {hotelPhoneNumber}
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${hotelEmail}`}>{hotelEmail}</a>
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="contact-form-wrapper">
            <h3>Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
