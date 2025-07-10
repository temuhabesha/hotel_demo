import React from "react";
import { Link } from "react-scroll"; // For the "View Full Gallery" button
import "./GalleryPreviewSection.css"; // Link to your CSS file
import Gallary1 from '../../../assets/Image/loby.jpg'
import Gallary2 from '../../../assets/Image/gallary9.jpg'
import Gallary3 from '../../../assets/Image/dining.jpg'
import Gallary4 from '../../../assets/Image/poll.jpg'
import Gallary5 from '../../../assets/Image/interiorDetail.jpg'
import Gallary6 from "../../../assets/Image/gallary12.jpg";

const GalleryPreviewSection = () => {
  // Array of image URLs for the gallery preview
  // Replace these with actual high-quality images of LodgeLink Bahir Dar
  const galleryImages = [
    Gallary1,
    Gallary2,
    Gallary3,
    Gallary4,
    Gallary5,
    Gallary6,
  ];

  return (
    // Section container with ID for smooth scrolling navigation
    <section id="gallery" className="gallery-preview-section">
      <div className="gallery-preview-container">
        {/* Section Title */}
        <h2 className="section-title">A Glimpse of LodgeLink</h2>

        {/* Image Grid */}
        <div className="gallery-grid">
          {galleryImages.map((imageSrc, index) => (
            <div key={index} className="gallery-item">
              <img
                src={imageSrc}
                alt={`LodgeLink Gallery Image ${index + 1}`}
                className="gallery-image"
              />
              {/* Optional: Add an overlay or text on hover */}
              <div className="gallery-item-overlay"></div>
            </div>
          ))}
        </div>

        {/* Call to Action for full gallery (or booking, for a demo) */}
        <div className="gallery-cta">
          {/* This button encourages the user to interact further,
              scrolling to the contact/booking section on the same page. */}
          <Link
            to="contact" // Scrolls to the Contact section
            smooth={true}
            duration={500}
            className="gallery-view-all-button"
          >
            Explore LodgeLink & Book Your Stay
          </Link>
          {/* If you ever implement a separate 'Gallery' page later, this would be a React Router Link */}
          {/* <Link to="/gallery" className="gallery-view-all-button">View Full Gallery</Link> */}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreviewSection;
