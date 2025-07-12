import React from "react";
import "./GoogleMapEmbed.css"; // Link to its specific CSS file

const GoogleMapEmbed = () => {
  // IMPORTANT: Replace this URL with the actual embed URL from Google Maps.
  // How to get the embed URL:
  // 1. Go to Google Maps (maps.google.com).
  // 2. Search for "LodgeLink Bahir Dar" (or your exact business name/address).
  // 3. Click "Share" (the icon that looks like an arrow pointing right).
  // 4. Go to the "Embed a map" tab.
  // 5. Copy the 'src' value from the <iframe> code provided.
  //    It will look something like: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..."
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.1234567890!2d37.398000!3d11.599000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM1JzU2LjMiTiAzN8KwMjMnNTYuMyJF!5e0!3m2!1sen!2set!4v1678901234567!5m2!1sen!2set";
  // The above URL is a placeholder. You MUST replace it with your hotel's specific embed URL.
  // Make sure your business is properly listed and verified on Google My Business for the best results.

  return (
    <section className="google-map-section">
      <div className="google-map-container">
        <h2 className="section-heading">Find Us on the Map</h2>
        <p className="section-subheading">
          LodgeLink Bahir Dar is conveniently located near key attractions.
          Easily find your way to us.
        </p>
        <div className="map-embed-wrapper">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="LodgeLink Bahir Dar Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapEmbed;
