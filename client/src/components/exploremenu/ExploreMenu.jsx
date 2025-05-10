import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = () => {
  const [category, setCategory] = React.useState("all");
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            className={`${"explore-menu-item"} ${
              category === item.menu_name ? "active" : ""
            }`}
            key={index}
            onClick={() => setCategory(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              width={135}
              height={130}
              objectFit="contain"
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
