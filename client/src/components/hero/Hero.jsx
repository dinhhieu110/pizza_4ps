import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <img className="banner" src={"/hero.jpg"} alt="Hero" />
      <div className="overlay"></div>
      <div className="hero-content">
        <h2>
          Together <br /> Tastes Better
        </h2>
        <p>
          A combo for everyone! Order a combo for yourself or share it with your
          friends and family, one delicious meal at a time.
        </p>
        <button>ORDER NOW</button>
      </div>
    </div>
  );
};

export default Hero;
