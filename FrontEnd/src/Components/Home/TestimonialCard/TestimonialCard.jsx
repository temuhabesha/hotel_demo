import React from "react";
import "./TestimonialCard.css"; // Link to its specific CSS

const TestimonialCard = ({ name, message, rating }) => {
  // Function to render star icons based on rating
  const renderStars = (numStars) => {
    let stars = "";
    for (let i = 0; i < 5; i++) {
      if (i < numStars) {
        stars += "★"; // Filled star
      } else {
        stars += "☆"; // Empty star (or just render nothing if you prefer)
      }
    }
    return stars;
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-stars">{renderStars(rating)}</div>
      <p className="testimonial-message">"{message}"</p>
      <p className="testimonial-name">- {name}</p>
    </div>
  );
};

export default TestimonialCard;
