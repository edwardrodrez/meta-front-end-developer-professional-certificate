import React from "react";
import "./AboutSection.css";
import image2 from "../../../assets/image2.jpg";
import image4 from "../../../assets/image4.jpg";

const AboutSection = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Chicago</h2>
        <p className="about-description">
          Discover the vibrant essence of Little Lemon, nestled amidst Chicago's energetic streets. At Little Lemon, every dish tells a story—a fusion of modern culinary innovation and cherished traditions. From our perfectly toasted bruschettas to our mouthwatering gourmet burgers and crisp, flavorful Greek salads, we craft each plate with the belief that food is not just nourishment but an experience. Join us and indulge in a menu where every bite is a celebration of taste, creativity, and passion.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={image4}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={image2}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default AboutSection;