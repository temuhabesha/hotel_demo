import React from "react";
import RoomCard from "../RoomCard/RoomCard"; // Import the reusable RoomCard component
import { Link } from "react-scroll"; // For the "View All Rooms" button
import "./RoomsPreviewSection.css"; // Link to its specific CSS
import Image1 from '../../../assets/Image/room1.jpg'
import Image2 from "../../../assets/Image/room2.jpg";
import Image3 from "../../../assets/Image/room5.jpg";
import Image4 from "../../../assets/Image/room6.jpg";
import Image5 from "../../../assets/Image/room3.jpg";
import Image6 from "../../../assets/Image/room4.jpg";

const RoomsPreviewSection = () => {
  // Sample Data for your rooms - replace with actual room details and images
  const roomsData = [
    {
      id: 1,
      imageUrl: Image5,
      title: "Standard Double Room",
      features: [
        "King Size Bed",
        "Private Bathroom",
        "Air Conditioning",
        "City View",
      ],
      price: "ETB 1,200/night",
    },
    {
      id: 2,
      imageUrl: Image1,
      title: "Lake View Suite",
      features: [
        "King Size Bed",
        "Spacious Living Area",
        "Balcony with Lake Tana View",
        "Mini-Bar",
      ],
      price: "ETB 2,500/night",
    },
    {
      id: 3,
      imageUrl: Image3,
      title: "Family Room",
      features: [
        "Two Queen Beds",
        "Connecting Rooms Available",
        "Large Bathroom",
        "Garden Access",
      ],
      price: "ETB 1,800/night",
    },
    {
      id: 4,
      imageUrl: Image4,
      title: "Executive Studio",
      features: [
        "Work Desk & Chair",
        "High-Speed Wi-Fi",
        "Complimentary Breakfast",
        "City View",
      ],
      price: "ETB 1,500/night",
    },
  ];

  return (
    // Section container with ID for smooth scrolling navigation
    <section id="rooms" className="rooms-preview-section">
      <div className="rooms-preview-container">
        {/* Section Title */}
        <h2 className="section-title">Our Comfortable Rooms & Suites</h2>

        {/* Brief Description */}
        <p className="section-description">
          Discover a variety of beautifully appointed rooms designed for your
          comfort and convenience, each offering a unique experience during your
          stay in Bahir Dar.
        </p>

        {/* Room Cards Grid */}
        <div className="room-cards-grid">
          {roomsData.map((room) => (
            <RoomCard
              key={room.id}
              imageUrl={room.imageUrl}
              title={room.title}
              features={room.features}
              price={room.price}
            />
          ))}
        </div>

        {/* Call to Action for more rooms or direct booking */}
        <div className="rooms-cta">
          {/* This button encourages the user to interact further,
              scrolling to the contact/booking section on the same page. */}
          <Link
            to="contact" // Scrolls to the Contact section
            smooth={true}
            duration={500}
            className="rooms-view-all-button"
          >
            View All Rooms & Book
          </Link>
          {/* If you ever implement a separate 'Rooms' page later, this would be a React Router Link */}
          {/* <Link to="/rooms" className="rooms-view-all-button">View All Rooms</Link> */}
        </div>
      </div>
    </section>
  );
};

export default RoomsPreviewSection;
