import React from "react";
import "./MenuItem.css";
const MenuItem = ({ item, index }) => {
  return (
    <div className="explore-menu-item" key={index}>
      <img
        src={item.menu_image}
        alt={item.menu_name}
        width={106}
        height={110}
      />
      <p>{item.menu_name}</p>
    </div>
  );
};

export default MenuItem;
