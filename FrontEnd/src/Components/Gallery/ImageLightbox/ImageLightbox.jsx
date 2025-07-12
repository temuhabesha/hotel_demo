import React, { useState, useEffect, useRef, useCallback } from "react";
import "./ImageLightbox.css";

const ImageLightbox = ({ images, initialImage, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const modalRef = useRef(null);

  // Find the index of the initial image when the component mounts
  useEffect(() => {
    const initialIndex = images.findIndex((img) => img.id === initialImage.id);
    if (initialIndex !== -1) {
      setCurrentImageIndex(initialIndex);
    }
  }, [initialImage, images]);

  const currentImage = images?.[currentImageIndex];

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      } else if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToPrevious, goToNext, onClose]);

  if (!currentImage) {
    return null;
  }

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div
        className="lightbox-modal"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="lightbox-close-button" onClick={onClose}>
          &times;
        </button>
        <button className="lightbox-nav-button prev" onClick={goToPrevious}>
          &#10094;
        </button>
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="lightbox-image"
        />
        <button className="lightbox-nav-button next" onClick={goToNext}>
          &#10095;
        </button>
        {currentImage.alt && (
          <div className="lightbox-caption">
            <p>{currentImage.alt}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageLightbox;
