import React from "react";
import { Link } from "react-scroll"; // For smooth scrolling navigation
import "./Footer.css"; // Link to your CSS file

const Footer = () => {
  // Quick Links data
  const quickLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" }, // This links to the "Why Choose Us" section
    { name: "Rooms", to: "rooms" },
    { name: "Gallery", to: "gallery" },
    { name: "Contact", to: "contact" },
  ];

  // Social Media Links (replace URLs with your actual social media profiles)
  const socialLinks = [
    {
      name: "Facebook",
      icon: "Meta",
      url: "https://www.facebook.com/lodgelinkbahirdar",
    },
    {
      name: "Instagram",
      icon: "Insta",
      url: "https://www.instagram.com/lodgelinkbahirdar",
    },
    {
      name: "TikTok",
      icon: "TikTok",
      url: "https://www.tiktok.com/@lodgelinkbahirdar",
    },
    // Add more if needed, e.g., Twitter, LinkedIn, etc.
  ];

  // Abbreviated Contact Info (can be same as ContactSection or simplified)
  const hotelPhoneNumber = "+251 58 220 1234";
  const hotelEmail = "info@lodgelinkbahirdar.com";
  const hotelAddress = "Near Lake Tana, Bahir Dar, Ethiopia";

  // Get current year dynamically (or set to 2025 as specified)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Footer Grid */}
        <div className="footer-grid">
          {/* LodgeLink Branding/Brief */}
          <div className="footer-col footer-about">
            <h3 className="footer-heading">LodgeLink Bahir Dar</h3>
            <p className="footer-description">
              Your comfortable and affordable gateway to the beauty of Lake Tana
              and Ethiopian hospitality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col footer-quick-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="footer-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col footer-contact-info">
            <h3 className="footer-heading">Contact Us</h3>
            <p>
              <a
                href={`tel:${hotelPhoneNumber.replace(/\s/g, "")}`}
                className="footer-contact-link"
              >
                Phone: {hotelPhoneNumber}
              </a>
            </p>
            <p>
              <a href={`mailto:${hotelEmail}`} className="footer-contact-link">
                Email: {hotelEmail}
              </a>
            </p>
            <p className="footer-address">Address: {hotelAddress}</p>
          </div>

          {/* Social Icons */}
          <div className="footer-col footer-social">
            <h3 className="footer-heading">Connect With Us</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit us on ${social.name}`}
                  className="social-icon"
                >
                  {/* For actual icons, you would use a Font Awesome, SVG, or image */}
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Information */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {currentYear} LodgeLink. All rights reserved. Powered by{" "}
            <a
              href="https://www.nilehorn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nilehorn-link"
            >
              NILEHORN Software Solutions
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
