// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="header-logo" onClick={closeMenu}>
          LodgeLink
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav className={`header-nav ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link to="/rooms" className="nav-link" onClick={closeMenu}>Rooms</Link>
          <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          <Link to="/gallery" className="nav-link" onClick={closeMenu}>Gallery</Link>
          <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact</Link>
        </nav>

        {/* CTA Buttons */}
        <div className="header-cta">
          <a
            href="https://wa.me/251910059801"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
          <Link to="/contact" className="book-now-button" onClick={closeMenu}>
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
