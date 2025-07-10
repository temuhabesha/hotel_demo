import React from "react";
import "./CommonAmenitiesSection.css"; // Link to its specific CSS file

const CommonAmenitiesSection = () => {
  // Define your standard amenities here.
  // You can use emojis for icons or replace them with actual SVG/PNG icons later.
  const commonAmenities = [
    { icon: "📶", name: "Free Wi-Fi" },
    { icon: "❄️", name: "Air Conditioning" },
    { icon: "🚿", name: "Hot Shower" },
    { icon: "📺", name: "Flat-screen TV" },
    { icon: "☕", name: "Coffee/Tea Maker" },
    { icon: "🔒", name: "Safety Deposit Box" },
    { icon: "🧹", name: "Daily Housekeeping" },
    { icon: "📞", name: "Direct Dial Phone" },
  ];

  return (
    <section className="common-amenities-section">
      <div className="common-amenities-container">
        {/* Reusing consistent section title style */}
        <h2 className="section-title">Standard Comforts in Every Room</h2>
        <p className="section-subtitle">
          Enjoy these essential amenities designed for your comfort and
          convenience during your stay at LodgeLink Bahir Dar.
        </p>
        <div className="amenities-grid">
          {commonAmenities.map((amenity, index) => (
            <div key={index} className="amenity-item">
              <span className="amenity-icon">{amenity.icon}</span>
              <p className="amenity-name">{amenity.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonAmenitiesSection;
