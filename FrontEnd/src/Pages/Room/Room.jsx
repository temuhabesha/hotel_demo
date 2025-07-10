// src/pages/RoomsPage.jsx
import React, { useState } from "react";
import RoomsHeroSection from "../../Components/Room/RoomsHeroSection/RoomsHeroSection";
import RoomCardsGrid from "../../Components/Room/RoomCardsGrid/RoomCardsGrid";
import RoomDetailsModal from "../../Components/Room/RoomDetailsModal/RoomDetailsModal";
import CommonAmenitiesSection from "../../Components/Room/CommonAmenitiesSection/CommonAmenitiesSection";
import FinalCallToAction from "../../Components/Home/FinalCallToAction/FinalCallToAction";
import Room1 from '../../assets/Image/room1.jpg'
import Room2 from '../../assets/Image/room2.jpg'
import Room3 from '../../assets/Image/room3.jpg'
import Room4 from '../../assets/Image/room4.jpg'
import Room5 from '../../assets/Image/room5.jpg'
import Room6 from '../../assets/Image/room6.jpg'

const RoomsPage = () => {
  // IMPORTANT: Make sure this roomData array is defined here,
  // right inside the RoomsPage component function.
  const roomData = [
    {
      id: "deluxe-queen",
      name: "Deluxe Queen Room",
      price: 95, // USD per night, or ETB if you adjust pricing logic
      previewImage:Room3,
      amenitiesPreview: ["🛌 Queen Bed", "📺 Flat-screen TV", "📶 Free Wi-Fi"],
      description:
        "Our Deluxe Queen rooms offer spacious comfort with a plush queen-size bed, modern decor, and a serene ambiance perfect for solo travelers or couples.",
      fullAmenities: [
        "🛌 Queen Bed",
        "🚿 Hot Shower",
        "❄️ Air Conditioning",
        "☕ Coffee/Tea Maker",
        "🔒 Safety Deposit Box",
        "📺 Satellite TV",
        "📞 Direct Dial Phone",
        "🧺 Mini-bar",
        "💡 Reading Lamps",
      ],
      galleryImages: [Room1,Room3,Room4,
      ],
      occupancy: "2 Adults",
      bedType: "Queen",
      size: "25 sq.m",
      policies: "Check-in: 2 PM, Check-out: 12 PM. Non-smoking room.",
    },
    {
      id: "twin-room",
      name: "Comfort Twin Room",
      price: 80,
      previewImage:Room2,
      amenitiesPreview: ["🛌 2 Single Beds", "🚿 Hot Shower", "❄️ A/C"],
      description:
        "Ideal for friends or colleagues, our Comfort Twin Rooms offer two comfortable single beds with all modern conveniences.",
      fullAmenities: [
        "🛌 2 Single Beds",
        "🚿 Hot Shower",
        "❄️ Air Conditioning",
        "☕ Coffee/Tea Maker",
        "📺 Satellite TV",
        "📞 Direct Dial Phone",
        "🔒 Safety Deposit Box",
      ],
      galleryImages: [Room2,Room5,
      ],
      occupancy: "2 Adults",
      bedType: "2 Single Beds",
      size: "22 sq.m",
      policies: "Check-in: 2 PM, Check-out: 12 PM. Non-smoking room.",
    },
    {
      id: "family-suite",
      name: "Spacious Family Suite",
      price: 150,
      previewImage:Room5,
      amenitiesPreview: ["👨‍👩‍👧‍👦 Sleeps 4", "🛋️ Living Area", "🍽️ Dining Nook"],
      description:
        "Our Family Suite provides ample space and comfort for families, featuring a separate living area, dining nook, and a master bedroom.",
      fullAmenities: [
        "🛌 King Bed + Sofa Bed",
        "🛋️ Separate Living Area",
        "🍽️ Dining Nook",
        "🚿 Hot Shower",
        "❄️ Air Conditioning",
        "☕ Coffee/Tea Maker",
        "🔒 Safety Deposit Box",
        "📺 2 Flat-screen TVs",
        "🧺 Mini-bar",
        "📞 Direct Dial Phone",
        "🌿 Private Balcony",
      ],
      galleryImages: [Room5,Room4,Room6,
      ],
      occupancy: "4 Adults",
      bedType: "King Bed & Sofa Bed",
      size: "50 sq.m",
      policies:
        "Check-in: 2 PM, Check-out: 12 PM. Children welcome. Extra bed available upon request (charge applies).",
    },
    {
      id: "executive-king",
      name: "Executive King Suite",
      price: 180,
      previewImage:Room4,
      amenitiesPreview: ["👑 King Bed", "🌄 Balcony View", "🛁 Bathtub"],
      description:
        "Our top-tier Executive King Suite offers luxurious space, premium amenities, a large balcony with stunning views, and a sophisticated ambiance for the discerning traveler.",
      fullAmenities: [
        "👑 King Bed",
        "🌿 Private Balcony with View",
        "🛁 Bathtub",
        "🚿 Rain Shower",
        "❄️ Air Conditioning",
        "☕ Nespresso Machine",
        "🔒 Safety Deposit Box (Laptop Size)",
        "📺 Smart TV",
        "🧺 Premium Minibar",
        "📞 Direct Dial Phone",
        "👔 Iron & Ironing Board",
        "💼 Work Desk",
      ],
      galleryImages: [Room6,Room5, // Example of a view from balcony
        Room4, // Example of a bathroom
      ],
      occupancy: "2 Adults",
      bedType: "King Bed",
      size: "40 sq.m",
      policies:
        "Check-in: 2 PM, Check-out: 12 PM. Includes complimentary breakfast and airport shuttle.",
    },
  ];

  // State to manage the modal visibility and selected room
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRoom(null); // Clear selected room when closing
  };

  return (
    <>
      <main>
        <RoomsHeroSection />
        {/* Pass the roomData array as the 'rooms' prop */}
        <RoomCardsGrid rooms={roomData} onViewDetails={handleViewDetails} />
        <CommonAmenitiesSection />
        {/* Ensure your FinalCallToAction has an ID if you're using react-scroll */}
        <FinalCallToAction id="final-call-to-action" />
      </main>

      {/* Render the modal only if it's open and a room is selected */}
      {isModalOpen && selectedRoom && (
        <RoomDetailsModal room={selectedRoom} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default RoomsPage;
