import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";
const Hero = () => {
  return (
    <div className="hero">
      <img className="banner" src={"/hero.jpg"} alt="Hero" />
      <div className="overlay"></div>
      <div className="hero-content">
        <h2>Order your favorite food here</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise your
          cravings and elevate your dining experience, one delicious meal at a
          time.
        </p>
        <button>ORDER NOW</button>
      </div>
    </div>
  );
};

export default Hero;
