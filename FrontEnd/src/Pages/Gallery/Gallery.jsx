// src/pages/GalleryPage.jsx
import React, { useState, useEffect } from "react";
import GalleryBanner from "../../Components/Gallery/GalleryBanner/GalleryBanner";
import GalleryFilterTabs from "../../Components/Gallery/GalleryFilterTabs/GalleryFilterTabs";
import ImageGalleryGrid from "../../Components/Gallery/ImageGalleryGrid/ImageGalleryGrid"; // <-- Import it here
import ImageLightbox from "../../Components/Gallery/ImageLightbox/ImageLightbox"; // <-- Will be next
import GalleryCTA from "../../Components/Gallery/GalleryCTA/GalleryCTA"; // Will be last

import Room1 from '../../assets/Image/room1.jpg'
import Room2 from '../../assets/Image/room3.jpg'
import Room3 from '../../assets/Image/room4.jpg'
import Room4 from '../../assets/Image/room3.jpg'
import Room5 from '../../assets/Image/room5.jpg'
import Room6 from "../../assets/Image/room4.jpg";
import FinalCallToAction from "../../Components/Home/FinalCallToAction/FinalCallToAction";

const GalleryPage = () => {
  // Define all available categories
  const galleryCategories = [
    "All",
    "Rooms",
    "Restaurant",
    "Lobby",
    "Garden",
    "Events / Local Area",
  ];

  // State for the currently selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Full list of all gallery images (populate with your actual LodgeLink images!)
  const allGalleryImages = [
    // Make sure you have diverse, high-quality images here!
    {
      id: "g_room_01",
      src: Room1,
      category: "Rooms",
      alt: "Spacious Deluxe Room Interior",
    },
    {
      id: "g_rest_01",
      src: Room2,
      category: "Restaurant",
      alt: "LodgeLink Restaurant Dining Area",
    },
    {
      id: "g_lobby_01",
      src: Room3,
      category: "Lobby",
      alt: "Elegant Lobby Welcome Area",
    },
    {
      id: "g_garden_01",
      src: Room4,
      category: "Garden",
      alt: "Lush Green Hotel Garden",
    },
    {
      id: "g_room_02",
      src: Room5,
      category: "Rooms",
      alt: "Comfortable Twin Bedroom",
    },
    {
      id: "g_events_01",
      src: Room6,
      category: "Events / Local Area",
      alt: "Hotel Conference Setup",
    },
    {
      id: "g_rest_02",
      src: Room1,
      category: "Restaurant",
      alt: "Outdoor Dining Terrace",
    },
    {
      id: "g_pool_01",
      src: Room2,
      category: "Facilities",
      alt: "Swimming Pool Area",
    }, // New category example
    {
      id: "g_room_03",
      src: Room3,
      category: "Rooms",
      alt: "Modern Bathroom Interior",
    },
    {
      id: "g_local_01",
      src: Room4,
      category: "Events / Local Area",
      alt: "View of Lake Tana",
    },
    // ... add many more images for a rich gallery
  ];

  const [filteredImages, setFilteredImages] = useState([]);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Effect to update filtered images whenever selectedCategory changes or allGalleryImages changes
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(allGalleryImages);
    } else {
      setFilteredImages(
        allGalleryImages.filter((image) => image.category === selectedCategory)
      );
    }
  }, [selectedCategory]); // Depend on selectedCategory and allGalleryImages

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <main>
        <GalleryBanner />
        <GalleryFilterTabs
          categories={galleryCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        <ImageGalleryGrid
          images={filteredImages} // Pass the filtered images
          onImageClick={handleImageClick} // Pass the click handler
        />
        {/* ImageLightbox will be rendered conditionally here */}
        <GalleryCTA id="gallery-cta" />
        <FinalCallToAction />
      </main>

      {isLightboxOpen && selectedImage && (
        <ImageLightbox
          images={filteredImages} // Pass all filtered images for navigation
          initialImage={selectedImage}
          onClose={handleCloseLightbox}
        />
      )}
    </>
  );
};

export default GalleryPage;
