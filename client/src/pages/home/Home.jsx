import React from "react";
import "./Home.css";
import { ExploreMenu, FoodList, Hero } from "../../components";
const Home = () => {
  const [category, setCategory] = React.useState("ALL");
  return (
    <div className="home">
      <Hero />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodList category={category} />
    </div>
  );
};

export default Home;
