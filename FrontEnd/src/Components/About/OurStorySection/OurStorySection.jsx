import React from "react";
import "./OurStorySection.css"; // Link to its specific CSS
import StoryImageUrl from '../../../assets/Image/gallary12.jpg'

const OurStorySection = () => {
  // Replace with your actual hotel establishment year and story details
  const establishmentYear = 2019; // Example year
  const founderQuote =
    "Our dream was to create a sanctuary in Bahir Dar, a place where every guest feels like family, connected to the heart of Ethiopia.";
  const founderName = "Ato Demeke Abera, Founder"; // Example founder

  // Image that embodies your story – could be exterior, a welcoming interior, or a local cultural scene.
  // Replace this URL with an actual high-quality image of LodgeLink Bahir Dar.

  // Example: A cozy lounge area, a traditional Ethiopian coffee ceremony setup, or a welcoming hotel entrance.

  return (
    <section className="our-story-section">
      <div className="our-story-container">
        <h2 className="section-title">Our Story: More Than Just a Stay</h2>

        <div className="story-content-grid">
          <div className="story-text">
            <p>
              Established in **{establishmentYear}**, LodgeLink Bahir Dar was
              founded with a singular vision: to offer travelers a serene
              retreat that perfectly blends modern comfort with the rich
              traditions of Ethiopian hospitality. We believe that a true travel
              experience goes beyond just a place to sleep; it's about genuine
              connections, cultural immersion, and moments of profound peace.
            </p>
            <p>
              Our journey began with a passion for showcasing the unparalleled
              beauty of Bahir Dar – the vibrant culture, the breathtaking
              landscapes, and the serene tranquility of Lake Tana. We
              meticulously designed every aspect of LodgeLink to be an extension
              of this beauty, a 'home away from home' where guests can relax,
              explore, and create lasting memories.
            </p>

            <div className="story-values">
              <h3>Our Core Values:</h3>
              <ul>
                <li>
                  <strong>Genuine Ethiopian Hospitality:</strong> Warm welcomes,
                  attentive service, and a truly caring approach from our local
                  team.
                </li>
                <li>
                  <strong>Pristine Cleanliness:</strong> Meticulous attention to
                  hygiene and comfort in every corner of our lodge.
                </li>
                <li>
                  <strong>Ultimate Guest Comfort:</strong> Thoughtfully designed
                  rooms, modern amenities, and a peaceful ambiance for
                  relaxation.
                </li>
                <li>
                  <strong>Community Engagement:</strong> Supporting local
                  businesses, sourcing regional produce, and embracing our
                  community.
                </li>
                <li>
                  <strong>Respect for Local Culture:</strong> Integrating
                  Ethiopian artistry, cuisine, and traditions into the guest
                  experience.
                </li>
              </ul>
            </div>

            <p className="story-vision">
              **Our Vision:** To be the preferred choice for discerning
              travelers seeking an authentic, comfortable, and memorable
              experience in Bahir Dar, leaving them with a deeper appreciation
              for Ethiopian culture and a desire to return.
            </p>

            {founderQuote && (
              <blockquote className="founder-quote">
                "{founderQuote}"<cite>- {founderName}</cite>
              </blockquote>
            )}
          </div>

          {StoryImageUrl && (
            <div className="story-image-container">
              <img
                src={StoryImageUrl}
                alt="LodgeLink Story"
                className="story-image"
              />
              {/* Optional caption */}
              {/* <p className="image-caption">Our welcoming reception area</p> */}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
