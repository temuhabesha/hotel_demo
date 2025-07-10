import React from "react";
import TestimonialCard from "../TestimonialCard/TestimonialCard"; // Import the reusable TestimonialCard
import "./TestimonialsSection.css"; // Link to its specific CSS

const TestimonialsSection = () => {
  // Sample Data for your testimonials - replace with actual reviews
  const testimonialsData = [
    {
      id: 1,
      name: "Dr. Eleni M.",
      message:
        "LodgeLink Bahir Dar exceeded all my expectations! The rooms were incredibly clean and comfortable, and the staff were exceptionally friendly and helpful. A truly peaceful stay near Lake Tana.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mr. David J.",
      message:
        "Great value for money! The location is perfect for exploring Bahir Dar, and the free Wi-Fi was a lifesaver. I particularly enjoyed the breakfast and the beautiful garden.",
      rating: 4,
    },
    {
      id: 3,
      name: "Mrs. Sofia A.",
      message:
        "Our family had a wonderful time. The service was impeccable, and they went above and beyond to ensure our kids were comfortable. Highly recommend LodgeLink for a memorable trip.",
      rating: 5,
    },
    {
      id: 4,
      name: "Ato Kebede T.",
      message:
        "As a frequent traveler to Bahir Dar, LodgeLink has become my go-to. The quiet ambiance, delicious local food, and convenient airport pickup service make it stand out. Ethiopian hospitality at its best!",
      rating: 5,
    },
  ];

  return (
    // Section container with ID for smooth scrolling navigation
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        {/* Section Title */}
        <h2 className="section-title">What Our Guests Say</h2>

        {/* Testimonial Cards Grid */}
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              message={testimonial.message}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
