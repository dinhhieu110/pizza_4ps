import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import MenuItem from "../menuitem/MenuItem";
const ExploreMenu = () => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <MenuItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
