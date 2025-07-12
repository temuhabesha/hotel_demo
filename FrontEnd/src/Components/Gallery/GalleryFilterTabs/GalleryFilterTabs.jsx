import React from "react";
import "./GalleryFilterTabs.css"; // Link to its specific CSS file

const GalleryFilterTabs = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <nav className="gallery-filter-tabs-container">
      <ul className="filter-tabs-list">
        {categories.map((category) => (
          <li key={category}>
            <button
              className={`filter-tab-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default GalleryFilterTabs;
