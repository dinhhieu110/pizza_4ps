import React, { useContext } from "react";
import "./FoodList.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../fooditem/FoodItem";
const FoodList = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-list" id="food-list">
      <h2>Popular dishes</h2>
      <div className="list">
        {food_list.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodList;
