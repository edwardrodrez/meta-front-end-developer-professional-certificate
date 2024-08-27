import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import image1 from "../../../assets/image1.jpg";

const Hero = () => {
  const navigate = useNavigate();

  const handleReservations = () => {
    navigate("/reservation");
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p>
            Discover the charm of Chicago at Little Lemon. Where modern culinary artistry meets the warmth of tradition. Dive into a menu that celebrates the finest flavors, from handcrafted bruschettas to gourmet burgers, and vibrant Greek salads. Experience a taste that tells a story, where every bite is a masterpiece.
          </p>
          <Button onClick={handleReservations} >Reserve a table</Button>
        </div>
        <img
          className="image"
          src={image1}
          alt="Restaurant"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;