import React from "react";
import "./ImageGalleryGrid.css"; // Link to its specific CSS file

const ImageGalleryGrid = ({ images, onImageClick }) => {
  if (!images || images.length === 0) {
    return (
      <section className="image-gallery-section">
        <div className="image-gallery-container">
          <p className="no-images-message">
            No images available for this category yet.
          </p>
        </div>
      </section>
    );
  }
  console.log(images[0].src)

  return (
    <section className="image-gallery-section">
      <div className="image-gallery-container">
        <div className="gallery-grid">
          {images.map((image) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => onImageClick(image)} // Passes the clicked image data up
            >
              <img
                src={image.src}
                alt={image.alt || image.category} // Use alt text or category as fallback
                className="gallery-image"
                loading="lazy" // Crucial for lazy loading and performance
              />
              <div className="gallery-item-overlay">
                <p className="overlay-text">{image.alt || image.category}</p>{" "}
                {/* Shows alt text or category on hover */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGalleryGrid;
