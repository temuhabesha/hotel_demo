import React from "react";
import "./GalleryBanner.css"; // Link to its specific CSS file
import backgroundImage from '../../../assets/Image/gallary9.jpg'

const GalleryBanner = () => {
  // Use a high-quality, inviting image for the gallery banner.
  // This could be a soft-focus shot of your lobby, garden, or a general inviting scene.
  // Replace this URL with an actual image path from your project or a CDN.
  
  // Example: A cozy hotel lounge or a serene garden area.

  return (
    <section
      className="gallery-banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="gallery-banner-overlay"></div>{" "}
      {/* For text readability */}
      <div className="gallery-banner-content">
        <h1 className="gallery-banner-headline">Discover Our Space</h1>
        <p className="gallery-banner-subheadline">
          Step inside LodgeLink and explore our rooms, facilities, and local
          charm.
        </p>
      </div>
    </section>
  );
};

export default GalleryBanner;
