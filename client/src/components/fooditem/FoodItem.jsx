import React, { useState } from "react";
import "./FoodItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { formatToVND } from "../../utils/util";
const FoodItem = ({ key, id, name, price, image, description, category }) => {
  const [itemCount, setItemCount] = useState(0);

  const handleAddToCart = (id) => {
    console.log("Add to cart clicked", id);
  };
  return (
    <div className="food-item">
      <p>Must try</p>
      <img src={image} alt={`${id}_image`} />
      <p className="item-name">{name}</p>
      <div class="add-item-button" onClick={() => handleAddToCart(id)}>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ color: "#242E52", fontSize: "23px" }}
        />
      </div>
      <p className="item-price">{formatToVND(price)}</p>
    </div>
  );
};

export default FoodItem;
