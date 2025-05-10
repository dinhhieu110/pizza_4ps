import React from "react";
import "./Home.css";
import { ExploreMenu, Hero } from "../../components";
const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ExploreMenu />
    </div>
  );
};

export default Home;
